api.controller = function($window, $timeout) {
    /* Widget controller */
    var c = this;

    // ----- Initialization -----
    c.loading = false;
    c.data.user_agent = $window.navigator.userAgent;

    // User analysis
    c.user = {
        account: c.data.accountId !== '',
        loggedIn: c.data.isLoggedIn
    };

    // Selected item tracking
    c.selectedSectionIndex = 0;
    c.selectedSubSectionIndex = -1;
    c.selectedItem = c.data.questionnaire[0];
    c.selectedItem.selected = true;
    c.totalPercentAnswered = 0;

    calculatePercentAnswered();
    console.log(c.data.questionnaire);
    console.log(c.totalPercentAnswered);

    // ----- Hide some questions on init -----
    switch (c.data.org_size) {
        case "small":
            // Hide specific questions for small org
            c.data.questionnaire[0].children[4].hidden = true; // u_backup_auto
            c.data.questionnaire[0].children[5].hidden = true; // u_backup_access
            break;

        case "medium":
            // Hide all but the first question in each subsection
            for (var i = 0; i < c.data.questionnaire[0].children.length; i++) {
                for (var j = 1; j < c.data.questionnaire[0].children[i].children.length; j++) {
                    c.data.questionnaire[0].children[i].children[j].hidden = true;
                }
            }
            break;

        case "large":
        default:
            break;
    }

    // ----- Question answered handler -----
    c.questionAnswered = function(question, index) {
        switch (c.data.org_size) {
            case "small":
                if (question.column_name === "u_backup_data") {
                    var backupAuto = c.data.questionnaire[0].children[4];
                    var backupAccess = c.data.questionnaire[0].children[5];
                    var show = question.value === "yes";

                    backupAuto.hidden = !show;
                    backupAccess.hidden = !show;
                }
                break;

            case "medium":
                if (index === 0) {
                    var showChildren = question.value !== "not_started";
                    c.selectedItem.children.forEach(function(child, i) {
                        if (i > 0) child.hidden = !showChildren;
                    });
                }
                break;

            case "large":
            default:
                break;
        }

        calculatePercentAnswered();
        console.log(c.data.questionnaire);
        console.log(c.totalPercentAnswered);
    };

    // ----- Section selection -----
    c.selectItem = function(sectionIndex, subsectionIndex) {
        console.log("sectionIndex =", sectionIndex, "subsectionIndex =", subsectionIndex);
        c.selectedSectionIndex = sectionIndex;
        c.selectedSubSectionIndex = subsectionIndex;

        if (c.selectedItem) c.selectedItem.selected = false;

        c.selectedItem = (subsectionIndex < 0)
            ? c.data.questionnaire[sectionIndex]
            : c.data.questionnaire[sectionIndex].children[subsectionIndex];

        c.selectedItem.selected = true;
    };

    // ----- Question option definitions -----
    c.questionOptions = {
        boolean: {
            id: "col1",
            label: "",
            value_no_border: "",
            value_bordered: "",
            choices: [
                { value: "yes", displayValue: "Yes" },
                { value: "no", displayValue: "No/Unsure" }
            ]
        },
        state: {
            id: "col1",
            label: "",
            value_no_border: "",
            value_bordered: "",
            choices: [
                { value: "implemented", displayValue: "Implemented" },
                { value: "in_progress", displayValue: "In Progress" },
                { value: "scoped", displayValue: "Scoped" },
                { value: "not_started", displayValue: "Not Started" }
            ]
        }
    };

    // ----- Section toggle -----
    c.toggleSection = function(sectionIndex) {
        var section = c.data.questionnaire[sectionIndex];
        section.expanded = !section.expanded;
    };

    // ----- Navigation helpers -----
    c.isFirst = function() {
        return c.selectedSectionIndex === 0 && c.selectedSubSectionIndex === -1;
    };

    c.isLast = function() {
        var sections = c.data.questionnaire;
        if (!sections || sections.length === 0) return true;

        var sectionIndex = c.selectedSectionIndex;
        var subSectionIndex = c.selectedSubSectionIndex;
        var lastAllowedSectionIndex = sections.length - 2;

        if (sectionIndex > lastAllowedSectionIndex) return true;

        var currentSection = sections[sectionIndex];
        if (currentSection.children && currentSection.children.length > 0) {
            return (
                sectionIndex === lastAllowedSectionIndex &&
                subSectionIndex === currentSection.children.length - 1
            );
        }

        return sectionIndex === lastAllowedSectionIndex && subSectionIndex === -1;
    };

    // ----- Navigation: next -----
    c.next = function() {
        var sections = c.data.questionnaire;
        var sectionIndex = c.selectedSectionIndex;
        var subsectionIndex = c.selectedSubSectionIndex;

        var section = sections[sectionIndex];
        var subsections = (section.children || []).filter(function(child) {
            return child.level === "sub-section";
        });

        if (subsectionIndex === -1 && subsections.length > 0) {
            subsectionIndex = 0;
        } else if (subsectionIndex >= 0 && subsectionIndex < subsections.length - 1) {
            subsectionIndex++;
        } else if (subsectionIndex === subsections.length - 1 || subsections.length === 0) {
            if (sectionIndex < sections.length - 1) {
                sectionIndex++;
                subsectionIndex = -1;
            }
        }

        c.selectItem(sectionIndex, subsectionIndex);
    };

    // ----- Navigation: previous -----
    c.prev = function() {
        var sections = c.data.questionnaire;
        var sectionIndex = c.selectedSectionIndex;
        var subsectionIndex = c.selectedSubSectionIndex;

        var section = sections[sectionIndex];
        var subsections = (section.children || []).filter(function(child) {
            return child.level === "sub-section";
        });

        if (subsectionIndex > 0) {
            subsectionIndex--;
        } else if (subsectionIndex === 0) {
            subsectionIndex = -1;
        } else if (subsectionIndex === -1 && sectionIndex > 0) {
            sectionIndex--;
            var prevSection = sections[sectionIndex];
            var prevSubsections = (prevSection.children || []).filter(function(child) {
                return child.level === "sub-section";
            });
            subsectionIndex = prevSubsections.length > 0 ? prevSubsections.length - 1 : -1;
        }

        c.selectItem(sectionIndex, subsectionIndex);
    };

    c.isSelected = function(index) {
        return c.selectedItemIndex === index;
    };

    c.getTemplate = function() {
        return c.selectedItem.template;
    };

    // ----- Percent calculation -----
    function calculatePercentAnswered() {
        let totalPoints = 0;
        let earnedPoints = 0;

        c.data.questionnaire.forEach(section => {
            if (!section.children || section.children.length === 0) return;

            // Case 1: section has subsections
            if (section.children[0].level === "sub-section") {
                section.children.forEach(subsection => {
                    if (!subsection.children || subsection.children.length === 0) return;

                    const questions = subsection.children.filter(q => q.level === "question" && !q.hidden);
                    let subTotal = 0;
                    let subEarned = 0;

                    questions.forEach(q => {
                        const pts = q.points || 0;
                        subTotal += pts;
                        if (q.value) subEarned += pts;
                    });

                    subsection.percent_answered = subTotal > 0
                        ? Math.round((subEarned / subTotal) * 100)
                        : 0;

                    totalPoints += subTotal;
                    earnedPoints += subEarned;
                });
            }

            // Case 2: section has direct questions
            else if (section.children[0].level === "question") {
                const questions = section.children.filter(q => !q.hidden);
                let secTotal = 0;
                let secEarned = 0;

                questions.forEach(q => {
                    const pts = q.points || 0;
                    secTotal += pts;
                    if (q.value) secEarned += pts;
                });

                section.percent_answered = secTotal > 0
                    ? Math.round((secEarned / secTotal) * 100)
                    : 0;

                totalPoints += secTotal;
                earnedPoints += secEarned;
            }
        });

        c.totalPercentAnswered = totalPoints > 0
            ? Math.round((earnedPoints / totalPoints) * 100)
            : 0;
    }

    // ----- DOM utilities -----
    function waitForElm(selector) {
        return new Promise((resolve, reject) => {
            $(document).ready(() => {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                }

                const observer = new MutationObserver(() => {
                    if (document.querySelector(selector)) {
                        observer.disconnect();
                        resolve(document.querySelector(selector));
                    }
                });

                if (!document.querySelector(selector)) reject(null);

                observer.observe(document, {
                    childList: true,
                    subtree: true
                });
            });
        });
    }

    function addScrollEvent(elm) {
        elm.addEventListener("scroll", function() {
            var statusModal = document.querySelector("#rsc_status");
            var floating = {
                position: "fixed",
                zIndex: "300",
                width: "25%",
                top: "2px"
            };
            var relative = {
                position: "relative",
                width: window.innerWidth <= 991 ? "100vw" : "108%"
            };

            var statusHeight = 500;
            var availableHeight = elm.scrollHeight - statusHeight;
            var overSize = availableHeight - elm.scrollTop - 425;

            statusModal.style.height =
                (overSize < 0 ? statusHeight + overSize : statusHeight) + "px";

            if (elm.scrollTop >= 378 && window.innerWidth > 991) {
                Object.assign(statusModal.style, floating);
            } else {
                Object.assign(statusModal.style, relative);
            }
        });
    }

    function processEvent() {
        waitForElm("div.sp-page-root.page.flex-column.sp-can-animate > section")
            .then(addScrollEvent)
            .catch(() => $timeout(processEvent, 1000));
    }

    processEvent();
};
