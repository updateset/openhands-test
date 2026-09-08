import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6fffd65e87502e10ee0cb848cebb35a0'],
    table: 'sp_css',
    data: {
        css: `@charset "UTF-8";\r
\r
/*! uswds v3.9.0 */\r
/*! uswds v3.9.0 */\r
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r
@keyframes slidein-left {\r
    0% {\r
        transform: translateX(15rem)\r
    }\r
\r
    to {\r
        transform: translateX(0)\r
    }\r
}\r
\r
html {\r
    line-height: 1.15;\r
    -webkit-text-size-adjust: 100%;\r
    box-sizing: border-box;\r
    font-feature-settings: "kern" 1;\r
    font-kerning: normal;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 100% */\r
}\r
\r
body {\r
    margin: 0;\r
    color: #1b1b1b;\r
    background-color: #fff;\r
    overflow-x: hidden\r
}\r
\r
details,\r
main {\r
    display: block\r
}\r
\r
h1 {\r
    /* font-size: 2em; */\r
    margin: .67em 0\r
}\r
\r
hr {\r
    box-sizing: content-box;\r
    height: 0;\r
    overflow: visible\r
}\r
\r
code,\r
kbd,\r
pre,\r
samp {\r
    font-family: monospace, monospace;\r
    /* font-size: 1em */\r
}\r
\r
a {\r
    background-color: transparent\r
}\r
\r
abbr[title] {\r
    border-bottom: none;\r
    -webkit-text-decoration: underline dotted;\r
    text-decoration: underline dotted\r
}\r
\r
b,\r
strong {\r
    font-weight: bolder\r
}\r
\r
small {\r
    /* font-size: 80% */\r
}\r
\r
sub,\r
sup {\r
    /* font-size: 75%; */\r
    line-height: 0;\r
    position: relative;\r
    vertical-align: baseline\r
}\r
\r
sub {\r
    bottom: -.25em\r
}\r
\r
sup {\r
    top: -.5em\r
}\r
\r
img {\r
    border-style: none;\r
    max-width: 100%\r
}\r
\r
button,\r
input,\r
optgroup,\r
select,\r
textarea {\r
    font-family: inherit;\r
    /* font-size: 100%; */\r
    line-height: 1.15;\r
    margin: 0\r
}\r
\r
button,\r
input {\r
    overflow: visible\r
}\r
\r
button,\r
select {\r
    text-transform: none\r
}\r
\r
[type=button],\r
[type=reset],\r
[type=submit],\r
button {\r
    -webkit-appearance: button\r
}\r
\r
[type=button]::-moz-focus-inner,\r
[type=reset]::-moz-focus-inner,\r
[type=submit]::-moz-focus-inner,\r
button::-moz-focus-inner {\r
    border-style: none;\r
    padding: 0\r
}\r
\r
[type=button]:-moz-focusring,\r
[type=reset]:-moz-focusring,\r
[type=submit]:-moz-focusring,\r
button:-moz-focusring {\r
    outline: 1px dotted ButtonText\r
}\r
\r
fieldset {\r
    padding: .35em .75em .625em\r
}\r
\r
legend {\r
    color: inherit;\r
    display: table;\r
    max-width: 100%;\r
    white-space: normal\r
}\r
\r
progress {\r
    vertical-align: baseline\r
}\r
\r
textarea {\r
    overflow: auto\r
}\r
\r
[type=checkbox],\r
[type=radio],\r
legend {\r
    box-sizing: border-box;\r
    padding: 0\r
}\r
\r
[type=number]::-webkit-inner-spin-button,\r
[type=number]::-webkit-outer-spin-button {\r
    height: auto\r
}\r
\r
[type=search] {\r
    -webkit-appearance: textfield;\r
    outline-offset: -2px\r
}\r
\r
[type=search]::-webkit-search-decoration {\r
    -webkit-appearance: none\r
}\r
\r
::-webkit-file-upload-button {\r
    -webkit-appearance: button;\r
    font: inherit\r
}\r
\r
summary {\r
    display: list-item\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked thead,\r
.usa-prose>.width-mobile .usa-table--stacked-header thead,\r
[hidden],\r
template {\r
    display: none\r
}\r
\r
.usa-checkbox__label,\r
.usa-combo-box__input,\r
.usa-combo-box__list,\r
.usa-fieldset,\r
.usa-hint,\r
.usa-input,\r
.usa-input-group,\r
.usa-radio__label,\r
.usa-range,\r
.usa-select,\r
.usa-textarea {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.3\r
}\r
\r
.usa-range,\r
.usa-textarea {\r
    border-radius: 0;\r
    color: #1b1b1b;\r
    display: block;\r
    margin-top: .5rem;\r
    max-width: 30rem;\r
    padding: .5rem\r
}\r
\r
.usa-textarea {\r
    border-width: 1px;\r
    border-color: #565c65;\r
    border-style: solid;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
    width: 100%\r
}\r
\r
.usa-range {\r
    height: 2.5rem\r
}\r
\r
.usa-input-group {\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none\r
}\r
\r
.usa-combo-box__input,\r
.usa-input,\r
.usa-input-group,\r
.usa-select {\r
    border-width: 1px;\r
    border-color: #565c65;\r
    border-style: solid;\r
    border-radius: 0;\r
    color: #1b1b1b;\r
    display: block;\r
    height: 2.5rem;\r
    margin-top: .5rem;\r
    max-width: 30rem;\r
    padding: .5rem;\r
    width: 100%\r
}\r
\r
.usa-input {\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none\r
}\r
\r
@font-face {\r
    font-family: "Roboto Mono Web";\r
    font-style: normal;\r
    font-weight: 300;\r
    font-display: fallback;\r
    src: url(../fonts/roboto-mono/roboto-mono-v5-latin-300.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Roboto Mono Web";\r
    font-style: normal;\r
    font-weight: 400;\r
    font-display: fallback;\r
    src: url(../fonts/roboto-mono/roboto-mono-v5-latin-regular.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Roboto Mono Web";\r
    font-style: normal;\r
    font-weight: 700;\r
    font-display: fallback;\r
    src: url(../fonts/roboto-mono/roboto-mono-v5-latin-700.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Roboto Mono Web";\r
    font-style: italic;\r
    font-weight: 300;\r
    font-display: fallback;\r
    src: url(../fonts/roboto-mono/roboto-mono-v5-latin-300italic.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Roboto Mono Web";\r
    font-style: italic;\r
    font-weight: 400;\r
    font-display: fallback;\r
    src: url(../fonts/roboto-mono/roboto-mono-v5-latin-italic.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Roboto Mono Web";\r
    font-style: italic;\r
    font-weight: 700;\r
    font-display: fallback;\r
    src: url(../fonts/roboto-mono/roboto-mono-v5-latin-700italic.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Source Sans Pro Web";\r
    font-style: normal;\r
    font-weight: 300;\r
    font-display: fallback;\r
    src: url(../fonts/source-sans-pro/sourcesanspro-light-webfont.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Source Sans Pro Web";\r
    font-style: normal;\r
    font-weight: 400;\r
    font-display: fallback;\r
    src: url(../fonts/source-sans-pro/sourcesanspro-regular-webfont.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Source Sans Pro Web";\r
    font-style: normal;\r
    font-weight: 700;\r
    font-display: fallback;\r
    src: url(../fonts/source-sans-pro/sourcesanspro-bold-webfont.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Source Sans Pro Web";\r
    font-style: italic;\r
    font-weight: 300;\r
    font-display: fallback;\r
    src: url(../fonts/source-sans-pro/sourcesanspro-lightitalic-webfont.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Source Sans Pro Web";\r
    font-style: italic;\r
    font-weight: 400;\r
    font-display: fallback;\r
    src: url(../fonts/source-sans-pro/sourcesanspro-italic-webfont.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Source Sans Pro Web";\r
    font-style: italic;\r
    font-weight: 700;\r
    font-display: fallback;\r
    src: url(../fonts/source-sans-pro/sourcesanspro-bolditalic-webfont.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Merriweather Web";\r
    font-style: normal;\r
    font-weight: 300;\r
    font-display: fallback;\r
    src: url(../fonts/merriweather/Latin-Merriweather-Light.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Merriweather Web";\r
    font-style: normal;\r
    font-weight: 400;\r
    font-display: fallback;\r
    src: url(../fonts/merriweather/Latin-Merriweather-Regular.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Merriweather Web";\r
    font-style: normal;\r
    font-weight: 700;\r
    font-display: fallback;\r
    src: url(../fonts/merriweather/Latin-Merriweather-Bold.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Merriweather Web";\r
    font-style: italic;\r
    font-weight: 300;\r
    font-display: fallback;\r
    src: url(../fonts/merriweather/Latin-Merriweather-LightItalic.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Merriweather Web";\r
    font-style: italic;\r
    font-weight: 400;\r
    font-display: fallback;\r
    src: url(../fonts/merriweather/Latin-Merriweather-Italic.woff2)format("woff2")\r
}\r
\r
@font-face {\r
    font-family: "Merriweather Web";\r
    font-style: italic;\r
    font-weight: 700;\r
    font-display: fallback;\r
    src: url(../fonts/merriweather/Latin-Merriweather-BoldItalic.woff2)format("woff2")\r
}\r
\r
button:not([disabled]):focus,\r
input:not([disabled]):focus,\r
select:not([disabled]):focus,\r
textarea:not([disabled]):focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
[contentEditable=true]:focus,\r
[href]:focus,\r
[tabindex]:focus,\r
iframe:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-media-link {\r
    display: inline-block;\r
    line-height: 0\r
}\r
\r
*,\r
::after,\r
::before {\r
    box-sizing: inherit\r
}\r
\r
address,\r
cite,\r
dfn,\r
var {\r
    font-style: normal\r
}\r
\r
.usa-focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-sr-only {\r
    position: absolute;\r
    left: -999em;\r
    right: auto\r
}\r
\r
.usa-content ol:not(.usa-accordion):not(.usa-accordion--bordered),\r
.usa-content p,\r
.usa-content ul:not(.usa-accordion):not(.usa-accordion--bordered) {\r
    max-width: 68ex\r
}\r
\r
.usa-dark-background {\r
    background-color: #3d4551\r
}\r
\r
.usa-dark-background p,\r
.usa-dark-background span {\r
    color: #fff\r
}\r
\r
.usa-dark-background a,\r
.usa-dark-background a:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-dark-background a:active,\r
.usa-dark-background a:hover {\r
    color: #f0f0f0\r
}\r
\r
.usa-display {\r
    margin-top: 0;\r
    clear: both;\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem; */\r
    line-height: 1.2;\r
    font-weight: 700;\r
    margin-bottom: 0\r
}\r
\r
*+.usa-display {\r
    margin-top: 1.5em\r
}\r
\r
.usa-display+* {\r
    margin-top: 1em\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-display {\r
        margin-bottom: 0;\r
        margin-top: 0;\r
        clear: both;\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.44rem; */\r
        line-height: 1.2;\r
        font-weight: 700\r
    }\r
\r
    *+.usa-display {\r
        margin-top: 1.5em\r
    }\r
\r
    .usa-display+* {\r
        margin-top: 1em\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-display {\r
        margin-bottom: 0;\r
        margin-top: 0;\r
        clear: both;\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.93rem; */\r
        line-height: 1.2;\r
        font-weight: 700\r
    }\r
\r
    *+.usa-display {\r
        margin-top: 1.5em\r
    }\r
\r
    .usa-display+* {\r
        margin-top: 1em\r
    }\r
}\r
\r
.usa-intro {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem; */\r
    line-height: 1.8;\r
    font-weight: 400;\r
    max-width: 88ex\r
}\r
\r
.usa-icon {\r
    display: inline-block;\r
    fill: currentColor;\r
    height: 1em;\r
    position: relative;\r
    width: 1em\r
}\r
\r
.usa-icon--size-3 {\r
    height: 1.5rem;\r
    width: 1.5rem\r
}\r
\r
.usa-icon--size-4 {\r
    height: 2rem;\r
    width: 2rem\r
}\r
\r
.usa-icon--size-5 {\r
    height: 2.5rem;\r
    width: 2.5rem\r
}\r
\r
.usa-icon--size-6 {\r
    height: 3rem;\r
    width: 3rem\r
}\r
\r
.usa-icon--size-7 {\r
    height: 3.5rem;\r
    width: 3.5rem\r
}\r
\r
.usa-icon--size-8 {\r
    height: 4rem;\r
    width: 4rem\r
}\r
\r
.usa-icon--size-9 {\r
    height: 4.5rem;\r
    width: 4.5rem\r
}\r
\r
.usa-footer__return-to-top a,\r
.usa-footer__secondary-link a,\r
.usa-link {\r
    color: #005ea2;\r
    text-decoration: underline\r
}\r
\r
.usa-link:visited {\r
    color: #54278f\r
}\r
\r
.usa-link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-link:active {\r
    color: #162e51\r
}\r
\r
.usa-link:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-link--external,\r
.usa-link--external.usa-link--alt {\r
    display: inline\r
}\r
\r
.usa-link--external::before {\r
    position: absolute;\r
    left: -999em;\r
    right: auto;\r
    content: "External."\r
}\r
\r
.usa-link--external.usa-link--alt[target=_blank]::before,\r
.usa-link--external[target=_blank]::before {\r
    position: absolute;\r
    left: -999em;\r
    right: auto;\r
    content: "External, opens in a new tab."\r
}\r
\r
.usa-link--external::after {\r
    background-image: url(../img/usa-icons/launch.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 1.75ex 1.75ex;\r
    height: 1.75ex;\r
    width: 1.75ex;\r
    content: "";\r
    display: inline;\r
    margin-top: .7ex;\r
    margin-left: 2px;\r
    padding-left: 1.75ex;\r
    vertical-align: middle\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-link--external::after {\r
        background: 0 0;\r
        background-color: currentColor;\r
        -webkit-mask-image: url(../img/usa-icons/launch.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/launch.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 1.75ex 1.75ex;\r
        mask-size: 1.75ex 1.75ex\r
    }\r
}\r
\r
.usa-link--external.usa-link--alt::before {\r
    position: absolute;\r
    left: -999em;\r
    right: auto;\r
    content: "External."\r
}\r
\r
.usa-link--external.usa-link--alt::after {\r
    background-image: url(../img/usa-icons-bg/launch--white.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 1.75ex 1.75ex;\r
    height: 1.75ex;\r
    width: 1.75ex;\r
    content: "";\r
    display: inline;\r
    margin-top: .7ex;\r
    margin-left: 2px;\r
    padding-left: 1.75ex;\r
    vertical-align: middle\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-link--external.usa-link--alt::after {\r
        background: 0 0;\r
        background-color: currentColor;\r
        -webkit-mask-image: url(../img/usa-icons/launch.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/launch.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 1.75ex 1.75ex;\r
        mask-size: 1.75ex 1.75ex\r
    }\r
}\r
\r
.usa-list {\r
    margin-bottom: 1em;\r
    margin-top: 1em;\r
    line-height: 1.5;\r
    padding-left: 3ch\r
}\r
\r
.usa-list li:last-child,\r
.usa-list:last-child,\r
.usa-prose>ol li:last-child,\r
.usa-prose>ol:last-child,\r
.usa-prose>ul li:last-child,\r
.usa-prose>ul:last-child {\r
    margin-bottom: 0\r
}\r
\r
.usa-list ol,\r
.usa-list ul,\r
.usa-prose>ol ol,\r
.usa-prose>ol ul,\r
.usa-prose>ul ol,\r
.usa-prose>ul ul {\r
    margin-top: .25em\r
}\r
\r
.usa-list li,\r
.usa-prose>ol li,\r
.usa-prose>ul li {\r
    margin-bottom: .25em;\r
    max-width: 68ex\r
}\r
\r
.usa-list--unstyled,\r
.usa-prose .usa-list--unstyled {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0\r
}\r
\r
.usa-accordion>li,\r
.usa-breadcrumb__list>li,\r
.usa-collection__item>li,\r
.usa-collection__meta>li,\r
.usa-icon-list>li,\r
.usa-in-page-nav__list>li,\r
.usa-language__submenu-list>li,\r
.usa-language__submenu>li,\r
.usa-list--unstyled>li,\r
.usa-paragraph,\r
.usa-prose .usa-collection__item>li,\r
.usa-prose .usa-icon-list>li,\r
.usa-prose .usa-list--unstyled>li {\r
    margin-bottom: 0;\r
    max-width: unset\r
}\r
\r
.usa-paragraph {\r
    line-height: 1.5;\r
    max-width: 68ex;\r
    margin-top: 0\r
}\r
\r
*+.usa-paragraph,\r
.usa-paragraph+* {\r
    margin-top: 1em\r
}\r
\r
.usa-prose,\r
.usa-prose>table,\r
.usa-prose>table caption,\r
.usa-table caption {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
.usa-prose>ol,\r
.usa-prose>ul {\r
    margin-bottom: 1em;\r
    margin-top: 1em;\r
    line-height: 1.5;\r
    padding-left: 3ch\r
}\r
\r
.usa-prose>table,\r
.usa-prose>table caption,\r
.usa-table caption {\r
    text-align: left\r
}\r
\r
.usa-prose,\r
.usa-prose>table {\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5\r
}\r
\r
.usa-prose>table {\r
    border-collapse: collapse;\r
    border-spacing: 0;\r
    color: #1b1b1b;\r
    margin: 1.25rem 0\r
}\r
\r
.usa-prose>table thead th {\r
    background-clip: padding-box;\r
    font-weight: 700;\r
    line-height: 1.3\r
}\r
\r
.usa-prose>table thead td,\r
.usa-prose>table thead th {\r
    background-color: #dfe1e2;\r
    color: #1b1b1b\r
}\r
\r
.usa-prose>table tbody th {\r
    text-align: left\r
}\r
\r
.usa-prose>table td,\r
.usa-prose>table th,\r
.usa-table td,\r
.usa-table th {\r
    background-color: #fff;\r
    border: 1px solid #1b1b1b;\r
    font-weight: 400;\r
    padding: .5rem 1rem\r
}\r
\r
.usa-prose>table caption,\r
.usa-table caption {\r
    /* font-size: 1rem; */\r
    font-weight: 700;\r
    margin-bottom: .75rem\r
}\r
\r
.usa-prose>table th[data-sortable] {\r
    padding-right: 2.5rem;\r
    position: relative\r
}\r
\r
.usa-prose>table th[data-sortable]::after {\r
    border-bottom-color: transparent;\r
    border-bottom-style: solid;\r
    border-bottom-width: 1px;\r
    bottom: 0;\r
    content: "";\r
    height: 0;\r
    left: 0;\r
    position: absolute;\r
    width: 100%\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button {\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    padding: 0;\r
    width: auto;\r
    height: 2rem;\r
    width: 2rem;\r
    background-position: center center;\r
    background-size: 1.5rem;\r
    color: #71767a;\r
    cursor: pointer;\r
    display: inline-block;\r
    margin: 0;\r
    position: absolute;\r
    right: .25rem;\r
    text-align: center;\r
    text-decoration: none;\r
    top: 50%;\r
    transform: translate(0, -50%)\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:visited,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:hover {\r
    color: #1a4480\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:active {\r
    color: #162e51\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:focus,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--active,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--disabled,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--hover,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:active,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled.usa-button--active,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled.usa-button--hover,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled.usa-focus,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:active,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:focus,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:active,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--disabled,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled.usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled.usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled.usa-focus,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:focus,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled,\r
    .usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:hover,\r
    .usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true],\r
    .usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:hover,\r
    .usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled,\r
    .usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:hover,\r
    .usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true],\r
    .usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    vertical-align: middle\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon>g,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button .usa-icon>g,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon>g,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button .usa-icon>g {\r
    fill: transparent\r
}\r
\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon>g.unsorted,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button .usa-icon>g.unsorted {\r
    fill: #1b1b1b\r
}\r
\r
.usa-prose>.usa-table--borderless thead th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover .usa-icon>g.unsorted,\r
.usa-prose>table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover .usa-icon>g.unsorted,\r
.usa-prose>table th[data-sortable][aria-sort=none] .usa-table__header__button:hover .usa-icon>g.unsorted,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover .usa-icon>g.unsorted,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:hover .usa-icon>g.unsorted {\r
    fill: #000\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending],\r
.usa-prose>table th[data-sortable][aria-sort=descending] {\r
    background-color: #97d4ea\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button {\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    padding: 0;\r
    width: auto;\r
    height: 2rem;\r
    width: 2rem;\r
    background-position: center center;\r
    background-size: 1.5rem;\r
    color: #71767a;\r
    cursor: pointer;\r
    display: inline-block;\r
    margin: 0;\r
    position: absolute;\r
    right: .25rem;\r
    text-align: center;\r
    text-decoration: none;\r
    top: 50%;\r
    transform: translate(0, -50%)\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:hover {\r
    color: #1a4480\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:active {\r
    color: #162e51\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--disabled,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:active,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled.usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled.usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled.usa-focus,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:active,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:focus,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:hover,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:active,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled,\r
    .usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:hover,\r
    .usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true],\r
    .usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    vertical-align: middle\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button .usa-icon>g,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button .usa-icon>g,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button .usa-icon>g,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button .usa-icon>g {\r
    fill: transparent\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button .usa-icon>g.ascending,\r
.usa-prose>table th[data-sortable][aria-sort=descending] .usa-table__header__button .usa-icon>g.descending {\r
    fill: #1b1b1b\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:hover {\r
    color: #1a4480\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:active {\r
    color: #162e51\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--disabled,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:active,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled.usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled.usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled.usa-focus,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:active,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:focus,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:hover,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:active,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:hover,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true],\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled,\r
    .usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:hover,\r
    .usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true],\r
    .usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-prose>table th[data-sortable][aria-sort=ascending] .usa-table__header__button .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    vertical-align: middle\r
}\r
\r
.usa-prose>table thead th[aria-sort] {\r
    background-color: #97d4ea;\r
    color: #1b1b1b\r
}\r
\r
.usa-prose>table td[data-sort-active],\r
.usa-prose>table th[data-sort-active] {\r
    background-color: #e1f3f8;\r
    color: #1b1b1b\r
}\r
\r
.usa-prose>.usa-table--borderless thead th {\r
    background-color: #fff;\r
    border-top: 0;\r
    color: #1b1b1b\r
}\r
\r
.usa-prose>.usa-table--borderless thead th[aria-sort] {\r
    color: #1b1b1b\r
}\r
\r
.usa-prose>.usa-table--borderless thead th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon>g.unsorted,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon>g.unsorted,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button .usa-icon>g.unsorted,\r
.usa-table--borderless thead th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon>g.unsorted {\r
    fill: #1b1b1b\r
}\r
\r
.usa-prose>.usa-table--borderless td,\r
.usa-prose>.usa-table--borderless th,\r
.usa-table--borderless td,\r
.usa-table--borderless th {\r
    border-left: 0;\r
    border-right: 0\r
}\r
\r
.usa-prose>.usa-table--compact td,\r
.usa-prose>.usa-table--compact th,\r
.usa-table--compact td,\r
.usa-table--compact th {\r
    padding: .25rem .75rem\r
}\r
\r
.usa-prose>.usa-table--striped tbody tr:nth-child(odd) td,\r
.usa-prose>.usa-table--striped tbody tr:nth-child(odd) th,\r
.usa-table--striped tbody tr:nth-child(odd) td,\r
.usa-table--striped tbody tr:nth-child(odd) th {\r
    background-color: #f0f0f0;\r
    color: #1b1b1b\r
}\r
\r
.usa-prose>.usa-table--striped tbody tr:nth-child(odd) td[data-sort-active],\r
.usa-prose>.usa-table--striped tbody tr:nth-child(odd) th[data-sort-active] {\r
    background-color: #c3ebfa;\r
    color: #1b1b1b\r
}\r
\r
@media all and (max-width:29.99em) {\r
\r
    .usa-prose>.usa-table--stacked thead,\r
    .usa-prose>.usa-table--stacked-header thead {\r
        display: none\r
    }\r
\r
    .usa-prose>.usa-table--stacked td,\r
    .usa-prose>.usa-table--stacked th,\r
    .usa-prose>.usa-table--stacked-header td,\r
    .usa-prose>.usa-table--stacked-header th {\r
        border-bottom-width: 0;\r
        display: block;\r
        width: 100%\r
    }\r
\r
    .usa-prose>.usa-table--stacked tr,\r
    .usa-prose>.usa-table--stacked-header tr {\r
        border-bottom: .25rem solid #1b1b1b;\r
        border-top-width: 0;\r
        width: 100%\r
    }\r
\r
    .usa-prose>.usa-table--stacked tr td:first-child,\r
    .usa-prose>.usa-table--stacked tr th:first-child {\r
        border-top-width: 0\r
    }\r
\r
    .usa-prose>.usa-table--stacked tr:nth-child(odd) td,\r
    .usa-prose>.usa-table--stacked tr:nth-child(odd) th {\r
        background-color: inherit\r
    }\r
\r
    .usa-prose>.usa-table--stacked tr:first-child td:first-child,\r
    .usa-prose>.usa-table--stacked tr:first-child th:first-child,\r
    .usa-prose>.usa-table--stacked-header tr:first-child td:first-child,\r
    .usa-prose>.usa-table--stacked-header tr:first-child th:first-child {\r
        border-top: .25rem solid #1b1b1b\r
    }\r
\r
    .usa-prose>.usa-table--stacked td[data-label],\r
    .usa-prose>.usa-table--stacked th[data-label],\r
    .usa-prose>.usa-table--stacked-header td[data-label],\r
    .usa-prose>.usa-table--stacked-header th[data-label] {\r
        padding-bottom: .75rem\r
    }\r
\r
    .usa-prose>.usa-table--stacked td[data-label]:before,\r
    .usa-prose>.usa-table--stacked th[data-label]:before {\r
        content: attr(data-label);\r
        display: block;\r
        font-weight: 700;\r
        margin: -.5rem -1rem 0;\r
        padding: .75rem 1rem .25rem\r
    }\r
\r
    .usa-prose>.usa-table--stacked-header tr td:first-child,\r
    .usa-prose>.usa-table--stacked-header tr th:first-child {\r
        border-top-width: 0\r
    }\r
\r
    .usa-prose>.usa-table--stacked-header tr:nth-child(odd) td,\r
    .usa-prose>.usa-table--stacked-header tr:nth-child(odd) th {\r
        background-color: inherit\r
    }\r
\r
    .usa-prose>.usa-table--stacked-header td[data-label]:before,\r
    .usa-prose>.usa-table--stacked-header th[data-label]:before {\r
        content: attr(data-label);\r
        display: block;\r
        font-weight: 700;\r
        margin: -.5rem -1rem 0;\r
        padding: .75rem 1rem .25rem\r
    }\r
\r
    .usa-prose>.usa-table--stacked-header tr td:first-child,\r
    .usa-prose>.usa-table--stacked-header tr th:first-child {\r
        font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
        /* font-size: 1.06rem; */\r
        line-height: 1.1;\r
        background-color: #dfe1e2;\r
        color: #1b1b1b;\r
        font-weight: 700;\r
        padding: .75rem 1rem\r
    }\r
\r
    .usa-prose>.usa-table--stacked-header tr td:first-child:before,\r
    .usa-prose>.usa-table--stacked-header tr th:first-child:before {\r
        display: none\r
    }\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked td,\r
.usa-prose>.width-mobile .usa-table--stacked th,\r
.usa-prose>.width-mobile .usa-table--stacked-header td,\r
.usa-prose>.width-mobile .usa-table--stacked-header th {\r
    border-bottom-width: 0;\r
    display: block;\r
    width: 100%\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked tr,\r
.usa-prose>.width-mobile .usa-table--stacked-header tr,\r
.width-mobile .usa-table--stacked tr,\r
.width-mobile .usa-table--stacked-header tr {\r
    border-bottom: .25rem solid #1b1b1b;\r
    border-top-width: 0;\r
    width: 100%\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked tr td:first-child,\r
.usa-prose>.width-mobile .usa-table--stacked tr th:first-child {\r
    border-top-width: 0\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked tr:nth-child(odd) td,\r
.usa-prose>.width-mobile .usa-table--stacked tr:nth-child(odd) th {\r
    background-color: inherit\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked tr:first-child td:first-child,\r
.usa-prose>.width-mobile .usa-table--stacked tr:first-child th:first-child,\r
.usa-prose>.width-mobile .usa-table--stacked-header tr:first-child td:first-child,\r
.usa-prose>.width-mobile .usa-table--stacked-header tr:first-child th:first-child {\r
    border-top: .25rem solid #1b1b1b\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked td[data-label],\r
.usa-prose>.width-mobile .usa-table--stacked th[data-label],\r
.usa-prose>.width-mobile .usa-table--stacked-header td[data-label],\r
.usa-prose>.width-mobile .usa-table--stacked-header th[data-label] {\r
    padding-bottom: .75rem\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked td[data-label]:before,\r
.usa-prose>.width-mobile .usa-table--stacked th[data-label]:before {\r
    content: attr(data-label);\r
    display: block;\r
    font-weight: 700;\r
    margin: -.5rem -1rem 0;\r
    padding: .75rem 1rem .25rem\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked-header tr td:first-child,\r
.usa-prose>.width-mobile .usa-table--stacked-header tr th:first-child {\r
    border-top-width: 0\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked-header tr:nth-child(odd) td,\r
.usa-prose>.width-mobile .usa-table--stacked-header tr:nth-child(odd) th {\r
    background-color: inherit\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked-header td[data-label]:before,\r
.usa-prose>.width-mobile .usa-table--stacked-header th[data-label]:before {\r
    content: attr(data-label);\r
    display: block;\r
    font-weight: 700;\r
    margin: -.5rem -1rem 0;\r
    padding: .75rem 1rem .25rem\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked-header tr td:first-child,\r
.usa-prose>.width-mobile .usa-table--stacked-header tr th:first-child {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.1;\r
    background-color: #dfe1e2;\r
    color: #1b1b1b;\r
    font-weight: 700;\r
    padding: .75rem 1rem\r
}\r
\r
.usa-prose>.width-mobile .usa-table--stacked-header tr td:first-child:before,\r
.usa-prose>.width-mobile .usa-table--stacked-header tr th:first-child:before {\r
    display: none\r
}\r
\r
.usa-prose>.usa-table-container--scrollable {\r
    margin: 1.25rem 0;\r
    overflow-y: hidden\r
}\r
\r
.usa-prose>.usa-table-container--scrollable .usa-table {\r
    margin: 0\r
}\r
\r
.usa-prose>.usa-table-container--scrollable td {\r
    white-space: nowrap\r
}\r
\r
.usa-prose>p {\r
    line-height: 1.5;\r
    max-width: 68ex\r
}\r
\r
.usa-prose>h1,\r
.usa-prose>h2,\r
.usa-prose>h3,\r
.usa-prose>h4,\r
.usa-prose>h5,\r
.usa-prose>h6 {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    clear: both\r
}\r
\r
.usa-prose>*+* {\r
    margin-top: 1em;\r
    margin-bottom: 0\r
}\r
\r
.usa-prose>*+h1,\r
.usa-prose>*+h2,\r
.usa-prose>*+h3,\r
.usa-prose>*+h4,\r
.usa-prose>*+h5,\r
.usa-prose>*+h6 {\r
    margin-top: 1.5em\r
}\r
\r
.usa-prose>h1,\r
.usa-prose>h2,\r
.usa-prose>h3,\r
.usa-prose>h4,\r
.usa-prose>h5 {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 2.44rem; */\r
    line-height: 1.2;\r
    font-weight: 700\r
}\r
\r
.usa-prose>h2,\r
.usa-prose>h3,\r
.usa-prose>h4,\r
.usa-prose>h5 {\r
    /* font-size: 1.95rem */\r
}\r
\r
.usa-prose>h3,\r
.usa-prose>h4,\r
.usa-prose>h5 {\r
    /* font-size: 1.34rem */\r
}\r
\r
.usa-prose>h4,\r
.usa-prose>h5 {\r
    /* font-size: .98rem */\r
}\r
\r
.usa-prose>h5 {\r
    /* font-size: .91rem */\r
}\r
\r
.usa-accordion,\r
.usa-prose>h6 {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
.usa-prose>h6 {\r
    /* font-size: .87rem; */\r
    line-height: 1.1;\r
    font-weight: 400;\r
    letter-spacing: .025em;\r
    text-transform: uppercase\r
}\r
\r
.usa-accordion {\r
    list-style-type: none;\r
    color: #1b1b1b;\r
    margin: 0;\r
    padding: 0;\r
    width: 100%;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5\r
}\r
\r
.usa-accordion>ul li ul {\r
    list-style: disc\r
}\r
\r
.usa-accordion>ul li ul>li>ul {\r
    list-style: circle\r
}\r
\r
.usa-accordion>ul li ul>li>ul>li>ul {\r
    list-style: square\r
}\r
\r
.usa-accordion+.usa-accordion,\r
.usa-accordion+.usa-accordion--bordered {\r
    margin-top: .5rem\r
}\r
\r
.usa-accordion--bordered .usa-accordion__content {\r
    border-bottom: .25rem solid #f0f0f0;\r
    border-left: .25rem solid #f0f0f0;\r
    border-right: .25rem solid #f0f0f0;\r
    padding-bottom: 1rem\r
}\r
\r
.usa-accordion--bordered .usa-accordion__heading {\r
    margin-bottom: 0\r
}\r
\r
.usa-accordion__heading,\r
.usa-prose .usa-accordion__heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: .9;\r
    margin: 0\r
}\r
\r
.usa-accordion__heading:not(:first-child),\r
.usa-prose .usa-accordion__heading:not(:first-child) {\r
    margin-top: .5rem\r
}\r
\r
.usa-accordion__content {\r
    color: #1b1b1b;\r
    background-color: #fff;\r
    margin-top: 0;\r
    overflow: auto;\r
    padding: 1rem 1.25rem calc(1rem - .25rem)\r
}\r
\r
.usa-accordion__content>:first-child {\r
    margin-top: 0\r
}\r
\r
.usa-accordion__content>:last-child {\r
    margin-bottom: 0\r
}\r
\r
.usa-accordion__button {\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    justify-content: normal;\r
    text-align: left;\r
    padding: 0;\r
    color: #1b1b1b;\r
    background-color: #f0f0f0;\r
    // background-image: url(../img/usa-icons/remove.svg), linear-gradient(transparent, transparent);\r
    // background-repeat: no-repeat;\r
    // background-position: right 1.25rem center;\r
    // background-size: 1.5rem;\r
    // cursor: pointer;\r
    display: inline-block;\r
    font-weight: 700;\r
    margin: 0;\r
    padding: 1rem 3.5rem 1rem 1.25rem;\r
    text-decoration: none;\r
    width: 100%\r
}\r
\r
.usa-accordion__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-accordion__button:active {\r
    color: #162e51\r
}\r
\r
.usa-accordion__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-accordion__button.usa-button--active,\r
.usa-accordion__button.usa-button--disabled,\r
.usa-accordion__button.usa-button--hover,\r
.usa-accordion__button:active,\r
.usa-accordion__button:disabled,\r
.usa-accordion__button:disabled.usa-button--active,\r
.usa-accordion__button:disabled.usa-button--hover,\r
.usa-accordion__button:disabled.usa-focus,\r
.usa-accordion__button:disabled:active,\r
.usa-accordion__button:disabled:focus,\r
.usa-accordion__button:disabled:hover,\r
.usa-accordion__button:hover,\r
.usa-accordion__button[aria-disabled=true],\r
.usa-accordion__button[aria-disabled=true].usa-button--active,\r
.usa-accordion__button[aria-disabled=true].usa-button--hover,\r
.usa-accordion__button[aria-disabled=true].usa-focus,\r
.usa-accordion__button[aria-disabled=true]:active,\r
.usa-accordion__button[aria-disabled=true]:focus,\r
.usa-accordion__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-accordion__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-accordion__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-accordion__button:disabled,\r
.usa-accordion__button:disabled:hover,\r
.usa-accordion__button[aria-disabled=true],\r
.usa-accordion__button[aria-disabled=true]:focus,\r
.usa-accordion__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-accordion__button:disabled,\r
    .usa-accordion__button:disabled:hover,\r
    .usa-accordion__button[aria-disabled=true],\r
    .usa-accordion__button[aria-disabled=true]:focus,\r
    .usa-accordion__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-accordion__button:hover {\r
    color: #1b1b1b;\r
    background-color: #dfe1e2;\r
    // background-image: url(../img/usa-icons/remove.svg), linear-gradient(transparent, transparent);\r
    // background-repeat: no-repeat;\r
    text-decoration: none\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-accordion__button {\r
        border: 2px solid transparent;\r
        position: relative\r
    }\r
\r
    .usa-accordion__button::before {\r
        // background-image: url(../img/usa-icons/remove.svg);\r
        // background-repeat: no-repeat;\r
        // background-position: center center;\r
        // background-size: 1.5rem 1.5rem;\r
        display: inline-block;\r
        height: 1.5rem;\r
        width: 1.5rem;\r
        height: 100%;\r
        position: absolute;\r
        right: 1.25rem;\r
        top: 0;\r
        content: ""\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-accordion__button::before {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            // -webkit-mask-image: url(uswds_remove.svg), linear-gradient(transparent, transparent);\r
            // mask-image: url(uswds_remove.svg), linear-gradient(transparent, transparent);\r
            // -webkit-mask-position: center center;\r
            // mask-position: center center;\r
            // -webkit-mask-repeat: no-repeat;\r
            // mask-repeat: no-repeat;\r
            // -webkit-mask-size: 1.5rem 1.5rem;\r
            // mask-size: 1.5rem 1.5rem\r
        }\r
    }\r
}\r
\r
.usa-accordion__button[aria-expanded=false] {\r
    background-size: 1.5rem\r
}\r
\r
.usa-accordion__button[aria-expanded=false],\r
.usa-accordion__button[aria-expanded=false]:hover {\r
    // background-image: url(../img/usa-icons/add.svg), linear-gradient(transparent, transparent);\r
    // background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
    // .usa-accordion__button[aria-expanded=false]::before {\r
    // background-image: url(../img/usa-icons/add.svg);\r
    // background-repeat: no-repeat;\r
    // background-position: center center;\r
    // background-size: 1.5rem 1.5rem;\r
    // display: inline-block;\r
    // height: 1.5rem;\r
    // width: 1.5rem;\r
    // height: 100%;\r
    // position: absolute;\r
    // right: 1.25rem;\r
    // top: 0\r
    // }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        // .usa-accordion__button[aria-expanded=false]::before {\r
        //     background: 0 0;\r
        //     background-color: ButtonText;\r
        //     -webkit-mask-image: url(uswds_add.svg), linear-gradient(transparent, transparent);\r
        //     mask-image: url(uswds_add.svg), linear-gradient(transparent, transparent);\r
        //     -webkit-mask-position: center center;\r
        //     mask-position: center center;\r
        //     -webkit-mask-repeat: no-repeat;\r
        //     mask-repeat: no-repeat;\r
        //     -webkit-mask-size: 1.5rem 1.5rem;\r
        //     mask-size: 1.5rem 1.5rem\r
        // }\r
    }\r
}\r
\r
.usa-alert {\r
    background-color: #f0f0f0;\r
    border-left: .5rem solid #a9aeb1;\r
    color: #1b1b1b\r
}\r
\r
.usa-alert .usa-alert__body {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    padding-bottom: 1rem;\r
    padding-top: 1rem;\r
    position: relative\r
}\r
\r
.usa-alert .usa-alert__text {\r
    margin-bottom: 0;\r
    margin-top: 0\r
}\r
\r
.usa-alert .usa-alert__text:only-child {\r
    padding-bottom: 0;\r
    padding-top: 0\r
}\r
\r
.usa-alert .usa-alert__heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.46rem; */\r
    line-height: .9;\r
    margin-top: 0;\r
    margin-bottom: .5rem\r
}\r
\r
.usa-alert .usa-alert__body>.usa-list,\r
.usa-alert>.usa-list {\r
    padding-left: 2ch\r
}\r
\r
.usa-alert .usa-alert__body>.usa-list:last-child,\r
.usa-alert>.usa-list:last-child {\r
    margin-bottom: 0\r
}\r
\r
.usa-alert .usa-alert__body {\r
    padding-left: 1.25rem;\r
    padding-right: 1.25rem\r
}\r
\r
.usa-alert .usa-alert__body::before {\r
    left: 1.0833333333rem\r
}\r
\r
*+.usa-alert {\r
    margin-top: 1rem\r
}\r
\r
.usa-alert--success {\r
    background-color: #ecf3ec;\r
    border-left-color: #00a91c\r
}\r
\r
.usa-alert--success .usa-alert__body {\r
    color: #1b1b1b;\r
    background-color: #ecf3ec;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    min-height: 3.3333333333rem\r
}\r
\r
.usa-alert--success .usa-alert__body::before {\r
    background-image: url(../img/usa-icons/check_circle.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 2rem 2rem;\r
    height: 2rem;\r
    width: 2rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    top: .6666666667rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-alert--success .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #1b1b1b;\r
        -webkit-mask-image: url(../img/usa-icons/check_circle.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/check_circle.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 2rem 2rem;\r
        mask-size: 2rem 2rem\r
    }\r
}\r
\r
.usa-alert--success .usa-alert__body>* {\r
    margin-left: 2.5rem\r
}\r
\r
.usa-alert--error .usa-alert__body .usa-link,\r
.usa-alert--info .usa-alert__body .usa-link,\r
.usa-alert--success .usa-alert__body .usa-link,\r
.usa-alert--warning .usa-alert__body .usa-link {\r
    color: #005ea2\r
}\r
\r
.usa-alert--success .usa-alert__body .usa-link:visited {\r
    color: #54278f\r
}\r
\r
.usa-alert--success .usa-alert__body .usa-link:active,\r
.usa-alert--success .usa-alert__body .usa-link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-alert--warning {\r
    background-color: #faf3d1;\r
    border-left-color: #ffbe2e\r
}\r
\r
.usa-alert--warning .usa-alert__body {\r
    color: #1b1b1b;\r
    background-color: #faf3d1;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    min-height: 3.3333333333rem\r
}\r
\r
.usa-alert--warning .usa-alert__body::before {\r
    background-image: url(../img/usa-icons/warning.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 2rem 2rem;\r
    height: 2rem;\r
    width: 2rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    top: .6666666667rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-alert--warning .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #1b1b1b;\r
        -webkit-mask-image: url(../img/usa-icons/warning.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/warning.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 2rem 2rem;\r
        mask-size: 2rem 2rem\r
    }\r
}\r
\r
.usa-alert--warning .usa-alert__body>* {\r
    margin-left: 2.5rem\r
}\r
\r
.usa-alert--warning .usa-alert__body .usa-link:visited {\r
    color: #54278f\r
}\r
\r
.usa-alert--warning .usa-alert__body .usa-link:active,\r
.usa-alert--warning .usa-alert__body .usa-link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-alert--error {\r
    background-color: #f4e3db;\r
    border-left-color: #d54309\r
}\r
\r
.usa-alert--error .usa-alert__body {\r
    color: #1b1b1b;\r
    background-color: #f4e3db;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    min-height: 3.3333333333rem\r
}\r
\r
.usa-alert--error .usa-alert__body::before {\r
    background-image: url(../img/usa-icons/error.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 2rem 2rem;\r
    height: 2rem;\r
    width: 2rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    top: .6666666667rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-alert--error .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #1b1b1b;\r
        -webkit-mask-image: url(../img/usa-icons/error.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/error.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 2rem 2rem;\r
        mask-size: 2rem 2rem\r
    }\r
}\r
\r
.usa-alert--error .usa-alert__body>* {\r
    margin-left: 2.5rem\r
}\r
\r
.usa-alert--error .usa-alert__body .usa-link:visited {\r
    color: #54278f\r
}\r
\r
.usa-alert--error .usa-alert__body .usa-link:active,\r
.usa-alert--error .usa-alert__body .usa-link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-alert--info {\r
    background-color: #e7f6f8;\r
    border-left-color: #00bde3\r
}\r
\r
.usa-alert--info .usa-alert__body {\r
    color: #1b1b1b;\r
    background-color: #e7f6f8;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    min-height: 3.3333333333rem\r
}\r
\r
.usa-alert--info .usa-alert__body::before {\r
    background-image: url(../img/usa-icons/info.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 2rem 2rem;\r
    height: 2rem;\r
    width: 2rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    top: .6666666667rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-alert--info .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #1b1b1b;\r
        -webkit-mask-image: url(../img/usa-icons/info.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/info.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 2rem 2rem;\r
        mask-size: 2rem 2rem\r
    }\r
}\r
\r
.usa-alert--info .usa-alert__body>* {\r
    margin-left: 2.5rem\r
}\r
\r
.usa-alert--info .usa-alert__body .usa-link:visited {\r
    color: #54278f\r
}\r
\r
.usa-alert--info .usa-alert__body .usa-link:active,\r
.usa-alert--info .usa-alert__body .usa-link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-alert--emergency {\r
    background-color: #9c3d10;\r
    border-left-color: #9c3d10\r
}\r
\r
.usa-alert--emergency .usa-alert__body {\r
    color: #fff;\r
    background-color: #9c3d10;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    min-height: 3.3333333333rem\r
}\r
\r
.usa-alert--emergency .usa-alert__body::before {\r
    background-image: url(../img/usa-icons-bg/error--white.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 2rem 2rem;\r
    height: 2rem;\r
    width: 2rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    top: .6666666667rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-alert--emergency .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #fff;\r
        -webkit-mask-image: url(../img/usa-icons/error.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/error.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 2rem 2rem;\r
        mask-size: 2rem 2rem\r
    }\r
}\r
\r
.usa-alert--emergency .usa-alert__body>* {\r
    margin-left: 2.5rem\r
}\r
\r
.usa-alert--emergency .usa-alert__body .usa-link,\r
.usa-alert--emergency .usa-alert__body .usa-link:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-alert--emergency .usa-alert__body .usa-link:active,\r
.usa-alert--emergency .usa-alert__body .usa-link:hover {\r
    color: #f0f0f0\r
}\r
\r
.usa-alert--slim .usa-alert__body {\r
    padding-bottom: .5rem;\r
    padding-top: .5rem;\r
    min-height: 0\r
}\r
\r
.usa-alert--slim .usa-alert__body:before {\r
    height: 1.5rem;\r
    top: .5rem;\r
    width: 1.5rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-alert--slim .usa-alert__body:before {\r
        -webkit-mask-size: 1.5rem;\r
        mask-size: 1.5rem\r
    }\r
}\r
\r
.usa-alert--slim .usa-alert__body>* {\r
    margin-left: 2rem\r
}\r
\r
.usa-alert--slim .usa-alert__body::before {\r
    left: 1.125rem\r
}\r
\r
.usa-alert--no-icon .usa-alert__body {\r
    min-height: 0\r
}\r
\r
.usa-alert--no-icon .usa-alert__body:before {\r
    display: none\r
}\r
\r
.usa-alert--no-icon .usa-alert__body>* {\r
    margin-left: 0\r
}\r
\r
.usa-alert--validation .usa-checklist {\r
    margin-top: 1rem\r
}\r
\r
.usa-banner {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    background-color: #f0f0f0\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner {\r
        /* font-size: .87rem; */\r
        padding-bottom: 0\r
    }\r
}\r
\r
.usa-banner .usa-accordion {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5\r
}\r
\r
.usa-banner .grid-row {\r
    display: flex;\r
    flex-wrap: wrap\r
}\r
\r
.usa-banner .grid-row.grid-gap-lg {\r
    margin-left: -.75rem;\r
    margin-right: -.75rem\r
}\r
\r
.usa-banner .grid-row.grid-gap-lg>* {\r
    padding-left: .75rem;\r
    padding-right: .75rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner .grid-row .tablet\\:grid-col-6 {\r
        flex: 0 1 auto;\r
        width: 50%\r
    }\r
}\r
\r
.usa-banner__content,\r
.usa-banner__header,\r
.usa-footer__contact-info a,\r
.usa-footer__secondary-section a {\r
    color: #1b1b1b\r
}\r
\r
.usa-banner__content {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    background-color: transparent;\r
    /* font-size: 1rem; */\r
    overflow: hidden;\r
    padding: .25rem 1rem 1rem .5rem;\r
    width: 100%\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-banner__content {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__content {\r
        padding-bottom: 1.5rem;\r
        padding-top: 1.5rem\r
    }\r
}\r
\r
.usa-banner__content p:first-child {\r
    margin: 0\r
}\r
\r
.usa-banner__guidance {\r
    display: flex;\r
    align-items: flex-start;\r
    max-width: 64ex;\r
    padding-top: 1rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__guidance {\r
        padding-top: 0\r
    }\r
}\r
\r
.usa-banner__lock-image {\r
    height: 1.5ex;\r
    width: 1.21875ex\r
}\r
\r
.usa-banner__lock-image path {\r
    fill: currentColor\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-banner__lock-image path {\r
        fill: CanvasText\r
    }\r
}\r
\r
.usa-banner__inner {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem;\r
    display: flex;\r
    flex-wrap: wrap;\r
    align-items: flex-start;\r
    padding-right: 0\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-banner__inner {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__inner {\r
        align-items: center\r
    }\r
}\r
\r
.usa-banner__header {\r
    padding-bottom: .5rem;\r
    padding-top: .5rem;\r
    /* font-size: .8rem; */\r
    font-weight: 400;\r
    min-height: 3rem;\r
    position: relative\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__header {\r
        padding-bottom: .25rem;\r
        padding-top: .25rem;\r
        min-height: 0\r
    }\r
}\r
\r
.usa-banner__header-text {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    /* font-size: .8rem; */\r
    line-height: 1.1\r
}\r
\r
.usa-banner__header-action {\r
    color: #005ea2;\r
    line-height: 1.1;\r
    margin-bottom: 0;\r
    margin-top: 2px;\r
    text-decoration: underline\r
}\r
\r
.usa-banner__header-action::after {\r
    background-image: url(../img/usa-icons/expand_more.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 1rem 1rem;\r
    display: inline-block;\r
    height: 1rem;\r
    width: 1rem;\r
    content: "";\r
    vertical-align: middle;\r
    margin-left: auto\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-banner__header-action::after {\r
        background: 0 0;\r
        background-color: #005ea2;\r
        -webkit-mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 1rem 1rem;\r
        mask-size: 1rem 1rem\r
    }\r
\r
    .usa-banner__header-action::after:hover {\r
        background-color: #1a4480\r
    }\r
}\r
\r
.usa-banner__header-action:hover::after {\r
    content: "";\r
    background-color: #1a4480\r
}\r
\r
.usa-banner__header-action:visited {\r
    color: #54278f\r
}\r
\r
.usa-banner__header-action:active,\r
.usa-banner__header-action:hover {\r
    color: #1a4480\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__header-action {\r
        display: none\r
    }\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-banner__header-action {\r
        color: LinkText\r
    }\r
\r
    .usa-banner__header-action::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
.usa-banner__header-flag {\r
    float: left;\r
    margin-right: .5rem;\r
    width: 1rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__header-flag {\r
        margin-right: .5rem;\r
        padding-top: 0\r
    }\r
}\r
\r
.usa-banner__header--expanded {\r
    padding-right: 3.5rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__header--expanded {\r
        background-color: transparent;\r
        display: block;\r
        /* font-size: .8rem; */\r
        font-weight: 400;\r
        min-height: 0;\r
        padding-right: 0\r
    }\r
}\r
\r
.usa-banner__header--expanded .usa-banner__inner {\r
    margin-left: 0\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__header--expanded .usa-banner__inner {\r
        margin-left: auto\r
    }\r
}\r
\r
.usa-banner__header--expanded .usa-banner__header-action {\r
    display: none\r
}\r
\r
.usa-banner__button {\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    text-align: left;\r
    margin: 0;\r
    left: 0;\r
    position: absolute;\r
    bottom: 0;\r
    top: 0;\r
    color: #005ea2;\r
    display: block;\r
    /* font-size: .8rem; */\r
    height: auto;\r
    line-height: 1.1;\r
    padding: 0;\r
    text-decoration: none;\r
    width: auto\r
}\r
\r
.usa-banner__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-banner__button.usa-button--active,\r
.usa-banner__button.usa-button--disabled,\r
.usa-banner__button.usa-button--hover,\r
.usa-banner__button:active,\r
.usa-banner__button:disabled,\r
.usa-banner__button:disabled.usa-button--active,\r
.usa-banner__button:disabled.usa-button--hover,\r
.usa-banner__button:disabled.usa-focus,\r
.usa-banner__button:disabled:active,\r
.usa-banner__button:disabled:focus,\r
.usa-banner__button:disabled:hover,\r
.usa-banner__button:hover,\r
.usa-banner__button[aria-disabled=true],\r
.usa-banner__button[aria-disabled=true].usa-button--active,\r
.usa-banner__button[aria-disabled=true].usa-button--hover,\r
.usa-banner__button[aria-disabled=true].usa-focus,\r
.usa-banner__button[aria-disabled=true]:active,\r
.usa-banner__button[aria-disabled=true]:focus,\r
.usa-banner__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-banner__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-banner__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-banner__button:disabled,\r
.usa-banner__button:disabled:hover,\r
.usa-banner__button[aria-disabled=true],\r
.usa-banner__button[aria-disabled=true]:focus,\r
.usa-banner__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-banner__button:disabled,\r
    .usa-banner__button:disabled:hover,\r
    .usa-banner__button[aria-disabled=true],\r
    .usa-banner__button[aria-disabled=true]:focus,\r
    .usa-banner__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-banner__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-banner__button:active,\r
.usa-banner__button:hover {\r
    color: #1a4480\r
}\r
\r
@media all and (max-width:39.99em) {\r
    .usa-banner__button {\r
        width: 100%\r
    }\r
\r
    .usa-banner__button:enabled:focus {\r
        outline-offset: -.25rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__button {\r
        color: #005ea2;\r
        bottom: auto;\r
        left: auto;\r
        right: auto;\r
        top: auto;\r
        display: inline;\r
        margin-left: .5rem;\r
        position: relative\r
    }\r
\r
    // .usa-banner__button::after {\r
    //     background-image: url(../img/usa-icons/expand_more.svg);\r
    //     background-repeat: no-repeat;\r
    //     background-position: center center;\r
    //     background-size: 1rem 1rem;\r
    //     display: inline-block;\r
    //     height: 1rem;\r
    //     width: 1rem;\r
    //     content: "";\r
    //     vertical-align: middle;\r
    //     margin-left: 2px\r
    // }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        // .usa-banner__button::after {\r
        //     background: 0 0;\r
        //     background-color: #005ea2;\r
        //     -webkit-mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
        //     mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
        //     -webkit-mask-position: center center;\r
        //     mask-position: center center;\r
        //     -webkit-mask-repeat: no-repeat;\r
        //     mask-repeat: no-repeat;\r
        //     -webkit-mask-size: 1rem 1rem;\r
        //     mask-size: 1rem 1rem\r
        // }\r
\r
        .usa-banner__button::after:hover {\r
            background-color: #1a4480\r
        }\r
    }\r
\r
    .usa-banner__button:hover::after {\r
        content: "";\r
        background-color: #1a4480\r
    }\r
\r
    .usa-banner__button:visited {\r
        color: #54278f\r
    }\r
\r
    .usa-banner__button:active,\r
    .usa-banner__button:hover {\r
        color: #1a4480\r
    }\r
\r
    .usa-banner__button::after,\r
    .usa-banner__button:hover::after {\r
        position: absolute\r
    }\r
}\r
\r
@media (min-width:40em) and (forced-colors:active) {\r
\r
    .usa-banner__button::after,\r
    .usa-banner__button:hover::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__button:hover {\r
        text-decoration: none\r
    }\r
}\r
\r
.usa-banner__button[aria-expanded=false],\r
.usa-banner__button[aria-expanded=false]:hover,\r
.usa-banner__button[aria-expanded=true],\r
.usa-banner__button[aria-expanded=true]:hover {\r
    background-image: none\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-banner__button[aria-expanded=false]::before,\r
    .usa-banner__button[aria-expanded=false]:hover::before,\r
    .usa-banner__button[aria-expanded=true]::before,\r
    .usa-banner__button[aria-expanded=true]:hover::before {\r
        content: none\r
    }\r
}\r
\r
@media all and (max-width:39.99em) {\r
    // .usa-banner__button[aria-expanded=true]::after {\r
    //     background-image: url(../img/usa-icons/close.svg);\r
    //     background-repeat: no-repeat;\r
    //     background-position: center center;\r
    //     background-size: 1.5rem 1.5rem;\r
    //     display: inline-block;\r
    //     height: 3rem;\r
    //     width: 3rem;\r
    //     content: "";\r
    //     vertical-align: middle;\r
    //     margin-left: 0\r
    // }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        // .usa-banner__button[aria-expanded=true]::after {\r
        //     background: 0 0;\r
        //     background-color: #005ea2;\r
        //     -webkit-mask-image: url(../img/usa-icons/close.svg), linear-gradient(transparent, transparent);\r
        //     mask-image: url(../img/usa-icons/close.svg), linear-gradient(transparent, transparent);\r
        //     -webkit-mask-position: center center;\r
        //     mask-position: center center;\r
        //     -webkit-mask-repeat: no-repeat;\r
        //     mask-repeat: no-repeat;\r
        //     -webkit-mask-size: 1.5rem 1.5rem;\r
        //     mask-size: 1.5rem 1.5rem\r
        // }\r
    }\r
\r
    .usa-banner__button[aria-expanded=true]::before {\r
        bottom: 0;\r
        top: 0;\r
        position: absolute;\r
        right: 0;\r
        background-color: #dfe1e2;\r
        content: "";\r
        display: block;\r
        height: 3rem;\r
        width: 3rem\r
    }\r
\r
    .usa-banner__button[aria-expanded=true]::after {\r
        bottom: 0;\r
        top: 0;\r
        position: absolute;\r
        right: 0\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__button[aria-expanded=true] {\r
        height: auto;\r
        padding: 0;\r
        position: relative\r
    }\r
\r
    // .usa-banner__button[aria-expanded=true]::after {\r
    //     background-image: url(../img/usa-icons/expand_less.svg);\r
    //     background-repeat: no-repeat;\r
    //     background-position: center center;\r
    //     background-size: 1rem 1rem;\r
    //     display: inline-block;\r
    //     height: 1rem;\r
    //     width: 1rem;\r
    //     content: "";\r
    //     vertical-align: middle;\r
    //     margin-left: 2px\r
    // }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        // .usa-banner__button[aria-expanded=true]::after {\r
        //     background: 0 0;\r
        //     background-color: #005ea2;\r
        //     -webkit-mask-image: url(../img/usa-icons/expand_less.svg), linear-gradient(transparent, transparent);\r
        //     mask-image: url(../img/usa-icons/expand_less.svg), linear-gradient(transparent, transparent);\r
        //     -webkit-mask-position: center center;\r
        //     mask-position: center center;\r
        //     -webkit-mask-repeat: no-repeat;\r
        //     mask-repeat: no-repeat;\r
        //     -webkit-mask-size: 1rem 1rem;\r
        //     mask-size: 1rem 1rem\r
        // }\r
\r
        .usa-banner__button[aria-expanded=true]::after:hover {\r
            background-color: #1a4480\r
        }\r
    }\r
\r
    .usa-banner__button[aria-expanded=true]:hover::after {\r
        content: "";\r
        background-color: #1a4480;\r
        position: absolute\r
    }\r
\r
    .usa-banner__button[aria-expanded=true]::after {\r
        position: absolute\r
    }\r
}\r
\r
@media (min-width:40em) and (forced-colors:active) {\r
\r
    .usa-banner__button[aria-expanded=true]::after,\r
    .usa-banner__button[aria-expanded=true]:hover::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
.usa-banner__button-text {\r
    position: absolute;\r
    left: -999em;\r
    right: auto;\r
    text-decoration: underline\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-banner__button-text {\r
        position: static;\r
        display: inline\r
    }\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-banner__button-text {\r
        color: LinkText\r
    }\r
}\r
\r
.usa-banner__icon {\r
    width: 2.5rem\r
}\r
\r
.usa-js-loading .usa-banner__content {\r
    position: absolute;\r
    left: -999em;\r
    right: auto\r
}\r
\r
.usa-breadcrumb {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.3;\r
    color: #1b1b1b;\r
    background-color: #fff;\r
    padding-left: 0;\r
    padding-right: 0\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-breadcrumb {\r
        padding-bottom: 1rem;\r
        padding-top: 1rem\r
    }\r
\r
    .usa-breadcrumb:not(.usa-breadcrumb--wrap) .usa-breadcrumb__list {\r
        white-space: nowrap;\r
        text-overflow: ellipsis;\r
        overflow: hidden\r
    }\r
}\r
\r
.usa-breadcrumb__list {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    display: block;\r
    padding: .25rem;\r
    margin-left: -.25rem;\r
    margin-right: -.25rem\r
}\r
\r
.usa-breadcrumb__list-item {\r
    position: absolute;\r
    left: -999em;\r
    right: auto;\r
    display: inline\r
}\r
\r
@media all and (max-width:29.99em) {\r
    .usa-breadcrumb__list-item {\r
        white-space: normal\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) {\r
        position: static\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link {\r
        text-decoration: underline;\r
        background-color: transparent;\r
        border: 0;\r
        border-radius: 0;\r
        box-shadow: none;\r
        font-weight: 400;\r
        justify-content: normal;\r
        text-align: left;\r
        margin: 0;\r
        padding: 0;\r
        width: auto;\r
        padding-left: calc(2ex + 0px);\r
        text-indent: calc((2ex + 0px)*-1);\r
        color: #005ea2;\r
        display: inline-block;\r
        padding-bottom: 1rem;\r
        padding-top: 1rem\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:visited {\r
        color: #54278f\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover {\r
        color: #1a4480\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active {\r
        color: #162e51\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:focus {\r
        outline: .25rem solid #2491ff;\r
        outline-offset: 0\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--disabled,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--hover,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled.usa-button--active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled.usa-button--hover,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled.usa-focus,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:focus,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:hover,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true],\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true].usa-button--active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true].usa-button--hover,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true].usa-focus,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:focus,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:hover {\r
        background-color: transparent;\r
        box-shadow: none;\r
        text-decoration: underline\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--hover {\r
        color: #1a4480\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--active {\r
        color: #162e51\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:hover,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true],\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:focus,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:hover {\r
        color: #757575\r
    }\r
}\r
\r
@media (max-width:29.99em) and (forced-colors:active) {\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:hover,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true],\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:focus,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
@media all and (max-width:29.99em) {\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before {\r
        background-image: url(../img/usa-icons/arrow_back.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2ex 2ex;\r
        display: inline-block;\r
        height: 2ex;\r
        width: 2ex;\r
        content: "";\r
        vertical-align: baseline\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before {\r
            background: 0 0;\r
            background-color: #71767a;\r
            -webkit-mask-image: url(../img/usa-icons/arrow_back.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/arrow_back.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2ex 2ex;\r
            mask-size: 2ex 2ex\r
        }\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:visited {\r
        color: #54278f\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover {\r
        color: #1a4480\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:before {\r
        bottom: -.2em;\r
        height: 2ex;\r
        position: relative\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active,\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover {\r
        text-decoration: none\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link span {\r
        text-decoration: underline\r
    }\r
\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before {\r
        margin-right: 0\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-breadcrumb__list-item {\r
        position: static\r
    }\r
\r
    .usa-breadcrumb__list-item:not(:last-child)::after {\r
        background-image: url(../img/usa-icons/navigate_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2ex 2ex;\r
        display: inline-block;\r
        width: 2ex;\r
        content: "";\r
        vertical-align: baseline\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-breadcrumb__list-item:not(:last-child)::after {\r
            background: 0 0;\r
            background-color: #71767a;\r
            -webkit-mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2ex 2ex;\r
            mask-size: 2ex 2ex\r
        }\r
    }\r
\r
    .usa-breadcrumb__list-item:not(:last-child)::after {\r
        bottom: -.2em;\r
        margin-left: 0;\r
        margin-right: 0;\r
        height: 2ex;\r
        position: relative\r
    }\r
}\r
\r
.usa-breadcrumb__link {\r
    color: #005ea2;\r
    display: inline;\r
    text-decoration: none\r
}\r
\r
.usa-breadcrumb__link:visited {\r
    color: #54278f\r
}\r
\r
.usa-breadcrumb__link:active,\r
.usa-breadcrumb__link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-breadcrumb__link span {\r
    text-decoration: underline\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-breadcrumb--wrap {\r
        line-height: 1.4\r
    }\r
}\r
\r
.usa-breadcrumb--wrap .usa-breadcrumb__list-item {\r
    display: inline-block\r
}\r
\r
.usa-button-group {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    display: flex;\r
    flex-direction: column;\r
    flex-wrap: wrap;\r
    list-style-type: none;\r
    margin-left: -.25rem;\r
    margin-right: -.25rem;\r
    padding-left: 0\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button-group {\r
        flex-wrap: nowrap;\r
        align-items: stretch;\r
        flex-direction: row\r
    }\r
}\r
\r
.usa-button-group .usa-button-group {\r
    height: 100%\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button-group .usa-button-group .usa-button-group__item {\r
        margin-top: 0;\r
        margin-bottom: 0\r
    }\r
}\r
\r
.usa-button-group .usa-button-group--segmented .usa-button-group__item {\r
    margin-top: 0;\r
    margin-bottom: 0\r
}\r
\r
.usa-button-group__item {\r
    margin: .25rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button-group__item:last-child {\r
        margin-right: 0\r
    }\r
}\r
\r
.usa-button-group__item .usa-button {\r
    height: 100%;\r
    margin-left: 0;\r
    margin-right: 0\r
}\r
\r
.usa-button-group--segmented {\r
    flex-direction: row;\r
    flex-wrap: nowrap;\r
    justify-content: space-between;\r
    margin-left: 0;\r
    margin-right: 0\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button-group--segmented {\r
        justify-content: flex-start\r
    }\r
}\r
\r
.usa-button-group--segmented .usa-button {\r
    position: relative;\r
    width: calc(100% + 2px)\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button-group--segmented .usa-button {\r
        width: auto\r
    }\r
}\r
\r
.usa-button-group--segmented .usa-button:active,\r
.usa-button-group--segmented .usa-button:hover {\r
    z-index: 2\r
}\r
\r
.usa-button-group--segmented .usa-button:focus {\r
    z-index: 3\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item {\r
    margin-left: 0;\r
    margin-right: 0;\r
    width: 100%\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button-group--segmented .usa-button-group__item {\r
        width: auto\r
    }\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:first-child>.usa-button {\r
    border-top-right-radius: 0;\r
    border-bottom-right-radius: 0;\r
    margin-right: -1px\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:last-child>.usa-button {\r
    border-top-left-radius: 0;\r
    border-bottom-left-radius: 0;\r
    margin-right: 0;\r
    margin-left: -2px;\r
    width: calc(100% + 2px)\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button-group--segmented .usa-button-group__item:last-child>.usa-button {\r
        margin-left: -1px;\r
        width: auto\r
    }\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:first-child):not(:last-child))>.usa-button {\r
    border-radius: 0;\r
    margin-right: -1px;\r
    margin-left: -1px\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button::before {\r
    border-right: 1px solid #1a4480;\r
    bottom: 0;\r
    content: "";\r
    display: block;\r
    height: 100%;\r
    position: absolute;\r
    right: 1px;\r
    top: 0;\r
    width: 1px;\r
    z-index: 3\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--secondary::before {\r
    border-right-color: #b50909\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--accent-cool::before {\r
    border-right-color: #28a0cb\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--base::before {\r
    border-right-color: #565c65\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) [class*=usa-button]:disabled::before,\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) [class*=usa-button][aria-disabled=true]::before {\r
    border-right-color: #fff\r
}\r
\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--outline::before,\r
.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button:active::before {\r
    display: none\r
}\r
\r
.usa-button {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: .9;\r
    color: #fff;\r
    background-color: #005ea2;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
    align-items: center;\r
    border: 0;\r
    border-radius: .25rem;\r
    cursor: pointer;\r
    -moz-column-gap: .5rem;\r
    column-gap: .5rem;\r
    display: inline-flex;\r
    font-weight: 700;\r
    justify-content: center;\r
    margin-right: .5rem;\r
    padding: .75rem 1.25rem;\r
    text-align: center;\r
    text-decoration: none;\r
    width: 100%\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-button {\r
        width: auto\r
    }\r
}\r
\r
.usa-button:visited {\r
    color: #fff\r
}\r
\r
.usa-button.usa-button--hover,\r
.usa-button:hover {\r
    color: #fff;\r
    background-color: #1a4480;\r
    // border-bottom: 0;\r
    text-decoration: none\r
}\r
\r
.usa-button.usa-button--active,\r
.usa-button:active {\r
    color: #fff;\r
    background-color: #162e51\r
}\r
\r
.usa-button:not([disabled]).usa-focus,\r
.usa-button:not([disabled]):focus {\r
    outline-offset: .25rem\r
}\r
\r
.usa-button:disabled,\r
.usa-button[aria-disabled=true] {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-button:disabled.usa-button--active.usa-focus,\r
.usa-button:disabled.usa-button--active:active,\r
.usa-button:disabled.usa-button--active:focus,\r
.usa-button:disabled.usa-button--active:hover,\r
.usa-button:disabled.usa-button--hover.usa-focus,\r
.usa-button:disabled.usa-button--hover:active,\r
.usa-button:disabled.usa-button--hover:focus,\r
.usa-button:disabled.usa-button--hover:hover,\r
.usa-button:disabled.usa-focus,\r
.usa-button:disabled:active,\r
.usa-button:disabled:focus,\r
.usa-button:disabled:hover,\r
.usa-button[aria-disabled=true].usa-button--active.usa-focus,\r
.usa-button[aria-disabled=true].usa-button--active:active,\r
.usa-button[aria-disabled=true].usa-button--active:focus,\r
.usa-button[aria-disabled=true].usa-button--active:hover,\r
.usa-button[aria-disabled=true].usa-button--hover.usa-focus,\r
.usa-button[aria-disabled=true].usa-button--hover:active,\r
.usa-button[aria-disabled=true].usa-button--hover:focus,\r
.usa-button[aria-disabled=true].usa-button--hover:hover,\r
.usa-button[aria-disabled=true].usa-focus,\r
.usa-button[aria-disabled=true]:active,\r
.usa-button[aria-disabled=true]:focus,\r
.usa-button[aria-disabled=true]:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-button:disabled,\r
    .usa-button[aria-disabled=true] {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-button:disabled.usa-focus,\r
    .usa-button:disabled:active,\r
    .usa-button:disabled:focus,\r
    .usa-button:disabled:hover,\r
    .usa-button[aria-disabled=true].usa-focus,\r
    .usa-button[aria-disabled=true]:active,\r
    .usa-button[aria-disabled=true]:focus,\r
    .usa-button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-button:disabled.usa-button--active,\r
.usa-button:disabled.usa-button--hover,\r
.usa-button[aria-disabled=true].usa-button--active,\r
.usa-button[aria-disabled=true].usa-button--hover {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-button:disabled.usa-button--active,\r
    .usa-button:disabled.usa-button--hover,\r
    .usa-button[aria-disabled=true].usa-button--active,\r
    .usa-button[aria-disabled=true].usa-button--hover {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-button:disabled.usa-button--active.usa-focus,\r
    .usa-button:disabled.usa-button--active:active,\r
    .usa-button:disabled.usa-button--active:focus,\r
    .usa-button:disabled.usa-button--active:hover,\r
    .usa-button:disabled.usa-button--hover.usa-focus,\r
    .usa-button:disabled.usa-button--hover:active,\r
    .usa-button:disabled.usa-button--hover:focus,\r
    .usa-button:disabled.usa-button--hover:hover,\r
    .usa-button[aria-disabled=true].usa-button--active.usa-focus,\r
    .usa-button[aria-disabled=true].usa-button--active:active,\r
    .usa-button[aria-disabled=true].usa-button--active:focus,\r
    .usa-button[aria-disabled=true].usa-button--active:hover,\r
    .usa-button[aria-disabled=true].usa-button--hover.usa-focus,\r
    .usa-button[aria-disabled=true].usa-button--hover:active,\r
    .usa-button[aria-disabled=true].usa-button--hover:focus,\r
    .usa-button[aria-disabled=true].usa-button--hover:hover {\r
        color: GrayText\r
    }\r
\r
    .usa-button:disabled:not(.usa-button--unstyled),\r
    .usa-button[aria-disabled=true]:not(.usa-button--unstyled) {\r
        border: 2px solid GrayText\r
    }\r
}\r
\r
.usa-button .usa-icon {\r
    flex-shrink: 0\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-button:not(.usa-button--unstyled) {\r
        border: 2px solid transparent\r
    }\r
}\r
\r
.usa-button--accent-cool,\r
.usa-button--accent-cool:visited {\r
    color: #1b1b1b;\r
    background-color: #00bde3\r
}\r
\r
.usa-button--accent-cool.usa-button--hover,\r
.usa-button--accent-cool:hover {\r
    color: #1b1b1b;\r
    background-color: #28a0cb\r
}\r
\r
.usa-button--accent-cool.usa-button--active,\r
.usa-button--accent-cool:active {\r
    color: #fff;\r
    background-color: #07648d\r
}\r
\r
.usa-button--accent-warm,\r
.usa-button--accent-warm:visited {\r
    color: #1b1b1b;\r
    background-color: #fa9441\r
}\r
\r
.usa-button--accent-warm.usa-button--hover,\r
.usa-button--accent-warm:hover {\r
    color: #fff;\r
    background-color: #c05600\r
}\r
\r
.usa-button--accent-warm.usa-button--active,\r
.usa-button--accent-warm:active {\r
    color: #fff;\r
    background-color: #775540\r
}\r
\r
.usa-button--outline {\r
    background-color: transparent;\r
    box-shadow: inset 0 0 0 2px #005ea2;\r
    color: #005ea2\r
}\r
\r
.usa-button--outline:visited {\r
    color: #005ea2\r
}\r
\r
.usa-button--outline.usa-button--hover,\r
.usa-button--outline:hover {\r
    background-color: transparent;\r
    box-shadow: inset 0 0 0 2px #1a4480;\r
    color: #1a4480\r
}\r
\r
.usa-button--outline.usa-button--active,\r
.usa-button--outline:active {\r
    background-color: transparent;\r
    box-shadow: inset 0 0 0 2px #162e51;\r
    color: #162e51\r
}\r
\r
.usa-button--outline.usa-button--inverse {\r
    box-shadow: inset 0 0 0 2px #dfe1e2;\r
    color: #dfe1e2\r
}\r
\r
.usa-button--outline.usa-button--inverse:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--hover,\r
.usa-button--outline.usa-button--inverse:hover {\r
    box-shadow: inset 0 0 0 2px #f0f0f0;\r
    color: #f0f0f0\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--active,\r
.usa-button--outline.usa-button--inverse:active {\r
    background-color: transparent;\r
    box-shadow: inset 0 0 0 2px #fff;\r
    color: #fff\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled {\r
    text-decoration: underline;\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    text-align: left;\r
    margin: 0;\r
    padding: 0;\r
    width: auto;\r
    color: #dfe1e2\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--active,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--hover,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-focus,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:active,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:focus,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--active,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--hover,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-focus,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:active,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,\r
    .usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,\r
    .usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],\r
    .usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus,\r
    .usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover {\r
    color: #f0f0f0\r
}\r
\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active,\r
.usa-button--outline.usa-button--inverse.usa-button--unstyled:active {\r
    color: #fff\r
}\r
\r
.usa-button--base {\r
    color: #fff;\r
    background-color: #71767a\r
}\r
\r
.usa-button--base.usa-button--hover,\r
.usa-button--base:hover {\r
    color: #fff;\r
    background-color: #565c65\r
}\r
\r
.usa-button--base.usa-button--active,\r
.usa-button--base:active {\r
    color: #fff;\r
    background-color: #3d4551\r
}\r
\r
.usa-button--secondary {\r
    color: #fff;\r
    background-color: #d83933\r
}\r
\r
.usa-button--secondary.usa-button--hover,\r
.usa-button--secondary:hover {\r
    color: #fff;\r
    background-color: #b50909\r
}\r
\r
.usa-button--secondary.usa-button--active,\r
.usa-button--secondary:active {\r
    color: #fff;\r
    background-color: #8b0a03\r
}\r
\r
.usa-button--big {\r
    border-radius: .25rem;\r
    /* font-size: 1.46rem; */\r
    padding: 1rem 1.5rem\r
}\r
\r
.usa-button--outline-inverse:disabled,\r
.usa-button--outline-inverse:disabled:active,\r
.usa-button--outline-inverse:disabled:focus,\r
.usa-button--outline-inverse:disabled:hover,\r
.usa-button--outline-inverse[aria-disabled=true],\r
.usa-button--outline-inverse[aria-disabled=true]:active,\r
.usa-button--outline-inverse[aria-disabled=true]:focus,\r
.usa-button--outline-inverse[aria-disabled=true]:hover,\r
.usa-button--outline:disabled,\r
.usa-button--outline:disabled:active,\r
.usa-button--outline:disabled:focus,\r
.usa-button--outline:disabled:hover,\r
.usa-button--outline[aria-disabled=true],\r
.usa-button--outline[aria-disabled=true]:active,\r
.usa-button--outline[aria-disabled=true]:focus,\r
.usa-button--outline[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    color: #757575\r
}\r
\r
.usa-button--outline:disabled,\r
.usa-button--outline[aria-disabled=true] {\r
    box-shadow: inset 0 0 0 2px #c9c9c9\r
}\r
\r
.usa-button--outline:disabled.usa-button--inverse,\r
.usa-button--outline[aria-disabled=true].usa-button--inverse {\r
    box-shadow: inset 0 0 0 2px #919191;\r
    color: #919191\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-button--outline:disabled.usa-button--inverse,\r
    .usa-button--outline[aria-disabled=true].usa-button--inverse {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-button--unstyled {\r
    color: #005ea2;\r
    text-decoration: underline;\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    text-align: left;\r
    margin: 0;\r
    padding: 0;\r
    width: auto\r
}\r
\r
.usa-button--unstyled:visited,\r
.usa-footer__return-to-top a:visited {\r
    color: #54278f\r
}\r
\r
.usa-button--unstyled:hover {\r
    color: #1a4480\r
}\r
\r
.usa-button--unstyled:active {\r
    color: #162e51\r
}\r
\r
.usa-button--unstyled:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-button--unstyled.usa-button--active,\r
.usa-button--unstyled.usa-button--disabled,\r
.usa-button--unstyled.usa-button--hover,\r
.usa-button--unstyled:active,\r
.usa-button--unstyled:disabled,\r
.usa-button--unstyled:disabled.usa-button--active,\r
.usa-button--unstyled:disabled.usa-button--hover,\r
.usa-button--unstyled:disabled.usa-focus,\r
.usa-button--unstyled:disabled:active,\r
.usa-button--unstyled:disabled:focus,\r
.usa-button--unstyled:disabled:hover,\r
.usa-button--unstyled:hover,\r
.usa-button--unstyled[aria-disabled=true],\r
.usa-button--unstyled[aria-disabled=true].usa-button--active,\r
.usa-button--unstyled[aria-disabled=true].usa-button--hover,\r
.usa-button--unstyled[aria-disabled=true].usa-focus,\r
.usa-button--unstyled[aria-disabled=true]:active,\r
.usa-button--unstyled[aria-disabled=true]:focus,\r
.usa-button--unstyled[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-button--unstyled.usa-button--hover,\r
.usa-footer__return-to-top a:hover {\r
    color: #1a4480\r
}\r
\r
.usa-button--unstyled.usa-button--active,\r
.usa-footer__return-to-top a:active {\r
    color: #162e51\r
}\r
\r
.usa-button--unstyled:disabled,\r
.usa-button--unstyled:disabled:hover,\r
.usa-button--unstyled[aria-disabled=true],\r
.usa-button--unstyled[aria-disabled=true]:focus,\r
.usa-button--unstyled[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-button--unstyled:disabled,\r
    .usa-button--unstyled:disabled:hover,\r
    .usa-button--unstyled[aria-disabled=true],\r
    .usa-button--unstyled[aria-disabled=true]:focus,\r
    .usa-button--unstyled[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-card-group,\r
.usa-prose .usa-card-group {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0\r
}\r
\r
.usa-card-group {\r
    display: flex;\r
    flex-direction: column;\r
    flex-wrap: wrap;\r
    align-items: stretch;\r
    margin-left: -.5rem;\r
    margin-right: -.5rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-card-group {\r
        flex-direction: row\r
    }\r
}\r
\r
.usa-card {\r
    margin-bottom: 2.5rem;\r
    max-width: none\r
}\r
\r
.usa-card:last-child,\r
.usa-prose .usa-card:last-child {\r
    margin-bottom: 2.5rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-card {\r
        margin-bottom: 2rem\r
    }\r
\r
    .usa-card:last-child {\r
        margin-bottom: 2rem\r
    }\r
}\r
\r
.usa-prose .usa-card {\r
    margin-bottom: 2.5rem;\r
    max-width: none\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-prose .usa-card {\r
        margin-bottom: 2rem\r
    }\r
\r
    .usa-prose .usa-card:last-child {\r
        margin-bottom: 2rem\r
    }\r
}\r
\r
.usa-card__container {\r
    color: #1b1b1b;\r
    background-color: #fff;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    border-width: 2px;\r
    border-color: #dfe1e2;\r
    border-style: solid;\r
    display: flex;\r
    height: 100%;\r
    flex-direction: column;\r
    margin-left: .5rem;\r
    margin-right: .5rem;\r
    position: relative;\r
    border-radius: .5rem\r
}\r
\r
.usa-card:not(.usa-card--flag) .usa-card__container>:only-child {\r
    padding: 1.5rem\r
}\r
\r
.usa-card .usa-card__img {\r
    display: block\r
}\r
\r
.usa-card__header {\r
    padding: 1.5rem 1.5rem .5rem\r
}\r
\r
.usa-card__header:last-child {\r
    padding-bottom: 1.5rem\r
}\r
\r
.usa-card__heading {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem; */\r
    line-height: 1.2;\r
    margin: 0\r
}\r
\r
.usa-card__media {\r
    order: -1;\r
    min-height: 1px\r
}\r
\r
.usa-card__img {\r
    border-top-left-radius: calc(.5rem - 2px);\r
    border-top-right-radius: calc(.5rem - 2px);\r
    background-color: #f0f0f0;\r
    position: relative;\r
    overflow: hidden\r
}\r
\r
.usa-card__img img {\r
    display: block;\r
    height: 100%;\r
    width: 100%;\r
    -o-object-fit: cover;\r
    object-fit: cover\r
}\r
\r
.usa-card__media--inset {\r
    padding-top: 1.5rem;\r
    padding-left: 1.5rem;\r
    padding-right: 1.5rem\r
}\r
\r
.usa-card__media--inset .usa-card__img {\r
    border-radius: 0\r
}\r
\r
.usa-card__body {\r
    flex: 1 1 0%;\r
    padding: .5rem 1.5rem;\r
    flex-basis: auto\r
}\r
\r
.usa-card__body:last-child {\r
    padding-bottom: 1.5rem\r
}\r
\r
.usa-card__body:first-child {\r
    padding-top: 1.5rem\r
}\r
\r
.usa-card__body:only-child {\r
    padding-bottom: 1.5rem;\r
    padding-top: 1.5rem\r
}\r
\r
.usa-card__footer {\r
    padding: .5rem 1.5rem 1.5rem\r
}\r
\r
.usa-card__footer .usa-button:only-of-type {\r
    margin-right: 0\r
}\r
\r
.usa-card__body>:last-child,\r
.usa-card__header>:last-child {\r
    padding-bottom: 0;\r
    margin-bottom: 0\r
}\r
\r
.usa-card__body>:first-child,\r
.usa-card__header>:first-child {\r
    margin-top: 0;\r
    padding-top: 0\r
}\r
\r
.usa-card__body>:only-child,\r
.usa-card__header>:only-child {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    padding-bottom: 0;\r
    padding-top: 0\r
}\r
\r
.usa-card__body--exdent,\r
.usa-card__footer--exdent,\r
.usa-card__header--exdent,\r
.usa-card__media--exdent {\r
    margin-inline: -2px\r
}\r
\r
.usa-card__body--exdent>*,\r
.usa-card__footer--exdent>*,\r
.usa-card__header--exdent>* {\r
    padding-left: 2px;\r
    padding-right: 2px\r
}\r
\r
.usa-card__media--exdent {\r
    margin-top: -2px\r
}\r
\r
.usa-card__media--exdent .usa-card__img {\r
    border-top-left-radius: .5rem;\r
    border-top-right-radius: .5rem\r
}\r
\r
.usa-card--header-first .usa-card__header {\r
    border-top-left-radius: calc(.5rem - 2px);\r
    border-top-right-radius: calc(.5rem - 2px);\r
    padding-bottom: 1rem\r
}\r
\r
.usa-card--header-first .usa-card__header--exdent {\r
    border-top-left-radius: .5rem;\r
    border-top-right-radius: .5rem;\r
    margin-top: -2px\r
}\r
\r
.usa-card--header-first .usa-card__media--inset {\r
    padding-top: 0\r
}\r
\r
.usa-card--header-first .usa-card__media {\r
    order: 0\r
}\r
\r
.usa-card--header-first .usa-card__media--exdent {\r
    margin-top: 0\r
}\r
\r
.usa-card--header-first .usa-card__img {\r
    border-radius: 0\r
}\r
\r
.usa-card--header-first .usa-card__body {\r
    padding-top: 1rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-card--flag .usa-card__media {\r
        display: flex;\r
        overflow: hidden;\r
        bottom: 0;\r
        top: 0;\r
        left: 0;\r
        position: absolute;\r
        width: 15rem\r
    }\r
\r
    .usa-card--flag .usa-card__img {\r
        border-radius: 0;\r
        border-top-left-radius: calc(.5rem - 2px);\r
        border-bottom-left-radius: calc(.5rem - 2px)\r
    }\r
\r
    .usa-card--flag .usa-card__body,\r
    .usa-card--flag .usa-card__footer,\r
    .usa-card--flag .usa-card__header {\r
        margin-left: 15rem\r
    }\r
\r
    .usa-card--flag .usa-card__media--exdent {\r
        margin: -2px\r
    }\r
\r
    .usa-card--flag .usa-card__media--exdent .usa-card__img {\r
        border-bottom-left-radius: .5rem;\r
        border-top-left-radius: .5rem\r
    }\r
\r
    .usa-card--flag .usa-card__media--inset {\r
        padding-right: 0;\r
        padding-bottom: 1.5rem\r
    }\r
\r
    .usa-card--flag .usa-card__media--inset .usa-card__img,\r
    .usa-card--flag.usa-card--media-right .usa-card__media--inset .usa-card__img {\r
        border-radius: 0\r
    }\r
\r
    .usa-card--flag.usa-card--header-first .usa-card__header {\r
        padding-bottom: .5rem\r
    }\r
\r
    .usa-card--flag.usa-card--header-first .usa-card__body {\r
        padding-top: .5rem\r
    }\r
\r
    .usa-card--flag.usa-card--header-first .usa-card__media--inset {\r
        padding-top: 1.5rem\r
    }\r
\r
    .usa-card--flag.usa-card--media-right .usa-card__media {\r
        left: auto;\r
        right: 0\r
    }\r
\r
    .usa-card--flag.usa-card--media-right .usa-card__media--inset {\r
        padding-left: 0;\r
        padding-right: 1.5rem\r
    }\r
\r
    .usa-card--flag.usa-card--media-right .usa-card__img {\r
        border-top-right-radius: calc(.5rem - 2px);\r
        border-bottom-right-radius: calc(.5rem - 2px)\r
    }\r
\r
    .usa-card--flag.usa-card--media-right .usa-card__body,\r
    .usa-card--flag.usa-card--media-right .usa-card__footer,\r
    .usa-card--flag.usa-card--media-right .usa-card__header {\r
        margin-left: 0;\r
        margin-right: 15rem\r
    }\r
\r
    .usa-card--flag.usa-card--media-right .usa-card__img {\r
        border-radius: 0;\r
        border-bottom-right-radius: .5rem;\r
        border-top-right-radius: .5rem\r
    }\r
}\r
\r
.usa-card:not(.usa-card--flag).usa-card__media--set-aspect {\r
    box-sizing: border-box;\r
    height: 0;\r
    overflow: hidden;\r
    padding-bottom: 56.25%;\r
    position: relative\r
}\r
\r
@supports (aspect-ratio:1) {\r
    .usa-card:not(.usa-card--flag).usa-card__media--set-aspect {\r
        height: inherit;\r
        padding: inherit;\r
        aspect-ratio: 1.7777777778;\r
        max-width: 100%\r
    }\r
\r
    .usa-card:not(.usa-card--flag).usa-card__media--set-aspect>* {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%\r
    }\r
\r
    .usa-card:not(.usa-card--flag).usa-card__media--set-aspect>img,\r
    img.usa-card:not(.usa-card--flag).usa-card__media--set-aspect {\r
        -o-object-fit: cover;\r
        object-fit: cover\r
    }\r
}\r
\r
.usa-card:not(.usa-card--flag).usa-card__media--set-aspect .usa-card__img {\r
    position: absolute;\r
    bottom: 0;\r
    left: 0;\r
    right: 0;\r
    top: 0\r
}\r
\r
.usa-checklist {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5\r
}\r
\r
.usa-checklist__item {\r
    text-indent: -2.5rem;\r
    margin-top: 0;\r
    margin-bottom: 0;\r
    margin-top: .5rem\r
}\r
\r
.usa-checklist__item::before {\r
    content: " ";\r
    display: inline-block;\r
    height: 1rem;\r
    margin-left: -.25rem;\r
    margin-right: .75rem;\r
    width: 2rem\r
}\r
\r
.usa-checklist__item.usa-checklist__item--checked::before {\r
    background-image: url(../img/usa-icons-bg/check--blue-60v.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
    background-position: center;\r
    background-size: 1.5rem\r
}\r
\r
.usa-collection {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    margin-bottom: 1em;\r
    margin-top: 1em;\r
    line-height: 1.5;\r
    padding-left: 0\r
}\r
\r
.usa-collection:last-child,\r
.usa-collection__item:last-child,\r
.usa-graphic-list .usa-graphic-list__row:last-child .usa-media-block:last-child,\r
.usa-prose .usa-collection:last-child,\r
.usa-prose .usa-collection__item:last-child {\r
    margin-bottom: 0\r
}\r
\r
.usa-collection ol,\r
.usa-collection ul,\r
.usa-prose .usa-collection ol,\r
.usa-prose .usa-collection ul {\r
    margin-top: .25em\r
}\r
\r
.usa-prose .usa-collection {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    margin-bottom: 1em;\r
    margin-top: 1em;\r
    line-height: 1.5;\r
    padding-left: 0\r
}\r
\r
.usa-collection__item,\r
.usa-prose .usa-collection__item {\r
    max-width: 68ex;\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    align-items: flex-start;\r
    border-top-width: 1px;\r
    border-top-style: solid;\r
    display: flex;\r
    margin-bottom: 1rem;\r
    margin-top: 1rem;\r
    padding-top: 1rem\r
}\r
\r
.usa-collection__calendar-date,\r
.usa-collection__img {\r
    flex-shrink: 0;\r
    width: 4rem;\r
    margin-right: 1rem\r
}\r
\r
@media all and (min-width:40em) {\r
\r
    .usa-collection__calendar-date,\r
    .usa-collection__img {\r
        width: 5rem\r
    }\r
}\r
\r
.usa-collection__body {\r
    flex: 1 1 0%\r
}\r
\r
.usa-collection__heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.13rem; */\r
    line-height: 1.3;\r
    margin-bottom: 0;\r
    margin-top: 0\r
}\r
\r
.usa-collection__description {\r
    margin-bottom: .5rem;\r
    margin-top: .5rem\r
}\r
\r
.usa-collection__meta {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    margin-top: .25rem\r
}\r
\r
.usa-collection__meta-item {\r
    margin-top: .25rem;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: .93rem; */\r
    line-height: 1.3;\r
    display: block;\r
    margin-right: .5rem\r
}\r
\r
.usa-collection__meta-item.usa-tag {\r
    background-color: #dfe1e2;\r
    line-height: .9;\r
    padding-bottom: .25rem;\r
    padding-top: .25rem;\r
    color: #1b1b1b;\r
    display: inline-block;\r
    margin-top: .25rem\r
}\r
\r
.usa-collection__meta-item.usa-tag--new {\r
    background-color: #c05600;\r
    color: #fff\r
}\r
\r
.usa-collection__calendar-date,\r
.usa-footer__social-links a,\r
.usa-form abbr[title=required] {\r
    text-decoration: none\r
}\r
\r
.usa-collection__calendar-date-day,\r
.usa-collection__calendar-date-month {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.13rem; */\r
    display: block;\r
    font-weight: 700;\r
    padding: .25rem;\r
    text-align: center\r
}\r
\r
@media all and (min-width:40em) {\r
\r
    .usa-collection__calendar-date-day,\r
    .usa-collection__calendar-date-month {\r
        padding: .5rem\r
    }\r
}\r
\r
.usa-collection__calendar-date-month {\r
    border-top-left-radius: 2px;\r
    border-top-right-radius: 2px;\r
    background-color: #005ea2;\r
    color: #fff\r
}\r
\r
.usa-collection__calendar-date-day {\r
    border-bottom-left-radius: 2px;\r
    border-bottom-right-radius: 2px;\r
    border: 1px solid #005ea2;\r
    color: #005ea2\r
}\r
\r
.usa-collection--condensed .usa-collection__item {\r
    margin-bottom: .5rem;\r
    margin-top: .5rem;\r
    padding-top: .5rem\r
}\r
\r
.usa-embed-container embed,\r
.usa-embed-container iframe,\r
.usa-embed-container object {\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%\r
}\r
\r
.usa-embed-container {\r
    box-sizing: border-box;\r
    height: 0;\r
    overflow: hidden;\r
    padding-bottom: 56.25%;\r
    position: relative;\r
    max-width: 100%\r
}\r
\r
@supports (aspect-ratio:1) {\r
    .usa-embed-container {\r
        height: inherit;\r
        padding: inherit;\r
        aspect-ratio: 1.7777777778;\r
        max-width: 100%\r
    }\r
\r
    .usa-embed-container>* {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%\r
    }\r
\r
    .usa-embed-container>img,\r
    img.usa-embed-container {\r
        -o-object-fit: cover;\r
        object-fit: cover\r
    }\r
}\r
\r
.usa-footer {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    overflow: hidden\r
}\r
\r
.usa-footer>.grid-container {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-footer>.grid-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.usa-footer__return-to-top {\r
    padding-bottom: 1.25rem;\r
    padding-top: 1.25rem;\r
    line-height: .9\r
}\r
\r
.usa-footer__return-to-top a:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-footer__nav {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem;\r
    padding-left: 0;\r
    padding-right: 0;\r
    border-bottom: 1px solid #a9aeb1\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-footer__nav {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__nav {\r
        padding-left: 1rem;\r
        padding-right: 1rem;\r
        border-bottom: none\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .usa-footer__nav {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.usa-footer__nav>ul {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0\r
}\r
\r
.usa-footer__primary-section {\r
    background-color: #f0f0f0\r
}\r
\r
.usa-footer__primary-container,\r
.usa-footer__primary-section>.grid-container {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-footer__primary-section>.grid-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-footer__primary-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.usa-footer__primary-content {\r
    line-height: 1.1\r
}\r
\r
.usa-footer__primary-link {\r
    padding: 1rem;\r
    color: #1b1b1b;\r
    font-weight: 700;\r
    display: block\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__primary-link {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
}\r
\r
.usa-footer__primary-link--button {\r
    width: 100%;\r
    border: 0;\r
    cursor: pointer\r
}\r
\r
.usa-footer__primary-link--button::before {\r
    background-image: url(../img/usa-icons/expand_more.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 1.25rem 1.25rem;\r
    display: inline-block;\r
    vertical-align: middle\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-footer__primary-link--button::before {\r
        background: 0 0;\r
        background-color: currentColor;\r
        -webkit-mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 1.25rem 1.25rem;\r
        mask-size: 1.25rem 1.25rem\r
    }\r
}\r
\r
.usa-footer__primary-link--button:not([disabled]):focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: -.25rem\r
}\r
\r
.usa-footer__primary-link--button::before {\r
    height: 1.25rem;\r
    width: 1.25rem;\r
    align-items: center;\r
    background-size: contain;\r
    content: "";\r
    display: inline-flex;\r
    justify-content: center;\r
    margin-right: .25rem;\r
    margin-left: -.25rem\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-footer__primary-link--button::before {\r
        background-color: buttonText !important\r
    }\r
}\r
\r
.usa-footer__primary-link--button+.usa-list--unstyled {\r
    margin-top: .5rem;\r
    margin-bottom: .5rem\r
}\r
\r
.usa-footer__primary-link--button[aria-expanded=false]::before {\r
    background-image: url(../img/usa-icons/navigate_next.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 1.25rem 1.25rem;\r
    display: inline-block;\r
    height: 1.25rem;\r
    width: 1.25rem;\r
    content: "";\r
    vertical-align: middle;\r
    margin-right: .25rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-footer__primary-link--button[aria-expanded=false]::before {\r
        background: 0 0;\r
        background-color: currentColor;\r
        -webkit-mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 1.25rem 1.25rem;\r
        mask-size: 1.25rem 1.25rem\r
    }\r
}\r
\r
.usa-footer__primary-link--button[aria-expanded=false]+.usa-list--unstyled {\r
    display: none\r
}\r
\r
.usa-footer__secondary-link {\r
    line-height: 1.1;\r
    margin-left: 1rem;\r
    padding: 0\r
}\r
\r
.usa-footer__secondary-link a:visited {\r
    color: #54278f\r
}\r
\r
.usa-footer__secondary-link a:hover {\r
    color: #1a4480\r
}\r
\r
.usa-footer__secondary-link a:active {\r
    color: #162e51\r
}\r
\r
.usa-footer__secondary-link a:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-footer__secondary-link+.usa-footer__secondary-link {\r
    padding-top: 1rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__secondary-link {\r
        margin-left: 0\r
    }\r
}\r
\r
.usa-footer__contact-info {\r
    line-height: 1.1\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__contact-info {\r
        justify-content: flex-end;\r
        margin-top: .5rem\r
    }\r
}\r
\r
.usa-footer__primary-content {\r
    border-top: 1px solid #a9aeb1\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__primary-content {\r
        border: 0\r
    }\r
}\r
\r
.usa-sign-up {\r
    padding-bottom: 2rem;\r
    padding-top: 1.5rem\r
}\r
\r
.usa-sign-up .usa-button,\r
.usa-sign-up .usa-label {\r
    margin-top: .75rem\r
}\r
\r
.usa-sign-up__heading {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem; */\r
    line-height: 1.2;\r
    font-weight: 700;\r
    margin: 0\r
}\r
\r
.usa-footer__secondary-section {\r
    padding-bottom: 1.25rem;\r
    padding-top: 1.25rem;\r
    color: #1b1b1b;\r
    background-color: #dfe1e2\r
}\r
\r
.usa-footer__secondary-section>.grid-container {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-footer__secondary-section>.grid-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.usa-footer__secondary-section>.grid-container>.grid-row {\r
    justify-content: space-between\r
}\r
\r
.usa-footer__logo {\r
    margin-bottom: .5rem;\r
    margin-top: .5rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__logo {\r
        margin-bottom: 0;\r
        margin-top: 0;\r
        align-items: center\r
    }\r
}\r
\r
.usa-footer__logo-img {\r
    max-width: 5rem\r
}\r
\r
.usa-footer__logo-heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.46rem; */\r
    line-height: .9;\r
    font-weight: 700;\r
    margin-bottom: .5rem;\r
    margin-top: .5rem\r
}\r
\r
.usa-footer__contact-links {\r
    margin-top: 1.5rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__contact-links {\r
        margin-top: 0;\r
        text-align: right\r
    }\r
}\r
\r
.usa-footer__contact-heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.46rem; */\r
    line-height: 1.1;\r
    font-weight: 700;\r
    margin-top: 0\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__contact-heading {\r
        margin-bottom: .25rem;\r
        margin-top: .25rem\r
    }\r
}\r
\r
.usa-footer__social-links {\r
    line-height: .9;\r
    padding-bottom: .5rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__social-links {\r
        justify-content: flex-end\r
    }\r
}\r
\r
.usa-social-link {\r
    height: 3rem;\r
    width: 3rem;\r
    background-color: rgba(0, 0, 0, .1);\r
    display: inline-block;\r
    padding: .25rem\r
}\r
\r
.usa-social-link:hover {\r
    background-color: #fff\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-social-link {\r
        background-color: #d3d3d3;\r
        forced-color-adjust: none\r
    }\r
}\r
\r
.usa-social-link__icon {\r
    display: block;\r
    height: auto;\r
    width: 100%\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer__address {\r
        justify-content: flex-end\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-footer--slim .usa-footer__nav {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
}\r
\r
.usa-footer--slim .usa-footer__address {\r
    padding: 1rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer--slim .usa-footer__address {\r
        padding: 0\r
    }\r
}\r
\r
.usa-footer--slim .usa-footer__logo {\r
    align-items: center\r
}\r
\r
.usa-footer--slim .usa-footer__logo-img {\r
    max-width: 3rem\r
}\r
\r
.usa-footer--slim .usa-footer__contact-info {\r
    display: inline-block\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer--slim .usa-footer__contact-info {\r
        padding-bottom: 1rem;\r
        padding-top: 1rem;\r
        margin-top: 0\r
    }\r
}\r
\r
.usa-footer--big .usa-footer__nav {\r
    margin-left: -1rem;\r
    margin-right: -1rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer--big .usa-footer__nav {\r
        border-bottom: 1px solid #a9aeb1;\r
        padding-top: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-footer--big .usa-footer__nav {\r
        margin-left: 0;\r
        margin-right: 0;\r
        padding-left: 0;\r
        padding-right: 0;\r
        border-bottom: none\r
    }\r
}\r
\r
.usa-footer--big .usa-footer__primary-link {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .98rem; */\r
    font-weight: 700;\r
    line-height: 1.2;\r
    margin: 0\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer--big .usa-footer__primary-link {\r
        padding-bottom: 0;\r
        padding-top: 0;\r
        margin-bottom: .5rem\r
    }\r
\r
    .usa-footer--big .usa-footer__primary-link:hover {\r
        cursor: auto;\r
        text-decoration: none\r
    }\r
}\r
\r
.usa-footer--big .usa-footer__primary-content--collapsible .usa-footer__primary-link {\r
    align-items: center;\r
    display: flex;\r
    justify-content: flex-start\r
}\r
\r
.usa-footer--big .usa-footer__primary-content--collapsible .usa-list--unstyled {\r
    padding-left: 1rem;\r
    padding-right: 1rem;\r
    padding-bottom: 1.25rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-footer--big .usa-footer__primary-content--collapsible .usa-list--unstyled {\r
        padding-left: 0;\r
        padding-right: 0;\r
        padding-bottom: 2rem;\r
        padding-top: .75rem\r
    }\r
}\r
\r
.usa-form {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.3\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-form {\r
        max-width: 20rem\r
    }\r
}\r
\r
.usa-form .usa-input,\r
.usa-form .usa-range,\r
.usa-form .usa-select,\r
.usa-form .usa-textarea {\r
    max-width: none\r
}\r
\r
.usa-form .usa-input--2xs,\r
.usa-form .usa-input-group--2xs {\r
    max-width: 5ex\r
}\r
\r
.usa-form .usa-input--xs,\r
.usa-form .usa-input-group--xs {\r
    max-width: 9ex\r
}\r
\r
.usa-form .usa-input--sm,\r
.usa-form .usa-input--small,\r
.usa-form .usa-input-group--sm,\r
.usa-form .usa-input-group--small {\r
    max-width: 13ex\r
}\r
\r
.usa-form .usa-input--md,\r
.usa-form .usa-input--medium,\r
.usa-form .usa-input-group--md,\r
.usa-form .usa-input-group--medium {\r
    max-width: 20ex\r
}\r
\r
.usa-form .usa-input--lg,\r
.usa-form .usa-input-group--lg {\r
    max-width: 30ex\r
}\r
\r
.usa-form .usa-input--xl,\r
.usa-form .usa-input-group--xl {\r
    max-width: 40ex\r
}\r
\r
.usa-form .usa-input--2xl,\r
.usa-form .usa-input-group--2xl {\r
    max-width: 50ex\r
}\r
\r
.usa-form .usa-button {\r
    margin-top: .5rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-form .usa-button {\r
        margin-top: 1.5rem\r
    }\r
}\r
\r
.usa-form a:where(:not(.usa-button)) {\r
    color: #005ea2;\r
    text-decoration: underline\r
}\r
\r
.usa-form a:where(:not(.usa-button)):visited {\r
    color: #54278f\r
}\r
\r
.usa-form a:where(:not(.usa-button)):hover {\r
    color: #1a4480\r
}\r
\r
.usa-form a:where(:not(.usa-button)):active {\r
    color: #162e51\r
}\r
\r
.usa-form a:where(:not(.usa-button)):focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-form--large {\r
        max-width: 30rem\r
    }\r
}\r
\r
.usa-show-password {\r
    color: #005ea2;\r
    text-decoration: underline;\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    text-align: left;\r
    margin: 0;\r
    padding: 0;\r
    width: auto;\r
    cursor: pointer\r
}\r
\r
.usa-show-password:visited {\r
    color: #54278f\r
}\r
\r
.usa-show-password:hover {\r
    color: #1a4480\r
}\r
\r
.usa-show-password:active {\r
    color: #162e51\r
}\r
\r
.usa-show-password:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-show-password.usa-button--active,\r
.usa-show-password.usa-button--disabled,\r
.usa-show-password.usa-button--hover,\r
.usa-show-password:active,\r
.usa-show-password:disabled,\r
.usa-show-password:disabled.usa-button--active,\r
.usa-show-password:disabled.usa-button--hover,\r
.usa-show-password:disabled.usa-focus,\r
.usa-show-password:disabled:active,\r
.usa-show-password:disabled:focus,\r
.usa-show-password:disabled:hover,\r
.usa-show-password:hover,\r
.usa-show-password[aria-disabled=true],\r
.usa-show-password[aria-disabled=true].usa-button--active,\r
.usa-show-password[aria-disabled=true].usa-button--hover,\r
.usa-show-password[aria-disabled=true].usa-focus,\r
.usa-show-password[aria-disabled=true]:active,\r
.usa-show-password[aria-disabled=true]:focus,\r
.usa-show-password[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-show-password.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-show-password.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-show-password:disabled,\r
.usa-show-password:disabled:hover,\r
.usa-show-password[aria-disabled=true],\r
.usa-show-password[aria-disabled=true]:focus,\r
.usa-show-password[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-show-password:disabled,\r
    .usa-show-password:disabled:hover,\r
    .usa-show-password[aria-disabled=true],\r
    .usa-show-password[aria-disabled=true]:focus,\r
    .usa-show-password[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-form__note,\r
.usa-graphic-list,\r
.usa-show-password {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
.usa-form__note,\r
.usa-show-password {\r
    /* font-size: .93rem; */\r
    line-height: 1.3;\r
    float: right;\r
    margin: .25rem 0 1rem\r
}\r
\r
.usa-graphic-list {\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5\r
}\r
\r
.usa-graphic-list .usa-graphic-list__row .usa-media-block {\r
    margin-bottom: 2rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-graphic-list .usa-graphic-list__row .usa-media-block {\r
        margin-bottom: 4rem\r
    }\r
\r
    .usa-graphic-list .usa-graphic-list__row:last-child .usa-media-block {\r
        margin-bottom: 0\r
    }\r
}\r
\r
.usa-graphic-list .usa-media-block__img {\r
    margin-right: 1.5rem\r
}\r
\r
.usa-graphic-list .usa-media-block__body>:first-child {\r
    margin-top: 0\r
}\r
\r
.usa-graphic-list__heading {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    clear: both;\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem; */\r
    line-height: 1.2;\r
    font-weight: 700\r
}\r
\r
*+.usa-graphic-list__heading {\r
    margin-top: 1.5em\r
}\r
\r
.usa-graphic-list__heading+* {\r
    margin-top: 1em\r
}\r
\r
.usa-header {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5\r
}\r
\r
.usa-header::after {\r
    clear: both;\r
    content: "";\r
    display: block\r
}\r
\r
.usa-header a {\r
    border-bottom: none\r
}\r
\r
.usa-header .usa-search {\r
    margin-top: .5rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-header .usa-search {\r
        float: right\r
    }\r
\r
    .usa-header [role=search] {\r
        float: right;\r
        max-width: calc(27ch + 3rem);\r
        width: 100%\r
    }\r
}\r
\r
.usa-header [type=search] {\r
    min-width: 0\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-header+.usa-hero {\r
        border-top: 1px solid #fff\r
    }\r
\r
    .usa-header+.usa-section,\r
    .usa-header+main {\r
        border-top: 1px solid #dfe1e2\r
    }\r
}\r
\r
@media all and (max-width:63.99em) {\r
    .usa-logo {\r
        flex: 1 1 0%;\r
        /* font-size: .93rem; */\r
        line-height: .9;\r
        margin-left: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-logo {\r
        margin-top: 2rem;\r
        margin-bottom: 1rem;\r
        /* font-size: 1.46rem; */\r
        line-height: 1.1\r
    }\r
}\r
\r
.usa-logo a {\r
    color: #1b1b1b;\r
    text-decoration: none\r
}\r
\r
.usa-logo__text {\r
    display: block;\r
    font-style: normal;\r
    font-weight: 700;\r
    margin: 0\r
}\r
\r
.usa-menu-btn {\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    margin: 0;\r
    padding: 0;\r
    width: auto;\r
    flex: 0 1 auto;\r
    padding-left: .75rem;\r
    padding-right: .75rem;\r
    background-color: #005ea2;\r
    color: #fff;\r
    /* font-size: .87rem; */\r
    height: 3rem;\r
    text-align: center;\r
    text-decoration: none;\r
    text-transform: uppercase\r
}\r
\r
.usa-menu-btn:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-menu-btn.usa-button--active,\r
.usa-menu-btn.usa-button--disabled,\r
.usa-menu-btn.usa-button--hover,\r
.usa-menu-btn:active,\r
.usa-menu-btn:disabled,\r
.usa-menu-btn:disabled.usa-button--active,\r
.usa-menu-btn:disabled.usa-button--hover,\r
.usa-menu-btn:disabled.usa-focus,\r
.usa-menu-btn:disabled:active,\r
.usa-menu-btn:disabled:focus,\r
.usa-menu-btn:disabled:hover,\r
.usa-menu-btn:hover,\r
.usa-menu-btn[aria-disabled=true],\r
.usa-menu-btn[aria-disabled=true].usa-button--active,\r
.usa-menu-btn[aria-disabled=true].usa-button--hover,\r
.usa-menu-btn[aria-disabled=true].usa-focus,\r
.usa-menu-btn[aria-disabled=true]:active,\r
.usa-menu-btn[aria-disabled=true]:focus,\r
.usa-menu-btn[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-menu-btn.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-menu-btn.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-menu-btn:disabled,\r
.usa-menu-btn:disabled:hover,\r
.usa-menu-btn[aria-disabled=true],\r
.usa-menu-btn[aria-disabled=true]:focus,\r
.usa-menu-btn[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-menu-btn:disabled,\r
    .usa-menu-btn:disabled:hover,\r
    .usa-menu-btn[aria-disabled=true],\r
    .usa-menu-btn[aria-disabled=true]:focus,\r
    .usa-menu-btn[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-menu-btn {\r
        display: none\r
    }\r
}\r
\r
.usa-menu-btn:hover {\r
    background-color: #1a4480;\r
    color: #fff;\r
    text-decoration: none\r
}\r
\r
.usa-menu-btn:active,\r
.usa-menu-btn:visited {\r
    color: #fff\r
}\r
\r
.usa-overlay {\r
    bottom: 0;\r
    left: 0;\r
    right: 0;\r
    top: 0;\r
    position: fixed;\r
    background: rgba(0, 0, 0, .7);\r
    opacity: 0;\r
    transition: opacity .15s ease-in-out;\r
    visibility: hidden;\r
    z-index: 400\r
}\r
\r
.usa-overlay.is-visible {\r
    opacity: 1;\r
    visibility: visible\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-header--basic .usa-navbar {\r
        position: relative;\r
        width: 33%\r
    }\r
\r
    .usa-header--basic .usa-nav {\r
        flex-direction: row;\r
        align-items: center;\r
        justify-content: flex-end;\r
        display: flex;\r
        padding: 0 0 .5rem .5rem;\r
        width: 100%\r
    }\r
\r
    .usa-header--basic .usa-nav-container {\r
        align-items: flex-end;\r
        justify-content: space-between;\r
        display: flex\r
    }\r
\r
    .usa-header--basic .usa-nav__link:hover,\r
    .usa-header--basic .usa-nav__primary-item>.usa-current {\r
        position: relative\r
    }\r
\r
    .usa-header--basic .usa-nav__link:hover::after,\r
    .usa-header--basic .usa-nav__primary-item>.usa-current::after {\r
        background-color: #005ea2;\r
        border-radius: 0;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        height: .25rem;\r
        left: 1rem;\r
        right: 1rem;\r
        bottom: -.25rem\r
    }\r
}\r
\r
@media (min-width:64em) and (forced-colors:active) {\r
\r
    .usa-header--basic .usa-nav__link:hover::after,\r
    .usa-header--basic .usa-nav__primary-item>.usa-current::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
\r
    .usa-header--basic .usa-nav__link[aria-expanded=true]::after,\r
    .usa-header--basic .usa-nav__link[aria-expanded=true]:hover::after {\r
        display: none\r
    }\r
\r
    .usa-header--basic .usa-nav__primary {\r
        width: auto\r
    }\r
\r
    .usa-header--basic .usa-nav__primary-item:last-of-type {\r
        position: relative\r
    }\r
\r
    .usa-header--basic .usa-nav__primary-item:last-of-type .usa-nav__submenu {\r
        position: absolute;\r
        right: 0\r
    }\r
\r
    .usa-header--basic .usa-search {\r
        top: 0\r
    }\r
}\r
\r
.usa-header--basic.usa-header--megamenu .usa-nav__inner {\r
    display: flex;\r
    flex-direction: column\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-header--basic.usa-header--megamenu .usa-nav__inner {\r
        display: block;\r
        float: right;\r
        margin-top: -2.5rem\r
    }\r
\r
    .usa-header--basic.usa-header--megamenu .usa-nav__primary-item:last-of-type {\r
        position: static\r
    }\r
\r
    .usa-header--extended {\r
        padding-top: 0\r
    }\r
\r
    .usa-header--extended .usa-nav__primary-item>.usa-current,\r
    .usa-header--extended .usa-nav__primary-item>.usa-nav__link:hover {\r
        position: relative\r
    }\r
\r
    .usa-header--extended .usa-nav__primary-item>.usa-current::after,\r
    .usa-header--extended .usa-nav__primary-item>.usa-nav__link:hover::after {\r
        background-color: #005ea2;\r
        border-radius: 0;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        height: .25rem;\r
        left: 1rem;\r
        right: 1rem;\r
        bottom: 0\r
    }\r
}\r
\r
@media (min-width:64em) and (forced-colors:active) {\r
\r
    .usa-header--extended .usa-nav__primary-item>.usa-current::after,\r
    .usa-header--extended .usa-nav__primary-item>.usa-nav__link:hover::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
\r
    .usa-header--extended .usa-nav__link[aria-expanded=true]::after,\r
    .usa-header--extended .usa-nav__link[aria-expanded=true]:hover::after {\r
        display: none\r
    }\r
\r
    .usa-header--extended .usa-logo {\r
        /* font-size: 2.13rem; */\r
        margin: 2rem 0 1.5rem;\r
        max-width: 33%\r
    }\r
\r
    .usa-header--extended .usa-navbar {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem;\r
        display: block;\r
        height: auto;\r
        overflow: auto\r
    }\r
\r
    .usa-header--extended .usa-logo {\r
        margin: 3rem 0 1.5rem;\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .usa-header--extended .usa-navbar {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-header--extended .usa-nav {\r
        border-top: 1px solid #dfe1e2;\r
        padding: 0;\r
        width: 100%\r
    }\r
\r
    .usa-header--extended .usa-nav__inner {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem;\r
        position: relative\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .usa-header--extended .usa-nav__inner {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-header--extended .usa-nav__primary {\r
        margin-left: -1rem\r
    }\r
\r
    .usa-header--extended .usa-nav__primary::after {\r
        clear: both;\r
        content: "";\r
        display: block\r
    }\r
\r
    .usa-header--extended .usa-nav__link {\r
        padding-bottom: 1rem;\r
        padding-top: 1rem\r
    }\r
\r
    .usa-header--extended .usa-nav__submenu .usa-grid-full {\r
        padding-left: .75rem\r
    }\r
\r
    .usa-header--extended .usa-nav__submenu.usa-megamenu {\r
        left: 0;\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
html.usa-js-loading .usa-nav__submenu,\r
html.usa-js-loading .usa-nav__submenu.usa-megamenu {\r
    position: absolute;\r
    left: -999em;\r
    right: auto\r
}\r
\r
.usa-megamenu .usa-col {\r
    flex: 1 1 auto\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-megamenu .usa-col {\r
        flex: 4 1 0%\r
    }\r
\r
    .usa-megamenu .usa-col .usa-nav__submenu-item a {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .usa-megamenu .usa-col:first-child .usa-nav__submenu-item a {\r
        padding-left: 0\r
    }\r
\r
    .usa-megamenu .usa-col:last-child .usa-nav__submenu-item a {\r
        padding-right: 0\r
    }\r
\r
    .usa-megamenu.usa-nav__submenu {\r
        padding-left: 0;\r
        padding-right: 0;\r
        padding-bottom: 2rem;\r
        padding-top: 2rem;\r
        left: -33%;\r
        right: 0;\r
        width: auto\r
    }\r
\r
    .usa-megamenu.usa-nav__submenu::after,\r
    .usa-megamenu.usa-nav__submenu::before {\r
        bottom: 0;\r
        top: 0;\r
        background-color: #162e51;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        width: calc(50vw - 32rem + 2rem)\r
    }\r
\r
    .usa-megamenu.usa-nav__submenu::before {\r
        right: 100%\r
    }\r
\r
    .usa-megamenu.usa-nav__submenu::after {\r
        left: 100%\r
    }\r
\r
    .usa-header--extended .usa-megamenu.usa-nav__submenu::after,\r
    .usa-header--extended .usa-megamenu.usa-nav__submenu::before {\r
        bottom: 0;\r
        top: 0;\r
        background-color: #162e51;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        width: calc(50vw - 32rem)\r
    }\r
\r
    .usa-nav-container {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
\r
    .usa-nav-container::after {\r
        clear: both;\r
        content: "";\r
        display: block\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .usa-nav-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.usa-navbar {\r
    height: 3rem\r
}\r
\r
@media all and (max-width:63.99em) {\r
    .usa-navbar {\r
        align-items: center;\r
        border-bottom: 1px solid #dfe1e2;\r
        display: flex\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-navbar {\r
        border-bottom: none;\r
        display: inline-block;\r
        height: auto\r
    }\r
}\r
\r
.usa-hero,\r
.usa-icon-list__content>ol,\r
.usa-icon-list__content>p,\r
.usa-icon-list__content>ul {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem */\r
}\r
\r
.usa-hero {\r
    line-height: 1.5;\r
    background-image: url(../img/hero.jpg);\r
    background-position: center;\r
    background-size: cover;\r
    color: #fff\r
}\r
\r
.usa-hero>.grid-container {\r
    position: relative;\r
    padding-bottom: 2rem;\r
    padding-top: 2rem\r
}\r
\r
.usa-hero__callout {\r
    background-color: #162e51;\r
    padding: 2rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-hero__callout {\r
        max-width: 20rem\r
    }\r
}\r
\r
.usa-hero__heading {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    clear: both;\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.95rem; */\r
    font-weight: 700;\r
    color: #00bde3;\r
    line-height: 1.2\r
}\r
\r
*+.usa-hero__heading {\r
    margin-top: 1.5em\r
}\r
\r
.usa-hero__heading+* {\r
    margin-top: 1em\r
}\r
\r
.usa-hero__heading--alt {\r
    color: #fff;\r
    display: block\r
}\r
\r
.usa-icon-list {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    max-width: 72ex\r
}\r
\r
.usa-icon-list__item {\r
    display: flex;\r
    position: relative\r
}\r
\r
.usa-icon-list__item+.usa-icon-list__item,\r
.usa-prose .usa-icon-list__item+.usa-icon-list__item {\r
    padding-top: .75rem\r
}\r
\r
.usa-prose .usa-icon-list {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    max-width: 72ex\r
}\r
\r
.usa-prose .usa-icon-list__item {\r
    display: flex;\r
    position: relative\r
}\r
\r
.usa-icon-list--base-lightest .usa-icon-list__icon {\r
    color: #f0f0f0\r
}\r
\r
.usa-icon-list--base-lighter .usa-icon-list__icon,\r
.usa-identifier__identity-disclaimer a,\r
.usa-identifier__identity-disclaimer a:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-icon-list--base-light .usa-icon-list__icon {\r
    color: #a9aeb1\r
}\r
\r
.usa-icon-list--base .usa-icon-list__icon {\r
    color: #71767a\r
}\r
\r
.usa-icon-list--base-dark .usa-icon-list__icon {\r
    color: #565c65\r
}\r
\r
.usa-icon-list--base-darker .usa-icon-list__icon {\r
    color: #3d4551\r
}\r
\r
.usa-icon-list--base-darkest .usa-icon-list__icon {\r
    color: #1b1b1b\r
}\r
\r
.usa-icon-list--primary-lighter .usa-icon-list__icon {\r
    color: #d9e8f6\r
}\r
\r
.usa-icon-list--primary-light .usa-icon-list__icon {\r
    color: #73b3e7\r
}\r
\r
.usa-icon-list--primary .usa-icon-list__icon {\r
    color: #005ea2\r
}\r
\r
.usa-icon-list--primary-vivid .usa-icon-list__icon {\r
    color: #0050d8\r
}\r
\r
.usa-icon-list--primary-dark .usa-icon-list__icon {\r
    color: #1a4480\r
}\r
\r
.usa-icon-list--primary-darker .usa-icon-list__icon {\r
    color: #162e51\r
}\r
\r
.usa-icon-list--secondary-lighter .usa-icon-list__icon {\r
    color: #f3e1e4\r
}\r
\r
.usa-icon-list--secondary-light .usa-icon-list__icon {\r
    color: #f2938c\r
}\r
\r
.usa-icon-list--secondary .usa-icon-list__icon {\r
    color: #d83933\r
}\r
\r
.usa-icon-list--secondary-vivid .usa-icon-list__icon {\r
    color: #e41d3d\r
}\r
\r
.usa-icon-list--secondary-dark .usa-icon-list__icon {\r
    color: #b50909\r
}\r
\r
.usa-icon-list--secondary-darker .usa-icon-list__icon {\r
    color: #8b0a03\r
}\r
\r
.usa-icon-list--accent-warm-lighter .usa-icon-list__icon {\r
    color: #f2e4d4\r
}\r
\r
.usa-icon-list--accent-warm-light .usa-icon-list__icon {\r
    color: #ffbc78\r
}\r
\r
.usa-icon-list--accent-warm .usa-icon-list__icon {\r
    color: #fa9441\r
}\r
\r
.usa-icon-list--accent-warm-dark .usa-icon-list__icon {\r
    color: #c05600\r
}\r
\r
.usa-icon-list--accent-warm-darker .usa-icon-list__icon {\r
    color: #775540\r
}\r
\r
.usa-icon-list--accent-cool-lighter .usa-icon-list__icon {\r
    color: #e1f3f8\r
}\r
\r
.usa-icon-list--accent-cool-light .usa-icon-list__icon {\r
    color: #97d4ea\r
}\r
\r
.usa-icon-list--accent-cool .usa-icon-list__icon {\r
    color: #00bde3\r
}\r
\r
.usa-icon-list--accent-cool-dark .usa-icon-list__icon {\r
    color: #28a0cb\r
}\r
\r
.usa-icon-list--accent-cool-darker .usa-icon-list__icon {\r
    color: #07648d\r
}\r
\r
.usa-icon-list--error-lighter .usa-icon-list__icon {\r
    color: #f4e3db\r
}\r
\r
.usa-icon-list--error-light .usa-icon-list__icon {\r
    color: #f39268\r
}\r
\r
.usa-icon-list--error .usa-icon-list__icon {\r
    color: #d54309\r
}\r
\r
.usa-icon-list--error-dark .usa-icon-list__icon {\r
    color: #b50909\r
}\r
\r
.usa-icon-list--error-darker .usa-icon-list__icon {\r
    color: #6f3331\r
}\r
\r
.usa-icon-list--warning-lighter .usa-icon-list__icon {\r
    color: #faf3d1\r
}\r
\r
.usa-icon-list--warning-light .usa-icon-list__icon {\r
    color: #fee685\r
}\r
\r
.usa-icon-list--warning .usa-icon-list__icon {\r
    color: #ffbe2e\r
}\r
\r
.usa-icon-list--warning-dark .usa-icon-list__icon {\r
    color: #e5a000\r
}\r
\r
.usa-icon-list--warning-darker .usa-icon-list__icon {\r
    color: #936f38\r
}\r
\r
.usa-icon-list--success-lighter .usa-icon-list__icon {\r
    color: #ecf3ec\r
}\r
\r
.usa-icon-list--success-light .usa-icon-list__icon {\r
    color: #70e17b\r
}\r
\r
.usa-icon-list--success .usa-icon-list__icon {\r
    color: #00a91c\r
}\r
\r
.usa-icon-list--success-dark .usa-icon-list__icon {\r
    color: #008817\r
}\r
\r
.usa-icon-list--success-darker .usa-icon-list__icon {\r
    color: #216e1f\r
}\r
\r
.usa-icon-list--info-lighter .usa-icon-list__icon {\r
    color: #e7f6f8\r
}\r
\r
.usa-icon-list--info-light .usa-icon-list__icon {\r
    color: #99deea\r
}\r
\r
.usa-icon-list--info .usa-icon-list__icon,\r
.usa-section--dark h1,\r
.usa-section--dark h2,\r
.usa-section--dark h3,\r
.usa-section--dark h4,\r
.usa-section--dark h5,\r
.usa-section--dark h6 {\r
    color: #00bde3\r
}\r
\r
.usa-icon-list--info-dark .usa-icon-list__icon {\r
    color: #009ec1\r
}\r
\r
.usa-icon-list--info-darker .usa-icon-list__icon {\r
    color: #2e6276\r
}\r
\r
.usa-icon-list--disabled-lighter .usa-icon-list__icon {\r
    color: #c9c9c9\r
}\r
\r
.usa-icon-list--disabled-light .usa-icon-list__icon {\r
    color: #919191\r
}\r
\r
.usa-icon-list--disabled .usa-icon-list__icon {\r
    color: #757575\r
}\r
\r
.usa-icon-list--disabled-dark .usa-icon-list__icon {\r
    color: #454545\r
}\r
\r
.usa-icon-list--disabled-darker .usa-icon-list__icon {\r
    color: #1b1b1b\r
}\r
\r
.usa-icon-list--emergency .usa-icon-list__icon {\r
    color: #9c3d10\r
}\r
\r
.usa-icon-list--emergency-dark .usa-icon-list__icon {\r
    color: #332d29\r
}\r
\r
.usa-icon-list__icon .usa-icon {\r
    display: block;\r
    height: 1.5rem;\r
    position: relative;\r
    width: 1.5rem\r
}\r
\r
.usa-icon-list__content>ol,\r
.usa-icon-list__content>p,\r
.usa-icon-list__content>ul {\r
    max-width: 72ex\r
}\r
\r
.usa-icon-list[class*=usa-icon-list--size-] {\r
    max-width: none\r
}\r
\r
.usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {\r
    height: 1.005rem;\r
    width: 1.005rem\r
}\r
\r
.usa-icon-list--size-micro .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: .67rem; */\r
    padding-left: .268rem\r
}\r
\r
.usa-icon-list--size-micro .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .61rem */\r
}\r
\r
.usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {\r
    height: 1.2rem;\r
    width: 1.2rem\r
}\r
\r
.usa-icon-list--size-1 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: .8rem; */\r
    padding-left: .32rem\r
}\r
\r
.usa-icon-list--size-1 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .73rem */\r
}\r
\r
.usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {\r
    height: 1.305rem;\r
    width: 1.305rem\r
}\r
\r
.usa-icon-list--size-2 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: .87rem; */\r
    padding-left: .348rem\r
}\r
\r
.usa-icon-list--size-2 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .79rem */\r
}\r
\r
.usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {\r
    height: 1.395rem;\r
    width: 1.395rem\r
}\r
\r
.usa-icon-list--size-3 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: .93rem; */\r
    padding-left: .372rem\r
}\r
\r
.usa-icon-list--size-3 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .85rem */\r
}\r
\r
.usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem\r
}\r
\r
.usa-icon-list--size-4 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1rem; */\r
    padding-left: .4rem\r
}\r
\r
.usa-icon-list--size-4 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .91rem */\r
}\r
\r
.usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {\r
    height: 1.59rem;\r
    width: 1.59rem\r
}\r
\r
.usa-icon-list--size-5 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.06rem; */\r
    padding-left: .424rem\r
}\r
\r
.usa-icon-list--size-5 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .98rem */\r
}\r
\r
.usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {\r
    height: 1.695rem;\r
    width: 1.695rem\r
}\r
\r
.usa-icon-list--size-6 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.13rem; */\r
    padding-left: .452rem\r
}\r
\r
.usa-icon-list--size-6 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.04rem */\r
}\r
\r
.usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {\r
    height: 1.8rem;\r
    width: 1.8rem\r
}\r
\r
.usa-icon-list--size-7 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.2rem; */\r
    padding-left: .48rem\r
}\r
\r
.usa-icon-list--size-7 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.1rem */\r
}\r
\r
.usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {\r
    height: 1.995rem;\r
    width: 1.995rem\r
}\r
\r
.usa-icon-list--size-8 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.33rem; */\r
    padding-left: .532rem\r
}\r
\r
.usa-icon-list--size-8 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.22rem */\r
}\r
\r
.usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {\r
    height: 2.19rem;\r
    width: 2.19rem\r
}\r
\r
.usa-icon-list--size-9 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.46rem; */\r
    padding-left: .584rem\r
}\r
\r
.usa-icon-list--size-9 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem */\r
}\r
\r
.usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {\r
    height: 2.4rem;\r
    width: 2.4rem\r
}\r
\r
.usa-icon-list--size-10 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.6rem; */\r
    padding-left: .64rem\r
}\r
\r
.usa-icon-list--size-10 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.46rem */\r
}\r
\r
.usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {\r
    height: 2.79rem;\r
    width: 2.79rem\r
}\r
\r
.usa-icon-list--size-11 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.86rem; */\r
    padding-left: .744rem\r
}\r
\r
.usa-icon-list--size-11 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.71rem */\r
}\r
\r
.usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {\r
    height: 3.195rem;\r
    width: 3.195rem\r
}\r
\r
.usa-icon-list--size-12 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 2.13rem; */\r
    padding-left: .852rem\r
}\r
\r
.usa-icon-list--size-12 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.95rem */\r
}\r
\r
.usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {\r
    height: 3.6rem;\r
    width: 3.6rem\r
}\r
\r
.usa-icon-list--size-13 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 2.4rem; */\r
    padding-left: .96rem\r
}\r
\r
.usa-icon-list--size-13 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 2.2rem */\r
}\r
\r
.usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {\r
    height: 3.99rem;\r
    width: 3.99rem\r
}\r
\r
.usa-icon-list--size-14 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 2.66rem; */\r
    padding-left: 1.064rem\r
}\r
\r
.usa-icon-list--size-14 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 2.44rem */\r
}\r
\r
.usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {\r
    height: 4.785rem;\r
    width: 4.785rem\r
}\r
\r
.usa-icon-list--size-15 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 3.19rem; */\r
    padding-left: 1.276rem\r
}\r
\r
.usa-icon-list--size-15 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 2.93rem */\r
}\r
\r
.usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {\r
    height: 5.595rem;\r
    width: 5.595rem\r
}\r
\r
.usa-icon-list--size-16 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 3.73rem; */\r
    padding-left: 1.492rem\r
}\r
\r
.usa-icon-list--size-16 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 3.42rem */\r
}\r
\r
.usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {\r
    height: 6.39rem;\r
    width: 6.39rem\r
}\r
\r
.usa-icon-list--size-17 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 4.26rem; */\r
    padding-left: 1.704rem\r
}\r
\r
.usa-icon-list--size-17 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 3.9rem */\r
}\r
\r
.usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {\r
    height: 7.98rem;\r
    width: 7.98rem\r
}\r
\r
.usa-icon-list--size-18 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 5.32rem; */\r
    padding-left: 2.128rem\r
}\r
\r
.usa-icon-list--size-18 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 4.88rem */\r
}\r
\r
.usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {\r
    height: 11.985rem;\r
    width: 11.985rem\r
}\r
\r
.usa-icon-list--size-19 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 7.99rem; */\r
    padding-left: 3.196rem\r
}\r
\r
.usa-icon-list--size-19 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 7.32rem */\r
}\r
\r
.usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {\r
    height: 13.98rem;\r
    width: 13.98rem\r
}\r
\r
.usa-icon-list--size-20 .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 9.32rem; */\r
    padding-left: 3.728rem\r
}\r
\r
.usa-icon-list--size-20 .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 8.54rem */\r
}\r
\r
.usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {\r
    height: 1.305rem;\r
    width: 1.305rem\r
}\r
\r
.usa-icon-list--size-3xs .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: .87rem; */\r
    padding-left: .348rem\r
}\r
\r
.usa-icon-list--size-3xs .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .79rem */\r
}\r
\r
.usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {\r
    height: 1.395rem;\r
    width: 1.395rem\r
}\r
\r
.usa-icon-list--size-2xs .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: .93rem; */\r
    padding-left: .372rem\r
}\r
\r
.usa-icon-list--size-2xs .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .85rem */\r
}\r
\r
.usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem\r
}\r
\r
.usa-icon-list--size-xs .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1rem; */\r
    padding-left: .4rem\r
}\r
\r
.usa-icon-list--size-xs .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .91rem */\r
}\r
\r
.usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {\r
    height: 1.59rem;\r
    width: 1.59rem\r
}\r
\r
.usa-icon-list--size-sm .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.06rem; */\r
    padding-left: .424rem\r
}\r
\r
.usa-icon-list--size-sm .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: .98rem */\r
}\r
\r
.usa-icon-list--size-md .usa-icon-list__icon .usa-icon {\r
    height: 1.695rem;\r
    width: 1.695rem\r
}\r
\r
.usa-icon-list--size-md .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.13rem; */\r
    padding-left: .452rem\r
}\r
\r
.usa-icon-list--size-md .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.04rem */\r
}\r
\r
.usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {\r
    height: 2.19rem;\r
    width: 2.19rem\r
}\r
\r
.usa-icon-list--size-lg .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 1.46rem; */\r
    padding-left: .584rem\r
}\r
\r
.usa-icon-list--size-lg .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem */\r
}\r
\r
.usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {\r
    height: 3.195rem;\r
    width: 3.195rem\r
}\r
\r
.usa-icon-list--size-xl .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 2.13rem; */\r
    padding-left: .852rem\r
}\r
\r
.usa-icon-list--size-xl .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.95rem */\r
}\r
\r
.usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {\r
    height: 3.99rem;\r
    width: 3.99rem\r
}\r
\r
.usa-icon-list--size-2xl .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 2.66rem; */\r
    padding-left: 1.064rem\r
}\r
\r
.usa-icon-list--size-2xl .usa-icon-list__content .usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 2.44rem */\r
}\r
\r
.usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {\r
    height: 4.785rem;\r
    width: 4.785rem\r
}\r
\r
.usa-icon-list--size-3xl .usa-icon-list__content {\r
    max-width: 72ex;\r
    /* font-size: 3.19rem; */\r
    padding-left: 1.276rem\r
}\r
\r
.usa-icon-list--size-3xl .usa-icon-list__content .usa-icon-list__title,\r
.usa-icon-list__title {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 2.93rem */\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {\r
        height: 1.005rem;\r
        width: 1.005rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-micro .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .67rem; */\r
        padding-left: .268rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-micro .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .61rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {\r
        height: 1.2rem;\r
        width: 1.2rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-1 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .8rem; */\r
        padding-left: .32rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-1 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .73rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {\r
        height: 1.305rem;\r
        width: 1.305rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .87rem; */\r
        padding-left: .348rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .79rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {\r
        height: 1.395rem;\r
        width: 1.395rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .93rem; */\r
        padding-left: .372rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .85rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {\r
        height: 1.5rem;\r
        width: 1.5rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-4 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1rem; */\r
        padding-left: .4rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-4 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .91rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {\r
        height: 1.59rem;\r
        width: 1.59rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-5 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.06rem; */\r
        padding-left: .424rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-5 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .98rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {\r
        height: 1.695rem;\r
        width: 1.695rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-6 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.13rem; */\r
        padding-left: .452rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-6 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {\r
        height: 1.8rem;\r
        width: 1.8rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-7 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.2rem; */\r
        padding-left: .48rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-7 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.1rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {\r
        height: 1.995rem;\r
        width: 1.995rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-8 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.33rem; */\r
        padding-left: .532rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-8 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.22rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {\r
        height: 2.19rem;\r
        width: 2.19rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-9 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.46rem; */\r
        padding-left: .584rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-9 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {\r
        height: 2.4rem;\r
        width: 2.4rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-10 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.6rem; */\r
        padding-left: .64rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-10 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {\r
        height: 2.79rem;\r
        width: 2.79rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-11 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.86rem; */\r
        padding-left: .744rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-11 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.71rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {\r
        height: 3.195rem;\r
        width: 3.195rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-12 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.13rem; */\r
        padding-left: .852rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-12 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {\r
        height: 3.6rem;\r
        width: 3.6rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-13 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.4rem; */\r
        padding-left: .96rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-13 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.2rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {\r
        height: 3.99rem;\r
        width: 3.99rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-14 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.66rem; */\r
        padding-left: 1.064rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-14 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {\r
        height: 4.785rem;\r
        width: 4.785rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-15 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.19rem; */\r
        padding-left: 1.276rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-15 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {\r
        height: 5.595rem;\r
        width: 5.595rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-16 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.73rem; */\r
        padding-left: 1.492rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-16 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 3.42rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {\r
        height: 6.39rem;\r
        width: 6.39rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-17 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 4.26rem; */\r
        padding-left: 1.704rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-17 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 3.9rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {\r
        height: 7.98rem;\r
        width: 7.98rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-18 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 5.32rem; */\r
        padding-left: 2.128rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-18 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 4.88rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {\r
        height: 11.985rem;\r
        width: 11.985rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-19 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 7.99rem; */\r
        padding-left: 3.196rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-19 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 7.32rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {\r
        height: 13.98rem;\r
        width: 13.98rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-20 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 9.32rem; */\r
        padding-left: 3.728rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-20 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 8.54rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {\r
        height: 1.305rem;\r
        width: 1.305rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .87rem; */\r
        padding-left: .348rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .79rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {\r
        height: 1.395rem;\r
        width: 1.395rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .93rem; */\r
        padding-left: .372rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .85rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {\r
        height: 1.5rem;\r
        width: 1.5rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1rem; */\r
        padding-left: .4rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .91rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {\r
        height: 1.59rem;\r
        width: 1.59rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-sm .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.06rem; */\r
        padding-left: .424rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-sm .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .98rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-md .usa-icon-list__icon .usa-icon {\r
        height: 1.695rem;\r
        width: 1.695rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-md .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.13rem; */\r
        padding-left: .452rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-md .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {\r
        height: 2.19rem;\r
        width: 2.19rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-lg .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.46rem; */\r
        padding-left: .584rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-lg .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {\r
        height: 3.195rem;\r
        width: 3.195rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.13rem; */\r
        padding-left: .852rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {\r
        height: 3.99rem;\r
        width: 3.99rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.66rem; */\r
        padding-left: 1.064rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-2xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {\r
        height: 4.785rem;\r
        width: 4.785rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.19rem; */\r
        padding-left: 1.276rem\r
    }\r
\r
    .mobile-lg\\:usa-icon-list--size-3xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.93rem */\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {\r
        height: 1.005rem;\r
        width: 1.005rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-micro .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .67rem; */\r
        padding-left: .268rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-micro .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .61rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {\r
        height: 1.2rem;\r
        width: 1.2rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-1 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .8rem; */\r
        padding-left: .32rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-1 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .73rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {\r
        height: 1.305rem;\r
        width: 1.305rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .87rem; */\r
        padding-left: .348rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .79rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {\r
        height: 1.395rem;\r
        width: 1.395rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .93rem; */\r
        padding-left: .372rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .85rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {\r
        height: 1.5rem;\r
        width: 1.5rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-4 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1rem; */\r
        padding-left: .4rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-4 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .91rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {\r
        height: 1.59rem;\r
        width: 1.59rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-5 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.06rem; */\r
        padding-left: .424rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-5 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .98rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {\r
        height: 1.695rem;\r
        width: 1.695rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-6 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.13rem; */\r
        padding-left: .452rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-6 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {\r
        height: 1.8rem;\r
        width: 1.8rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-7 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.2rem; */\r
        padding-left: .48rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-7 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.1rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {\r
        height: 1.995rem;\r
        width: 1.995rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-8 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.33rem; */\r
        padding-left: .532rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-8 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.22rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {\r
        height: 2.19rem;\r
        width: 2.19rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-9 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.46rem; */\r
        padding-left: .584rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-9 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {\r
        height: 2.4rem;\r
        width: 2.4rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-10 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.6rem; */\r
        padding-left: .64rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-10 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {\r
        height: 2.79rem;\r
        width: 2.79rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-11 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.86rem; */\r
        padding-left: .744rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-11 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.71rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {\r
        height: 3.195rem;\r
        width: 3.195rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-12 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.13rem; */\r
        padding-left: .852rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-12 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {\r
        height: 3.6rem;\r
        width: 3.6rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-13 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.4rem; */\r
        padding-left: .96rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-13 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.2rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {\r
        height: 3.99rem;\r
        width: 3.99rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-14 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.66rem; */\r
        padding-left: 1.064rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-14 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {\r
        height: 4.785rem;\r
        width: 4.785rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-15 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.19rem; */\r
        padding-left: 1.276rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-15 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {\r
        height: 5.595rem;\r
        width: 5.595rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-16 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.73rem; */\r
        padding-left: 1.492rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-16 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 3.42rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {\r
        height: 6.39rem;\r
        width: 6.39rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-17 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 4.26rem; */\r
        padding-left: 1.704rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-17 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 3.9rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {\r
        height: 7.98rem;\r
        width: 7.98rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-18 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 5.32rem; */\r
        padding-left: 2.128rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-18 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 4.88rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {\r
        height: 11.985rem;\r
        width: 11.985rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-19 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 7.99rem; */\r
        padding-left: 3.196rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-19 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 7.32rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {\r
        height: 13.98rem;\r
        width: 13.98rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-20 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 9.32rem; */\r
        padding-left: 3.728rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-20 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 8.54rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {\r
        height: 1.305rem;\r
        width: 1.305rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .87rem; */\r
        padding-left: .348rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .79rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {\r
        height: 1.395rem;\r
        width: 1.395rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .93rem; */\r
        padding-left: .372rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .85rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {\r
        height: 1.5rem;\r
        width: 1.5rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1rem; */\r
        padding-left: .4rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .91rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {\r
        height: 1.59rem;\r
        width: 1.59rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-sm .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.06rem; */\r
        padding-left: .424rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-sm .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .98rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-md .usa-icon-list__icon .usa-icon {\r
        height: 1.695rem;\r
        width: 1.695rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-md .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.13rem; */\r
        padding-left: .452rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-md .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {\r
        height: 2.19rem;\r
        width: 2.19rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-lg .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.46rem; */\r
        padding-left: .584rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-lg .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {\r
        height: 3.195rem;\r
        width: 3.195rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.13rem; */\r
        padding-left: .852rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {\r
        height: 3.99rem;\r
        width: 3.99rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.66rem; */\r
        padding-left: 1.064rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-2xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {\r
        height: 4.785rem;\r
        width: 4.785rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.19rem; */\r
        padding-left: 1.276rem\r
    }\r
\r
    .tablet\\:usa-icon-list--size-3xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.93rem */\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:usa-icon-list--size-micro .usa-icon-list__icon .usa-icon {\r
        height: 1.005rem;\r
        width: 1.005rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-micro .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .67rem; */\r
        padding-left: .268rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-micro .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .61rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-1 .usa-icon-list__icon .usa-icon {\r
        height: 1.2rem;\r
        width: 1.2rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-1 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .8rem; */\r
        padding-left: .32rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-1 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .73rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2 .usa-icon-list__icon .usa-icon {\r
        height: 1.305rem;\r
        width: 1.305rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .87rem; */\r
        padding-left: .348rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .79rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3 .usa-icon-list__icon .usa-icon {\r
        height: 1.395rem;\r
        width: 1.395rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .93rem; */\r
        padding-left: .372rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .85rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-4 .usa-icon-list__icon .usa-icon {\r
        height: 1.5rem;\r
        width: 1.5rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-4 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1rem; */\r
        padding-left: .4rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-4 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .91rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-5 .usa-icon-list__icon .usa-icon {\r
        height: 1.59rem;\r
        width: 1.59rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-5 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.06rem; */\r
        padding-left: .424rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-5 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .98rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-6 .usa-icon-list__icon .usa-icon {\r
        height: 1.695rem;\r
        width: 1.695rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-6 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.13rem; */\r
        padding-left: .452rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-6 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-7 .usa-icon-list__icon .usa-icon {\r
        height: 1.8rem;\r
        width: 1.8rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-7 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.2rem; */\r
        padding-left: .48rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-7 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.1rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-8 .usa-icon-list__icon .usa-icon {\r
        height: 1.995rem;\r
        width: 1.995rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-8 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.33rem; */\r
        padding-left: .532rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-8 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.22rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-9 .usa-icon-list__icon .usa-icon {\r
        height: 2.19rem;\r
        width: 2.19rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-9 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.46rem; */\r
        padding-left: .584rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-9 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-10 .usa-icon-list__icon .usa-icon {\r
        height: 2.4rem;\r
        width: 2.4rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-10 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.6rem; */\r
        padding-left: .64rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-10 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-11 .usa-icon-list__icon .usa-icon {\r
        height: 2.79rem;\r
        width: 2.79rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-11 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.86rem; */\r
        padding-left: .744rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-11 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.71rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-12 .usa-icon-list__icon .usa-icon {\r
        height: 3.195rem;\r
        width: 3.195rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-12 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.13rem; */\r
        padding-left: .852rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-12 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-13 .usa-icon-list__icon .usa-icon {\r
        height: 3.6rem;\r
        width: 3.6rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-13 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.4rem; */\r
        padding-left: .96rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-13 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.2rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-14 .usa-icon-list__icon .usa-icon {\r
        height: 3.99rem;\r
        width: 3.99rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-14 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.66rem; */\r
        padding-left: 1.064rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-14 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-15 .usa-icon-list__icon .usa-icon {\r
        height: 4.785rem;\r
        width: 4.785rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-15 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.19rem; */\r
        padding-left: 1.276rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-15 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-16 .usa-icon-list__icon .usa-icon {\r
        height: 5.595rem;\r
        width: 5.595rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-16 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.73rem; */\r
        padding-left: 1.492rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-16 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 3.42rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-17 .usa-icon-list__icon .usa-icon {\r
        height: 6.39rem;\r
        width: 6.39rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-17 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 4.26rem; */\r
        padding-left: 1.704rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-17 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 3.9rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-18 .usa-icon-list__icon .usa-icon {\r
        height: 7.98rem;\r
        width: 7.98rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-18 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 5.32rem; */\r
        padding-left: 2.128rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-18 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 4.88rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-19 .usa-icon-list__icon .usa-icon {\r
        height: 11.985rem;\r
        width: 11.985rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-19 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 7.99rem; */\r
        padding-left: 3.196rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-19 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 7.32rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-20 .usa-icon-list__icon .usa-icon {\r
        height: 13.98rem;\r
        width: 13.98rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-20 .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 9.32rem; */\r
        padding-left: 3.728rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-20 .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 8.54rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3xs .usa-icon-list__icon .usa-icon {\r
        height: 1.305rem;\r
        width: 1.305rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .87rem; */\r
        padding-left: .348rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .79rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2xs .usa-icon-list__icon .usa-icon {\r
        height: 1.395rem;\r
        width: 1.395rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: .93rem; */\r
        padding-left: .372rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .85rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-xs .usa-icon-list__icon .usa-icon {\r
        height: 1.5rem;\r
        width: 1.5rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-xs .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1rem; */\r
        padding-left: .4rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-xs .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .91rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-sm .usa-icon-list__icon .usa-icon {\r
        height: 1.59rem;\r
        width: 1.59rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-sm .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.06rem; */\r
        padding-left: .424rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-sm .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: .98rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-md .usa-icon-list__icon .usa-icon {\r
        height: 1.695rem;\r
        width: 1.695rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-md .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.13rem; */\r
        padding-left: .452rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-md .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-lg .usa-icon-list__icon .usa-icon {\r
        height: 2.19rem;\r
        width: 2.19rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-lg .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 1.46rem; */\r
        padding-left: .584rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-lg .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-xl .usa-icon-list__icon .usa-icon {\r
        height: 3.195rem;\r
        width: 3.195rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.13rem; */\r
        padding-left: .852rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2xl .usa-icon-list__icon .usa-icon {\r
        height: 3.99rem;\r
        width: 3.99rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 2.66rem; */\r
        padding-left: 1.064rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-2xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3xl .usa-icon-list__icon .usa-icon {\r
        height: 4.785rem;\r
        width: 4.785rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3xl .usa-icon-list__content {\r
        max-width: 72ex;\r
        /* font-size: 3.19rem; */\r
        padding-left: 1.276rem\r
    }\r
\r
    .desktop\\:usa-icon-list--size-3xl .usa-icon-list__content .usa-icon-list__title {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 2.93rem */\r
    }\r
}\r
\r
.usa-icon-list__title {\r
    /* font-size: .98rem; */\r
    line-height: 1.2;\r
    margin-bottom: 0;\r
    padding-top: .425ex\r
}\r
\r
.usa-icon-list__title+* {\r
    margin-top: .5rem\r
}\r
\r
.usa-icon-list__content {\r
    /* font-size: 1.06rem; */\r
    padding-left: .424rem\r
}\r
\r
.usa-icon-list__content>:first-child {\r
    margin-top: 0\r
}\r
\r
.usa-icon-list__content>:last-child {\r
    margin-bottom: 0\r
}\r
\r
.usa-icon-list__content ul li,\r
.usa-process-list__item ul {\r
    list-style-type: disc\r
}\r
\r
.usa-identifier {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.3;\r
    color: #fff;\r
    background-color: #1b1b1b;\r
    padding-bottom: 1rem\r
}\r
\r
.usa-identifier__container {\r
    margin-left: auto;\r
    margin-right: auto;\r
    padding-left: 1rem;\r
    padding-right: 1rem;\r
    max-width: 64rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-identifier__container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.usa-identifier__section {\r
    padding-bottom: 1rem;\r
    padding-top: 1rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-identifier__section--masthead .usa-identifier__container {\r
        align-items: center;\r
        display: flex\r
    }\r
}\r
\r
.usa-identifier__logos {\r
    display: flex;\r
    margin-right: 1rem\r
}\r
\r
.usa-identifier__logo {\r
    text-decoration: none;\r
    height: 3rem;\r
    display: block\r
}\r
\r
.usa-identifier__logo+.usa-identifier__logo {\r
    margin-left: .5rem\r
}\r
\r
.usa-identifier__logo-img {\r
    height: 100%;\r
    width: auto\r
}\r
\r
.usa-identifier__identity {\r
    flex: 1 1 0%;\r
    margin-top: 1rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-identifier__identity {\r
        margin-top: 0\r
    }\r
}\r
\r
.usa-identifier__identity-disclaimer,\r
.usa-identifier__identity-domain {\r
    margin: 0;\r
    padding: 0\r
}\r
\r
.usa-identifier__identity-domain {\r
    color: #a9aeb1\r
}\r
\r
.usa-identifier__identity-disclaimer {\r
    font-weight: 700\r
}\r
\r
.usa-identifier__identity-disclaimer a:active,\r
.usa-identifier__identity-disclaimer a:hover {\r
    color: #f0f0f0\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-identifier__section--required-links {\r
        padding-bottom: .5rem;\r
        padding-top: .5rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-identifier__section--required-links {\r
        /* font-size: 1rem */\r
    }\r
}\r
\r
.usa-identifier__required-links-list {\r
    list-style-type: none;\r
    padding-left: 0;\r
    margin-bottom: 0;\r
    margin-top: 0\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-identifier__required-links-list {\r
        -moz-column-count: 2;\r
        column-count: 2;\r
        -moz-column-gap: 2rem;\r
        column-gap: 2rem;\r
        -moz-column-fill: balance;\r
        column-fill: balance\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-identifier__required-links-list {\r
        -moz-column-count: 4;\r
        column-count: 4\r
    }\r
}\r
\r
.usa-identifier__required-links-item {\r
    -moz-column-break-inside: avoid;\r
    break-inside: avoid;\r
    margin-bottom: .75rem\r
}\r
\r
.usa-identifier__required-links-item:last-child,\r
.usa-process-list__item ul li:last-child {\r
    margin-bottom: 0\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-identifier__required-links-item {\r
        margin-bottom: .5rem\r
    }\r
}\r
\r
.usa-identifier__required-link,\r
.usa-identifier__required-link.usa-link {\r
    color: #a9aeb1;\r
    display: inline-block\r
}\r
\r
.usa-identifier__required-link.usa-link:visited,\r
.usa-identifier__required-link:visited {\r
    color: #a9aeb1\r
}\r
\r
.usa-identifier__required-link.usa-link:active,\r
.usa-identifier__required-link.usa-link:hover,\r
.usa-identifier__required-link:active,\r
.usa-identifier__required-link:hover,\r
.usa-identifier__section--usagov a:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-identifier__section--usagov a {\r
    color: #dfe1e2;\r
    font-weight: 700;\r
    display: inline-block;\r
    margin-top: .5rem\r
}\r
\r
.usa-identifier__section--usagov a:active,\r
.usa-identifier__section--usagov a:hover {\r
    color: #f0f0f0\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-identifier__section--usagov a {\r
        margin-top: 0\r
    }\r
\r
    .usa-identifier__usagov-description {\r
        display: inline-flex\r
    }\r
}\r
\r
.usa-in-page-nav-container {\r
    align-items: flex-start;\r
    display: flex\r
}\r
\r
.usa-in-page-nav-container main {\r
    max-width: 64rem;\r
    width: 100%\r
}\r
\r
.usa-in-page-nav {\r
    color: #1b1b1b;\r
    display: none;\r
    margin-left: 2rem;\r
    margin-top: 1.25rem;\r
    max-width: 15rem;\r
    order: 2;\r
    position: sticky;\r
    top: 2rem;\r
    width: 100%\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-in-page-nav {\r
        display: block\r
    }\r
}\r
\r
.usa-in-page-nav__nav {\r
    color: #1b1b1b;\r
    background-color: #fff;\r
    border-radius: .5rem;\r
    padding: 1rem\r
}\r
\r
.usa-in-page-nav__heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: .93rem; */\r
    line-height: 1.3;\r
    font-weight: 700;\r
    margin-bottom: 1rem;\r
    margin-top: 0;\r
    padding: 0\r
}\r
\r
.usa-in-page-nav__list {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    border-left: 1px solid rgba(27, 27, 27, .25);\r
    padding: 0\r
}\r
\r
.usa-in-page-nav__list__item {\r
    border-top: 1px solid #dfe1e2\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button) {\r
    display: block;\r
    padding: .5rem 1rem;\r
    text-decoration: none\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button):not(.usa-current) {\r
    color: #005ea2\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button):not(.usa-current):focus {\r
    outline-offset: 0\r
}\r
\r
.usa-in-page-nav__list .usa-current {\r
    position: relative;\r
    color: #005ea2;\r
    font-weight: 700\r
}\r
\r
.usa-in-page-nav__list .usa-current::after {\r
    background-color: #005ea2;\r
    border-radius: 99rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    bottom: .25rem;\r
    top: .25rem;\r
    width: .25rem;\r
    left: .25rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-in-page-nav__list .usa-current {\r
        position: relative\r
    }\r
\r
    .usa-in-page-nav__list .usa-current::after {\r
        background-color: #005ea2;\r
        border-radius: 99rem;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        bottom: .25rem;\r
        top: .25rem;\r
        width: .25rem;\r
        left: 0\r
    }\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:visited,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button):not(.usa-current):active,\r
.usa-in-page-nav__list a:not(.usa-button):not(.usa-current):hover,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:hover {\r
    color: #1a4480\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button):not(.usa-current):visited {\r
    color: #005ea2\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button).usa-current {\r
    color: #1b1b1b;\r
    font-weight: inherit\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button):hover {\r
    text-decoration: underline;\r
    background-color: none\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button).usa-current {\r
    position: static\r
}\r
\r
.usa-in-page-nav__list a:not(.usa-button).usa-current::after {\r
    background-color: #1b1b1b;\r
    border-radius: 0;\r
    bottom: -1px;\r
    left: 0;\r
    top: 0;\r
    width: .25rem;\r
    z-index: 100\r
}\r
\r
.usa-in-page-nav__item {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: .93rem; */\r
    line-height: 1.1;\r
    border: 0;\r
    position: relative\r
}\r
\r
.usa-in-page-nav__item--primary {\r
    font-weight: 700\r
}\r
\r
.usa-language {\r
    flex-direction: row;\r
    padding: 0 0 .25rem .5rem;\r
    width: 100%\r
}\r
\r
.usa-language--small .usa-button {\r
    padding-left: .75rem;\r
    padding-right: .75rem;\r
    padding-bottom: 0;\r
    padding-top: 0;\r
    /* font-size: .87rem; */\r
    height: 2rem;\r
    margin-top: .3rem;\r
    min-width: 3rem\r
}\r
\r
.usa-language,\r
.usa-language-container {\r
    align-items: center;\r
    justify-content: flex-end;\r
    display: flex\r
}\r
\r
.usa-nav-container .usa-language-container {\r
    align-self: center;\r
    margin-left: 0;\r
    position: absolute;\r
    right: 5rem;\r
    top: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav-container .usa-language-container {\r
        align-self: flex-end;\r
        margin-left: .75rem;\r
        margin-bottom: .5rem;\r
        position: relative;\r
        right: inherit;\r
        top: -2px\r
    }\r
}\r
\r
.usa-language__link {\r
    margin-right: 0\r
}\r
\r
.usa-language__primary {\r
    width: auto\r
}\r
\r
.usa-language__primary-item:last-of-type {\r
    position: relative\r
}\r
\r
.usa-language__primary-item:last-of-type .usa-language__submenu {\r
    position: absolute;\r
    right: 0\r
}\r
\r
.usa-language__submenu {\r
    list-style-type: none;\r
    padding-left: 0;\r
    margin: 0;\r
    background-color: #162e51;\r
    position: absolute;\r
    width: 15rem;\r
    z-index: 400\r
}\r
\r
.usa-language__submenu-item {\r
    border-top: 1px solid #dfe1e2;\r
    /* font-size: .93rem */\r
}\r
\r
.usa-language__submenu .usa-current::after,\r
.usa-language__submenu[aria-hidden=true] {\r
    display: none\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-language__submenu .usa-current::after {\r
        display: none\r
    }\r
}\r
\r
.usa-language__submenu a:not(.usa-button) {\r
    padding-left: 2rem\r
}\r
\r
.usa-language__submenu .usa-language__submenu a:not(.usa-button) {\r
    padding-left: 3rem\r
}\r
\r
.usa-language__submenu .usa-language__submenu .usa-language__submenu a:not(.usa-button) {\r
    padding-left: 4rem\r
}\r
\r
.usa-language__submenu .usa-language__submenu-item a {\r
    color: #fff;\r
    display: block;\r
    line-height: 1.3;\r
    padding: 0;\r
    padding: .5rem;\r
    text-decoration: none\r
}\r
\r
.usa-language__submenu .usa-language__submenu-item a:focus {\r
    outline-offset: -.25rem\r
}\r
\r
.usa-language__submenu .usa-language__submenu-item a:hover {\r
    color: #fff;\r
    text-decoration: underline\r
}\r
\r
.usa-language__submenu-list {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0\r
}\r
\r
.usa-language__submenu-list .usa-language__submenu-list-item {\r
    margin: 0;\r
    /* font-size: .93rem */\r
}\r
\r
.usa-language__submenu-list .usa-language__submenu-list-item a {\r
    line-height: 1.3\r
}\r
\r
.usa-layout-docs__sidenav {\r
    padding-top: 2rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-layout-docs__sidenav {\r
        padding-top: 0\r
    }\r
}\r
\r
.grid-container {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-card {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 10rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-card {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-card-lg {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 15rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-card-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-mobile {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 20rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-mobile {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-mobile-lg {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 30rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-mobile-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-tablet {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 40rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-tablet {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-tablet-lg {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 55rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-tablet-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-desktop {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 64rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-desktop {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-desktop-lg {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 75rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-desktop-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-container-widescreen {\r
    margin-left: auto;\r
    margin-right: auto;\r
    max-width: 87.5rem;\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-container-widescreen {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-card {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 10rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-card {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-card-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 15rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-card-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-mobile {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 20rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-mobile {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-mobile-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 30rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-mobile-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-tablet {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 40rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-tablet {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-tablet-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 55rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-tablet-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-desktop {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-desktop {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-desktop-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 75rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-desktop-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-container-widescreen {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 87.5rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:30em) and (min-width:64em) {\r
    .mobile-lg\\:grid-container-widescreen {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-card {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 10rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-card {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-card-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 15rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-card-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-mobile {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 20rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-mobile {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-mobile-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 30rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-mobile-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-tablet {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 40rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-tablet {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-tablet-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 55rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-tablet-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-desktop {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-desktop {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-desktop-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 75rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-desktop-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-container-widescreen {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 87.5rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:40em) and (min-width:64em) {\r
    .tablet\\:grid-container-widescreen {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-card {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 10rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-card {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-card-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 15rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-card-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-mobile {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 20rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-mobile {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-mobile-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 30rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-mobile-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-tablet {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 40rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-tablet {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-tablet-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 55rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-tablet-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-desktop {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 64rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-desktop {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-desktop-lg {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 75rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-desktop-lg {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-container-widescreen {\r
        margin-left: auto;\r
        margin-right: auto;\r
        max-width: 87.5rem;\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .desktop\\:grid-container-widescreen {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
}\r
\r
.grid-row {\r
    display: flex;\r
    flex-wrap: wrap\r
}\r
\r
.grid-row.grid-gap {\r
    margin-left: -.5rem;\r
    margin-right: -.5rem\r
}\r
\r
.grid-row.grid-gap>* {\r
    padding-left: .5rem;\r
    padding-right: .5rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-row.grid-gap {\r
        margin-left: -1rem;\r
        margin-right: -1rem\r
    }\r
\r
    .grid-row.grid-gap>* {\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
}\r
\r
.grid-row.grid-gap-0 {\r
    margin-left: 0;\r
    margin-right: 0\r
}\r
\r
.grid-row.grid-gap-0>* {\r
    padding-left: 0;\r
    padding-right: 0\r
}\r
\r
.grid-row.grid-gap-2px {\r
    margin-left: -1px;\r
    margin-right: -1px\r
}\r
\r
.grid-row.grid-gap-2px>* {\r
    padding-left: 1px;\r
    padding-right: 1px\r
}\r
\r
.grid-row.grid-gap-05 {\r
    margin-left: -2px;\r
    margin-right: -2px\r
}\r
\r
.grid-row.grid-gap-05>* {\r
    padding-left: 2px;\r
    padding-right: 2px\r
}\r
\r
.grid-row.grid-gap-1 {\r
    margin-left: -.25rem;\r
    margin-right: -.25rem\r
}\r
\r
.grid-row.grid-gap-1>* {\r
    padding-left: .25rem;\r
    padding-right: .25rem\r
}\r
\r
.grid-row.grid-gap-2 {\r
    margin-left: -.5rem;\r
    margin-right: -.5rem\r
}\r
\r
.grid-row.grid-gap-2>* {\r
    padding-left: .5rem;\r
    padding-right: .5rem\r
}\r
\r
.grid-row.grid-gap-3 {\r
    margin-left: -.75rem;\r
    margin-right: -.75rem\r
}\r
\r
.grid-row.grid-gap-3>* {\r
    padding-left: .75rem;\r
    padding-right: .75rem\r
}\r
\r
.grid-row.grid-gap-4 {\r
    margin-left: -1rem;\r
    margin-right: -1rem\r
}\r
\r
.grid-row.grid-gap-4>* {\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
.grid-row.grid-gap-5 {\r
    margin-left: -1.25rem;\r
    margin-right: -1.25rem\r
}\r
\r
.grid-row.grid-gap-5>* {\r
    padding-left: 1.25rem;\r
    padding-right: 1.25rem\r
}\r
\r
.grid-row.grid-gap-6 {\r
    margin-left: -1.5rem;\r
    margin-right: -1.5rem\r
}\r
\r
.grid-row.grid-gap-6>* {\r
    padding-left: 1.5rem;\r
    padding-right: 1.5rem\r
}\r
\r
.grid-row.grid-gap-sm {\r
    margin-left: -1px;\r
    margin-right: -1px\r
}\r
\r
.grid-row.grid-gap-sm>* {\r
    padding-left: 1px;\r
    padding-right: 1px\r
}\r
\r
.grid-row.grid-gap-md {\r
    margin-left: -.5rem;\r
    margin-right: -.5rem\r
}\r
\r
.grid-row.grid-gap-md>* {\r
    padding-left: .5rem;\r
    padding-right: .5rem\r
}\r
\r
.grid-row.grid-gap-lg {\r
    margin-left: -.75rem;\r
    margin-right: -.75rem\r
}\r
\r
.grid-row.grid-gap-lg>* {\r
    padding-left: .75rem;\r
    padding-right: .75rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .grid-row.mobile-lg\\:grid-gap-0 {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-0>* {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-2px {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-2px>* {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-05 {\r
        margin-left: -2px;\r
        margin-right: -2px\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-05>* {\r
        padding-left: 2px;\r
        padding-right: 2px\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-1 {\r
        margin-left: -.25rem;\r
        margin-right: -.25rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-1>* {\r
        padding-left: .25rem;\r
        padding-right: .25rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-2 {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-2>* {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-3 {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-3>* {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-4 {\r
        margin-left: -1rem;\r
        margin-right: -1rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-4>* {\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-5 {\r
        margin-left: -1.25rem;\r
        margin-right: -1.25rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-5>* {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-6 {\r
        margin-left: -1.5rem;\r
        margin-right: -1.5rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-6>* {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-sm {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-sm>* {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-md {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-md>* {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-lg {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .grid-row.mobile-lg\\:grid-gap-lg>* {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .grid-row.tablet\\:grid-gap-0 {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-0>* {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-2px {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-2px>* {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-05 {\r
        margin-left: -2px;\r
        margin-right: -2px\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-05>* {\r
        padding-left: 2px;\r
        padding-right: 2px\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-1 {\r
        margin-left: -.25rem;\r
        margin-right: -.25rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-1>* {\r
        padding-left: .25rem;\r
        padding-right: .25rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-2 {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-2>* {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-3 {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-3>* {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-4 {\r
        margin-left: -1rem;\r
        margin-right: -1rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-4>* {\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-5 {\r
        margin-left: -1.25rem;\r
        margin-right: -1.25rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-5>* {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-6 {\r
        margin-left: -1.5rem;\r
        margin-right: -1.5rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-6>* {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-sm {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-sm>* {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-md {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-md>* {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-lg {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .grid-row.tablet\\:grid-gap-lg>* {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .grid-row.desktop\\:grid-gap-0 {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-0>* {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-2px {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-2px>* {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-05 {\r
        margin-left: -2px;\r
        margin-right: -2px\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-05>* {\r
        padding-left: 2px;\r
        padding-right: 2px\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-1 {\r
        margin-left: -.25rem;\r
        margin-right: -.25rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-1>* {\r
        padding-left: .25rem;\r
        padding-right: .25rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-2 {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-2>* {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-3 {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-3>* {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-4 {\r
        margin-left: -1rem;\r
        margin-right: -1rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-4>* {\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-5 {\r
        margin-left: -1.25rem;\r
        margin-right: -1.25rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-5>* {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-6 {\r
        margin-left: -1.5rem;\r
        margin-right: -1.5rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-6>* {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-sm {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-sm>* {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-md {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-md>* {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-lg {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .grid-row.desktop\\:grid-gap-lg>* {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
}\r
\r
[class*=grid-col] {\r
    position: relative;\r
    width: 100%;\r
    box-sizing: border-box\r
}\r
\r
.grid-col {\r
    flex: 1 1 0%;\r
    width: auto;\r
    max-width: 100%;\r
    min-width: 1px\r
}\r
\r
.grid-col-auto,\r
.grid-col-fill {\r
    flex: 0 1 auto;\r
    width: auto;\r
    max-width: 100%\r
}\r
\r
.grid-col-fill {\r
    flex: 1 1 0%;\r
    min-width: 1px\r
}\r
\r
.grid-col-1,\r
.grid-col-2 {\r
    flex: 0 1 auto;\r
    width: 8.3333333333%\r
}\r
\r
.grid-col-2 {\r
    width: 16.6666666667%\r
}\r
\r
.grid-col-3,\r
.grid-col-4 {\r
    flex: 0 1 auto;\r
    width: 25%\r
}\r
\r
.grid-col-4 {\r
    width: 33.3333333333%\r
}\r
\r
.grid-col-5,\r
.grid-col-6 {\r
    flex: 0 1 auto;\r
    width: 41.6666666667%\r
}\r
\r
.grid-col-6 {\r
    width: 50%\r
}\r
\r
.grid-col-7,\r
.grid-col-8 {\r
    flex: 0 1 auto;\r
    width: 58.3333333333%\r
}\r
\r
.grid-col-8 {\r
    width: 66.6666666667%\r
}\r
\r
.grid-col-10,\r
.grid-col-9 {\r
    flex: 0 1 auto;\r
    width: 75%\r
}\r
\r
.grid-col-10 {\r
    width: 83.3333333333%\r
}\r
\r
.grid-col-11,\r
.grid-col-12 {\r
    flex: 0 1 auto;\r
    width: 91.6666666667%\r
}\r
\r
.grid-col-12 {\r
    width: 100%\r
}\r
\r
@media all and (min-width:30em) {\r
\r
    .mobile-lg\\:grid-col,\r
    .mobile-lg\\:grid-col-fill {\r
        flex: 1 1 0%;\r
        width: auto;\r
        max-width: 100%;\r
        min-width: 1px\r
    }\r
\r
    .mobile-lg\\:grid-col-auto {\r
        flex: 0 1 auto;\r
        width: auto;\r
        max-width: 100%\r
    }\r
\r
    .mobile-lg\\:grid-col-1 {\r
        flex: 0 1 auto;\r
        width: 8.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-col-2 {\r
        flex: 0 1 auto;\r
        width: 16.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-col-3 {\r
        flex: 0 1 auto;\r
        width: 25%\r
    }\r
\r
    .mobile-lg\\:grid-col-4 {\r
        flex: 0 1 auto;\r
        width: 33.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-col-5 {\r
        flex: 0 1 auto;\r
        width: 41.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-col-6 {\r
        flex: 0 1 auto;\r
        width: 50%\r
    }\r
\r
    .mobile-lg\\:grid-col-7 {\r
        flex: 0 1 auto;\r
        width: 58.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-col-8 {\r
        flex: 0 1 auto;\r
        width: 66.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-col-9 {\r
        flex: 0 1 auto;\r
        width: 75%\r
    }\r
\r
    .mobile-lg\\:grid-col-10 {\r
        flex: 0 1 auto;\r
        width: 83.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-col-11 {\r
        flex: 0 1 auto;\r
        width: 91.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-col-12 {\r
        flex: 0 1 auto;\r
        width: 100%\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
\r
    .tablet\\:grid-col,\r
    .tablet\\:grid-col-fill {\r
        flex: 1 1 0%;\r
        width: auto;\r
        max-width: 100%;\r
        min-width: 1px\r
    }\r
\r
    .tablet\\:grid-col-auto {\r
        flex: 0 1 auto;\r
        width: auto;\r
        max-width: 100%\r
    }\r
\r
    .tablet\\:grid-col-1 {\r
        flex: 0 1 auto;\r
        width: 8.3333333333%\r
    }\r
\r
    .tablet\\:grid-col-2 {\r
        flex: 0 1 auto;\r
        width: 16.6666666667%\r
    }\r
\r
    .tablet\\:grid-col-3 {\r
        flex: 0 1 auto;\r
        width: 25%\r
    }\r
\r
    .tablet\\:grid-col-4 {\r
        flex: 0 1 auto;\r
        width: 33.3333333333%\r
    }\r
\r
    .tablet\\:grid-col-5 {\r
        flex: 0 1 auto;\r
        width: 41.6666666667%\r
    }\r
\r
    .tablet\\:grid-col-6 {\r
        flex: 0 1 auto;\r
        width: 50%\r
    }\r
\r
    .tablet\\:grid-col-7 {\r
        flex: 0 1 auto;\r
        width: 58.3333333333%\r
    }\r
\r
    .tablet\\:grid-col-8 {\r
        flex: 0 1 auto;\r
        width: 66.6666666667%\r
    }\r
\r
    .tablet\\:grid-col-9 {\r
        flex: 0 1 auto;\r
        width: 75%\r
    }\r
\r
    .tablet\\:grid-col-10 {\r
        flex: 0 1 auto;\r
        width: 83.3333333333%\r
    }\r
\r
    .tablet\\:grid-col-11 {\r
        flex: 0 1 auto;\r
        width: 91.6666666667%\r
    }\r
\r
    .tablet\\:grid-col-12 {\r
        flex: 0 1 auto;\r
        width: 100%\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
\r
    .desktop\\:grid-col,\r
    .desktop\\:grid-col-fill {\r
        flex: 1 1 0%;\r
        width: auto;\r
        max-width: 100%;\r
        min-width: 1px\r
    }\r
\r
    .desktop\\:grid-col-auto {\r
        flex: 0 1 auto;\r
        width: auto;\r
        max-width: 100%\r
    }\r
\r
    .desktop\\:grid-col-1 {\r
        flex: 0 1 auto;\r
        width: 8.3333333333%\r
    }\r
\r
    .desktop\\:grid-col-2 {\r
        flex: 0 1 auto;\r
        width: 16.6666666667%\r
    }\r
\r
    .desktop\\:grid-col-3 {\r
        flex: 0 1 auto;\r
        width: 25%\r
    }\r
\r
    .desktop\\:grid-col-4 {\r
        flex: 0 1 auto;\r
        width: 33.3333333333%\r
    }\r
\r
    .desktop\\:grid-col-5 {\r
        flex: 0 1 auto;\r
        width: 41.6666666667%\r
    }\r
\r
    .desktop\\:grid-col-6 {\r
        flex: 0 1 auto;\r
        width: 50%\r
    }\r
\r
    .desktop\\:grid-col-7 {\r
        flex: 0 1 auto;\r
        width: 58.3333333333%\r
    }\r
\r
    .desktop\\:grid-col-8 {\r
        flex: 0 1 auto;\r
        width: 66.6666666667%\r
    }\r
\r
    .desktop\\:grid-col-9 {\r
        flex: 0 1 auto;\r
        width: 75%\r
    }\r
\r
    .desktop\\:grid-col-10 {\r
        flex: 0 1 auto;\r
        width: 83.3333333333%\r
    }\r
\r
    .desktop\\:grid-col-11 {\r
        flex: 0 1 auto;\r
        width: 91.6666666667%\r
    }\r
\r
    .desktop\\:grid-col-12 {\r
        flex: 0 1 auto;\r
        width: 100%\r
    }\r
}\r
\r
.grid-offset-1 {\r
    margin-left: 8.3333333333%\r
}\r
\r
.grid-offset-2 {\r
    margin-left: 16.6666666667%\r
}\r
\r
.grid-offset-3 {\r
    margin-left: 25%\r
}\r
\r
.grid-offset-4 {\r
    margin-left: 33.3333333333%\r
}\r
\r
.grid-offset-5 {\r
    margin-left: 41.6666666667%\r
}\r
\r
.grid-offset-6 {\r
    margin-left: 50%\r
}\r
\r
.grid-offset-7 {\r
    margin-left: 58.3333333333%\r
}\r
\r
.grid-offset-8 {\r
    margin-left: 66.6666666667%\r
}\r
\r
.grid-offset-9 {\r
    margin-left: 75%\r
}\r
\r
.grid-offset-10 {\r
    margin-left: 83.3333333333%\r
}\r
\r
.grid-offset-11 {\r
    margin-left: 91.6666666667%\r
}\r
\r
.grid-offset-12 {\r
    margin-left: 100%\r
}\r
\r
.grid-offset-none {\r
    margin-left: 0\r
}\r
\r
@media all and (min-width:30em) {\r
    .mobile-lg\\:grid-offset-1 {\r
        margin-left: 8.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-offset-2 {\r
        margin-left: 16.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-offset-3 {\r
        margin-left: 25%\r
    }\r
\r
    .mobile-lg\\:grid-offset-4 {\r
        margin-left: 33.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-offset-5 {\r
        margin-left: 41.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-offset-6 {\r
        margin-left: 50%\r
    }\r
\r
    .mobile-lg\\:grid-offset-7 {\r
        margin-left: 58.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-offset-8 {\r
        margin-left: 66.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-offset-9 {\r
        margin-left: 75%\r
    }\r
\r
    .mobile-lg\\:grid-offset-10 {\r
        margin-left: 83.3333333333%\r
    }\r
\r
    .mobile-lg\\:grid-offset-11 {\r
        margin-left: 91.6666666667%\r
    }\r
\r
    .mobile-lg\\:grid-offset-12 {\r
        margin-left: 100%\r
    }\r
\r
    .mobile-lg\\:grid-offset-none {\r
        margin-left: 0\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
    .tablet\\:grid-offset-1 {\r
        margin-left: 8.3333333333%\r
    }\r
\r
    .tablet\\:grid-offset-2 {\r
        margin-left: 16.6666666667%\r
    }\r
\r
    .tablet\\:grid-offset-3 {\r
        margin-left: 25%\r
    }\r
\r
    .tablet\\:grid-offset-4 {\r
        margin-left: 33.3333333333%\r
    }\r
\r
    .tablet\\:grid-offset-5 {\r
        margin-left: 41.6666666667%\r
    }\r
\r
    .tablet\\:grid-offset-6 {\r
        margin-left: 50%\r
    }\r
\r
    .tablet\\:grid-offset-7 {\r
        margin-left: 58.3333333333%\r
    }\r
\r
    .tablet\\:grid-offset-8 {\r
        margin-left: 66.6666666667%\r
    }\r
\r
    .tablet\\:grid-offset-9 {\r
        margin-left: 75%\r
    }\r
\r
    .tablet\\:grid-offset-10 {\r
        margin-left: 83.3333333333%\r
    }\r
\r
    .tablet\\:grid-offset-11 {\r
        margin-left: 91.6666666667%\r
    }\r
\r
    .tablet\\:grid-offset-12 {\r
        margin-left: 100%\r
    }\r
\r
    .tablet\\:grid-offset-none {\r
        margin-left: 0\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .desktop\\:grid-offset-1 {\r
        margin-left: 8.3333333333%\r
    }\r
\r
    .desktop\\:grid-offset-2 {\r
        margin-left: 16.6666666667%\r
    }\r
\r
    .desktop\\:grid-offset-3 {\r
        margin-left: 25%\r
    }\r
\r
    .desktop\\:grid-offset-4 {\r
        margin-left: 33.3333333333%\r
    }\r
\r
    .desktop\\:grid-offset-5 {\r
        margin-left: 41.6666666667%\r
    }\r
\r
    .desktop\\:grid-offset-6 {\r
        margin-left: 50%\r
    }\r
\r
    .desktop\\:grid-offset-7 {\r
        margin-left: 58.3333333333%\r
    }\r
\r
    .desktop\\:grid-offset-8 {\r
        margin-left: 66.6666666667%\r
    }\r
\r
    .desktop\\:grid-offset-9 {\r
        margin-left: 75%\r
    }\r
\r
    .desktop\\:grid-offset-10 {\r
        margin-left: 83.3333333333%\r
    }\r
\r
    .desktop\\:grid-offset-11 {\r
        margin-left: 91.6666666667%\r
    }\r
\r
    .desktop\\:grid-offset-12 {\r
        margin-left: 100%\r
    }\r
\r
    .desktop\\:grid-offset-none {\r
        margin-left: 0\r
    }\r
}\r
\r
.usa-media-block {\r
    align-items: flex-start;\r
    display: flex\r
}\r
\r
.usa-media-block__img {\r
    flex-shrink: 0;\r
    margin-right: .5rem\r
}\r
\r
.usa-media-block__body {\r
    flex: 1 1 0%\r
}\r
\r
.usa-js-no-click {\r
    -webkit-user-select: none;\r
    -moz-user-select: none;\r
    user-select: none\r
}\r
\r
.usa-js-no-click .usa-modal,\r
.usa-js-no-click .usa-modal * {\r
    pointer-events: auto;\r
    -webkit-user-select: text;\r
    -moz-user-select: text;\r
    user-select: text\r
}\r
\r
.usa-js-no-click,\r
[data-open-modal] * {\r
    pointer-events: none\r
}\r
\r
.usa-modal-wrapper {\r
    text-align: center;\r
    transition: opacity .15s ease-in-out\r
}\r
\r
.usa-modal-wrapper.is-hidden {\r
    visibility: hidden;\r
    opacity: 0;\r
    position: fixed\r
}\r
\r
.usa-modal-wrapper.is-visible {\r
    visibility: visible;\r
    opacity: 1;\r
    position: fixed;\r
    z-index: 99999\r
}\r
\r
.usa-modal-overlay {\r
    background: rgba(0, 0, 0, .7);\r
    bottom: 0;\r
    height: 100%;\r
    left: 0;\r
    overflow: scroll;\r
    overflow-x: hidden;\r
    padding: 1.5rem;\r
    position: fixed;\r
    scroll-behavior: smooth;\r
    top: 0;\r
    width: 100%\r
}\r
\r
.usa-modal-overlay:before {\r
    content: "";\r
    display: inline-block;\r
    height: 100%;\r
    vertical-align: middle\r
}\r
\r
.usa-modal-overlay[data-force-action=true] {\r
    pointer-events: none\r
}\r
\r
.usa-modal-overlay[data-force-action=true] * {\r
    pointer-events: auto\r
}\r
\r
.usa-js-loading .usa-modal-wrapper {\r
    position: absolute;\r
    left: -999em;\r
    right: auto\r
}\r
\r
.usa-js-loading .usa-modal-wrapper:target {\r
    position: static\r
}\r
\r
.usa-modal {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    border-radius: .5rem;\r
    background: #fff;\r
    color: #1b1b1b;\r
    display: inline-block;\r
    margin: 1.25rem auto;\r
    max-width: 30rem;\r
    position: relative;\r
    text-align: left;\r
    vertical-align: middle;\r
    width: 100%\r
}\r
\r
.usa-modal:focus {\r
    outline: 0\r
}\r
\r
.usa-modal__content {\r
    display: flex;\r
    flex-direction: column-reverse;\r
    padding-top: 2rem;\r
    width: 100%\r
}\r
\r
.usa-modal__main {\r
    margin: 0 auto;\r
    padding: .5rem 2rem 2rem\r
}\r
\r
.usa-modal-wrapper [data-close-modal]>.usa-icon,\r
.usa-modal-wrapper [data-close-modal]>.usa-icon use {\r
    pointer-events: none !important\r
}\r
\r
.usa-modal__close {\r
    align-items: center;\r
    align-self: flex-end;\r
    background-color: transparent;\r
    color: #71767a;\r
    display: flex;\r
    flex-shrink: 0;\r
    /* font-size: .93rem; */\r
    margin: -2rem 0 0 auto;\r
    padding: .25rem;\r
    width: auto\r
}\r
\r
.usa-modal__close:active,\r
.usa-modal__close:hover {\r
    background-color: transparent;\r
    color: #1b1b1b\r
}\r
\r
.usa-modal__close:focus {\r
    outline-offset: 0\r
}\r
\r
.usa-modal__close .usa-icon {\r
    height: 2rem;\r
    margin: 2px 2px 0 0;\r
    width: 2rem\r
}\r
\r
.usa-modal__heading {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
    /* font-size: 1.34rem; */\r
    line-height: 1.4;\r
    margin-top: 0\r
}\r
\r
.usa-modal__footer {\r
    margin-top: 1.5rem\r
}\r
\r
.usa-modal--lg {\r
    max-width: 55rem;\r
    width: 100%\r
}\r
\r
.usa-modal--lg .usa-modal__main {\r
    padding-bottom: 4rem;\r
    padding-top: 1.25rem;\r
    width: 100%;\r
    max-width: 40rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-modal--lg .usa-modal__heading {\r
        font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\r
        /* font-size: 1.95rem */\r
    }\r
}\r
\r
.usa-js-modal--active {\r
    overflow: hidden\r
}\r
\r
.usa-nav {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: .9\r
}\r
\r
@media all and (max-width:63.99em) {\r
    .usa-nav {\r
        right: 0;\r
        bottom: 0;\r
        top: 0;\r
        position: fixed;\r
        background: #fff;\r
        border-right: 0;\r
        display: none;\r
        flex-direction: column;\r
        overflow-y: auto;\r
        padding: 1rem;\r
        width: 35vw;\r
        z-index: 500\r
    }\r
\r
    .usa-nav.is-visible {\r
        animation: slidein-left .3s ease-in-out;\r
        display: flex\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav {\r
        float: right;\r
        position: relative\r
    }\r
}\r
\r
.usa-nav .usa-search {\r
    margin-top: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav .usa-search {\r
        margin-left: 1rem;\r
        margin-top: 0\r
    }\r
}\r
\r
.usa-nav .usa-accordion {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: .9\r
}\r
\r
@media all and (max-width:63.99em) {\r
    .usa-nav__primary {\r
        margin-bottom: 0;\r
        margin-top: 0;\r
        list-style-type: none;\r
        padding-left: 0\r
    }\r
\r
    .usa-nav__primary>li {\r
        margin-bottom: 0;\r
        max-width: unset\r
    }\r
\r
    .usa-nav__primary-item {\r
        border-top: 1px solid #dfe1e2\r
    }\r
\r
    .usa-nav__primary a:not(.usa-button) {\r
        display: block;\r
        padding: .5rem 1rem;\r
        text-decoration: none\r
    }\r
\r
    .usa-nav__primary a:not(.usa-button):hover {\r
        background-color: #f0f0f0;\r
        text-decoration: none\r
    }\r
\r
    .usa-nav__primary a:not(.usa-button):not(.usa-current) {\r
        color: #565c65\r
    }\r
\r
    .usa-nav__primary a:not(.usa-button):not(.usa-current):hover {\r
        color: #005ea2\r
    }\r
\r
    .usa-nav__primary a:not(.usa-button):not(.usa-current):focus {\r
        outline-offset: 0\r
    }\r
\r
    .usa-nav__primary .usa-current {\r
        position: relative;\r
        color: #005ea2;\r
        font-weight: 700\r
    }\r
\r
    .usa-nav__primary .usa-current::after {\r
        background-color: #005ea2;\r
        border-radius: 99rem;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        bottom: .25rem;\r
        top: .25rem;\r
        width: .25rem;\r
        left: .25rem\r
    }\r
}\r
\r
@media all and (max-width:63.99em) and (min-width:40em) {\r
    .usa-nav__primary .usa-current {\r
        position: relative\r
    }\r
\r
    .usa-nav__primary .usa-current::after {\r
        background-color: #005ea2;\r
        border-radius: 99rem;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        bottom: .25rem;\r
        top: .25rem;\r
        width: .25rem;\r
        left: 0\r
    }\r
}\r
\r
@media all and (max-width:63.99em) {\r
    .usa-nav__primary a {\r
        padding-bottom: .75rem;\r
        padding-top: .75rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__primary {\r
        display: flex;\r
        align-items: stretch\r
    }\r
}\r
\r
.usa-nav__primary .usa-nav__primary-item a {\r
    text-decoration: none\r
}\r
\r
.usa-nav__primary>.usa-nav__primary-item {\r
    line-height: 1.1\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__primary>.usa-nav__primary-item {\r
        /* font-size: .93rem; */\r
        line-height: .9\r
    }\r
\r
    .usa-nav__primary>.usa-nav__primary-item>a {\r
        line-height: .9;\r
        padding: 1rem;\r
        align-items: center;\r
        color: #565c65;\r
        display: flex;\r
        font-weight: 700;\r
        height: 100%\r
    }\r
\r
    .usa-nav__primary>.usa-nav__primary-item>a:hover {\r
        color: #005ea2\r
    }\r
\r
    .usa-nav__primary>.usa-nav__primary-item>button {\r
        height: 100%\r
    }\r
\r
    .usa-nav__primary a {\r
        padding-bottom: .5rem;\r
        padding-top: .5rem\r
    }\r
}\r
\r
.usa-nav__primary button {\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    justify-content: normal;\r
    text-align: left;\r
    margin: 0;\r
    padding: 0;\r
    position: relative;\r
    color: #565c65;\r
    font-weight: 400;\r
    line-height: 1.1;\r
    padding: .75rem 1rem;\r
    text-decoration: none;\r
    width: 100%\r
}\r
\r
.usa-nav__primary button:visited {\r
    color: #54278f\r
}\r
\r
.usa-nav__primary button:active {\r
    color: #162e51\r
}\r
\r
.usa-nav__primary button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-nav__primary button.usa-button--active,\r
.usa-nav__primary button.usa-button--disabled,\r
.usa-nav__primary button.usa-button--hover,\r
.usa-nav__primary button:active,\r
.usa-nav__primary button:disabled,\r
.usa-nav__primary button:disabled.usa-button--active,\r
.usa-nav__primary button:disabled.usa-button--hover,\r
.usa-nav__primary button:disabled.usa-focus,\r
.usa-nav__primary button:disabled:active,\r
.usa-nav__primary button:disabled:focus,\r
.usa-nav__primary button:disabled:hover,\r
.usa-nav__primary button:hover,\r
.usa-nav__primary button[aria-disabled=true],\r
.usa-nav__primary button[aria-disabled=true].usa-button--active,\r
.usa-nav__primary button[aria-disabled=true].usa-button--hover,\r
.usa-nav__primary button[aria-disabled=true].usa-focus,\r
.usa-nav__primary button[aria-disabled=true]:active,\r
.usa-nav__primary button[aria-disabled=true]:focus,\r
.usa-nav__primary button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-nav__primary button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-nav__primary button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-nav__primary button:disabled,\r
.usa-nav__primary button:disabled:hover,\r
.usa-nav__primary button[aria-disabled=true],\r
.usa-nav__primary button[aria-disabled=true]:focus,\r
.usa-nav__primary button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-nav__primary button:disabled,\r
    .usa-nav__primary button:disabled:hover,\r
    .usa-nav__primary button[aria-disabled=true],\r
    .usa-nav__primary button[aria-disabled=true]:focus,\r
    .usa-nav__primary button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__primary button {\r
        line-height: .9;\r
        padding: 1rem;\r
        /* font-size: .93rem; */\r
        font-weight: 700\r
    }\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-nav__primary button {\r
        forced-color-adjust: auto\r
    }\r
}\r
\r
.usa-nav__primary button:hover {\r
    color: #005ea2;\r
    background-color: #f0f0f0;\r
    text-decoration: none\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__primary button:hover {\r
        background-color: transparent\r
    }\r
}\r
\r
.usa-nav__primary button[aria-expanded],\r
.usa-nav__primary button[aria-expanded]:hover {\r
    background-image: none\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-nav__primary button[aria-expanded]::before,\r
    .usa-nav__primary button[aria-expanded]:hover::before {\r
        content: none\r
    }\r
}\r
\r
.usa-nav__primary button[aria-expanded] span::after {\r
    position: absolute;\r
    top: 50%;\r
    right: 0;\r
    transform: translateY(-50%)\r
}\r
\r
.usa-nav__primary button[aria-expanded=false] span::after {\r
    background-image: url(uswds_add.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 1.25rem 1.25rem;\r
    display: inline-block;\r
    height: 1.25rem;\r
    width: 1.25rem;\r
    content: "";\r
    vertical-align: middle;\r
    margin-left: auto\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-nav__primary button[aria-expanded=false] span::after {\r
        background: 0 0;\r
        background-color: ButtonText;\r
        -webkit-mask-image: url(uswds_add.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_add.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 1.25rem 1.25rem;\r
        mask-size: 1.25rem 1.25rem\r
    }\r
}\r
\r
.usa-nav__primary button[aria-expanded=false] span::after:hover {\r
    background-color: buttonText\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__primary button[aria-expanded=false] span::after {\r
        background-image: url(expand_more.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 1rem 1rem;\r
        display: inline-block;\r
        height: 1rem;\r
        width: 1rem;\r
        content: "";\r
        vertical-align: middle;\r
        margin-left: auto\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-nav__primary button[aria-expanded=false] span::after {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(expand_more.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(expand_more.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 1rem 1rem;\r
            mask-size: 1rem 1rem\r
        }\r
    }\r
\r
    .usa-nav__primary button[aria-expanded=false] span::after {\r
        right: .75rem\r
    }\r
\r
    .usa-nav__primary button[aria-expanded=false]:hover span::after {\r
        background-color: #1a4480\r
    }\r
}\r
\r
@media (min-width:64em) and (forced-colors:active) {\r
    .usa-nav__primary button[aria-expanded=false]:hover span::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
.usa-nav__primary button[aria-expanded=true] span::after {\r
    background-image: url(remove.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 1.25rem 1.25rem;\r
    display: inline-block;\r
    height: 1.25rem;\r
    width: 1.25rem;\r
    content: "";\r
    vertical-align: middle;\r
    margin-left: auto\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-nav__primary button[aria-expanded=true] span::after {\r
        background: 0 0;\r
        background-color: ButtonText;\r
        -webkit-mask-image: url(remove.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(remove.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 1.25rem 1.25rem;\r
        mask-size: 1.25rem 1.25rem\r
    }\r
}\r
\r
.usa-nav__primary button[aria-expanded=true] span::after {\r
    position: absolute;\r
    right: 0\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-nav__primary button[aria-expanded=true] span::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__primary button[aria-expanded=true] {\r
        background-image: none;\r
        background-color: #162e51;\r
        color: #fff\r
    }\r
}\r
\r
@media all and (min-width:64em) and (min-width:64em) {\r
    .usa-nav__primary button[aria-expanded=true] span::after {\r
        background-image: url(expand_less.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 1rem 1rem;\r
        display: inline-block;\r
        height: 1rem;\r
        width: 1rem;\r
        content: "";\r
        vertical-align: middle;\r
        margin-left: auto\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-nav__primary button[aria-expanded=true] span::after {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(expand_less.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(expand_less.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 1rem 1rem;\r
            mask-size: 1rem 1rem\r
        }\r
    }\r
\r
    .usa-nav__primary button[aria-expanded=true] span::after {\r
        right: .75rem;\r
        background-color: #fff\r
    }\r
}\r
\r
@media (min-width:64em) and (min-width:64em) and (forced-colors:active) {\r
    .usa-nav__primary button[aria-expanded=true] span::after {\r
        background-color: ButtonText\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__primary .usa-accordion__button span {\r
        display: inline-block;\r
        margin-right: 0;\r
        padding-right: 1rem\r
    }\r
}\r
\r
.usa-nav__secondary {\r
    margin-top: 1rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__secondary {\r
        flex-direction: column;\r
        align-items: flex-end;\r
        bottom: 4rem;\r
        display: flex;\r
        /* font-size: .93rem; */\r
        margin-top: .5rem;\r
        min-width: calc(27ch + 3rem);\r
        position: absolute;\r
        right: 2rem\r
    }\r
}\r
\r
.usa-nav__secondary .usa-search {\r
    width: 100%\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__secondary .usa-search {\r
        margin-left: 0;\r
        margin-top: .5rem\r
    }\r
}\r
\r
.usa-nav__secondary-links {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    line-height: 1.3;\r
    margin-top: 1.5rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__secondary-links {\r
        -moz-column-gap: .5rem;\r
        column-gap: .5rem;\r
        display: flex;\r
        flex-flow: row nowrap;\r
        line-height: .9;\r
        margin-bottom: .25rem;\r
        margin-top: 0\r
    }\r
\r
    .usa-nav__secondary-links .usa-nav__secondary-item {\r
        padding-left: .25rem\r
    }\r
\r
    .usa-nav__secondary-links .usa-nav__secondary-item+.usa-nav__secondary-item {\r
        border-left: 1px solid #dfe1e2;\r
        padding-left: .5rem\r
    }\r
}\r
\r
.usa-nav__secondary-links a {\r
    color: #71767a;\r
    display: inline-block;\r
    /* font-size: .93rem; */\r
    text-decoration: none\r
}\r
\r
.usa-nav__secondary-links a:hover {\r
    color: #005ea2;\r
    text-decoration: underline\r
}\r
\r
@media all and (max-width:63.99em) {\r
    .usa-nav__submenu {\r
        list-style-type: none;\r
        padding-left: 0;\r
        margin: 0\r
    }\r
\r
    .usa-nav__submenu>li {\r
        margin-bottom: 0;\r
        max-width: unset\r
    }\r
\r
    .usa-nav__submenu-item {\r
        border-top: 1px solid #dfe1e2;\r
        font-size: .93rem\r
    }\r
\r
    .usa-nav__submenu .usa-current::after {\r
        display: none\r
    }\r
}\r
\r
@media all and (max-width:63.99em) and (min-width:40em) {\r
    .usa-nav__submenu .usa-current::after {\r
        display: none\r
    }\r
}\r
\r
@media all and (max-width:63.99em) {\r
    .usa-nav__submenu a:not(.usa-button) {\r
        padding-left: 2rem\r
    }\r
\r
    .usa-nav__submenu .usa-nav__submenu a:not(.usa-button) {\r
        padding-left: 3rem\r
    }\r
\r
    .usa-nav__submenu .usa-nav__submenu .usa-nav__submenu a:not(.usa-button) {\r
        padding-left: 4rem\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__submenu {\r
        margin-bottom: 0;\r
        margin-top: 0;\r
        list-style-type: none;\r
        padding-left: 0;\r
        padding-bottom: .5rem;\r
        padding-top: .5rem;\r
        background-color: #162e51;\r
        width: 15rem;\r
        position: absolute;\r
        z-index: 400\r
    }\r
}\r
\r
.usa-nav__submenu[aria-hidden=true] {\r
    display: none\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__submenu .usa-nav__submenu-item a {\r
        padding-left: 1rem;\r
        padding-right: 1rem;\r
        color: #fff;\r
        line-height: 1.3;\r
        display: block\r
    }\r
\r
    .usa-nav__submenu .usa-nav__submenu-item a:focus {\r
        outline-offset: -.25rem\r
    }\r
\r
    .usa-nav__submenu .usa-nav__submenu-item a:hover {\r
        color: #fff;\r
        text-decoration: underline\r
    }\r
}\r
\r
.usa-nav__submenu-list {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0\r
}\r
\r
.usa-nav__submenu-list>li,\r
.usa-process-list>li,\r
.usa-prose .usa-process-list>li,\r
.usa-sidenav>li,\r
.usa-sidenav__sublist>li {\r
    margin-bottom: 0;\r
    max-width: unset\r
}\r
\r
.usa-nav__submenu-list .usa-nav__submenu-list-item {\r
    margin: 0;\r
    /* font-size: .93rem */\r
}\r
\r
.usa-input-list li,\r
.usa-nav__submenu-list .usa-nav__submenu-list-item a,\r
.usa-prose .usa-input-list li {\r
    line-height: 1.3\r
}\r
\r
.usa-nav__close {\r
    text-decoration: underline;\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    margin: 0;\r
    padding: 0;\r
    width: auto;\r
    height: 3rem;\r
    width: 3rem;\r
    background-image: none;\r
    color: currentColor;\r
    flex: none;\r
    float: right;\r
    margin: -.75rem -1rem 1rem auto;\r
    text-align: center\r
}\r
\r
.usa-nav__close:visited {\r
    color: #54278f\r
}\r
\r
.usa-nav__close:active {\r
    color: #162e51\r
}\r
\r
.usa-nav__close:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-nav__close.usa-button--active,\r
.usa-nav__close.usa-button--disabled,\r
.usa-nav__close.usa-button--hover,\r
.usa-nav__close:active,\r
.usa-nav__close:disabled,\r
.usa-nav__close:disabled.usa-button--active,\r
.usa-nav__close:disabled.usa-button--hover,\r
.usa-nav__close:disabled.usa-focus,\r
.usa-nav__close:disabled:active,\r
.usa-nav__close:disabled:focus,\r
.usa-nav__close:disabled:hover,\r
.usa-nav__close:hover,\r
.usa-nav__close[aria-disabled=true],\r
.usa-nav__close[aria-disabled=true].usa-button--active,\r
.usa-nav__close[aria-disabled=true].usa-button--hover,\r
.usa-nav__close[aria-disabled=true].usa-focus,\r
.usa-nav__close[aria-disabled=true]:active,\r
.usa-nav__close[aria-disabled=true]:focus,\r
.usa-nav__close[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-nav__close.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-nav__close.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-nav__close:disabled,\r
.usa-nav__close:disabled:hover,\r
.usa-nav__close[aria-disabled=true],\r
.usa-nav__close[aria-disabled=true]:focus,\r
.usa-nav__close[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-nav__close:disabled,\r
    .usa-nav__close:disabled:hover,\r
    .usa-nav__close[aria-disabled=true],\r
    .usa-nav__close[aria-disabled=true]:focus,\r
    .usa-nav__close[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
\r
    .usa-nav__close::before {\r
        background-image: url(../img/usa-icons/close.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 1.25rem 1.25rem;\r
        display: inline-block;\r
        height: 1.25rem;\r
        width: 1.25rem;\r
        content: "";\r
        vertical-align: middle;\r
        margin-right: auto\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-nav__close::before {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/close.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/close.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 1.25rem 1.25rem;\r
            mask-size: 1.25rem 1.25rem\r
        }\r
    }\r
\r
    .usa-nav__close::before {\r
        background-color: buttonText\r
    }\r
}\r
\r
.usa-nav__close:hover {\r
    color: currentColor;\r
    text-decoration: none\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-nav__close {\r
        display: none\r
    }\r
}\r
\r
.usa-nav__close img {\r
    width: 1.5rem\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-nav__close img {\r
        display: none\r
    }\r
}\r
\r
.usa-nav__close+* {\r
    clear: both\r
}\r
\r
.usa-js-mobile-nav--active {\r
    overflow: hidden\r
}\r
\r
@media (min-width:63.06rem) {\r
    .usa-js-mobile-nav--active.is-safari {\r
        overflow-y: scroll;\r
        position: fixed;\r
        top: var(--scrolltop, 0)\r
    }\r
}\r
\r
.usa-pagination {\r
    margin-bottom: 1rem;\r
    margin-top: 1rem;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    color: #1b1b1b;\r
    background-color: #fff;\r
    display: flex;\r
    justify-content: center\r
}\r
\r
.usa-pagination .usa-icon {\r
    height: 1.13rem;\r
    width: 1.13rem\r
}\r
\r
.usa-pagination__list {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    align-items: center;\r
    display: flex;\r
    flex-flow: row nowrap;\r
    justify-content: center;\r
    width: auto\r
}\r
\r
.usa-pagination__item {\r
    display: inline-flex;\r
    height: 2.5rem;\r
    justify-content: center;\r
    line-height: 1;\r
    margin-left: .25rem;\r
    margin-right: .25rem;\r
    min-width: 2.5rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-pagination__item {\r
        flex: 1 0 auto\r
    }\r
}\r
\r
.usa-pagination__arrow {\r
    display: none\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-pagination__arrow {\r
        display: inherit\r
    }\r
\r
    .usa-pagination__previous-page {\r
        margin-right: 1.25rem\r
    }\r
\r
    .usa-pagination__next-page {\r
        margin-left: 1.25rem\r
    }\r
}\r
\r
.usa-pagination__link {\r
    align-items: center;\r
    color: #005ea2;\r
    display: inline-flex\r
}\r
\r
.usa-pagination__link[disabled] {\r
    opacity: .4 !important;\r
    pointer-events: none\r
}\r
\r
.usa-pagination__link:active,\r
.usa-pagination__link:focus,\r
.usa-pagination__link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-pagination__link:visited {\r
    color: #005ea2\r
}\r
\r
.usa-pagination__button {\r
    align-items: center;\r
    border-color: rgba(27, 27, 27, .2);\r
    border-radius: .25rem;\r
    border-style: solid;\r
    border-width: 1px;\r
    color: #005ea2;\r
    display: inline-flex;\r
    justify-content: center;\r
    padding: .5rem;\r
    width: 100%\r
}\r
\r
.usa-pagination__button:active,\r
.usa-pagination__button:focus,\r
.usa-pagination__button:hover {\r
    color: #1a4480;\r
    border-color: #1a4480\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-pagination__button:active,\r
    .usa-pagination__button:focus,\r
    .usa-pagination__button:hover {\r
        border: 2px solid transparent\r
    }\r
}\r
\r
.usa-pagination .usa-current {\r
    background-color: #1b1b1b;\r
    border-color: transparent;\r
    color: #fff\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-pagination .usa-current {\r
        border: 2px solid transparent;\r
        color: buttonText\r
    }\r
}\r
\r
.usa-pagination .usa-current:active,\r
.usa-pagination .usa-current:focus,\r
.usa-pagination .usa-current:hover {\r
    background-color: #1b1b1b;\r
    color: #fff\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-pagination .usa-current:active,\r
    .usa-pagination .usa-current:focus,\r
    .usa-pagination .usa-current:hover {\r
        color: buttontext\r
    }\r
}\r
\r
.usa-pagination__overflow {\r
    align-items: center;\r
    align-self: stretch;\r
    display: inherit;\r
    -webkit-user-select: none;\r
    -moz-user-select: none;\r
    user-select: none;\r
    padding: .5rem\r
}\r
\r
.usa-process-list>.usa-process-list__item,\r
.usa-prose .usa-process-list>.usa-process-list__item {\r
    max-width: 72ex\r
}\r
\r
.usa-process-list,\r
.usa-prose .usa-process-list {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    counter-reset: usa-numbered-list;\r
    padding: 20px 0 0 calc(2.5rem/2 - .5rem/2);\r
    position: relative\r
}\r
\r
.usa-process-list__item,\r
.usa-prose .usa-process-list__item {\r
    border-left: .5rem solid #d9e8f6;\r
    /* font-size: 1.06rem; */\r
    margin-bottom: 0;\r
    padding-bottom: 2rem;\r
    padding-left: calc(calc(2.5rem/2 - .25rem)*2)\r
}\r
\r
.usa-process-list__item:last-child {\r
    border-left: .5rem solid transparent\r
}\r
\r
.usa-process-list__item::before {\r
    flex-direction: row;\r
    align-items: center;\r
    justify-content: center;\r
    border-radius: 99rem;\r
    background-color: #fff;\r
    border: .25rem solid #1b1b1b;\r
    box-shadow: 0 0 0 .25rem #fff;\r
    color: #1b1b1b;\r
    content: counter(usa-numbered-list, decimal);\r
    counter-increment: usa-numbered-list;\r
    display: flex;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.46rem; */\r
    font-weight: 700;\r
    height: 2.5rem;\r
    left: 0;\r
    line-height: .9;\r
    margin-top: -.4rem;\r
    position: absolute;\r
    width: 2.5rem\r
}\r
\r
.usa-process-list__item ul li {\r
    margin-bottom: .25rem\r
}\r
\r
.usa-process-list__item>:first-child {\r
    margin-top: 0\r
}\r
\r
.usa-process-list__item>:last-child {\r
    margin-bottom: 0\r
}\r
\r
.usa-process-list__heading {\r
    /* font-size: 1.46rem; */\r
    line-height: 1.1;\r
    color: #1b1b1b;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    font-weight: 700;\r
    margin: 0\r
}\r
\r
.usa-process-list__heading+* {\r
    margin-top: .25rem\r
}\r
\r
.usa-search {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    position: relative\r
}\r
\r
.usa-search::after {\r
    clear: both;\r
    content: "";\r
    display: block\r
}\r
\r
.usa-search [role=search],\r
.usa-search[role=search],\r
.usa-search[role=search]>div {\r
    display: flex\r
}\r
\r
.usa-search [type=submit] {\r
    border-bottom-left-radius: 0;\r
    border-top-left-radius: 0;\r
    height: 2rem;\r
    margin: 0;\r
    padding: 0;\r
    width: 3rem\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-search [type=submit] {\r
        padding-left: 1rem;\r
        padding-right: 1rem;\r
        width: auto\r
    }\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-search [type=submit]::before {\r
        background-image: url(../img/usa-icons/search.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 1.5rem 1.5rem;\r
        display: inline-block;\r
        height: 1.5rem;\r
        width: 1.5rem;\r
        content: "";\r
        vertical-align: middle;\r
        margin-right: auto\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-search [type=submit]::before {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/search.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/search.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 1.5rem 1.5rem;\r
            mask-size: 1.5rem 1.5rem\r
        }\r
    }\r
\r
    .usa-search [type=submit]:focus {\r
        outline-offset: 0\r
    }\r
}\r
\r
@media (forced-colors:active) and (min-width:30em) {\r
    .usa-search [type=submit]::before {\r
        content: none\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-search__submit-icon {\r
        display: none\r
    }\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-search__submit-icon {\r
        display: none\r
    }\r
}\r
\r
@media all and (min-width:30em) {\r
\r
    .usa-search--big .usa-search__input,\r
    .usa-search--big [type=search] {\r
        /* font-size: 1.06rem; */\r
        height: 3rem\r
    }\r
\r
    .usa-search--big .usa-search__submit,\r
    .usa-search--big [type=submit] {\r
        padding-left: 2rem;\r
        padding-right: 2rem;\r
        /* font-size: 1.46rem; */\r
        height: 3rem;\r
        width: auto\r
    }\r
}\r
\r
.usa-search--small .usa-search__submit,\r
.usa-search--small [type=submit] {\r
    padding-left: .75rem;\r
    padding-right: .75rem;\r
    min-width: 3rem\r
}\r
\r
@media (forced-colors:active) and (min-width:30em) {\r
    .usa-search--small [type=submit]::before {\r
        content: ""\r
    }\r
}\r
\r
.usa-search--small .usa-search__submit-icon {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    display: block\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-search--small .usa-search__submit-icon {\r
        display: none\r
    }\r
}\r
\r
input[type=search] {\r
    box-sizing: border-box;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none\r
}\r
\r
.usa-search__input,\r
[type=search] {\r
    padding-bottom: 0;\r
    padding-top: 0;\r
    border-bottom-right-radius: 0;\r
    border-right: none;\r
    border-top-right-radius: 0;\r
    box-sizing: border-box;\r
    float: left;\r
    /* font-size: 1rem; */\r
    height: 2rem;\r
    margin: 0\r
}\r
\r
.usa-search__submit-text {\r
    display: none\r
}\r
\r
@media all and (min-width:30em) {\r
    .usa-search__submit-text {\r
        display: block\r
    }\r
}\r
\r
.usa-section {\r
    padding-bottom: 2rem;\r
    padding-top: 2rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-section {\r
        padding-bottom: 4rem;\r
        padding-top: 4rem\r
    }\r
}\r
\r
.usa-section--light {\r
    background-color: #f0f0f0\r
}\r
\r
.usa-section--dark {\r
    background-color: #162e51;\r
    color: #fff\r
}\r
\r
.usa-section--dark p {\r
    color: #fff\r
}\r
\r
.usa-section--dark a,\r
.usa-section--dark a:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-section--dark a:active,\r
.usa-section--dark a:hover {\r
    color: #f0f0f0\r
}\r
\r
.usa-sidenav {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.3;\r
    border-bottom: 1px solid #dfe1e2\r
}\r
\r
.usa-sidenav__item {\r
    border-top: 1px solid #dfe1e2\r
}\r
\r
.usa-sidenav a:not(.usa-button) {\r
    display: block;\r
    padding: .5rem 1rem;\r
    text-decoration: none\r
}\r
\r
.usa-sidenav a:not(.usa-button):hover {\r
    background-color: #f0f0f0;\r
    text-decoration: none\r
}\r
\r
.usa-sidenav a:not(.usa-button):not(.usa-current) {\r
    color: #565c65\r
}\r
\r
.usa-sidenav a:not(.usa-button):not(.usa-current):hover {\r
    color: #005ea2\r
}\r
\r
.usa-sidenav a:not(.usa-button):not(.usa-current):focus {\r
    outline-offset: 0\r
}\r
\r
.usa-sidenav .usa-current {\r
    position: relative;\r
    color: #005ea2;\r
    font-weight: 700\r
}\r
\r
.usa-sidenav .usa-current::after {\r
    background-color: #005ea2;\r
    border-radius: 99rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    bottom: .25rem;\r
    top: .25rem;\r
    width: .25rem;\r
    left: .25rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-sidenav .usa-current {\r
        position: relative\r
    }\r
\r
    .usa-sidenav .usa-current::after {\r
        background-color: #005ea2;\r
        border-radius: 99rem;\r
        content: "";\r
        display: block;\r
        position: absolute;\r
        bottom: .25rem;\r
        top: .25rem;\r
        width: .25rem;\r
        left: 0\r
    }\r
}\r
\r
.grid-container .usa-sidenav {\r
    margin-left: -1rem;\r
    margin-right: -1rem\r
}\r
\r
@media all and (min-width:40em) {\r
    .grid-container .usa-sidenav {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
}\r
\r
.usa-sidenav__sublist {\r
    list-style-type: none;\r
    padding-left: 0;\r
    margin: 0;\r
    /* font-size: 1rem */\r
}\r
\r
.usa-sidenav__sublist-item {\r
    border-top: 1px solid #dfe1e2;\r
    /* font-size: .93rem */\r
}\r
\r
.usa-sidenav__sublist .usa-current::after {\r
    display: none\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-sidenav__sublist .usa-current::after {\r
        display: none\r
    }\r
}\r
\r
.usa-sidenav__sublist a:not(.usa-button) {\r
    padding-left: 2rem\r
}\r
\r
.usa-sidenav__sublist .usa-sidenav__sublist a:not(.usa-button) {\r
    padding-left: 3rem\r
}\r
\r
.usa-sidenav__sublist .usa-sidenav__sublist .usa-sidenav__sublist a:not(.usa-button) {\r
    padding-left: 4rem\r
}\r
\r
.usa-site-alert .usa-alert {\r
    background-color: #f0f0f0;\r
    border-left: .5rem solid #a9aeb1;\r
    color: #1b1b1b\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__body {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    padding-bottom: 1rem;\r
    padding-top: 1rem;\r
    position: relative\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__text {\r
    margin-bottom: 0;\r
    margin-top: 0\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__text:only-child {\r
    padding-bottom: 0;\r
    padding-top: 0\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.46rem; */\r
    line-height: .9;\r
    margin-top: 0;\r
    margin-bottom: .5rem\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__body>.usa-list,\r
.usa-site-alert .usa-alert>.usa-list {\r
    padding-left: 2ch\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__body>.usa-list:last-child,\r
.usa-site-alert .usa-alert>.usa-list:last-child {\r
    margin-bottom: 0\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__body {\r
    max-width: 64rem;\r
    padding-left: 1.25rem;\r
    padding-right: 1.25rem\r
}\r
\r
.usa-site-alert .usa-alert .usa-alert__body::before {\r
    left: 1.0833333333rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-site-alert .usa-alert .usa-alert__body {\r
        margin-left: auto;\r
        margin-right: auto;\r
        padding-left: 1.75rem;\r
        padding-right: 1.75rem\r
    }\r
\r
    .usa-site-alert .usa-alert .usa-alert__body::before {\r
        left: 1.5833333333rem\r
    }\r
}\r
\r
.usa-site-alert--info .usa-alert {\r
    background-color: #e7f6f8;\r
    border-left-color: #00bde3\r
}\r
\r
.usa-site-alert--info .usa-alert .usa-alert__body {\r
    color: #1b1b1b;\r
    background-color: #e7f6f8;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    min-height: 3.3333333333rem\r
}\r
\r
.usa-site-alert--info .usa-alert .usa-alert__body::before {\r
    background-image: url(../img/usa-icons/info.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 2rem 2rem;\r
    height: 2rem;\r
    width: 2rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    top: .6666666667rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-site-alert--info .usa-alert .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #1b1b1b;\r
        -webkit-mask-image: url(../img/usa-icons/info.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/info.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 2rem 2rem;\r
        mask-size: 2rem 2rem\r
    }\r
}\r
\r
.usa-site-alert--info .usa-alert .usa-alert__body>* {\r
    margin-left: 2.5rem\r
}\r
\r
.usa-site-alert--info .usa-alert .usa-alert__body .usa-link,\r
.usa-skipnav {\r
    color: #005ea2\r
}\r
\r
.usa-site-alert--info .usa-alert .usa-alert__body .usa-link:visited {\r
    color: #54278f\r
}\r
\r
.usa-site-alert--info .usa-alert .usa-alert__body .usa-link:active,\r
.usa-site-alert--info .usa-alert .usa-alert__body .usa-link:hover {\r
    color: #1a4480\r
}\r
\r
.usa-site-alert--emergency .usa-alert {\r
    background-color: #9c3d10;\r
    border-left-color: #9c3d10\r
}\r
\r
.usa-site-alert--emergency .usa-alert .usa-alert__body {\r
    color: #fff;\r
    background-color: #9c3d10;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    min-height: 3.3333333333rem\r
}\r
\r
.usa-site-alert--emergency .usa-alert .usa-alert__body::before {\r
    background-image: url(../img/usa-icons-bg/error--white.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
    background-size: 2rem 2rem;\r
    height: 2rem;\r
    width: 2rem;\r
    content: "";\r
    display: block;\r
    position: absolute;\r
    top: .6666666667rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-site-alert--emergency .usa-alert .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #fff;\r
        -webkit-mask-image: url(../img/usa-icons/error.svg), linear-gradient(transparent, transparent);\r
        mask-image: url(../img/usa-icons/error.svg), linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
        -webkit-mask-size: 2rem 2rem;\r
        mask-size: 2rem 2rem\r
    }\r
}\r
\r
.usa-site-alert--emergency .usa-alert .usa-alert__body>* {\r
    margin-left: 2.5rem\r
}\r
\r
.usa-site-alert--emergency .usa-alert .usa-alert__body .usa-link,\r
.usa-site-alert--emergency .usa-alert .usa-alert__body .usa-link:visited {\r
    color: #dfe1e2\r
}\r
\r
.usa-site-alert--emergency .usa-alert .usa-alert__body .usa-link:active,\r
.usa-site-alert--emergency .usa-alert .usa-alert__body .usa-link:hover {\r
    color: #f0f0f0\r
}\r
\r
.usa-site-alert--slim .usa-alert .usa-alert__body {\r
    padding-bottom: .5rem;\r
    padding-top: .5rem;\r
    min-height: 0\r
}\r
\r
.usa-site-alert--slim .usa-alert .usa-alert__body:before {\r
    height: 1.5rem;\r
    top: .5rem;\r
    width: 1.5rem\r
}\r
\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-site-alert--slim .usa-alert .usa-alert__body:before {\r
        -webkit-mask-size: 1.5rem;\r
        mask-size: 1.5rem\r
    }\r
}\r
\r
.usa-site-alert--slim .usa-alert .usa-alert__body>* {\r
    margin-left: 2rem\r
}\r
\r
.usa-site-alert--slim .usa-alert .usa-alert__body::before {\r
    left: 1.125rem\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-site-alert--slim .usa-alert .usa-alert__body::before {\r
        left: 1.625rem\r
    }\r
}\r
\r
.usa-site-alert--no-icon .usa-alert .usa-alert__body {\r
    min-height: 0\r
}\r
\r
.usa-site-alert--no-icon .usa-alert .usa-alert__body:before {\r
    display: none\r
}\r
\r
.usa-site-alert--no-icon .usa-alert .usa-alert__body>* {\r
    margin-left: 0\r
}\r
\r
.usa-skipnav {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    text-decoration: underline;\r
    background: 0 0;\r
    left: 0;\r
    padding: .5rem 1rem;\r
    position: absolute;\r
    top: -3.8rem;\r
    transition: .15s ease-in-out;\r
    z-index: 100\r
}\r
\r
.usa-skipnav:visited {\r
    color: #54278f\r
}\r
\r
.usa-skipnav:hover {\r
    color: #1a4480\r
}\r
\r
.usa-skipnav:active {\r
    color: #162e51\r
}\r
\r
.usa-skipnav:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-skipnav.usa-focus,\r
.usa-skipnav:focus {\r
    background: #fff;\r
    left: 0;\r
    position: absolute;\r
    top: 0;\r
    transition: .15s ease-in-out\r
}\r
\r
.usa-skipnav__container {\r
    position: relative\r
}\r
\r
.usa-step-indicator {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.1;\r
    background-color: #fff;\r
    margin-bottom: 2rem;\r
    margin-left: -1px;\r
    margin-right: -1px\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-step-indicator {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
}\r
\r
.usa-step-indicator__segments {\r
    counter-reset: usa-step-indicator;\r
    display: flex;\r
    list-style: none;\r
    margin: 0;\r
    padding: 0\r
}\r
\r
.usa-step-indicator__segment {\r
    flex: 1 1 0%;\r
    counter-increment: usa-step-indicator;\r
    margin-left: 1px;\r
    margin-right: 1px;\r
    max-width: 15rem;\r
    min-height: .5rem;\r
    position: relative\r
}\r
\r
.usa-step-indicator__segment:after {\r
    background-color: #919191;\r
    content: "";\r
    display: block;\r
    height: .5rem;\r
    left: 0;\r
    position: absolute;\r
    right: 0;\r
    top: 0\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-step-indicator__segment:after {\r
        height: .5rem\r
    }\r
}\r
\r
.usa-step-indicator__segment--complete::after {\r
    background-color: #162e51\r
}\r
\r
.usa-step-indicator__segment--complete .usa-step-indicator__segment-label {\r
    color: #162e51\r
}\r
\r
.usa-step-indicator__segment--current::after {\r
    background-color: #005ea2\r
}\r
\r
.usa-step-indicator__segment--current .usa-step-indicator__segment-label {\r
    color: #005ea2;\r
    font-weight: 700\r
}\r
\r
.usa-step-indicator__segment-label {\r
    display: none\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-step-indicator__segment-label {\r
        color: #565c65;\r
        display: block;\r
        /* font-size: 1.06rem; */\r
        margin-top: calc(.5rem + .5rem);\r
        padding-right: 2rem;\r
        text-align: left\r
    }\r
}\r
\r
.usa-step-indicator__header {\r
    align-items: baseline;\r
    display: flex\r
}\r
\r
.usa-step-indicator__heading {\r
    color: #1b1b1b;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.13rem; */\r
    font-weight: 700;\r
    margin: 1rem 0 0\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-step-indicator__heading {\r
        /* font-size: 1.46rem; */\r
        margin-top: 2rem\r
    }\r
}\r
\r
.usa-step-indicator__current-step {\r
    height: 2.5rem;\r
    border-radius: 99rem;\r
    width: 2.5rem;\r
    font-weight: 400;\r
    font-feature-settings: "tnum" 1, "kern" 1;\r
    background-color: #005ea2;\r
    color: #fff;\r
    display: inline-block;\r
    padding: calc((2.5rem - 2ex*1.1)*.5);\r
    text-align: center\r
}\r
\r
.usa-step-indicator__total-steps {\r
    font-weight: 400;\r
    font-feature-settings: "tnum" 1, "kern" 1;\r
    color: #005ea2;\r
    margin-right: .5rem\r
}\r
\r
@media all and (min-width:40em) {\r
\r
    .usa-step-indicator--counters .usa-step-indicator__segment,\r
    .usa-step-indicator--counters-sm .usa-step-indicator__segment {\r
        margin-left: 0;\r
        margin-right: 0;\r
        margin-top: calc((2.5rem - .5rem)/2 + .25rem)\r
    }\r
\r
    .usa-step-indicator--counters .usa-step-indicator__segment:before,\r
    .usa-step-indicator--counters-sm .usa-step-indicator__segment:before {\r
        height: 2.5rem;\r
        border-radius: 99rem;\r
        width: 2.5rem;\r
        font-feature-settings: "tnum" 1, "kern" 1;\r
        background-color: #fff;\r
        box-shadow: inset 0 0 0 .25rem #919191, 0 0 0 .25rem #fff;\r
        color: #565c65;\r
        content: counter(usa-step-indicator);\r
        display: block;\r
        font-weight: 700;\r
        left: 0;\r
        line-height: .9;\r
        padding: calc((2.5rem - 2ex*.9)*.5);\r
        position: absolute;\r
        text-align: center;\r
        top: calc((2.5rem - .5rem)/-2);\r
        z-index: 100\r
    }\r
\r
    .usa-step-indicator--counters .usa-step-indicator__segment:last-child:after,\r
    .usa-step-indicator--counters-sm .usa-step-indicator__segment:last-child:after {\r
        display: none\r
    }\r
}\r
\r
.usa-step-indicator--counters .usa-step-indicator__segment--complete::before,\r
.usa-step-indicator--counters-sm .usa-step-indicator__segment--complete::before {\r
    background-color: #162e51;\r
    box-shadow: 0 0 0 .25rem #fff;\r
    color: #fff\r
}\r
\r
.usa-step-indicator--counters .usa-step-indicator__segment--current::before,\r
.usa-step-indicator--counters-sm .usa-step-indicator__segment--current::before {\r
    background-color: #005ea2;\r
    box-shadow: 0 0 0 .25rem #fff;\r
    color: #fff\r
}\r
\r
@media all and (min-width:40em) {\r
    .usa-step-indicator--counters .usa-step-indicator__segment-label {\r
        margin-top: calc((2.5rem + .5rem)/2 + .5rem)\r
    }\r
\r
    .usa-step-indicator--counters-sm.usa-step-indicator--center .usa-step-indicator__segment:first-child:after,\r
    .usa-step-indicator--counters.usa-step-indicator--center .usa-step-indicator__segment:first-child:after {\r
        left: 50%;\r
        right: 0;\r
        width: auto\r
    }\r
\r
    .usa-step-indicator--counters-sm.usa-step-indicator--center .usa-step-indicator__segment:last-child:after,\r
    .usa-step-indicator--counters.usa-step-indicator--center .usa-step-indicator__segment:last-child:after {\r
        display: block;\r
        left: 0;\r
        right: 50%;\r
        width: auto\r
    }\r
\r
    .usa-step-indicator--counters-sm .usa-step-indicator__segment {\r
        margin-top: calc((1.5rem - .5rem)/2 + .25rem)\r
    }\r
\r
    .usa-step-indicator--counters-sm .usa-step-indicator__segment:before {\r
        height: 1.5rem;\r
        border-radius: 99rem;\r
        width: 1.5rem;\r
        /* font-size: .93rem; */\r
        padding: calc(.25rem + 1px);\r
        top: calc((1.5rem - .5rem)/-2)\r
    }\r
\r
    .usa-step-indicator--counters-sm .usa-step-indicator__segment:last-child:after {\r
        display: none\r
    }\r
\r
    .usa-step-indicator--counters-sm .usa-step-indicator__segment-label {\r
        margin-top: calc((1.5rem + .5rem)/2 + .5rem)\r
    }\r
}\r
\r
.usa-step-indicator--center,\r
.usa-step-indicator--no-labels {\r
    margin-left: -1px;\r
    margin-right: -1px\r
}\r
\r
.usa-step-indicator--no-labels .usa-step-indicator__segment {\r
    margin-top: 0;\r
    margin-left: 1px;\r
    margin-right: 1px\r
}\r
\r
.usa-step-indicator--no-labels .usa-step-indicator__segment:before {\r
    display: none\r
}\r
\r
.usa-step-indicator--no-labels .usa-step-indicator__segment:last-child:after {\r
    display: block\r
}\r
\r
.usa-step-indicator--no-labels .usa-step-indicator__heading {\r
    margin-top: 1rem\r
}\r
\r
.usa-step-indicator--no-labels .usa-step-indicator__segment-label,\r
.width-mobile .usa-table--stacked thead,\r
.width-mobile .usa-table--stacked-header thead {\r
    display: none\r
}\r
\r
.usa-step-indicator--center .usa-step-indicator__segment {\r
    margin-left: 1px;\r
    margin-right: 1px\r
}\r
\r
.usa-step-indicator--center .usa-step-indicator__segment:before {\r
    left: calc(50% - (2.5rem + .25rem)/2)\r
}\r
\r
.usa-step-indicator--center .usa-step-indicator__segment-label {\r
    padding-left: .5rem;\r
    padding-right: .5rem;\r
    text-align: center\r
}\r
\r
.usa-step-indicator--center.usa-step-indicator--no-labels .usa-step-indicator__segment:first-child:after {\r
    left: 0\r
}\r
\r
.usa-step-indicator--center.usa-step-indicator--no-labels .usa-step-indicator__segment:last-child:after {\r
    right: 0\r
}\r
\r
.usa-step-indicator--center.usa-step-indicator--counters-sm .usa-step-indicator__segment:before {\r
    left: calc(50% - (1.5rem + .25rem)/2)\r
}\r
\r
.usa-summary-box {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    color: #1b1b1b;\r
    background-color: #e7f6f8;\r
    border-radius: .25rem;\r
    border: 1px #99deea solid;\r
    padding: 1.5rem;\r
    position: relative\r
}\r
\r
.usa-summary-box .usa-list:last-child {\r
    margin-bottom: 0\r
}\r
\r
*+.usa-summary-box {\r
    margin-top: 1rem\r
}\r
\r
.usa-summary-box__heading {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.46rem; */\r
    line-height: 1.1;\r
    margin-top: 0;\r
    margin-bottom: .5rem\r
}\r
\r
.usa-summary-box__text {\r
    margin-bottom: 0;\r
    margin-top: 0\r
}\r
\r
.usa-summary-box__text:only-child {\r
    margin-bottom: 1px;\r
    padding-top: .25rem\r
}\r
\r
.usa-summary-box__link,\r
.usa-summary-box__link[href^="#"]:visited {\r
    color: #005ea2\r
}\r
\r
.usa-summary-box__link:visited {\r
    color: #54278f\r
}\r
\r
.usa-summary-box__link:active,\r
.usa-summary-box__link:hover,\r
.usa-summary-box__link[href^="#"]:hover {\r
    color: #1a4480\r
}\r
\r
.usa-table {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.5;\r
    border-collapse: collapse;\r
    border-spacing: 0;\r
    color: #1b1b1b;\r
    margin: 1.25rem 0\r
}\r
\r
.usa-table thead th {\r
    background-clip: padding-box;\r
    font-weight: 700;\r
    line-height: 1.3\r
}\r
\r
.usa-table thead td,\r
.usa-table thead th {\r
    background-color: #dfe1e2;\r
    color: #1b1b1b\r
}\r
\r
.usa-table,\r
.usa-table tbody th {\r
    text-align: left\r
}\r
\r
.usa-table th[data-sortable] {\r
    padding-right: 2.5rem;\r
    position: relative\r
}\r
\r
.usa-table th[data-sortable]::after {\r
    border-bottom-color: transparent;\r
    border-bottom-style: solid;\r
    border-bottom-width: 1px;\r
    bottom: 0;\r
    content: "";\r
    height: 0;\r
    left: 0;\r
    position: absolute;\r
    width: 100%\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button {\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    padding: 0;\r
    width: auto;\r
    height: 2rem;\r
    width: 2rem;\r
    background-position: center center;\r
    background-size: 1.5rem;\r
    color: #71767a;\r
    cursor: pointer;\r
    display: inline-block;\r
    margin: 0;\r
    position: absolute;\r
    right: .25rem;\r
    text-align: center;\r
    text-decoration: none;\r
    top: 50%;\r
    transform: translate(0, -50%)\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:active {\r
    color: #162e51\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:focus,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--active,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--disabled,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--hover,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:active,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled.usa-button--active,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled.usa-button--hover,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled.usa-focus,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:active,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:focus,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:active,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--disabled,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled.usa-button--active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled.usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled.usa-focus,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:focus,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button.usa-button--active,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled,\r
    .usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button:disabled:hover,\r
    .usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true],\r
    .usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button[aria-disabled=true]:hover,\r
    .usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled,\r
    .usa-table th[data-sortable][aria-sort=none] .usa-table__header__button:disabled:hover,\r
    .usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true],\r
    .usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-table th[data-sortable][aria-sort=none] .usa-table__header__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-table th[data-sortable]:not([aria-sort]) .usa-table__header__button .usa-icon,\r
.usa-table th[data-sortable][aria-sort=none] .usa-table__header__button .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    vertical-align: middle\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending],\r
.usa-table th[data-sortable][aria-sort=descending] {\r
    background-color: #97d4ea\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button {\r
    background-color: transparent;\r
    border: 0;\r
    border-radius: 0;\r
    box-shadow: none;\r
    font-weight: 400;\r
    justify-content: normal;\r
    padding: 0;\r
    width: auto;\r
    height: 2rem;\r
    width: 2rem;\r
    background-position: center center;\r
    background-size: 1.5rem;\r
    color: #71767a;\r
    cursor: pointer;\r
    display: inline-block;\r
    margin: 0;\r
    position: absolute;\r
    right: .25rem;\r
    text-align: center;\r
    text-decoration: none;\r
    top: 50%;\r
    transform: translate(0, -50%)\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:hover {\r
    color: #1a4480\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:active {\r
    color: #162e51\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--active,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--disabled,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:active,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled.usa-button--active,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled.usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled.usa-focus,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:active,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:focus,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:hover,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:active,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled,\r
    .usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button:disabled:hover,\r
    .usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true],\r
    .usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    vertical-align: middle\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button .usa-icon>g.ascending,\r
.usa-table th[data-sortable][aria-sort=descending] .usa-table__header__button .usa-icon>g.descending {\r
    fill: #1b1b1b\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:visited {\r
    color: #54278f\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:hover {\r
    color: #1a4480\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:active {\r
    color: #162e51\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--active,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--disabled,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:active,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled.usa-button--active,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled.usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled.usa-focus,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:active,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:focus,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:hover,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true].usa-button--active,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true].usa-button--hover,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true].usa-focus,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:active,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:hover {\r
    background-color: transparent;\r
    box-shadow: none;\r
    text-decoration: underline\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--hover {\r
    color: #1a4480\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button.usa-button--active {\r
    color: #162e51\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:hover,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true],\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:focus,\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:hover {\r
    color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled,\r
    .usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button:disabled:hover,\r
    .usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true],\r
    .usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:focus,\r
    .usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-table th[data-sortable][aria-sort=ascending] .usa-table__header__button .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    vertical-align: middle\r
}\r
\r
.usa-table thead th[aria-sort] {\r
    background-color: #97d4ea;\r
    color: #1b1b1b\r
}\r
\r
.usa-table td[data-sort-active],\r
.usa-table th[data-sort-active] {\r
    background-color: #e1f3f8;\r
    color: #1b1b1b\r
}\r
\r
.usa-table--borderless thead th {\r
    background-color: #fff;\r
    border-top: 0;\r
    color: #1b1b1b\r
}\r
\r
.usa-table--borderless thead th[aria-sort] {\r
    color: #1b1b1b\r
}\r
\r
.usa-table--borderless thead th[data-sortable]:not([aria-sort]) .usa-table__header__button:hover .usa-icon>g.unsorted {\r
    fill: #000\r
}\r
\r
.usa-table--striped tbody tr:nth-child(odd) td[data-sort-active],\r
.usa-table--striped tbody tr:nth-child(odd) th[data-sort-active] {\r
    background-color: #c3ebfa;\r
    color: #1b1b1b\r
}\r
\r
@media all and (max-width:29.99em) {\r
\r
    .usa-table--stacked thead,\r
    .usa-table--stacked-header thead {\r
        display: none\r
    }\r
\r
    .usa-table--stacked td,\r
    .usa-table--stacked th,\r
    .usa-table--stacked-header td,\r
    .usa-table--stacked-header th {\r
        border-bottom-width: 0;\r
        display: block;\r
        width: 100%\r
    }\r
\r
    .usa-table--stacked tr,\r
    .usa-table--stacked-header tr {\r
        border-bottom: .25rem solid #1b1b1b;\r
        border-top-width: 0;\r
        width: 100%\r
    }\r
\r
    .usa-table--stacked tr td:first-child,\r
    .usa-table--stacked tr th:first-child {\r
        border-top-width: 0\r
    }\r
\r
    .usa-table--stacked tr:nth-child(odd) td,\r
    .usa-table--stacked tr:nth-child(odd) th {\r
        background-color: inherit\r
    }\r
\r
    .usa-table--stacked tr:first-child td:first-child,\r
    .usa-table--stacked tr:first-child th:first-child,\r
    .usa-table--stacked-header tr:first-child td:first-child,\r
    .usa-table--stacked-header tr:first-child th:first-child {\r
        border-top: .25rem solid #1b1b1b\r
    }\r
\r
    .usa-table--stacked td[data-label],\r
    .usa-table--stacked th[data-label],\r
    .usa-table--stacked-header td[data-label],\r
    .usa-table--stacked-header th[data-label] {\r
        padding-bottom: .75rem\r
    }\r
\r
    .usa-table--stacked td[data-label]:before,\r
    .usa-table--stacked th[data-label]:before {\r
        content: attr(data-label);\r
        display: block;\r
        font-weight: 700;\r
        margin: -.5rem -1rem 0;\r
        padding: .75rem 1rem .25rem\r
    }\r
\r
    .usa-table--stacked-header tr td:first-child,\r
    .usa-table--stacked-header tr th:first-child {\r
        border-top-width: 0\r
    }\r
\r
    .usa-table--stacked-header tr:nth-child(odd) td,\r
    .usa-table--stacked-header tr:nth-child(odd) th {\r
        background-color: inherit\r
    }\r
\r
    .usa-table--stacked-header td[data-label]:before,\r
    .usa-table--stacked-header th[data-label]:before {\r
        content: attr(data-label);\r
        display: block;\r
        font-weight: 700;\r
        margin: -.5rem -1rem 0;\r
        padding: .75rem 1rem .25rem\r
    }\r
\r
    .usa-table--stacked-header tr td:first-child,\r
    .usa-table--stacked-header tr th:first-child {\r
        font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
        /* font-size: 1.06rem; */\r
        line-height: 1.1;\r
        background-color: #dfe1e2;\r
        color: #1b1b1b;\r
        font-weight: 700;\r
        padding: .75rem 1rem\r
    }\r
\r
    .usa-table--stacked-header tr td:first-child:before,\r
    .usa-table--stacked-header tr th:first-child:before {\r
        display: none\r
    }\r
}\r
\r
.width-mobile .usa-table--stacked td,\r
.width-mobile .usa-table--stacked th,\r
.width-mobile .usa-table--stacked-header td,\r
.width-mobile .usa-table--stacked-header th {\r
    border-bottom-width: 0;\r
    display: block;\r
    width: 100%\r
}\r
\r
.width-mobile .usa-table--stacked tr td:first-child,\r
.width-mobile .usa-table--stacked tr th:first-child {\r
    border-top-width: 0\r
}\r
\r
.width-mobile .usa-table--stacked tr:nth-child(odd) td,\r
.width-mobile .usa-table--stacked tr:nth-child(odd) th {\r
    background-color: inherit\r
}\r
\r
.width-mobile .usa-table--stacked tr:first-child td:first-child,\r
.width-mobile .usa-table--stacked tr:first-child th:first-child,\r
.width-mobile .usa-table--stacked-header tr:first-child td:first-child,\r
.width-mobile .usa-table--stacked-header tr:first-child th:first-child {\r
    border-top: .25rem solid #1b1b1b\r
}\r
\r
.width-mobile .usa-table--stacked td[data-label],\r
.width-mobile .usa-table--stacked th[data-label],\r
.width-mobile .usa-table--stacked-header td[data-label],\r
.width-mobile .usa-table--stacked-header th[data-label] {\r
    padding-bottom: .75rem\r
}\r
\r
.width-mobile .usa-table--stacked td[data-label]:before,\r
.width-mobile .usa-table--stacked th[data-label]:before {\r
    content: attr(data-label);\r
    display: block;\r
    font-weight: 700;\r
    margin: -.5rem -1rem 0;\r
    padding: .75rem 1rem .25rem\r
}\r
\r
.width-mobile .usa-table--stacked-header tr td:first-child,\r
.width-mobile .usa-table--stacked-header tr th:first-child {\r
    border-top-width: 0\r
}\r
\r
.width-mobile .usa-table--stacked-header tr:nth-child(odd) td,\r
.width-mobile .usa-table--stacked-header tr:nth-child(odd) th {\r
    background-color: inherit\r
}\r
\r
.width-mobile .usa-table--stacked-header td[data-label]:before,\r
.width-mobile .usa-table--stacked-header th[data-label]:before {\r
    content: attr(data-label);\r
    display: block;\r
    font-weight: 700;\r
    margin: -.5rem -1rem 0;\r
    padding: .75rem 1rem .25rem\r
}\r
\r
.width-mobile .usa-table--stacked-header tr td:first-child,\r
.width-mobile .usa-table--stacked-header tr th:first-child {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.1;\r
    background-color: #dfe1e2;\r
    color: #1b1b1b;\r
    font-weight: 700;\r
    padding: .75rem 1rem\r
}\r
\r
.width-mobile .usa-table--stacked-header tr td:first-child:before,\r
.width-mobile .usa-table--stacked-header tr th:first-child:before {\r
    display: none\r
}\r
\r
.usa-table--sticky-header {\r
    border: 1px solid #1b1b1b;\r
    border-collapse: separate\r
}\r
\r
.usa-table--sticky-header td,\r
.usa-table--sticky-header th {\r
    border-left: none;\r
    border-top: none\r
}\r
\r
.usa-table--sticky-header td:last-child,\r
.usa-table--sticky-header th:last-child {\r
    border-right: none\r
}\r
\r
.usa-table--sticky-header tbody tr:last-child td,\r
.usa-table--sticky-header tbody tr:last-child th {\r
    border-bottom: none\r
}\r
\r
.usa-table--sticky-header thead {\r
    position: sticky;\r
    top: -1px\r
}\r
\r
.usa-table--sticky-header.usa-table--borderless {\r
    border: 0\r
}\r
\r
.usa-table--sticky-header.usa-table--borderless thead th {\r
    background-color: #fff\r
}\r
\r
.usa-table--sticky-header.usa-table--borderless td,\r
.usa-table--sticky-header.usa-table--borderless th {\r
    border-right: none\r
}\r
\r
.usa-table-container--scrollable {\r
    margin: 1.25rem 0;\r
    overflow-y: hidden\r
}\r
\r
.usa-table-container--scrollable .usa-table {\r
    margin: 0\r
}\r
\r
.usa-table-container--scrollable td {\r
    white-space: nowrap\r
}\r
\r
.usa-tag {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: .93rem; */\r
    color: #fff;\r
    text-transform: uppercase;\r
    background-color: #565c65;\r
    border-radius: 2px;\r
    margin-right: .25rem;\r
    padding: 1px .5rem\r
}\r
\r
.usa-tag:only-of-type {\r
    margin-right: 0\r
}\r
\r
.usa-tag--big {\r
    padding-left: .5rem;\r
    padding-right: .5rem;\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem */\r
}\r
\r
.usa-tooltip {\r
    display: inline-block;\r
    position: relative\r
}\r
\r
.usa-tooltip__trigger {\r
    cursor: pointer\r
}\r
\r
.usa-tooltip__trigger>svg {\r
    display: block;\r
    pointer-events: none\r
}\r
\r
.usa-tooltip__body,\r
.usa-tooltip__body--top {\r
    transition: opacity .08s ease-in-out;\r
    background-color: #1b1b1b;\r
    border-radius: .25rem;\r
    color: #f0f0f0;\r
    display: none;\r
    /* font-size: 1rem; */\r
    opacity: 0;\r
    padding: .5rem;\r
    width: auto;\r
    white-space: pre;\r
    z-index: 100000;\r
    position: absolute\r
}\r
\r
.usa-tooltip__body--top::after,\r
.usa-tooltip__body::after {\r
    content: "";\r
    display: block;\r
    width: 0;\r
    height: 0;\r
    border-left: 5px solid transparent;\r
    border-right: 5px solid transparent;\r
    border-top: 5px solid #1b1b1b;\r
    position: absolute;\r
    bottom: -5px;\r
    left: 50%;\r
    margin-left: -5px\r
}\r
\r
.usa-tooltip__body--top::before,\r
.usa-tooltip__body::before {\r
    content: "";\r
    display: block;\r
    position: absolute\r
}\r
\r
.usa-tooltip__body--wrap {\r
    width: 100%;\r
    white-space: normal;\r
    text-align: center;\r
    min-width: 50vw\r
}\r
\r
.usa-tooltip__body.is-set {\r
    display: block\r
}\r
\r
.usa-tooltip__body.is-visible {\r
    opacity: 1\r
}\r
\r
.usa-tooltip__body--top::before {\r
    top: 100%;\r
    height: 5px;\r
    left: 0;\r
    right: 0\r
}\r
\r
.usa-tooltip__body--bottom::before {\r
    bottom: 100%;\r
    height: 5px;\r
    left: 0;\r
    right: 0\r
}\r
\r
.usa-tooltip__body--bottom::after {\r
    border-left: 5px solid transparent;\r
    border-right: 5px solid transparent;\r
    border-bottom: 5px solid #1b1b1b;\r
    border-top: 0;\r
    bottom: auto;\r
    top: -5px\r
}\r
\r
.usa-tooltip__body--right::before {\r
    right: 100%;\r
    bottom: 0;\r
    top: 0;\r
    width: 5px\r
}\r
\r
.usa-tooltip__body--right::after {\r
    border-top: 5px solid transparent;\r
    border-bottom: 5px solid transparent;\r
    border-right: 5px solid #1b1b1b;\r
    border-left: 0;\r
    right: auto;\r
    top: 50%;\r
    bottom: 0;\r
    left: -5px;\r
    margin: -5px 0 0\r
}\r
\r
.usa-tooltip__body--left::before {\r
    left: 100%;\r
    bottom: 0;\r
    top: 0;\r
    width: 5px\r
}\r
\r
.usa-tooltip__body--left::after {\r
    border-top: 5px solid transparent;\r
    border-bottom: 5px solid transparent;\r
    border-left: 5px solid #1b1b1b;\r
    border-right: 0;\r
    right: -5px;\r
    top: 50%;\r
    bottom: 0;\r
    left: auto;\r
    margin: -5px 0 0\r
}\r
\r
.usa-character-count__status {\r
    display: inline-block;\r
    padding-top: .25rem\r
}\r
\r
.usa-character-count__status.usa-character-count__status--invalid {\r
    color: #b50909;\r
    font-weight: 700\r
}\r
\r
.usa-input:disabled,\r
.usa-input[aria-disabled=true] {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1;\r
    -webkit-text-fill-color: #454545\r
}\r
\r
.usa-input:disabled.usa-focus,\r
.usa-input:disabled:active,\r
.usa-input:disabled:focus,\r
.usa-input:disabled:hover,\r
.usa-input[aria-disabled=true].usa-focus,\r
.usa-input[aria-disabled=true]:active,\r
.usa-input[aria-disabled=true]:focus,\r
.usa-input[aria-disabled=true]:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-input:disabled,\r
    .usa-input[aria-disabled=true] {\r
        color: GrayText;\r
        border: 2px solid GrayText\r
    }\r
\r
    .usa-input:disabled.usa-focus,\r
    .usa-input:disabled:active,\r
    .usa-input:disabled:focus,\r
    .usa-input:disabled:hover,\r
    .usa-input[aria-disabled=true].usa-focus,\r
    .usa-input[aria-disabled=true]:active,\r
    .usa-input[aria-disabled=true]:focus,\r
    .usa-input[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-input--error,\r
.usa-input--success {\r
    border-width: .25rem;\r
    border-color: #b50909;\r
    border-style: solid;\r
    padding-top: calc(.5rem - .25rem);\r
    padding-bottom: calc(.5rem - .25rem)\r
}\r
\r
.usa-input--success {\r
    border-color: #00a91c\r
}\r
\r
.usa-fieldset {\r
    border: 0;\r
    margin: 0;\r
    padding: 0\r
}\r
\r
.usa-legend {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.3;\r
    display: block;\r
    font-weight: 400;\r
    margin-top: 1.5rem;\r
    max-width: 30rem\r
}\r
\r
.usa-legend--large {\r
    /* font-size: 2.13rem; */\r
    font-weight: 700;\r
    margin-top: 1rem\r
}\r
\r
.usa-input-list,\r
.usa-prose .usa-input-list {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    list-style-type: none;\r
    padding-left: 0\r
}\r
\r
.usa-checkbox {\r
    background: #fff\r
}\r
\r
.usa-checkbox__label {\r
    color: #1b1b1b\r
}\r
\r
.usa-checkbox__label::before {\r
    background: #fff;\r
    box-shadow: 0 0 0 2px #1b1b1b\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-checkbox__label::before {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px\r
    }\r
}\r
\r
.usa-checkbox__input:checked+[class*=__label]::before {\r
    background-color: #005ea2;\r
    box-shadow: 0 0 0 2px #005ea2\r
}\r
\r
.usa-checkbox__input:disabled+[class*=__label],\r
.usa-checkbox__input[aria-disabled=true]+[class*=__label] {\r
    color: #757575;\r
    cursor: not-allowed\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-checkbox__input:disabled+[class*=__label],\r
    .usa-checkbox__input[aria-disabled=true]+[class*=__label] {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-checkbox__input:disabled+[class*=__label]::before,\r
.usa-checkbox__input[aria-disabled=true]+[class*=__label]::before {\r
    background-color: #fff;\r
    box-shadow: 0 0 0 2px #757575\r
}\r
\r
.usa-checkbox__input--tile+[class*=__label] {\r
    background-color: #fff;\r
    border: 2px solid #c9c9c9;\r
    color: #1b1b1b;\r
    border-radius: .25rem;\r
    margin-top: .5rem;\r
    padding: .75rem 1rem .75rem 2.5rem\r
}\r
\r
.usa-checkbox__input--tile:checked+[class*=__label] {\r
    background-color: rgba(0, 94, 162, .1);\r
    border-color: #005ea2\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-checkbox__input--tile:checked+[class*=__label] {\r
        border: ButtonText solid .25rem\r
    }\r
}\r
\r
.usa-checkbox__input--tile:disabled+[class*=__label],\r
.usa-checkbox__input--tile[aria-disabled=true]+[class*=__label] {\r
    border-color: #e6e6e6\r
}\r
\r
.usa-checkbox__input--tile:disabled:checked+[class*=__label],\r
.usa-checkbox__input--tile:disabled:indeterminate+[class*=__label],\r
.usa-checkbox__input--tile:disabled[data-indeterminate]+[class*=__label],\r
.usa-checkbox__input--tile[aria-disabled=true]:checked+[class*=__label],\r
.usa-checkbox__input--tile[aria-disabled=true]:indeterminate+[class*=__label],\r
.usa-checkbox__input--tile[aria-disabled=true][data-indeterminate]+[class*=__label] {\r
    background-color: #fff\r
}\r
\r
.usa-checkbox__input:indeterminate+[class*=__label]::before,\r
.usa-checkbox__input[data-indeterminate]+[class*=__label]::before {\r
    background-image: url(../img/checkbox-indeterminate.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
    background-color: #005ea2;\r
    box-shadow: 0 0 0 2px #005ea2;\r
    background-position: center center;\r
    background-size: .75rem auto\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-checkbox__input:indeterminate+[class*=__label]::before,\r
    .usa-checkbox__input[data-indeterminate]+[class*=__label]::before {\r
        background-image: url(../img/checkbox-indeterminate-alt.svg), linear-gradient(transparent, transparent);\r
        background-repeat: no-repeat;\r
        background-color: SelectedItem\r
    }\r
}\r
\r
.usa-checkbox__input:indeterminate:disabled+[class*=__label]::before,\r
.usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label]::before,\r
.usa-checkbox__input[data-indeterminate]:disabled+[class*=__label]::before,\r
.usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label]::before {\r
    box-shadow: 0 0 0 2px #757575\r
}\r
\r
.usa-checkbox__input:indeterminate:disabled+[class*=__label],\r
.usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label],\r
.usa-checkbox__input[data-indeterminate]:disabled+[class*=__label],\r
.usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label] {\r
    border-color: #e6e6e6\r
}\r
\r
.usa-checkbox__input--tile:indeterminate+[class*=__label],\r
.usa-checkbox__input--tile[data-indeterminate]+[class*=__label] {\r
    background-color: rgba(0, 94, 162, .1);\r
    border-color: #005ea2\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-checkbox__input--tile:indeterminate+[class*=__label],\r
    .usa-checkbox__input--tile[data-indeterminate]+[class*=__label] {\r
        border: ButtonText solid .25rem\r
    }\r
}\r
\r
.usa-checkbox__input:checked+[class*=__label]::before,\r
.usa-checkbox__input:checked:disabled+[class*=__label]::before,\r
.usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before {\r
    background-image: url(../img/correct8.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-checkbox__input:checked+[class*=__label]::before,\r
    .usa-checkbox__input:checked:disabled+[class*=__label]::before,\r
    .usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before {\r
        background-image: url(../img/correct8-alt.svg), linear-gradient(transparent, transparent);\r
        background-repeat: no-repeat\r
    }\r
}\r
\r
.usa-checkbox__input:checked:disabled+[class*=__label]::before,\r
.usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before,\r
.usa-checkbox__input:indeterminate:disabled+[class*=__label]::before,\r
.usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label]::before,\r
.usa-checkbox__input[data-indeterminate]:disabled+[class*=__label]::before,\r
.usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label]::before {\r
    background-color: #757575\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-checkbox__input:checked:disabled+[class*=__label]::before,\r
    .usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before,\r
    .usa-checkbox__input:indeterminate:disabled+[class*=__label]::before,\r
    .usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label]::before,\r
    .usa-checkbox__input[data-indeterminate]:disabled+[class*=__label]::before,\r
    .usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label]::before {\r
        background-color: GrayText\r
    }\r
}\r
\r
.usa-checkbox__input {\r
    position: absolute;\r
    left: -999em;\r
    right: auto\r
}\r
\r
.usa-checkbox__input:focus+[class*=__label]::before {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: .25rem\r
}\r
\r
.usa-checkbox__input--tile+[class*=__label]::before {\r
    left: .5rem\r
}\r
\r
.usa-checkbox__input:checked+[class*=__label]::before {\r
    background-position: center center;\r
    background-size: .75rem auto\r
}\r
\r
@media print {\r
    .usa-checkbox__input:checked+[class*=__label]::before {\r
        background-image: none;\r
        background-color: #fff;\r
        content: "✔";\r
        text-align: center\r
    }\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-checkbox__input:checked+[class*=__label]::before {\r
        background-color: SelectedItem\r
    }\r
}\r
\r
.usa-checkbox__label {\r
    cursor: pointer;\r
    display: inherit;\r
    font-weight: 400;\r
    margin-top: .75rem;\r
    padding-left: 2rem;\r
    position: relative\r
}\r
\r
.usa-checkbox__label::before {\r
    content: " ";\r
    display: block;\r
    left: 0;\r
    margin-left: 2px;\r
    margin-top: .064rem;\r
    position: absolute;\r
    height: 1.25rem;\r
    width: 1.25rem;\r
    border-radius: 2px\r
}\r
\r
.usa-checkbox__label-description {\r
    display: block;\r
    /* font-size: .93rem; */\r
    margin-top: .5rem\r
}\r
\r
.usa-select {\r
    background-image: url(../img/usa-icons/unfold_more.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
    background-color: #fff;\r
    background-position: right .5rem center;\r
    background-size: 1.25rem;\r
    padding-right: 2rem\r
}\r
\r
.usa-select::-ms-expand {\r
    display: none\r
}\r
\r
.usa-select:-webkit-autofill {\r
    -webkit-appearance: menulist;\r
    appearance: menulist\r
}\r
\r
.usa-select:-moz-focusring {\r
    color: transparent;\r
    text-shadow: 0 0 0#000\r
}\r
\r
.usa-select[multiple] {\r
    height: auto;\r
    background-image: none;\r
    padding-right: 0\r
}\r
\r
.usa-select option {\r
    overflow: hidden;\r
    text-overflow: ellipsis\r
}\r
\r
.usa-select:disabled,\r
.usa-select[aria-disabled=true] {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-select:disabled.usa-focus,\r
.usa-select:disabled:active,\r
.usa-select:disabled:focus,\r
.usa-select:disabled:hover,\r
.usa-select[aria-disabled=true].usa-focus,\r
.usa-select[aria-disabled=true]:active,\r
.usa-select[aria-disabled=true]:focus,\r
.usa-select[aria-disabled=true]:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-select:disabled,\r
    .usa-select[aria-disabled=true] {\r
        color: GrayText;\r
        border: 2px solid GrayText\r
    }\r
\r
    .usa-select:disabled.usa-focus,\r
    .usa-select:disabled:active,\r
    .usa-select:disabled:focus,\r
    .usa-select:disabled:hover,\r
    .usa-select[aria-disabled=true].usa-focus,\r
    .usa-select[aria-disabled=true]:active,\r
    .usa-select[aria-disabled=true]:focus,\r
    .usa-select[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
\r
    .usa-select {\r
        -webkit-appearance: listbox;\r
        -moz-appearance: listbox;\r
        appearance: listbox;\r
        background-image: none;\r
        padding-right: 0\r
    }\r
}\r
\r
.usa-combo-box {\r
    max-width: 30rem;\r
    position: relative\r
}\r
\r
.usa-combo-box--pristine .usa-combo-box__input {\r
    padding-right: calc(5em + 4px)\r
}\r
\r
.usa-combo-box--pristine .usa-combo-box__input::-ms-clear {\r
    display: none\r
}\r
\r
.usa-combo-box--pristine .usa-combo-box__clear-input {\r
    display: block\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-combo-box--pristine .usa-combo-box__clear-input {\r
        background-image: url(../img/usa-icons/close.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 1rem 1rem;\r
        display: inline-block;\r
        width: 1rem;\r
        height: 1.5rem;\r
        width: auto;\r
        top: .5rem\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-combo-box--pristine .usa-combo-box__clear-input {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/close.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/close.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 1rem 1rem;\r
            mask-size: 1rem 1rem\r
        }\r
    }\r
}\r
\r
.usa-combo-box__input {\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
    margin-bottom: 0;\r
    max-width: none;\r
    padding-right: calc(2.5em + 3px)\r
}\r
\r
.usa-combo-box__input:disabled,\r
.usa-combo-box__input[aria-disabled=true] {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1;\r
    -webkit-text-fill-color: #454545\r
}\r
\r
.usa-combo-box__input:disabled.usa-focus,\r
.usa-combo-box__input:disabled:active,\r
.usa-combo-box__input:disabled:focus,\r
.usa-combo-box__input:disabled:hover,\r
.usa-combo-box__input[aria-disabled=true].usa-focus,\r
.usa-combo-box__input[aria-disabled=true]:active,\r
.usa-combo-box__input[aria-disabled=true]:focus,\r
.usa-combo-box__input[aria-disabled=true]:hover,\r
.usa-input-group input:disabled+.usa-input-suffix.usa-focus,\r
.usa-input-group input:disabled+.usa-input-suffix:active,\r
.usa-input-group input:disabled+.usa-input-suffix:focus,\r
.usa-input-group input:disabled+.usa-input-suffix:hover,\r
.usa-input-group input[aria-disabled=true]+.usa-input-suffix.usa-focus,\r
.usa-input-group input[aria-disabled=true]+.usa-input-suffix:active,\r
.usa-input-group input[aria-disabled=true]+.usa-input-suffix:focus,\r
.usa-input-group input[aria-disabled=true]+.usa-input-suffix:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-combo-box__input:disabled,\r
    .usa-combo-box__input[aria-disabled=true] {\r
        color: GrayText;\r
        border: 2px solid GrayText\r
    }\r
\r
    .usa-combo-box__input:disabled.usa-focus,\r
    .usa-combo-box__input:disabled:active,\r
    .usa-combo-box__input:disabled:focus,\r
    .usa-combo-box__input:disabled:hover,\r
    .usa-combo-box__input[aria-disabled=true].usa-focus,\r
    .usa-combo-box__input[aria-disabled=true]:active,\r
    .usa-combo-box__input[aria-disabled=true]:focus,\r
    .usa-combo-box__input[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-combo-box__input:disabled::-moz-placeholder,\r
.usa-combo-box__input[aria-disabled=true]::-moz-placeholder {\r
    opacity: 1\r
}\r
\r
.usa-combo-box__input:disabled::placeholder,\r
.usa-combo-box__input[aria-disabled=true]::placeholder {\r
    opacity: 1\r
}\r
\r
.usa-combo-box__input:disabled~.usa-combo-box__input-button-separator,\r
.usa-combo-box__input[aria-disabled=true]~.usa-combo-box__input-button-separator {\r
    background-color: #454545;\r
    cursor: not-allowed\r
}\r
\r
button.usa-combo-box__clear-input:focus,\r
button.usa-combo-box__toggle-list:focus {\r
    outline-offset: -4px\r
}\r
\r
button.usa-combo-box__clear-input:disabled,\r
button.usa-combo-box__clear-input[aria-disabled=true],\r
button.usa-combo-box__toggle-list:disabled,\r
button.usa-combo-box__toggle-list[aria-disabled=true] {\r
    cursor: not-allowed\r
}\r
\r
.usa-combo-box__clear-input__wrapper:focus,\r
.usa-combo-box__toggle-list__wrapper:focus {\r
    outline: 0\r
}\r
\r
.usa-combo-box__clear-input,\r
.usa-combo-box__toggle-list {\r
    background-color: transparent;\r
    background-position: center;\r
    border: 0;\r
    bottom: 1px;\r
    cursor: pointer;\r
    margin-bottom: 0;\r
    opacity: .6;\r
    padding-right: 1.25rem;\r
    position: absolute;\r
    top: 1px;\r
    z-index: 100\r
}\r
\r
.usa-combo-box__clear-input {\r
    background-size: auto 1.5rem;\r
    background-image: url(../img/usa-icons/close.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
    display: none;\r
    right: calc(2.5em + 3px)\r
}\r
\r
.usa-combo-box__toggle-list {\r
    // background-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
    // background-repeat: no-repeat;\r
    background-size: auto 2rem;\r
    right: 1px\r
}\r
\r
.usa-combo-box__toggle-list {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
}\r
\r
.usa-combo-box__toggle-list .fa {\r
    font-size: 2rem;\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-combo-box__toggle-list {\r
        // background-image: url(../img/usa-icons/expand_more.svg);\r
        // background-repeat: no-repeat;\r
        // background-position: center center;\r
        // background-size: 1rem 1rem;\r
        display: inline-block;\r
        height: 1rem;\r
        width: 1rem;\r
        height: auto;\r
        width: auto;\r
    }\r
\r
    // @supports ((-webkit-mask:url()) or (mask:url())) {\r
    //     .usa-combo-box__toggle-list {\r
    //         background: 0 0;\r
    //         background-color: ButtonText;\r
    //         -webkit-mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
    //         mask-image: url(../img/usa-icons/expand_more.svg), linear-gradient(transparent, transparent);\r
    //         -webkit-mask-position: center center;\r
    //         mask-position: center center;\r
    //         -webkit-mask-repeat: no-repeat;\r
    //         mask-repeat: no-repeat;\r
    //         -webkit-mask-size: 1rem 1rem;\r
    //         mask-size: 1rem 1rem\r
    //     }\r
    // }\r
\r
    .usa-combo-box__toggle-list:disabled,\r
    .usa-combo-box__toggle-list[aria-disabled=true] {\r
        background-color: GrayText\r
    }\r
}\r
\r
.usa-combo-box__input-button-separator {\r
    background-color: #c6cace;\r
    position: absolute;\r
    top: 1px;\r
    height: calc(100% - 1rem);\r
    margin-bottom: .5rem;\r
    margin-top: .25rem;\r
    width: 1px;\r
    right: calc(2.5em + 2px);\r
    box-sizing: border-box;\r
    z-index: 200\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-combo-box__input-button-separator {\r
        background-color: ButtonText\r
    }\r
}\r
\r
.usa-combo-box__list {\r
    border-width: 1px;\r
    border-color: #565c65;\r
    border-style: solid;\r
    background-color: #fff;\r
    border-radius: 0;\r
    border-top: 0;\r
    margin: 0;\r
    max-height: 12rem;\r
    overflow-x: hidden;\r
    overflow-y: auto;\r
    padding: 0;\r
    position: absolute;\r
    width: 100%;\r
    z-index: 300\r
}\r
\r
.usa-combo-box__list:focus {\r
    outline: 0\r
}\r
\r
.usa-combo-box__list-option {\r
    border-bottom: 1px solid #dfe1e2;\r
    cursor: pointer;\r
    display: block;\r
    padding: .5rem\r
}\r
\r
.usa-combo-box__list-option--focused {\r
    outline: 2px solid #162e51;\r
    outline-offset: -2px;\r
    position: relative;\r
    z-index: 100\r
}\r
\r
.usa-combo-box__list-option--focused:focus {\r
    outline-offset: -4px\r
}\r
\r
.usa-combo-box__list-option--selected {\r
    background-color: #005ea2;\r
    border-color: #005ea2;\r
    color: #fff\r
}\r
\r
.usa-combo-box__list-option--no-results {\r
    cursor: not-allowed;\r
    display: block;\r
    padding: .5rem\r
}\r
\r
.usa-date-picker__wrapper {\r
    display: none;\r
    position: relative;\r
    max-width: 30rem\r
}\r
\r
.usa-date-picker__wrapper:focus {\r
    outline: 0\r
}\r
\r
.usa-date-picker__button:disabled,\r
.usa-date-picker__calendar__date:disabled,\r
.usa-date-picker__calendar__month-selection:disabled,\r
.usa-date-picker__calendar__month:disabled,\r
.usa-date-picker__calendar__next-month:disabled,\r
.usa-date-picker__calendar__next-year-chunk:disabled,\r
.usa-date-picker__calendar__next-year:disabled,\r
.usa-date-picker__calendar__previous-month:disabled,\r
.usa-date-picker__calendar__previous-year-chunk:disabled,\r
.usa-date-picker__calendar__previous-year:disabled,\r
.usa-date-picker__calendar__year-selection:disabled,\r
.usa-date-picker__calendar__year:disabled,\r
.usa-date-picker__external-input[aria-disabled=true]+.usa-date-picker__button,\r
[aria-disabled=true].usa-date-picker__button,\r
[aria-disabled=true].usa-date-picker__calendar__date,\r
[aria-disabled=true].usa-date-picker__calendar__month,\r
[aria-disabled=true].usa-date-picker__calendar__month-selection,\r
[aria-disabled=true].usa-date-picker__calendar__next-month,\r
[aria-disabled=true].usa-date-picker__calendar__next-year,\r
[aria-disabled=true].usa-date-picker__calendar__next-year-chunk,\r
[aria-disabled=true].usa-date-picker__calendar__previous-month,\r
[aria-disabled=true].usa-date-picker__calendar__previous-year,\r
[aria-disabled=true].usa-date-picker__calendar__previous-year-chunk,\r
[aria-disabled=true].usa-date-picker__calendar__year,\r
[aria-disabled=true].usa-date-picker__calendar__year-selection {\r
    cursor: not-allowed;\r
    opacity: .6\r
}\r
\r
.usa-date-picker__button:hover:disabled,\r
.usa-date-picker__calendar__date:hover:disabled,\r
.usa-date-picker__calendar__month-selection:hover:disabled,\r
.usa-date-picker__calendar__month:hover:disabled,\r
.usa-date-picker__calendar__next-month:hover:disabled,\r
.usa-date-picker__calendar__next-year-chunk:hover:disabled,\r
.usa-date-picker__calendar__next-year:hover:disabled,\r
.usa-date-picker__calendar__previous-month:hover:disabled,\r
.usa-date-picker__calendar__previous-year-chunk:hover:disabled,\r
.usa-date-picker__calendar__previous-year:hover:disabled,\r
.usa-date-picker__calendar__year-selection:hover:disabled,\r
.usa-date-picker__calendar__year:hover:disabled,\r
.usa-date-picker__external-input[aria-disabled=true]+.usa-date-picker__button:hover,\r
[aria-disabled=true].usa-date-picker__button:hover,\r
[aria-disabled=true].usa-date-picker__calendar__date:hover,\r
[aria-disabled=true].usa-date-picker__calendar__month-selection:hover,\r
[aria-disabled=true].usa-date-picker__calendar__month:hover,\r
[aria-disabled=true].usa-date-picker__calendar__next-month:hover,\r
[aria-disabled=true].usa-date-picker__calendar__next-year-chunk:hover,\r
[aria-disabled=true].usa-date-picker__calendar__next-year:hover,\r
[aria-disabled=true].usa-date-picker__calendar__previous-month:hover,\r
[aria-disabled=true].usa-date-picker__calendar__previous-year-chunk:hover,\r
[aria-disabled=true].usa-date-picker__calendar__previous-year:hover,\r
[aria-disabled=true].usa-date-picker__calendar__year-selection:hover,\r
[aria-disabled=true].usa-date-picker__calendar__year:hover {\r
    background-color: initial\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__button:disabled,\r
    .usa-date-picker__button:hover:disabled,\r
    .usa-date-picker__calendar__date:disabled,\r
    .usa-date-picker__calendar__date:hover:disabled,\r
    .usa-date-picker__calendar__month-selection:disabled,\r
    .usa-date-picker__calendar__month-selection:hover:disabled,\r
    .usa-date-picker__calendar__month:disabled,\r
    .usa-date-picker__calendar__month:hover:disabled,\r
    .usa-date-picker__calendar__next-month:disabled,\r
    .usa-date-picker__calendar__next-month:hover:disabled,\r
    .usa-date-picker__calendar__next-year-chunk:disabled,\r
    .usa-date-picker__calendar__next-year-chunk:hover:disabled,\r
    .usa-date-picker__calendar__next-year:disabled,\r
    .usa-date-picker__calendar__next-year:hover:disabled,\r
    .usa-date-picker__calendar__previous-month:disabled,\r
    .usa-date-picker__calendar__previous-month:hover:disabled,\r
    .usa-date-picker__calendar__previous-year-chunk:disabled,\r
    .usa-date-picker__calendar__previous-year-chunk:hover:disabled,\r
    .usa-date-picker__calendar__previous-year:disabled,\r
    .usa-date-picker__calendar__previous-year:hover:disabled,\r
    .usa-date-picker__calendar__year-selection:disabled,\r
    .usa-date-picker__calendar__year-selection:hover:disabled,\r
    .usa-date-picker__calendar__year:disabled,\r
    .usa-date-picker__calendar__year:hover:disabled,\r
    .usa-date-picker__external-input[aria-disabled=true]+.usa-date-picker__button,\r
    .usa-date-picker__external-input[aria-disabled=true]+.usa-date-picker__button:hover,\r
    [aria-disabled=true].usa-date-picker__button,\r
    [aria-disabled=true].usa-date-picker__button:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__date,\r
    [aria-disabled=true].usa-date-picker__calendar__date:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__month,\r
    [aria-disabled=true].usa-date-picker__calendar__month-selection,\r
    [aria-disabled=true].usa-date-picker__calendar__month-selection:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__month:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__next-month,\r
    [aria-disabled=true].usa-date-picker__calendar__next-month:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__next-year,\r
    [aria-disabled=true].usa-date-picker__calendar__next-year-chunk,\r
    [aria-disabled=true].usa-date-picker__calendar__next-year-chunk:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__next-year:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__previous-month,\r
    [aria-disabled=true].usa-date-picker__calendar__previous-month:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__previous-year,\r
    [aria-disabled=true].usa-date-picker__calendar__previous-year-chunk,\r
    [aria-disabled=true].usa-date-picker__calendar__previous-year-chunk:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__previous-year:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__year,\r
    [aria-disabled=true].usa-date-picker__calendar__year-selection,\r
    [aria-disabled=true].usa-date-picker__calendar__year-selection:hover,\r
    [aria-disabled=true].usa-date-picker__calendar__year:hover {\r
        background-color: GrayText\r
    }\r
}\r
\r
.usa-date-picker__calendar__month,\r
.usa-date-picker__calendar__next-year-chunk,\r
.usa-date-picker__calendar__previous-year-chunk,\r
.usa-date-picker__calendar__year {\r
    background-color: #f0f0f0;\r
    border: 0;\r
    width: 100%\r
}\r
\r
.usa-date-picker__calendar__month-selection,\r
.usa-date-picker__calendar__year-selection {\r
    background-color: #f0f0f0;\r
    border: 0\r
}\r
\r
.usa-date-picker__calendar__date,\r
.usa-date-picker__calendar__next-month,\r
.usa-date-picker__calendar__next-year,\r
.usa-date-picker__calendar__previous-month,\r
.usa-date-picker__calendar__previous-year {\r
    background-color: #f0f0f0;\r
    border: 0;\r
    width: 100%\r
}\r
\r
.usa-date-picker__button {\r
    border: 0\r
}\r
\r
.usa-date-picker__button:not([disabled]),\r
.usa-date-picker__calendar__date:not([disabled]),\r
.usa-date-picker__calendar__month-selection:not([disabled]),\r
.usa-date-picker__calendar__month:not([disabled]),\r
.usa-date-picker__calendar__next-month:not([disabled]),\r
.usa-date-picker__calendar__next-year-chunk:not([disabled]),\r
.usa-date-picker__calendar__next-year:not([disabled]),\r
.usa-date-picker__calendar__previous-month:not([disabled]),\r
.usa-date-picker__calendar__previous-year-chunk:not([disabled]),\r
.usa-date-picker__calendar__previous-year:not([disabled]),\r
.usa-date-picker__calendar__year-selection:not([disabled]),\r
.usa-date-picker__calendar__year:not([disabled]) {\r
    cursor: pointer\r
}\r
\r
.usa-date-picker__button:not([disabled]):focus,\r
.usa-date-picker__calendar__date:not([disabled]):focus,\r
.usa-date-picker__calendar__month-selection:not([disabled]):focus,\r
.usa-date-picker__calendar__month:not([disabled]):focus,\r
.usa-date-picker__calendar__next-month:not([disabled]):focus,\r
.usa-date-picker__calendar__next-year-chunk:not([disabled]):focus,\r
.usa-date-picker__calendar__next-year:not([disabled]):focus,\r
.usa-date-picker__calendar__previous-month:not([disabled]):focus,\r
.usa-date-picker__calendar__previous-year-chunk:not([disabled]):focus,\r
.usa-date-picker__calendar__previous-year:not([disabled]):focus,\r
.usa-date-picker__calendar__year-selection:not([disabled]):focus,\r
.usa-date-picker__calendar__year:not([disabled]):focus {\r
    outline-offset: -4px\r
}\r
\r
.usa-date-picker__button:not([disabled]):hover,\r
.usa-date-picker__calendar__date:not([disabled]):hover,\r
.usa-date-picker__calendar__month-selection:not([disabled]):hover,\r
.usa-date-picker__calendar__month:not([disabled]):hover,\r
.usa-date-picker__calendar__next-month:not([disabled]):hover,\r
.usa-date-picker__calendar__next-year-chunk:not([disabled]):hover,\r
.usa-date-picker__calendar__next-year:not([disabled]):hover,\r
.usa-date-picker__calendar__previous-month:not([disabled]):hover,\r
.usa-date-picker__calendar__previous-year-chunk:not([disabled]):hover,\r
.usa-date-picker__calendar__previous-year:not([disabled]):hover,\r
.usa-date-picker__calendar__year-selection:not([disabled]):hover,\r
.usa-date-picker__calendar__year:not([disabled]):hover {\r
    background-color: #dfe1e2\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__button:not([disabled]):hover,\r
    .usa-date-picker__calendar__date:not([disabled]):hover,\r
    .usa-date-picker__calendar__month-selection:not([disabled]):hover,\r
    .usa-date-picker__calendar__month:not([disabled]):hover,\r
    .usa-date-picker__calendar__next-month:not([disabled]):hover,\r
    .usa-date-picker__calendar__next-year-chunk:not([disabled]):hover,\r
    .usa-date-picker__calendar__next-year:not([disabled]):hover,\r
    .usa-date-picker__calendar__previous-month:not([disabled]):hover,\r
    .usa-date-picker__calendar__previous-year-chunk:not([disabled]):hover,\r
    .usa-date-picker__calendar__previous-year:not([disabled]):hover,\r
    .usa-date-picker__calendar__year-selection:not([disabled]):hover,\r
    .usa-date-picker__calendar__year:not([disabled]):hover {\r
        background-color: buttontext\r
    }\r
}\r
\r
.usa-date-picker__button:not([disabled]):active,\r
.usa-date-picker__calendar__date:not([disabled]):active,\r
.usa-date-picker__calendar__month-selection:not([disabled]):active,\r
.usa-date-picker__calendar__month:not([disabled]):active,\r
.usa-date-picker__calendar__next-month:not([disabled]):active,\r
.usa-date-picker__calendar__next-year-chunk:not([disabled]):active,\r
.usa-date-picker__calendar__next-year:not([disabled]):active,\r
.usa-date-picker__calendar__previous-month:not([disabled]):active,\r
.usa-date-picker__calendar__previous-year-chunk:not([disabled]):active,\r
.usa-date-picker__calendar__previous-year:not([disabled]):active,\r
.usa-date-picker__calendar__year-selection:not([disabled]):active,\r
.usa-date-picker__calendar__year:not([disabled]):active {\r
    background-color: #a9aeb1\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__button:not([disabled]):active,\r
    .usa-date-picker__calendar__date:not([disabled]):active,\r
    .usa-date-picker__calendar__month-selection:not([disabled]):active,\r
    .usa-date-picker__calendar__month:not([disabled]):active,\r
    .usa-date-picker__calendar__next-month:not([disabled]):active,\r
    .usa-date-picker__calendar__next-year-chunk:not([disabled]):active,\r
    .usa-date-picker__calendar__next-year:not([disabled]):active,\r
    .usa-date-picker__calendar__previous-month:not([disabled]):active,\r
    .usa-date-picker__calendar__previous-year-chunk:not([disabled]):active,\r
    .usa-date-picker__calendar__previous-year:not([disabled]):active,\r
    .usa-date-picker__calendar__year-selection:not([disabled]):active,\r
    .usa-date-picker__calendar__year:not([disabled]):active {\r
        background-color: buttontext\r
    }\r
}\r
\r
.usa-date-picker--active .usa-date-picker__button {\r
    background-color: #f0f0f0\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker--active .usa-date-picker__button {\r
        background-color: buttontext\r
    }\r
}\r
\r
.usa-date-picker--active .usa-date-picker__calendar {\r
    z-index: 400\r
}\r
\r
.usa-date-picker__button {\r
    // background-image: url(../img/usa-icons/calendar_today.svg), linear-gradient(transparent, transparent);\r
    // background-repeat: no-repeat;\r
    // align-self: stretch;\r
    background-color: transparent;\r
    // background-position: center;\r
    // background-size: 1.5rem;\r
    // margin-top: .5em;\r
    // width: 3em\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__button {\r
        // background-image: url(../img/usa-icons/calendar_today.svg);\r
        // background-repeat: no-repeat;\r
        // background-position: center center;\r
        // background-size: 2.5rem 2.5rem;\r
        // display: inline-block;\r
        // height: 2.5rem;\r
        // width: 3rem;\r
        // -webkit-mask-size: 1.5rem !important;\r
        // mask-size: 1.5rem !important;\r
        position: relative\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-date-picker__button {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            // -webkit-mask-image: url(../img/usa-icons/calendar_today.svg), linear-gradient(transparent, transparent);\r
            // mask-image: url(../img/usa-icons/calendar_today.svg), linear-gradient(transparent, transparent);\r
            // -webkit-mask-position: center center;\r
            // mask-position: center center;\r
            // -webkit-mask-repeat: no-repeat;\r
            // mask-repeat: no-repeat;\r
            // -webkit-mask-size: 2.5rem 2.5rem;\r
            // mask-size: 2.5rem 2.5rem\r
        }\r
    }\r
\r
    .usa-date-picker__button:not([disabled]):focus,\r
    .usa-date-picker__button:not([disabled]):hover {\r
        background-color: Highlight\r
    }\r
}\r
\r
.usa-date-picker--initialized .usa-date-picker__wrapper {\r
    display: flex\r
}\r
\r
.usa-date-picker__calendar {\r
    background-color: #f0f0f0;\r
    left: auto;\r
    max-width: 20rem;\r
    position: absolute;\r
    right: 0;\r
    width: 100%;\r
    z-index: 100\r
}\r
\r
.usa-date-picker__calendar__table {\r
    border-spacing: 0;\r
    border-collapse: collapse;\r
    table-layout: fixed;\r
    text-align: center;\r
    width: 100%\r
}\r
\r
.usa-date-picker__calendar__table th {\r
    font-weight: 400\r
}\r
\r
.usa-date-picker__calendar__table td {\r
    padding: 0\r
}\r
\r
.usa-date-picker__calendar__row {\r
    display: flex;\r
    flex-wrap: wrap;\r
    text-align: center;\r
    width: 100%\r
}\r
\r
.usa-date-picker__calendar__cell {\r
    background-color: #f0f0f0;\r
    flex: 1\r
}\r
\r
.usa-date-picker__calendar__cell--center-items {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__cell--center-items:not([disabled]):hover {\r
        outline: 2px solid transparent;\r
        outline-offset: -2px\r
    }\r
}\r
\r
.usa-date-picker__calendar__next-month,\r
.usa-date-picker__calendar__next-year,\r
.usa-date-picker__calendar__previous-month,\r
.usa-date-picker__calendar__previous-year {\r
    background-position: center;\r
    background-size: auto 1.5rem;\r
    height: 1.5rem;\r
    padding: 20px 10px\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__calendar__next-month,\r
    .usa-date-picker__calendar__next-year,\r
    .usa-date-picker__calendar__previous-month,\r
    .usa-date-picker__calendar__previous-year {\r
        -webkit-mask-size: 1.5rem !important;\r
        mask-size: 1.5rem !important\r
    }\r
}\r
\r
.usa-date-picker__calendar__previous-year:not([disabled]) {\r
    background-image: url(../img/usa-icons/navigate_far_before.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__previous-year:not([disabled]) {\r
        background-image: url(../img/usa-icons/navigate_far_before.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2.5rem 2.5rem;\r
        display: inline-block;\r
        height: 2.5rem;\r
        width: 3rem;\r
        background-color: buttonText\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-date-picker__calendar__previous-year:not([disabled]) {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/navigate_far_before.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/navigate_far_before.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2.5rem 2.5rem;\r
            mask-size: 2.5rem 2.5rem\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__previous-month:not([disabled]) {\r
    background-image: url(../img/usa-icons/navigate_before.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__previous-month:not([disabled]) {\r
        background-image: url(../img/usa-icons/navigate_before.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2.5rem 2.5rem;\r
        display: inline-block;\r
        height: 2.5rem;\r
        width: 3rem;\r
        background-color: buttonText\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-date-picker__calendar__previous-month:not([disabled]) {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/navigate_before.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/navigate_before.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2.5rem 2.5rem;\r
            mask-size: 2.5rem 2.5rem\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__next-year:not([disabled]) {\r
    background-image: url(../img/usa-icons/navigate_far_next.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__next-year:not([disabled]) {\r
        background-image: url(../img/usa-icons/navigate_far_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2.5rem 2.5rem;\r
        display: inline-block;\r
        height: 2.5rem;\r
        width: 3rem;\r
        background-color: buttonText\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-date-picker__calendar__next-year:not([disabled]) {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/navigate_far_next.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/navigate_far_next.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2.5rem 2.5rem;\r
            mask-size: 2.5rem 2.5rem\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__next-month:not([disabled]) {\r
    background-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__next-month:not([disabled]) {\r
        background-image: url(../img/usa-icons/navigate_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2.5rem 2.5rem;\r
        display: inline-block;\r
        height: 2.5rem;\r
        width: 3rem;\r
        background-color: buttonText\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-date-picker__calendar__next-month:not([disabled]) {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2.5rem 2.5rem;\r
            mask-size: 2.5rem 2.5rem\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__day-of-week {\r
    padding: 6px 0\r
}\r
\r
.usa-date-picker__calendar__date {\r
    padding: 10px 0\r
}\r
\r
.usa-date-picker__calendar__date--focused {\r
    outline: 2px solid #162e51;\r
    outline-offset: -2px;\r
    position: relative;\r
    z-index: 100\r
}\r
\r
.usa-date-picker__calendar__date--next-month:not([disabled]),\r
.usa-date-picker__calendar__date--previous-month:not([disabled]) {\r
    color: #5d5d52\r
}\r
\r
.usa-date-picker__calendar__date--range-date,\r
.usa-date-picker__calendar__date--selected {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
.usa-date-picker__calendar__date--range-date:not([disabled]),\r
.usa-date-picker__calendar__date--selected:not([disabled]) {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__calendar__date--range-date:not([disabled]),\r
    .usa-date-picker__calendar__date--selected:not([disabled]) {\r
        border: ActiveText 2px solid\r
    }\r
}\r
\r
.usa-date-picker__calendar__date--range-date:not([disabled]):hover,\r
.usa-date-picker__calendar__date--selected:not([disabled]):hover {\r
    background-color: #0050d8;\r
    color: #e6e6e6\r
}\r
\r
.usa-date-picker__calendar__date--range-date:not([disabled]):focus,\r
.usa-date-picker__calendar__date--selected:not([disabled]):focus {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__calendar__date--range-date:not([disabled]):focus,\r
    .usa-date-picker__calendar__date--selected:not([disabled]):focus {\r
        border: ActiveText 2px solid\r
    }\r
}\r
\r
.usa-date-picker__calendar__date--range-date:not([disabled]):active,\r
.usa-date-picker__calendar__date--selected:not([disabled]):active {\r
    background-color: #1a4480\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__calendar__date--range-date:not([disabled]):active,\r
    .usa-date-picker__calendar__date--selected:not([disabled]):active {\r
        background-color: Highlight\r
    }\r
}\r
\r
.usa-date-picker__calendar__date--range-date-start {\r
    border-top-left-radius: 10%;\r
    border-bottom-left-radius: 10%\r
}\r
\r
.usa-date-picker__calendar__date--range-date-end {\r
    border-top-right-radius: 10%;\r
    border-bottom-right-radius: 10%\r
}\r
\r
.usa-date-picker__calendar__date--within-range {\r
    background-color: #cfe8ff\r
}\r
\r
.usa-date-picker__calendar__date--within-range:not([disabled]),\r
.usa-date-picker__calendar__date--within-range:not([disabled]):hover {\r
    background-color: #cfe8ff\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__date--within-range:not([disabled]) {\r
        border: Highlight 2px solid\r
    }\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__date--within-range:not([disabled]):hover {\r
        border: Highlight 2px solid\r
    }\r
}\r
\r
.usa-date-picker__calendar__date--within-range:not([disabled]):focus {\r
    background-color: #cfe8ff\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__date--within-range:not([disabled]):focus {\r
        border: Highlight 2px solid\r
    }\r
}\r
\r
.usa-date-picker__calendar__date--within-range:not([disabled]):active {\r
    background-color: #cfe8ff\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__date--within-range:not([disabled]):active {\r
        background-color: Highlight\r
    }\r
}\r
\r
@media all and (max-width:19.99em) {\r
    .usa-date-picker__calendar__month-label {\r
        min-width: 100%;\r
        order: -1\r
    }\r
}\r
\r
@media all and (min-width:20em) {\r
    .usa-date-picker__calendar__month-label {\r
        flex: 4;\r
        text-align: center\r
    }\r
}\r
\r
.usa-date-picker__calendar__month-selection,\r
.usa-date-picker__calendar__year-selection {\r
    display: inline-block;\r
    height: 100%;\r
    padding: 8px 4px;\r
    width: auto\r
}\r
\r
@media all and (max-width:19.99em) {\r
\r
    .usa-date-picker__calendar__month-selection,\r
    .usa-date-picker__calendar__year-selection {\r
        padding-bottom: 0;\r
        padding-top: 12px\r
    }\r
}\r
\r
.usa-date-picker__calendar__month-picker {\r
    padding: 20px 5px\r
}\r
\r
@media all and (max-width:19.99em) {\r
    .usa-date-picker__calendar__month-picker {\r
        padding-bottom: 12px;\r
        padding-top: 12px\r
    }\r
\r
    .usa-date-picker__calendar__month-picker tr {\r
        display: flex;\r
        flex-direction: column\r
    }\r
}\r
\r
.usa-date-picker__calendar__month {\r
    padding: 10px 0\r
}\r
\r
.usa-date-picker__calendar__month--focused {\r
    outline: 2px solid #162e51;\r
    outline-offset: -2px;\r
    position: relative;\r
    z-index: 100\r
}\r
\r
.usa-date-picker__calendar__month--selected {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
.usa-date-picker__calendar__month--selected:not([disabled]) {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
.usa-date-picker__calendar__month--selected:not([disabled]):hover {\r
    background-color: #0050d8;\r
    color: #e6e6e6\r
}\r
\r
.usa-date-picker__calendar__month--selected:not([disabled]):focus {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
.usa-date-picker__calendar__month--selected:not([disabled]):active {\r
    background-color: #1a4480\r
}\r
\r
.usa-date-picker__calendar__year-picker {\r
    padding: 20px 5px\r
}\r
\r
.usa-date-picker__calendar__next-year-chunk,\r
.usa-date-picker__calendar__previous-year-chunk {\r
    background-position: center;\r
    background-size: auto 2rem;\r
    margin: auto;\r
    padding: 40px 0\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-date-picker__calendar__next-year-chunk,\r
    .usa-date-picker__calendar__previous-year-chunk {\r
        -webkit-mask-size: 1.5rem !important;\r
        mask-size: 1.5rem !important\r
    }\r
}\r
\r
.usa-date-picker__calendar__previous-year-chunk:not([disabled]) {\r
    background-image: url(../img/usa-icons/navigate_before.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__previous-year-chunk:not([disabled]) {\r
        background-image: none\r
    }\r
\r
    .usa-date-picker__calendar__previous-year-chunk:not([disabled])::after {\r
        background-image: url(../img/usa-icons/navigate_before.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2.5rem 2.5rem;\r
        display: inline-block;\r
        height: 2.5rem;\r
        width: 3rem;\r
        content: "";\r
        vertical-align: middle;\r
        margin-left: auto\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-date-picker__calendar__previous-year-chunk:not([disabled])::after {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/navigate_before.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/navigate_before.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2.5rem 2.5rem;\r
            mask-size: 2.5rem 2.5rem\r
        }\r
    }\r
\r
    .usa-date-picker__calendar__previous-year-chunk:not([disabled]):hover {\r
        border: 2px solid transparent;\r
        background-color: transparent\r
    }\r
}\r
\r
.usa-date-picker__calendar__next-year-chunk:not([disabled]) {\r
    background-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-date-picker__calendar__next-year-chunk:not([disabled]) {\r
        background-image: none\r
    }\r
\r
    .usa-date-picker__calendar__next-year-chunk:not([disabled])::after {\r
        background-image: url(../img/usa-icons/navigate_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
        background-size: 2.5rem 2.5rem;\r
        display: inline-block;\r
        height: 2.5rem;\r
        width: 3rem;\r
        content: "";\r
        vertical-align: middle;\r
        margin-left: auto\r
    }\r
\r
    @supports ((-webkit-mask:url()) or (mask:url())) {\r
        .usa-date-picker__calendar__next-year-chunk:not([disabled])::after {\r
            background: 0 0;\r
            background-color: ButtonText;\r
            -webkit-mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
            mask-image: url(../img/usa-icons/navigate_next.svg), linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
            -webkit-mask-size: 2.5rem 2.5rem;\r
            mask-size: 2.5rem 2.5rem\r
        }\r
    }\r
\r
    .usa-date-picker__calendar__next-year-chunk:not([disabled]):hover {\r
        border: 2px solid transparent;\r
        background-color: transparent\r
    }\r
}\r
\r
.usa-date-picker__calendar__year {\r
    padding: 10px 0\r
}\r
\r
.usa-date-picker__calendar__year--focused {\r
    outline: 2px solid #162e51;\r
    outline-offset: -2px;\r
    position: relative;\r
    z-index: 100\r
}\r
\r
.usa-date-picker__calendar__year--selected {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
.usa-date-picker__calendar__year--selected:not([disabled]) {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
.usa-date-picker__calendar__year--selected:not([disabled]):hover {\r
    background-color: #0050d8;\r
    color: #e6e6e6\r
}\r
\r
.usa-date-picker__calendar__year--selected:not([disabled]):focus {\r
    background-color: #0050d8;\r
    color: #f9f9f9\r
}\r
\r
.usa-date-picker__calendar__year--selected:not([disabled]):active {\r
    background-color: #1a4480\r
}\r
\r
.usa-error-message {\r
    padding-bottom: .25rem;\r
    padding-top: .25rem;\r
    color: #b50909;\r
    display: block;\r
    font-weight: 700\r
}\r
\r
[type=file] {\r
    border: 0;\r
    margin-top: .5rem;\r
    padding-left: 0;\r
    padding-top: .2rem\r
}\r
\r
.usa-file-input {\r
    display: block;\r
    max-width: 30rem;\r
    width: 100%\r
}\r
\r
.usa-file-input__target {\r
    border: 1px dashed #a9aeb1;\r
    display: block;\r
    /* font-size: .93rem; */\r
    margin-top: .5rem;\r
    position: relative;\r
    text-align: center;\r
    width: 100%\r
}\r
\r
.usa-file-input__target:hover {\r
    border-color: #71767a\r
}\r
\r
.usa-file-input__target.has-invalid-file {\r
    border-color: #fa9441\r
}\r
\r
.usa-file-input__accepted-files-message {\r
    font-weight: 700;\r
    margin: -1.5rem 0 1.5rem;\r
    pointer-events: none;\r
    position: relative;\r
    z-index: 3\r
}\r
\r
.has-invalid-file .usa-file-input__accepted-files-message {\r
    color: #b50909\r
}\r
\r
.usa-file-input__choose {\r
    color: #005ea2;\r
    text-decoration: underline;\r
    font-weight: 400\r
}\r
\r
.usa-file-input__choose:visited {\r
    color: #54278f\r
}\r
\r
.usa-file-input__choose:hover {\r
    color: #1a4480\r
}\r
\r
.usa-file-input__choose:active {\r
    color: #162e51\r
}\r
\r
.usa-file-input__choose:focus {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: 0\r
}\r
\r
.usa-file-input__instructions {\r
    padding: 2rem 1rem;\r
    pointer-events: none;\r
    position: relative;\r
    z-index: 3\r
}\r
\r
.usa-file-input__box {\r
    background: #fff;\r
    height: 100%;\r
    left: 0;\r
    pointer-events: none;\r
    position: absolute;\r
    top: 0;\r
    width: 100%;\r
    z-index: 2\r
}\r
\r
.usa-file-input .usa-file-input__input[type] {\r
    cursor: pointer;\r
    height: 100%;\r
    left: 0;\r
    margin: 0;\r
    max-width: none;\r
    position: absolute;\r
    padding: .5rem;\r
    text-indent: -999em;\r
    top: 0;\r
    width: 100%;\r
    z-index: 1\r
}\r
\r
.usa-file-input .usa-file-input__input[type]::-webkit-file-upload-button {\r
    display: none\r
}\r
\r
.usa-file-input--drag .usa-file-input__target {\r
    border-color: #005ea2\r
}\r
\r
.usa-file-input--drag .usa-file-input__box {\r
    background-color: #d9e8f6\r
}\r
\r
.usa-file-input--drag .usa-file-input__preview {\r
    opacity: .1\r
}\r
\r
.usa-file-input__preview,\r
.usa-file-input__preview-heading {\r
    align-items: center;\r
    background: #d9e8f6;\r
    display: flex;\r
    pointer-events: none;\r
    position: relative;\r
    z-index: 3\r
}\r
\r
.usa-file-input__preview-heading {\r
    font-weight: 700;\r
    justify-content: space-between;\r
    padding: .5rem\r
}\r
\r
.usa-file-input__preview {\r
    word-wrap: anywhere;\r
    /* font-size: .87rem; */\r
    margin-top: 1px;\r
    padding: .25rem .5rem;\r
    text-align: left\r
}\r
\r
.usa-file-input__preview:last-child {\r
    margin-bottom: -1.5rem\r
}\r
\r
.usa-file-input__preview-image {\r
    border: 0;\r
    display: block;\r
    height: 2.5rem;\r
    margin-right: .5rem;\r
    -o-object-fit: contain;\r
    object-fit: contain;\r
    width: 2.5rem\r
}\r
\r
.usa-file-input__preview-image.is-loading {\r
    background-image: url(../img/loader.svg), linear-gradient(transparent, transparent);\r
    background-position: center center;\r
    background-repeat: no-repeat;\r
    background-size: 2rem\r
}\r
\r
.usa-file-input__preview-image--excel,\r
.usa-file-input__preview-image--generic,\r
.usa-file-input__preview-image--pdf,\r
.usa-file-input__preview-image--video,\r
.usa-file-input__preview-image--word {\r
    background-position: center center;\r
    background-size: 1.5rem\r
}\r
\r
.usa-file-input__preview-image--pdf {\r
    background-image: url(../img/file-pdf.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
.usa-file-input__preview-image--generic {\r
    background-image: url(../img/file.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
.usa-file-input__preview-image--word {\r
    background-image: url(../img/file-word.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
.usa-file-input__preview-image--excel {\r
    background-image: url(../img/file-excel.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
.usa-file-input__preview-image--video {\r
    background-image: url(../img/file-video.svg), linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat\r
}\r
\r
.usa-form-group--error .usa-file-input__target {\r
    border-color: #b50909;\r
    border-width: 2px\r
}\r
\r
.usa-file-input--disabled .usa-file-input__choose,\r
.usa-file-input--disabled .usa-file-input__instructions {\r
    color: #454545\r
}\r
\r
.usa-file-input--disabled .usa-file-input__box {\r
    background-color: #c9c9c9\r
}\r
\r
.usa-file-input--disabled .usa-file-input__input[type] {\r
    cursor: not-allowed\r
}\r
\r
.usa-file-input--disabled .usa-file-input__target:hover {\r
    border-color: #a9aeb1\r
}\r
\r
.usa-file-input--disabled .usa-file-input--drag .usa-file-input__box {\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-file-input--disabled .usa-file-input__choose,\r
    .usa-file-input--disabled .usa-file-input__instructions {\r
        color: GrayText\r
    }\r
\r
    .usa-file-input--disabled .usa-file-input__target,\r
    .usa-file-input--disabled .usa-file-input__target:hover {\r
        border-color: GrayText\r
    }\r
}\r
\r
.usa-form-group {\r
    margin-top: 1.5rem\r
}\r
\r
.usa-form-group .usa-label:first-child {\r
    margin-top: 0\r
}\r
\r
.usa-form-group--error {\r
    border-left-width: .25rem;\r
    border-left-color: #b50909;\r
    border-left-style: solid;\r
    padding-left: 1rem;\r
    position: relative\r
}\r
\r
@media all and (min-width:64em) {\r
    .usa-form-group--error {\r
        margin-left: -1.25rem\r
    }\r
}\r
\r
.usa-hint {\r
    color: #71767a\r
}\r
\r
.usa-hint--required {\r
    color: #b50909\r
}\r
\r
.usa-input-group {\r
    align-items: center;\r
    display: flex;\r
    padding: 0;\r
    position: relative\r
}\r
\r
.usa-input-group--error input:focus,\r
.usa-input-group--success input:focus {\r
    outline-offset: .25rem\r
}\r
\r
.usa-input-group--error,\r
.usa-input-group--success {\r
    border-width: .25rem;\r
    border-color: #b50909;\r
    border-style: solid\r
}\r
\r
.usa-input-group--success {\r
    border-color: #00a91c\r
}\r
\r
.usa-input-group input {\r
    padding-right: 2.5rem;\r
    border: 0;\r
    height: 100%;\r
    margin-top: 0;\r
    min-width: 0;\r
    width: 100%\r
}\r
\r
.usa-input-group input:disabled+.usa-input-suffix,\r
.usa-input-group input[aria-disabled=true]+.usa-input-suffix {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-input-group input:disabled+.usa-input-suffix,\r
    .usa-input-group input[aria-disabled=true]+.usa-input-suffix {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-input-group input:disabled+.usa-input-suffix.usa-focus,\r
    .usa-input-group input:disabled+.usa-input-suffix:active,\r
    .usa-input-group input:disabled+.usa-input-suffix:focus,\r
    .usa-input-group input:disabled+.usa-input-suffix:hover,\r
    .usa-input-group input[aria-disabled=true]+.usa-input-suffix.usa-focus,\r
    .usa-input-group input[aria-disabled=true]+.usa-input-suffix:active,\r
    .usa-input-group input[aria-disabled=true]+.usa-input-suffix:focus,\r
    .usa-input-group input[aria-disabled=true]+.usa-input-suffix:hover {\r
        color: GrayText\r
    }\r
\r
    .usa-input-group input:disabled,\r
    .usa-input-group input[aria-disabled=true] {\r
        border: 0\r
    }\r
\r
    .usa-input-group:has(input:disabled),\r
    .usa-input-group:has(input[aria-disabled=true]) {\r
        border: 2px solid GrayText\r
    }\r
}\r
\r
.usa-input-prefix:has(+input:disabled),\r
.usa-input-prefix:has(+input[aria-disabled=true]) {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-input-prefix:has(+input:disabled).usa-focus,\r
.usa-input-prefix:has(+input:disabled):active,\r
.usa-input-prefix:has(+input:disabled):focus,\r
.usa-input-prefix:has(+input:disabled):hover,\r
.usa-input-prefix:has(+input[aria-disabled=true]).usa-focus,\r
.usa-input-prefix:has(+input[aria-disabled=true]):active,\r
.usa-input-prefix:has(+input[aria-disabled=true]):focus,\r
.usa-input-prefix:has(+input[aria-disabled=true]):hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-input-prefix:has(+input:disabled),\r
    .usa-input-prefix:has(+input[aria-disabled=true]) {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-input-prefix:has(+input:disabled).usa-focus,\r
    .usa-input-prefix:has(+input:disabled):active,\r
    .usa-input-prefix:has(+input:disabled):focus,\r
    .usa-input-prefix:has(+input:disabled):hover,\r
    .usa-input-prefix:has(+input[aria-disabled=true]).usa-focus,\r
    .usa-input-prefix:has(+input[aria-disabled=true]):active,\r
    .usa-input-prefix:has(+input[aria-disabled=true]):focus,\r
    .usa-input-prefix:has(+input[aria-disabled=true]):hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-input-prefix,\r
.usa-input-suffix {\r
    position: absolute;\r
    color: #71767a;\r
    line-height: 0;\r
    padding: 0 .5rem;\r
    -webkit-user-select: none;\r
    -moz-user-select: none;\r
    user-select: none;\r
    white-space: nowrap\r
}\r
\r
.usa-input-prefix .usa-icon,\r
.usa-input-suffix .usa-icon {\r
    height: 1.5rem;\r
    width: 1.5rem\r
}\r
\r
.usa-input-prefix+input {\r
    padding-left: 2.5rem;\r
    padding-right: .5rem\r
}\r
\r
.usa-input-suffix {\r
    right: 0\r
}\r
\r
.usa-input-mask {\r
    display: block;\r
    position: relative\r
}\r
\r
.usa-input-mask--content {\r
    border: 1px solid transparent;\r
    color: #757575;\r
    display: block;\r
    left: 2px;\r
    pointer-events: none;\r
    position: absolute;\r
    top: 0\r
}\r
\r
.usa-input-mask--content i {\r
    visibility: hidden\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-input-mask--content i {\r
        color: ButtonText;\r
        font-style: normal;\r
        visibility: visible\r
    }\r
\r
    .usa-input-mask--content {\r
        border: 0\r
    }\r
}\r
\r
.usa-input-mask--content,\r
.usa-masked {\r
    background-color: transparent;\r
    padding: .5rem\r
}\r
\r
.usa-label {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;\r
    /* font-size: 1.06rem; */\r
    line-height: 1.3;\r
    display: block;\r
    font-weight: 400;\r
    margin-top: 1.5rem;\r
    max-width: 30rem\r
}\r
\r
.usa-label--error {\r
    font-weight: 700;\r
    margin-top: 0\r
}\r
\r
.usa-label--required {\r
    color: #b50909\r
}\r
\r
.usa-memorable-date {\r
    display: flex;\r
    flex-wrap: wrap\r
}\r
\r
.usa-memorable-date [type=number] {\r
    -moz-appearance: textfield\r
}\r
\r
.usa-memorable-date [type=number]::-webkit-inner-spin-button {\r
    -webkit-appearance: none;\r
    appearance: none\r
}\r
\r
.usa-memorable-date [type=number]::-webkit-contacts-auto-fill-button {\r
    visibility: hidden;\r
    display: none !important;\r
    pointer-events: none;\r
    height: 0;\r
    width: 0;\r
    margin: 0\r
}\r
\r
.usa-memorable-date .usa-form-group {\r
    margin-top: 1rem\r
}\r
\r
.usa-form-group--day,\r
.usa-form-group--month,\r
.usa-form-group--year {\r
    flex: 0 1 auto;\r
    margin-right: 1rem;\r
    width: -moz-fit-content;\r
    width: fit-content\r
}\r
\r
.usa-form-group--day input,\r
.usa-form-group--month input {\r
    width: 3rem\r
}\r
\r
.usa-form-group--month select {\r
    width: 15rem\r
}\r
\r
.usa-form-group--year input {\r
    width: 4.5rem\r
}\r
\r
.usa-radio {\r
    background: #fff\r
}\r
\r
.usa-radio__label {\r
    color: #1b1b1b\r
}\r
\r
.usa-radio__label::before {\r
    background: #fff;\r
    box-shadow: 0 0 0 2px #1b1b1b\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-radio__label::before {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px\r
    }\r
}\r
\r
.usa-radio__input:checked+[class*=__label]::before {\r
    background-color: #005ea2\r
}\r
\r
.usa-radio__input:disabled+[class*=__label],\r
.usa-radio__input[aria-disabled=true]+[class*=__label] {\r
    color: #757575;\r
    cursor: not-allowed\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-radio__input:disabled+[class*=__label],\r
    .usa-radio__input[aria-disabled=true]+[class*=__label] {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-radio__input:disabled+[class*=__label]::before,\r
.usa-radio__input[aria-disabled=true]+[class*=__label]::before {\r
    background-color: #fff;\r
    box-shadow: 0 0 0 2px #757575\r
}\r
\r
.usa-radio__input--tile+[class*=__label] {\r
    background-color: #fff;\r
    border: 2px solid #c9c9c9;\r
    color: #1b1b1b;\r
    border-radius: .25rem;\r
    margin-top: .5rem;\r
    padding: .75rem 1rem .75rem 2.5rem\r
}\r
\r
.usa-radio__input--tile:checked+[class*=__label] {\r
    background-color: rgba(0, 94, 162, .1);\r
    border-color: #005ea2\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-radio__input--tile:checked+[class*=__label] {\r
        border: ButtonText solid .25rem\r
    }\r
}\r
\r
.usa-radio__input--tile:disabled+[class*=__label],\r
.usa-radio__input--tile[aria-disabled=true]+[class*=__label] {\r
    border-color: #e6e6e6\r
}\r
\r
.usa-radio__input--tile:disabled:checked+[class*=__label],\r
.usa-radio__input--tile:disabled:indeterminate+[class*=__label],\r
.usa-radio__input--tile:disabled[data-indeterminate]+[class*=__label],\r
.usa-radio__input--tile[aria-disabled=true]:checked+[class*=__label],\r
.usa-radio__input--tile[aria-disabled=true]:indeterminate+[class*=__label],\r
.usa-radio__input--tile[aria-disabled=true][data-indeterminate]+[class*=__label] {\r
    background-color: #fff\r
}\r
\r
.usa-radio__input:checked+[class*=__label]::before {\r
    box-shadow: 0 0 0 2px #005ea2, inset 0 0 0 2px #fff\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-radio__input:checked+[class*=__label]::before {\r
        background-color: ButtonText\r
    }\r
}\r
\r
.usa-radio__input:checked:disabled+[class*=__label]::before,\r
.usa-radio__input:checked[aria-disabled=true]+[class*=__label]::before {\r
    background-color: #757575;\r
    box-shadow: 0 0 0 2px #757575, inset 0 0 0 2px #fff\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-radio__input:checked:disabled+[class*=__label]::before,\r
    .usa-radio__input:checked[aria-disabled=true]+[class*=__label]::before {\r
        background-color: GrayText\r
    }\r
}\r
\r
.usa-radio__input {\r
    position: absolute;\r
    left: -999em;\r
    right: auto\r
}\r
\r
.usa-radio__input:focus+[class*=__label]::before {\r
    outline: .25rem solid #2491ff;\r
    outline-offset: .25rem\r
}\r
\r
.usa-radio__input--tile+[class*=__label]::before {\r
    left: .5rem\r
}\r
\r
@media print {\r
    .usa-radio__input:checked+[class*=__label]::before {\r
        box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 1rem #005ea2, 0 0 0 2px #005ea2\r
    }\r
}\r
\r
.usa-radio__label {\r
    cursor: pointer;\r
    display: inherit;\r
    font-weight: 400;\r
    margin-top: .75rem;\r
    padding-left: 2rem;\r
    position: relative\r
}\r
\r
.usa-radio__label::before {\r
    content: " ";\r
    display: block;\r
    left: 0;\r
    margin-left: 2px;\r
    margin-top: .064rem;\r
    position: absolute;\r
    height: 1.25rem;\r
    border-radius: 99rem;\r
    width: 1.25rem\r
}\r
\r
.usa-radio__label-description {\r
    display: block;\r
    /* font-size: .93rem; */\r
    margin-top: .5rem\r
}\r
\r
.usa-range {\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
    border: 0;\r
    padding-left: 1px;\r
    width: 100%\r
}\r
\r
.usa-range:focus {\r
    outline: 0\r
}\r
\r
.usa-range:focus::-webkit-slider-thumb {\r
    background-color: #fff;\r
    box-shadow: 0 0 0 2px #2491ff\r
}\r
\r
.usa-range:focus::-moz-range-thumb {\r
    background-color: #fff;\r
    box-shadow: 0 0 0 2px #2491ff\r
}\r
\r
.usa-range:focus::-ms-thumb {\r
    background-color: #fff;\r
    box-shadow: 0 0 0 2px #2491ff\r
}\r
\r
.usa-range::-webkit-slider-runnable-track {\r
    background-color: #f0f0f0;\r
    border-radius: 99rem;\r
    border: 1px solid #71767a;\r
    cursor: pointer;\r
    height: 1rem;\r
    width: 100%\r
}\r
\r
.usa-range::-moz-range-track {\r
    background-color: #f0f0f0;\r
    border-radius: 99rem;\r
    border: 1px solid #71767a;\r
    cursor: pointer;\r
    height: 1rem;\r
    width: 100%\r
}\r
\r
.usa-range::-ms-track {\r
    background-color: #f0f0f0;\r
    border-radius: 99rem;\r
    border: 1px solid #71767a;\r
    cursor: pointer;\r
    height: 1rem;\r
    width: 100%\r
}\r
\r
.usa-range::-webkit-slider-thumb {\r
    height: 1.25rem;\r
    border-radius: 99rem;\r
    width: 1.25rem;\r
    background: #f0f0f0;\r
    border: 0;\r
    box-shadow: 0 0 0 2px #71767a;\r
    cursor: pointer;\r
    -webkit-appearance: none;\r
    appearance: none;\r
    margin-top: -.19rem\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-range::-webkit-slider-thumb {\r
        outline: 2px solid transparent\r
    }\r
}\r
\r
.usa-range::-moz-range-thumb {\r
    height: 1.25rem;\r
    border-radius: 99rem;\r
    width: 1.25rem;\r
    background: #f0f0f0;\r
    border: 0;\r
    box-shadow: 0 0 0 2px #71767a;\r
    cursor: pointer\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-range::-moz-range-thumb {\r
        outline: 2px solid transparent\r
    }\r
}\r
\r
.usa-range::-ms-thumb {\r
    height: 1.25rem;\r
    border-radius: 99rem;\r
    width: 1.25rem;\r
    background: #f0f0f0;\r
    border: 0;\r
    box-shadow: 0 0 0 2px #71767a;\r
    cursor: pointer\r
}\r
\r
@media (forced-colors:active) {\r
    .usa-range::-ms-thumb {\r
        outline: 2px solid transparent\r
    }\r
}\r
\r
.usa-range::-ms-fill-lower {\r
    background-color: #f0f0f0;\r
    border-radius: 99rem;\r
    border: 1px solid #71767a\r
}\r
\r
.usa-range::-ms-fill-upper {\r
    background-color: #f0f0f0;\r
    border-radius: 99rem;\r
    border: 1px solid #71767a\r
}\r
\r
.usa-range:disabled,\r
.usa-range[aria-disabled=true] {\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-webkit-slider-runnable-track,\r
.usa-range[aria-disabled=true]::-webkit-slider-runnable-track {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-webkit-slider-runnable-track.usa-focus,\r
.usa-range:disabled::-webkit-slider-runnable-track:active,\r
.usa-range:disabled::-webkit-slider-runnable-track:focus,\r
.usa-range:disabled::-webkit-slider-runnable-track:hover,\r
.usa-range[aria-disabled=true]::-webkit-slider-runnable-track.usa-focus,\r
.usa-range[aria-disabled=true]::-webkit-slider-runnable-track:active,\r
.usa-range[aria-disabled=true]::-webkit-slider-runnable-track:focus,\r
.usa-range[aria-disabled=true]::-webkit-slider-runnable-track:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-webkit-slider-runnable-track,\r
    .usa-range[aria-disabled=true]::-webkit-slider-runnable-track {\r
        color: GrayText;\r
        border: 2px solid GrayText\r
    }\r
\r
    .usa-range:disabled::-webkit-slider-runnable-track.usa-focus,\r
    .usa-range:disabled::-webkit-slider-runnable-track:active,\r
    .usa-range:disabled::-webkit-slider-runnable-track:focus,\r
    .usa-range:disabled::-webkit-slider-runnable-track:hover,\r
    .usa-range[aria-disabled=true]::-webkit-slider-runnable-track.usa-focus,\r
    .usa-range[aria-disabled=true]::-webkit-slider-runnable-track:active,\r
    .usa-range[aria-disabled=true]::-webkit-slider-runnable-track:focus,\r
    .usa-range[aria-disabled=true]::-webkit-slider-runnable-track:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-range:disabled::-moz-range-track,\r
.usa-range[aria-disabled=true]::-moz-range-track {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-moz-range-track.usa-focus,\r
.usa-range:disabled::-moz-range-track:active,\r
.usa-range:disabled::-moz-range-track:focus,\r
.usa-range:disabled::-moz-range-track:hover,\r
.usa-range[aria-disabled=true]::-moz-range-track.usa-focus,\r
.usa-range[aria-disabled=true]::-moz-range-track:active,\r
.usa-range[aria-disabled=true]::-moz-range-track:focus,\r
.usa-range[aria-disabled=true]::-moz-range-track:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-moz-range-track,\r
    .usa-range[aria-disabled=true]::-moz-range-track {\r
        color: GrayText;\r
        border: 2px solid GrayText\r
    }\r
\r
    .usa-range:disabled::-moz-range-track.usa-focus,\r
    .usa-range:disabled::-moz-range-track:active,\r
    .usa-range:disabled::-moz-range-track:focus,\r
    .usa-range:disabled::-moz-range-track:hover,\r
    .usa-range[aria-disabled=true]::-moz-range-track.usa-focus,\r
    .usa-range[aria-disabled=true]::-moz-range-track:active,\r
    .usa-range[aria-disabled=true]::-moz-range-track:focus,\r
    .usa-range[aria-disabled=true]::-moz-range-track:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-range:disabled::-ms-track,\r
.usa-range[aria-disabled=true]::-ms-track {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-ms-track.usa-focus,\r
.usa-range:disabled::-ms-track:active,\r
.usa-range:disabled::-ms-track:focus,\r
.usa-range:disabled::-ms-track:hover,\r
.usa-range[aria-disabled=true]::-ms-track.usa-focus,\r
.usa-range[aria-disabled=true]::-ms-track:active,\r
.usa-range[aria-disabled=true]::-ms-track:focus,\r
.usa-range[aria-disabled=true]::-ms-track:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-ms-track,\r
    .usa-range[aria-disabled=true]::-ms-track {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-range:disabled::-ms-track.usa-focus,\r
    .usa-range:disabled::-ms-track:active,\r
    .usa-range:disabled::-ms-track:focus,\r
    .usa-range:disabled::-ms-track:hover,\r
    .usa-range[aria-disabled=true]::-ms-track.usa-focus,\r
    .usa-range[aria-disabled=true]::-ms-track:active,\r
    .usa-range[aria-disabled=true]::-ms-track:focus,\r
    .usa-range[aria-disabled=true]::-ms-track:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-range:disabled::-webkit-slider-thumb,\r
.usa-range[aria-disabled=true]::-webkit-slider-thumb {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-webkit-slider-thumb.usa-focus,\r
.usa-range:disabled::-webkit-slider-thumb:active,\r
.usa-range:disabled::-webkit-slider-thumb:focus,\r
.usa-range:disabled::-webkit-slider-thumb:hover,\r
.usa-range[aria-disabled=true]::-webkit-slider-thumb.usa-focus,\r
.usa-range[aria-disabled=true]::-webkit-slider-thumb:active,\r
.usa-range[aria-disabled=true]::-webkit-slider-thumb:focus,\r
.usa-range[aria-disabled=true]::-webkit-slider-thumb:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-webkit-slider-thumb,\r
    .usa-range[aria-disabled=true]::-webkit-slider-thumb {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-range:disabled::-webkit-slider-thumb.usa-focus,\r
    .usa-range:disabled::-webkit-slider-thumb:active,\r
    .usa-range:disabled::-webkit-slider-thumb:focus,\r
    .usa-range:disabled::-webkit-slider-thumb:hover,\r
    .usa-range[aria-disabled=true]::-webkit-slider-thumb.usa-focus,\r
    .usa-range[aria-disabled=true]::-webkit-slider-thumb:active,\r
    .usa-range[aria-disabled=true]::-webkit-slider-thumb:focus,\r
    .usa-range[aria-disabled=true]::-webkit-slider-thumb:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-range:disabled::-moz-range-thumb,\r
.usa-range[aria-disabled=true]::-moz-range-thumb {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-moz-range-thumb.usa-focus,\r
.usa-range:disabled::-moz-range-thumb:active,\r
.usa-range:disabled::-moz-range-thumb:focus,\r
.usa-range:disabled::-moz-range-thumb:hover,\r
.usa-range[aria-disabled=true]::-moz-range-thumb.usa-focus,\r
.usa-range[aria-disabled=true]::-moz-range-thumb:active,\r
.usa-range[aria-disabled=true]::-moz-range-thumb:focus,\r
.usa-range[aria-disabled=true]::-moz-range-thumb:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-moz-range-thumb,\r
    .usa-range[aria-disabled=true]::-moz-range-thumb {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-range:disabled::-moz-range-thumb.usa-focus,\r
    .usa-range:disabled::-moz-range-thumb:active,\r
    .usa-range:disabled::-moz-range-thumb:focus,\r
    .usa-range:disabled::-moz-range-thumb:hover,\r
    .usa-range[aria-disabled=true]::-moz-range-thumb.usa-focus,\r
    .usa-range[aria-disabled=true]::-moz-range-thumb:active,\r
    .usa-range[aria-disabled=true]::-moz-range-thumb:focus,\r
    .usa-range[aria-disabled=true]::-moz-range-thumb:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-range:disabled::-ms-thumb,\r
.usa-range[aria-disabled=true]::-ms-thumb {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-ms-thumb.usa-focus,\r
.usa-range:disabled::-ms-thumb:active,\r
.usa-range:disabled::-ms-thumb:focus,\r
.usa-range:disabled::-ms-thumb:hover,\r
.usa-range[aria-disabled=true]::-ms-thumb.usa-focus,\r
.usa-range[aria-disabled=true]::-ms-thumb:active,\r
.usa-range[aria-disabled=true]::-ms-thumb:focus,\r
.usa-range[aria-disabled=true]::-ms-thumb:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-ms-thumb,\r
    .usa-range[aria-disabled=true]::-ms-thumb {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-range:disabled::-ms-thumb.usa-focus,\r
    .usa-range:disabled::-ms-thumb:active,\r
    .usa-range:disabled::-ms-thumb:focus,\r
    .usa-range:disabled::-ms-thumb:hover,\r
    .usa-range[aria-disabled=true]::-ms-thumb.usa-focus,\r
    .usa-range[aria-disabled=true]::-ms-thumb:active,\r
    .usa-range[aria-disabled=true]::-ms-thumb:focus,\r
    .usa-range[aria-disabled=true]::-ms-thumb:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-range:disabled::-ms-fill-lower,\r
.usa-range[aria-disabled=true]::-ms-fill-lower {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-ms-fill-lower.usa-focus,\r
.usa-range:disabled::-ms-fill-lower:active,\r
.usa-range:disabled::-ms-fill-lower:focus,\r
.usa-range:disabled::-ms-fill-lower:hover,\r
.usa-range[aria-disabled=true]::-ms-fill-lower.usa-focus,\r
.usa-range[aria-disabled=true]::-ms-fill-lower:active,\r
.usa-range[aria-disabled=true]::-ms-fill-lower:focus,\r
.usa-range[aria-disabled=true]::-ms-fill-lower:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-ms-fill-lower,\r
    .usa-range[aria-disabled=true]::-ms-fill-lower {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-range:disabled::-ms-fill-lower.usa-focus,\r
    .usa-range:disabled::-ms-fill-lower:active,\r
    .usa-range:disabled::-ms-fill-lower:focus,\r
    .usa-range:disabled::-ms-fill-lower:hover,\r
    .usa-range[aria-disabled=true]::-ms-fill-lower.usa-focus,\r
    .usa-range[aria-disabled=true]::-ms-fill-lower:active,\r
    .usa-range[aria-disabled=true]::-ms-fill-lower:focus,\r
    .usa-range[aria-disabled=true]::-ms-fill-lower:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-range:disabled::-ms-fill-upper,\r
.usa-range[aria-disabled=true]::-ms-fill-upper {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-range:disabled::-ms-fill-upper.usa-focus,\r
.usa-range:disabled::-ms-fill-upper:active,\r
.usa-range:disabled::-ms-fill-upper:focus,\r
.usa-range:disabled::-ms-fill-upper:hover,\r
.usa-range[aria-disabled=true]::-ms-fill-upper.usa-focus,\r
.usa-range[aria-disabled=true]::-ms-fill-upper:active,\r
.usa-range[aria-disabled=true]::-ms-fill-upper:focus,\r
.usa-range[aria-disabled=true]::-ms-fill-upper:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-range:disabled::-ms-fill-upper,\r
    .usa-range[aria-disabled=true]::-ms-fill-upper {\r
        border: 0;\r
        color: GrayText\r
    }\r
\r
    .usa-range:disabled::-ms-fill-upper.usa-focus,\r
    .usa-range:disabled::-ms-fill-upper:active,\r
    .usa-range:disabled::-ms-fill-upper:focus,\r
    .usa-range:disabled::-ms-fill-upper:hover,\r
    .usa-range[aria-disabled=true]::-ms-fill-upper.usa-focus,\r
    .usa-range[aria-disabled=true]::-ms-fill-upper:active,\r
    .usa-range[aria-disabled=true]::-ms-fill-upper:focus,\r
    .usa-range[aria-disabled=true]::-ms-fill-upper:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-textarea:disabled,\r
.usa-textarea[aria-disabled=true] {\r
    color: #454545;\r
    background-color: #c9c9c9;\r
    cursor: not-allowed;\r
    opacity: 1\r
}\r
\r
.usa-textarea:disabled.usa-focus,\r
.usa-textarea:disabled:active,\r
.usa-textarea:disabled:focus,\r
.usa-textarea:disabled:hover,\r
.usa-textarea[aria-disabled=true].usa-focus,\r
.usa-textarea[aria-disabled=true]:active,\r
.usa-textarea[aria-disabled=true]:focus,\r
.usa-textarea[aria-disabled=true]:hover {\r
    color: #454545;\r
    background-color: #c9c9c9\r
}\r
\r
@media (forced-colors:active) {\r
\r
    .usa-textarea:disabled,\r
    .usa-textarea[aria-disabled=true] {\r
        color: GrayText;\r
        border: 2px solid GrayText\r
    }\r
\r
    .usa-textarea:disabled.usa-focus,\r
    .usa-textarea:disabled:active,\r
    .usa-textarea:disabled:focus,\r
    .usa-textarea:disabled:hover,\r
    .usa-textarea[aria-disabled=true].usa-focus,\r
    .usa-textarea[aria-disabled=true]:active,\r
    .usa-textarea[aria-disabled=true]:focus,\r
    .usa-textarea[aria-disabled=true]:hover {\r
        color: GrayText\r
    }\r
}\r
\r
.usa-textarea {\r
    height: 10rem\r
}\r
\r
.usa-time-picker {\r
    width: 10em\r
}\r
\r
[class*=font-mono-] {\r
    font-family: Roboto Mono Web, Bitstream Vera Sans Mono, Consolas, Courier, monospace\r
}\r
\r
[class*=font-sans-] {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
[class*=font-serif-] {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif\r
}\r
\r
[class*=font-ui-] {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
[class*=font-heading-] {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif\r
}\r
\r
[class*=font-body-] {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
[class*=font-code-] {\r
    font-family: Roboto Mono Web, Bitstream Vera Sans Mono, Consolas, Courier, monospace\r
}\r
\r
[class*=font-alt-] {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif\r
}\r
\r
.add-aspect-9x16 {\r
    box-sizing: border-box;\r
    height: 0;\r
    overflow: hidden;\r
    padding-bottom: 177.77778%;\r
    position: relative\r
}\r
\r
@supports (aspect-ratio:1) {\r
    .add-aspect-9x16 {\r
        height: inherit;\r
        padding: inherit;\r
        aspect-ratio: .5625;\r
        max-width: 100%\r
    }\r
\r
    .add-aspect-9x16>* {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%\r
    }\r
\r
    .add-aspect-9x16>img,\r
    img.add-aspect-9x16 {\r
        -o-object-fit: cover;\r
        object-fit: cover\r
    }\r
}\r
\r
.add-aspect-16x9 {\r
    box-sizing: border-box;\r
    height: 0;\r
    overflow: hidden;\r
    padding-bottom: 56.25%;\r
    position: relative\r
}\r
\r
@supports (aspect-ratio:1) {\r
    .add-aspect-16x9 {\r
        height: inherit;\r
        padding: inherit;\r
        aspect-ratio: 1.7777777778;\r
        max-width: 100%\r
    }\r
\r
    .add-aspect-16x9>* {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%\r
    }\r
\r
    .add-aspect-16x9>img,\r
    img.add-aspect-16x9 {\r
        -o-object-fit: cover;\r
        object-fit: cover\r
    }\r
}\r
\r
.add-aspect-1x1 {\r
    box-sizing: border-box;\r
    height: 0;\r
    overflow: hidden;\r
    padding-bottom: 100%;\r
    position: relative\r
}\r
\r
@supports (aspect-ratio:1) {\r
    .add-aspect-1x1 {\r
        height: inherit;\r
        padding: inherit;\r
        aspect-ratio: 1;\r
        max-width: 100%\r
    }\r
\r
    .add-aspect-1x1>* {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%\r
    }\r
\r
    .add-aspect-1x1>img,\r
    img.add-aspect-1x1 {\r
        -o-object-fit: cover;\r
        object-fit: cover\r
    }\r
}\r
\r
.add-aspect-4x3 {\r
    box-sizing: border-box;\r
    height: 0;\r
    overflow: hidden;\r
    padding-bottom: 75%;\r
    position: relative\r
}\r
\r
@supports (aspect-ratio:1) {\r
    .add-aspect-4x3 {\r
        height: inherit;\r
        padding: inherit;\r
        aspect-ratio: 1.3333333333;\r
        max-width: 100%\r
    }\r
\r
    .add-aspect-4x3>* {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%\r
    }\r
\r
    .add-aspect-4x3>img,\r
    img.add-aspect-4x3 {\r
        -o-object-fit: cover;\r
        object-fit: cover\r
    }\r
}\r
\r
.add-aspect-2x1 {\r
    box-sizing: border-box;\r
    height: 0;\r
    overflow: hidden;\r
    padding-bottom: 50%;\r
    position: relative\r
}\r
\r
@supports (aspect-ratio:1) {\r
    .add-aspect-2x1 {\r
        height: inherit;\r
        padding: inherit;\r
        aspect-ratio: 2;\r
        max-width: 100%\r
    }\r
\r
    .add-aspect-2x1>* {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%\r
    }\r
\r
    .add-aspect-2x1>img,\r
    img.add-aspect-2x1 {\r
        -o-object-fit: cover;\r
        object-fit: cover\r
    }\r
}\r
\r
@supports (aspect-ratio:1) {\r
    :where(img[class*=add-aspect-]) {\r
        width: -moz-min-content;\r
        width: min-content\r
    }\r
}\r
\r
.add-list-reset {\r
    margin-bottom: 0;\r
    margin-top: 0;\r
    padding-left: 0;\r
    list-style: none\r
}\r
\r
.flex-align-start {\r
    align-items: flex-start\r
}\r
\r
.flex-align-end {\r
    align-items: flex-end\r
}\r
\r
.flex-align-center {\r
    align-items: center\r
}\r
\r
.flex-align-stretch {\r
    align-items: stretch\r
}\r
\r
.flex-align-baseline {\r
    align-items: baseline\r
}\r
\r
.flex-align-self-start {\r
    align-self: flex-start\r
}\r
\r
.flex-align-self-end {\r
    align-self: flex-end\r
}\r
\r
.flex-align-self-center {\r
    align-self: center\r
}\r
\r
.flex-align-self-stretch {\r
    align-self: stretch\r
}\r
\r
.flex-align-self-baseline {\r
    align-self: baseline\r
}\r
\r
.justify-between { \r
    justify-content: space-between; \r
}\r
\r
.bg-transparent,\r
.hover\\:bg-transparent:hover {\r
    background-color: transparent\r
}\r
\r
.bg-black,\r
.hover\\:bg-black:hover {\r
    background-color: #000\r
}\r
\r
.bg-white,\r
.hover\\:bg-white:hover {\r
    background-color: #fff\r
}\r
\r
.bg-red,\r
.hover\\:bg-red:hover {\r
    background-color: #e52207\r
}\r
\r
.bg-orange,\r
.hover\\:bg-orange:hover {\r
    background-color: #e66f0e\r
}\r
\r
.bg-gold,\r
.hover\\:bg-gold:hover {\r
    background-color: #ffbe2e\r
}\r
\r
.bg-yellow,\r
.hover\\:bg-yellow:hover {\r
    background-color: #fee685\r
}\r
\r
.bg-green,\r
.hover\\:bg-green:hover {\r
    background-color: #538200\r
}\r
\r
.bg-mint,\r
.hover\\:bg-mint:hover {\r
    background-color: #04c585\r
}\r
\r
.bg-cyan,\r
.hover\\:bg-cyan:hover {\r
    background-color: #009ec1\r
}\r
\r
.bg-blue,\r
.hover\\:bg-blue:hover {\r
    background-color: #0076d6\r
}\r
\r
.bg-indigo,\r
.hover\\:bg-indigo:hover {\r
    background-color: #676cc8\r
}\r
\r
.bg-violet,\r
.hover\\:bg-violet:hover {\r
    background-color: #8168b3\r
}\r
\r
.bg-magenta,\r
.hover\\:bg-magenta:hover {\r
    background-color: #d72d79\r
}\r
\r
.bg-gray-5,\r
.hover\\:bg-gray-5:hover {\r
    background-color: #f0f0f0\r
}\r
\r
.bg-gray-10,\r
.hover\\:bg-gray-10:hover {\r
    background-color: #e6e6e6\r
}\r
\r
.bg-gray-30,\r
.hover\\:bg-gray-30:hover {\r
    background-color: #adadad\r
}\r
\r
.bg-gray-50,\r
.hover\\:bg-gray-50:hover {\r
    background-color: #757575\r
}\r
\r
.bg-gray-70,\r
.hover\\:bg-gray-70:hover {\r
    background-color: #454545\r
}\r
\r
.bg-gray-90,\r
.hover\\:bg-gray-90:hover {\r
    background-color: #1b1b1b\r
}\r
\r
.bg-base-lightest,\r
.hover\\:bg-base-lightest:hover {\r
    background-color: #f0f0f0\r
}\r
\r
.bg-base-lighter,\r
.hover\\:bg-base-lighter:hover {\r
    background-color: #dfe1e2\r
}\r
\r
.bg-base-light,\r
.hover\\:bg-base-light:hover {\r
    background-color: #a9aeb1\r
}\r
\r
.bg-base,\r
.hover\\:bg-base:hover {\r
    background-color: #71767a\r
}\r
\r
.bg-base-dark,\r
.hover\\:bg-base-dark:hover {\r
    background-color: #565c65\r
}\r
\r
.bg-base-darker,\r
.hover\\:bg-base-darker:hover {\r
    background-color: #3d4551\r
}\r
\r
.bg-base-darkest,\r
.bg-ink,\r
.hover\\:bg-base-darkest:hover,\r
.hover\\:bg-ink:hover {\r
    background-color: #1b1b1b\r
}\r
\r
.bg-primary-lighter,\r
.hover\\:bg-primary-lighter:hover {\r
    background-color: #d9e8f6\r
}\r
\r
.bg-primary-light,\r
.hover\\:bg-primary-light:hover {\r
    background-color: #73b3e7\r
}\r
\r
.bg-primary,\r
.hover\\:bg-primary:hover {\r
    background-color: #005ea2\r
}\r
\r
.bg-primary-vivid,\r
.hover\\:bg-primary-vivid:hover {\r
    background-color: #0050d8\r
}\r
\r
.bg-primary-dark,\r
.hover\\:bg-primary-dark:hover {\r
    background-color: #1a4480\r
}\r
\r
.bg-primary-darker,\r
.hover\\:bg-primary-darker:hover {\r
    background-color: #162e51\r
}\r
\r
.bg-secondary-lighter,\r
.hover\\:bg-secondary-lighter:hover {\r
    background-color: #f3e1e4\r
}\r
\r
.bg-secondary-light,\r
.hover\\:bg-secondary-light:hover {\r
    background-color: #f2938c\r
}\r
\r
.bg-secondary,\r
.hover\\:bg-secondary:hover {\r
    background-color: #d83933\r
}\r
\r
.bg-secondary-vivid,\r
.hover\\:bg-secondary-vivid:hover {\r
    background-color: #e41d3d\r
}\r
\r
.bg-secondary-dark,\r
.hover\\:bg-secondary-dark:hover {\r
    background-color: #b50909\r
}\r
\r
.bg-secondary-darker,\r
.hover\\:bg-secondary-darker:hover {\r
    background-color: #8b0a03\r
}\r
\r
.bg-accent-warm-darker,\r
.hover\\:bg-accent-warm-darker:hover {\r
    background-color: #775540\r
}\r
\r
.bg-accent-warm-dark,\r
.hover\\:bg-accent-warm-dark:hover {\r
    background-color: #c05600\r
}\r
\r
.bg-accent-warm,\r
.hover\\:bg-accent-warm:hover {\r
    background-color: #fa9441\r
}\r
\r
.bg-accent-warm-light,\r
.hover\\:bg-accent-warm-light:hover {\r
    background-color: #ffbc78\r
}\r
\r
.bg-accent-warm-lighter,\r
.hover\\:bg-accent-warm-lighter:hover {\r
    background-color: #f2e4d4\r
}\r
\r
.bg-accent-cool-darker,\r
.hover\\:bg-accent-cool-darker:hover {\r
    background-color: #07648d\r
}\r
\r
.bg-accent-cool-dark,\r
.hover\\:bg-accent-cool-dark:hover {\r
    background-color: #28a0cb\r
}\r
\r
.bg-accent-cool,\r
.hover\\:bg-accent-cool:hover {\r
    background-color: #00bde3\r
}\r
\r
.bg-accent-cool-light,\r
.hover\\:bg-accent-cool-light:hover {\r
    background-color: #97d4ea\r
}\r
\r
.bg-accent-cool-lighter,\r
.hover\\:bg-accent-cool-lighter:hover {\r
    background-color: #e1f3f8\r
}\r
\r
.bg-error-lighter,\r
.hover\\:bg-error-lighter:hover {\r
    background-color: #f4e3db\r
}\r
\r
.bg-error-light,\r
.hover\\:bg-error-light:hover {\r
    background-color: #f39268\r
}\r
\r
.bg-error,\r
.hover\\:bg-error:hover {\r
    background-color: #d54309\r
}\r
\r
.bg-error-dark,\r
.hover\\:bg-error-dark:hover {\r
    background-color: #b50909\r
}\r
\r
.bg-error-darker,\r
.hover\\:bg-error-darker:hover {\r
    background-color: #6f3331\r
}\r
\r
.bg-warning-lighter,\r
.hover\\:bg-warning-lighter:hover {\r
    background-color: #faf3d1\r
}\r
\r
.bg-warning-light,\r
.hover\\:bg-warning-light:hover {\r
    background-color: #fee685\r
}\r
\r
.bg-warning,\r
.hover\\:bg-warning:hover {\r
    background-color: #ffbe2e\r
}\r
\r
.bg-warning-dark,\r
.hover\\:bg-warning-dark:hover {\r
    background-color: #e5a000\r
}\r
\r
.bg-warning-darker,\r
.hover\\:bg-warning-darker:hover {\r
    background-color: #936f38\r
}\r
\r
.bg-success-lighter,\r
.hover\\:bg-success-lighter:hover {\r
    background-color: #ecf3ec\r
}\r
\r
.bg-success-light,\r
.hover\\:bg-success-light:hover {\r
    background-color: #70e17b\r
}\r
\r
.bg-success,\r
.hover\\:bg-success:hover {\r
    background-color: #00a91c\r
}\r
\r
.bg-success-dark,\r
.hover\\:bg-success-dark:hover {\r
    background-color: #008817\r
}\r
\r
.bg-success-darker,\r
.hover\\:bg-success-darker:hover {\r
    background-color: #216e1f\r
}\r
\r
.bg-info-lighter,\r
.hover\\:bg-info-lighter:hover {\r
    background-color: #e7f6f8\r
}\r
\r
.bg-info-light,\r
.hover\\:bg-info-light:hover {\r
    background-color: #99deea\r
}\r
\r
.bg-info,\r
.hover\\:bg-info:hover {\r
    background-color: #00bde3\r
}\r
\r
.bg-info-dark,\r
.hover\\:bg-info-dark:hover {\r
    background-color: #009ec1\r
}\r
\r
.bg-info-darker,\r
.hover\\:bg-info-darker:hover {\r
    background-color: #2e6276\r
}\r
\r
.bg-disabled-lighter,\r
.hover\\:bg-disabled-lighter:hover {\r
    background-color: #c9c9c9\r
}\r
\r
.bg-disabled-light,\r
.hover\\:bg-disabled-light:hover {\r
    background-color: #919191\r
}\r
\r
.bg-disabled,\r
.hover\\:bg-disabled:hover {\r
    background-color: #757575\r
}\r
\r
.bg-disabled-dark,\r
.hover\\:bg-disabled-dark:hover {\r
    background-color: #454545\r
}\r
\r
.bg-disabled-darker,\r
.hover\\:bg-disabled-darker:hover {\r
    background-color: #1b1b1b\r
}\r
\r
.bg-emergency,\r
.hover\\:bg-emergency:hover {\r
    background-color: #9c3d10\r
}\r
\r
.bg-emergency-dark,\r
.hover\\:bg-emergency-dark:hover {\r
    background-color: #332d29\r
}\r
\r
.border-1px,\r
.hover\\:border-1px:hover {\r
    border: 1px solid\r
}\r
\r
.border-y-1px,\r
.hover\\:border-y-1px:hover {\r
    border-top: 1px solid;\r
    border-bottom: 1px solid\r
}\r
\r
.border-x-1px,\r
.hover\\:border-x-1px:hover {\r
    border-left: 1px solid;\r
    border-right: 1px solid\r
}\r
\r
.border-top-1px,\r
.hover\\:border-top-1px:hover {\r
    border-top: 1px solid\r
}\r
\r
.border-right-1px,\r
.hover\\:border-right-1px:hover {\r
    border-right: 1px solid\r
}\r
\r
.border-bottom-1px,\r
.hover\\:border-bottom-1px:hover {\r
    border-bottom: 1px solid\r
}\r
\r
.border-left-1px,\r
.hover\\:border-left-1px:hover {\r
    border-left: 1px solid\r
}\r
\r
.border-2px,\r
.hover\\:border-2px:hover {\r
    border: 2px solid\r
}\r
\r
.border-y-2px,\r
.hover\\:border-y-2px:hover {\r
    border-top: 2px solid;\r
    border-bottom: 2px solid\r
}\r
\r
.border-x-2px,\r
.hover\\:border-x-2px:hover {\r
    border-left: 2px solid;\r
    border-right: 2px solid\r
}\r
\r
.border-top-2px,\r
.hover\\:border-top-2px:hover {\r
    border-top: 2px solid\r
}\r
\r
.border-right-2px,\r
.hover\\:border-right-2px:hover {\r
    border-right: 2px solid\r
}\r
\r
.border-bottom-2px,\r
.hover\\:border-bottom-2px:hover {\r
    border-bottom: 2px solid\r
}\r
\r
.border-left-2px,\r
.hover\\:border-left-2px:hover {\r
    border-left: 2px solid\r
}\r
\r
.border-05,\r
.hover\\:border-05:hover {\r
    border: .25rem solid\r
}\r
\r
.border-y-05,\r
.hover\\:border-y-05:hover {\r
    border-top: .25rem solid;\r
    border-bottom: .25rem solid\r
}\r
\r
.border-x-05,\r
.hover\\:border-x-05:hover {\r
    border-left: .25rem solid;\r
    border-right: .25rem solid\r
}\r
\r
.border-top-05,\r
.hover\\:border-top-05:hover {\r
    border-top: .25rem solid\r
}\r
\r
.border-right-05,\r
.hover\\:border-right-05:hover {\r
    border-right: .25rem solid\r
}\r
\r
.border-bottom-05,\r
.hover\\:border-bottom-05:hover {\r
    border-bottom: .25rem solid\r
}\r
\r
.border-left-05,\r
.hover\\:border-left-05:hover {\r
    border-left: .25rem solid\r
}\r
\r
.border-1,\r
.hover\\:border-1:hover {\r
    border: .5rem solid\r
}\r
\r
.border-y-1,\r
.hover\\:border-y-1:hover {\r
    border-top: .5rem solid;\r
    border-bottom: .5rem solid\r
}\r
\r
.border-x-1,\r
.hover\\:border-x-1:hover {\r
    border-left: .5rem solid;\r
    border-right: .5rem solid\r
}\r
\r
.border-top-1,\r
.hover\\:border-top-1:hover {\r
    border-top: .5rem solid\r
}\r
\r
.border-right-1,\r
.hover\\:border-right-1:hover {\r
    border-right: .5rem solid\r
}\r
\r
.border-bottom-1,\r
.hover\\:border-bottom-1:hover {\r
    border-bottom: .5rem solid\r
}\r
\r
.border-left-1,\r
.hover\\:border-left-1:hover {\r
    border-left: .5rem solid\r
}\r
\r
.border-105,\r
.hover\\:border-105:hover {\r
    border: .75rem solid\r
}\r
\r
.border-y-105,\r
.hover\\:border-y-105:hover {\r
    border-top: .75rem solid;\r
    border-bottom: .75rem solid\r
}\r
\r
.border-x-105,\r
.hover\\:border-x-105:hover {\r
    border-left: .75rem solid;\r
    border-right: .75rem solid\r
}\r
\r
.border-top-105,\r
.hover\\:border-top-105:hover {\r
    border-top: .75rem solid\r
}\r
\r
.border-right-105,\r
.hover\\:border-right-105:hover {\r
    border-right: .75rem solid\r
}\r
\r
.border-bottom-105,\r
.hover\\:border-bottom-105:hover {\r
    border-bottom: .75rem solid\r
}\r
\r
.border-left-105,\r
.hover\\:border-left-105:hover {\r
    border-left: .75rem solid\r
}\r
\r
.border-2,\r
.hover\\:border-2:hover {\r
    border: 1rem solid\r
}\r
\r
.border-y-2,\r
.hover\\:border-y-2:hover {\r
    border-top: 1rem solid;\r
    border-bottom: 1rem solid\r
}\r
\r
.border-x-2,\r
.hover\\:border-x-2:hover {\r
    border-left: 1rem solid;\r
    border-right: 1rem solid\r
}\r
\r
.border-top-2,\r
.hover\\:border-top-2:hover {\r
    border-top: 1rem solid\r
}\r
\r
.border-right-2,\r
.hover\\:border-right-2:hover {\r
    border-right: 1rem solid\r
}\r
\r
.border-bottom-2,\r
.hover\\:border-bottom-2:hover {\r
    border-bottom: 1rem solid\r
}\r
\r
.border-left-2,\r
.hover\\:border-left-2:hover {\r
    border-left: 1rem solid\r
}\r
\r
.border-205,\r
.hover\\:border-205:hover {\r
    border: 1.25rem solid\r
}\r
\r
.border-y-205,\r
.hover\\:border-y-205:hover {\r
    border-top: 1.25rem solid;\r
    border-bottom: 1.25rem solid\r
}\r
\r
.border-x-205,\r
.hover\\:border-x-205:hover {\r
    border-left: 1.25rem solid;\r
    border-right: 1.25rem solid\r
}\r
\r
.border-top-205,\r
.hover\\:border-top-205:hover {\r
    border-top: 1.25rem solid\r
}\r
\r
.border-right-205,\r
.hover\\:border-right-205:hover {\r
    border-right: 1.25rem solid\r
}\r
\r
.border-bottom-205,\r
.hover\\:border-bottom-205:hover {\r
    border-bottom: 1.25rem solid\r
}\r
\r
.border-left-205,\r
.hover\\:border-left-205:hover {\r
    border-left: 1.25rem solid\r
}\r
\r
.border-3,\r
.hover\\:border-3:hover {\r
    border: 1.5rem solid\r
}\r
\r
.border-y-3,\r
.hover\\:border-y-3:hover {\r
    border-top: 1.5rem solid;\r
    border-bottom: 1.5rem solid\r
}\r
\r
.border-x-3,\r
.hover\\:border-x-3:hover {\r
    border-left: 1.5rem solid;\r
    border-right: 1.5rem solid\r
}\r
\r
.border-top-3,\r
.hover\\:border-top-3:hover {\r
    border-top: 1.5rem solid\r
}\r
\r
.border-right-3,\r
.hover\\:border-right-3:hover {\r
    border-right: 1.5rem solid\r
}\r
\r
.border-bottom-3,\r
.hover\\:border-bottom-3:hover {\r
    border-bottom: 1.5rem solid\r
}\r
\r
.border-left-3,\r
.hover\\:border-left-3:hover {\r
    border-left: 1.5rem solid\r
}\r
\r
.border-0,\r
.hover\\:border-0:hover {\r
    border: 0 solid\r
}\r
\r
.border-y-0,\r
.hover\\:border-y-0:hover {\r
    border-top: 0 solid;\r
    border-bottom: 0 solid\r
}\r
\r
.border-x-0,\r
.hover\\:border-x-0:hover {\r
    border-left: 0 solid;\r
    border-right: 0 solid\r
}\r
\r
.border-top-0,\r
.hover\\:border-top-0:hover {\r
    border-top: 0 solid\r
}\r
\r
.border-right-0,\r
.hover\\:border-right-0:hover {\r
    border-right: 0 solid\r
}\r
\r
.border-bottom-0,\r
.hover\\:border-bottom-0:hover {\r
    border-bottom: 0 solid\r
}\r
\r
.border-left-0,\r
.hover\\:border-left-0:hover {\r
    border-left: 0 solid\r
}\r
\r
.border,\r
.hover\\:border:hover {\r
    border: 1px solid\r
}\r
\r
.border-y,\r
.hover\\:border-y:hover {\r
    border-top: 1px solid;\r
    border-bottom: 1px solid\r
}\r
\r
.border-x,\r
.hover\\:border-x:hover {\r
    border-left: 1px solid;\r
    border-right: 1px solid\r
}\r
\r
.border-top,\r
.hover\\:border-top:hover {\r
    border-top: 1px solid\r
}\r
\r
.border-right,\r
.hover\\:border-right:hover {\r
    border-right: 1px solid\r
}\r
\r
.border-bottom,\r
.hover\\:border-bottom:hover {\r
    border-bottom: 1px solid\r
}\r
\r
.border-left,\r
.hover\\:border-left:hover {\r
    border-left: 1px solid\r
}\r
\r
.border-transparent,\r
.hover\\:border-transparent:hover {\r
    border-color: transparent\r
}\r
\r
.border-black,\r
.hover\\:border-black:hover {\r
    border-color: #000\r
}\r
\r
.border-white,\r
.hover\\:border-white:hover {\r
    border-color: #fff\r
}\r
\r
.border-red,\r
.hover\\:border-red:hover {\r
    border-color: #e52207\r
}\r
\r
.border-orange,\r
.hover\\:border-orange:hover {\r
    border-color: #e66f0e\r
}\r
\r
.border-gold,\r
.hover\\:border-gold:hover {\r
    border-color: #ffbe2e\r
}\r
\r
.border-yellow,\r
.hover\\:border-yellow:hover {\r
    border-color: #fee685\r
}\r
\r
.border-green,\r
.hover\\:border-green:hover {\r
    border-color: #538200\r
}\r
\r
.border-mint,\r
.hover\\:border-mint:hover {\r
    border-color: #04c585\r
}\r
\r
.border-cyan,\r
.hover\\:border-cyan:hover {\r
    border-color: #009ec1\r
}\r
\r
.border-blue,\r
.hover\\:border-blue:hover {\r
    border-color: #0076d6\r
}\r
\r
.border-indigo,\r
.hover\\:border-indigo:hover {\r
    border-color: #676cc8\r
}\r
\r
.border-violet,\r
.hover\\:border-violet:hover {\r
    border-color: #8168b3\r
}\r
\r
.border-magenta,\r
.hover\\:border-magenta:hover {\r
    border-color: #d72d79\r
}\r
\r
.border-gray-5,\r
.hover\\:border-gray-5:hover {\r
    border-color: #f0f0f0\r
}\r
\r
.border-gray-10,\r
.hover\\:border-gray-10:hover {\r
    border-color: #e6e6e6\r
}\r
\r
.border-gray-30,\r
.hover\\:border-gray-30:hover {\r
    border-color: #adadad\r
}\r
\r
.border-gray-50,\r
.hover\\:border-gray-50:hover {\r
    border-color: #757575\r
}\r
\r
.border-gray-70,\r
.hover\\:border-gray-70:hover {\r
    border-color: #454545\r
}\r
\r
.border-gray-90,\r
.hover\\:border-gray-90:hover {\r
    border-color: #1b1b1b\r
}\r
\r
.border-base-lightest,\r
.hover\\:border-base-lightest:hover {\r
    border-color: #f0f0f0\r
}\r
\r
.border-base-lighter,\r
.hover\\:border-base-lighter:hover {\r
    border-color: #dfe1e2\r
}\r
\r
.border-base-light,\r
.hover\\:border-base-light:hover {\r
    border-color: #a9aeb1\r
}\r
\r
.border-base,\r
.hover\\:border-base:hover {\r
    border-color: #71767a\r
}\r
\r
.border-base-dark,\r
.hover\\:border-base-dark:hover {\r
    border-color: #565c65\r
}\r
\r
.border-base-darker,\r
.hover\\:border-base-darker:hover {\r
    border-color: #3d4551\r
}\r
\r
.border-base-darkest,\r
.border-ink,\r
.hover\\:border-base-darkest:hover,\r
.hover\\:border-ink:hover {\r
    border-color: #1b1b1b\r
}\r
\r
.border-primary-lighter,\r
.hover\\:border-primary-lighter:hover {\r
    border-color: #d9e8f6\r
}\r
\r
.border-primary-light,\r
.hover\\:border-primary-light:hover {\r
    border-color: #73b3e7\r
}\r
\r
.border-primary,\r
.hover\\:border-primary:hover {\r
    border-color: #005ea2\r
}\r
\r
.border-primary-vivid,\r
.hover\\:border-primary-vivid:hover {\r
    border-color: #0050d8\r
}\r
\r
.border-primary-dark,\r
.hover\\:border-primary-dark:hover {\r
    border-color: #1a4480\r
}\r
\r
.border-primary-darker,\r
.hover\\:border-primary-darker:hover {\r
    border-color: #162e51\r
}\r
\r
.border-secondary-lighter,\r
.hover\\:border-secondary-lighter:hover {\r
    border-color: #f3e1e4\r
}\r
\r
.border-secondary-light,\r
.hover\\:border-secondary-light:hover {\r
    border-color: #f2938c\r
}\r
\r
.border-secondary,\r
.hover\\:border-secondary:hover {\r
    border-color: #d83933\r
}\r
\r
.border-secondary-vivid,\r
.hover\\:border-secondary-vivid:hover {\r
    border-color: #e41d3d\r
}\r
\r
.border-secondary-dark,\r
.hover\\:border-secondary-dark:hover {\r
    border-color: #b50909\r
}\r
\r
.border-secondary-darker,\r
.hover\\:border-secondary-darker:hover {\r
    border-color: #8b0a03\r
}\r
\r
.border-accent-warm-darker,\r
.hover\\:border-accent-warm-darker:hover {\r
    border-color: #775540\r
}\r
\r
.border-accent-warm-dark,\r
.hover\\:border-accent-warm-dark:hover {\r
    border-color: #c05600\r
}\r
\r
.border-accent-warm,\r
.hover\\:border-accent-warm:hover {\r
    border-color: #fa9441\r
}\r
\r
.border-accent-warm-light,\r
.hover\\:border-accent-warm-light:hover {\r
    border-color: #ffbc78\r
}\r
\r
.border-accent-warm-lighter,\r
.hover\\:border-accent-warm-lighter:hover {\r
    border-color: #f2e4d4\r
}\r
\r
.border-accent-cool-darker,\r
.hover\\:border-accent-cool-darker:hover {\r
    border-color: #07648d\r
}\r
\r
.border-accent-cool-dark,\r
.hover\\:border-accent-cool-dark:hover {\r
    border-color: #28a0cb\r
}\r
\r
.border-accent-cool,\r
.hover\\:border-accent-cool:hover {\r
    border-color: #00bde3\r
}\r
\r
.border-accent-cool-light,\r
.hover\\:border-accent-cool-light:hover {\r
    border-color: #97d4ea\r
}\r
\r
.border-accent-cool-lighter,\r
.hover\\:border-accent-cool-lighter:hover {\r
    border-color: #e1f3f8\r
}\r
\r
.border-error-lighter,\r
.hover\\:border-error-lighter:hover {\r
    border-color: #f4e3db\r
}\r
\r
.border-error-light,\r
.hover\\:border-error-light:hover {\r
    border-color: #f39268\r
}\r
\r
.border-error,\r
.hover\\:border-error:hover {\r
    border-color: #d54309\r
}\r
\r
.border-error-dark,\r
.hover\\:border-error-dark:hover {\r
    border-color: #b50909\r
}\r
\r
.border-error-darker,\r
.hover\\:border-error-darker:hover {\r
    border-color: #6f3331\r
}\r
\r
.border-warning-lighter,\r
.hover\\:border-warning-lighter:hover {\r
    border-color: #faf3d1\r
}\r
\r
.border-warning-light,\r
.hover\\:border-warning-light:hover {\r
    border-color: #fee685\r
}\r
\r
.border-warning,\r
.hover\\:border-warning:hover {\r
    border-color: #ffbe2e\r
}\r
\r
.border-warning-dark,\r
.hover\\:border-warning-dark:hover {\r
    border-color: #e5a000\r
}\r
\r
.border-warning-darker,\r
.hover\\:border-warning-darker:hover {\r
    border-color: #936f38\r
}\r
\r
.border-success-lighter,\r
.hover\\:border-success-lighter:hover {\r
    border-color: #ecf3ec\r
}\r
\r
.border-success-light,\r
.hover\\:border-success-light:hover {\r
    border-color: #70e17b\r
}\r
\r
.border-success,\r
.hover\\:border-success:hover {\r
    border-color: #00a91c\r
}\r
\r
.border-success-dark,\r
.hover\\:border-success-dark:hover {\r
    border-color: #008817\r
}\r
\r
.border-success-darker,\r
.hover\\:border-success-darker:hover {\r
    border-color: #216e1f\r
}\r
\r
.border-info-lighter,\r
.hover\\:border-info-lighter:hover {\r
    border-color: #e7f6f8\r
}\r
\r
.border-info-light,\r
.hover\\:border-info-light:hover {\r
    border-color: #99deea\r
}\r
\r
.border-info,\r
.hover\\:border-info:hover {\r
    border-color: #00bde3\r
}\r
\r
.border-info-dark,\r
.hover\\:border-info-dark:hover {\r
    border-color: #009ec1\r
}\r
\r
.border-info-darker,\r
.hover\\:border-info-darker:hover {\r
    border-color: #2e6276\r
}\r
\r
.border-disabled-lighter,\r
.hover\\:border-disabled-lighter:hover {\r
    border-color: #c9c9c9\r
}\r
\r
.border-disabled-light,\r
.hover\\:border-disabled-light:hover {\r
    border-color: #919191\r
}\r
\r
.border-disabled,\r
.hover\\:border-disabled:hover {\r
    border-color: #757575\r
}\r
\r
.border-disabled-dark,\r
.hover\\:border-disabled-dark:hover {\r
    border-color: #454545\r
}\r
\r
.border-disabled-darker,\r
.hover\\:border-disabled-darker:hover {\r
    border-color: #1b1b1b\r
}\r
\r
.border-emergency,\r
.hover\\:border-emergency:hover {\r
    border-color: #9c3d10\r
}\r
\r
.border-emergency-dark,\r
.hover\\:border-emergency-dark:hover {\r
    border-color: #332d29\r
}\r
\r
.radius-0 {\r
    border-radius: 0\r
}\r
\r
.radius-top-0 {\r
    border-top-left-radius: 0;\r
    border-top-right-radius: 0\r
}\r
\r
.radius-right-0 {\r
    border-top-right-radius: 0;\r
    border-bottom-right-radius: 0\r
}\r
\r
.radius-bottom-0 {\r
    border-bottom-left-radius: 0;\r
    border-bottom-right-radius: 0\r
}\r
\r
.radius-left-0 {\r
    border-top-left-radius: 0;\r
    border-bottom-left-radius: 0\r
}\r
\r
.radius-sm {\r
    border-radius: 2px\r
}\r
\r
.radius-top-sm {\r
    border-top-left-radius: 2px;\r
    border-top-right-radius: 2px\r
}\r
\r
.radius-right-sm {\r
    border-top-right-radius: 2px;\r
    border-bottom-right-radius: 2px\r
}\r
\r
.radius-bottom-sm {\r
    border-bottom-left-radius: 2px;\r
    border-bottom-right-radius: 2px\r
}\r
\r
.radius-left-sm {\r
    border-top-left-radius: 2px;\r
    border-bottom-left-radius: 2px\r
}\r
\r
.radius-md {\r
    border-radius: .25rem\r
}\r
\r
.radius-top-md {\r
    border-top-left-radius: .25rem;\r
    border-top-right-radius: .25rem\r
}\r
\r
.radius-right-md {\r
    border-top-right-radius: .25rem;\r
    border-bottom-right-radius: .25rem\r
}\r
\r
.radius-bottom-md {\r
    border-bottom-left-radius: .25rem;\r
    border-bottom-right-radius: .25rem\r
}\r
\r
.radius-left-md {\r
    border-top-left-radius: .25rem;\r
    border-bottom-left-radius: .25rem\r
}\r
\r
.radius-lg {\r
    border-radius: .5rem\r
}\r
\r
.radius-top-lg {\r
    border-top-left-radius: .5rem;\r
    border-top-right-radius: .5rem\r
}\r
\r
.radius-right-lg {\r
    border-top-right-radius: .5rem;\r
    border-bottom-right-radius: .5rem\r
}\r
\r
.radius-bottom-lg {\r
    border-bottom-left-radius: .5rem;\r
    border-bottom-right-radius: .5rem\r
}\r
\r
.radius-left-lg {\r
    border-top-left-radius: .5rem;\r
    border-bottom-left-radius: .5rem\r
}\r
\r
.radius-pill {\r
    border-radius: 99rem\r
}\r
\r
.radius-top-pill {\r
    border-top-left-radius: 99rem;\r
    border-top-right-radius: 99rem\r
}\r
\r
.radius-right-pill {\r
    border-top-right-radius: 99rem;\r
    border-bottom-right-radius: 99rem\r
}\r
\r
.radius-bottom-pill {\r
    border-bottom-left-radius: 99rem;\r
    border-bottom-right-radius: 99rem\r
}\r
\r
.radius-left-pill {\r
    border-top-left-radius: 99rem;\r
    border-bottom-left-radius: 99rem\r
}\r
\r
.border-dashed {\r
    border-style: dashed\r
}\r
\r
.border-dotted {\r
    border-style: dotted\r
}\r
\r
.border-solid {\r
    border-style: solid\r
}\r
\r
.border-width-1px {\r
    border-width: 1px\r
}\r
\r
.border-y-width-1px {\r
    border-top-width: 1px;\r
    border-bottom-width: 1px\r
}\r
\r
.border-x-width-1px {\r
    border-left-width: 1px;\r
    border-right-width: 1px\r
}\r
\r
.border-top-width-1px {\r
    border-top-width: 1px\r
}\r
\r
.border-right-width-1px {\r
    border-right-width: 1px\r
}\r
\r
.border-bottom-width-1px {\r
    border-bottom-width: 1px\r
}\r
\r
.border-left-width-1px {\r
    border-left-width: 1px\r
}\r
\r
.border-width-2px {\r
    border-width: 2px\r
}\r
\r
.border-y-width-2px {\r
    border-top-width: 2px;\r
    border-bottom-width: 2px\r
}\r
\r
.border-x-width-2px {\r
    border-left-width: 2px;\r
    border-right-width: 2px\r
}\r
\r
.border-top-width-2px {\r
    border-top-width: 2px\r
}\r
\r
.border-right-width-2px {\r
    border-right-width: 2px\r
}\r
\r
.border-bottom-width-2px {\r
    border-bottom-width: 2px\r
}\r
\r
.border-left-width-2px {\r
    border-left-width: 2px\r
}\r
\r
.border-width-05 {\r
    border-width: .25rem\r
}\r
\r
.border-y-width-05 {\r
    border-top-width: .25rem;\r
    border-bottom-width: .25rem\r
}\r
\r
.border-x-width-05 {\r
    border-left-width: .25rem;\r
    border-right-width: .25rem\r
}\r
\r
.border-top-width-05 {\r
    border-top-width: .25rem\r
}\r
\r
.border-right-width-05 {\r
    border-right-width: .25rem\r
}\r
\r
.border-bottom-width-05 {\r
    border-bottom-width: .25rem\r
}\r
\r
.border-left-width-05 {\r
    border-left-width: .25rem\r
}\r
\r
.border-width-1 {\r
    border-width: .5rem\r
}\r
\r
.border-y-width-1 {\r
    border-top-width: .5rem;\r
    border-bottom-width: .5rem\r
}\r
\r
.border-x-width-1 {\r
    border-left-width: .5rem;\r
    border-right-width: .5rem\r
}\r
\r
.border-top-width-1 {\r
    border-top-width: .5rem\r
}\r
\r
.border-right-width-1 {\r
    border-right-width: .5rem\r
}\r
\r
.border-bottom-width-1 {\r
    border-bottom-width: .5rem\r
}\r
\r
.border-left-width-1 {\r
    border-left-width: .5rem\r
}\r
\r
.border-width-105 {\r
    border-width: .75rem\r
}\r
\r
.border-y-width-105 {\r
    border-top-width: .75rem;\r
    border-bottom-width: .75rem\r
}\r
\r
.border-x-width-105 {\r
    border-left-width: .75rem;\r
    border-right-width: .75rem\r
}\r
\r
.border-top-width-105 {\r
    border-top-width: .75rem\r
}\r
\r
.border-right-width-105 {\r
    border-right-width: .75rem\r
}\r
\r
.border-bottom-width-105 {\r
    border-bottom-width: .75rem\r
}\r
\r
.border-left-width-105 {\r
    border-left-width: .75rem\r
}\r
\r
.border-width-2 {\r
    border-width: 1rem\r
}\r
\r
.border-y-width-2 {\r
    border-top-width: 1rem;\r
    border-bottom-width: 1rem\r
}\r
\r
.border-x-width-2 {\r
    border-left-width: 1rem;\r
    border-right-width: 1rem\r
}\r
\r
.border-top-width-2 {\r
    border-top-width: 1rem\r
}\r
\r
.border-right-width-2 {\r
    border-right-width: 1rem\r
}\r
\r
.border-bottom-width-2 {\r
    border-bottom-width: 1rem\r
}\r
\r
.border-left-width-2 {\r
    border-left-width: 1rem\r
}\r
\r
.border-width-205 {\r
    border-width: 1.25rem\r
}\r
\r
.border-y-width-205 {\r
    border-top-width: 1.25rem;\r
    border-bottom-width: 1.25rem\r
}\r
\r
.border-x-width-205 {\r
    border-left-width: 1.25rem;\r
    border-right-width: 1.25rem\r
}\r
\r
.border-top-width-205 {\r
    border-top-width: 1.25rem\r
}\r
\r
.border-right-width-205 {\r
    border-right-width: 1.25rem\r
}\r
\r
.border-bottom-width-205 {\r
    border-bottom-width: 1.25rem\r
}\r
\r
.border-left-width-205 {\r
    border-left-width: 1.25rem\r
}\r
\r
.border-width-3 {\r
    border-width: 1.5rem\r
}\r
\r
.border-y-width-3 {\r
    border-top-width: 1.5rem;\r
    border-bottom-width: 1.5rem\r
}\r
\r
.border-x-width-3 {\r
    border-left-width: 1.5rem;\r
    border-right-width: 1.5rem\r
}\r
\r
.border-top-width-3 {\r
    border-top-width: 1.5rem\r
}\r
\r
.border-right-width-3 {\r
    border-right-width: 1.5rem\r
}\r
\r
.border-bottom-width-3 {\r
    border-bottom-width: 1.5rem\r
}\r
\r
.border-left-width-3 {\r
    border-left-width: 1.5rem\r
}\r
\r
.border-width-0 {\r
    border-width: 0\r
}\r
\r
.border-y-width-0 {\r
    border-top-width: 0;\r
    border-bottom-width: 0\r
}\r
\r
.border-x-width-0 {\r
    border-left-width: 0;\r
    border-right-width: 0\r
}\r
\r
.border-top-width-0 {\r
    border-top-width: 0\r
}\r
\r
.border-right-width-0 {\r
    border-right-width: 0\r
}\r
\r
.border-bottom-width-0 {\r
    border-bottom-width: 0\r
}\r
\r
.border-left-width-0 {\r
    border-left-width: 0\r
}\r
\r
.bottom-1px {\r
    bottom: 1px\r
}\r
\r
.bottom-2px {\r
    bottom: 2px\r
}\r
\r
.bottom-05 {\r
    bottom: .25rem\r
}\r
\r
.bottom-1 {\r
    bottom: .5rem\r
}\r
\r
.bottom-105 {\r
    bottom: .75rem\r
}\r
\r
.bottom-2 {\r
    bottom: 1rem\r
}\r
\r
.bottom-205 {\r
    bottom: 1.25rem\r
}\r
\r
.bottom-3 {\r
    bottom: 1.5rem\r
}\r
\r
.bottom-neg-1px {\r
    bottom: -1px\r
}\r
\r
.bottom-neg-2px {\r
    bottom: -2px\r
}\r
\r
.bottom-neg-05 {\r
    bottom: -.25rem\r
}\r
\r
.bottom-neg-1 {\r
    bottom: -.5rem\r
}\r
\r
.bottom-neg-105 {\r
    bottom: -.75rem\r
}\r
\r
.bottom-neg-2 {\r
    bottom: -1rem\r
}\r
\r
.bottom-neg-205 {\r
    bottom: -1.25rem\r
}\r
\r
.bottom-neg-3 {\r
    bottom: -1.5rem\r
}\r
\r
.bottom-0 {\r
    bottom: 0\r
}\r
\r
.bottom-auto {\r
    bottom: auto\r
}\r
\r
.bottom-full {\r
    bottom: 100%\r
}\r
\r
.hover\\:shadow-none:hover,\r
.shadow-none {\r
    box-shadow: none\r
}\r
\r
.hover\\:shadow-1:hover,\r
.shadow-1 {\r
    box-shadow: 0 1px .25rem 0 rgba(0, 0, 0, .1)\r
}\r
\r
.hover\\:shadow-2:hover,\r
.shadow-2 {\r
    box-shadow: 0 .25rem .5rem 0 rgba(0, 0, 0, .1)\r
}\r
\r
.hover\\:shadow-3:hover,\r
.shadow-3 {\r
    box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .1)\r
}\r
\r
.hover\\:shadow-4:hover,\r
.shadow-4 {\r
    box-shadow: 0 .75rem 1.5rem 0 rgba(0, 0, 0, .1)\r
}\r
\r
.hover\\:shadow-5:hover,\r
.shadow-5 {\r
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, .1)\r
}\r
\r
.circle-1px,\r
.circle-2px {\r
    height: 1px;\r
    width: 1px;\r
    border-radius: 50%\r
}\r
\r
.circle-2px {\r
    height: 2px;\r
    width: 2px\r
}\r
\r
.circle-05 {\r
    height: .25rem;\r
    width: .25rem;\r
    border-radius: 50%\r
}\r
\r
.circle-1,\r
.circle-105 {\r
    height: .5rem;\r
    width: .5rem;\r
    border-radius: 50%\r
}\r
\r
.circle-105 {\r
    height: .75rem;\r
    width: .75rem\r
}\r
\r
.circle-2,\r
.circle-205 {\r
    height: 1rem;\r
    width: 1rem;\r
    border-radius: 50%\r
}\r
\r
.circle-205 {\r
    height: 1.25rem;\r
    width: 1.25rem\r
}\r
\r
.circle-3,\r
.circle-4 {\r
    height: 1.5rem;\r
    width: 1.5rem;\r
    border-radius: 50%\r
}\r
\r
.circle-4 {\r
    height: 2rem;\r
    width: 2rem\r
}\r
\r
.circle-5,\r
.circle-6 {\r
    height: 2.5rem;\r
    width: 2.5rem;\r
    border-radius: 50%\r
}\r
\r
.circle-6 {\r
    height: 3rem;\r
    width: 3rem\r
}\r
\r
.circle-7,\r
.circle-8 {\r
    height: 3.5rem;\r
    width: 3.5rem;\r
    border-radius: 50%\r
}\r
\r
.circle-8 {\r
    height: 4rem;\r
    width: 4rem\r
}\r
\r
.circle-10,\r
.circle-9 {\r
    height: 4.5rem;\r
    width: 4.5rem;\r
    border-radius: 50%\r
}\r
\r
.circle-10 {\r
    height: 5rem;\r
    width: 5rem\r
}\r
\r
.circle-15,\r
.circle-card {\r
    height: 7.5rem;\r
    width: 7.5rem;\r
    border-radius: 50%\r
}\r
\r
.circle-card {\r
    height: 10rem;\r
    width: 10rem\r
}\r
\r
.circle-card-lg,\r
.circle-mobile {\r
    height: 15rem;\r
    width: 15rem;\r
    border-radius: 50%\r
}\r
\r
.circle-mobile {\r
    height: 20rem;\r
    width: 20rem\r
}\r
\r
.clearfix::after {\r
    content: "";\r
    display: block;\r
    clear: both\r
}\r
\r
.hover\\:text-transparent:hover,\r
.text-transparent {\r
    color: transparent\r
}\r
\r
.hover\\:text-black:hover,\r
.text-black {\r
    color: #000\r
}\r
\r
.hover\\:text-white:hover,\r
.text-white {\r
    color: #fff\r
}\r
\r
.hover\\:text-red:hover,\r
.text-red {\r
    color: #e52207\r
}\r
\r
.hover\\:text-orange:hover,\r
.text-orange {\r
    color: #e66f0e\r
}\r
\r
.hover\\:text-gold:hover,\r
.text-gold {\r
    color: #ffbe2e\r
}\r
\r
.hover\\:text-yellow:hover,\r
.text-yellow {\r
    color: #fee685\r
}\r
\r
.hover\\:text-green:hover,\r
.text-green {\r
    color: #538200\r
}\r
\r
.hover\\:text-mint:hover,\r
.text-mint {\r
    color: #04c585\r
}\r
\r
.hover\\:text-cyan:hover,\r
.text-cyan {\r
    color: #009ec1\r
}\r
\r
.hover\\:text-blue:hover,\r
.text-blue {\r
    color: #0076d6\r
}\r
\r
.hover\\:text-indigo:hover,\r
.text-indigo {\r
    color: #676cc8\r
}\r
\r
.hover\\:text-violet:hover,\r
.text-violet {\r
    color: #8168b3\r
}\r
\r
.hover\\:text-magenta:hover,\r
.text-magenta {\r
    color: #d72d79\r
}\r
\r
.hover\\:text-gray-5:hover,\r
.text-gray-5 {\r
    color: #f0f0f0\r
}\r
\r
.hover\\:text-gray-10:hover,\r
.text-gray-10 {\r
    color: #e6e6e6\r
}\r
\r
.hover\\:text-gray-30:hover,\r
.text-gray-30 {\r
    color: #adadad\r
}\r
\r
.hover\\:text-gray-50:hover,\r
.text-gray-50 {\r
    color: #757575\r
}\r
\r
.hover\\:text-gray-70:hover,\r
.text-gray-70 {\r
    color: #454545\r
}\r
\r
.hover\\:text-gray-90:hover,\r
.text-gray-90 {\r
    color: #1b1b1b\r
}\r
\r
.hover\\:text-base-lightest:hover,\r
.text-base-lightest {\r
    color: #f0f0f0\r
}\r
\r
.hover\\:text-base-lighter:hover,\r
.text-base-lighter {\r
    color: #dfe1e2\r
}\r
\r
.hover\\:text-base-light:hover,\r
.text-base-light {\r
    color: #a9aeb1\r
}\r
\r
.hover\\:text-base:hover,\r
.text-base {\r
    color: #71767a\r
}\r
\r
.hover\\:text-base-dark:hover,\r
.text-base-dark {\r
    color: #565c65\r
}\r
\r
.hover\\:text-base-darker:hover,\r
.text-base-darker {\r
    color: #3d4551\r
}\r
\r
.hover\\:text-base-darkest:hover,\r
.hover\\:text-ink:hover,\r
.text-base-darkest,\r
.text-ink {\r
    color: #1b1b1b\r
}\r
\r
.hover\\:text-primary-lighter:hover,\r
.text-primary-lighter {\r
    color: #d9e8f6\r
}\r
\r
.hover\\:text-primary-light:hover,\r
.text-primary-light {\r
    color: #73b3e7\r
}\r
\r
.hover\\:text-primary:hover,\r
.text-primary {\r
    color: #005ea2\r
}\r
\r
.hover\\:text-primary-vivid:hover,\r
.text-primary-vivid {\r
    color: #0050d8\r
}\r
\r
.hover\\:text-primary-dark:hover,\r
.text-primary-dark {\r
    color: #1a4480\r
}\r
\r
.hover\\:text-primary-darker:hover,\r
.text-primary-darker {\r
    color: #162e51\r
}\r
\r
.hover\\:text-secondary-lighter:hover,\r
.text-secondary-lighter {\r
    color: #f3e1e4\r
}\r
\r
.hover\\:text-secondary-light:hover,\r
.text-secondary-light {\r
    color: #f2938c\r
}\r
\r
.hover\\:text-secondary:hover,\r
.text-secondary {\r
    color: #d83933\r
}\r
\r
.hover\\:text-secondary-vivid:hover,\r
.text-secondary-vivid {\r
    color: #e41d3d\r
}\r
\r
.hover\\:text-secondary-dark:hover,\r
.text-secondary-dark {\r
    color: #b50909\r
}\r
\r
.hover\\:text-secondary-darker:hover,\r
.text-secondary-darker {\r
    color: #8b0a03\r
}\r
\r
.hover\\:text-accent-warm-darker:hover,\r
.text-accent-warm-darker {\r
    color: #775540\r
}\r
\r
.hover\\:text-accent-warm-dark:hover,\r
.text-accent-warm-dark {\r
    color: #c05600\r
}\r
\r
.hover\\:text-accent-warm:hover,\r
.text-accent-warm {\r
    color: #fa9441\r
}\r
\r
.hover\\:text-accent-warm-light:hover,\r
.text-accent-warm-light {\r
    color: #ffbc78\r
}\r
\r
.hover\\:text-accent-warm-lighter:hover,\r
.text-accent-warm-lighter {\r
    color: #f2e4d4\r
}\r
\r
.hover\\:text-accent-cool-darker:hover,\r
.text-accent-cool-darker {\r
    color: #07648d\r
}\r
\r
.hover\\:text-accent-cool-dark:hover,\r
.text-accent-cool-dark {\r
    color: #28a0cb\r
}\r
\r
.hover\\:text-accent-cool:hover,\r
.text-accent-cool {\r
    color: #00bde3\r
}\r
\r
.hover\\:text-accent-cool-light:hover,\r
.text-accent-cool-light {\r
    color: #97d4ea\r
}\r
\r
.hover\\:text-accent-cool-lighter:hover,\r
.text-accent-cool-lighter {\r
    color: #e1f3f8\r
}\r
\r
.hover\\:text-error-lighter:hover,\r
.text-error-lighter {\r
    color: #f4e3db\r
}\r
\r
.hover\\:text-error-light:hover,\r
.text-error-light {\r
    color: #f39268\r
}\r
\r
.hover\\:text-error:hover,\r
.text-error {\r
    color: #d54309\r
}\r
\r
.hover\\:text-error-dark:hover,\r
.text-error-dark {\r
    color: #b50909\r
}\r
\r
.hover\\:text-error-darker:hover,\r
.text-error-darker {\r
    color: #6f3331\r
}\r
\r
.hover\\:text-warning-lighter:hover,\r
.text-warning-lighter {\r
    color: #faf3d1\r
}\r
\r
.hover\\:text-warning-light:hover,\r
.text-warning-light {\r
    color: #fee685\r
}\r
\r
.hover\\:text-warning:hover,\r
.text-warning {\r
    color: #ffbe2e\r
}\r
\r
.hover\\:text-warning-dark:hover,\r
.text-warning-dark {\r
    color: #e5a000\r
}\r
\r
.hover\\:text-warning-darker:hover,\r
.text-warning-darker {\r
    color: #936f38\r
}\r
\r
.hover\\:text-success-lighter:hover,\r
.text-success-lighter {\r
    color: #ecf3ec\r
}\r
\r
.hover\\:text-success-light:hover,\r
.text-success-light {\r
    color: #70e17b\r
}\r
\r
.hover\\:text-success:hover,\r
.text-success {\r
    color: #00a91c\r
}\r
\r
.hover\\:text-success-dark:hover,\r
.text-success-dark {\r
    color: #008817\r
}\r
\r
.hover\\:text-success-darker:hover,\r
.text-success-darker {\r
    color: #216e1f\r
}\r
\r
.hover\\:text-info-lighter:hover,\r
.text-info-lighter {\r
    color: #e7f6f8\r
}\r
\r
.hover\\:text-info-light:hover,\r
.text-info-light {\r
    color: #99deea\r
}\r
\r
.hover\\:text-info:hover,\r
.text-info {\r
    color: #00bde3\r
}\r
\r
.hover\\:text-info-dark:hover,\r
.text-info-dark {\r
    color: #009ec1\r
}\r
\r
.hover\\:text-info-darker:hover,\r
.text-info-darker {\r
    color: #2e6276\r
}\r
\r
.hover\\:text-disabled-lighter:hover,\r
.text-disabled-lighter {\r
    color: #c9c9c9\r
}\r
\r
.hover\\:text-disabled-light:hover,\r
.text-disabled-light {\r
    color: #919191\r
}\r
\r
.hover\\:text-disabled:hover,\r
.text-disabled {\r
    color: #757575\r
}\r
\r
.hover\\:text-disabled-dark:hover,\r
.text-disabled-dark {\r
    color: #454545\r
}\r
\r
.hover\\:text-disabled-darker:hover,\r
.text-disabled-darker {\r
    color: #1b1b1b\r
}\r
\r
.hover\\:text-emergency:hover,\r
.text-emergency {\r
    color: #9c3d10\r
}\r
\r
.hover\\:text-emergency-dark:hover,\r
.text-emergency-dark {\r
    color: #332d29\r
}\r
\r
.cursor-auto {\r
    cursor: auto\r
}\r
\r
.cursor-default {\r
    cursor: default\r
}\r
\r
.cursor-pointer {\r
    cursor: pointer\r
}\r
\r
.cursor-wait {\r
    cursor: wait\r
}\r
\r
.cursor-move {\r
    cursor: move\r
}\r
\r
.cursor-not-allowed {\r
    cursor: not-allowed\r
}\r
\r
.display-block {\r
    display: block\r
}\r
\r
.display-flex {\r
    display: flex\r
}\r
\r
.display-none {\r
    display: none\r
}\r
\r
.display-inline {\r
    display: inline\r
}\r
\r
.display-inline-block {\r
    display: inline-block\r
}\r
\r
.display-inline-flex {\r
    display: inline-flex\r
}\r
\r
.display-table {\r
    display: table\r
}\r
\r
.display-table-cell {\r
    display: table-cell\r
}\r
\r
.display-table-row {\r
    display: table-row\r
}\r
\r
.flex-1 {\r
    flex: 1 1 0%\r
}\r
\r
.flex-2 {\r
    flex: 2 1 0%\r
}\r
\r
.flex-3 {\r
    flex: 3 1 0%\r
}\r
\r
.flex-4 {\r
    flex: 4 1 0%\r
}\r
\r
.flex-5 {\r
    flex: 5 1 0%\r
}\r
\r
.flex-6 {\r
    flex: 6 1 0%\r
}\r
\r
.flex-7 {\r
    flex: 7 1 0%\r
}\r
\r
.flex-8 {\r
    flex: 8 1 0%\r
}\r
\r
.flex-9 {\r
    flex: 9 1 0%\r
}\r
\r
.flex-10 {\r
    flex: 10 1 0%\r
}\r
\r
.flex-11 {\r
    flex: 11 1 0%\r
}\r
\r
.flex-12 {\r
    flex: 12 1 0%\r
}\r
\r
.flex-fill {\r
    flex: 1 1 0%\r
}\r
\r
.flex-auto {\r
    flex: 0 1 auto\r
}\r
\r
.flex-row {\r
    flex-direction: row\r
}\r
\r
.flex-column {\r
    flex-direction: column\r
}\r
\r
.flex-wrap {\r
    flex-wrap: wrap\r
}\r
\r
.flex-no-wrap {\r
    flex-wrap: nowrap\r
}\r
\r
.float-left {\r
    float: left\r
}\r
\r
.float-none {\r
    float: none\r
}\r
\r
.float-right {\r
    float: right\r
}\r
\r
.font-mono-3xs {\r
    /* font-size: .77rem */\r
}\r
\r
.font-mono-2xs {\r
    /* font-size: .83rem */\r
}\r
\r
.font-mono-xs {\r
    /* font-size: .89rem */\r
}\r
\r
.font-mono-sm {\r
    /* font-size: .95rem */\r
}\r
\r
.font-mono-md {\r
    /* font-size: 1.01rem */\r
}\r
\r
.font-mono-lg {\r
    /* font-size: 1.31rem */\r
}\r
\r
.font-mono-xl {\r
    /* font-size: 1.91rem */\r
}\r
\r
.font-mono-2xl {\r
    /* font-size: 2.38rem */\r
}\r
\r
.font-mono-3xl {\r
    /* font-size: 2.86rem */\r
}\r
\r
.font-sans-3xs {\r
    /* font-size: .87rem */\r
}\r
\r
.font-sans-2xs {\r
    /* font-size: .93rem */\r
}\r
\r
.font-sans-xs {\r
    /* font-size: 1rem */\r
}\r
\r
.font-sans-sm {\r
    /* font-size: 1.06rem */\r
}\r
\r
.font-sans-md {\r
    /* font-size: 1.13rem */\r
}\r
\r
.font-sans-lg {\r
    /* font-size: 1.46rem */\r
}\r
\r
.font-sans-xl {\r
    /* font-size: 2.13rem */\r
}\r
\r
.font-sans-2xl {\r
    /* font-size: 2.66rem */\r
}\r
\r
.font-sans-3xl {\r
    /* font-size: 3.19rem */\r
}\r
\r
.font-serif-3xs {\r
    /* font-size: .79rem */\r
}\r
\r
.font-serif-2xs {\r
    /* font-size: .85rem */\r
}\r
\r
.font-serif-xs {\r
    /* font-size: .91rem */\r
}\r
\r
.font-serif-sm {\r
    /* font-size: .98rem */\r
}\r
\r
.font-serif-md {\r
    /* font-size: 1.04rem */\r
}\r
\r
.font-serif-lg {\r
    /* font-size: 1.34rem */\r
}\r
\r
.font-serif-xl {\r
    /* font-size: 1.95rem */\r
}\r
\r
.font-serif-2xl {\r
    /* font-size: 2.44rem */\r
}\r
\r
.font-serif-3xl {\r
    /* font-size: 2.93rem */\r
}\r
\r
.font-heading-3xs {\r
    /* font-size: .79rem */\r
}\r
\r
.font-heading-2xs {\r
    /* font-size: .85rem */\r
}\r
\r
.font-heading-xs {\r
    /* font-size: .91rem */\r
}\r
\r
.font-heading-sm {\r
    /* font-size: .98rem */\r
}\r
\r
.font-heading-md {\r
    /* font-size: 1.04rem */\r
}\r
\r
.font-heading-lg {\r
    /* font-size: 1.34rem */\r
}\r
\r
.font-heading-xl {\r
    /* font-size: 1.95rem */\r
}\r
\r
.font-heading-2xl {\r
    /* font-size: 2.44rem */\r
}\r
\r
.font-heading-3xl {\r
    /* font-size: 2.93rem */\r
}\r
\r
.font-body-3xs {\r
    /* font-size: .87rem */\r
}\r
\r
.font-body-2xs {\r
    /* font-size: .93rem */\r
}\r
\r
.font-body-xs {\r
    /* font-size: 1rem */\r
}\r
\r
.font-body-sm {\r
    /* font-size: 1.06rem */\r
}\r
\r
.font-body-md {\r
    /* font-size: 1.13rem */\r
}\r
\r
.font-body-lg {\r
    /* font-size: 1.46rem */\r
}\r
\r
.font-body-xl {\r
    /* font-size: 2.13rem */\r
}\r
\r
.font-body-2xl {\r
    /* font-size: 2.66rem */\r
}\r
\r
.font-body-3xl {\r
    /* font-size: 3.19rem */\r
}\r
\r
.font-code-3xs {\r
    /* font-size: .77rem */\r
}\r
\r
.font-code-2xs {\r
    /* font-size: .83rem */\r
}\r
\r
.font-code-xs {\r
    /* font-size: .89rem */\r
}\r
\r
.font-code-sm {\r
    /* font-size: .95rem */\r
}\r
\r
.font-code-md {\r
    /* font-size: 1.01rem */\r
}\r
\r
.font-code-lg {\r
    /* font-size: 1.31rem */\r
}\r
\r
.font-code-xl {\r
    /* font-size: 1.91rem */\r
}\r
\r
.font-code-2xl {\r
    /* font-size: 2.38rem */\r
}\r
\r
.font-code-3xl {\r
    /* font-size: 2.86rem */\r
}\r
\r
.font-alt-3xs {\r
    /* font-size: .79rem */\r
}\r
\r
.font-alt-2xs {\r
    /* font-size: .85rem */\r
}\r
\r
.font-alt-xs {\r
    /* font-size: .91rem */\r
}\r
\r
.font-alt-sm {\r
    /* font-size: .98rem */\r
}\r
\r
.font-alt-md {\r
    /* font-size: 1.04rem */\r
}\r
\r
.font-alt-lg {\r
    /* font-size: 1.34rem */\r
}\r
\r
.font-alt-xl {\r
    /* font-size: 1.95rem */\r
}\r
\r
.font-alt-2xl {\r
    /* font-size: 2.44rem */\r
}\r
\r
.font-alt-3xl {\r
    /* font-size: 2.93rem */\r
}\r
\r
.font-ui-3xs {\r
    /* font-size: .87rem */\r
}\r
\r
.font-ui-2xs {\r
    /* font-size: .93rem */\r
}\r
\r
.font-ui-xs {\r
    /* font-size: 1rem */\r
}\r
\r
.font-ui-sm {\r
    /* font-size: 1.06rem */\r
}\r
\r
.font-ui-md {\r
    /* font-size: 1.13rem */\r
}\r
\r
.font-ui-lg {\r
    /* font-size: 1.46rem */\r
}\r
\r
.font-ui-xl {\r
    /* font-size: 2.13rem */\r
}\r
\r
.font-ui-2xl {\r
    /* font-size: 2.66rem */\r
}\r
\r
.font-ui-3xl {\r
    /* font-size: 3.19rem */\r
}\r
\r
.font-family-mono {\r
    font-family: Roboto Mono Web, Bitstream Vera Sans Mono, Consolas, Courier, monospace\r
}\r
\r
.font-family-sans {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
.font-family-serif {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif\r
}\r
\r
.font-family-ui {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
.font-family-heading {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif\r
}\r
\r
.font-family-body {\r
    font-family: Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif\r
}\r
\r
.font-family-code {\r
    font-family: Roboto Mono Web, Bitstream Vera Sans Mono, Consolas, Courier, monospace\r
}\r
\r
.font-family-alt {\r
    font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif\r
}\r
\r
.text-tabular {\r
    font-feature-settings: "tnum" 1, "kern" 1\r
}\r
\r
.text-no-tabular {\r
    font-feature-settings: "kern" 1\r
}\r
\r
.text-italic {\r
    font-style: italic\r
}\r
\r
.text-no-italic {\r
    font-style: normal\r
}\r
\r
.text-light {\r
    font-weight: 300\r
}\r
\r
.text-normal {\r
    font-weight: 400\r
}\r
\r
.text-bold {\r
    font-weight: 700\r
}\r
\r
.height-1px {\r
    height: 1px\r
}\r
\r
.height-2px {\r
    height: 2px\r
}\r
\r
.height-05 {\r
    height: .25rem\r
}\r
\r
.height-1 {\r
    height: .5rem\r
}\r
\r
.height-105 {\r
    height: .75rem\r
}\r
\r
.height-2 {\r
    height: 1rem\r
}\r
\r
.height-205 {\r
    height: 1.25rem\r
}\r
\r
.height-3 {\r
    height: 1.5rem\r
}\r
\r
.height-4 {\r
    height: 2rem\r
}\r
\r
.height-5 {\r
    height: 2.5rem\r
}\r
\r
.height-6 {\r
    height: 3rem\r
}\r
\r
.height-7 {\r
    height: 3.5rem\r
}\r
\r
.height-8 {\r
    height: 4rem\r
}\r
\r
.height-9 {\r
    height: 4.5rem\r
}\r
\r
.height-10 {\r
    height: 5rem\r
}\r
\r
.height-15 {\r
    height: 7.5rem\r
}\r
\r
.height-card {\r
    height: 10rem\r
}\r
\r
.height-card-lg {\r
    height: 15rem\r
}\r
\r
.height-mobile {\r
    height: 20rem\r
}\r
\r
.height-0 {\r
    height: 0\r
}\r
\r
.height-auto {\r
    height: auto\r
}\r
\r
.height-full {\r
    height: 100%\r
}\r
\r
.height-viewport {\r
    height: 100vh\r
}\r
\r
.flex-justify-center {\r
    justify-content: center\r
}\r
\r
.flex-justify-start {\r
    justify-content: flex-start\r
}\r
\r
.flex-justify-end {\r
    justify-content: flex-end\r
}\r
\r
.flex-justify {\r
    justify-content: space-between\r
}\r
\r
.left-1px {\r
    left: 1px\r
}\r
\r
.left-2px {\r
    left: 2px\r
}\r
\r
.left-05 {\r
    left: .25rem\r
}\r
\r
.left-1 {\r
    left: .5rem\r
}\r
\r
.left-105 {\r
    left: .75rem\r
}\r
\r
.left-2 {\r
    left: 1rem\r
}\r
\r
.left-205 {\r
    left: 1.25rem\r
}\r
\r
.left-3 {\r
    left: 1.5rem\r
}\r
\r
.left-neg-1px {\r
    left: -1px\r
}\r
\r
.left-neg-2px {\r
    left: -2px\r
}\r
\r
.left-neg-05 {\r
    left: -.25rem\r
}\r
\r
.left-neg-1 {\r
    left: -.5rem\r
}\r
\r
.left-neg-105 {\r
    left: -.75rem\r
}\r
\r
.left-neg-2 {\r
    left: -1rem\r
}\r
\r
.left-neg-205 {\r
    left: -1.25rem\r
}\r
\r
.left-neg-3 {\r
    left: -1.5rem\r
}\r
\r
.left-0 {\r
    left: 0\r
}\r
\r
.left-auto {\r
    left: auto\r
}\r
\r
.left-full {\r
    left: 100%\r
}\r
\r
.text-ls-auto {\r
    letter-spacing: initial\r
}\r
\r
.text-ls-neg-3 {\r
    letter-spacing: -.03em\r
}\r
\r
.text-ls-neg-2 {\r
    letter-spacing: -.02em\r
}\r
\r
.text-ls-neg-1 {\r
    letter-spacing: -.01em\r
}\r
\r
.text-ls-1 {\r
    letter-spacing: .025em\r
}\r
\r
.text-ls-2 {\r
    letter-spacing: .1em\r
}\r
\r
.text-ls-3 {\r
    letter-spacing: .15em\r
}\r
\r
.line-height-sans-1 {\r
    line-height: .9\r
}\r
\r
.line-height-sans-2 {\r
    line-height: 1.1\r
}\r
\r
.line-height-sans-3 {\r
    line-height: 1.3\r
}\r
\r
.line-height-sans-4 {\r
    line-height: 1.4\r
}\r
\r
.line-height-sans-5 {\r
    line-height: 1.5\r
}\r
\r
.line-height-sans-6 {\r
    line-height: 1.6\r
}\r
\r
.line-height-serif-1 {\r
    line-height: 1\r
}\r
\r
.line-height-serif-2 {\r
    line-height: 1.2\r
}\r
\r
.line-height-serif-3 {\r
    line-height: 1.4\r
}\r
\r
.line-height-serif-4 {\r
    line-height: 1.5\r
}\r
\r
.line-height-serif-5 {\r
    line-height: 1.7\r
}\r
\r
.line-height-serif-6 {\r
    line-height: 1.8\r
}\r
\r
.line-height-mono-1 {\r
    line-height: 1\r
}\r
\r
.line-height-mono-2 {\r
    line-height: 1.3\r
}\r
\r
.line-height-mono-3 {\r
    line-height: 1.4\r
}\r
\r
.line-height-mono-4 {\r
    line-height: 1.6\r
}\r
\r
.line-height-mono-5 {\r
    line-height: 1.7\r
}\r
\r
.line-height-mono-6 {\r
    line-height: 1.8\r
}\r
\r
.line-height-heading-1 {\r
    line-height: 1\r
}\r
\r
.line-height-heading-2 {\r
    line-height: 1.2\r
}\r
\r
.line-height-heading-3 {\r
    line-height: 1.4\r
}\r
\r
.line-height-heading-4 {\r
    line-height: 1.5\r
}\r
\r
.line-height-heading-5 {\r
    line-height: 1.7\r
}\r
\r
.line-height-heading-6 {\r
    line-height: 1.8\r
}\r
\r
.line-height-ui-1 {\r
    line-height: .9\r
}\r
\r
.line-height-ui-2 {\r
    line-height: 1.1\r
}\r
\r
.line-height-ui-3 {\r
    line-height: 1.3\r
}\r
\r
.line-height-ui-4 {\r
    line-height: 1.4\r
}\r
\r
.line-height-ui-5 {\r
    line-height: 1.5\r
}\r
\r
.line-height-ui-6 {\r
    line-height: 1.6\r
}\r
\r
.line-height-body-1 {\r
    line-height: .9\r
}\r
\r
.line-height-body-2 {\r
    line-height: 1.1\r
}\r
\r
.line-height-body-3 {\r
    line-height: 1.3\r
}\r
\r
.line-height-body-4 {\r
    line-height: 1.4\r
}\r
\r
.line-height-body-5 {\r
    line-height: 1.5\r
}\r
\r
.line-height-body-6 {\r
    line-height: 1.6\r
}\r
\r
.line-height-code-1 {\r
    line-height: 1\r
}\r
\r
.line-height-code-2 {\r
    line-height: 1.3\r
}\r
\r
.line-height-code-3 {\r
    line-height: 1.4\r
}\r
\r
.line-height-code-4 {\r
    line-height: 1.6\r
}\r
\r
.line-height-code-5 {\r
    line-height: 1.7\r
}\r
\r
.line-height-code-6 {\r
    line-height: 1.8\r
}\r
\r
.line-height-alt-1 {\r
    line-height: 1\r
}\r
\r
.line-height-alt-2 {\r
    line-height: 1.2\r
}\r
\r
.line-height-alt-3 {\r
    line-height: 1.4\r
}\r
\r
.line-height-alt-4 {\r
    line-height: 1.5\r
}\r
\r
.line-height-alt-5 {\r
    line-height: 1.7\r
}\r
\r
.line-height-alt-6 {\r
    line-height: 1.8\r
}\r
\r
.margin-neg-1px {\r
    margin: -1px\r
}\r
\r
.margin-neg-2px {\r
    margin: -2px\r
}\r
\r
.margin-neg-05 {\r
    margin: -.25rem\r
}\r
\r
.margin-neg-1 {\r
    margin: -.5rem\r
}\r
\r
.margin-neg-105 {\r
    margin: -.75rem\r
}\r
\r
.margin-neg-2 {\r
    margin: -1rem\r
}\r
\r
.margin-neg-205 {\r
    margin: -1.25rem\r
}\r
\r
.margin-neg-3 {\r
    margin: -1.5rem\r
}\r
\r
.margin-1px {\r
    margin: 1px\r
}\r
\r
.margin-2px {\r
    margin: 2px\r
}\r
\r
.margin-05 {\r
    margin: .25rem\r
}\r
\r
.margin-1 {\r
    margin: .5rem\r
}\r
\r
.margin-105 {\r
    margin: .75rem\r
}\r
\r
.margin-2 {\r
    margin: 1rem\r
}\r
\r
.margin-205 {\r
    margin: 1.25rem\r
}\r
\r
.margin-3 {\r
    margin: 1.5rem\r
}\r
\r
.margin-neg-4 {\r
    margin: -2rem\r
}\r
\r
.margin-neg-5 {\r
    margin: -2.5rem\r
}\r
\r
.margin-neg-6 {\r
    margin: -3rem\r
}\r
\r
.margin-neg-7 {\r
    margin: -3.5rem\r
}\r
\r
.margin-neg-8 {\r
    margin: -4rem\r
}\r
\r
.margin-neg-9 {\r
    margin: -4.5rem\r
}\r
\r
.margin-neg-10 {\r
    margin: -5rem\r
}\r
\r
.margin-neg-15 {\r
    margin: -7.5rem\r
}\r
\r
.margin-4 {\r
    margin: 2rem\r
}\r
\r
.margin-5 {\r
    margin: 2.5rem\r
}\r
\r
.margin-6 {\r
    margin: 3rem\r
}\r
\r
.margin-7 {\r
    margin: 3.5rem\r
}\r
\r
.margin-8 {\r
    margin: 4rem\r
}\r
\r
.margin-9 {\r
    margin: 4.5rem\r
}\r
\r
.margin-10 {\r
    margin: 5rem\r
}\r
\r
.margin-15 {\r
    margin: 7.5rem\r
}\r
\r
.margin-05em {\r
    margin: .5em\r
}\r
\r
.margin-1em {\r
    margin: 1em\r
}\r
\r
.margin-105em {\r
    margin: 1.5em\r
}\r
\r
.margin-2em {\r
    margin: 2em\r
}\r
\r
.margin-0 {\r
    margin: 0\r
}\r
\r
.margin-y-1px {\r
    margin-bottom: 1px\r
}\r
\r
.margin-top-1px,\r
.margin-y-1px {\r
    margin-top: 1px\r
}\r
\r
.margin-bottom-1px {\r
    margin-bottom: 1px\r
}\r
\r
.margin-y-2px {\r
    margin-bottom: 2px\r
}\r
\r
.margin-top-2px,\r
.margin-y-2px {\r
    margin-top: 2px\r
}\r
\r
.margin-bottom-2px {\r
    margin-bottom: 2px\r
}\r
\r
.margin-y-05 {\r
    margin-bottom: .25rem\r
}\r
\r
.margin-top-05,\r
.margin-y-05 {\r
    margin-top: .25rem\r
}\r
\r
.margin-bottom-05 {\r
    margin-bottom: .25rem\r
}\r
\r
.margin-y-1 {\r
    margin-bottom: .5rem\r
}\r
\r
.margin-top-1,\r
.margin-y-1 {\r
    margin-top: .5rem\r
}\r
\r
.margin-bottom-1 {\r
    margin-bottom: .5rem\r
}\r
\r
.margin-y-105 {\r
    margin-bottom: .75rem\r
}\r
\r
.margin-top-105,\r
.margin-y-105 {\r
    margin-top: .75rem\r
}\r
\r
.margin-bottom-105 {\r
    margin-bottom: .75rem\r
}\r
\r
.margin-y-2 {\r
    margin-bottom: 1rem\r
}\r
\r
.margin-top-2,\r
.margin-y-2 {\r
    margin-top: 1rem\r
}\r
\r
.margin-bottom-2 {\r
    margin-bottom: 1rem\r
}\r
\r
.margin-y-205 {\r
    margin-bottom: 1.25rem\r
}\r
\r
.margin-top-205,\r
.margin-y-205 {\r
    margin-top: 1.25rem\r
}\r
\r
.margin-bottom-205 {\r
    margin-bottom: 1.25rem\r
}\r
\r
.margin-y-3 {\r
    margin-bottom: 1.5rem\r
}\r
\r
.margin-top-3,\r
.margin-y-3 {\r
    margin-top: 1.5rem\r
}\r
\r
.margin-bottom-3 {\r
    margin-bottom: 1.5rem\r
}\r
\r
.margin-y-neg-1px {\r
    margin-top: -1px;\r
    margin-bottom: -1px\r
}\r
\r
.margin-top-neg-1px {\r
    margin-top: -1px\r
}\r
\r
.margin-bottom-neg-1px {\r
    margin-bottom: -1px\r
}\r
\r
.margin-y-neg-2px {\r
    margin-top: -2px;\r
    margin-bottom: -2px\r
}\r
\r
.margin-top-neg-2px {\r
    margin-top: -2px\r
}\r
\r
.margin-bottom-neg-2px {\r
    margin-bottom: -2px\r
}\r
\r
.margin-y-neg-05 {\r
    margin-bottom: -.25rem\r
}\r
\r
.margin-top-neg-05,\r
.margin-y-neg-05 {\r
    margin-top: -.25rem\r
}\r
\r
.margin-bottom-neg-05 {\r
    margin-bottom: -.25rem\r
}\r
\r
.margin-y-neg-1 {\r
    margin-bottom: -.5rem\r
}\r
\r
.margin-top-neg-1,\r
.margin-y-neg-1 {\r
    margin-top: -.5rem\r
}\r
\r
.margin-bottom-neg-1 {\r
    margin-bottom: -.5rem\r
}\r
\r
.margin-y-neg-105 {\r
    margin-bottom: -.75rem\r
}\r
\r
.margin-top-neg-105,\r
.margin-y-neg-105 {\r
    margin-top: -.75rem\r
}\r
\r
.margin-bottom-neg-105 {\r
    margin-bottom: -.75rem\r
}\r
\r
.margin-y-neg-2 {\r
    margin-bottom: -1rem\r
}\r
\r
.margin-top-neg-2,\r
.margin-y-neg-2 {\r
    margin-top: -1rem\r
}\r
\r
.margin-bottom-neg-2 {\r
    margin-bottom: -1rem\r
}\r
\r
.margin-y-neg-205 {\r
    margin-bottom: -1.25rem\r
}\r
\r
.margin-top-neg-205,\r
.margin-y-neg-205 {\r
    margin-top: -1.25rem\r
}\r
\r
.margin-bottom-neg-205 {\r
    margin-bottom: -1.25rem\r
}\r
\r
.margin-y-neg-3 {\r
    margin-bottom: -1.5rem\r
}\r
\r
.margin-top-neg-3,\r
.margin-y-neg-3 {\r
    margin-top: -1.5rem\r
}\r
\r
.margin-bottom-neg-3 {\r
    margin-bottom: -1.5rem\r
}\r
\r
.margin-y-neg-4 {\r
    margin-bottom: -2rem\r
}\r
\r
.margin-top-neg-4,\r
.margin-y-neg-4 {\r
    margin-top: -2rem\r
}\r
\r
.margin-bottom-neg-4 {\r
    margin-bottom: -2rem\r
}\r
\r
.margin-y-neg-5 {\r
    margin-bottom: -2.5rem\r
}\r
\r
.margin-top-neg-5,\r
.margin-y-neg-5 {\r
    margin-top: -2.5rem\r
}\r
\r
.margin-bottom-neg-5 {\r
    margin-bottom: -2.5rem\r
}\r
\r
.margin-y-neg-6 {\r
    margin-bottom: -3rem\r
}\r
\r
.margin-top-neg-6,\r
.margin-y-neg-6 {\r
    margin-top: -3rem\r
}\r
\r
.margin-bottom-neg-6 {\r
    margin-bottom: -3rem\r
}\r
\r
.margin-y-neg-7 {\r
    margin-bottom: -3.5rem\r
}\r
\r
.margin-top-neg-7,\r
.margin-y-neg-7 {\r
    margin-top: -3.5rem\r
}\r
\r
.margin-bottom-neg-7 {\r
    margin-bottom: -3.5rem\r
}\r
\r
.margin-y-neg-8 {\r
    margin-bottom: -4rem\r
}\r
\r
.margin-top-neg-8,\r
.margin-y-neg-8 {\r
    margin-top: -4rem\r
}\r
\r
.margin-bottom-neg-8 {\r
    margin-bottom: -4rem\r
}\r
\r
.margin-y-neg-9 {\r
    margin-bottom: -4.5rem\r
}\r
\r
.margin-top-neg-9,\r
.margin-y-neg-9 {\r
    margin-top: -4.5rem\r
}\r
\r
.margin-bottom-neg-9 {\r
    margin-bottom: -4.5rem\r
}\r
\r
.margin-y-neg-10 {\r
    margin-top: -5rem;\r
    margin-bottom: -5rem\r
}\r
\r
.margin-top-neg-10 {\r
    margin-top: -5rem\r
}\r
\r
.margin-bottom-neg-10 {\r
    margin-bottom: -5rem\r
}\r
\r
.margin-y-neg-15 {\r
    margin-bottom: -7.5rem\r
}\r
\r
.margin-top-neg-15,\r
.margin-y-neg-15 {\r
    margin-top: -7.5rem\r
}\r
\r
.margin-bottom-neg-15 {\r
    margin-bottom: -7.5rem\r
}\r
\r
.margin-y-4 {\r
    margin-bottom: 2rem\r
}\r
\r
.margin-top-4,\r
.margin-y-4 {\r
    margin-top: 2rem\r
}\r
\r
.margin-bottom-4 {\r
    margin-bottom: 2rem\r
}\r
\r
.margin-y-5 {\r
    margin-bottom: 2.5rem\r
}\r
\r
.margin-top-5,\r
.margin-y-5 {\r
    margin-top: 2.5rem\r
}\r
\r
.margin-bottom-5 {\r
    margin-bottom: 2.5rem\r
}\r
\r
.margin-y-6 {\r
    margin-bottom: 3rem\r
}\r
\r
.margin-top-6,\r
.margin-y-6 {\r
    margin-top: 3rem\r
}\r
\r
.margin-bottom-6 {\r
    margin-bottom: 3rem\r
}\r
\r
.margin-y-7 {\r
    margin-bottom: 3.5rem\r
}\r
\r
.margin-top-7,\r
.margin-y-7 {\r
    margin-top: 3.5rem\r
}\r
\r
.margin-bottom-7 {\r
    margin-bottom: 3.5rem\r
}\r
\r
.margin-y-8 {\r
    margin-bottom: 4rem\r
}\r
\r
.margin-top-8,\r
.margin-y-8 {\r
    margin-top: 4rem\r
}\r
\r
.margin-bottom-8 {\r
    margin-bottom: 4rem\r
}\r
\r
.margin-y-9 {\r
    margin-bottom: 4.5rem\r
}\r
\r
.margin-top-9,\r
.margin-y-9 {\r
    margin-top: 4.5rem\r
}\r
\r
.margin-bottom-9 {\r
    margin-bottom: 4.5rem\r
}\r
\r
.margin-y-10 {\r
    margin-bottom: 5rem\r
}\r
\r
.margin-top-10,\r
.margin-y-10 {\r
    margin-top: 5rem\r
}\r
\r
.margin-bottom-10 {\r
    margin-bottom: 5rem\r
}\r
\r
.margin-y-15 {\r
    margin-bottom: 7.5rem\r
}\r
\r
.margin-top-15,\r
.margin-y-15 {\r
    margin-top: 7.5rem\r
}\r
\r
.margin-bottom-15 {\r
    margin-bottom: 7.5rem\r
}\r
\r
.margin-y-05em {\r
    margin-bottom: .5em\r
}\r
\r
.margin-top-05em,\r
.margin-y-05em {\r
    margin-top: .5em\r
}\r
\r
.margin-bottom-05em {\r
    margin-bottom: .5em\r
}\r
\r
.margin-y-1em {\r
    margin-bottom: 1em\r
}\r
\r
.margin-top-1em,\r
.margin-y-1em {\r
    margin-top: 1em\r
}\r
\r
.margin-bottom-1em {\r
    margin-bottom: 1em\r
}\r
\r
.margin-y-105em {\r
    margin-bottom: 1.5em\r
}\r
\r
.margin-top-105em,\r
.margin-y-105em {\r
    margin-top: 1.5em\r
}\r
\r
.margin-bottom-105em {\r
    margin-bottom: 1.5em\r
}\r
\r
.margin-y-2em {\r
    margin-bottom: 2em\r
}\r
\r
.margin-top-2em,\r
.margin-y-2em {\r
    margin-top: 2em\r
}\r
\r
.margin-bottom-2em {\r
    margin-bottom: 2em\r
}\r
\r
.margin-y-0 {\r
    margin-bottom: 0\r
}\r
\r
.margin-top-0,\r
.margin-y-0 {\r
    margin-top: 0\r
}\r
\r
.margin-bottom-0 {\r
    margin-bottom: 0\r
}\r
\r
.margin-y-auto {\r
    margin-bottom: auto\r
}\r
\r
.margin-top-auto,\r
.margin-y-auto {\r
    margin-top: auto\r
}\r
\r
.margin-bottom-auto {\r
    margin-bottom: auto\r
}\r
\r
.margin-x-1px {\r
    margin-left: 1px\r
}\r
\r
.margin-right-1px,\r
.margin-x-1px {\r
    margin-right: 1px\r
}\r
\r
.margin-left-1px {\r
    margin-left: 1px\r
}\r
\r
.margin-x-2px {\r
    margin-left: 2px\r
}\r
\r
.margin-right-2px,\r
.margin-x-2px {\r
    margin-right: 2px\r
}\r
\r
.margin-left-2px {\r
    margin-left: 2px\r
}\r
\r
.margin-x-05 {\r
    margin-left: .25rem\r
}\r
\r
.margin-right-05,\r
.margin-x-05 {\r
    margin-right: .25rem\r
}\r
\r
.margin-left-05 {\r
    margin-left: .25rem\r
}\r
\r
.margin-x-1 {\r
    margin-left: .5rem\r
}\r
\r
.margin-right-1,\r
.margin-x-1 {\r
    margin-right: .5rem\r
}\r
\r
.margin-left-1 {\r
    margin-left: .5rem\r
}\r
\r
.margin-x-105 {\r
    margin-left: .75rem\r
}\r
\r
.margin-right-105,\r
.margin-x-105 {\r
    margin-right: .75rem\r
}\r
\r
.margin-left-105 {\r
    margin-left: .75rem\r
}\r
\r
.margin-x-2 {\r
    margin-left: 1rem\r
}\r
\r
.margin-right-2,\r
.margin-x-2 {\r
    margin-right: 1rem\r
}\r
\r
.margin-left-2 {\r
    margin-left: 1rem\r
}\r
\r
.margin-x-205 {\r
    margin-left: 1.25rem\r
}\r
\r
.margin-right-205,\r
.margin-x-205 {\r
    margin-right: 1.25rem\r
}\r
\r
.margin-left-205 {\r
    margin-left: 1.25rem\r
}\r
\r
.margin-x-3 {\r
    margin-left: 1.5rem\r
}\r
\r
.margin-right-3,\r
.margin-x-3 {\r
    margin-right: 1.5rem\r
}\r
\r
.margin-left-3 {\r
    margin-left: 1.5rem\r
}\r
\r
.margin-x-neg-1px {\r
    margin-left: -1px;\r
    margin-right: -1px\r
}\r
\r
.margin-right-neg-1px {\r
    margin-right: -1px\r
}\r
\r
.margin-left-neg-1px {\r
    margin-left: -1px\r
}\r
\r
.margin-x-neg-2px {\r
    margin-left: -2px;\r
    margin-right: -2px\r
}\r
\r
.margin-right-neg-2px {\r
    margin-right: -2px\r
}\r
\r
.margin-left-neg-2px {\r
    margin-left: -2px\r
}\r
\r
.margin-x-neg-05 {\r
    margin-left: -.25rem\r
}\r
\r
.margin-right-neg-05,\r
.margin-x-neg-05 {\r
    margin-right: -.25rem\r
}\r
\r
.margin-left-neg-05 {\r
    margin-left: -.25rem\r
}\r
\r
.margin-x-neg-1 {\r
    margin-left: -.5rem\r
}\r
\r
.margin-right-neg-1,\r
.margin-x-neg-1 {\r
    margin-right: -.5rem\r
}\r
\r
.margin-left-neg-1 {\r
    margin-left: -.5rem\r
}\r
\r
.margin-x-neg-105 {\r
    margin-left: -.75rem\r
}\r
\r
.margin-right-neg-105,\r
.margin-x-neg-105 {\r
    margin-right: -.75rem\r
}\r
\r
.margin-left-neg-105 {\r
    margin-left: -.75rem\r
}\r
\r
.margin-x-neg-2 {\r
    margin-left: -1rem\r
}\r
\r
.margin-right-neg-2,\r
.margin-x-neg-2 {\r
    margin-right: -1rem\r
}\r
\r
.margin-left-neg-2 {\r
    margin-left: -1rem\r
}\r
\r
.margin-x-neg-205 {\r
    margin-left: -1.25rem\r
}\r
\r
.margin-right-neg-205,\r
.margin-x-neg-205 {\r
    margin-right: -1.25rem\r
}\r
\r
.margin-left-neg-205 {\r
    margin-left: -1.25rem\r
}\r
\r
.margin-x-neg-3 {\r
    margin-left: -1.5rem\r
}\r
\r
.margin-right-neg-3,\r
.margin-x-neg-3 {\r
    margin-right: -1.5rem\r
}\r
\r
.margin-left-neg-3 {\r
    margin-left: -1.5rem\r
}\r
\r
.margin-x-neg-4 {\r
    margin-left: -2rem\r
}\r
\r
.margin-right-neg-4,\r
.margin-x-neg-4 {\r
    margin-right: -2rem\r
}\r
\r
.margin-left-neg-4 {\r
    margin-left: -2rem\r
}\r
\r
.margin-x-neg-5 {\r
    margin-left: -2.5rem\r
}\r
\r
.margin-right-neg-5,\r
.margin-x-neg-5 {\r
    margin-right: -2.5rem\r
}\r
\r
.margin-left-neg-5 {\r
    margin-left: -2.5rem\r
}\r
\r
.margin-x-neg-6 {\r
    margin-left: -3rem\r
}\r
\r
.margin-right-neg-6,\r
.margin-x-neg-6 {\r
    margin-right: -3rem\r
}\r
\r
.margin-left-neg-6 {\r
    margin-left: -3rem\r
}\r
\r
.margin-x-neg-7 {\r
    margin-left: -3.5rem\r
}\r
\r
.margin-right-neg-7,\r
.margin-x-neg-7 {\r
    margin-right: -3.5rem\r
}\r
\r
.margin-left-neg-7 {\r
    margin-left: -3.5rem\r
}\r
\r
.margin-x-neg-8 {\r
    margin-left: -4rem\r
}\r
\r
.margin-right-neg-8,\r
.margin-x-neg-8 {\r
    margin-right: -4rem\r
}\r
\r
.margin-left-neg-8 {\r
    margin-left: -4rem\r
}\r
\r
.margin-x-neg-9 {\r
    margin-left: -4.5rem\r
}\r
\r
.margin-right-neg-9,\r
.margin-x-neg-9 {\r
    margin-right: -4.5rem\r
}\r
\r
.margin-left-neg-9 {\r
    margin-left: -4.5rem\r
}\r
\r
.margin-x-neg-10 {\r
    margin-left: -5rem\r
}\r
\r
.margin-right-neg-10,\r
.margin-x-neg-10 {\r
    margin-right: -5rem\r
}\r
\r
.margin-left-neg-10 {\r
    margin-left: -5rem\r
}\r
\r
.margin-x-neg-15 {\r
    margin-left: -7.5rem\r
}\r
\r
.margin-right-neg-15,\r
.margin-x-neg-15 {\r
    margin-right: -7.5rem\r
}\r
\r
.margin-left-neg-15 {\r
    margin-left: -7.5rem\r
}\r
\r
.margin-x-4 {\r
    margin-left: 2rem\r
}\r
\r
.margin-right-4,\r
.margin-x-4 {\r
    margin-right: 2rem\r
}\r
\r
.margin-left-4 {\r
    margin-left: 2rem\r
}\r
\r
.margin-x-5 {\r
    margin-left: 2.5rem\r
}\r
\r
.margin-right-5,\r
.margin-x-5 {\r
    margin-right: 2.5rem\r
}\r
\r
.margin-left-5 {\r
    margin-left: 2.5rem\r
}\r
\r
.margin-x-6 {\r
    margin-left: 3rem\r
}\r
\r
.margin-right-6,\r
.margin-x-6 {\r
    margin-right: 3rem\r
}\r
\r
.margin-left-6 {\r
    margin-left: 3rem\r
}\r
\r
.margin-x-7 {\r
    margin-left: 3.5rem\r
}\r
\r
.margin-right-7,\r
.margin-x-7 {\r
    margin-right: 3.5rem\r
}\r
\r
.margin-left-7 {\r
    margin-left: 3.5rem\r
}\r
\r
.margin-x-8 {\r
    margin-left: 4rem\r
}\r
\r
.margin-right-8,\r
.margin-x-8 {\r
    margin-right: 4rem\r
}\r
\r
.margin-left-8 {\r
    margin-left: 4rem\r
}\r
\r
.margin-x-9 {\r
    margin-left: 4.5rem\r
}\r
\r
.margin-right-9,\r
.margin-x-9 {\r
    margin-right: 4.5rem\r
}\r
\r
.margin-left-9 {\r
    margin-left: 4.5rem\r
}\r
\r
.margin-x-10 {\r
    margin-left: 5rem\r
}\r
\r
.margin-right-10,\r
.margin-x-10 {\r
    margin-right: 5rem\r
}\r
\r
.margin-left-10 {\r
    margin-left: 5rem\r
}\r
\r
.margin-x-15 {\r
    margin-left: 7.5rem\r
}\r
\r
.margin-right-15,\r
.margin-x-15 {\r
    margin-right: 7.5rem\r
}\r
\r
.margin-left-15 {\r
    margin-left: 7.5rem\r
}\r
\r
.margin-x-card {\r
    margin-left: 10rem\r
}\r
\r
.margin-right-card,\r
.margin-x-card {\r
    margin-right: 10rem\r
}\r
\r
.margin-left-card {\r
    margin-left: 10rem\r
}\r
\r
.margin-x-card-lg {\r
    margin-left: 15rem\r
}\r
\r
.margin-right-card-lg,\r
.margin-x-card-lg {\r
    margin-right: 15rem\r
}\r
\r
.margin-left-card-lg {\r
    margin-left: 15rem\r
}\r
\r
.margin-x-mobile {\r
    margin-left: 20rem\r
}\r
\r
.margin-right-mobile,\r
.margin-x-mobile {\r
    margin-right: 20rem\r
}\r
\r
.margin-left-mobile {\r
    margin-left: 20rem\r
}\r
\r
.margin-x-05em {\r
    margin-left: .5em\r
}\r
\r
.margin-right-05em,\r
.margin-x-05em {\r
    margin-right: .5em\r
}\r
\r
.margin-left-05em {\r
    margin-left: .5em\r
}\r
\r
.margin-x-1em {\r
    margin-left: 1em\r
}\r
\r
.margin-right-1em,\r
.margin-x-1em {\r
    margin-right: 1em\r
}\r
\r
.margin-left-1em {\r
    margin-left: 1em\r
}\r
\r
.margin-x-105em {\r
    margin-left: 1.5em\r
}\r
\r
.margin-right-105em,\r
.margin-x-105em {\r
    margin-right: 1.5em\r
}\r
\r
.margin-left-105em {\r
    margin-left: 1.5em\r
}\r
\r
.margin-x-2em {\r
    margin-left: 2em\r
}\r
\r
.margin-right-2em,\r
.margin-x-2em {\r
    margin-right: 2em\r
}\r
\r
.margin-left-2em {\r
    margin-left: 2em\r
}\r
\r
.margin-x-0 {\r
    margin-left: 0\r
}\r
\r
.margin-right-0,\r
.margin-x-0 {\r
    margin-right: 0\r
}\r
\r
.margin-left-0 {\r
    margin-left: 0\r
}\r
\r
.margin-x-auto {\r
    margin-left: auto\r
}\r
\r
.margin-right-auto,\r
.margin-x-auto {\r
    margin-right: auto\r
}\r
\r
.margin-left-auto {\r
    margin-left: auto\r
}\r
\r
.maxh-05 {\r
    max-height: .25rem\r
}\r
\r
.maxh-1 {\r
    max-height: .5rem\r
}\r
\r
.maxh-105 {\r
    max-height: .75rem\r
}\r
\r
.maxh-2 {\r
    max-height: 1rem\r
}\r
\r
.maxh-205 {\r
    max-height: 1.25rem\r
}\r
\r
.maxh-3 {\r
    max-height: 1.5rem\r
}\r
\r
.maxh-4 {\r
    max-height: 2rem\r
}\r
\r
.maxh-5 {\r
    max-height: 2.5rem\r
}\r
\r
.maxh-6 {\r
    max-height: 3rem\r
}\r
\r
.maxh-7 {\r
    max-height: 3.5rem\r
}\r
\r
.maxh-8 {\r
    max-height: 4rem\r
}\r
\r
.maxh-9 {\r
    max-height: 4.5rem\r
}\r
\r
.maxh-10 {\r
    max-height: 5rem\r
}\r
\r
.maxh-15 {\r
    max-height: 7.5rem\r
}\r
\r
.maxh-card {\r
    max-height: 10rem\r
}\r
\r
.maxh-card-lg {\r
    max-height: 15rem\r
}\r
\r
.maxh-mobile {\r
    max-height: 20rem\r
}\r
\r
.maxh-mobile-lg {\r
    max-height: 30rem\r
}\r
\r
.maxh-tablet {\r
    max-height: 40rem\r
}\r
\r
.maxh-tablet-lg {\r
    max-height: 55rem\r
}\r
\r
.maxh-none {\r
    max-height: none\r
}\r
\r
.maxh-viewport {\r
    max-height: 100vh\r
}\r
\r
.maxw-05 {\r
    max-width: .25rem\r
}\r
\r
.maxw-1 {\r
    max-width: .5rem\r
}\r
\r
.maxw-105 {\r
    max-width: .75rem\r
}\r
\r
.maxw-2 {\r
    max-width: 1rem\r
}\r
\r
.maxw-205 {\r
    max-width: 1.25rem\r
}\r
\r
.maxw-3 {\r
    max-width: 1.5rem\r
}\r
\r
.maxw-4 {\r
    max-width: 2rem\r
}\r
\r
.maxw-5 {\r
    max-width: 2.5rem\r
}\r
\r
.maxw-6 {\r
    max-width: 3rem\r
}\r
\r
.maxw-7 {\r
    max-width: 3.5rem\r
}\r
\r
.maxw-8 {\r
    max-width: 4rem\r
}\r
\r
.maxw-9 {\r
    max-width: 4.5rem\r
}\r
\r
.maxw-10 {\r
    max-width: 5rem\r
}\r
\r
.maxw-15 {\r
    max-width: 7.5rem\r
}\r
\r
.maxw-card {\r
    max-width: 10rem\r
}\r
\r
.maxw-card-lg {\r
    max-width: 15rem\r
}\r
\r
.maxw-mobile {\r
    max-width: 20rem\r
}\r
\r
.maxw-mobile-lg {\r
    max-width: 30rem\r
}\r
\r
.maxw-tablet {\r
    max-width: 40rem\r
}\r
\r
.maxw-tablet-lg {\r
    max-width: 55rem\r
}\r
\r
.maxw-desktop {\r
    max-width: 64rem\r
}\r
\r
.maxw-desktop-lg {\r
    max-width: 75rem\r
}\r
\r
.maxw-widescreen {\r
    max-width: 87.5rem\r
}\r
\r
.maxw-none {\r
    max-width: none\r
}\r
\r
.maxw-full {\r
    max-width: 100%\r
}\r
\r
.measure-1 {\r
    max-width: 44ex\r
}\r
\r
.measure-2 {\r
    max-width: 60ex\r
}\r
\r
.measure-3 {\r
    max-width: 64ex\r
}\r
\r
.measure-4 {\r
    max-width: 68ex\r
}\r
\r
.measure-5 {\r
    max-width: 72ex\r
}\r
\r
.measure-6 {\r
    max-width: 88ex\r
}\r
\r
.measure-none {\r
    max-width: none\r
}\r
\r
.minh-1px {\r
    min-height: 1px\r
}\r
\r
.minh-2px {\r
    min-height: 2px\r
}\r
\r
.minh-05 {\r
    min-height: .25rem\r
}\r
\r
.minh-1 {\r
    min-height: .5rem\r
}\r
\r
.minh-105 {\r
    min-height: .75rem\r
}\r
\r
.minh-2 {\r
    min-height: 1rem\r
}\r
\r
.minh-205 {\r
    min-height: 1.25rem\r
}\r
\r
.minh-3 {\r
    min-height: 1.5rem\r
}\r
\r
.minh-4 {\r
    min-height: 2rem\r
}\r
\r
.minh-5 {\r
    min-height: 2.5rem\r
}\r
\r
.minh-6 {\r
    min-height: 3rem\r
}\r
\r
.minh-7 {\r
    min-height: 3.5rem\r
}\r
\r
.minh-8 {\r
    min-height: 4rem\r
}\r
\r
.minh-9 {\r
    min-height: 4.5rem\r
}\r
\r
.minh-10 {\r
    min-height: 5rem\r
}\r
\r
.minh-15 {\r
    min-height: 7.5rem\r
}\r
\r
.minh-card {\r
    min-height: 10rem\r
}\r
\r
.minh-card-lg {\r
    min-height: 15rem\r
}\r
\r
.minh-mobile {\r
    min-height: 20rem\r
}\r
\r
.minh-mobile-lg {\r
    min-height: 30rem\r
}\r
\r
.minh-tablet {\r
    min-height: 40rem\r
}\r
\r
.minh-tablet-lg {\r
    min-height: 55rem\r
}\r
\r
.minh-0 {\r
    min-height: 0\r
}\r
\r
.minh-full {\r
    min-height: 100%\r
}\r
\r
.minh-viewport {\r
    min-height: 100vh\r
}\r
\r
.minw-05 {\r
    min-width: .25rem\r
}\r
\r
.minw-1 {\r
    min-width: .5rem\r
}\r
\r
.minw-105 {\r
    min-width: .75rem\r
}\r
\r
.minw-2 {\r
    min-width: 1rem\r
}\r
\r
.minw-205 {\r
    min-width: 1.25rem\r
}\r
\r
.minw-3 {\r
    min-width: 1.5rem\r
}\r
\r
.minw-4 {\r
    min-width: 2rem\r
}\r
\r
.minw-5 {\r
    min-width: 2.5rem\r
}\r
\r
.minw-6 {\r
    min-width: 3rem\r
}\r
\r
.minw-7 {\r
    min-width: 3.5rem\r
}\r
\r
.minw-8 {\r
    min-width: 4rem\r
}\r
\r
.minw-9 {\r
    min-width: 4.5rem\r
}\r
\r
.minw-10 {\r
    min-width: 5rem\r
}\r
\r
.minw-15 {\r
    min-width: 7.5rem\r
}\r
\r
.minw-0 {\r
    min-width: 0\r
}\r
\r
.opacity-0 {\r
    opacity: 0\r
}\r
\r
.opacity-10 {\r
    opacity: .1\r
}\r
\r
.opacity-20 {\r
    opacity: .2\r
}\r
\r
.opacity-30 {\r
    opacity: .3\r
}\r
\r
.opacity-40 {\r
    opacity: .4\r
}\r
\r
.opacity-50 {\r
    opacity: .5\r
}\r
\r
.opacity-60 {\r
    opacity: .6\r
}\r
\r
.opacity-70 {\r
    opacity: .7\r
}\r
\r
.opacity-80 {\r
    opacity: .8\r
}\r
\r
.opacity-90 {\r
    opacity: .9\r
}\r
\r
.opacity-100 {\r
    opacity: 1\r
}\r
\r
.order-first {\r
    order: -1\r
}\r
\r
.order-last {\r
    order: 999\r
}\r
\r
.order-initial {\r
    order: initial\r
}\r
\r
.order-0 {\r
    order: 0\r
}\r
\r
.order-1 {\r
    order: 1\r
}\r
\r
.order-2 {\r
    order: 2\r
}\r
\r
.order-3 {\r
    order: 3\r
}\r
\r
.order-4 {\r
    order: 4\r
}\r
\r
.order-5 {\r
    order: 5\r
}\r
\r
.order-6 {\r
    order: 6\r
}\r
\r
.order-7 {\r
    order: 7\r
}\r
\r
.order-8 {\r
    order: 8\r
}\r
\r
.order-9 {\r
    order: 9\r
}\r
\r
.order-10 {\r
    order: 10\r
}\r
\r
.order-11 {\r
    order: 11\r
}\r
\r
.outline-1px {\r
    outline: 1px solid\r
}\r
\r
.outline-2px {\r
    outline: 2px solid\r
}\r
\r
.outline-0 {\r
    outline: 0 solid\r
}\r
\r
.outline-05 {\r
    outline: .25rem solid\r
}\r
\r
.outline-transparent {\r
    outline-color: transparent\r
}\r
\r
.outline-black {\r
    outline-color: #000\r
}\r
\r
.outline-white {\r
    outline-color: #fff\r
}\r
\r
.outline-red {\r
    outline-color: #e52207\r
}\r
\r
.outline-orange {\r
    outline-color: #e66f0e\r
}\r
\r
.outline-gold {\r
    outline-color: #ffbe2e\r
}\r
\r
.outline-yellow {\r
    outline-color: #fee685\r
}\r
\r
.outline-green {\r
    outline-color: #538200\r
}\r
\r
.outline-mint {\r
    outline-color: #04c585\r
}\r
\r
.outline-cyan {\r
    outline-color: #009ec1\r
}\r
\r
.outline-blue {\r
    outline-color: #0076d6\r
}\r
\r
.outline-indigo {\r
    outline-color: #676cc8\r
}\r
\r
.outline-violet {\r
    outline-color: #8168b3\r
}\r
\r
.outline-magenta {\r
    outline-color: #d72d79\r
}\r
\r
.outline-gray-5 {\r
    outline-color: #f0f0f0\r
}\r
\r
.outline-gray-10 {\r
    outline-color: #e6e6e6\r
}\r
\r
.outline-gray-30 {\r
    outline-color: #adadad\r
}\r
\r
.outline-gray-50 {\r
    outline-color: #757575\r
}\r
\r
.outline-gray-70 {\r
    outline-color: #454545\r
}\r
\r
.outline-gray-90 {\r
    outline-color: #1b1b1b\r
}\r
\r
.outline-base-lightest {\r
    outline-color: #f0f0f0\r
}\r
\r
.outline-base-lighter {\r
    outline-color: #dfe1e2\r
}\r
\r
.outline-base-light {\r
    outline-color: #a9aeb1\r
}\r
\r
.outline-base {\r
    outline-color: #71767a\r
}\r
\r
.outline-base-dark {\r
    outline-color: #565c65\r
}\r
\r
.outline-base-darker {\r
    outline-color: #3d4551\r
}\r
\r
.outline-base-darkest,\r
.outline-ink {\r
    outline-color: #1b1b1b\r
}\r
\r
.outline-primary-lighter {\r
    outline-color: #d9e8f6\r
}\r
\r
.outline-primary-light {\r
    outline-color: #73b3e7\r
}\r
\r
.outline-primary {\r
    outline-color: #005ea2\r
}\r
\r
.outline-primary-vivid {\r
    outline-color: #0050d8\r
}\r
\r
.outline-primary-dark {\r
    outline-color: #1a4480\r
}\r
\r
.outline-primary-darker {\r
    outline-color: #162e51\r
}\r
\r
.outline-secondary-lighter {\r
    outline-color: #f3e1e4\r
}\r
\r
.outline-secondary-light {\r
    outline-color: #f2938c\r
}\r
\r
.outline-secondary {\r
    outline-color: #d83933\r
}\r
\r
.outline-secondary-vivid {\r
    outline-color: #e41d3d\r
}\r
\r
.outline-secondary-dark {\r
    outline-color: #b50909\r
}\r
\r
.outline-secondary-darker {\r
    outline-color: #8b0a03\r
}\r
\r
.outline-accent-warm-darker {\r
    outline-color: #775540\r
}\r
\r
.outline-accent-warm-dark {\r
    outline-color: #c05600\r
}\r
\r
.outline-accent-warm {\r
    outline-color: #fa9441\r
}\r
\r
.outline-accent-warm-light {\r
    outline-color: #ffbc78\r
}\r
\r
.outline-accent-warm-lighter {\r
    outline-color: #f2e4d4\r
}\r
\r
.outline-accent-cool-darker {\r
    outline-color: #07648d\r
}\r
\r
.outline-accent-cool-dark {\r
    outline-color: #28a0cb\r
}\r
\r
.outline-accent-cool {\r
    outline-color: #00bde3\r
}\r
\r
.outline-accent-cool-light {\r
    outline-color: #97d4ea\r
}\r
\r
.outline-accent-cool-lighter {\r
    outline-color: #e1f3f8\r
}\r
\r
.outline-error-lighter {\r
    outline-color: #f4e3db\r
}\r
\r
.outline-error-light {\r
    outline-color: #f39268\r
}\r
\r
.outline-error {\r
    outline-color: #d54309\r
}\r
\r
.outline-error-dark {\r
    outline-color: #b50909\r
}\r
\r
.outline-error-darker {\r
    outline-color: #6f3331\r
}\r
\r
.outline-warning-lighter {\r
    outline-color: #faf3d1\r
}\r
\r
.outline-warning-light {\r
    outline-color: #fee685\r
}\r
\r
.outline-warning {\r
    outline-color: #ffbe2e\r
}\r
\r
.outline-warning-dark {\r
    outline-color: #e5a000\r
}\r
\r
.outline-warning-darker {\r
    outline-color: #936f38\r
}\r
\r
.outline-success-lighter {\r
    outline-color: #ecf3ec\r
}\r
\r
.outline-success-light {\r
    outline-color: #70e17b\r
}\r
\r
.outline-success {\r
    outline-color: #00a91c\r
}\r
\r
.outline-success-dark {\r
    outline-color: #008817\r
}\r
\r
.outline-success-darker {\r
    outline-color: #216e1f\r
}\r
\r
.outline-info-lighter {\r
    outline-color: #e7f6f8\r
}\r
\r
.outline-info-light {\r
    outline-color: #99deea\r
}\r
\r
.outline-info {\r
    outline-color: #00bde3\r
}\r
\r
.outline-info-dark {\r
    outline-color: #009ec1\r
}\r
\r
.outline-info-darker {\r
    outline-color: #2e6276\r
}\r
\r
.outline-disabled-lighter {\r
    outline-color: #c9c9c9\r
}\r
\r
.outline-disabled-light {\r
    outline-color: #919191\r
}\r
\r
.outline-disabled {\r
    outline-color: #757575\r
}\r
\r
.outline-disabled-dark {\r
    outline-color: #454545\r
}\r
\r
.outline-disabled-darker {\r
    outline-color: #1b1b1b\r
}\r
\r
.outline-emergency {\r
    outline-color: #9c3d10\r
}\r
\r
.outline-emergency-dark {\r
    outline-color: #332d29\r
}\r
\r
.overflow-hidden {\r
    overflow: hidden\r
}\r
\r
.overflow-y-hidden {\r
    overflow-y: hidden\r
}\r
\r
.overflow-x-hidden {\r
    overflow-x: hidden\r
}\r
\r
.overflow-scroll {\r
    overflow: scroll\r
}\r
\r
.overflow-y-scroll {\r
    overflow-y: scroll\r
}\r
\r
.overflow-x-scroll {\r
    overflow-x: scroll\r
}\r
\r
.overflow-auto {\r
    overflow: auto\r
}\r
\r
.overflow-y-auto {\r
    overflow-y: auto\r
}\r
\r
.overflow-x-auto {\r
    overflow-x: auto\r
}\r
\r
.overflow-visible {\r
    overflow: visible\r
}\r
\r
.overflow-y-visible {\r
    overflow-y: visible\r
}\r
\r
.overflow-x-visible {\r
    overflow-x: visible\r
}\r
\r
.padding-1px {\r
    padding: 1px\r
}\r
\r
.padding-y-1px {\r
    padding-top: 1px;\r
    padding-bottom: 1px\r
}\r
\r
.padding-x-1px {\r
    padding-left: 1px;\r
    padding-right: 1px\r
}\r
\r
.padding-top-1px {\r
    padding-top: 1px\r
}\r
\r
.padding-right-1px {\r
    padding-right: 1px\r
}\r
\r
.padding-bottom-1px {\r
    padding-bottom: 1px\r
}\r
\r
.padding-left-1px {\r
    padding-left: 1px\r
}\r
\r
.padding-2px {\r
    padding: 2px\r
}\r
\r
.padding-y-2px {\r
    padding-top: 2px;\r
    padding-bottom: 2px\r
}\r
\r
.padding-x-2px {\r
    padding-left: 2px;\r
    padding-right: 2px\r
}\r
\r
.padding-top-2px {\r
    padding-top: 2px\r
}\r
\r
.padding-right-2px {\r
    padding-right: 2px\r
}\r
\r
.padding-bottom-2px {\r
    padding-bottom: 2px\r
}\r
\r
.padding-left-2px {\r
    padding-left: 2px\r
}\r
\r
.padding-05 {\r
    padding: .25rem\r
}\r
\r
.padding-y-05 {\r
    padding-top: .25rem;\r
    padding-bottom: .25rem\r
}\r
\r
.padding-x-05 {\r
    padding-left: .25rem;\r
    padding-right: .25rem\r
}\r
\r
.padding-top-05 {\r
    padding-top: .25rem\r
}\r
\r
.padding-right-05 {\r
    padding-right: .25rem\r
}\r
\r
.padding-bottom-05 {\r
    padding-bottom: .25rem\r
}\r
\r
.padding-left-05 {\r
    padding-left: .25rem\r
}\r
\r
.padding-1 {\r
    padding: .5rem\r
}\r
\r
.padding-y-1 {\r
    padding-top: .5rem;\r
    padding-bottom: .5rem\r
}\r
\r
.padding-x-1 {\r
    padding-left: .5rem;\r
    padding-right: .5rem\r
}\r
\r
.padding-top-1 {\r
    padding-top: .5rem\r
}\r
\r
.padding-right-1 {\r
    padding-right: .5rem\r
}\r
\r
.padding-bottom-1 {\r
    padding-bottom: .5rem\r
}\r
\r
.padding-left-1 {\r
    padding-left: .5rem\r
}\r
\r
.padding-105 {\r
    padding: .75rem\r
}\r
\r
.padding-y-105 {\r
    padding-top: .75rem;\r
    padding-bottom: .75rem\r
}\r
\r
.padding-x-105 {\r
    padding-left: .75rem;\r
    padding-right: .75rem\r
}\r
\r
.padding-top-105 {\r
    padding-top: .75rem\r
}\r
\r
.padding-right-105 {\r
    padding-right: .75rem\r
}\r
\r
.padding-bottom-105 {\r
    padding-bottom: .75rem\r
}\r
\r
.padding-left-105 {\r
    padding-left: .75rem\r
}\r
\r
.padding-2 {\r
    padding: 1rem\r
}\r
\r
.padding-y-2 {\r
    padding-top: 1rem;\r
    padding-bottom: 1rem\r
}\r
\r
.padding-x-2 {\r
    padding-left: 1rem;\r
    padding-right: 1rem\r
}\r
\r
.padding-top-2 {\r
    padding-top: 1rem\r
}\r
\r
.padding-right-2 {\r
    padding-right: 1rem\r
}\r
\r
.padding-bottom-2 {\r
    padding-bottom: 1rem\r
}\r
\r
.padding-left-2 {\r
    padding-left: 1rem\r
}\r
\r
.padding-205 {\r
    padding: 1.25rem\r
}\r
\r
.padding-y-205 {\r
    padding-top: 1.25rem;\r
    padding-bottom: 1.25rem\r
}\r
\r
.padding-x-205 {\r
    padding-left: 1.25rem;\r
    padding-right: 1.25rem\r
}\r
\r
.padding-top-205 {\r
    padding-top: 1.25rem\r
}\r
\r
.padding-right-205 {\r
    padding-right: 1.25rem\r
}\r
\r
.padding-bottom-205 {\r
    padding-bottom: 1.25rem\r
}\r
\r
.padding-left-205 {\r
    padding-left: 1.25rem\r
}\r
\r
.padding-3 {\r
    padding: 1.5rem\r
}\r
\r
.padding-y-3 {\r
    padding-top: 1.5rem;\r
    padding-bottom: 1.5rem\r
}\r
\r
.padding-x-3 {\r
    padding-left: 1.5rem;\r
    padding-right: 1.5rem\r
}\r
\r
.padding-top-3 {\r
    padding-top: 1.5rem\r
}\r
\r
.padding-right-3 {\r
    padding-right: 1.5rem\r
}\r
\r
.padding-bottom-3 {\r
    padding-bottom: 1.5rem\r
}\r
\r
.padding-left-3 {\r
    padding-left: 1.5rem\r
}\r
\r
.padding-4 {\r
    padding: 2rem\r
}\r
\r
.padding-y-4 {\r
    padding-top: 2rem;\r
    padding-bottom: 2rem\r
}\r
\r
.padding-x-4 {\r
    padding-left: 2rem;\r
    padding-right: 2rem\r
}\r
\r
.padding-top-4 {\r
    padding-top: 2rem\r
}\r
\r
.padding-right-4 {\r
    padding-right: 2rem\r
}\r
\r
.padding-bottom-4 {\r
    padding-bottom: 2rem\r
}\r
\r
.padding-left-4 {\r
    padding-left: 2rem\r
}\r
\r
.padding-5 {\r
    padding: 2.5rem\r
}\r
\r
.padding-y-5 {\r
    padding-top: 2.5rem;\r
    padding-bottom: 2.5rem\r
}\r
\r
.padding-x-5 {\r
    padding-left: 2.5rem;\r
    padding-right: 2.5rem\r
}\r
\r
.padding-top-5 {\r
    padding-top: 2.5rem\r
}\r
\r
.padding-right-5 {\r
    padding-right: 2.5rem\r
}\r
\r
.padding-bottom-5 {\r
    padding-bottom: 2.5rem\r
}\r
\r
.padding-left-5 {\r
    padding-left: 2.5rem\r
}\r
\r
.padding-6 {\r
    padding: 3rem\r
}\r
\r
.padding-y-6 {\r
    padding-top: 3rem;\r
    padding-bottom: 3rem\r
}\r
\r
.padding-x-6 {\r
    padding-left: 3rem;\r
    padding-right: 3rem\r
}\r
\r
.padding-top-6 {\r
    padding-top: 3rem\r
}\r
\r
.padding-right-6 {\r
    padding-right: 3rem\r
}\r
\r
.padding-bottom-6 {\r
    padding-bottom: 3rem\r
}\r
\r
.padding-left-6 {\r
    padding-left: 3rem\r
}\r
\r
.padding-7 {\r
    padding: 3.5rem\r
}\r
\r
.padding-y-7 {\r
    padding-top: 3.5rem;\r
    padding-bottom: 3.5rem\r
}\r
\r
.padding-x-7 {\r
    padding-left: 3.5rem;\r
    padding-right: 3.5rem\r
}\r
\r
.padding-top-7 {\r
    padding-top: 3.5rem\r
}\r
\r
.padding-right-7 {\r
    padding-right: 3.5rem\r
}\r
\r
.padding-bottom-7 {\r
    padding-bottom: 3.5rem\r
}\r
\r
.padding-left-7 {\r
    padding-left: 3.5rem\r
}\r
\r
.padding-8 {\r
    padding: 4rem\r
}\r
\r
.padding-y-8 {\r
    padding-top: 4rem;\r
    padding-bottom: 4rem\r
}\r
\r
.padding-x-8 {\r
    padding-left: 4rem;\r
    padding-right: 4rem\r
}\r
\r
.padding-top-8 {\r
    padding-top: 4rem\r
}\r
\r
.padding-right-8 {\r
    padding-right: 4rem\r
}\r
\r
.padding-bottom-8 {\r
    padding-bottom: 4rem\r
}\r
\r
.padding-left-8 {\r
    padding-left: 4rem\r
}\r
\r
.padding-9 {\r
    padding: 4.5rem\r
}\r
\r
.padding-y-9 {\r
    padding-top: 4.5rem;\r
    padding-bottom: 4.5rem\r
}\r
\r
.padding-x-9 {\r
    padding-left: 4.5rem;\r
    padding-right: 4.5rem\r
}\r
\r
.padding-top-9 {\r
    padding-top: 4.5rem\r
}\r
\r
.padding-right-9 {\r
    padding-right: 4.5rem\r
}\r
\r
.padding-bottom-9 {\r
    padding-bottom: 4.5rem\r
}\r
\r
.padding-left-9 {\r
    padding-left: 4.5rem\r
}\r
\r
.padding-10 {\r
    padding: 5rem\r
}\r
\r
.padding-y-10 {\r
    padding-top: 5rem;\r
    padding-bottom: 5rem\r
}\r
\r
.padding-x-10 {\r
    padding-left: 5rem;\r
    padding-right: 5rem\r
}\r
\r
.padding-top-10 {\r
    padding-top: 5rem\r
}\r
\r
.padding-right-10 {\r
    padding-right: 5rem\r
}\r
\r
.padding-bottom-10 {\r
    padding-bottom: 5rem\r
}\r
\r
.padding-left-10 {\r
    padding-left: 5rem\r
}\r
\r
.padding-15 {\r
    padding: 7.5rem\r
}\r
\r
.padding-y-15 {\r
    padding-top: 7.5rem;\r
    padding-bottom: 7.5rem\r
}\r
\r
.padding-x-15 {\r
    padding-left: 7.5rem;\r
    padding-right: 7.5rem\r
}\r
\r
.padding-top-15 {\r
    padding-top: 7.5rem\r
}\r
\r
.padding-right-15 {\r
    padding-right: 7.5rem\r
}\r
\r
.padding-bottom-15 {\r
    padding-bottom: 7.5rem\r
}\r
\r
.padding-left-15 {\r
    padding-left: 7.5rem\r
}\r
\r
.padding-0 {\r
    padding: 0\r
}\r
\r
.padding-y-0 {\r
    padding-top: 0;\r
    padding-bottom: 0\r
}\r
\r
.padding-x-0 {\r
    padding-left: 0;\r
    padding-right: 0\r
}\r
\r
.padding-top-0 {\r
    padding-top: 0\r
}\r
\r
.padding-right-0 {\r
    padding-right: 0\r
}\r
\r
.padding-bottom-0 {\r
    padding-bottom: 0\r
}\r
\r
.padding-left-0 {\r
    padding-left: 0\r
}\r
\r
.pin-all {\r
    bottom: 0;\r
    top: 0\r
}\r
\r
.pin-all,\r
.pin-x {\r
    left: 0;\r
    right: 0;\r
    position: absolute\r
}\r
\r
.pin-y {\r
    top: 0\r
}\r
\r
.pin-bottom,\r
.pin-y {\r
    bottom: 0;\r
    position: absolute\r
}\r
\r
.pin-left {\r
    left: 0;\r
    position: absolute\r
}\r
\r
.pin-right {\r
    right: 0;\r
    position: absolute\r
}\r
\r
.pin-top {\r
    top: 0;\r
    position: absolute\r
}\r
\r
.pin-none {\r
    bottom: auto;\r
    left: auto;\r
    right: auto;\r
    top: auto;\r
    position: static\r
}\r
\r
.position-absolute {\r
    position: absolute\r
}\r
\r
.position-fixed {\r
    position: fixed\r
}\r
\r
.position-relative {\r
    position: relative\r
}\r
\r
.position-static {\r
    position: static\r
}\r
\r
.position-sticky {\r
    position: sticky\r
}\r
\r
.right-1px {\r
    right: 1px\r
}\r
\r
.right-2px {\r
    right: 2px\r
}\r
\r
.right-05 {\r
    right: .25rem\r
}\r
\r
.right-1 {\r
    right: .5rem\r
}\r
\r
.right-105 {\r
    right: .75rem\r
}\r
\r
.right-2 {\r
    right: 1rem\r
}\r
\r
.right-205 {\r
    right: 1.25rem\r
}\r
\r
.right-3 {\r
    right: 1.5rem\r
}\r
\r
.right-neg-1px {\r
    right: -1px\r
}\r
\r
.right-neg-2px {\r
    right: -2px\r
}\r
\r
.right-neg-05 {\r
    right: -.25rem\r
}\r
\r
.right-neg-1 {\r
    right: -.5rem\r
}\r
\r
.right-neg-105 {\r
    right: -.75rem\r
}\r
\r
.right-neg-2 {\r
    right: -1rem\r
}\r
\r
.right-neg-205 {\r
    right: -1.25rem\r
}\r
\r
.right-neg-3 {\r
    right: -1.5rem\r
}\r
\r
.right-0 {\r
    right: 0\r
}\r
\r
.right-auto {\r
    right: auto\r
}\r
\r
.right-full {\r
    right: 100%\r
}\r
\r
.square-1px {\r
    height: 1px;\r
    width: 1px\r
}\r
\r
.square-2px {\r
    height: 2px;\r
    width: 2px\r
}\r
\r
.square-05 {\r
    height: .25rem;\r
    width: .25rem\r
}\r
\r
.square-1 {\r
    height: .5rem;\r
    width: .5rem\r
}\r
\r
.square-105 {\r
    height: .75rem;\r
    width: .75rem\r
}\r
\r
.square-2 {\r
    height: 1rem;\r
    width: 1rem\r
}\r
\r
.square-205 {\r
    height: 1.25rem;\r
    width: 1.25rem\r
}\r
\r
.square-3 {\r
    height: 1.5rem;\r
    width: 1.5rem\r
}\r
\r
.square-4 {\r
    height: 2rem;\r
    width: 2rem\r
}\r
\r
.square-5 {\r
    height: 2.5rem;\r
    width: 2.5rem\r
}\r
\r
.square-6 {\r
    height: 3rem;\r
    width: 3rem\r
}\r
\r
.square-7 {\r
    height: 3.5rem;\r
    width: 3.5rem\r
}\r
\r
.square-8 {\r
    height: 4rem;\r
    width: 4rem\r
}\r
\r
.square-9 {\r
    height: 4.5rem;\r
    width: 4.5rem\r
}\r
\r
.square-10 {\r
    height: 5rem;\r
    width: 5rem\r
}\r
\r
.square-15 {\r
    height: 7.5rem;\r
    width: 7.5rem\r
}\r
\r
.square-card {\r
    height: 10rem;\r
    width: 10rem\r
}\r
\r
.square-card-lg {\r
    height: 15rem;\r
    width: 15rem\r
}\r
\r
.square-mobile {\r
    height: 20rem;\r
    width: 20rem\r
}\r
\r
.text-center {\r
    text-align: center\r
}\r
\r
.text-left {\r
    text-align: left\r
}\r
\r
.text-justify {\r
    text-align: justify\r
}\r
\r
.text-right {\r
    text-align: right\r
}\r
\r
.hover\\:text-strike:hover,\r
.text-strike {\r
    text-decoration: line-through\r
}\r
\r
.hover\\:text-underline:hover,\r
.text-underline {\r
    text-decoration: underline\r
}\r
\r
.hover\\:text-no-strike:hover,\r
.hover\\:text-no-underline:hover,\r
.text-no-strike,\r
.text-no-underline {\r
    text-decoration: none\r
}\r
\r
.hover\\:underline-red:hover,\r
.underline-red {\r
    text-decoration-color: #e52207\r
}\r
\r
.hover\\:underline-orange:hover,\r
.underline-orange {\r
    text-decoration-color: #e66f0e\r
}\r
\r
.hover\\:underline-gold:hover,\r
.underline-gold {\r
    text-decoration-color: #ffbe2e\r
}\r
\r
.hover\\:underline-yellow:hover,\r
.underline-yellow {\r
    text-decoration-color: #fee685\r
}\r
\r
.hover\\:underline-green:hover,\r
.underline-green {\r
    text-decoration-color: #538200\r
}\r
\r
.hover\\:underline-mint:hover,\r
.underline-mint {\r
    text-decoration-color: #04c585\r
}\r
\r
.hover\\:underline-cyan:hover,\r
.underline-cyan {\r
    text-decoration-color: #009ec1\r
}\r
\r
.hover\\:underline-blue:hover,\r
.underline-blue {\r
    text-decoration-color: #0076d6\r
}\r
\r
.hover\\:underline-indigo:hover,\r
.underline-indigo {\r
    text-decoration-color: #676cc8\r
}\r
\r
.hover\\:underline-violet:hover,\r
.underline-violet {\r
    text-decoration-color: #8168b3\r
}\r
\r
.hover\\:underline-magenta:hover,\r
.underline-magenta {\r
    text-decoration-color: #d72d79\r
}\r
\r
.hover\\:underline-gray-5:hover,\r
.underline-gray-5 {\r
    text-decoration-color: #f0f0f0\r
}\r
\r
.hover\\:underline-gray-10:hover,\r
.underline-gray-10 {\r
    text-decoration-color: #e6e6e6\r
}\r
\r
.hover\\:underline-gray-30:hover,\r
.underline-gray-30 {\r
    text-decoration-color: #adadad\r
}\r
\r
.hover\\:underline-gray-50:hover,\r
.underline-gray-50 {\r
    text-decoration-color: #757575\r
}\r
\r
.hover\\:underline-gray-70:hover,\r
.underline-gray-70 {\r
    text-decoration-color: #454545\r
}\r
\r
.hover\\:underline-gray-90:hover,\r
.underline-gray-90 {\r
    text-decoration-color: #1b1b1b\r
}\r
\r
.hover\\:underline-base-lightest:hover,\r
.underline-base-lightest {\r
    text-decoration-color: #f0f0f0\r
}\r
\r
.hover\\:underline-base-lighter:hover,\r
.underline-base-lighter {\r
    text-decoration-color: #dfe1e2\r
}\r
\r
.hover\\:underline-base-light:hover,\r
.underline-base-light {\r
    text-decoration-color: #a9aeb1\r
}\r
\r
.hover\\:underline-base:hover,\r
.underline-base {\r
    text-decoration-color: #71767a\r
}\r
\r
.hover\\:underline-base-dark:hover,\r
.underline-base-dark {\r
    text-decoration-color: #565c65\r
}\r
\r
.hover\\:underline-base-darker:hover,\r
.underline-base-darker {\r
    text-decoration-color: #3d4551\r
}\r
\r
.hover\\:underline-base-darkest:hover,\r
.hover\\:underline-ink:hover,\r
.underline-base-darkest,\r
.underline-ink {\r
    text-decoration-color: #1b1b1b\r
}\r
\r
.hover\\:underline-primary-lighter:hover,\r
.underline-primary-lighter {\r
    text-decoration-color: #d9e8f6\r
}\r
\r
.hover\\:underline-primary-light:hover,\r
.underline-primary-light {\r
    text-decoration-color: #73b3e7\r
}\r
\r
.hover\\:underline-primary:hover,\r
.underline-primary {\r
    text-decoration-color: #005ea2\r
}\r
\r
.hover\\:underline-primary-vivid:hover,\r
.underline-primary-vivid {\r
    text-decoration-color: #0050d8\r
}\r
\r
.hover\\:underline-primary-dark:hover,\r
.underline-primary-dark {\r
    text-decoration-color: #1a4480\r
}\r
\r
.hover\\:underline-primary-darker:hover,\r
.underline-primary-darker {\r
    text-decoration-color: #162e51\r
}\r
\r
.hover\\:underline-secondary-lighter:hover,\r
.underline-secondary-lighter {\r
    text-decoration-color: #f3e1e4\r
}\r
\r
.hover\\:underline-secondary-light:hover,\r
.underline-secondary-light {\r
    text-decoration-color: #f2938c\r
}\r
\r
.hover\\:underline-secondary:hover,\r
.underline-secondary {\r
    text-decoration-color: #d83933\r
}\r
\r
.hover\\:underline-secondary-vivid:hover,\r
.underline-secondary-vivid {\r
    text-decoration-color: #e41d3d\r
}\r
\r
.hover\\:underline-secondary-dark:hover,\r
.underline-secondary-dark {\r
    text-decoration-color: #b50909\r
}\r
\r
.hover\\:underline-secondary-darker:hover,\r
.underline-secondary-darker {\r
    text-decoration-color: #8b0a03\r
}\r
\r
.hover\\:underline-accent-warm-darker:hover,\r
.underline-accent-warm-darker {\r
    text-decoration-color: #775540\r
}\r
\r
.hover\\:underline-accent-warm-dark:hover,\r
.underline-accent-warm-dark {\r
    text-decoration-color: #c05600\r
}\r
\r
.hover\\:underline-accent-warm:hover,\r
.underline-accent-warm {\r
    text-decoration-color: #fa9441\r
}\r
\r
.hover\\:underline-accent-warm-light:hover,\r
.underline-accent-warm-light {\r
    text-decoration-color: #ffbc78\r
}\r
\r
.hover\\:underline-accent-warm-lighter:hover,\r
.underline-accent-warm-lighter {\r
    text-decoration-color: #f2e4d4\r
}\r
\r
.hover\\:underline-accent-cool-darker:hover,\r
.underline-accent-cool-darker {\r
    text-decoration-color: #07648d\r
}\r
\r
.hover\\:underline-accent-cool-dark:hover,\r
.underline-accent-cool-dark {\r
    text-decoration-color: #28a0cb\r
}\r
\r
.hover\\:underline-accent-cool:hover,\r
.underline-accent-cool {\r
    text-decoration-color: #00bde3\r
}\r
\r
.hover\\:underline-accent-cool-light:hover,\r
.underline-accent-cool-light {\r
    text-decoration-color: #97d4ea\r
}\r
\r
.hover\\:underline-accent-cool-lighter:hover,\r
.underline-accent-cool-lighter {\r
    text-decoration-color: #e1f3f8\r
}\r
\r
.hover\\:underline-error-lighter:hover,\r
.underline-error-lighter {\r
    text-decoration-color: #f4e3db\r
}\r
\r
.hover\\:underline-error-light:hover,\r
.underline-error-light {\r
    text-decoration-color: #f39268\r
}\r
\r
.hover\\:underline-error:hover,\r
.underline-error {\r
    text-decoration-color: #d54309\r
}\r
\r
.hover\\:underline-error-dark:hover,\r
.underline-error-dark {\r
    text-decoration-color: #b50909\r
}\r
\r
.hover\\:underline-error-darker:hover,\r
.underline-error-darker {\r
    text-decoration-color: #6f3331\r
}\r
\r
.hover\\:underline-warning-lighter:hover,\r
.underline-warning-lighter {\r
    text-decoration-color: #faf3d1\r
}\r
\r
.hover\\:underline-warning-light:hover,\r
.underline-warning-light {\r
    text-decoration-color: #fee685\r
}\r
\r
.hover\\:underline-warning:hover,\r
.underline-warning {\r
    text-decoration-color: #ffbe2e\r
}\r
\r
.hover\\:underline-warning-dark:hover,\r
.underline-warning-dark {\r
    text-decoration-color: #e5a000\r
}\r
\r
.hover\\:underline-warning-darker:hover,\r
.underline-warning-darker {\r
    text-decoration-color: #936f38\r
}\r
\r
.hover\\:underline-success-lighter:hover,\r
.underline-success-lighter {\r
    text-decoration-color: #ecf3ec\r
}\r
\r
.hover\\:underline-success-light:hover,\r
.underline-success-light {\r
    text-decoration-color: #70e17b\r
}\r
\r
.hover\\:underline-success:hover,\r
.underline-success {\r
    text-decoration-color: #00a91c\r
}\r
\r
.hover\\:underline-success-dark:hover,\r
.underline-success-dark {\r
    text-decoration-color: #008817\r
}\r
\r
.hover\\:underline-success-darker:hover,\r
.underline-success-darker {\r
    text-decoration-color: #216e1f\r
}\r
\r
.hover\\:underline-info-lighter:hover,\r
.underline-info-lighter {\r
    text-decoration-color: #e7f6f8\r
}\r
\r
.hover\\:underline-info-light:hover,\r
.underline-info-light {\r
    text-decoration-color: #99deea\r
}\r
\r
.hover\\:underline-info:hover,\r
.underline-info {\r
    text-decoration-color: #00bde3\r
}\r
\r
.hover\\:underline-info-dark:hover,\r
.underline-info-dark {\r
    text-decoration-color: #009ec1\r
}\r
\r
.hover\\:underline-info-darker:hover,\r
.underline-info-darker {\r
    text-decoration-color: #2e6276\r
}\r
\r
.hover\\:underline-disabled-lighter:hover,\r
.underline-disabled-lighter {\r
    text-decoration-color: #c9c9c9\r
}\r
\r
.hover\\:underline-disabled-light:hover,\r
.underline-disabled-light {\r
    text-decoration-color: #919191\r
}\r
\r
.hover\\:underline-disabled:hover,\r
.underline-disabled {\r
    text-decoration-color: #757575\r
}\r
\r
.hover\\:underline-disabled-dark:hover,\r
.underline-disabled-dark {\r
    text-decoration-color: #454545\r
}\r
\r
.hover\\:underline-disabled-darker:hover,\r
.underline-disabled-darker {\r
    text-decoration-color: #1b1b1b\r
}\r
\r
.hover\\:underline-emergency:hover,\r
.underline-emergency {\r
    text-decoration-color: #9c3d10\r
}\r
\r
.hover\\:underline-emergency-dark:hover,\r
.underline-emergency-dark {\r
    text-decoration-color: #332d29\r
}\r
\r
.text-indent-0 {\r
    text-indent: 0\r
}\r
\r
.text-indent-05 {\r
    text-indent: .25rem\r
}\r
\r
.text-indent-1 {\r
    text-indent: .5rem\r
}\r
\r
.text-indent-105 {\r
    text-indent: .75rem\r
}\r
\r
.text-indent-2 {\r
    text-indent: 1rem\r
}\r
\r
.text-indent-205 {\r
    text-indent: 1.25rem\r
}\r
\r
.text-indent-3 {\r
    text-indent: 1.5rem\r
}\r
\r
.text-indent-neg-05 {\r
    text-indent: -.25rem\r
}\r
\r
.text-indent-neg-1 {\r
    text-indent: -.5rem\r
}\r
\r
.text-indent-neg-105 {\r
    text-indent: -.75rem\r
}\r
\r
.text-indent-neg-2 {\r
    text-indent: -1rem\r
}\r
\r
.text-indent-neg-205 {\r
    text-indent: -1.25rem\r
}\r
\r
.text-indent-neg-3 {\r
    text-indent: -1.5rem\r
}\r
\r
.text-indent-4 {\r
    text-indent: 2rem\r
}\r
\r
.text-indent-5 {\r
    text-indent: 2.5rem\r
}\r
\r
.text-indent-6 {\r
    text-indent: 3rem\r
}\r
\r
.text-indent-7 {\r
    text-indent: 3.5rem\r
}\r
\r
.text-indent-8 {\r
    text-indent: 4rem\r
}\r
\r
.text-indent-9 {\r
    text-indent: 4.5rem\r
}\r
\r
.text-indent-10 {\r
    text-indent: 5rem\r
}\r
\r
.text-indent-15 {\r
    text-indent: 7.5rem\r
}\r
\r
.text-indent-neg-4 {\r
    text-indent: -2rem\r
}\r
\r
.text-indent-neg-5 {\r
    text-indent: -2.5rem\r
}\r
\r
.text-indent-neg-6 {\r
    text-indent: -3rem\r
}\r
\r
.text-indent-neg-7 {\r
    text-indent: -3.5rem\r
}\r
\r
.text-indent-neg-8 {\r
    text-indent: -4rem\r
}\r
\r
.text-indent-neg-9 {\r
    text-indent: -4.5rem\r
}\r
\r
.text-indent-neg-10 {\r
    text-indent: -5rem\r
}\r
\r
.text-indent-neg-15 {\r
    text-indent: -7.5rem\r
}\r
\r
.text-uppercase {\r
    text-transform: uppercase\r
}\r
\r
.text-no-uppercase {\r
    text-transform: none\r
}\r
\r
.text-lowercase {\r
    text-transform: lowercase\r
}\r
\r
.text-no-lowercase {\r
    text-transform: none\r
}\r
\r
.top-1px {\r
    top: 1px\r
}\r
\r
.top-2px {\r
    top: 2px\r
}\r
\r
.top-05 {\r
    top: .25rem\r
}\r
\r
.top-1 {\r
    top: .5rem\r
}\r
\r
.top-105 {\r
    top: .75rem\r
}\r
\r
.top-2 {\r
    top: 1rem\r
}\r
\r
.top-205 {\r
    top: 1.25rem\r
}\r
\r
.top-3 {\r
    top: 1.5rem\r
}\r
\r
.top-neg-1px {\r
    top: -1px\r
}\r
\r
.top-neg-2px {\r
    top: -2px\r
}\r
\r
.top-neg-05 {\r
    top: -.25rem\r
}\r
\r
.top-neg-1 {\r
    top: -.5rem\r
}\r
\r
.top-neg-105 {\r
    top: -.75rem\r
}\r
\r
.top-neg-2 {\r
    top: -1rem\r
}\r
\r
.top-neg-205 {\r
    top: -1.25rem\r
}\r
\r
.top-neg-3 {\r
    top: -1.5rem\r
}\r
\r
.top-0 {\r
    top: 0\r
}\r
\r
.top-auto {\r
    top: auto\r
}\r
\r
.top-full {\r
    top: 100%\r
}\r
\r
.text-baseline {\r
    vertical-align: baseline\r
}\r
\r
.text-bottom {\r
    vertical-align: bottom\r
}\r
\r
.text-middle {\r
    vertical-align: middle\r
}\r
\r
.text-sub {\r
    vertical-align: sub\r
}\r
\r
.text-super {\r
    vertical-align: super\r
}\r
\r
.text-tbottom {\r
    vertical-align: text-bottom\r
}\r
\r
.text-ttop {\r
    vertical-align: text-top\r
}\r
\r
.text-top {\r
    vertical-align: top\r
}\r
\r
.text-pre {\r
    white-space: pre\r
}\r
\r
.text-pre-line {\r
    white-space: pre-line\r
}\r
\r
.text-pre-wrap {\r
    white-space: pre-wrap\r
}\r
\r
.text-wrap {\r
    white-space: normal\r
}\r
\r
.text-no-wrap {\r
    white-space: nowrap\r
}\r
\r
.width-1px {\r
    width: 1px\r
}\r
\r
.width-2px {\r
    width: 2px\r
}\r
\r
.width-05 {\r
    width: .25rem\r
}\r
\r
.width-1 {\r
    width: .5rem\r
}\r
\r
.width-105 {\r
    width: .75rem\r
}\r
\r
.width-2 {\r
    width: 1rem\r
}\r
\r
.width-205 {\r
    width: 1.25rem\r
}\r
\r
.width-3 {\r
    width: 1.5rem\r
}\r
\r
.width-4 {\r
    width: 2rem\r
}\r
\r
.width-5 {\r
    width: 2.5rem\r
}\r
\r
.width-6 {\r
    width: 3rem\r
}\r
\r
.width-7 {\r
    width: 3.5rem\r
}\r
\r
.width-8 {\r
    width: 4rem\r
}\r
\r
.width-9 {\r
    width: 4.5rem\r
}\r
\r
.width-10 {\r
    width: 5rem\r
}\r
\r
.width-15 {\r
    width: 7.5rem\r
}\r
\r
.width-card {\r
    width: 10rem\r
}\r
\r
.width-card-lg {\r
    width: 15rem\r
}\r
\r
.width-mobile {\r
    width: 20rem\r
}\r
\r
.width-mobile-lg {\r
    width: 30rem\r
}\r
\r
.width-tablet {\r
    width: 40rem\r
}\r
\r
.width-tablet-lg {\r
    width: 55rem\r
}\r
\r
.width-desktop {\r
    width: 64rem\r
}\r
\r
.width-desktop-lg {\r
    width: 75rem\r
}\r
\r
.width-widescreen {\r
    width: 87.5rem\r
}\r
\r
.width-0 {\r
    width: 0\r
}\r
\r
.width-full {\r
    width: 100%\r
}\r
\r
.width-auto {\r
    width: auto\r
}\r
\r
.z-auto {\r
    z-index: auto\r
}\r
\r
.z-bottom {\r
    z-index: -100\r
}\r
\r
.z-top {\r
    z-index: 99999\r
}\r
\r
.z-0 {\r
    z-index: 0\r
}\r
\r
.z-100 {\r
    z-index: 100\r
}\r
\r
.z-200 {\r
    z-index: 200\r
}\r
\r
.z-300 {\r
    z-index: 300\r
}\r
\r
.z-400 {\r
    z-index: 400\r
}\r
\r
.z-500 {\r
    z-index: 500\r
}\r
\r
@media all and (min-width:30em) {\r
\r
    .mobile-lg\\:border-1px,\r
    .mobile-lg\\:hover\\:border-1px:hover {\r
        border: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-y-1px,\r
    .mobile-lg\\:hover\\:border-y-1px:hover {\r
        border-top: 1px solid;\r
        border-bottom: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-x-1px,\r
    .mobile-lg\\:hover\\:border-x-1px:hover {\r
        border-left: 1px solid;\r
        border-right: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-top-1px,\r
    .mobile-lg\\:hover\\:border-top-1px:hover {\r
        border-top: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-right-1px,\r
    .mobile-lg\\:hover\\:border-right-1px:hover {\r
        border-right: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-1px,\r
    .mobile-lg\\:hover\\:border-bottom-1px:hover {\r
        border-bottom: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-left-1px,\r
    .mobile-lg\\:hover\\:border-left-1px:hover {\r
        border-left: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-2px,\r
    .mobile-lg\\:hover\\:border-2px:hover {\r
        border: 2px solid\r
    }\r
\r
    .mobile-lg\\:border-y-2px,\r
    .mobile-lg\\:hover\\:border-y-2px:hover {\r
        border-top: 2px solid;\r
        border-bottom: 2px solid\r
    }\r
\r
    .mobile-lg\\:border-x-2px,\r
    .mobile-lg\\:hover\\:border-x-2px:hover {\r
        border-left: 2px solid;\r
        border-right: 2px solid\r
    }\r
\r
    .mobile-lg\\:border-top-2px,\r
    .mobile-lg\\:hover\\:border-top-2px:hover {\r
        border-top: 2px solid\r
    }\r
\r
    .mobile-lg\\:border-right-2px,\r
    .mobile-lg\\:hover\\:border-right-2px:hover {\r
        border-right: 2px solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-2px,\r
    .mobile-lg\\:hover\\:border-bottom-2px:hover {\r
        border-bottom: 2px solid\r
    }\r
\r
    .mobile-lg\\:border-left-2px,\r
    .mobile-lg\\:hover\\:border-left-2px:hover {\r
        border-left: 2px solid\r
    }\r
\r
    .mobile-lg\\:border-05,\r
    .mobile-lg\\:hover\\:border-05:hover {\r
        border: .25rem solid\r
    }\r
\r
    .mobile-lg\\:border-y-05,\r
    .mobile-lg\\:hover\\:border-y-05:hover {\r
        border-top: .25rem solid;\r
        border-bottom: .25rem solid\r
    }\r
\r
    .mobile-lg\\:border-x-05,\r
    .mobile-lg\\:hover\\:border-x-05:hover {\r
        border-left: .25rem solid;\r
        border-right: .25rem solid\r
    }\r
\r
    .mobile-lg\\:border-top-05,\r
    .mobile-lg\\:hover\\:border-top-05:hover {\r
        border-top: .25rem solid\r
    }\r
\r
    .mobile-lg\\:border-right-05,\r
    .mobile-lg\\:hover\\:border-right-05:hover {\r
        border-right: .25rem solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-05,\r
    .mobile-lg\\:hover\\:border-bottom-05:hover {\r
        border-bottom: .25rem solid\r
    }\r
\r
    .mobile-lg\\:border-left-05,\r
    .mobile-lg\\:hover\\:border-left-05:hover {\r
        border-left: .25rem solid\r
    }\r
\r
    .mobile-lg\\:border-1,\r
    .mobile-lg\\:hover\\:border-1:hover {\r
        border: .5rem solid\r
    }\r
\r
    .mobile-lg\\:border-y-1,\r
    .mobile-lg\\:hover\\:border-y-1:hover {\r
        border-top: .5rem solid;\r
        border-bottom: .5rem solid\r
    }\r
\r
    .mobile-lg\\:border-x-1,\r
    .mobile-lg\\:hover\\:border-x-1:hover {\r
        border-left: .5rem solid;\r
        border-right: .5rem solid\r
    }\r
\r
    .mobile-lg\\:border-top-1,\r
    .mobile-lg\\:hover\\:border-top-1:hover {\r
        border-top: .5rem solid\r
    }\r
\r
    .mobile-lg\\:border-right-1,\r
    .mobile-lg\\:hover\\:border-right-1:hover {\r
        border-right: .5rem solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-1,\r
    .mobile-lg\\:hover\\:border-bottom-1:hover {\r
        border-bottom: .5rem solid\r
    }\r
\r
    .mobile-lg\\:border-left-1,\r
    .mobile-lg\\:hover\\:border-left-1:hover {\r
        border-left: .5rem solid\r
    }\r
\r
    .mobile-lg\\:border-105,\r
    .mobile-lg\\:hover\\:border-105:hover {\r
        border: .75rem solid\r
    }\r
\r
    .mobile-lg\\:border-y-105,\r
    .mobile-lg\\:hover\\:border-y-105:hover {\r
        border-top: .75rem solid;\r
        border-bottom: .75rem solid\r
    }\r
\r
    .mobile-lg\\:border-x-105,\r
    .mobile-lg\\:hover\\:border-x-105:hover {\r
        border-left: .75rem solid;\r
        border-right: .75rem solid\r
    }\r
\r
    .mobile-lg\\:border-top-105,\r
    .mobile-lg\\:hover\\:border-top-105:hover {\r
        border-top: .75rem solid\r
    }\r
\r
    .mobile-lg\\:border-right-105,\r
    .mobile-lg\\:hover\\:border-right-105:hover {\r
        border-right: .75rem solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-105,\r
    .mobile-lg\\:hover\\:border-bottom-105:hover {\r
        border-bottom: .75rem solid\r
    }\r
\r
    .mobile-lg\\:border-left-105,\r
    .mobile-lg\\:hover\\:border-left-105:hover {\r
        border-left: .75rem solid\r
    }\r
\r
    .mobile-lg\\:border-2,\r
    .mobile-lg\\:hover\\:border-2:hover {\r
        border: 1rem solid\r
    }\r
\r
    .mobile-lg\\:border-y-2,\r
    .mobile-lg\\:hover\\:border-y-2:hover {\r
        border-top: 1rem solid;\r
        border-bottom: 1rem solid\r
    }\r
\r
    .mobile-lg\\:border-x-2,\r
    .mobile-lg\\:hover\\:border-x-2:hover {\r
        border-left: 1rem solid;\r
        border-right: 1rem solid\r
    }\r
\r
    .mobile-lg\\:border-top-2,\r
    .mobile-lg\\:hover\\:border-top-2:hover {\r
        border-top: 1rem solid\r
    }\r
\r
    .mobile-lg\\:border-right-2,\r
    .mobile-lg\\:hover\\:border-right-2:hover {\r
        border-right: 1rem solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-2,\r
    .mobile-lg\\:hover\\:border-bottom-2:hover {\r
        border-bottom: 1rem solid\r
    }\r
\r
    .mobile-lg\\:border-left-2,\r
    .mobile-lg\\:hover\\:border-left-2:hover {\r
        border-left: 1rem solid\r
    }\r
\r
    .mobile-lg\\:border-205,\r
    .mobile-lg\\:hover\\:border-205:hover {\r
        border: 1.25rem solid\r
    }\r
\r
    .mobile-lg\\:border-y-205,\r
    .mobile-lg\\:hover\\:border-y-205:hover {\r
        border-top: 1.25rem solid;\r
        border-bottom: 1.25rem solid\r
    }\r
\r
    .mobile-lg\\:border-x-205,\r
    .mobile-lg\\:hover\\:border-x-205:hover {\r
        border-left: 1.25rem solid;\r
        border-right: 1.25rem solid\r
    }\r
\r
    .mobile-lg\\:border-top-205,\r
    .mobile-lg\\:hover\\:border-top-205:hover {\r
        border-top: 1.25rem solid\r
    }\r
\r
    .mobile-lg\\:border-right-205,\r
    .mobile-lg\\:hover\\:border-right-205:hover {\r
        border-right: 1.25rem solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-205,\r
    .mobile-lg\\:hover\\:border-bottom-205:hover {\r
        border-bottom: 1.25rem solid\r
    }\r
\r
    .mobile-lg\\:border-left-205,\r
    .mobile-lg\\:hover\\:border-left-205:hover {\r
        border-left: 1.25rem solid\r
    }\r
\r
    .mobile-lg\\:border-3,\r
    .mobile-lg\\:hover\\:border-3:hover {\r
        border: 1.5rem solid\r
    }\r
\r
    .mobile-lg\\:border-y-3,\r
    .mobile-lg\\:hover\\:border-y-3:hover {\r
        border-top: 1.5rem solid;\r
        border-bottom: 1.5rem solid\r
    }\r
\r
    .mobile-lg\\:border-x-3,\r
    .mobile-lg\\:hover\\:border-x-3:hover {\r
        border-left: 1.5rem solid;\r
        border-right: 1.5rem solid\r
    }\r
\r
    .mobile-lg\\:border-top-3,\r
    .mobile-lg\\:hover\\:border-top-3:hover {\r
        border-top: 1.5rem solid\r
    }\r
\r
    .mobile-lg\\:border-right-3,\r
    .mobile-lg\\:hover\\:border-right-3:hover {\r
        border-right: 1.5rem solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-3,\r
    .mobile-lg\\:hover\\:border-bottom-3:hover {\r
        border-bottom: 1.5rem solid\r
    }\r
\r
    .mobile-lg\\:border-left-3,\r
    .mobile-lg\\:hover\\:border-left-3:hover {\r
        border-left: 1.5rem solid\r
    }\r
\r
    .mobile-lg\\:border-0,\r
    .mobile-lg\\:hover\\:border-0:hover {\r
        border: 0 solid\r
    }\r
\r
    .mobile-lg\\:border-y-0,\r
    .mobile-lg\\:hover\\:border-y-0:hover {\r
        border-top: 0 solid;\r
        border-bottom: 0 solid\r
    }\r
\r
    .mobile-lg\\:border-x-0,\r
    .mobile-lg\\:hover\\:border-x-0:hover {\r
        border-left: 0 solid;\r
        border-right: 0 solid\r
    }\r
\r
    .mobile-lg\\:border-top-0,\r
    .mobile-lg\\:hover\\:border-top-0:hover {\r
        border-top: 0 solid\r
    }\r
\r
    .mobile-lg\\:border-right-0,\r
    .mobile-lg\\:hover\\:border-right-0:hover {\r
        border-right: 0 solid\r
    }\r
\r
    .mobile-lg\\:border-bottom-0,\r
    .mobile-lg\\:hover\\:border-bottom-0:hover {\r
        border-bottom: 0 solid\r
    }\r
\r
    .mobile-lg\\:border-left-0,\r
    .mobile-lg\\:hover\\:border-left-0:hover {\r
        border-left: 0 solid\r
    }\r
\r
    .mobile-lg\\:border,\r
    .mobile-lg\\:hover\\:border:hover {\r
        border: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-y,\r
    .mobile-lg\\:hover\\:border-y:hover {\r
        border-top: 1px solid;\r
        border-bottom: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-x,\r
    .mobile-lg\\:hover\\:border-x:hover {\r
        border-left: 1px solid;\r
        border-right: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-top,\r
    .mobile-lg\\:hover\\:border-top:hover {\r
        border-top: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-right,\r
    .mobile-lg\\:hover\\:border-right:hover {\r
        border-right: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-bottom,\r
    .mobile-lg\\:hover\\:border-bottom:hover {\r
        border-bottom: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-left,\r
    .mobile-lg\\:hover\\:border-left:hover {\r
        border-left: 1px solid\r
    }\r
\r
    .mobile-lg\\:border-transparent,\r
    .mobile-lg\\:hover\\:border-transparent:hover {\r
        border-color: transparent\r
    }\r
\r
    .mobile-lg\\:border-black,\r
    .mobile-lg\\:hover\\:border-black:hover {\r
        border-color: #000\r
    }\r
\r
    .mobile-lg\\:border-white,\r
    .mobile-lg\\:hover\\:border-white:hover {\r
        border-color: #fff\r
    }\r
\r
    .mobile-lg\\:border-red,\r
    .mobile-lg\\:hover\\:border-red:hover {\r
        border-color: #e52207\r
    }\r
\r
    .mobile-lg\\:border-orange,\r
    .mobile-lg\\:hover\\:border-orange:hover {\r
        border-color: #e66f0e\r
    }\r
\r
    .mobile-lg\\:border-gold,\r
    .mobile-lg\\:hover\\:border-gold:hover {\r
        border-color: #ffbe2e\r
    }\r
\r
    .mobile-lg\\:border-yellow,\r
    .mobile-lg\\:hover\\:border-yellow:hover {\r
        border-color: #fee685\r
    }\r
\r
    .mobile-lg\\:border-green,\r
    .mobile-lg\\:hover\\:border-green:hover {\r
        border-color: #538200\r
    }\r
\r
    .mobile-lg\\:border-mint,\r
    .mobile-lg\\:hover\\:border-mint:hover {\r
        border-color: #04c585\r
    }\r
\r
    .mobile-lg\\:border-cyan,\r
    .mobile-lg\\:hover\\:border-cyan:hover {\r
        border-color: #009ec1\r
    }\r
\r
    .mobile-lg\\:border-blue,\r
    .mobile-lg\\:hover\\:border-blue:hover {\r
        border-color: #0076d6\r
    }\r
\r
    .mobile-lg\\:border-indigo,\r
    .mobile-lg\\:hover\\:border-indigo:hover {\r
        border-color: #676cc8\r
    }\r
\r
    .mobile-lg\\:border-violet,\r
    .mobile-lg\\:hover\\:border-violet:hover {\r
        border-color: #8168b3\r
    }\r
\r
    .mobile-lg\\:border-magenta,\r
    .mobile-lg\\:hover\\:border-magenta:hover {\r
        border-color: #d72d79\r
    }\r
\r
    .mobile-lg\\:border-gray-5,\r
    .mobile-lg\\:hover\\:border-gray-5:hover {\r
        border-color: #f0f0f0\r
    }\r
\r
    .mobile-lg\\:border-gray-10,\r
    .mobile-lg\\:hover\\:border-gray-10:hover {\r
        border-color: #e6e6e6\r
    }\r
\r
    .mobile-lg\\:border-gray-30,\r
    .mobile-lg\\:hover\\:border-gray-30:hover {\r
        border-color: #adadad\r
    }\r
\r
    .mobile-lg\\:border-gray-50,\r
    .mobile-lg\\:hover\\:border-gray-50:hover {\r
        border-color: #757575\r
    }\r
\r
    .mobile-lg\\:border-gray-70,\r
    .mobile-lg\\:hover\\:border-gray-70:hover {\r
        border-color: #454545\r
    }\r
\r
    .mobile-lg\\:border-gray-90,\r
    .mobile-lg\\:hover\\:border-gray-90:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .mobile-lg\\:border-base-lightest,\r
    .mobile-lg\\:hover\\:border-base-lightest:hover {\r
        border-color: #f0f0f0\r
    }\r
\r
    .mobile-lg\\:border-base-lighter,\r
    .mobile-lg\\:hover\\:border-base-lighter:hover {\r
        border-color: #dfe1e2\r
    }\r
\r
    .mobile-lg\\:border-base-light,\r
    .mobile-lg\\:hover\\:border-base-light:hover {\r
        border-color: #a9aeb1\r
    }\r
\r
    .mobile-lg\\:border-base,\r
    .mobile-lg\\:hover\\:border-base:hover {\r
        border-color: #71767a\r
    }\r
\r
    .mobile-lg\\:border-base-dark,\r
    .mobile-lg\\:hover\\:border-base-dark:hover {\r
        border-color: #565c65\r
    }\r
\r
    .mobile-lg\\:border-base-darker,\r
    .mobile-lg\\:hover\\:border-base-darker:hover {\r
        border-color: #3d4551\r
    }\r
\r
    .mobile-lg\\:border-base-darkest,\r
    .mobile-lg\\:border-ink,\r
    .mobile-lg\\:hover\\:border-base-darkest:hover,\r
    .mobile-lg\\:hover\\:border-ink:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .mobile-lg\\:border-primary-lighter,\r
    .mobile-lg\\:hover\\:border-primary-lighter:hover {\r
        border-color: #d9e8f6\r
    }\r
\r
    .mobile-lg\\:border-primary-light,\r
    .mobile-lg\\:hover\\:border-primary-light:hover {\r
        border-color: #73b3e7\r
    }\r
\r
    .mobile-lg\\:border-primary,\r
    .mobile-lg\\:hover\\:border-primary:hover {\r
        border-color: #005ea2\r
    }\r
\r
    .mobile-lg\\:border-primary-vivid,\r
    .mobile-lg\\:hover\\:border-primary-vivid:hover {\r
        border-color: #0050d8\r
    }\r
\r
    .mobile-lg\\:border-primary-dark,\r
    .mobile-lg\\:hover\\:border-primary-dark:hover {\r
        border-color: #1a4480\r
    }\r
\r
    .mobile-lg\\:border-primary-darker,\r
    .mobile-lg\\:hover\\:border-primary-darker:hover {\r
        border-color: #162e51\r
    }\r
\r
    .mobile-lg\\:border-secondary-lighter,\r
    .mobile-lg\\:hover\\:border-secondary-lighter:hover {\r
        border-color: #f3e1e4\r
    }\r
\r
    .mobile-lg\\:border-secondary-light,\r
    .mobile-lg\\:hover\\:border-secondary-light:hover {\r
        border-color: #f2938c\r
    }\r
\r
    .mobile-lg\\:border-secondary,\r
    .mobile-lg\\:hover\\:border-secondary:hover {\r
        border-color: #d83933\r
    }\r
\r
    .mobile-lg\\:border-secondary-vivid,\r
    .mobile-lg\\:hover\\:border-secondary-vivid:hover {\r
        border-color: #e41d3d\r
    }\r
\r
    .mobile-lg\\:border-secondary-dark,\r
    .mobile-lg\\:hover\\:border-secondary-dark:hover {\r
        border-color: #b50909\r
    }\r
\r
    .mobile-lg\\:border-secondary-darker,\r
    .mobile-lg\\:hover\\:border-secondary-darker:hover {\r
        border-color: #8b0a03\r
    }\r
\r
    .mobile-lg\\:border-accent-warm-darker,\r
    .mobile-lg\\:hover\\:border-accent-warm-darker:hover {\r
        border-color: #775540\r
    }\r
\r
    .mobile-lg\\:border-accent-warm-dark,\r
    .mobile-lg\\:hover\\:border-accent-warm-dark:hover {\r
        border-color: #c05600\r
    }\r
\r
    .mobile-lg\\:border-accent-warm,\r
    .mobile-lg\\:hover\\:border-accent-warm:hover {\r
        border-color: #fa9441\r
    }\r
\r
    .mobile-lg\\:border-accent-warm-light,\r
    .mobile-lg\\:hover\\:border-accent-warm-light:hover {\r
        border-color: #ffbc78\r
    }\r
\r
    .mobile-lg\\:border-accent-warm-lighter,\r
    .mobile-lg\\:hover\\:border-accent-warm-lighter:hover {\r
        border-color: #f2e4d4\r
    }\r
\r
    .mobile-lg\\:border-accent-cool-darker,\r
    .mobile-lg\\:hover\\:border-accent-cool-darker:hover {\r
        border-color: #07648d\r
    }\r
\r
    .mobile-lg\\:border-accent-cool-dark,\r
    .mobile-lg\\:hover\\:border-accent-cool-dark:hover {\r
        border-color: #28a0cb\r
    }\r
\r
    .mobile-lg\\:border-accent-cool,\r
    .mobile-lg\\:hover\\:border-accent-cool:hover {\r
        border-color: #00bde3\r
    }\r
\r
    .mobile-lg\\:border-accent-cool-light,\r
    .mobile-lg\\:hover\\:border-accent-cool-light:hover {\r
        border-color: #97d4ea\r
    }\r
\r
    .mobile-lg\\:border-accent-cool-lighter,\r
    .mobile-lg\\:hover\\:border-accent-cool-lighter:hover {\r
        border-color: #e1f3f8\r
    }\r
\r
    .mobile-lg\\:border-error-lighter,\r
    .mobile-lg\\:hover\\:border-error-lighter:hover {\r
        border-color: #f4e3db\r
    }\r
\r
    .mobile-lg\\:border-error-light,\r
    .mobile-lg\\:hover\\:border-error-light:hover {\r
        border-color: #f39268\r
    }\r
\r
    .mobile-lg\\:border-error,\r
    .mobile-lg\\:hover\\:border-error:hover {\r
        border-color: #d54309\r
    }\r
\r
    .mobile-lg\\:border-error-dark,\r
    .mobile-lg\\:hover\\:border-error-dark:hover {\r
        border-color: #b50909\r
    }\r
\r
    .mobile-lg\\:border-error-darker,\r
    .mobile-lg\\:hover\\:border-error-darker:hover {\r
        border-color: #6f3331\r
    }\r
\r
    .mobile-lg\\:border-warning-lighter,\r
    .mobile-lg\\:hover\\:border-warning-lighter:hover {\r
        border-color: #faf3d1\r
    }\r
\r
    .mobile-lg\\:border-warning-light,\r
    .mobile-lg\\:hover\\:border-warning-light:hover {\r
        border-color: #fee685\r
    }\r
\r
    .mobile-lg\\:border-warning,\r
    .mobile-lg\\:hover\\:border-warning:hover {\r
        border-color: #ffbe2e\r
    }\r
\r
    .mobile-lg\\:border-warning-dark,\r
    .mobile-lg\\:hover\\:border-warning-dark:hover {\r
        border-color: #e5a000\r
    }\r
\r
    .mobile-lg\\:border-warning-darker,\r
    .mobile-lg\\:hover\\:border-warning-darker:hover {\r
        border-color: #936f38\r
    }\r
\r
    .mobile-lg\\:border-success-lighter,\r
    .mobile-lg\\:hover\\:border-success-lighter:hover {\r
        border-color: #ecf3ec\r
    }\r
\r
    .mobile-lg\\:border-success-light,\r
    .mobile-lg\\:hover\\:border-success-light:hover {\r
        border-color: #70e17b\r
    }\r
\r
    .mobile-lg\\:border-success,\r
    .mobile-lg\\:hover\\:border-success:hover {\r
        border-color: #00a91c\r
    }\r
\r
    .mobile-lg\\:border-success-dark,\r
    .mobile-lg\\:hover\\:border-success-dark:hover {\r
        border-color: #008817\r
    }\r
\r
    .mobile-lg\\:border-success-darker,\r
    .mobile-lg\\:hover\\:border-success-darker:hover {\r
        border-color: #216e1f\r
    }\r
\r
    .mobile-lg\\:border-info-lighter,\r
    .mobile-lg\\:hover\\:border-info-lighter:hover {\r
        border-color: #e7f6f8\r
    }\r
\r
    .mobile-lg\\:border-info-light,\r
    .mobile-lg\\:hover\\:border-info-light:hover {\r
        border-color: #99deea\r
    }\r
\r
    .mobile-lg\\:border-info,\r
    .mobile-lg\\:hover\\:border-info:hover {\r
        border-color: #00bde3\r
    }\r
\r
    .mobile-lg\\:border-info-dark,\r
    .mobile-lg\\:hover\\:border-info-dark:hover {\r
        border-color: #009ec1\r
    }\r
\r
    .mobile-lg\\:border-info-darker,\r
    .mobile-lg\\:hover\\:border-info-darker:hover {\r
        border-color: #2e6276\r
    }\r
\r
    .mobile-lg\\:border-disabled-lighter,\r
    .mobile-lg\\:hover\\:border-disabled-lighter:hover {\r
        border-color: #c9c9c9\r
    }\r
\r
    .mobile-lg\\:border-disabled-light,\r
    .mobile-lg\\:hover\\:border-disabled-light:hover {\r
        border-color: #919191\r
    }\r
\r
    .mobile-lg\\:border-disabled,\r
    .mobile-lg\\:hover\\:border-disabled:hover {\r
        border-color: #757575\r
    }\r
\r
    .mobile-lg\\:border-disabled-dark,\r
    .mobile-lg\\:hover\\:border-disabled-dark:hover {\r
        border-color: #454545\r
    }\r
\r
    .mobile-lg\\:border-disabled-darker,\r
    .mobile-lg\\:hover\\:border-disabled-darker:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .mobile-lg\\:border-emergency,\r
    .mobile-lg\\:hover\\:border-emergency:hover {\r
        border-color: #9c3d10\r
    }\r
\r
    .mobile-lg\\:border-emergency-dark,\r
    .mobile-lg\\:hover\\:border-emergency-dark:hover {\r
        border-color: #332d29\r
    }\r
\r
    .mobile-lg\\:radius-0 {\r
        border-radius: 0\r
    }\r
\r
    .mobile-lg\\:radius-top-0 {\r
        border-top-left-radius: 0;\r
        border-top-right-radius: 0\r
    }\r
\r
    .mobile-lg\\:radius-right-0 {\r
        border-top-right-radius: 0;\r
        border-bottom-right-radius: 0\r
    }\r
\r
    .mobile-lg\\:radius-bottom-0 {\r
        border-bottom-left-radius: 0;\r
        border-bottom-right-radius: 0\r
    }\r
\r
    .mobile-lg\\:radius-left-0 {\r
        border-top-left-radius: 0;\r
        border-bottom-left-radius: 0\r
    }\r
\r
    .mobile-lg\\:radius-sm {\r
        border-radius: 2px\r
    }\r
\r
    .mobile-lg\\:radius-top-sm {\r
        border-top-left-radius: 2px;\r
        border-top-right-radius: 2px\r
    }\r
\r
    .mobile-lg\\:radius-right-sm {\r
        border-top-right-radius: 2px;\r
        border-bottom-right-radius: 2px\r
    }\r
\r
    .mobile-lg\\:radius-bottom-sm {\r
        border-bottom-left-radius: 2px;\r
        border-bottom-right-radius: 2px\r
    }\r
\r
    .mobile-lg\\:radius-left-sm {\r
        border-top-left-radius: 2px;\r
        border-bottom-left-radius: 2px\r
    }\r
\r
    .mobile-lg\\:radius-md {\r
        border-radius: .25rem\r
    }\r
\r
    .mobile-lg\\:radius-top-md {\r
        border-top-left-radius: .25rem;\r
        border-top-right-radius: .25rem\r
    }\r
\r
    .mobile-lg\\:radius-right-md {\r
        border-top-right-radius: .25rem;\r
        border-bottom-right-radius: .25rem\r
    }\r
\r
    .mobile-lg\\:radius-bottom-md {\r
        border-bottom-left-radius: .25rem;\r
        border-bottom-right-radius: .25rem\r
    }\r
\r
    .mobile-lg\\:radius-left-md {\r
        border-top-left-radius: .25rem;\r
        border-bottom-left-radius: .25rem\r
    }\r
\r
    .mobile-lg\\:radius-lg {\r
        border-radius: .5rem\r
    }\r
\r
    .mobile-lg\\:radius-top-lg {\r
        border-top-left-radius: .5rem;\r
        border-top-right-radius: .5rem\r
    }\r
\r
    .mobile-lg\\:radius-right-lg {\r
        border-top-right-radius: .5rem;\r
        border-bottom-right-radius: .5rem\r
    }\r
\r
    .mobile-lg\\:radius-bottom-lg {\r
        border-bottom-left-radius: .5rem;\r
        border-bottom-right-radius: .5rem\r
    }\r
\r
    .mobile-lg\\:radius-left-lg {\r
        border-top-left-radius: .5rem;\r
        border-bottom-left-radius: .5rem\r
    }\r
\r
    .mobile-lg\\:radius-pill {\r
        border-radius: 99rem\r
    }\r
\r
    .mobile-lg\\:radius-top-pill {\r
        border-top-left-radius: 99rem;\r
        border-top-right-radius: 99rem\r
    }\r
\r
    .mobile-lg\\:radius-right-pill {\r
        border-top-right-radius: 99rem;\r
        border-bottom-right-radius: 99rem\r
    }\r
\r
    .mobile-lg\\:radius-bottom-pill {\r
        border-bottom-left-radius: 99rem;\r
        border-bottom-right-radius: 99rem\r
    }\r
\r
    .mobile-lg\\:radius-left-pill {\r
        border-top-left-radius: 99rem;\r
        border-bottom-left-radius: 99rem\r
    }\r
\r
    .mobile-lg\\:display-block {\r
        display: block\r
    }\r
\r
    .mobile-lg\\:display-flex {\r
        display: flex\r
    }\r
\r
    .mobile-lg\\:display-none {\r
        display: none\r
    }\r
\r
    .mobile-lg\\:display-inline {\r
        display: inline\r
    }\r
\r
    .mobile-lg\\:display-inline-block {\r
        display: inline-block\r
    }\r
\r
    .mobile-lg\\:display-inline-flex {\r
        display: inline-flex\r
    }\r
\r
    .mobile-lg\\:display-table {\r
        display: table\r
    }\r
\r
    .mobile-lg\\:display-table-cell {\r
        display: table-cell\r
    }\r
\r
    .mobile-lg\\:display-table-row {\r
        display: table-row\r
    }\r
\r
    .mobile-lg\\:font-mono-3xs {\r
        /* font-size: .77rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-2xs {\r
        /* font-size: .83rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-xs {\r
        /* font-size: .89rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-sm {\r
        /* font-size: .95rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-md {\r
        /* font-size: 1.01rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-lg {\r
        /* font-size: 1.31rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-xl {\r
        /* font-size: 1.91rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-2xl {\r
        /* font-size: 2.38rem */\r
    }\r
\r
    .mobile-lg\\:font-mono-3xl {\r
        /* font-size: 2.86rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .mobile-lg\\:font-sans-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .mobile-lg\\:font-serif-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .mobile-lg\\:font-heading-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .mobile-lg\\:font-body-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .mobile-lg\\:font-body-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .mobile-lg\\:font-body-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .mobile-lg\\:font-body-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .mobile-lg\\:font-body-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .mobile-lg\\:font-body-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .mobile-lg\\:font-body-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .mobile-lg\\:font-body-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .mobile-lg\\:font-body-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .mobile-lg\\:font-code-3xs {\r
        /* font-size: .77rem */\r
    }\r
\r
    .mobile-lg\\:font-code-2xs {\r
        /* font-size: .83rem */\r
    }\r
\r
    .mobile-lg\\:font-code-xs {\r
        /* font-size: .89rem */\r
    }\r
\r
    .mobile-lg\\:font-code-sm {\r
        /* font-size: .95rem */\r
    }\r
\r
    .mobile-lg\\:font-code-md {\r
        /* font-size: 1.01rem */\r
    }\r
\r
    .mobile-lg\\:font-code-lg {\r
        /* font-size: 1.31rem */\r
    }\r
\r
    .mobile-lg\\:font-code-xl {\r
        /* font-size: 1.91rem */\r
    }\r
\r
    .mobile-lg\\:font-code-2xl {\r
        /* font-size: 2.38rem */\r
    }\r
\r
    .mobile-lg\\:font-code-3xl {\r
        /* font-size: 2.86rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .mobile-lg\\:font-alt-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .mobile-lg\\:font-ui-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .mobile-lg\\:text-light {\r
        font-weight: 300\r
    }\r
\r
    .mobile-lg\\:text-normal {\r
        font-weight: 400\r
    }\r
\r
    .mobile-lg\\:text-bold {\r
        font-weight: 700\r
    }\r
\r
    .mobile-lg\\:flex-justify-center {\r
        justify-content: center\r
    }\r
\r
    .mobile-lg\\:flex-justify-start {\r
        justify-content: flex-start\r
    }\r
\r
    .mobile-lg\\:flex-justify-end {\r
        justify-content: flex-end\r
    }\r
\r
    .mobile-lg\\:flex-justify {\r
        justify-content: space-between\r
    }\r
\r
    .mobile-lg\\:line-height-sans-1 {\r
        line-height: .9\r
    }\r
\r
    .mobile-lg\\:line-height-sans-2 {\r
        line-height: 1.1\r
    }\r
\r
    .mobile-lg\\:line-height-sans-3 {\r
        line-height: 1.3\r
    }\r
\r
    .mobile-lg\\:line-height-sans-4 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-sans-5 {\r
        line-height: 1.5\r
    }\r
\r
    .mobile-lg\\:line-height-sans-6 {\r
        line-height: 1.6\r
    }\r
\r
    .mobile-lg\\:line-height-serif-1 {\r
        line-height: 1\r
    }\r
\r
    .mobile-lg\\:line-height-serif-2 {\r
        line-height: 1.2\r
    }\r
\r
    .mobile-lg\\:line-height-serif-3 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-serif-4 {\r
        line-height: 1.5\r
    }\r
\r
    .mobile-lg\\:line-height-serif-5 {\r
        line-height: 1.7\r
    }\r
\r
    .mobile-lg\\:line-height-serif-6 {\r
        line-height: 1.8\r
    }\r
\r
    .mobile-lg\\:line-height-mono-1 {\r
        line-height: 1\r
    }\r
\r
    .mobile-lg\\:line-height-mono-2 {\r
        line-height: 1.3\r
    }\r
\r
    .mobile-lg\\:line-height-mono-3 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-mono-4 {\r
        line-height: 1.6\r
    }\r
\r
    .mobile-lg\\:line-height-mono-5 {\r
        line-height: 1.7\r
    }\r
\r
    .mobile-lg\\:line-height-mono-6 {\r
        line-height: 1.8\r
    }\r
\r
    .mobile-lg\\:line-height-heading-1 {\r
        line-height: 1\r
    }\r
\r
    .mobile-lg\\:line-height-heading-2 {\r
        line-height: 1.2\r
    }\r
\r
    .mobile-lg\\:line-height-heading-3 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-heading-4 {\r
        line-height: 1.5\r
    }\r
\r
    .mobile-lg\\:line-height-heading-5 {\r
        line-height: 1.7\r
    }\r
\r
    .mobile-lg\\:line-height-heading-6 {\r
        line-height: 1.8\r
    }\r
\r
    .mobile-lg\\:line-height-ui-1 {\r
        line-height: .9\r
    }\r
\r
    .mobile-lg\\:line-height-ui-2 {\r
        line-height: 1.1\r
    }\r
\r
    .mobile-lg\\:line-height-ui-3 {\r
        line-height: 1.3\r
    }\r
\r
    .mobile-lg\\:line-height-ui-4 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-ui-5 {\r
        line-height: 1.5\r
    }\r
\r
    .mobile-lg\\:line-height-ui-6 {\r
        line-height: 1.6\r
    }\r
\r
    .mobile-lg\\:line-height-body-1 {\r
        line-height: .9\r
    }\r
\r
    .mobile-lg\\:line-height-body-2 {\r
        line-height: 1.1\r
    }\r
\r
    .mobile-lg\\:line-height-body-3 {\r
        line-height: 1.3\r
    }\r
\r
    .mobile-lg\\:line-height-body-4 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-body-5 {\r
        line-height: 1.5\r
    }\r
\r
    .mobile-lg\\:line-height-body-6 {\r
        line-height: 1.6\r
    }\r
\r
    .mobile-lg\\:line-height-code-1 {\r
        line-height: 1\r
    }\r
\r
    .mobile-lg\\:line-height-code-2 {\r
        line-height: 1.3\r
    }\r
\r
    .mobile-lg\\:line-height-code-3 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-code-4 {\r
        line-height: 1.6\r
    }\r
\r
    .mobile-lg\\:line-height-code-5 {\r
        line-height: 1.7\r
    }\r
\r
    .mobile-lg\\:line-height-code-6 {\r
        line-height: 1.8\r
    }\r
\r
    .mobile-lg\\:line-height-alt-1 {\r
        line-height: 1\r
    }\r
\r
    .mobile-lg\\:line-height-alt-2 {\r
        line-height: 1.2\r
    }\r
\r
    .mobile-lg\\:line-height-alt-3 {\r
        line-height: 1.4\r
    }\r
\r
    .mobile-lg\\:line-height-alt-4 {\r
        line-height: 1.5\r
    }\r
\r
    .mobile-lg\\:line-height-alt-5 {\r
        line-height: 1.7\r
    }\r
\r
    .mobile-lg\\:line-height-alt-6 {\r
        line-height: 1.8\r
    }\r
\r
    .mobile-lg\\:margin-neg-1px {\r
        margin: -1px\r
    }\r
\r
    .mobile-lg\\:margin-neg-2px {\r
        margin: -2px\r
    }\r
\r
    .mobile-lg\\:margin-neg-05 {\r
        margin: -.25rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-1 {\r
        margin: -.5rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-105 {\r
        margin: -.75rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-2 {\r
        margin: -1rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-205 {\r
        margin: -1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-3 {\r
        margin: -1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-1px {\r
        margin: 1px\r
    }\r
\r
    .mobile-lg\\:margin-2px {\r
        margin: 2px\r
    }\r
\r
    .mobile-lg\\:margin-05 {\r
        margin: .25rem\r
    }\r
\r
    .mobile-lg\\:margin-1 {\r
        margin: .5rem\r
    }\r
\r
    .mobile-lg\\:margin-105 {\r
        margin: .75rem\r
    }\r
\r
    .mobile-lg\\:margin-2 {\r
        margin: 1rem\r
    }\r
\r
    .mobile-lg\\:margin-205 {\r
        margin: 1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-3 {\r
        margin: 1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-4 {\r
        margin: -2rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-5 {\r
        margin: -2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-6 {\r
        margin: -3rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-7 {\r
        margin: -3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-8 {\r
        margin: -4rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-9 {\r
        margin: -4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-10 {\r
        margin: -5rem\r
    }\r
\r
    .mobile-lg\\:margin-neg-15 {\r
        margin: -7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-4 {\r
        margin: 2rem\r
    }\r
\r
    .mobile-lg\\:margin-5 {\r
        margin: 2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-6 {\r
        margin: 3rem\r
    }\r
\r
    .mobile-lg\\:margin-7 {\r
        margin: 3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-8 {\r
        margin: 4rem\r
    }\r
\r
    .mobile-lg\\:margin-9 {\r
        margin: 4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-10 {\r
        margin: 5rem\r
    }\r
\r
    .mobile-lg\\:margin-15 {\r
        margin: 7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-05em {\r
        margin: .5em\r
    }\r
\r
    .mobile-lg\\:margin-1em {\r
        margin: 1em\r
    }\r
\r
    .mobile-lg\\:margin-105em {\r
        margin: 1.5em\r
    }\r
\r
    .mobile-lg\\:margin-2em {\r
        margin: 2em\r
    }\r
\r
    .mobile-lg\\:margin-0 {\r
        margin: 0\r
    }\r
\r
    .mobile-lg\\:margin-y-1px {\r
        margin-top: 1px;\r
        margin-bottom: 1px\r
    }\r
\r
    .mobile-lg\\:margin-top-1px {\r
        margin-top: 1px\r
    }\r
\r
    .mobile-lg\\:margin-bottom-1px {\r
        margin-bottom: 1px\r
    }\r
\r
    .mobile-lg\\:margin-y-2px {\r
        margin-top: 2px;\r
        margin-bottom: 2px\r
    }\r
\r
    .mobile-lg\\:margin-top-2px {\r
        margin-top: 2px\r
    }\r
\r
    .mobile-lg\\:margin-bottom-2px {\r
        margin-bottom: 2px\r
    }\r
\r
    .mobile-lg\\:margin-y-05 {\r
        margin-top: .25rem;\r
        margin-bottom: .25rem\r
    }\r
\r
    .mobile-lg\\:margin-top-05 {\r
        margin-top: .25rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-05 {\r
        margin-bottom: .25rem\r
    }\r
\r
    .mobile-lg\\:margin-y-1 {\r
        margin-top: .5rem;\r
        margin-bottom: .5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-1 {\r
        margin-top: .5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-1 {\r
        margin-bottom: .5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-105 {\r
        margin-top: .75rem;\r
        margin-bottom: .75rem\r
    }\r
\r
    .mobile-lg\\:margin-top-105 {\r
        margin-top: .75rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-105 {\r
        margin-bottom: .75rem\r
    }\r
\r
    .mobile-lg\\:margin-y-2 {\r
        margin-top: 1rem;\r
        margin-bottom: 1rem\r
    }\r
\r
    .mobile-lg\\:margin-top-2 {\r
        margin-top: 1rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-2 {\r
        margin-bottom: 1rem\r
    }\r
\r
    .mobile-lg\\:margin-y-205 {\r
        margin-top: 1.25rem;\r
        margin-bottom: 1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-top-205 {\r
        margin-top: 1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-205 {\r
        margin-bottom: 1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-y-3 {\r
        margin-top: 1.5rem;\r
        margin-bottom: 1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-3 {\r
        margin-top: 1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-3 {\r
        margin-bottom: 1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-1px {\r
        margin-top: -1px;\r
        margin-bottom: -1px\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-1px {\r
        margin-top: -1px\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-1px {\r
        margin-bottom: -1px\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-2px {\r
        margin-top: -2px;\r
        margin-bottom: -2px\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-2px {\r
        margin-top: -2px\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-2px {\r
        margin-bottom: -2px\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-05 {\r
        margin-top: -.25rem;\r
        margin-bottom: -.25rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-05 {\r
        margin-top: -.25rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-05 {\r
        margin-bottom: -.25rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-1 {\r
        margin-top: -.5rem;\r
        margin-bottom: -.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-1 {\r
        margin-top: -.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-1 {\r
        margin-bottom: -.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-105 {\r
        margin-top: -.75rem;\r
        margin-bottom: -.75rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-105 {\r
        margin-top: -.75rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-105 {\r
        margin-bottom: -.75rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-2 {\r
        margin-top: -1rem;\r
        margin-bottom: -1rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-2 {\r
        margin-top: -1rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-2 {\r
        margin-bottom: -1rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-205 {\r
        margin-top: -1.25rem;\r
        margin-bottom: -1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-205 {\r
        margin-top: -1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-205 {\r
        margin-bottom: -1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-3 {\r
        margin-top: -1.5rem;\r
        margin-bottom: -1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-3 {\r
        margin-top: -1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-3 {\r
        margin-bottom: -1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-4 {\r
        margin-top: -2rem;\r
        margin-bottom: -2rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-4 {\r
        margin-top: -2rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-4 {\r
        margin-bottom: -2rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-5 {\r
        margin-top: -2.5rem;\r
        margin-bottom: -2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-5 {\r
        margin-top: -2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-5 {\r
        margin-bottom: -2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-6 {\r
        margin-top: -3rem;\r
        margin-bottom: -3rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-6 {\r
        margin-top: -3rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-6 {\r
        margin-bottom: -3rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-7 {\r
        margin-top: -3.5rem;\r
        margin-bottom: -3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-7 {\r
        margin-top: -3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-7 {\r
        margin-bottom: -3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-8 {\r
        margin-top: -4rem;\r
        margin-bottom: -4rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-8 {\r
        margin-top: -4rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-8 {\r
        margin-bottom: -4rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-9 {\r
        margin-top: -4.5rem;\r
        margin-bottom: -4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-9 {\r
        margin-top: -4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-9 {\r
        margin-bottom: -4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-10 {\r
        margin-top: -5rem;\r
        margin-bottom: -5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-10 {\r
        margin-top: -5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-10 {\r
        margin-bottom: -5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-neg-15 {\r
        margin-top: -7.5rem;\r
        margin-bottom: -7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-neg-15 {\r
        margin-top: -7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-neg-15 {\r
        margin-bottom: -7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-4 {\r
        margin-top: 2rem;\r
        margin-bottom: 2rem\r
    }\r
\r
    .mobile-lg\\:margin-top-4 {\r
        margin-top: 2rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-4 {\r
        margin-bottom: 2rem\r
    }\r
\r
    .mobile-lg\\:margin-y-5 {\r
        margin-top: 2.5rem;\r
        margin-bottom: 2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-5 {\r
        margin-top: 2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-5 {\r
        margin-bottom: 2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-6 {\r
        margin-top: 3rem;\r
        margin-bottom: 3rem\r
    }\r
\r
    .mobile-lg\\:margin-top-6 {\r
        margin-top: 3rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-6 {\r
        margin-bottom: 3rem\r
    }\r
\r
    .mobile-lg\\:margin-y-7 {\r
        margin-top: 3.5rem;\r
        margin-bottom: 3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-7 {\r
        margin-top: 3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-7 {\r
        margin-bottom: 3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-8 {\r
        margin-top: 4rem;\r
        margin-bottom: 4rem\r
    }\r
\r
    .mobile-lg\\:margin-top-8 {\r
        margin-top: 4rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-8 {\r
        margin-bottom: 4rem\r
    }\r
\r
    .mobile-lg\\:margin-y-9 {\r
        margin-top: 4.5rem;\r
        margin-bottom: 4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-9 {\r
        margin-top: 4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-9 {\r
        margin-bottom: 4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-10 {\r
        margin-top: 5rem;\r
        margin-bottom: 5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-10 {\r
        margin-top: 5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-10 {\r
        margin-bottom: 5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-15 {\r
        margin-top: 7.5rem;\r
        margin-bottom: 7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-top-15 {\r
        margin-top: 7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-bottom-15 {\r
        margin-bottom: 7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-y-05em {\r
        margin-top: .5em;\r
        margin-bottom: .5em\r
    }\r
\r
    .mobile-lg\\:margin-top-05em {\r
        margin-top: .5em\r
    }\r
\r
    .mobile-lg\\:margin-bottom-05em {\r
        margin-bottom: .5em\r
    }\r
\r
    .mobile-lg\\:margin-y-1em {\r
        margin-top: 1em;\r
        margin-bottom: 1em\r
    }\r
\r
    .mobile-lg\\:margin-top-1em {\r
        margin-top: 1em\r
    }\r
\r
    .mobile-lg\\:margin-bottom-1em {\r
        margin-bottom: 1em\r
    }\r
\r
    .mobile-lg\\:margin-y-105em {\r
        margin-top: 1.5em;\r
        margin-bottom: 1.5em\r
    }\r
\r
    .mobile-lg\\:margin-top-105em {\r
        margin-top: 1.5em\r
    }\r
\r
    .mobile-lg\\:margin-bottom-105em {\r
        margin-bottom: 1.5em\r
    }\r
\r
    .mobile-lg\\:margin-y-2em {\r
        margin-top: 2em;\r
        margin-bottom: 2em\r
    }\r
\r
    .mobile-lg\\:margin-top-2em {\r
        margin-top: 2em\r
    }\r
\r
    .mobile-lg\\:margin-bottom-2em {\r
        margin-bottom: 2em\r
    }\r
\r
    .mobile-lg\\:margin-y-0 {\r
        margin-top: 0;\r
        margin-bottom: 0\r
    }\r
\r
    .mobile-lg\\:margin-top-0 {\r
        margin-top: 0\r
    }\r
\r
    .mobile-lg\\:margin-bottom-0 {\r
        margin-bottom: 0\r
    }\r
\r
    .mobile-lg\\:margin-y-auto {\r
        margin-top: auto;\r
        margin-bottom: auto\r
    }\r
\r
    .mobile-lg\\:margin-top-auto {\r
        margin-top: auto\r
    }\r
\r
    .mobile-lg\\:margin-bottom-auto {\r
        margin-bottom: auto\r
    }\r
\r
    .mobile-lg\\:margin-x-1px {\r
        margin-left: 1px;\r
        margin-right: 1px\r
    }\r
\r
    .mobile-lg\\:margin-right-1px {\r
        margin-right: 1px\r
    }\r
\r
    .mobile-lg\\:margin-left-1px {\r
        margin-left: 1px\r
    }\r
\r
    .mobile-lg\\:margin-x-2px {\r
        margin-left: 2px;\r
        margin-right: 2px\r
    }\r
\r
    .mobile-lg\\:margin-right-2px {\r
        margin-right: 2px\r
    }\r
\r
    .mobile-lg\\:margin-left-2px {\r
        margin-left: 2px\r
    }\r
\r
    .mobile-lg\\:margin-x-05 {\r
        margin-left: .25rem;\r
        margin-right: .25rem\r
    }\r
\r
    .mobile-lg\\:margin-right-05 {\r
        margin-right: .25rem\r
    }\r
\r
    .mobile-lg\\:margin-left-05 {\r
        margin-left: .25rem\r
    }\r
\r
    .mobile-lg\\:margin-x-1 {\r
        margin-left: .5rem;\r
        margin-right: .5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-1 {\r
        margin-right: .5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-1 {\r
        margin-left: .5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-105 {\r
        margin-left: .75rem;\r
        margin-right: .75rem\r
    }\r
\r
    .mobile-lg\\:margin-right-105 {\r
        margin-right: .75rem\r
    }\r
\r
    .mobile-lg\\:margin-left-105 {\r
        margin-left: .75rem\r
    }\r
\r
    .mobile-lg\\:margin-x-2 {\r
        margin-left: 1rem;\r
        margin-right: 1rem\r
    }\r
\r
    .mobile-lg\\:margin-right-2 {\r
        margin-right: 1rem\r
    }\r
\r
    .mobile-lg\\:margin-left-2 {\r
        margin-left: 1rem\r
    }\r
\r
    .mobile-lg\\:margin-x-205 {\r
        margin-left: 1.25rem;\r
        margin-right: 1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-right-205 {\r
        margin-right: 1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-left-205 {\r
        margin-left: 1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-x-3 {\r
        margin-left: 1.5rem;\r
        margin-right: 1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-3 {\r
        margin-right: 1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-3 {\r
        margin-left: 1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-1px {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-1px {\r
        margin-right: -1px\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-1px {\r
        margin-left: -1px\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-2px {\r
        margin-left: -2px;\r
        margin-right: -2px\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-2px {\r
        margin-right: -2px\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-2px {\r
        margin-left: -2px\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-05 {\r
        margin-left: -.25rem;\r
        margin-right: -.25rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-05 {\r
        margin-right: -.25rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-05 {\r
        margin-left: -.25rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-1 {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-1 {\r
        margin-right: -.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-1 {\r
        margin-left: -.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-105 {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-105 {\r
        margin-right: -.75rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-105 {\r
        margin-left: -.75rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-2 {\r
        margin-left: -1rem;\r
        margin-right: -1rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-2 {\r
        margin-right: -1rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-2 {\r
        margin-left: -1rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-205 {\r
        margin-left: -1.25rem;\r
        margin-right: -1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-205 {\r
        margin-right: -1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-205 {\r
        margin-left: -1.25rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-3 {\r
        margin-left: -1.5rem;\r
        margin-right: -1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-3 {\r
        margin-right: -1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-3 {\r
        margin-left: -1.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-4 {\r
        margin-left: -2rem;\r
        margin-right: -2rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-4 {\r
        margin-right: -2rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-4 {\r
        margin-left: -2rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-5 {\r
        margin-left: -2.5rem;\r
        margin-right: -2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-5 {\r
        margin-right: -2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-5 {\r
        margin-left: -2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-6 {\r
        margin-left: -3rem;\r
        margin-right: -3rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-6 {\r
        margin-right: -3rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-6 {\r
        margin-left: -3rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-7 {\r
        margin-left: -3.5rem;\r
        margin-right: -3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-7 {\r
        margin-right: -3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-7 {\r
        margin-left: -3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-8 {\r
        margin-left: -4rem;\r
        margin-right: -4rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-8 {\r
        margin-right: -4rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-8 {\r
        margin-left: -4rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-9 {\r
        margin-left: -4.5rem;\r
        margin-right: -4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-9 {\r
        margin-right: -4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-9 {\r
        margin-left: -4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-10 {\r
        margin-left: -5rem;\r
        margin-right: -5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-10 {\r
        margin-right: -5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-10 {\r
        margin-left: -5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-neg-15 {\r
        margin-left: -7.5rem;\r
        margin-right: -7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-neg-15 {\r
        margin-right: -7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-neg-15 {\r
        margin-left: -7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-4 {\r
        margin-left: 2rem;\r
        margin-right: 2rem\r
    }\r
\r
    .mobile-lg\\:margin-right-4 {\r
        margin-right: 2rem\r
    }\r
\r
    .mobile-lg\\:margin-left-4 {\r
        margin-left: 2rem\r
    }\r
\r
    .mobile-lg\\:margin-x-5 {\r
        margin-left: 2.5rem;\r
        margin-right: 2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-5 {\r
        margin-right: 2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-5 {\r
        margin-left: 2.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-6 {\r
        margin-left: 3rem;\r
        margin-right: 3rem\r
    }\r
\r
    .mobile-lg\\:margin-right-6 {\r
        margin-right: 3rem\r
    }\r
\r
    .mobile-lg\\:margin-left-6 {\r
        margin-left: 3rem\r
    }\r
\r
    .mobile-lg\\:margin-x-7 {\r
        margin-left: 3.5rem;\r
        margin-right: 3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-7 {\r
        margin-right: 3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-7 {\r
        margin-left: 3.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-8 {\r
        margin-left: 4rem;\r
        margin-right: 4rem\r
    }\r
\r
    .mobile-lg\\:margin-right-8 {\r
        margin-right: 4rem\r
    }\r
\r
    .mobile-lg\\:margin-left-8 {\r
        margin-left: 4rem\r
    }\r
\r
    .mobile-lg\\:margin-x-9 {\r
        margin-left: 4.5rem;\r
        margin-right: 4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-9 {\r
        margin-right: 4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-9 {\r
        margin-left: 4.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-10 {\r
        margin-left: 5rem;\r
        margin-right: 5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-10 {\r
        margin-right: 5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-10 {\r
        margin-left: 5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-15 {\r
        margin-left: 7.5rem;\r
        margin-right: 7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-right-15 {\r
        margin-right: 7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-left-15 {\r
        margin-left: 7.5rem\r
    }\r
\r
    .mobile-lg\\:margin-x-card {\r
        margin-left: 10rem;\r
        margin-right: 10rem\r
    }\r
\r
    .mobile-lg\\:margin-right-card {\r
        margin-right: 10rem\r
    }\r
\r
    .mobile-lg\\:margin-left-card {\r
        margin-left: 10rem\r
    }\r
\r
    .mobile-lg\\:margin-x-card-lg {\r
        margin-left: 15rem;\r
        margin-right: 15rem\r
    }\r
\r
    .mobile-lg\\:margin-right-card-lg {\r
        margin-right: 15rem\r
    }\r
\r
    .mobile-lg\\:margin-left-card-lg {\r
        margin-left: 15rem\r
    }\r
\r
    .mobile-lg\\:margin-x-mobile {\r
        margin-left: 20rem;\r
        margin-right: 20rem\r
    }\r
\r
    .mobile-lg\\:margin-right-mobile {\r
        margin-right: 20rem\r
    }\r
\r
    .mobile-lg\\:margin-left-mobile {\r
        margin-left: 20rem\r
    }\r
\r
    .mobile-lg\\:margin-x-05em {\r
        margin-left: .5em;\r
        margin-right: .5em\r
    }\r
\r
    .mobile-lg\\:margin-right-05em {\r
        margin-right: .5em\r
    }\r
\r
    .mobile-lg\\:margin-left-05em {\r
        margin-left: .5em\r
    }\r
\r
    .mobile-lg\\:margin-x-1em {\r
        margin-left: 1em;\r
        margin-right: 1em\r
    }\r
\r
    .mobile-lg\\:margin-right-1em {\r
        margin-right: 1em\r
    }\r
\r
    .mobile-lg\\:margin-left-1em {\r
        margin-left: 1em\r
    }\r
\r
    .mobile-lg\\:margin-x-105em {\r
        margin-left: 1.5em;\r
        margin-right: 1.5em\r
    }\r
\r
    .mobile-lg\\:margin-right-105em {\r
        margin-right: 1.5em\r
    }\r
\r
    .mobile-lg\\:margin-left-105em {\r
        margin-left: 1.5em\r
    }\r
\r
    .mobile-lg\\:margin-x-2em {\r
        margin-left: 2em;\r
        margin-right: 2em\r
    }\r
\r
    .mobile-lg\\:margin-right-2em {\r
        margin-right: 2em\r
    }\r
\r
    .mobile-lg\\:margin-left-2em {\r
        margin-left: 2em\r
    }\r
\r
    .mobile-lg\\:margin-x-0 {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
\r
    .mobile-lg\\:margin-right-0 {\r
        margin-right: 0\r
    }\r
\r
    .mobile-lg\\:margin-left-0 {\r
        margin-left: 0\r
    }\r
\r
    .mobile-lg\\:margin-x-auto {\r
        margin-left: auto;\r
        margin-right: auto\r
    }\r
\r
    .mobile-lg\\:margin-right-auto {\r
        margin-right: auto\r
    }\r
\r
    .mobile-lg\\:margin-left-auto {\r
        margin-left: auto\r
    }\r
\r
    .mobile-lg\\:measure-1 {\r
        max-width: 44ex\r
    }\r
\r
    .mobile-lg\\:measure-2 {\r
        max-width: 60ex\r
    }\r
\r
    .mobile-lg\\:measure-3 {\r
        max-width: 64ex\r
    }\r
\r
    .mobile-lg\\:measure-4 {\r
        max-width: 68ex\r
    }\r
\r
    .mobile-lg\\:measure-5 {\r
        max-width: 72ex\r
    }\r
\r
    .mobile-lg\\:measure-6 {\r
        max-width: 88ex\r
    }\r
\r
    .mobile-lg\\:measure-none {\r
        max-width: none\r
    }\r
\r
    .mobile-lg\\:order-first {\r
        order: -1\r
    }\r
\r
    .mobile-lg\\:order-last {\r
        order: 999\r
    }\r
\r
    .mobile-lg\\:order-initial {\r
        order: initial\r
    }\r
\r
    .mobile-lg\\:order-0 {\r
        order: 0\r
    }\r
\r
    .mobile-lg\\:order-1 {\r
        order: 1\r
    }\r
\r
    .mobile-lg\\:order-2 {\r
        order: 2\r
    }\r
\r
    .mobile-lg\\:order-3 {\r
        order: 3\r
    }\r
\r
    .mobile-lg\\:order-4 {\r
        order: 4\r
    }\r
\r
    .mobile-lg\\:order-5 {\r
        order: 5\r
    }\r
\r
    .mobile-lg\\:order-6 {\r
        order: 6\r
    }\r
\r
    .mobile-lg\\:order-7 {\r
        order: 7\r
    }\r
\r
    .mobile-lg\\:order-8 {\r
        order: 8\r
    }\r
\r
    .mobile-lg\\:order-9 {\r
        order: 9\r
    }\r
\r
    .mobile-lg\\:order-10 {\r
        order: 10\r
    }\r
\r
    .mobile-lg\\:order-11 {\r
        order: 11\r
    }\r
\r
    .mobile-lg\\:padding-1px {\r
        padding: 1px\r
    }\r
\r
    .mobile-lg\\:padding-y-1px {\r
        padding-top: 1px;\r
        padding-bottom: 1px\r
    }\r
\r
    .mobile-lg\\:padding-x-1px {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .mobile-lg\\:padding-top-1px {\r
        padding-top: 1px\r
    }\r
\r
    .mobile-lg\\:padding-right-1px {\r
        padding-right: 1px\r
    }\r
\r
    .mobile-lg\\:padding-bottom-1px {\r
        padding-bottom: 1px\r
    }\r
\r
    .mobile-lg\\:padding-left-1px {\r
        padding-left: 1px\r
    }\r
\r
    .mobile-lg\\:padding-2px {\r
        padding: 2px\r
    }\r
\r
    .mobile-lg\\:padding-y-2px {\r
        padding-top: 2px;\r
        padding-bottom: 2px\r
    }\r
\r
    .mobile-lg\\:padding-x-2px {\r
        padding-left: 2px;\r
        padding-right: 2px\r
    }\r
\r
    .mobile-lg\\:padding-top-2px {\r
        padding-top: 2px\r
    }\r
\r
    .mobile-lg\\:padding-right-2px {\r
        padding-right: 2px\r
    }\r
\r
    .mobile-lg\\:padding-bottom-2px {\r
        padding-bottom: 2px\r
    }\r
\r
    .mobile-lg\\:padding-left-2px {\r
        padding-left: 2px\r
    }\r
\r
    .mobile-lg\\:padding-05 {\r
        padding: .25rem\r
    }\r
\r
    .mobile-lg\\:padding-y-05 {\r
        padding-top: .25rem;\r
        padding-bottom: .25rem\r
    }\r
\r
    .mobile-lg\\:padding-x-05 {\r
        padding-left: .25rem;\r
        padding-right: .25rem\r
    }\r
\r
    .mobile-lg\\:padding-top-05 {\r
        padding-top: .25rem\r
    }\r
\r
    .mobile-lg\\:padding-right-05 {\r
        padding-right: .25rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-05 {\r
        padding-bottom: .25rem\r
    }\r
\r
    .mobile-lg\\:padding-left-05 {\r
        padding-left: .25rem\r
    }\r
\r
    .mobile-lg\\:padding-1 {\r
        padding: .5rem\r
    }\r
\r
    .mobile-lg\\:padding-y-1 {\r
        padding-top: .5rem;\r
        padding-bottom: .5rem\r
    }\r
\r
    .mobile-lg\\:padding-x-1 {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .mobile-lg\\:padding-top-1 {\r
        padding-top: .5rem\r
    }\r
\r
    .mobile-lg\\:padding-right-1 {\r
        padding-right: .5rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-1 {\r
        padding-bottom: .5rem\r
    }\r
\r
    .mobile-lg\\:padding-left-1 {\r
        padding-left: .5rem\r
    }\r
\r
    .mobile-lg\\:padding-105 {\r
        padding: .75rem\r
    }\r
\r
    .mobile-lg\\:padding-y-105 {\r
        padding-top: .75rem;\r
        padding-bottom: .75rem\r
    }\r
\r
    .mobile-lg\\:padding-x-105 {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
\r
    .mobile-lg\\:padding-top-105 {\r
        padding-top: .75rem\r
    }\r
\r
    .mobile-lg\\:padding-right-105 {\r
        padding-right: .75rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-105 {\r
        padding-bottom: .75rem\r
    }\r
\r
    .mobile-lg\\:padding-left-105 {\r
        padding-left: .75rem\r
    }\r
\r
    .mobile-lg\\:padding-2 {\r
        padding: 1rem\r
    }\r
\r
    .mobile-lg\\:padding-y-2 {\r
        padding-top: 1rem;\r
        padding-bottom: 1rem\r
    }\r
\r
    .mobile-lg\\:padding-x-2 {\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
\r
    .mobile-lg\\:padding-top-2 {\r
        padding-top: 1rem\r
    }\r
\r
    .mobile-lg\\:padding-right-2 {\r
        padding-right: 1rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-2 {\r
        padding-bottom: 1rem\r
    }\r
\r
    .mobile-lg\\:padding-left-2 {\r
        padding-left: 1rem\r
    }\r
\r
    .mobile-lg\\:padding-205 {\r
        padding: 1.25rem\r
    }\r
\r
    .mobile-lg\\:padding-y-205 {\r
        padding-top: 1.25rem;\r
        padding-bottom: 1.25rem\r
    }\r
\r
    .mobile-lg\\:padding-x-205 {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem\r
    }\r
\r
    .mobile-lg\\:padding-top-205 {\r
        padding-top: 1.25rem\r
    }\r
\r
    .mobile-lg\\:padding-right-205 {\r
        padding-right: 1.25rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-205 {\r
        padding-bottom: 1.25rem\r
    }\r
\r
    .mobile-lg\\:padding-left-205 {\r
        padding-left: 1.25rem\r
    }\r
\r
    .mobile-lg\\:padding-3 {\r
        padding: 1.5rem\r
    }\r
\r
    .mobile-lg\\:padding-y-3 {\r
        padding-top: 1.5rem;\r
        padding-bottom: 1.5rem\r
    }\r
\r
    .mobile-lg\\:padding-x-3 {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem\r
    }\r
\r
    .mobile-lg\\:padding-top-3 {\r
        padding-top: 1.5rem\r
    }\r
\r
    .mobile-lg\\:padding-right-3 {\r
        padding-right: 1.5rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-3 {\r
        padding-bottom: 1.5rem\r
    }\r
\r
    .mobile-lg\\:padding-left-3 {\r
        padding-left: 1.5rem\r
    }\r
\r
    .mobile-lg\\:padding-4 {\r
        padding: 2rem\r
    }\r
\r
    .mobile-lg\\:padding-y-4 {\r
        padding-top: 2rem;\r
        padding-bottom: 2rem\r
    }\r
\r
    .mobile-lg\\:padding-x-4 {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
\r
    .mobile-lg\\:padding-top-4 {\r
        padding-top: 2rem\r
    }\r
\r
    .mobile-lg\\:padding-right-4 {\r
        padding-right: 2rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-4 {\r
        padding-bottom: 2rem\r
    }\r
\r
    .mobile-lg\\:padding-left-4 {\r
        padding-left: 2rem\r
    }\r
\r
    .mobile-lg\\:padding-5 {\r
        padding: 2.5rem\r
    }\r
\r
    .mobile-lg\\:padding-y-5 {\r
        padding-top: 2.5rem;\r
        padding-bottom: 2.5rem\r
    }\r
\r
    .mobile-lg\\:padding-x-5 {\r
        padding-left: 2.5rem;\r
        padding-right: 2.5rem\r
    }\r
\r
    .mobile-lg\\:padding-top-5 {\r
        padding-top: 2.5rem\r
    }\r
\r
    .mobile-lg\\:padding-right-5 {\r
        padding-right: 2.5rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-5 {\r
        padding-bottom: 2.5rem\r
    }\r
\r
    .mobile-lg\\:padding-left-5 {\r
        padding-left: 2.5rem\r
    }\r
\r
    .mobile-lg\\:padding-6 {\r
        padding: 3rem\r
    }\r
\r
    .mobile-lg\\:padding-y-6 {\r
        padding-top: 3rem;\r
        padding-bottom: 3rem\r
    }\r
\r
    .mobile-lg\\:padding-x-6 {\r
        padding-left: 3rem;\r
        padding-right: 3rem\r
    }\r
\r
    .mobile-lg\\:padding-top-6 {\r
        padding-top: 3rem\r
    }\r
\r
    .mobile-lg\\:padding-right-6 {\r
        padding-right: 3rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-6 {\r
        padding-bottom: 3rem\r
    }\r
\r
    .mobile-lg\\:padding-left-6 {\r
        padding-left: 3rem\r
    }\r
\r
    .mobile-lg\\:padding-7 {\r
        padding: 3.5rem\r
    }\r
\r
    .mobile-lg\\:padding-y-7 {\r
        padding-top: 3.5rem;\r
        padding-bottom: 3.5rem\r
    }\r
\r
    .mobile-lg\\:padding-x-7 {\r
        padding-left: 3.5rem;\r
        padding-right: 3.5rem\r
    }\r
\r
    .mobile-lg\\:padding-top-7 {\r
        padding-top: 3.5rem\r
    }\r
\r
    .mobile-lg\\:padding-right-7 {\r
        padding-right: 3.5rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-7 {\r
        padding-bottom: 3.5rem\r
    }\r
\r
    .mobile-lg\\:padding-left-7 {\r
        padding-left: 3.5rem\r
    }\r
\r
    .mobile-lg\\:padding-8 {\r
        padding: 4rem\r
    }\r
\r
    .mobile-lg\\:padding-y-8 {\r
        padding-top: 4rem;\r
        padding-bottom: 4rem\r
    }\r
\r
    .mobile-lg\\:padding-x-8 {\r
        padding-left: 4rem;\r
        padding-right: 4rem\r
    }\r
\r
    .mobile-lg\\:padding-top-8 {\r
        padding-top: 4rem\r
    }\r
\r
    .mobile-lg\\:padding-right-8 {\r
        padding-right: 4rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-8 {\r
        padding-bottom: 4rem\r
    }\r
\r
    .mobile-lg\\:padding-left-8 {\r
        padding-left: 4rem\r
    }\r
\r
    .mobile-lg\\:padding-9 {\r
        padding: 4.5rem\r
    }\r
\r
    .mobile-lg\\:padding-y-9 {\r
        padding-top: 4.5rem;\r
        padding-bottom: 4.5rem\r
    }\r
\r
    .mobile-lg\\:padding-x-9 {\r
        padding-left: 4.5rem;\r
        padding-right: 4.5rem\r
    }\r
\r
    .mobile-lg\\:padding-top-9 {\r
        padding-top: 4.5rem\r
    }\r
\r
    .mobile-lg\\:padding-right-9 {\r
        padding-right: 4.5rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-9 {\r
        padding-bottom: 4.5rem\r
    }\r
\r
    .mobile-lg\\:padding-left-9 {\r
        padding-left: 4.5rem\r
    }\r
\r
    .mobile-lg\\:padding-10 {\r
        padding: 5rem\r
    }\r
\r
    .mobile-lg\\:padding-y-10 {\r
        padding-top: 5rem;\r
        padding-bottom: 5rem\r
    }\r
\r
    .mobile-lg\\:padding-x-10 {\r
        padding-left: 5rem;\r
        padding-right: 5rem\r
    }\r
\r
    .mobile-lg\\:padding-top-10 {\r
        padding-top: 5rem\r
    }\r
\r
    .mobile-lg\\:padding-right-10 {\r
        padding-right: 5rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-10 {\r
        padding-bottom: 5rem\r
    }\r
\r
    .mobile-lg\\:padding-left-10 {\r
        padding-left: 5rem\r
    }\r
\r
    .mobile-lg\\:padding-15 {\r
        padding: 7.5rem\r
    }\r
\r
    .mobile-lg\\:padding-y-15 {\r
        padding-top: 7.5rem;\r
        padding-bottom: 7.5rem\r
    }\r
\r
    .mobile-lg\\:padding-x-15 {\r
        padding-left: 7.5rem;\r
        padding-right: 7.5rem\r
    }\r
\r
    .mobile-lg\\:padding-top-15 {\r
        padding-top: 7.5rem\r
    }\r
\r
    .mobile-lg\\:padding-right-15 {\r
        padding-right: 7.5rem\r
    }\r
\r
    .mobile-lg\\:padding-bottom-15 {\r
        padding-bottom: 7.5rem\r
    }\r
\r
    .mobile-lg\\:padding-left-15 {\r
        padding-left: 7.5rem\r
    }\r
\r
    .mobile-lg\\:padding-0 {\r
        padding: 0\r
    }\r
\r
    .mobile-lg\\:padding-y-0 {\r
        padding-top: 0;\r
        padding-bottom: 0\r
    }\r
\r
    .mobile-lg\\:padding-x-0 {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
\r
    .mobile-lg\\:padding-top-0 {\r
        padding-top: 0\r
    }\r
\r
    .mobile-lg\\:padding-right-0 {\r
        padding-right: 0\r
    }\r
\r
    .mobile-lg\\:padding-bottom-0 {\r
        padding-bottom: 0\r
    }\r
\r
    .mobile-lg\\:padding-left-0 {\r
        padding-left: 0\r
    }\r
\r
    .mobile-lg\\:width-1px {\r
        width: 1px\r
    }\r
\r
    .mobile-lg\\:width-2px {\r
        width: 2px\r
    }\r
\r
    .mobile-lg\\:width-05 {\r
        width: .25rem\r
    }\r
\r
    .mobile-lg\\:width-1 {\r
        width: .5rem\r
    }\r
\r
    .mobile-lg\\:width-105 {\r
        width: .75rem\r
    }\r
\r
    .mobile-lg\\:width-2 {\r
        width: 1rem\r
    }\r
\r
    .mobile-lg\\:width-205 {\r
        width: 1.25rem\r
    }\r
\r
    .mobile-lg\\:width-3 {\r
        width: 1.5rem\r
    }\r
\r
    .mobile-lg\\:width-4 {\r
        width: 2rem\r
    }\r
\r
    .mobile-lg\\:width-5 {\r
        width: 2.5rem\r
    }\r
\r
    .mobile-lg\\:width-6 {\r
        width: 3rem\r
    }\r
\r
    .mobile-lg\\:width-7 {\r
        width: 3.5rem\r
    }\r
\r
    .mobile-lg\\:width-8 {\r
        width: 4rem\r
    }\r
\r
    .mobile-lg\\:width-9 {\r
        width: 4.5rem\r
    }\r
\r
    .mobile-lg\\:width-10 {\r
        width: 5rem\r
    }\r
\r
    .mobile-lg\\:width-15 {\r
        width: 7.5rem\r
    }\r
\r
    .mobile-lg\\:width-card {\r
        width: 10rem\r
    }\r
\r
    .mobile-lg\\:width-card-lg {\r
        width: 15rem\r
    }\r
\r
    .mobile-lg\\:width-mobile {\r
        width: 20rem\r
    }\r
\r
    .mobile-lg\\:width-mobile-lg {\r
        width: 30rem\r
    }\r
\r
    .mobile-lg\\:width-tablet {\r
        width: 40rem\r
    }\r
\r
    .mobile-lg\\:width-tablet-lg {\r
        width: 55rem\r
    }\r
\r
    .mobile-lg\\:width-desktop {\r
        width: 64rem\r
    }\r
\r
    .mobile-lg\\:width-desktop-lg {\r
        width: 75rem\r
    }\r
\r
    .mobile-lg\\:width-widescreen {\r
        width: 87.5rem\r
    }\r
\r
    .mobile-lg\\:width-0 {\r
        width: 0\r
    }\r
\r
    .mobile-lg\\:width-full {\r
        width: 100%\r
    }\r
\r
    .mobile-lg\\:width-auto {\r
        width: auto\r
    }\r
}\r
\r
@media all and (min-width:40em) {\r
\r
    .tablet\\:border-1px,\r
    .tablet\\:hover\\:border-1px:hover {\r
        border: 1px solid\r
    }\r
\r
    .tablet\\:border-y-1px,\r
    .tablet\\:hover\\:border-y-1px:hover {\r
        border-top: 1px solid;\r
        border-bottom: 1px solid\r
    }\r
\r
    .tablet\\:border-x-1px,\r
    .tablet\\:hover\\:border-x-1px:hover {\r
        border-left: 1px solid;\r
        border-right: 1px solid\r
    }\r
\r
    .tablet\\:border-top-1px,\r
    .tablet\\:hover\\:border-top-1px:hover {\r
        border-top: 1px solid\r
    }\r
\r
    .tablet\\:border-right-1px,\r
    .tablet\\:hover\\:border-right-1px:hover {\r
        border-right: 1px solid\r
    }\r
\r
    .tablet\\:border-bottom-1px,\r
    .tablet\\:hover\\:border-bottom-1px:hover {\r
        border-bottom: 1px solid\r
    }\r
\r
    .tablet\\:border-left-1px,\r
    .tablet\\:hover\\:border-left-1px:hover {\r
        border-left: 1px solid\r
    }\r
\r
    .tablet\\:border-2px,\r
    .tablet\\:hover\\:border-2px:hover {\r
        border: 2px solid\r
    }\r
\r
    .tablet\\:border-y-2px,\r
    .tablet\\:hover\\:border-y-2px:hover {\r
        border-top: 2px solid;\r
        border-bottom: 2px solid\r
    }\r
\r
    .tablet\\:border-x-2px,\r
    .tablet\\:hover\\:border-x-2px:hover {\r
        border-left: 2px solid;\r
        border-right: 2px solid\r
    }\r
\r
    .tablet\\:border-top-2px,\r
    .tablet\\:hover\\:border-top-2px:hover {\r
        border-top: 2px solid\r
    }\r
\r
    .tablet\\:border-right-2px,\r
    .tablet\\:hover\\:border-right-2px:hover {\r
        border-right: 2px solid\r
    }\r
\r
    .tablet\\:border-bottom-2px,\r
    .tablet\\:hover\\:border-bottom-2px:hover {\r
        border-bottom: 2px solid\r
    }\r
\r
    .tablet\\:border-left-2px,\r
    .tablet\\:hover\\:border-left-2px:hover {\r
        border-left: 2px solid\r
    }\r
\r
    .tablet\\:border-05,\r
    .tablet\\:hover\\:border-05:hover {\r
        border: .25rem solid\r
    }\r
\r
    .tablet\\:border-y-05,\r
    .tablet\\:hover\\:border-y-05:hover {\r
        border-top: .25rem solid;\r
        border-bottom: .25rem solid\r
    }\r
\r
    .tablet\\:border-x-05,\r
    .tablet\\:hover\\:border-x-05:hover {\r
        border-left: .25rem solid;\r
        border-right: .25rem solid\r
    }\r
\r
    .tablet\\:border-top-05,\r
    .tablet\\:hover\\:border-top-05:hover {\r
        border-top: .25rem solid\r
    }\r
\r
    .tablet\\:border-right-05,\r
    .tablet\\:hover\\:border-right-05:hover {\r
        border-right: .25rem solid\r
    }\r
\r
    .tablet\\:border-bottom-05,\r
    .tablet\\:hover\\:border-bottom-05:hover {\r
        border-bottom: .25rem solid\r
    }\r
\r
    .tablet\\:border-left-05,\r
    .tablet\\:hover\\:border-left-05:hover {\r
        border-left: .25rem solid\r
    }\r
\r
    .tablet\\:border-1,\r
    .tablet\\:hover\\:border-1:hover {\r
        border: .5rem solid\r
    }\r
\r
    .tablet\\:border-y-1,\r
    .tablet\\:hover\\:border-y-1:hover {\r
        border-top: .5rem solid;\r
        border-bottom: .5rem solid\r
    }\r
\r
    .tablet\\:border-x-1,\r
    .tablet\\:hover\\:border-x-1:hover {\r
        border-left: .5rem solid;\r
        border-right: .5rem solid\r
    }\r
\r
    .tablet\\:border-top-1,\r
    .tablet\\:hover\\:border-top-1:hover {\r
        border-top: .5rem solid\r
    }\r
\r
    .tablet\\:border-right-1,\r
    .tablet\\:hover\\:border-right-1:hover {\r
        border-right: .5rem solid\r
    }\r
\r
    .tablet\\:border-bottom-1,\r
    .tablet\\:hover\\:border-bottom-1:hover {\r
        border-bottom: .5rem solid\r
    }\r
\r
    .tablet\\:border-left-1,\r
    .tablet\\:hover\\:border-left-1:hover {\r
        border-left: .5rem solid\r
    }\r
\r
    .tablet\\:border-105,\r
    .tablet\\:hover\\:border-105:hover {\r
        border: .75rem solid\r
    }\r
\r
    .tablet\\:border-y-105,\r
    .tablet\\:hover\\:border-y-105:hover {\r
        border-top: .75rem solid;\r
        border-bottom: .75rem solid\r
    }\r
\r
    .tablet\\:border-x-105,\r
    .tablet\\:hover\\:border-x-105:hover {\r
        border-left: .75rem solid;\r
        border-right: .75rem solid\r
    }\r
\r
    .tablet\\:border-top-105,\r
    .tablet\\:hover\\:border-top-105:hover {\r
        border-top: .75rem solid\r
    }\r
\r
    .tablet\\:border-right-105,\r
    .tablet\\:hover\\:border-right-105:hover {\r
        border-right: .75rem solid\r
    }\r
\r
    .tablet\\:border-bottom-105,\r
    .tablet\\:hover\\:border-bottom-105:hover {\r
        border-bottom: .75rem solid\r
    }\r
\r
    .tablet\\:border-left-105,\r
    .tablet\\:hover\\:border-left-105:hover {\r
        border-left: .75rem solid\r
    }\r
\r
    .tablet\\:border-2,\r
    .tablet\\:hover\\:border-2:hover {\r
        border: 1rem solid\r
    }\r
\r
    .tablet\\:border-y-2,\r
    .tablet\\:hover\\:border-y-2:hover {\r
        border-top: 1rem solid;\r
        border-bottom: 1rem solid\r
    }\r
\r
    .tablet\\:border-x-2,\r
    .tablet\\:hover\\:border-x-2:hover {\r
        border-left: 1rem solid;\r
        border-right: 1rem solid\r
    }\r
\r
    .tablet\\:border-top-2,\r
    .tablet\\:hover\\:border-top-2:hover {\r
        border-top: 1rem solid\r
    }\r
\r
    .tablet\\:border-right-2,\r
    .tablet\\:hover\\:border-right-2:hover {\r
        border-right: 1rem solid\r
    }\r
\r
    .tablet\\:border-bottom-2,\r
    .tablet\\:hover\\:border-bottom-2:hover {\r
        border-bottom: 1rem solid\r
    }\r
\r
    .tablet\\:border-left-2,\r
    .tablet\\:hover\\:border-left-2:hover {\r
        border-left: 1rem solid\r
    }\r
\r
    .tablet\\:border-205,\r
    .tablet\\:hover\\:border-205:hover {\r
        border: 1.25rem solid\r
    }\r
\r
    .tablet\\:border-y-205,\r
    .tablet\\:hover\\:border-y-205:hover {\r
        border-top: 1.25rem solid;\r
        border-bottom: 1.25rem solid\r
    }\r
\r
    .tablet\\:border-x-205,\r
    .tablet\\:hover\\:border-x-205:hover {\r
        border-left: 1.25rem solid;\r
        border-right: 1.25rem solid\r
    }\r
\r
    .tablet\\:border-top-205,\r
    .tablet\\:hover\\:border-top-205:hover {\r
        border-top: 1.25rem solid\r
    }\r
\r
    .tablet\\:border-right-205,\r
    .tablet\\:hover\\:border-right-205:hover {\r
        border-right: 1.25rem solid\r
    }\r
\r
    .tablet\\:border-bottom-205,\r
    .tablet\\:hover\\:border-bottom-205:hover {\r
        border-bottom: 1.25rem solid\r
    }\r
\r
    .tablet\\:border-left-205,\r
    .tablet\\:hover\\:border-left-205:hover {\r
        border-left: 1.25rem solid\r
    }\r
\r
    .tablet\\:border-3,\r
    .tablet\\:hover\\:border-3:hover {\r
        border: 1.5rem solid\r
    }\r
\r
    .tablet\\:border-y-3,\r
    .tablet\\:hover\\:border-y-3:hover {\r
        border-top: 1.5rem solid;\r
        border-bottom: 1.5rem solid\r
    }\r
\r
    .tablet\\:border-x-3,\r
    .tablet\\:hover\\:border-x-3:hover {\r
        border-left: 1.5rem solid;\r
        border-right: 1.5rem solid\r
    }\r
\r
    .tablet\\:border-top-3,\r
    .tablet\\:hover\\:border-top-3:hover {\r
        border-top: 1.5rem solid\r
    }\r
\r
    .tablet\\:border-right-3,\r
    .tablet\\:hover\\:border-right-3:hover {\r
        border-right: 1.5rem solid\r
    }\r
\r
    .tablet\\:border-bottom-3,\r
    .tablet\\:hover\\:border-bottom-3:hover {\r
        border-bottom: 1.5rem solid\r
    }\r
\r
    .tablet\\:border-left-3,\r
    .tablet\\:hover\\:border-left-3:hover {\r
        border-left: 1.5rem solid\r
    }\r
\r
    .tablet\\:border-0,\r
    .tablet\\:hover\\:border-0:hover {\r
        border: 0 solid\r
    }\r
\r
    .tablet\\:border-y-0,\r
    .tablet\\:hover\\:border-y-0:hover {\r
        border-top: 0 solid;\r
        border-bottom: 0 solid\r
    }\r
\r
    .tablet\\:border-x-0,\r
    .tablet\\:hover\\:border-x-0:hover {\r
        border-left: 0 solid;\r
        border-right: 0 solid\r
    }\r
\r
    .tablet\\:border-top-0,\r
    .tablet\\:hover\\:border-top-0:hover {\r
        border-top: 0 solid\r
    }\r
\r
    .tablet\\:border-right-0,\r
    .tablet\\:hover\\:border-right-0:hover {\r
        border-right: 0 solid\r
    }\r
\r
    .tablet\\:border-bottom-0,\r
    .tablet\\:hover\\:border-bottom-0:hover {\r
        border-bottom: 0 solid\r
    }\r
\r
    .tablet\\:border-left-0,\r
    .tablet\\:hover\\:border-left-0:hover {\r
        border-left: 0 solid\r
    }\r
\r
    .tablet\\:border,\r
    .tablet\\:hover\\:border:hover {\r
        border: 1px solid\r
    }\r
\r
    .tablet\\:border-y,\r
    .tablet\\:hover\\:border-y:hover {\r
        border-top: 1px solid;\r
        border-bottom: 1px solid\r
    }\r
\r
    .tablet\\:border-x,\r
    .tablet\\:hover\\:border-x:hover {\r
        border-left: 1px solid;\r
        border-right: 1px solid\r
    }\r
\r
    .tablet\\:border-top,\r
    .tablet\\:hover\\:border-top:hover {\r
        border-top: 1px solid\r
    }\r
\r
    .tablet\\:border-right,\r
    .tablet\\:hover\\:border-right:hover {\r
        border-right: 1px solid\r
    }\r
\r
    .tablet\\:border-bottom,\r
    .tablet\\:hover\\:border-bottom:hover {\r
        border-bottom: 1px solid\r
    }\r
\r
    .tablet\\:border-left,\r
    .tablet\\:hover\\:border-left:hover {\r
        border-left: 1px solid\r
    }\r
\r
    .tablet\\:border-transparent,\r
    .tablet\\:hover\\:border-transparent:hover {\r
        border-color: transparent\r
    }\r
\r
    .tablet\\:border-black,\r
    .tablet\\:hover\\:border-black:hover {\r
        border-color: #000\r
    }\r
\r
    .tablet\\:border-white,\r
    .tablet\\:hover\\:border-white:hover {\r
        border-color: #fff\r
    }\r
\r
    .tablet\\:border-red,\r
    .tablet\\:hover\\:border-red:hover {\r
        border-color: #e52207\r
    }\r
\r
    .tablet\\:border-orange,\r
    .tablet\\:hover\\:border-orange:hover {\r
        border-color: #e66f0e\r
    }\r
\r
    .tablet\\:border-gold,\r
    .tablet\\:hover\\:border-gold:hover {\r
        border-color: #ffbe2e\r
    }\r
\r
    .tablet\\:border-yellow,\r
    .tablet\\:hover\\:border-yellow:hover {\r
        border-color: #fee685\r
    }\r
\r
    .tablet\\:border-green,\r
    .tablet\\:hover\\:border-green:hover {\r
        border-color: #538200\r
    }\r
\r
    .tablet\\:border-mint,\r
    .tablet\\:hover\\:border-mint:hover {\r
        border-color: #04c585\r
    }\r
\r
    .tablet\\:border-cyan,\r
    .tablet\\:hover\\:border-cyan:hover {\r
        border-color: #009ec1\r
    }\r
\r
    .tablet\\:border-blue,\r
    .tablet\\:hover\\:border-blue:hover {\r
        border-color: #0076d6\r
    }\r
\r
    .tablet\\:border-indigo,\r
    .tablet\\:hover\\:border-indigo:hover {\r
        border-color: #676cc8\r
    }\r
\r
    .tablet\\:border-violet,\r
    .tablet\\:hover\\:border-violet:hover {\r
        border-color: #8168b3\r
    }\r
\r
    .tablet\\:border-magenta,\r
    .tablet\\:hover\\:border-magenta:hover {\r
        border-color: #d72d79\r
    }\r
\r
    .tablet\\:border-gray-5,\r
    .tablet\\:hover\\:border-gray-5:hover {\r
        border-color: #f0f0f0\r
    }\r
\r
    .tablet\\:border-gray-10,\r
    .tablet\\:hover\\:border-gray-10:hover {\r
        border-color: #e6e6e6\r
    }\r
\r
    .tablet\\:border-gray-30,\r
    .tablet\\:hover\\:border-gray-30:hover {\r
        border-color: #adadad\r
    }\r
\r
    .tablet\\:border-gray-50,\r
    .tablet\\:hover\\:border-gray-50:hover {\r
        border-color: #757575\r
    }\r
\r
    .tablet\\:border-gray-70,\r
    .tablet\\:hover\\:border-gray-70:hover {\r
        border-color: #454545\r
    }\r
\r
    .tablet\\:border-gray-90,\r
    .tablet\\:hover\\:border-gray-90:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .tablet\\:border-base-lightest,\r
    .tablet\\:hover\\:border-base-lightest:hover {\r
        border-color: #f0f0f0\r
    }\r
\r
    .tablet\\:border-base-lighter,\r
    .tablet\\:hover\\:border-base-lighter:hover {\r
        border-color: #dfe1e2\r
    }\r
\r
    .tablet\\:border-base-light,\r
    .tablet\\:hover\\:border-base-light:hover {\r
        border-color: #a9aeb1\r
    }\r
\r
    .tablet\\:border-base,\r
    .tablet\\:hover\\:border-base:hover {\r
        border-color: #71767a\r
    }\r
\r
    .tablet\\:border-base-dark,\r
    .tablet\\:hover\\:border-base-dark:hover {\r
        border-color: #565c65\r
    }\r
\r
    .tablet\\:border-base-darker,\r
    .tablet\\:hover\\:border-base-darker:hover {\r
        border-color: #3d4551\r
    }\r
\r
    .tablet\\:border-base-darkest,\r
    .tablet\\:border-ink,\r
    .tablet\\:hover\\:border-base-darkest:hover,\r
    .tablet\\:hover\\:border-ink:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .tablet\\:border-primary-lighter,\r
    .tablet\\:hover\\:border-primary-lighter:hover {\r
        border-color: #d9e8f6\r
    }\r
\r
    .tablet\\:border-primary-light,\r
    .tablet\\:hover\\:border-primary-light:hover {\r
        border-color: #73b3e7\r
    }\r
\r
    .tablet\\:border-primary,\r
    .tablet\\:hover\\:border-primary:hover {\r
        border-color: #005ea2\r
    }\r
\r
    .tablet\\:border-primary-vivid,\r
    .tablet\\:hover\\:border-primary-vivid:hover {\r
        border-color: #0050d8\r
    }\r
\r
    .tablet\\:border-primary-dark,\r
    .tablet\\:hover\\:border-primary-dark:hover {\r
        border-color: #1a4480\r
    }\r
\r
    .tablet\\:border-primary-darker,\r
    .tablet\\:hover\\:border-primary-darker:hover {\r
        border-color: #162e51\r
    }\r
\r
    .tablet\\:border-secondary-lighter,\r
    .tablet\\:hover\\:border-secondary-lighter:hover {\r
        border-color: #f3e1e4\r
    }\r
\r
    .tablet\\:border-secondary-light,\r
    .tablet\\:hover\\:border-secondary-light:hover {\r
        border-color: #f2938c\r
    }\r
\r
    .tablet\\:border-secondary,\r
    .tablet\\:hover\\:border-secondary:hover {\r
        border-color: #d83933\r
    }\r
\r
    .tablet\\:border-secondary-vivid,\r
    .tablet\\:hover\\:border-secondary-vivid:hover {\r
        border-color: #e41d3d\r
    }\r
\r
    .tablet\\:border-secondary-dark,\r
    .tablet\\:hover\\:border-secondary-dark:hover {\r
        border-color: #b50909\r
    }\r
\r
    .tablet\\:border-secondary-darker,\r
    .tablet\\:hover\\:border-secondary-darker:hover {\r
        border-color: #8b0a03\r
    }\r
\r
    .tablet\\:border-accent-warm-darker,\r
    .tablet\\:hover\\:border-accent-warm-darker:hover {\r
        border-color: #775540\r
    }\r
\r
    .tablet\\:border-accent-warm-dark,\r
    .tablet\\:hover\\:border-accent-warm-dark:hover {\r
        border-color: #c05600\r
    }\r
\r
    .tablet\\:border-accent-warm,\r
    .tablet\\:hover\\:border-accent-warm:hover {\r
        border-color: #fa9441\r
    }\r
\r
    .tablet\\:border-accent-warm-light,\r
    .tablet\\:hover\\:border-accent-warm-light:hover {\r
        border-color: #ffbc78\r
    }\r
\r
    .tablet\\:border-accent-warm-lighter,\r
    .tablet\\:hover\\:border-accent-warm-lighter:hover {\r
        border-color: #f2e4d4\r
    }\r
\r
    .tablet\\:border-accent-cool-darker,\r
    .tablet\\:hover\\:border-accent-cool-darker:hover {\r
        border-color: #07648d\r
    }\r
\r
    .tablet\\:border-accent-cool-dark,\r
    .tablet\\:hover\\:border-accent-cool-dark:hover {\r
        border-color: #28a0cb\r
    }\r
\r
    .tablet\\:border-accent-cool,\r
    .tablet\\:hover\\:border-accent-cool:hover {\r
        border-color: #00bde3\r
    }\r
\r
    .tablet\\:border-accent-cool-light,\r
    .tablet\\:hover\\:border-accent-cool-light:hover {\r
        border-color: #97d4ea\r
    }\r
\r
    .tablet\\:border-accent-cool-lighter,\r
    .tablet\\:hover\\:border-accent-cool-lighter:hover {\r
        border-color: #e1f3f8\r
    }\r
\r
    .tablet\\:border-error-lighter,\r
    .tablet\\:hover\\:border-error-lighter:hover {\r
        border-color: #f4e3db\r
    }\r
\r
    .tablet\\:border-error-light,\r
    .tablet\\:hover\\:border-error-light:hover {\r
        border-color: #f39268\r
    }\r
\r
    .tablet\\:border-error,\r
    .tablet\\:hover\\:border-error:hover {\r
        border-color: #d54309\r
    }\r
\r
    .tablet\\:border-error-dark,\r
    .tablet\\:hover\\:border-error-dark:hover {\r
        border-color: #b50909\r
    }\r
\r
    .tablet\\:border-error-darker,\r
    .tablet\\:hover\\:border-error-darker:hover {\r
        border-color: #6f3331\r
    }\r
\r
    .tablet\\:border-warning-lighter,\r
    .tablet\\:hover\\:border-warning-lighter:hover {\r
        border-color: #faf3d1\r
    }\r
\r
    .tablet\\:border-warning-light,\r
    .tablet\\:hover\\:border-warning-light:hover {\r
        border-color: #fee685\r
    }\r
\r
    .tablet\\:border-warning,\r
    .tablet\\:hover\\:border-warning:hover {\r
        border-color: #ffbe2e\r
    }\r
\r
    .tablet\\:border-warning-dark,\r
    .tablet\\:hover\\:border-warning-dark:hover {\r
        border-color: #e5a000\r
    }\r
\r
    .tablet\\:border-warning-darker,\r
    .tablet\\:hover\\:border-warning-darker:hover {\r
        border-color: #936f38\r
    }\r
\r
    .tablet\\:border-success-lighter,\r
    .tablet\\:hover\\:border-success-lighter:hover {\r
        border-color: #ecf3ec\r
    }\r
\r
    .tablet\\:border-success-light,\r
    .tablet\\:hover\\:border-success-light:hover {\r
        border-color: #70e17b\r
    }\r
\r
    .tablet\\:border-success,\r
    .tablet\\:hover\\:border-success:hover {\r
        border-color: #00a91c\r
    }\r
\r
    .tablet\\:border-success-dark,\r
    .tablet\\:hover\\:border-success-dark:hover {\r
        border-color: #008817\r
    }\r
\r
    .tablet\\:border-success-darker,\r
    .tablet\\:hover\\:border-success-darker:hover {\r
        border-color: #216e1f\r
    }\r
\r
    .tablet\\:border-info-lighter,\r
    .tablet\\:hover\\:border-info-lighter:hover {\r
        border-color: #e7f6f8\r
    }\r
\r
    .tablet\\:border-info-light,\r
    .tablet\\:hover\\:border-info-light:hover {\r
        border-color: #99deea\r
    }\r
\r
    .tablet\\:border-info,\r
    .tablet\\:hover\\:border-info:hover {\r
        border-color: #00bde3\r
    }\r
\r
    .tablet\\:border-info-dark,\r
    .tablet\\:hover\\:border-info-dark:hover {\r
        border-color: #009ec1\r
    }\r
\r
    .tablet\\:border-info-darker,\r
    .tablet\\:hover\\:border-info-darker:hover {\r
        border-color: #2e6276\r
    }\r
\r
    .tablet\\:border-disabled-lighter,\r
    .tablet\\:hover\\:border-disabled-lighter:hover {\r
        border-color: #c9c9c9\r
    }\r
\r
    .tablet\\:border-disabled-light,\r
    .tablet\\:hover\\:border-disabled-light:hover {\r
        border-color: #919191\r
    }\r
\r
    .tablet\\:border-disabled,\r
    .tablet\\:hover\\:border-disabled:hover {\r
        border-color: #757575\r
    }\r
\r
    .tablet\\:border-disabled-dark,\r
    .tablet\\:hover\\:border-disabled-dark:hover {\r
        border-color: #454545\r
    }\r
\r
    .tablet\\:border-disabled-darker,\r
    .tablet\\:hover\\:border-disabled-darker:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .tablet\\:border-emergency,\r
    .tablet\\:hover\\:border-emergency:hover {\r
        border-color: #9c3d10\r
    }\r
\r
    .tablet\\:border-emergency-dark,\r
    .tablet\\:hover\\:border-emergency-dark:hover {\r
        border-color: #332d29\r
    }\r
\r
    .tablet\\:radius-0 {\r
        border-radius: 0\r
    }\r
\r
    .tablet\\:radius-top-0 {\r
        border-top-left-radius: 0;\r
        border-top-right-radius: 0\r
    }\r
\r
    .tablet\\:radius-right-0 {\r
        border-top-right-radius: 0;\r
        border-bottom-right-radius: 0\r
    }\r
\r
    .tablet\\:radius-bottom-0 {\r
        border-bottom-left-radius: 0;\r
        border-bottom-right-radius: 0\r
    }\r
\r
    .tablet\\:radius-left-0 {\r
        border-top-left-radius: 0;\r
        border-bottom-left-radius: 0\r
    }\r
\r
    .tablet\\:radius-sm {\r
        border-radius: 2px\r
    }\r
\r
    .tablet\\:radius-top-sm {\r
        border-top-left-radius: 2px;\r
        border-top-right-radius: 2px\r
    }\r
\r
    .tablet\\:radius-right-sm {\r
        border-top-right-radius: 2px;\r
        border-bottom-right-radius: 2px\r
    }\r
\r
    .tablet\\:radius-bottom-sm {\r
        border-bottom-left-radius: 2px;\r
        border-bottom-right-radius: 2px\r
    }\r
\r
    .tablet\\:radius-left-sm {\r
        border-top-left-radius: 2px;\r
        border-bottom-left-radius: 2px\r
    }\r
\r
    .tablet\\:radius-md {\r
        border-radius: .25rem\r
    }\r
\r
    .tablet\\:radius-top-md {\r
        border-top-left-radius: .25rem;\r
        border-top-right-radius: .25rem\r
    }\r
\r
    .tablet\\:radius-right-md {\r
        border-top-right-radius: .25rem;\r
        border-bottom-right-radius: .25rem\r
    }\r
\r
    .tablet\\:radius-bottom-md {\r
        border-bottom-left-radius: .25rem;\r
        border-bottom-right-radius: .25rem\r
    }\r
\r
    .tablet\\:radius-left-md {\r
        border-top-left-radius: .25rem;\r
        border-bottom-left-radius: .25rem\r
    }\r
\r
    .tablet\\:radius-lg {\r
        border-radius: .5rem\r
    }\r
\r
    .tablet\\:radius-top-lg {\r
        border-top-left-radius: .5rem;\r
        border-top-right-radius: .5rem\r
    }\r
\r
    .tablet\\:radius-right-lg {\r
        border-top-right-radius: .5rem;\r
        border-bottom-right-radius: .5rem\r
    }\r
\r
    .tablet\\:radius-bottom-lg {\r
        border-bottom-left-radius: .5rem;\r
        border-bottom-right-radius: .5rem\r
    }\r
\r
    .tablet\\:radius-left-lg {\r
        border-top-left-radius: .5rem;\r
        border-bottom-left-radius: .5rem\r
    }\r
\r
    .tablet\\:radius-pill {\r
        border-radius: 99rem\r
    }\r
\r
    .tablet\\:radius-top-pill {\r
        border-top-left-radius: 99rem;\r
        border-top-right-radius: 99rem\r
    }\r
\r
    .tablet\\:radius-right-pill {\r
        border-top-right-radius: 99rem;\r
        border-bottom-right-radius: 99rem\r
    }\r
\r
    .tablet\\:radius-bottom-pill {\r
        border-bottom-left-radius: 99rem;\r
        border-bottom-right-radius: 99rem\r
    }\r
\r
    .tablet\\:radius-left-pill {\r
        border-top-left-radius: 99rem;\r
        border-bottom-left-radius: 99rem\r
    }\r
\r
    .tablet\\:display-block {\r
        display: block\r
    }\r
\r
    .tablet\\:display-flex {\r
        display: flex\r
    }\r
\r
    .tablet\\:display-none {\r
        display: none\r
    }\r
\r
    .tablet\\:display-inline {\r
        display: inline\r
    }\r
\r
    .tablet\\:display-inline-block {\r
        display: inline-block\r
    }\r
\r
    .tablet\\:display-inline-flex {\r
        display: inline-flex\r
    }\r
\r
    .tablet\\:display-table {\r
        display: table\r
    }\r
\r
    .tablet\\:display-table-cell {\r
        display: table-cell\r
    }\r
\r
    .tablet\\:display-table-row {\r
        display: table-row\r
    }\r
\r
    .tablet\\:font-mono-3xs {\r
        /* font-size: .77rem */\r
    }\r
\r
    .tablet\\:font-mono-2xs {\r
        /* font-size: .83rem */\r
    }\r
\r
    .tablet\\:font-mono-xs {\r
        /* font-size: .89rem */\r
    }\r
\r
    .tablet\\:font-mono-sm {\r
        /* font-size: .95rem */\r
    }\r
\r
    .tablet\\:font-mono-md {\r
        /* font-size: 1.01rem */\r
    }\r
\r
    .tablet\\:font-mono-lg {\r
        /* font-size: 1.31rem */\r
    }\r
\r
    .tablet\\:font-mono-xl {\r
        /* font-size: 1.91rem */\r
    }\r
\r
    .tablet\\:font-mono-2xl {\r
        /* font-size: 2.38rem */\r
    }\r
\r
    .tablet\\:font-mono-3xl {\r
        /* font-size: 2.86rem */\r
    }\r
\r
    .tablet\\:font-sans-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .tablet\\:font-sans-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .tablet\\:font-sans-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .tablet\\:font-sans-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .tablet\\:font-sans-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .tablet\\:font-sans-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .tablet\\:font-sans-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .tablet\\:font-sans-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .tablet\\:font-sans-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .tablet\\:font-serif-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .tablet\\:font-serif-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .tablet\\:font-serif-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .tablet\\:font-serif-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .tablet\\:font-serif-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .tablet\\:font-serif-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .tablet\\:font-serif-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .tablet\\:font-serif-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .tablet\\:font-serif-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .tablet\\:font-heading-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .tablet\\:font-heading-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .tablet\\:font-heading-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .tablet\\:font-heading-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .tablet\\:font-heading-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .tablet\\:font-heading-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .tablet\\:font-heading-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .tablet\\:font-heading-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .tablet\\:font-heading-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .tablet\\:font-body-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .tablet\\:font-body-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .tablet\\:font-body-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .tablet\\:font-body-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .tablet\\:font-body-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .tablet\\:font-body-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .tablet\\:font-body-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .tablet\\:font-body-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .tablet\\:font-body-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .tablet\\:font-code-3xs {\r
        /* font-size: .77rem */\r
    }\r
\r
    .tablet\\:font-code-2xs {\r
        /* font-size: .83rem */\r
    }\r
\r
    .tablet\\:font-code-xs {\r
        /* font-size: .89rem */\r
    }\r
\r
    .tablet\\:font-code-sm {\r
        /* font-size: .95rem */\r
    }\r
\r
    .tablet\\:font-code-md {\r
        /* font-size: 1.01rem */\r
    }\r
\r
    .tablet\\:font-code-lg {\r
        /* font-size: 1.31rem */\r
    }\r
\r
    .tablet\\:font-code-xl {\r
        /* font-size: 1.91rem */\r
    }\r
\r
    .tablet\\:font-code-2xl {\r
        /* font-size: 2.38rem */\r
    }\r
\r
    .tablet\\:font-code-3xl {\r
        /* font-size: 2.86rem */\r
    }\r
\r
    .tablet\\:font-alt-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .tablet\\:font-alt-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .tablet\\:font-alt-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .tablet\\:font-alt-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .tablet\\:font-alt-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .tablet\\:font-alt-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .tablet\\:font-alt-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .tablet\\:font-alt-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .tablet\\:font-alt-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .tablet\\:font-ui-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .tablet\\:font-ui-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .tablet\\:font-ui-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .tablet\\:font-ui-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .tablet\\:font-ui-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .tablet\\:font-ui-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .tablet\\:font-ui-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .tablet\\:font-ui-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .tablet\\:font-ui-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .tablet\\:text-light {\r
        font-weight: 300\r
    }\r
\r
    .tablet\\:text-normal {\r
        font-weight: 400\r
    }\r
\r
    .tablet\\:text-bold {\r
        font-weight: 700\r
    }\r
\r
    .tablet\\:flex-justify-center {\r
        justify-content: center\r
    }\r
\r
    .tablet\\:flex-justify-start {\r
        justify-content: flex-start\r
    }\r
\r
    .tablet\\:flex-justify-end {\r
        justify-content: flex-end\r
    }\r
\r
    .tablet\\:flex-justify {\r
        justify-content: space-between\r
    }\r
\r
    .tablet\\:line-height-sans-1 {\r
        line-height: .9\r
    }\r
\r
    .tablet\\:line-height-sans-2 {\r
        line-height: 1.1\r
    }\r
\r
    .tablet\\:line-height-sans-3 {\r
        line-height: 1.3\r
    }\r
\r
    .tablet\\:line-height-sans-4 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-sans-5 {\r
        line-height: 1.5\r
    }\r
\r
    .tablet\\:line-height-sans-6 {\r
        line-height: 1.6\r
    }\r
\r
    .tablet\\:line-height-serif-1 {\r
        line-height: 1\r
    }\r
\r
    .tablet\\:line-height-serif-2 {\r
        line-height: 1.2\r
    }\r
\r
    .tablet\\:line-height-serif-3 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-serif-4 {\r
        line-height: 1.5\r
    }\r
\r
    .tablet\\:line-height-serif-5 {\r
        line-height: 1.7\r
    }\r
\r
    .tablet\\:line-height-serif-6 {\r
        line-height: 1.8\r
    }\r
\r
    .tablet\\:line-height-mono-1 {\r
        line-height: 1\r
    }\r
\r
    .tablet\\:line-height-mono-2 {\r
        line-height: 1.3\r
    }\r
\r
    .tablet\\:line-height-mono-3 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-mono-4 {\r
        line-height: 1.6\r
    }\r
\r
    .tablet\\:line-height-mono-5 {\r
        line-height: 1.7\r
    }\r
\r
    .tablet\\:line-height-mono-6 {\r
        line-height: 1.8\r
    }\r
\r
    .tablet\\:line-height-heading-1 {\r
        line-height: 1\r
    }\r
\r
    .tablet\\:line-height-heading-2 {\r
        line-height: 1.2\r
    }\r
\r
    .tablet\\:line-height-heading-3 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-heading-4 {\r
        line-height: 1.5\r
    }\r
\r
    .tablet\\:line-height-heading-5 {\r
        line-height: 1.7\r
    }\r
\r
    .tablet\\:line-height-heading-6 {\r
        line-height: 1.8\r
    }\r
\r
    .tablet\\:line-height-ui-1 {\r
        line-height: .9\r
    }\r
\r
    .tablet\\:line-height-ui-2 {\r
        line-height: 1.1\r
    }\r
\r
    .tablet\\:line-height-ui-3 {\r
        line-height: 1.3\r
    }\r
\r
    .tablet\\:line-height-ui-4 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-ui-5 {\r
        line-height: 1.5\r
    }\r
\r
    .tablet\\:line-height-ui-6 {\r
        line-height: 1.6\r
    }\r
\r
    .tablet\\:line-height-body-1 {\r
        line-height: .9\r
    }\r
\r
    .tablet\\:line-height-body-2 {\r
        line-height: 1.1\r
    }\r
\r
    .tablet\\:line-height-body-3 {\r
        line-height: 1.3\r
    }\r
\r
    .tablet\\:line-height-body-4 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-body-5 {\r
        line-height: 1.5\r
    }\r
\r
    .tablet\\:line-height-body-6 {\r
        line-height: 1.6\r
    }\r
\r
    .tablet\\:line-height-code-1 {\r
        line-height: 1\r
    }\r
\r
    .tablet\\:line-height-code-2 {\r
        line-height: 1.3\r
    }\r
\r
    .tablet\\:line-height-code-3 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-code-4 {\r
        line-height: 1.6\r
    }\r
\r
    .tablet\\:line-height-code-5 {\r
        line-height: 1.7\r
    }\r
\r
    .tablet\\:line-height-code-6 {\r
        line-height: 1.8\r
    }\r
\r
    .tablet\\:line-height-alt-1 {\r
        line-height: 1\r
    }\r
\r
    .tablet\\:line-height-alt-2 {\r
        line-height: 1.2\r
    }\r
\r
    .tablet\\:line-height-alt-3 {\r
        line-height: 1.4\r
    }\r
\r
    .tablet\\:line-height-alt-4 {\r
        line-height: 1.5\r
    }\r
\r
    .tablet\\:line-height-alt-5 {\r
        line-height: 1.7\r
    }\r
\r
    .tablet\\:line-height-alt-6 {\r
        line-height: 1.8\r
    }\r
\r
    .tablet\\:margin-neg-1px {\r
        margin: -1px\r
    }\r
\r
    .tablet\\:margin-neg-2px {\r
        margin: -2px\r
    }\r
\r
    .tablet\\:margin-neg-05 {\r
        margin: -.25rem\r
    }\r
\r
    .tablet\\:margin-neg-1 {\r
        margin: -.5rem\r
    }\r
\r
    .tablet\\:margin-neg-105 {\r
        margin: -.75rem\r
    }\r
\r
    .tablet\\:margin-neg-2 {\r
        margin: -1rem\r
    }\r
\r
    .tablet\\:margin-neg-205 {\r
        margin: -1.25rem\r
    }\r
\r
    .tablet\\:margin-neg-3 {\r
        margin: -1.5rem\r
    }\r
\r
    .tablet\\:margin-1px {\r
        margin: 1px\r
    }\r
\r
    .tablet\\:margin-2px {\r
        margin: 2px\r
    }\r
\r
    .tablet\\:margin-05 {\r
        margin: .25rem\r
    }\r
\r
    .tablet\\:margin-1 {\r
        margin: .5rem\r
    }\r
\r
    .tablet\\:margin-105 {\r
        margin: .75rem\r
    }\r
\r
    .tablet\\:margin-2 {\r
        margin: 1rem\r
    }\r
\r
    .tablet\\:margin-205 {\r
        margin: 1.25rem\r
    }\r
\r
    .tablet\\:margin-3 {\r
        margin: 1.5rem\r
    }\r
\r
    .tablet\\:margin-neg-4 {\r
        margin: -2rem\r
    }\r
\r
    .tablet\\:margin-neg-5 {\r
        margin: -2.5rem\r
    }\r
\r
    .tablet\\:margin-neg-6 {\r
        margin: -3rem\r
    }\r
\r
    .tablet\\:margin-neg-7 {\r
        margin: -3.5rem\r
    }\r
\r
    .tablet\\:margin-neg-8 {\r
        margin: -4rem\r
    }\r
\r
    .tablet\\:margin-neg-9 {\r
        margin: -4.5rem\r
    }\r
\r
    .tablet\\:margin-neg-10 {\r
        margin: -5rem\r
    }\r
\r
    .tablet\\:margin-neg-15 {\r
        margin: -7.5rem\r
    }\r
\r
    .tablet\\:margin-4 {\r
        margin: 2rem\r
    }\r
\r
    .tablet\\:margin-5 {\r
        margin: 2.5rem\r
    }\r
\r
    .tablet\\:margin-6 {\r
        margin: 3rem\r
    }\r
\r
    .tablet\\:margin-7 {\r
        margin: 3.5rem\r
    }\r
\r
    .tablet\\:margin-8 {\r
        margin: 4rem\r
    }\r
\r
    .tablet\\:margin-9 {\r
        margin: 4.5rem\r
    }\r
\r
    .tablet\\:margin-10 {\r
        margin: 5rem\r
    }\r
\r
    .tablet\\:margin-15 {\r
        margin: 7.5rem\r
    }\r
\r
    .tablet\\:margin-05em {\r
        margin: .5em\r
    }\r
\r
    .tablet\\:margin-1em {\r
        margin: 1em\r
    }\r
\r
    .tablet\\:margin-105em {\r
        margin: 1.5em\r
    }\r
\r
    .tablet\\:margin-2em {\r
        margin: 2em\r
    }\r
\r
    .tablet\\:margin-0 {\r
        margin: 0\r
    }\r
\r
    .tablet\\:margin-y-1px {\r
        margin-top: 1px;\r
        margin-bottom: 1px\r
    }\r
\r
    .tablet\\:margin-top-1px {\r
        margin-top: 1px\r
    }\r
\r
    .tablet\\:margin-bottom-1px {\r
        margin-bottom: 1px\r
    }\r
\r
    .tablet\\:margin-y-2px {\r
        margin-top: 2px;\r
        margin-bottom: 2px\r
    }\r
\r
    .tablet\\:margin-top-2px {\r
        margin-top: 2px\r
    }\r
\r
    .tablet\\:margin-bottom-2px {\r
        margin-bottom: 2px\r
    }\r
\r
    .tablet\\:margin-y-05 {\r
        margin-top: .25rem;\r
        margin-bottom: .25rem\r
    }\r
\r
    .tablet\\:margin-top-05 {\r
        margin-top: .25rem\r
    }\r
\r
    .tablet\\:margin-bottom-05 {\r
        margin-bottom: .25rem\r
    }\r
\r
    .tablet\\:margin-y-1 {\r
        margin-top: .5rem;\r
        margin-bottom: .5rem\r
    }\r
\r
    .tablet\\:margin-top-1 {\r
        margin-top: .5rem\r
    }\r
\r
    .tablet\\:margin-bottom-1 {\r
        margin-bottom: .5rem\r
    }\r
\r
    .tablet\\:margin-y-105 {\r
        margin-top: .75rem;\r
        margin-bottom: .75rem\r
    }\r
\r
    .tablet\\:margin-top-105 {\r
        margin-top: .75rem\r
    }\r
\r
    .tablet\\:margin-bottom-105 {\r
        margin-bottom: .75rem\r
    }\r
\r
    .tablet\\:margin-y-2 {\r
        margin-top: 1rem;\r
        margin-bottom: 1rem\r
    }\r
\r
    .tablet\\:margin-top-2 {\r
        margin-top: 1rem\r
    }\r
\r
    .tablet\\:margin-bottom-2 {\r
        margin-bottom: 1rem\r
    }\r
\r
    .tablet\\:margin-y-205 {\r
        margin-top: 1.25rem;\r
        margin-bottom: 1.25rem\r
    }\r
\r
    .tablet\\:margin-top-205 {\r
        margin-top: 1.25rem\r
    }\r
\r
    .tablet\\:margin-bottom-205 {\r
        margin-bottom: 1.25rem\r
    }\r
\r
    .tablet\\:margin-y-3 {\r
        margin-top: 1.5rem;\r
        margin-bottom: 1.5rem\r
    }\r
\r
    .tablet\\:margin-top-3 {\r
        margin-top: 1.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-3 {\r
        margin-bottom: 1.5rem\r
    }\r
\r
    .tablet\\:margin-y-neg-1px {\r
        margin-top: -1px;\r
        margin-bottom: -1px\r
    }\r
\r
    .tablet\\:margin-top-neg-1px {\r
        margin-top: -1px\r
    }\r
\r
    .tablet\\:margin-bottom-neg-1px {\r
        margin-bottom: -1px\r
    }\r
\r
    .tablet\\:margin-y-neg-2px {\r
        margin-top: -2px;\r
        margin-bottom: -2px\r
    }\r
\r
    .tablet\\:margin-top-neg-2px {\r
        margin-top: -2px\r
    }\r
\r
    .tablet\\:margin-bottom-neg-2px {\r
        margin-bottom: -2px\r
    }\r
\r
    .tablet\\:margin-y-neg-05 {\r
        margin-top: -.25rem;\r
        margin-bottom: -.25rem\r
    }\r
\r
    .tablet\\:margin-top-neg-05 {\r
        margin-top: -.25rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-05 {\r
        margin-bottom: -.25rem\r
    }\r
\r
    .tablet\\:margin-y-neg-1 {\r
        margin-top: -.5rem;\r
        margin-bottom: -.5rem\r
    }\r
\r
    .tablet\\:margin-top-neg-1 {\r
        margin-top: -.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-1 {\r
        margin-bottom: -.5rem\r
    }\r
\r
    .tablet\\:margin-y-neg-105 {\r
        margin-top: -.75rem;\r
        margin-bottom: -.75rem\r
    }\r
\r
    .tablet\\:margin-top-neg-105 {\r
        margin-top: -.75rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-105 {\r
        margin-bottom: -.75rem\r
    }\r
\r
    .tablet\\:margin-y-neg-2 {\r
        margin-top: -1rem;\r
        margin-bottom: -1rem\r
    }\r
\r
    .tablet\\:margin-top-neg-2 {\r
        margin-top: -1rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-2 {\r
        margin-bottom: -1rem\r
    }\r
\r
    .tablet\\:margin-y-neg-205 {\r
        margin-top: -1.25rem;\r
        margin-bottom: -1.25rem\r
    }\r
\r
    .tablet\\:margin-top-neg-205 {\r
        margin-top: -1.25rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-205 {\r
        margin-bottom: -1.25rem\r
    }\r
\r
    .tablet\\:margin-y-neg-3 {\r
        margin-top: -1.5rem;\r
        margin-bottom: -1.5rem\r
    }\r
\r
    .tablet\\:margin-top-neg-3 {\r
        margin-top: -1.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-3 {\r
        margin-bottom: -1.5rem\r
    }\r
\r
    .tablet\\:margin-y-neg-4 {\r
        margin-top: -2rem;\r
        margin-bottom: -2rem\r
    }\r
\r
    .tablet\\:margin-top-neg-4 {\r
        margin-top: -2rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-4 {\r
        margin-bottom: -2rem\r
    }\r
\r
    .tablet\\:margin-y-neg-5 {\r
        margin-top: -2.5rem;\r
        margin-bottom: -2.5rem\r
    }\r
\r
    .tablet\\:margin-top-neg-5 {\r
        margin-top: -2.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-5 {\r
        margin-bottom: -2.5rem\r
    }\r
\r
    .tablet\\:margin-y-neg-6 {\r
        margin-top: -3rem;\r
        margin-bottom: -3rem\r
    }\r
\r
    .tablet\\:margin-top-neg-6 {\r
        margin-top: -3rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-6 {\r
        margin-bottom: -3rem\r
    }\r
\r
    .tablet\\:margin-y-neg-7 {\r
        margin-top: -3.5rem;\r
        margin-bottom: -3.5rem\r
    }\r
\r
    .tablet\\:margin-top-neg-7 {\r
        margin-top: -3.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-7 {\r
        margin-bottom: -3.5rem\r
    }\r
\r
    .tablet\\:margin-y-neg-8 {\r
        margin-top: -4rem;\r
        margin-bottom: -4rem\r
    }\r
\r
    .tablet\\:margin-top-neg-8 {\r
        margin-top: -4rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-8 {\r
        margin-bottom: -4rem\r
    }\r
\r
    .tablet\\:margin-y-neg-9 {\r
        margin-top: -4.5rem;\r
        margin-bottom: -4.5rem\r
    }\r
\r
    .tablet\\:margin-top-neg-9 {\r
        margin-top: -4.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-9 {\r
        margin-bottom: -4.5rem\r
    }\r
\r
    .tablet\\:margin-y-neg-10 {\r
        margin-top: -5rem;\r
        margin-bottom: -5rem\r
    }\r
\r
    .tablet\\:margin-top-neg-10 {\r
        margin-top: -5rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-10 {\r
        margin-bottom: -5rem\r
    }\r
\r
    .tablet\\:margin-y-neg-15 {\r
        margin-top: -7.5rem;\r
        margin-bottom: -7.5rem\r
    }\r
\r
    .tablet\\:margin-top-neg-15 {\r
        margin-top: -7.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-neg-15 {\r
        margin-bottom: -7.5rem\r
    }\r
\r
    .tablet\\:margin-y-4 {\r
        margin-top: 2rem;\r
        margin-bottom: 2rem\r
    }\r
\r
    .tablet\\:margin-top-4 {\r
        margin-top: 2rem\r
    }\r
\r
    .tablet\\:margin-bottom-4 {\r
        margin-bottom: 2rem\r
    }\r
\r
    .tablet\\:margin-y-5 {\r
        margin-top: 2.5rem;\r
        margin-bottom: 2.5rem\r
    }\r
\r
    .tablet\\:margin-top-5 {\r
        margin-top: 2.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-5 {\r
        margin-bottom: 2.5rem\r
    }\r
\r
    .tablet\\:margin-y-6 {\r
        margin-top: 3rem;\r
        margin-bottom: 3rem\r
    }\r
\r
    .tablet\\:margin-top-6 {\r
        margin-top: 3rem\r
    }\r
\r
    .tablet\\:margin-bottom-6 {\r
        margin-bottom: 3rem\r
    }\r
\r
    .tablet\\:margin-y-7 {\r
        margin-top: 3.5rem;\r
        margin-bottom: 3.5rem\r
    }\r
\r
    .tablet\\:margin-top-7 {\r
        margin-top: 3.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-7 {\r
        margin-bottom: 3.5rem\r
    }\r
\r
    .tablet\\:margin-y-8 {\r
        margin-top: 4rem;\r
        margin-bottom: 4rem\r
    }\r
\r
    .tablet\\:margin-top-8 {\r
        margin-top: 4rem\r
    }\r
\r
    .tablet\\:margin-bottom-8 {\r
        margin-bottom: 4rem\r
    }\r
\r
    .tablet\\:margin-y-9 {\r
        margin-top: 4.5rem;\r
        margin-bottom: 4.5rem\r
    }\r
\r
    .tablet\\:margin-top-9 {\r
        margin-top: 4.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-9 {\r
        margin-bottom: 4.5rem\r
    }\r
\r
    .tablet\\:margin-y-10 {\r
        margin-top: 5rem;\r
        margin-bottom: 5rem\r
    }\r
\r
    .tablet\\:margin-top-10 {\r
        margin-top: 5rem\r
    }\r
\r
    .tablet\\:margin-bottom-10 {\r
        margin-bottom: 5rem\r
    }\r
\r
    .tablet\\:margin-y-15 {\r
        margin-top: 7.5rem;\r
        margin-bottom: 7.5rem\r
    }\r
\r
    .tablet\\:margin-top-15 {\r
        margin-top: 7.5rem\r
    }\r
\r
    .tablet\\:margin-bottom-15 {\r
        margin-bottom: 7.5rem\r
    }\r
\r
    .tablet\\:margin-y-05em {\r
        margin-top: .5em;\r
        margin-bottom: .5em\r
    }\r
\r
    .tablet\\:margin-top-05em {\r
        margin-top: .5em\r
    }\r
\r
    .tablet\\:margin-bottom-05em {\r
        margin-bottom: .5em\r
    }\r
\r
    .tablet\\:margin-y-1em {\r
        margin-top: 1em;\r
        margin-bottom: 1em\r
    }\r
\r
    .tablet\\:margin-top-1em {\r
        margin-top: 1em\r
    }\r
\r
    .tablet\\:margin-bottom-1em {\r
        margin-bottom: 1em\r
    }\r
\r
    .tablet\\:margin-y-105em {\r
        margin-top: 1.5em;\r
        margin-bottom: 1.5em\r
    }\r
\r
    .tablet\\:margin-top-105em {\r
        margin-top: 1.5em\r
    }\r
\r
    .tablet\\:margin-bottom-105em {\r
        margin-bottom: 1.5em\r
    }\r
\r
    .tablet\\:margin-y-2em {\r
        margin-top: 2em;\r
        margin-bottom: 2em\r
    }\r
\r
    .tablet\\:margin-top-2em {\r
        margin-top: 2em\r
    }\r
\r
    .tablet\\:margin-bottom-2em {\r
        margin-bottom: 2em\r
    }\r
\r
    .tablet\\:margin-y-0 {\r
        margin-top: 0;\r
        margin-bottom: 0\r
    }\r
\r
    .tablet\\:margin-top-0 {\r
        margin-top: 0\r
    }\r
\r
    .tablet\\:margin-bottom-0 {\r
        margin-bottom: 0\r
    }\r
\r
    .tablet\\:margin-y-auto {\r
        margin-top: auto;\r
        margin-bottom: auto\r
    }\r
\r
    .tablet\\:margin-top-auto {\r
        margin-top: auto\r
    }\r
\r
    .tablet\\:margin-bottom-auto {\r
        margin-bottom: auto\r
    }\r
\r
    .tablet\\:margin-x-1px {\r
        margin-left: 1px;\r
        margin-right: 1px\r
    }\r
\r
    .tablet\\:margin-right-1px {\r
        margin-right: 1px\r
    }\r
\r
    .tablet\\:margin-left-1px {\r
        margin-left: 1px\r
    }\r
\r
    .tablet\\:margin-x-2px {\r
        margin-left: 2px;\r
        margin-right: 2px\r
    }\r
\r
    .tablet\\:margin-right-2px {\r
        margin-right: 2px\r
    }\r
\r
    .tablet\\:margin-left-2px {\r
        margin-left: 2px\r
    }\r
\r
    .tablet\\:margin-x-05 {\r
        margin-left: .25rem;\r
        margin-right: .25rem\r
    }\r
\r
    .tablet\\:margin-right-05 {\r
        margin-right: .25rem\r
    }\r
\r
    .tablet\\:margin-left-05 {\r
        margin-left: .25rem\r
    }\r
\r
    .tablet\\:margin-x-1 {\r
        margin-left: .5rem;\r
        margin-right: .5rem\r
    }\r
\r
    .tablet\\:margin-right-1 {\r
        margin-right: .5rem\r
    }\r
\r
    .tablet\\:margin-left-1 {\r
        margin-left: .5rem\r
    }\r
\r
    .tablet\\:margin-x-105 {\r
        margin-left: .75rem;\r
        margin-right: .75rem\r
    }\r
\r
    .tablet\\:margin-right-105 {\r
        margin-right: .75rem\r
    }\r
\r
    .tablet\\:margin-left-105 {\r
        margin-left: .75rem\r
    }\r
\r
    .tablet\\:margin-x-2 {\r
        margin-left: 1rem;\r
        margin-right: 1rem\r
    }\r
\r
    .tablet\\:margin-right-2 {\r
        margin-right: 1rem\r
    }\r
\r
    .tablet\\:margin-left-2 {\r
        margin-left: 1rem\r
    }\r
\r
    .tablet\\:margin-x-205 {\r
        margin-left: 1.25rem;\r
        margin-right: 1.25rem\r
    }\r
\r
    .tablet\\:margin-right-205 {\r
        margin-right: 1.25rem\r
    }\r
\r
    .tablet\\:margin-left-205 {\r
        margin-left: 1.25rem\r
    }\r
\r
    .tablet\\:margin-x-3 {\r
        margin-left: 1.5rem;\r
        margin-right: 1.5rem\r
    }\r
\r
    .tablet\\:margin-right-3 {\r
        margin-right: 1.5rem\r
    }\r
\r
    .tablet\\:margin-left-3 {\r
        margin-left: 1.5rem\r
    }\r
\r
    .tablet\\:margin-x-neg-1px {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .tablet\\:margin-right-neg-1px {\r
        margin-right: -1px\r
    }\r
\r
    .tablet\\:margin-left-neg-1px {\r
        margin-left: -1px\r
    }\r
\r
    .tablet\\:margin-x-neg-2px {\r
        margin-left: -2px;\r
        margin-right: -2px\r
    }\r
\r
    .tablet\\:margin-right-neg-2px {\r
        margin-right: -2px\r
    }\r
\r
    .tablet\\:margin-left-neg-2px {\r
        margin-left: -2px\r
    }\r
\r
    .tablet\\:margin-x-neg-05 {\r
        margin-left: -.25rem;\r
        margin-right: -.25rem\r
    }\r
\r
    .tablet\\:margin-right-neg-05 {\r
        margin-right: -.25rem\r
    }\r
\r
    .tablet\\:margin-left-neg-05 {\r
        margin-left: -.25rem\r
    }\r
\r
    .tablet\\:margin-x-neg-1 {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .tablet\\:margin-right-neg-1 {\r
        margin-right: -.5rem\r
    }\r
\r
    .tablet\\:margin-left-neg-1 {\r
        margin-left: -.5rem\r
    }\r
\r
    .tablet\\:margin-x-neg-105 {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .tablet\\:margin-right-neg-105 {\r
        margin-right: -.75rem\r
    }\r
\r
    .tablet\\:margin-left-neg-105 {\r
        margin-left: -.75rem\r
    }\r
\r
    .tablet\\:margin-x-neg-2 {\r
        margin-left: -1rem;\r
        margin-right: -1rem\r
    }\r
\r
    .tablet\\:margin-right-neg-2 {\r
        margin-right: -1rem\r
    }\r
\r
    .tablet\\:margin-left-neg-2 {\r
        margin-left: -1rem\r
    }\r
\r
    .tablet\\:margin-x-neg-205 {\r
        margin-left: -1.25rem;\r
        margin-right: -1.25rem\r
    }\r
\r
    .tablet\\:margin-right-neg-205 {\r
        margin-right: -1.25rem\r
    }\r
\r
    .tablet\\:margin-left-neg-205 {\r
        margin-left: -1.25rem\r
    }\r
\r
    .tablet\\:margin-x-neg-3 {\r
        margin-left: -1.5rem;\r
        margin-right: -1.5rem\r
    }\r
\r
    .tablet\\:margin-right-neg-3 {\r
        margin-right: -1.5rem\r
    }\r
\r
    .tablet\\:margin-left-neg-3 {\r
        margin-left: -1.5rem\r
    }\r
\r
    .tablet\\:margin-x-neg-4 {\r
        margin-left: -2rem;\r
        margin-right: -2rem\r
    }\r
\r
    .tablet\\:margin-right-neg-4 {\r
        margin-right: -2rem\r
    }\r
\r
    .tablet\\:margin-left-neg-4 {\r
        margin-left: -2rem\r
    }\r
\r
    .tablet\\:margin-x-neg-5 {\r
        margin-left: -2.5rem;\r
        margin-right: -2.5rem\r
    }\r
\r
    .tablet\\:margin-right-neg-5 {\r
        margin-right: -2.5rem\r
    }\r
\r
    .tablet\\:margin-left-neg-5 {\r
        margin-left: -2.5rem\r
    }\r
\r
    .tablet\\:margin-x-neg-6 {\r
        margin-left: -3rem;\r
        margin-right: -3rem\r
    }\r
\r
    .tablet\\:margin-right-neg-6 {\r
        margin-right: -3rem\r
    }\r
\r
    .tablet\\:margin-left-neg-6 {\r
        margin-left: -3rem\r
    }\r
\r
    .tablet\\:margin-x-neg-7 {\r
        margin-left: -3.5rem;\r
        margin-right: -3.5rem\r
    }\r
\r
    .tablet\\:margin-right-neg-7 {\r
        margin-right: -3.5rem\r
    }\r
\r
    .tablet\\:margin-left-neg-7 {\r
        margin-left: -3.5rem\r
    }\r
\r
    .tablet\\:margin-x-neg-8 {\r
        margin-left: -4rem;\r
        margin-right: -4rem\r
    }\r
\r
    .tablet\\:margin-right-neg-8 {\r
        margin-right: -4rem\r
    }\r
\r
    .tablet\\:margin-left-neg-8 {\r
        margin-left: -4rem\r
    }\r
\r
    .tablet\\:margin-x-neg-9 {\r
        margin-left: -4.5rem;\r
        margin-right: -4.5rem\r
    }\r
\r
    .tablet\\:margin-right-neg-9 {\r
        margin-right: -4.5rem\r
    }\r
\r
    .tablet\\:margin-left-neg-9 {\r
        margin-left: -4.5rem\r
    }\r
\r
    .tablet\\:margin-x-neg-10 {\r
        margin-left: -5rem;\r
        margin-right: -5rem\r
    }\r
\r
    .tablet\\:margin-right-neg-10 {\r
        margin-right: -5rem\r
    }\r
\r
    .tablet\\:margin-left-neg-10 {\r
        margin-left: -5rem\r
    }\r
\r
    .tablet\\:margin-x-neg-15 {\r
        margin-left: -7.5rem;\r
        margin-right: -7.5rem\r
    }\r
\r
    .tablet\\:margin-right-neg-15 {\r
        margin-right: -7.5rem\r
    }\r
\r
    .tablet\\:margin-left-neg-15 {\r
        margin-left: -7.5rem\r
    }\r
\r
    .tablet\\:margin-x-4 {\r
        margin-left: 2rem;\r
        margin-right: 2rem\r
    }\r
\r
    .tablet\\:margin-right-4 {\r
        margin-right: 2rem\r
    }\r
\r
    .tablet\\:margin-left-4 {\r
        margin-left: 2rem\r
    }\r
\r
    .tablet\\:margin-x-5 {\r
        margin-left: 2.5rem;\r
        margin-right: 2.5rem\r
    }\r
\r
    .tablet\\:margin-right-5 {\r
        margin-right: 2.5rem\r
    }\r
\r
    .tablet\\:margin-left-5 {\r
        margin-left: 2.5rem\r
    }\r
\r
    .tablet\\:margin-x-6 {\r
        margin-left: 3rem;\r
        margin-right: 3rem\r
    }\r
\r
    .tablet\\:margin-right-6 {\r
        margin-right: 3rem\r
    }\r
\r
    .tablet\\:margin-left-6 {\r
        margin-left: 3rem\r
    }\r
\r
    .tablet\\:margin-x-7 {\r
        margin-left: 3.5rem;\r
        margin-right: 3.5rem\r
    }\r
\r
    .tablet\\:margin-right-7 {\r
        margin-right: 3.5rem\r
    }\r
\r
    .tablet\\:margin-left-7 {\r
        margin-left: 3.5rem\r
    }\r
\r
    .tablet\\:margin-x-8 {\r
        margin-left: 4rem;\r
        margin-right: 4rem\r
    }\r
\r
    .tablet\\:margin-right-8 {\r
        margin-right: 4rem\r
    }\r
\r
    .tablet\\:margin-left-8 {\r
        margin-left: 4rem\r
    }\r
\r
    .tablet\\:margin-x-9 {\r
        margin-left: 4.5rem;\r
        margin-right: 4.5rem\r
    }\r
\r
    .tablet\\:margin-right-9 {\r
        margin-right: 4.5rem\r
    }\r
\r
    .tablet\\:margin-left-9 {\r
        margin-left: 4.5rem\r
    }\r
\r
    .tablet\\:margin-x-10 {\r
        margin-left: 5rem;\r
        margin-right: 5rem\r
    }\r
\r
    .tablet\\:margin-right-10 {\r
        margin-right: 5rem\r
    }\r
\r
    .tablet\\:margin-left-10 {\r
        margin-left: 5rem\r
    }\r
\r
    .tablet\\:margin-x-15 {\r
        margin-left: 7.5rem;\r
        margin-right: 7.5rem\r
    }\r
\r
    .tablet\\:margin-right-15 {\r
        margin-right: 7.5rem\r
    }\r
\r
    .tablet\\:margin-left-15 {\r
        margin-left: 7.5rem\r
    }\r
\r
    .tablet\\:margin-x-card {\r
        margin-left: 10rem;\r
        margin-right: 10rem\r
    }\r
\r
    .tablet\\:margin-right-card {\r
        margin-right: 10rem\r
    }\r
\r
    .tablet\\:margin-left-card {\r
        margin-left: 10rem\r
    }\r
\r
    .tablet\\:margin-x-card-lg {\r
        margin-left: 15rem;\r
        margin-right: 15rem\r
    }\r
\r
    .tablet\\:margin-right-card-lg {\r
        margin-right: 15rem\r
    }\r
\r
    .tablet\\:margin-left-card-lg {\r
        margin-left: 15rem\r
    }\r
\r
    .tablet\\:margin-x-mobile {\r
        margin-left: 20rem;\r
        margin-right: 20rem\r
    }\r
\r
    .tablet\\:margin-right-mobile {\r
        margin-right: 20rem\r
    }\r
\r
    .tablet\\:margin-left-mobile {\r
        margin-left: 20rem\r
    }\r
\r
    .tablet\\:margin-x-05em {\r
        margin-left: .5em;\r
        margin-right: .5em\r
    }\r
\r
    .tablet\\:margin-right-05em {\r
        margin-right: .5em\r
    }\r
\r
    .tablet\\:margin-left-05em {\r
        margin-left: .5em\r
    }\r
\r
    .tablet\\:margin-x-1em {\r
        margin-left: 1em;\r
        margin-right: 1em\r
    }\r
\r
    .tablet\\:margin-right-1em {\r
        margin-right: 1em\r
    }\r
\r
    .tablet\\:margin-left-1em {\r
        margin-left: 1em\r
    }\r
\r
    .tablet\\:margin-x-105em {\r
        margin-left: 1.5em;\r
        margin-right: 1.5em\r
    }\r
\r
    .tablet\\:margin-right-105em {\r
        margin-right: 1.5em\r
    }\r
\r
    .tablet\\:margin-left-105em {\r
        margin-left: 1.5em\r
    }\r
\r
    .tablet\\:margin-x-2em {\r
        margin-left: 2em;\r
        margin-right: 2em\r
    }\r
\r
    .tablet\\:margin-right-2em {\r
        margin-right: 2em\r
    }\r
\r
    .tablet\\:margin-left-2em {\r
        margin-left: 2em\r
    }\r
\r
    .tablet\\:margin-x-0 {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
\r
    .tablet\\:margin-right-0 {\r
        margin-right: 0\r
    }\r
\r
    .tablet\\:margin-left-0 {\r
        margin-left: 0\r
    }\r
\r
    .tablet\\:margin-x-auto {\r
        margin-left: auto;\r
        margin-right: auto\r
    }\r
\r
    .tablet\\:margin-right-auto {\r
        margin-right: auto\r
    }\r
\r
    .tablet\\:margin-left-auto {\r
        margin-left: auto\r
    }\r
\r
    .tablet\\:measure-1 {\r
        max-width: 44ex\r
    }\r
\r
    .tablet\\:measure-2 {\r
        max-width: 60ex\r
    }\r
\r
    .tablet\\:measure-3 {\r
        max-width: 64ex\r
    }\r
\r
    .tablet\\:measure-4 {\r
        max-width: 68ex\r
    }\r
\r
    .tablet\\:measure-5 {\r
        max-width: 72ex\r
    }\r
\r
    .tablet\\:measure-6 {\r
        max-width: 88ex\r
    }\r
\r
    .tablet\\:measure-none {\r
        max-width: none\r
    }\r
\r
    .tablet\\:order-first {\r
        order: -1\r
    }\r
\r
    .tablet\\:order-last {\r
        order: 999\r
    }\r
\r
    .tablet\\:order-initial {\r
        order: initial\r
    }\r
\r
    .tablet\\:order-0 {\r
        order: 0\r
    }\r
\r
    .tablet\\:order-1 {\r
        order: 1\r
    }\r
\r
    .tablet\\:order-2 {\r
        order: 2\r
    }\r
\r
    .tablet\\:order-3 {\r
        order: 3\r
    }\r
\r
    .tablet\\:order-4 {\r
        order: 4\r
    }\r
\r
    .tablet\\:order-5 {\r
        order: 5\r
    }\r
\r
    .tablet\\:order-6 {\r
        order: 6\r
    }\r
\r
    .tablet\\:order-7 {\r
        order: 7\r
    }\r
\r
    .tablet\\:order-8 {\r
        order: 8\r
    }\r
\r
    .tablet\\:order-9 {\r
        order: 9\r
    }\r
\r
    .tablet\\:order-10 {\r
        order: 10\r
    }\r
\r
    .tablet\\:order-11 {\r
        order: 11\r
    }\r
\r
    .tablet\\:padding-1px {\r
        padding: 1px\r
    }\r
\r
    .tablet\\:padding-y-1px {\r
        padding-top: 1px;\r
        padding-bottom: 1px\r
    }\r
\r
    .tablet\\:padding-x-1px {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .tablet\\:padding-top-1px {\r
        padding-top: 1px\r
    }\r
\r
    .tablet\\:padding-right-1px {\r
        padding-right: 1px\r
    }\r
\r
    .tablet\\:padding-bottom-1px {\r
        padding-bottom: 1px\r
    }\r
\r
    .tablet\\:padding-left-1px {\r
        padding-left: 1px\r
    }\r
\r
    .tablet\\:padding-2px {\r
        padding: 2px\r
    }\r
\r
    .tablet\\:padding-y-2px {\r
        padding-top: 2px;\r
        padding-bottom: 2px\r
    }\r
\r
    .tablet\\:padding-x-2px {\r
        padding-left: 2px;\r
        padding-right: 2px\r
    }\r
\r
    .tablet\\:padding-top-2px {\r
        padding-top: 2px\r
    }\r
\r
    .tablet\\:padding-right-2px {\r
        padding-right: 2px\r
    }\r
\r
    .tablet\\:padding-bottom-2px {\r
        padding-bottom: 2px\r
    }\r
\r
    .tablet\\:padding-left-2px {\r
        padding-left: 2px\r
    }\r
\r
    .tablet\\:padding-05 {\r
        padding: .25rem\r
    }\r
\r
    .tablet\\:padding-y-05 {\r
        padding-top: .25rem;\r
        padding-bottom: .25rem\r
    }\r
\r
    .tablet\\:padding-x-05 {\r
        padding-left: .25rem;\r
        padding-right: .25rem\r
    }\r
\r
    .tablet\\:padding-top-05 {\r
        padding-top: .25rem\r
    }\r
\r
    .tablet\\:padding-right-05 {\r
        padding-right: .25rem\r
    }\r
\r
    .tablet\\:padding-bottom-05 {\r
        padding-bottom: .25rem\r
    }\r
\r
    .tablet\\:padding-left-05 {\r
        padding-left: .25rem\r
    }\r
\r
    .tablet\\:padding-1 {\r
        padding: .5rem\r
    }\r
\r
    .tablet\\:padding-y-1 {\r
        padding-top: .5rem;\r
        padding-bottom: .5rem\r
    }\r
\r
    .tablet\\:padding-x-1 {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .tablet\\:padding-top-1 {\r
        padding-top: .5rem\r
    }\r
\r
    .tablet\\:padding-right-1 {\r
        padding-right: .5rem\r
    }\r
\r
    .tablet\\:padding-bottom-1 {\r
        padding-bottom: .5rem\r
    }\r
\r
    .tablet\\:padding-left-1 {\r
        padding-left: .5rem\r
    }\r
\r
    .tablet\\:padding-105 {\r
        padding: .75rem\r
    }\r
\r
    .tablet\\:padding-y-105 {\r
        padding-top: .75rem;\r
        padding-bottom: .75rem\r
    }\r
\r
    .tablet\\:padding-x-105 {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
\r
    .tablet\\:padding-top-105 {\r
        padding-top: .75rem\r
    }\r
\r
    .tablet\\:padding-right-105 {\r
        padding-right: .75rem\r
    }\r
\r
    .tablet\\:padding-bottom-105 {\r
        padding-bottom: .75rem\r
    }\r
\r
    .tablet\\:padding-left-105 {\r
        padding-left: .75rem\r
    }\r
\r
    .tablet\\:padding-2 {\r
        padding: 1rem\r
    }\r
\r
    .tablet\\:padding-y-2 {\r
        padding-top: 1rem;\r
        padding-bottom: 1rem\r
    }\r
\r
    .tablet\\:padding-x-2 {\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
\r
    .tablet\\:padding-top-2 {\r
        padding-top: 1rem\r
    }\r
\r
    .tablet\\:padding-right-2 {\r
        padding-right: 1rem\r
    }\r
\r
    .tablet\\:padding-bottom-2 {\r
        padding-bottom: 1rem\r
    }\r
\r
    .tablet\\:padding-left-2 {\r
        padding-left: 1rem\r
    }\r
\r
    .tablet\\:padding-205 {\r
        padding: 1.25rem\r
    }\r
\r
    .tablet\\:padding-y-205 {\r
        padding-top: 1.25rem;\r
        padding-bottom: 1.25rem\r
    }\r
\r
    .tablet\\:padding-x-205 {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem\r
    }\r
\r
    .tablet\\:padding-top-205 {\r
        padding-top: 1.25rem\r
    }\r
\r
    .tablet\\:padding-right-205 {\r
        padding-right: 1.25rem\r
    }\r
\r
    .tablet\\:padding-bottom-205 {\r
        padding-bottom: 1.25rem\r
    }\r
\r
    .tablet\\:padding-left-205 {\r
        padding-left: 1.25rem\r
    }\r
\r
    .tablet\\:padding-3 {\r
        padding: 1.5rem\r
    }\r
\r
    .tablet\\:padding-y-3 {\r
        padding-top: 1.5rem;\r
        padding-bottom: 1.5rem\r
    }\r
\r
    .tablet\\:padding-x-3 {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem\r
    }\r
\r
    .tablet\\:padding-top-3 {\r
        padding-top: 1.5rem\r
    }\r
\r
    .tablet\\:padding-right-3 {\r
        padding-right: 1.5rem\r
    }\r
\r
    .tablet\\:padding-bottom-3 {\r
        padding-bottom: 1.5rem\r
    }\r
\r
    .tablet\\:padding-left-3 {\r
        padding-left: 1.5rem\r
    }\r
\r
    .tablet\\:padding-4 {\r
        padding: 2rem\r
    }\r
\r
    .tablet\\:padding-y-4 {\r
        padding-top: 2rem;\r
        padding-bottom: 2rem\r
    }\r
\r
    .tablet\\:padding-x-4 {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
\r
    .tablet\\:padding-top-4 {\r
        padding-top: 2rem\r
    }\r
\r
    .tablet\\:padding-right-4 {\r
        padding-right: 2rem\r
    }\r
\r
    .tablet\\:padding-bottom-4 {\r
        padding-bottom: 2rem\r
    }\r
\r
    .tablet\\:padding-left-4 {\r
        padding-left: 2rem\r
    }\r
\r
    .tablet\\:padding-5 {\r
        padding: 2.5rem\r
    }\r
\r
    .tablet\\:padding-y-5 {\r
        padding-top: 2.5rem;\r
        padding-bottom: 2.5rem\r
    }\r
\r
    .tablet\\:padding-x-5 {\r
        padding-left: 2.5rem;\r
        padding-right: 2.5rem\r
    }\r
\r
    .tablet\\:padding-top-5 {\r
        padding-top: 2.5rem\r
    }\r
\r
    .tablet\\:padding-right-5 {\r
        padding-right: 2.5rem\r
    }\r
\r
    .tablet\\:padding-bottom-5 {\r
        padding-bottom: 2.5rem\r
    }\r
\r
    .tablet\\:padding-left-5 {\r
        padding-left: 2.5rem\r
    }\r
\r
    .tablet\\:padding-6 {\r
        padding: 3rem\r
    }\r
\r
    .tablet\\:padding-y-6 {\r
        padding-top: 3rem;\r
        padding-bottom: 3rem\r
    }\r
\r
    .tablet\\:padding-x-6 {\r
        padding-left: 3rem;\r
        padding-right: 3rem\r
    }\r
\r
    .tablet\\:padding-top-6 {\r
        padding-top: 3rem\r
    }\r
\r
    .tablet\\:padding-right-6 {\r
        padding-right: 3rem\r
    }\r
\r
    .tablet\\:padding-bottom-6 {\r
        padding-bottom: 3rem\r
    }\r
\r
    .tablet\\:padding-left-6 {\r
        padding-left: 3rem\r
    }\r
\r
    .tablet\\:padding-7 {\r
        padding: 3.5rem\r
    }\r
\r
    .tablet\\:padding-y-7 {\r
        padding-top: 3.5rem;\r
        padding-bottom: 3.5rem\r
    }\r
\r
    .tablet\\:padding-x-7 {\r
        padding-left: 3.5rem;\r
        padding-right: 3.5rem\r
    }\r
\r
    .tablet\\:padding-top-7 {\r
        padding-top: 3.5rem\r
    }\r
\r
    .tablet\\:padding-right-7 {\r
        padding-right: 3.5rem\r
    }\r
\r
    .tablet\\:padding-bottom-7 {\r
        padding-bottom: 3.5rem\r
    }\r
\r
    .tablet\\:padding-left-7 {\r
        padding-left: 3.5rem\r
    }\r
\r
    .tablet\\:padding-8 {\r
        padding: 4rem\r
    }\r
\r
    .tablet\\:padding-y-8 {\r
        padding-top: 4rem;\r
        padding-bottom: 4rem\r
    }\r
\r
    .tablet\\:padding-x-8 {\r
        padding-left: 4rem;\r
        padding-right: 4rem\r
    }\r
\r
    .tablet\\:padding-top-8 {\r
        padding-top: 4rem\r
    }\r
\r
    .tablet\\:padding-right-8 {\r
        padding-right: 4rem\r
    }\r
\r
    .tablet\\:padding-bottom-8 {\r
        padding-bottom: 4rem\r
    }\r
\r
    .tablet\\:padding-left-8 {\r
        padding-left: 4rem\r
    }\r
\r
    .tablet\\:padding-9 {\r
        padding: 4.5rem\r
    }\r
\r
    .tablet\\:padding-y-9 {\r
        padding-top: 4.5rem;\r
        padding-bottom: 4.5rem\r
    }\r
\r
    .tablet\\:padding-x-9 {\r
        padding-left: 4.5rem;\r
        padding-right: 4.5rem\r
    }\r
\r
    .tablet\\:padding-top-9 {\r
        padding-top: 4.5rem\r
    }\r
\r
    .tablet\\:padding-right-9 {\r
        padding-right: 4.5rem\r
    }\r
\r
    .tablet\\:padding-bottom-9 {\r
        padding-bottom: 4.5rem\r
    }\r
\r
    .tablet\\:padding-left-9 {\r
        padding-left: 4.5rem\r
    }\r
\r
    .tablet\\:padding-10 {\r
        padding: 5rem\r
    }\r
\r
    .tablet\\:padding-y-10 {\r
        padding-top: 5rem;\r
        padding-bottom: 5rem\r
    }\r
\r
    .tablet\\:padding-x-10 {\r
        padding-left: 5rem;\r
        padding-right: 5rem\r
    }\r
\r
    .tablet\\:padding-top-10 {\r
        padding-top: 5rem\r
    }\r
\r
    .tablet\\:padding-right-10 {\r
        padding-right: 5rem\r
    }\r
\r
    .tablet\\:padding-bottom-10 {\r
        padding-bottom: 5rem\r
    }\r
\r
    .tablet\\:padding-left-10 {\r
        padding-left: 5rem\r
    }\r
\r
    .tablet\\:padding-15 {\r
        padding: 7.5rem\r
    }\r
\r
    .tablet\\:padding-y-15 {\r
        padding-top: 7.5rem;\r
        padding-bottom: 7.5rem\r
    }\r
\r
    .tablet\\:padding-x-15 {\r
        padding-left: 7.5rem;\r
        padding-right: 7.5rem\r
    }\r
\r
    .tablet\\:padding-top-15 {\r
        padding-top: 7.5rem\r
    }\r
\r
    .tablet\\:padding-right-15 {\r
        padding-right: 7.5rem\r
    }\r
\r
    .tablet\\:padding-bottom-15 {\r
        padding-bottom: 7.5rem\r
    }\r
\r
    .tablet\\:padding-left-15 {\r
        padding-left: 7.5rem\r
    }\r
\r
    .tablet\\:padding-0 {\r
        padding: 0\r
    }\r
\r
    .tablet\\:padding-y-0 {\r
        padding-top: 0;\r
        padding-bottom: 0\r
    }\r
\r
    .tablet\\:padding-x-0 {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
\r
    .tablet\\:padding-top-0 {\r
        padding-top: 0\r
    }\r
\r
    .tablet\\:padding-right-0 {\r
        padding-right: 0\r
    }\r
\r
    .tablet\\:padding-bottom-0 {\r
        padding-bottom: 0\r
    }\r
\r
    .tablet\\:padding-left-0 {\r
        padding-left: 0\r
    }\r
\r
    .tablet\\:width-1px {\r
        width: 1px\r
    }\r
\r
    .tablet\\:width-2px {\r
        width: 2px\r
    }\r
\r
    .tablet\\:width-05 {\r
        width: .25rem\r
    }\r
\r
    .tablet\\:width-1 {\r
        width: .5rem\r
    }\r
\r
    .tablet\\:width-105 {\r
        width: .75rem\r
    }\r
\r
    .tablet\\:width-2 {\r
        width: 1rem\r
    }\r
\r
    .tablet\\:width-205 {\r
        width: 1.25rem\r
    }\r
\r
    .tablet\\:width-3 {\r
        width: 1.5rem\r
    }\r
\r
    .tablet\\:width-4 {\r
        width: 2rem\r
    }\r
\r
    .tablet\\:width-5 {\r
        width: 2.5rem\r
    }\r
\r
    .tablet\\:width-6 {\r
        width: 3rem\r
    }\r
\r
    .tablet\\:width-7 {\r
        width: 3.5rem\r
    }\r
\r
    .tablet\\:width-8 {\r
        width: 4rem\r
    }\r
\r
    .tablet\\:width-9 {\r
        width: 4.5rem\r
    }\r
\r
    .tablet\\:width-10 {\r
        width: 5rem\r
    }\r
\r
    .tablet\\:width-15 {\r
        width: 7.5rem\r
    }\r
\r
    .tablet\\:width-card {\r
        width: 10rem\r
    }\r
\r
    .tablet\\:width-card-lg {\r
        width: 15rem\r
    }\r
\r
    .tablet\\:width-mobile {\r
        width: 20rem\r
    }\r
\r
    .tablet\\:width-mobile-lg {\r
        width: 30rem\r
    }\r
\r
    .tablet\\:width-tablet {\r
        width: 40rem\r
    }\r
\r
    .tablet\\:width-tablet-lg {\r
        width: 55rem\r
    }\r
\r
    .tablet\\:width-desktop {\r
        width: 64rem\r
    }\r
\r
    .tablet\\:width-desktop-lg {\r
        width: 75rem\r
    }\r
\r
    .tablet\\:width-widescreen {\r
        width: 87.5rem\r
    }\r
\r
    .tablet\\:width-0 {\r
        width: 0\r
    }\r
\r
    .tablet\\:width-full {\r
        width: 100%\r
    }\r
\r
    .tablet\\:width-auto {\r
        width: auto\r
    }\r
}\r
\r
@media all and (min-width:64em) {\r
\r
    .desktop\\:border-1px,\r
    .desktop\\:hover\\:border-1px:hover {\r
        border: 1px solid\r
    }\r
\r
    .desktop\\:border-y-1px,\r
    .desktop\\:hover\\:border-y-1px:hover {\r
        border-top: 1px solid;\r
        border-bottom: 1px solid\r
    }\r
\r
    .desktop\\:border-x-1px,\r
    .desktop\\:hover\\:border-x-1px:hover {\r
        border-left: 1px solid;\r
        border-right: 1px solid\r
    }\r
\r
    .desktop\\:border-top-1px,\r
    .desktop\\:hover\\:border-top-1px:hover {\r
        border-top: 1px solid\r
    }\r
\r
    .desktop\\:border-right-1px,\r
    .desktop\\:hover\\:border-right-1px:hover {\r
        border-right: 1px solid\r
    }\r
\r
    .desktop\\:border-bottom-1px,\r
    .desktop\\:hover\\:border-bottom-1px:hover {\r
        border-bottom: 1px solid\r
    }\r
\r
    .desktop\\:border-left-1px,\r
    .desktop\\:hover\\:border-left-1px:hover {\r
        border-left: 1px solid\r
    }\r
\r
    .desktop\\:border-2px,\r
    .desktop\\:hover\\:border-2px:hover {\r
        border: 2px solid\r
    }\r
\r
    .desktop\\:border-y-2px,\r
    .desktop\\:hover\\:border-y-2px:hover {\r
        border-top: 2px solid;\r
        border-bottom: 2px solid\r
    }\r
\r
    .desktop\\:border-x-2px,\r
    .desktop\\:hover\\:border-x-2px:hover {\r
        border-left: 2px solid;\r
        border-right: 2px solid\r
    }\r
\r
    .desktop\\:border-top-2px,\r
    .desktop\\:hover\\:border-top-2px:hover {\r
        border-top: 2px solid\r
    }\r
\r
    .desktop\\:border-right-2px,\r
    .desktop\\:hover\\:border-right-2px:hover {\r
        border-right: 2px solid\r
    }\r
\r
    .desktop\\:border-bottom-2px,\r
    .desktop\\:hover\\:border-bottom-2px:hover {\r
        border-bottom: 2px solid\r
    }\r
\r
    .desktop\\:border-left-2px,\r
    .desktop\\:hover\\:border-left-2px:hover {\r
        border-left: 2px solid\r
    }\r
\r
    .desktop\\:border-05,\r
    .desktop\\:hover\\:border-05:hover {\r
        border: .25rem solid\r
    }\r
\r
    .desktop\\:border-y-05,\r
    .desktop\\:hover\\:border-y-05:hover {\r
        border-top: .25rem solid;\r
        border-bottom: .25rem solid\r
    }\r
\r
    .desktop\\:border-x-05,\r
    .desktop\\:hover\\:border-x-05:hover {\r
        border-left: .25rem solid;\r
        border-right: .25rem solid\r
    }\r
\r
    .desktop\\:border-top-05,\r
    .desktop\\:hover\\:border-top-05:hover {\r
        border-top: .25rem solid\r
    }\r
\r
    .desktop\\:border-right-05,\r
    .desktop\\:hover\\:border-right-05:hover {\r
        border-right: .25rem solid\r
    }\r
\r
    .desktop\\:border-bottom-05,\r
    .desktop\\:hover\\:border-bottom-05:hover {\r
        border-bottom: .25rem solid\r
    }\r
\r
    .desktop\\:border-left-05,\r
    .desktop\\:hover\\:border-left-05:hover {\r
        border-left: .25rem solid\r
    }\r
\r
    .desktop\\:border-1,\r
    .desktop\\:hover\\:border-1:hover {\r
        border: .5rem solid\r
    }\r
\r
    .desktop\\:border-y-1,\r
    .desktop\\:hover\\:border-y-1:hover {\r
        border-top: .5rem solid;\r
        border-bottom: .5rem solid\r
    }\r
\r
    .desktop\\:border-x-1,\r
    .desktop\\:hover\\:border-x-1:hover {\r
        border-left: .5rem solid;\r
        border-right: .5rem solid\r
    }\r
\r
    .desktop\\:border-top-1,\r
    .desktop\\:hover\\:border-top-1:hover {\r
        border-top: .5rem solid\r
    }\r
\r
    .desktop\\:border-right-1,\r
    .desktop\\:hover\\:border-right-1:hover {\r
        border-right: .5rem solid\r
    }\r
\r
    .desktop\\:border-bottom-1,\r
    .desktop\\:hover\\:border-bottom-1:hover {\r
        border-bottom: .5rem solid\r
    }\r
\r
    .desktop\\:border-left-1,\r
    .desktop\\:hover\\:border-left-1:hover {\r
        border-left: .5rem solid\r
    }\r
\r
    .desktop\\:border-105,\r
    .desktop\\:hover\\:border-105:hover {\r
        border: .75rem solid\r
    }\r
\r
    .desktop\\:border-y-105,\r
    .desktop\\:hover\\:border-y-105:hover {\r
        border-top: .75rem solid;\r
        border-bottom: .75rem solid\r
    }\r
\r
    .desktop\\:border-x-105,\r
    .desktop\\:hover\\:border-x-105:hover {\r
        border-left: .75rem solid;\r
        border-right: .75rem solid\r
    }\r
\r
    .desktop\\:border-top-105,\r
    .desktop\\:hover\\:border-top-105:hover {\r
        border-top: .75rem solid\r
    }\r
\r
    .desktop\\:border-right-105,\r
    .desktop\\:hover\\:border-right-105:hover {\r
        border-right: .75rem solid\r
    }\r
\r
    .desktop\\:border-bottom-105,\r
    .desktop\\:hover\\:border-bottom-105:hover {\r
        border-bottom: .75rem solid\r
    }\r
\r
    .desktop\\:border-left-105,\r
    .desktop\\:hover\\:border-left-105:hover {\r
        border-left: .75rem solid\r
    }\r
\r
    .desktop\\:border-2,\r
    .desktop\\:hover\\:border-2:hover {\r
        border: 1rem solid\r
    }\r
\r
    .desktop\\:border-y-2,\r
    .desktop\\:hover\\:border-y-2:hover {\r
        border-top: 1rem solid;\r
        border-bottom: 1rem solid\r
    }\r
\r
    .desktop\\:border-x-2,\r
    .desktop\\:hover\\:border-x-2:hover {\r
        border-left: 1rem solid;\r
        border-right: 1rem solid\r
    }\r
\r
    .desktop\\:border-top-2,\r
    .desktop\\:hover\\:border-top-2:hover {\r
        border-top: 1rem solid\r
    }\r
\r
    .desktop\\:border-right-2,\r
    .desktop\\:hover\\:border-right-2:hover {\r
        border-right: 1rem solid\r
    }\r
\r
    .desktop\\:border-bottom-2,\r
    .desktop\\:hover\\:border-bottom-2:hover {\r
        border-bottom: 1rem solid\r
    }\r
\r
    .desktop\\:border-left-2,\r
    .desktop\\:hover\\:border-left-2:hover {\r
        border-left: 1rem solid\r
    }\r
\r
    .desktop\\:border-205,\r
    .desktop\\:hover\\:border-205:hover {\r
        border: 1.25rem solid\r
    }\r
\r
    .desktop\\:border-y-205,\r
    .desktop\\:hover\\:border-y-205:hover {\r
        border-top: 1.25rem solid;\r
        border-bottom: 1.25rem solid\r
    }\r
\r
    .desktop\\:border-x-205,\r
    .desktop\\:hover\\:border-x-205:hover {\r
        border-left: 1.25rem solid;\r
        border-right: 1.25rem solid\r
    }\r
\r
    .desktop\\:border-top-205,\r
    .desktop\\:hover\\:border-top-205:hover {\r
        border-top: 1.25rem solid\r
    }\r
\r
    .desktop\\:border-right-205,\r
    .desktop\\:hover\\:border-right-205:hover {\r
        border-right: 1.25rem solid\r
    }\r
\r
    .desktop\\:border-bottom-205,\r
    .desktop\\:hover\\:border-bottom-205:hover {\r
        border-bottom: 1.25rem solid\r
    }\r
\r
    .desktop\\:border-left-205,\r
    .desktop\\:hover\\:border-left-205:hover {\r
        border-left: 1.25rem solid\r
    }\r
\r
    .desktop\\:border-3,\r
    .desktop\\:hover\\:border-3:hover {\r
        border: 1.5rem solid\r
    }\r
\r
    .desktop\\:border-y-3,\r
    .desktop\\:hover\\:border-y-3:hover {\r
        border-top: 1.5rem solid;\r
        border-bottom: 1.5rem solid\r
    }\r
\r
    .desktop\\:border-x-3,\r
    .desktop\\:hover\\:border-x-3:hover {\r
        border-left: 1.5rem solid;\r
        border-right: 1.5rem solid\r
    }\r
\r
    .desktop\\:border-top-3,\r
    .desktop\\:hover\\:border-top-3:hover {\r
        border-top: 1.5rem solid\r
    }\r
\r
    .desktop\\:border-right-3,\r
    .desktop\\:hover\\:border-right-3:hover {\r
        border-right: 1.5rem solid\r
    }\r
\r
    .desktop\\:border-bottom-3,\r
    .desktop\\:hover\\:border-bottom-3:hover {\r
        border-bottom: 1.5rem solid\r
    }\r
\r
    .desktop\\:border-left-3,\r
    .desktop\\:hover\\:border-left-3:hover {\r
        border-left: 1.5rem solid\r
    }\r
\r
    .desktop\\:border-0,\r
    .desktop\\:hover\\:border-0:hover {\r
        border: 0 solid\r
    }\r
\r
    .desktop\\:border-y-0,\r
    .desktop\\:hover\\:border-y-0:hover {\r
        border-top: 0 solid;\r
        border-bottom: 0 solid\r
    }\r
\r
    .desktop\\:border-x-0,\r
    .desktop\\:hover\\:border-x-0:hover {\r
        border-left: 0 solid;\r
        border-right: 0 solid\r
    }\r
\r
    .desktop\\:border-top-0,\r
    .desktop\\:hover\\:border-top-0:hover {\r
        border-top: 0 solid\r
    }\r
\r
    .desktop\\:border-right-0,\r
    .desktop\\:hover\\:border-right-0:hover {\r
        border-right: 0 solid\r
    }\r
\r
    .desktop\\:border-bottom-0,\r
    .desktop\\:hover\\:border-bottom-0:hover {\r
        border-bottom: 0 solid\r
    }\r
\r
    .desktop\\:border-left-0,\r
    .desktop\\:hover\\:border-left-0:hover {\r
        border-left: 0 solid\r
    }\r
\r
    .desktop\\:border,\r
    .desktop\\:hover\\:border:hover {\r
        border: 1px solid\r
    }\r
\r
    .desktop\\:border-y,\r
    .desktop\\:hover\\:border-y:hover {\r
        border-top: 1px solid;\r
        border-bottom: 1px solid\r
    }\r
\r
    .desktop\\:border-x,\r
    .desktop\\:hover\\:border-x:hover {\r
        border-left: 1px solid;\r
        border-right: 1px solid\r
    }\r
\r
    .desktop\\:border-top,\r
    .desktop\\:hover\\:border-top:hover {\r
        border-top: 1px solid\r
    }\r
\r
    .desktop\\:border-right,\r
    .desktop\\:hover\\:border-right:hover {\r
        border-right: 1px solid\r
    }\r
\r
    .desktop\\:border-bottom,\r
    .desktop\\:hover\\:border-bottom:hover {\r
        border-bottom: 1px solid\r
    }\r
\r
    .desktop\\:border-left,\r
    .desktop\\:hover\\:border-left:hover {\r
        border-left: 1px solid\r
    }\r
\r
    .desktop\\:border-transparent,\r
    .desktop\\:hover\\:border-transparent:hover {\r
        border-color: transparent\r
    }\r
\r
    .desktop\\:border-black,\r
    .desktop\\:hover\\:border-black:hover {\r
        border-color: #000\r
    }\r
\r
    .desktop\\:border-white,\r
    .desktop\\:hover\\:border-white:hover {\r
        border-color: #fff\r
    }\r
\r
    .desktop\\:border-red,\r
    .desktop\\:hover\\:border-red:hover {\r
        border-color: #e52207\r
    }\r
\r
    .desktop\\:border-orange,\r
    .desktop\\:hover\\:border-orange:hover {\r
        border-color: #e66f0e\r
    }\r
\r
    .desktop\\:border-gold,\r
    .desktop\\:hover\\:border-gold:hover {\r
        border-color: #ffbe2e\r
    }\r
\r
    .desktop\\:border-yellow,\r
    .desktop\\:hover\\:border-yellow:hover {\r
        border-color: #fee685\r
    }\r
\r
    .desktop\\:border-green,\r
    .desktop\\:hover\\:border-green:hover {\r
        border-color: #538200\r
    }\r
\r
    .desktop\\:border-mint,\r
    .desktop\\:hover\\:border-mint:hover {\r
        border-color: #04c585\r
    }\r
\r
    .desktop\\:border-cyan,\r
    .desktop\\:hover\\:border-cyan:hover {\r
        border-color: #009ec1\r
    }\r
\r
    .desktop\\:border-blue,\r
    .desktop\\:hover\\:border-blue:hover {\r
        border-color: #0076d6\r
    }\r
\r
    .desktop\\:border-indigo,\r
    .desktop\\:hover\\:border-indigo:hover {\r
        border-color: #676cc8\r
    }\r
\r
    .desktop\\:border-violet,\r
    .desktop\\:hover\\:border-violet:hover {\r
        border-color: #8168b3\r
    }\r
\r
    .desktop\\:border-magenta,\r
    .desktop\\:hover\\:border-magenta:hover {\r
        border-color: #d72d79\r
    }\r
\r
    .desktop\\:border-gray-5,\r
    .desktop\\:hover\\:border-gray-5:hover {\r
        border-color: #f0f0f0\r
    }\r
\r
    .desktop\\:border-gray-10,\r
    .desktop\\:hover\\:border-gray-10:hover {\r
        border-color: #e6e6e6\r
    }\r
\r
    .desktop\\:border-gray-30,\r
    .desktop\\:hover\\:border-gray-30:hover {\r
        border-color: #adadad\r
    }\r
\r
    .desktop\\:border-gray-50,\r
    .desktop\\:hover\\:border-gray-50:hover {\r
        border-color: #757575\r
    }\r
\r
    .desktop\\:border-gray-70,\r
    .desktop\\:hover\\:border-gray-70:hover {\r
        border-color: #454545\r
    }\r
\r
    .desktop\\:border-gray-90,\r
    .desktop\\:hover\\:border-gray-90:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .desktop\\:border-base-lightest,\r
    .desktop\\:hover\\:border-base-lightest:hover {\r
        border-color: #f0f0f0\r
    }\r
\r
    .desktop\\:border-base-lighter,\r
    .desktop\\:hover\\:border-base-lighter:hover {\r
        border-color: #dfe1e2\r
    }\r
\r
    .desktop\\:border-base-light,\r
    .desktop\\:hover\\:border-base-light:hover {\r
        border-color: #a9aeb1\r
    }\r
\r
    .desktop\\:border-base,\r
    .desktop\\:hover\\:border-base:hover {\r
        border-color: #71767a\r
    }\r
\r
    .desktop\\:border-base-dark,\r
    .desktop\\:hover\\:border-base-dark:hover {\r
        border-color: #565c65\r
    }\r
\r
    .desktop\\:border-base-darker,\r
    .desktop\\:hover\\:border-base-darker:hover {\r
        border-color: #3d4551\r
    }\r
\r
    .desktop\\:border-base-darkest,\r
    .desktop\\:border-ink,\r
    .desktop\\:hover\\:border-base-darkest:hover,\r
    .desktop\\:hover\\:border-ink:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .desktop\\:border-primary-lighter,\r
    .desktop\\:hover\\:border-primary-lighter:hover {\r
        border-color: #d9e8f6\r
    }\r
\r
    .desktop\\:border-primary-light,\r
    .desktop\\:hover\\:border-primary-light:hover {\r
        border-color: #73b3e7\r
    }\r
\r
    .desktop\\:border-primary,\r
    .desktop\\:hover\\:border-primary:hover {\r
        border-color: #005ea2\r
    }\r
\r
    .desktop\\:border-primary-vivid,\r
    .desktop\\:hover\\:border-primary-vivid:hover {\r
        border-color: #0050d8\r
    }\r
\r
    .desktop\\:border-primary-dark,\r
    .desktop\\:hover\\:border-primary-dark:hover {\r
        border-color: #1a4480\r
    }\r
\r
    .desktop\\:border-primary-darker,\r
    .desktop\\:hover\\:border-primary-darker:hover {\r
        border-color: #162e51\r
    }\r
\r
    .desktop\\:border-secondary-lighter,\r
    .desktop\\:hover\\:border-secondary-lighter:hover {\r
        border-color: #f3e1e4\r
    }\r
\r
    .desktop\\:border-secondary-light,\r
    .desktop\\:hover\\:border-secondary-light:hover {\r
        border-color: #f2938c\r
    }\r
\r
    .desktop\\:border-secondary,\r
    .desktop\\:hover\\:border-secondary:hover {\r
        border-color: #d83933\r
    }\r
\r
    .desktop\\:border-secondary-vivid,\r
    .desktop\\:hover\\:border-secondary-vivid:hover {\r
        border-color: #e41d3d\r
    }\r
\r
    .desktop\\:border-secondary-dark,\r
    .desktop\\:hover\\:border-secondary-dark:hover {\r
        border-color: #b50909\r
    }\r
\r
    .desktop\\:border-secondary-darker,\r
    .desktop\\:hover\\:border-secondary-darker:hover {\r
        border-color: #8b0a03\r
    }\r
\r
    .desktop\\:border-accent-warm-darker,\r
    .desktop\\:hover\\:border-accent-warm-darker:hover {\r
        border-color: #775540\r
    }\r
\r
    .desktop\\:border-accent-warm-dark,\r
    .desktop\\:hover\\:border-accent-warm-dark:hover {\r
        border-color: #c05600\r
    }\r
\r
    .desktop\\:border-accent-warm,\r
    .desktop\\:hover\\:border-accent-warm:hover {\r
        border-color: #fa9441\r
    }\r
\r
    .desktop\\:border-accent-warm-light,\r
    .desktop\\:hover\\:border-accent-warm-light:hover {\r
        border-color: #ffbc78\r
    }\r
\r
    .desktop\\:border-accent-warm-lighter,\r
    .desktop\\:hover\\:border-accent-warm-lighter:hover {\r
        border-color: #f2e4d4\r
    }\r
\r
    .desktop\\:border-accent-cool-darker,\r
    .desktop\\:hover\\:border-accent-cool-darker:hover {\r
        border-color: #07648d\r
    }\r
\r
    .desktop\\:border-accent-cool-dark,\r
    .desktop\\:hover\\:border-accent-cool-dark:hover {\r
        border-color: #28a0cb\r
    }\r
\r
    .desktop\\:border-accent-cool,\r
    .desktop\\:hover\\:border-accent-cool:hover {\r
        border-color: #00bde3\r
    }\r
\r
    .desktop\\:border-accent-cool-light,\r
    .desktop\\:hover\\:border-accent-cool-light:hover {\r
        border-color: #97d4ea\r
    }\r
\r
    .desktop\\:border-accent-cool-lighter,\r
    .desktop\\:hover\\:border-accent-cool-lighter:hover {\r
        border-color: #e1f3f8\r
    }\r
\r
    .desktop\\:border-error-lighter,\r
    .desktop\\:hover\\:border-error-lighter:hover {\r
        border-color: #f4e3db\r
    }\r
\r
    .desktop\\:border-error-light,\r
    .desktop\\:hover\\:border-error-light:hover {\r
        border-color: #f39268\r
    }\r
\r
    .desktop\\:border-error,\r
    .desktop\\:hover\\:border-error:hover {\r
        border-color: #d54309\r
    }\r
\r
    .desktop\\:border-error-dark,\r
    .desktop\\:hover\\:border-error-dark:hover {\r
        border-color: #b50909\r
    }\r
\r
    .desktop\\:border-error-darker,\r
    .desktop\\:hover\\:border-error-darker:hover {\r
        border-color: #6f3331\r
    }\r
\r
    .desktop\\:border-warning-lighter,\r
    .desktop\\:hover\\:border-warning-lighter:hover {\r
        border-color: #faf3d1\r
    }\r
\r
    .desktop\\:border-warning-light,\r
    .desktop\\:hover\\:border-warning-light:hover {\r
        border-color: #fee685\r
    }\r
\r
    .desktop\\:border-warning,\r
    .desktop\\:hover\\:border-warning:hover {\r
        border-color: #ffbe2e\r
    }\r
\r
    .desktop\\:border-warning-dark,\r
    .desktop\\:hover\\:border-warning-dark:hover {\r
        border-color: #e5a000\r
    }\r
\r
    .desktop\\:border-warning-darker,\r
    .desktop\\:hover\\:border-warning-darker:hover {\r
        border-color: #936f38\r
    }\r
\r
    .desktop\\:border-success-lighter,\r
    .desktop\\:hover\\:border-success-lighter:hover {\r
        border-color: #ecf3ec\r
    }\r
\r
    .desktop\\:border-success-light,\r
    .desktop\\:hover\\:border-success-light:hover {\r
        border-color: #70e17b\r
    }\r
\r
    .desktop\\:border-success,\r
    .desktop\\:hover\\:border-success:hover {\r
        border-color: #00a91c\r
    }\r
\r
    .desktop\\:border-success-dark,\r
    .desktop\\:hover\\:border-success-dark:hover {\r
        border-color: #008817\r
    }\r
\r
    .desktop\\:border-success-darker,\r
    .desktop\\:hover\\:border-success-darker:hover {\r
        border-color: #216e1f\r
    }\r
\r
    .desktop\\:border-info-lighter,\r
    .desktop\\:hover\\:border-info-lighter:hover {\r
        border-color: #e7f6f8\r
    }\r
\r
    .desktop\\:border-info-light,\r
    .desktop\\:hover\\:border-info-light:hover {\r
        border-color: #99deea\r
    }\r
\r
    .desktop\\:border-info,\r
    .desktop\\:hover\\:border-info:hover {\r
        border-color: #00bde3\r
    }\r
\r
    .desktop\\:border-info-dark,\r
    .desktop\\:hover\\:border-info-dark:hover {\r
        border-color: #009ec1\r
    }\r
\r
    .desktop\\:border-info-darker,\r
    .desktop\\:hover\\:border-info-darker:hover {\r
        border-color: #2e6276\r
    }\r
\r
    .desktop\\:border-disabled-lighter,\r
    .desktop\\:hover\\:border-disabled-lighter:hover {\r
        border-color: #c9c9c9\r
    }\r
\r
    .desktop\\:border-disabled-light,\r
    .desktop\\:hover\\:border-disabled-light:hover {\r
        border-color: #919191\r
    }\r
\r
    .desktop\\:border-disabled,\r
    .desktop\\:hover\\:border-disabled:hover {\r
        border-color: #757575\r
    }\r
\r
    .desktop\\:border-disabled-dark,\r
    .desktop\\:hover\\:border-disabled-dark:hover {\r
        border-color: #454545\r
    }\r
\r
    .desktop\\:border-disabled-darker,\r
    .desktop\\:hover\\:border-disabled-darker:hover {\r
        border-color: #1b1b1b\r
    }\r
\r
    .desktop\\:border-emergency,\r
    .desktop\\:hover\\:border-emergency:hover {\r
        border-color: #9c3d10\r
    }\r
\r
    .desktop\\:border-emergency-dark,\r
    .desktop\\:hover\\:border-emergency-dark:hover {\r
        border-color: #332d29\r
    }\r
\r
    .desktop\\:radius-0 {\r
        border-radius: 0\r
    }\r
\r
    .desktop\\:radius-top-0 {\r
        border-top-left-radius: 0;\r
        border-top-right-radius: 0\r
    }\r
\r
    .desktop\\:radius-right-0 {\r
        border-top-right-radius: 0;\r
        border-bottom-right-radius: 0\r
    }\r
\r
    .desktop\\:radius-bottom-0 {\r
        border-bottom-left-radius: 0;\r
        border-bottom-right-radius: 0\r
    }\r
\r
    .desktop\\:radius-left-0 {\r
        border-top-left-radius: 0;\r
        border-bottom-left-radius: 0\r
    }\r
\r
    .desktop\\:radius-sm {\r
        border-radius: 2px\r
    }\r
\r
    .desktop\\:radius-top-sm {\r
        border-top-left-radius: 2px;\r
        border-top-right-radius: 2px\r
    }\r
\r
    .desktop\\:radius-right-sm {\r
        border-top-right-radius: 2px;\r
        border-bottom-right-radius: 2px\r
    }\r
\r
    .desktop\\:radius-bottom-sm {\r
        border-bottom-left-radius: 2px;\r
        border-bottom-right-radius: 2px\r
    }\r
\r
    .desktop\\:radius-left-sm {\r
        border-top-left-radius: 2px;\r
        border-bottom-left-radius: 2px\r
    }\r
\r
    .desktop\\:radius-md {\r
        border-radius: .25rem\r
    }\r
\r
    .desktop\\:radius-top-md {\r
        border-top-left-radius: .25rem;\r
        border-top-right-radius: .25rem\r
    }\r
\r
    .desktop\\:radius-right-md {\r
        border-top-right-radius: .25rem;\r
        border-bottom-right-radius: .25rem\r
    }\r
\r
    .desktop\\:radius-bottom-md {\r
        border-bottom-left-radius: .25rem;\r
        border-bottom-right-radius: .25rem\r
    }\r
\r
    .desktop\\:radius-left-md {\r
        border-top-left-radius: .25rem;\r
        border-bottom-left-radius: .25rem\r
    }\r
\r
    .desktop\\:radius-lg {\r
        border-radius: .5rem\r
    }\r
\r
    .desktop\\:radius-top-lg {\r
        border-top-left-radius: .5rem;\r
        border-top-right-radius: .5rem\r
    }\r
\r
    .desktop\\:radius-right-lg {\r
        border-top-right-radius: .5rem;\r
        border-bottom-right-radius: .5rem\r
    }\r
\r
    .desktop\\:radius-bottom-lg {\r
        border-bottom-left-radius: .5rem;\r
        border-bottom-right-radius: .5rem\r
    }\r
\r
    .desktop\\:radius-left-lg {\r
        border-top-left-radius: .5rem;\r
        border-bottom-left-radius: .5rem\r
    }\r
\r
    .desktop\\:radius-pill {\r
        border-radius: 99rem\r
    }\r
\r
    .desktop\\:radius-top-pill {\r
        border-top-left-radius: 99rem;\r
        border-top-right-radius: 99rem\r
    }\r
\r
    .desktop\\:radius-right-pill {\r
        border-top-right-radius: 99rem;\r
        border-bottom-right-radius: 99rem\r
    }\r
\r
    .desktop\\:radius-bottom-pill {\r
        border-bottom-left-radius: 99rem;\r
        border-bottom-right-radius: 99rem\r
    }\r
\r
    .desktop\\:radius-left-pill {\r
        border-top-left-radius: 99rem;\r
        border-bottom-left-radius: 99rem\r
    }\r
\r
    .desktop\\:display-block {\r
        display: block\r
    }\r
\r
    .desktop\\:display-flex {\r
        display: flex\r
    }\r
\r
    .desktop\\:display-none {\r
        display: none\r
    }\r
\r
    .desktop\\:display-inline {\r
        display: inline\r
    }\r
\r
    .desktop\\:display-inline-block {\r
        display: inline-block\r
    }\r
\r
    .desktop\\:display-inline-flex {\r
        display: inline-flex\r
    }\r
\r
    .desktop\\:display-table {\r
        display: table\r
    }\r
\r
    .desktop\\:display-table-cell {\r
        display: table-cell\r
    }\r
\r
    .desktop\\:display-table-row {\r
        display: table-row\r
    }\r
\r
    .desktop\\:font-mono-3xs {\r
        /* font-size: .77rem */\r
    }\r
\r
    .desktop\\:font-mono-2xs {\r
        /* font-size: .83rem */\r
    }\r
\r
    .desktop\\:font-mono-xs {\r
        /* font-size: .89rem */\r
    }\r
\r
    .desktop\\:font-mono-sm {\r
        /* font-size: .95rem */\r
    }\r
\r
    .desktop\\:font-mono-md {\r
        /* font-size: 1.01rem */\r
    }\r
\r
    .desktop\\:font-mono-lg {\r
        /* font-size: 1.31rem */\r
    }\r
\r
    .desktop\\:font-mono-xl {\r
        /* font-size: 1.91rem */\r
    }\r
\r
    .desktop\\:font-mono-2xl {\r
        /* font-size: 2.38rem */\r
    }\r
\r
    .desktop\\:font-mono-3xl {\r
        /* font-size: 2.86rem */\r
    }\r
\r
    .desktop\\:font-sans-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .desktop\\:font-sans-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .desktop\\:font-sans-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .desktop\\:font-sans-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .desktop\\:font-sans-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .desktop\\:font-sans-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .desktop\\:font-sans-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .desktop\\:font-sans-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .desktop\\:font-sans-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .desktop\\:font-serif-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .desktop\\:font-serif-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .desktop\\:font-serif-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .desktop\\:font-serif-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .desktop\\:font-serif-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .desktop\\:font-serif-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .desktop\\:font-serif-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .desktop\\:font-serif-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .desktop\\:font-serif-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .desktop\\:font-heading-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .desktop\\:font-heading-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .desktop\\:font-heading-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .desktop\\:font-heading-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .desktop\\:font-heading-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .desktop\\:font-heading-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .desktop\\:font-heading-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .desktop\\:font-heading-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .desktop\\:font-heading-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .desktop\\:font-body-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .desktop\\:font-body-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .desktop\\:font-body-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .desktop\\:font-body-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .desktop\\:font-body-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .desktop\\:font-body-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .desktop\\:font-body-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .desktop\\:font-body-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .desktop\\:font-body-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .desktop\\:font-code-3xs {\r
        /* font-size: .77rem */\r
    }\r
\r
    .desktop\\:font-code-2xs {\r
        /* font-size: .83rem */\r
    }\r
\r
    .desktop\\:font-code-xs {\r
        /* font-size: .89rem */\r
    }\r
\r
    .desktop\\:font-code-sm {\r
        /* font-size: .95rem */\r
    }\r
\r
    .desktop\\:font-code-md {\r
        /* font-size: 1.01rem */\r
    }\r
\r
    .desktop\\:font-code-lg {\r
        /* font-size: 1.31rem */\r
    }\r
\r
    .desktop\\:font-code-xl {\r
        /* font-size: 1.91rem */\r
    }\r
\r
    .desktop\\:font-code-2xl {\r
        /* font-size: 2.38rem */\r
    }\r
\r
    .desktop\\:font-code-3xl {\r
        /* font-size: 2.86rem */\r
    }\r
\r
    .desktop\\:font-alt-3xs {\r
        /* font-size: .79rem */\r
    }\r
\r
    .desktop\\:font-alt-2xs {\r
        /* font-size: .85rem */\r
    }\r
\r
    .desktop\\:font-alt-xs {\r
        /* font-size: .91rem */\r
    }\r
\r
    .desktop\\:font-alt-sm {\r
        /* font-size: .98rem */\r
    }\r
\r
    .desktop\\:font-alt-md {\r
        /* font-size: 1.04rem */\r
    }\r
\r
    .desktop\\:font-alt-lg {\r
        /* font-size: 1.34rem */\r
    }\r
\r
    .desktop\\:font-alt-xl {\r
        /* font-size: 1.95rem */\r
    }\r
\r
    .desktop\\:font-alt-2xl {\r
        /* font-size: 2.44rem */\r
    }\r
\r
    .desktop\\:font-alt-3xl {\r
        /* font-size: 2.93rem */\r
    }\r
\r
    .desktop\\:font-ui-3xs {\r
        /* font-size: .87rem */\r
    }\r
\r
    .desktop\\:font-ui-2xs {\r
        /* font-size: .93rem */\r
    }\r
\r
    .desktop\\:font-ui-xs {\r
        /* font-size: 1rem */\r
    }\r
\r
    .desktop\\:font-ui-sm {\r
        /* font-size: 1.06rem */\r
    }\r
\r
    .desktop\\:font-ui-md {\r
        /* font-size: 1.13rem */\r
    }\r
\r
    .desktop\\:font-ui-lg {\r
        /* font-size: 1.46rem */\r
    }\r
\r
    .desktop\\:font-ui-xl {\r
        /* font-size: 2.13rem */\r
    }\r
\r
    .desktop\\:font-ui-2xl {\r
        /* font-size: 2.66rem */\r
    }\r
\r
    .desktop\\:font-ui-3xl {\r
        /* font-size: 3.19rem */\r
    }\r
\r
    .desktop\\:text-light {\r
        font-weight: 300\r
    }\r
\r
    .desktop\\:text-normal {\r
        font-weight: 400\r
    }\r
\r
    .desktop\\:text-bold {\r
        font-weight: 700\r
    }\r
\r
    .desktop\\:flex-justify-center {\r
        justify-content: center\r
    }\r
\r
    .desktop\\:flex-justify-start {\r
        justify-content: flex-start\r
    }\r
\r
    .desktop\\:flex-justify-end {\r
        justify-content: flex-end\r
    }\r
\r
    .desktop\\:flex-justify {\r
        justify-content: space-between\r
    }\r
\r
    .desktop\\:line-height-sans-1 {\r
        line-height: .9\r
    }\r
\r
    .desktop\\:line-height-sans-2 {\r
        line-height: 1.1\r
    }\r
\r
    .desktop\\:line-height-sans-3 {\r
        line-height: 1.3\r
    }\r
\r
    .desktop\\:line-height-sans-4 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-sans-5 {\r
        line-height: 1.5\r
    }\r
\r
    .desktop\\:line-height-sans-6 {\r
        line-height: 1.6\r
    }\r
\r
    .desktop\\:line-height-serif-1 {\r
        line-height: 1\r
    }\r
\r
    .desktop\\:line-height-serif-2 {\r
        line-height: 1.2\r
    }\r
\r
    .desktop\\:line-height-serif-3 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-serif-4 {\r
        line-height: 1.5\r
    }\r
\r
    .desktop\\:line-height-serif-5 {\r
        line-height: 1.7\r
    }\r
\r
    .desktop\\:line-height-serif-6 {\r
        line-height: 1.8\r
    }\r
\r
    .desktop\\:line-height-mono-1 {\r
        line-height: 1\r
    }\r
\r
    .desktop\\:line-height-mono-2 {\r
        line-height: 1.3\r
    }\r
\r
    .desktop\\:line-height-mono-3 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-mono-4 {\r
        line-height: 1.6\r
    }\r
\r
    .desktop\\:line-height-mono-5 {\r
        line-height: 1.7\r
    }\r
\r
    .desktop\\:line-height-mono-6 {\r
        line-height: 1.8\r
    }\r
\r
    .desktop\\:line-height-heading-1 {\r
        line-height: 1\r
    }\r
\r
    .desktop\\:line-height-heading-2 {\r
        line-height: 1.2\r
    }\r
\r
    .desktop\\:line-height-heading-3 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-heading-4 {\r
        line-height: 1.5\r
    }\r
\r
    .desktop\\:line-height-heading-5 {\r
        line-height: 1.7\r
    }\r
\r
    .desktop\\:line-height-heading-6 {\r
        line-height: 1.8\r
    }\r
\r
    .desktop\\:line-height-ui-1 {\r
        line-height: .9\r
    }\r
\r
    .desktop\\:line-height-ui-2 {\r
        line-height: 1.1\r
    }\r
\r
    .desktop\\:line-height-ui-3 {\r
        line-height: 1.3\r
    }\r
\r
    .desktop\\:line-height-ui-4 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-ui-5 {\r
        line-height: 1.5\r
    }\r
\r
    .desktop\\:line-height-ui-6 {\r
        line-height: 1.6\r
    }\r
\r
    .desktop\\:line-height-body-1 {\r
        line-height: .9\r
    }\r
\r
    .desktop\\:line-height-body-2 {\r
        line-height: 1.1\r
    }\r
\r
    .desktop\\:line-height-body-3 {\r
        line-height: 1.3\r
    }\r
\r
    .desktop\\:line-height-body-4 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-body-5 {\r
        line-height: 1.5\r
    }\r
\r
    .desktop\\:line-height-body-6 {\r
        line-height: 1.6\r
    }\r
\r
    .desktop\\:line-height-code-1 {\r
        line-height: 1\r
    }\r
\r
    .desktop\\:line-height-code-2 {\r
        line-height: 1.3\r
    }\r
\r
    .desktop\\:line-height-code-3 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-code-4 {\r
        line-height: 1.6\r
    }\r
\r
    .desktop\\:line-height-code-5 {\r
        line-height: 1.7\r
    }\r
\r
    .desktop\\:line-height-code-6 {\r
        line-height: 1.8\r
    }\r
\r
    .desktop\\:line-height-alt-1 {\r
        line-height: 1\r
    }\r
\r
    .desktop\\:line-height-alt-2 {\r
        line-height: 1.2\r
    }\r
\r
    .desktop\\:line-height-alt-3 {\r
        line-height: 1.4\r
    }\r
\r
    .desktop\\:line-height-alt-4 {\r
        line-height: 1.5\r
    }\r
\r
    .desktop\\:line-height-alt-5 {\r
        line-height: 1.7\r
    }\r
\r
    .desktop\\:line-height-alt-6 {\r
        line-height: 1.8\r
    }\r
\r
    .desktop\\:margin-neg-1px {\r
        margin: -1px\r
    }\r
\r
    .desktop\\:margin-neg-2px {\r
        margin: -2px\r
    }\r
\r
    .desktop\\:margin-neg-05 {\r
        margin: -.25rem\r
    }\r
\r
    .desktop\\:margin-neg-1 {\r
        margin: -.5rem\r
    }\r
\r
    .desktop\\:margin-neg-105 {\r
        margin: -.75rem\r
    }\r
\r
    .desktop\\:margin-neg-2 {\r
        margin: -1rem\r
    }\r
\r
    .desktop\\:margin-neg-205 {\r
        margin: -1.25rem\r
    }\r
\r
    .desktop\\:margin-neg-3 {\r
        margin: -1.5rem\r
    }\r
\r
    .desktop\\:margin-1px {\r
        margin: 1px\r
    }\r
\r
    .desktop\\:margin-2px {\r
        margin: 2px\r
    }\r
\r
    .desktop\\:margin-05 {\r
        margin: .25rem\r
    }\r
\r
    .desktop\\:margin-1 {\r
        margin: .5rem\r
    }\r
\r
    .desktop\\:margin-105 {\r
        margin: .75rem\r
    }\r
\r
    .desktop\\:margin-2 {\r
        margin: 1rem\r
    }\r
\r
    .desktop\\:margin-205 {\r
        margin: 1.25rem\r
    }\r
\r
    .desktop\\:margin-3 {\r
        margin: 1.5rem\r
    }\r
\r
    .desktop\\:margin-neg-4 {\r
        margin: -2rem\r
    }\r
\r
    .desktop\\:margin-neg-5 {\r
        margin: -2.5rem\r
    }\r
\r
    .desktop\\:margin-neg-6 {\r
        margin: -3rem\r
    }\r
\r
    .desktop\\:margin-neg-7 {\r
        margin: -3.5rem\r
    }\r
\r
    .desktop\\:margin-neg-8 {\r
        margin: -4rem\r
    }\r
\r
    .desktop\\:margin-neg-9 {\r
        margin: -4.5rem\r
    }\r
\r
    .desktop\\:margin-neg-10 {\r
        margin: -5rem\r
    }\r
\r
    .desktop\\:margin-neg-15 {\r
        margin: -7.5rem\r
    }\r
\r
    .desktop\\:margin-4 {\r
        margin: 2rem\r
    }\r
\r
    .desktop\\:margin-5 {\r
        margin: 2.5rem\r
    }\r
\r
    .desktop\\:margin-6 {\r
        margin: 3rem\r
    }\r
\r
    .desktop\\:margin-7 {\r
        margin: 3.5rem\r
    }\r
\r
    .desktop\\:margin-8 {\r
        margin: 4rem\r
    }\r
\r
    .desktop\\:margin-9 {\r
        margin: 4.5rem\r
    }\r
\r
    .desktop\\:margin-10 {\r
        margin: 5rem\r
    }\r
\r
    .desktop\\:margin-15 {\r
        margin: 7.5rem\r
    }\r
\r
    .desktop\\:margin-05em {\r
        margin: .5em\r
    }\r
\r
    .desktop\\:margin-1em {\r
        margin: 1em\r
    }\r
\r
    .desktop\\:margin-105em {\r
        margin: 1.5em\r
    }\r
\r
    .desktop\\:margin-2em {\r
        margin: 2em\r
    }\r
\r
    .desktop\\:margin-0 {\r
        margin: 0\r
    }\r
\r
    .desktop\\:margin-y-1px {\r
        margin-top: 1px;\r
        margin-bottom: 1px\r
    }\r
\r
    .desktop\\:margin-top-1px {\r
        margin-top: 1px\r
    }\r
\r
    .desktop\\:margin-bottom-1px {\r
        margin-bottom: 1px\r
    }\r
\r
    .desktop\\:margin-y-2px {\r
        margin-top: 2px;\r
        margin-bottom: 2px\r
    }\r
\r
    .desktop\\:margin-top-2px {\r
        margin-top: 2px\r
    }\r
\r
    .desktop\\:margin-bottom-2px {\r
        margin-bottom: 2px\r
    }\r
\r
    .desktop\\:margin-y-05 {\r
        margin-top: .25rem;\r
        margin-bottom: .25rem\r
    }\r
\r
    .desktop\\:margin-top-05 {\r
        margin-top: .25rem\r
    }\r
\r
    .desktop\\:margin-bottom-05 {\r
        margin-bottom: .25rem\r
    }\r
\r
    .desktop\\:margin-y-1 {\r
        margin-top: .5rem;\r
        margin-bottom: .5rem\r
    }\r
\r
    .desktop\\:margin-top-1 {\r
        margin-top: .5rem\r
    }\r
\r
    .desktop\\:margin-bottom-1 {\r
        margin-bottom: .5rem\r
    }\r
\r
    .desktop\\:margin-y-105 {\r
        margin-top: .75rem;\r
        margin-bottom: .75rem\r
    }\r
\r
    .desktop\\:margin-top-105 {\r
        margin-top: .75rem\r
    }\r
\r
    .desktop\\:margin-bottom-105 {\r
        margin-bottom: .75rem\r
    }\r
\r
    .desktop\\:margin-y-2 {\r
        margin-top: 1rem;\r
        margin-bottom: 1rem\r
    }\r
\r
    .desktop\\:margin-top-2 {\r
        margin-top: 1rem\r
    }\r
\r
    .desktop\\:margin-bottom-2 {\r
        margin-bottom: 1rem\r
    }\r
\r
    .desktop\\:margin-y-205 {\r
        margin-top: 1.25rem;\r
        margin-bottom: 1.25rem\r
    }\r
\r
    .desktop\\:margin-top-205 {\r
        margin-top: 1.25rem\r
    }\r
\r
    .desktop\\:margin-bottom-205 {\r
        margin-bottom: 1.25rem\r
    }\r
\r
    .desktop\\:margin-y-3 {\r
        margin-top: 1.5rem;\r
        margin-bottom: 1.5rem\r
    }\r
\r
    .desktop\\:margin-top-3 {\r
        margin-top: 1.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-3 {\r
        margin-bottom: 1.5rem\r
    }\r
\r
    .desktop\\:margin-y-neg-1px {\r
        margin-top: -1px;\r
        margin-bottom: -1px\r
    }\r
\r
    .desktop\\:margin-top-neg-1px {\r
        margin-top: -1px\r
    }\r
\r
    .desktop\\:margin-bottom-neg-1px {\r
        margin-bottom: -1px\r
    }\r
\r
    .desktop\\:margin-y-neg-2px {\r
        margin-top: -2px;\r
        margin-bottom: -2px\r
    }\r
\r
    .desktop\\:margin-top-neg-2px {\r
        margin-top: -2px\r
    }\r
\r
    .desktop\\:margin-bottom-neg-2px {\r
        margin-bottom: -2px\r
    }\r
\r
    .desktop\\:margin-y-neg-05 {\r
        margin-top: -.25rem;\r
        margin-bottom: -.25rem\r
    }\r
\r
    .desktop\\:margin-top-neg-05 {\r
        margin-top: -.25rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-05 {\r
        margin-bottom: -.25rem\r
    }\r
\r
    .desktop\\:margin-y-neg-1 {\r
        margin-top: -.5rem;\r
        margin-bottom: -.5rem\r
    }\r
\r
    .desktop\\:margin-top-neg-1 {\r
        margin-top: -.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-1 {\r
        margin-bottom: -.5rem\r
    }\r
\r
    .desktop\\:margin-y-neg-105 {\r
        margin-top: -.75rem;\r
        margin-bottom: -.75rem\r
    }\r
\r
    .desktop\\:margin-top-neg-105 {\r
        margin-top: -.75rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-105 {\r
        margin-bottom: -.75rem\r
    }\r
\r
    .desktop\\:margin-y-neg-2 {\r
        margin-top: -1rem;\r
        margin-bottom: -1rem\r
    }\r
\r
    .desktop\\:margin-top-neg-2 {\r
        margin-top: -1rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-2 {\r
        margin-bottom: -1rem\r
    }\r
\r
    .desktop\\:margin-y-neg-205 {\r
        margin-top: -1.25rem;\r
        margin-bottom: -1.25rem\r
    }\r
\r
    .desktop\\:margin-top-neg-205 {\r
        margin-top: -1.25rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-205 {\r
        margin-bottom: -1.25rem\r
    }\r
\r
    .desktop\\:margin-y-neg-3 {\r
        margin-top: -1.5rem;\r
        margin-bottom: -1.5rem\r
    }\r
\r
    .desktop\\:margin-top-neg-3 {\r
        margin-top: -1.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-3 {\r
        margin-bottom: -1.5rem\r
    }\r
\r
    .desktop\\:margin-y-neg-4 {\r
        margin-top: -2rem;\r
        margin-bottom: -2rem\r
    }\r
\r
    .desktop\\:margin-top-neg-4 {\r
        margin-top: -2rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-4 {\r
        margin-bottom: -2rem\r
    }\r
\r
    .desktop\\:margin-y-neg-5 {\r
        margin-top: -2.5rem;\r
        margin-bottom: -2.5rem\r
    }\r
\r
    .desktop\\:margin-top-neg-5 {\r
        margin-top: -2.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-5 {\r
        margin-bottom: -2.5rem\r
    }\r
\r
    .desktop\\:margin-y-neg-6 {\r
        margin-top: -3rem;\r
        margin-bottom: -3rem\r
    }\r
\r
    .desktop\\:margin-top-neg-6 {\r
        margin-top: -3rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-6 {\r
        margin-bottom: -3rem\r
    }\r
\r
    .desktop\\:margin-y-neg-7 {\r
        margin-top: -3.5rem;\r
        margin-bottom: -3.5rem\r
    }\r
\r
    .desktop\\:margin-top-neg-7 {\r
        margin-top: -3.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-7 {\r
        margin-bottom: -3.5rem\r
    }\r
\r
    .desktop\\:margin-y-neg-8 {\r
        margin-top: -4rem;\r
        margin-bottom: -4rem\r
    }\r
\r
    .desktop\\:margin-top-neg-8 {\r
        margin-top: -4rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-8 {\r
        margin-bottom: -4rem\r
    }\r
\r
    .desktop\\:margin-y-neg-9 {\r
        margin-top: -4.5rem;\r
        margin-bottom: -4.5rem\r
    }\r
\r
    .desktop\\:margin-top-neg-9 {\r
        margin-top: -4.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-9 {\r
        margin-bottom: -4.5rem\r
    }\r
\r
    .desktop\\:margin-y-neg-10 {\r
        margin-top: -5rem;\r
        margin-bottom: -5rem\r
    }\r
\r
    .desktop\\:margin-top-neg-10 {\r
        margin-top: -5rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-10 {\r
        margin-bottom: -5rem\r
    }\r
\r
    .desktop\\:margin-y-neg-15 {\r
        margin-top: -7.5rem;\r
        margin-bottom: -7.5rem\r
    }\r
\r
    .desktop\\:margin-top-neg-15 {\r
        margin-top: -7.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-neg-15 {\r
        margin-bottom: -7.5rem\r
    }\r
\r
    .desktop\\:margin-y-4 {\r
        margin-top: 2rem;\r
        margin-bottom: 2rem\r
    }\r
\r
    .desktop\\:margin-top-4 {\r
        margin-top: 2rem\r
    }\r
\r
    .desktop\\:margin-bottom-4 {\r
        margin-bottom: 2rem\r
    }\r
\r
    .desktop\\:margin-y-5 {\r
        margin-top: 2.5rem;\r
        margin-bottom: 2.5rem\r
    }\r
\r
    .desktop\\:margin-top-5 {\r
        margin-top: 2.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-5 {\r
        margin-bottom: 2.5rem\r
    }\r
\r
    .desktop\\:margin-y-6 {\r
        margin-top: 3rem;\r
        margin-bottom: 3rem\r
    }\r
\r
    .desktop\\:margin-top-6 {\r
        margin-top: 3rem\r
    }\r
\r
    .desktop\\:margin-bottom-6 {\r
        margin-bottom: 3rem\r
    }\r
\r
    .desktop\\:margin-y-7 {\r
        margin-top: 3.5rem;\r
        margin-bottom: 3.5rem\r
    }\r
\r
    .desktop\\:margin-top-7 {\r
        margin-top: 3.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-7 {\r
        margin-bottom: 3.5rem\r
    }\r
\r
    .desktop\\:margin-y-8 {\r
        margin-top: 4rem;\r
        margin-bottom: 4rem\r
    }\r
\r
    .desktop\\:margin-top-8 {\r
        margin-top: 4rem\r
    }\r
\r
    .desktop\\:margin-bottom-8 {\r
        margin-bottom: 4rem\r
    }\r
\r
    .desktop\\:margin-y-9 {\r
        margin-top: 4.5rem;\r
        margin-bottom: 4.5rem\r
    }\r
\r
    .desktop\\:margin-top-9 {\r
        margin-top: 4.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-9 {\r
        margin-bottom: 4.5rem\r
    }\r
\r
    .desktop\\:margin-y-10 {\r
        margin-top: 5rem;\r
        margin-bottom: 5rem\r
    }\r
\r
    .desktop\\:margin-top-10 {\r
        margin-top: 5rem\r
    }\r
\r
    .desktop\\:margin-bottom-10 {\r
        margin-bottom: 5rem\r
    }\r
\r
    .desktop\\:margin-y-15 {\r
        margin-top: 7.5rem;\r
        margin-bottom: 7.5rem\r
    }\r
\r
    .desktop\\:margin-top-15 {\r
        margin-top: 7.5rem\r
    }\r
\r
    .desktop\\:margin-bottom-15 {\r
        margin-bottom: 7.5rem\r
    }\r
\r
    .desktop\\:margin-y-05em {\r
        margin-top: .5em;\r
        margin-bottom: .5em\r
    }\r
\r
    .desktop\\:margin-top-05em {\r
        margin-top: .5em\r
    }\r
\r
    .desktop\\:margin-bottom-05em {\r
        margin-bottom: .5em\r
    }\r
\r
    .desktop\\:margin-y-1em {\r
        margin-top: 1em;\r
        margin-bottom: 1em\r
    }\r
\r
    .desktop\\:margin-top-1em {\r
        margin-top: 1em\r
    }\r
\r
    .desktop\\:margin-bottom-1em {\r
        margin-bottom: 1em\r
    }\r
\r
    .desktop\\:margin-y-105em {\r
        margin-top: 1.5em;\r
        margin-bottom: 1.5em\r
    }\r
\r
    .desktop\\:margin-top-105em {\r
        margin-top: 1.5em\r
    }\r
\r
    .desktop\\:margin-bottom-105em {\r
        margin-bottom: 1.5em\r
    }\r
\r
    .desktop\\:margin-y-2em {\r
        margin-top: 2em;\r
        margin-bottom: 2em\r
    }\r
\r
    .desktop\\:margin-top-2em {\r
        margin-top: 2em\r
    }\r
\r
    .desktop\\:margin-bottom-2em {\r
        margin-bottom: 2em\r
    }\r
\r
    .desktop\\:margin-y-0 {\r
        margin-top: 0;\r
        margin-bottom: 0\r
    }\r
\r
    .desktop\\:margin-top-0 {\r
        margin-top: 0\r
    }\r
\r
    .desktop\\:margin-bottom-0 {\r
        margin-bottom: 0\r
    }\r
\r
    .desktop\\:margin-y-auto {\r
        margin-top: auto;\r
        margin-bottom: auto\r
    }\r
\r
    .desktop\\:margin-top-auto {\r
        margin-top: auto\r
    }\r
\r
    .desktop\\:margin-bottom-auto {\r
        margin-bottom: auto\r
    }\r
\r
    .desktop\\:margin-x-1px {\r
        margin-left: 1px;\r
        margin-right: 1px\r
    }\r
\r
    .desktop\\:margin-right-1px {\r
        margin-right: 1px\r
    }\r
\r
    .desktop\\:margin-left-1px {\r
        margin-left: 1px\r
    }\r
\r
    .desktop\\:margin-x-2px {\r
        margin-left: 2px;\r
        margin-right: 2px\r
    }\r
\r
    .desktop\\:margin-right-2px {\r
        margin-right: 2px\r
    }\r
\r
    .desktop\\:margin-left-2px {\r
        margin-left: 2px\r
    }\r
\r
    .desktop\\:margin-x-05 {\r
        margin-left: .25rem;\r
        margin-right: .25rem\r
    }\r
\r
    .desktop\\:margin-right-05 {\r
        margin-right: .25rem\r
    }\r
\r
    .desktop\\:margin-left-05 {\r
        margin-left: .25rem\r
    }\r
\r
    .desktop\\:margin-x-1 {\r
        margin-left: .5rem;\r
        margin-right: .5rem\r
    }\r
\r
    .desktop\\:margin-right-1 {\r
        margin-right: .5rem\r
    }\r
\r
    .desktop\\:margin-left-1 {\r
        margin-left: .5rem\r
    }\r
\r
    .desktop\\:margin-x-105 {\r
        margin-left: .75rem;\r
        margin-right: .75rem\r
    }\r
\r
    .desktop\\:margin-right-105 {\r
        margin-right: .75rem\r
    }\r
\r
    .desktop\\:margin-left-105 {\r
        margin-left: .75rem\r
    }\r
\r
    .desktop\\:margin-x-2 {\r
        margin-left: 1rem;\r
        margin-right: 1rem\r
    }\r
\r
    .desktop\\:margin-right-2 {\r
        margin-right: 1rem\r
    }\r
\r
    .desktop\\:margin-left-2 {\r
        margin-left: 1rem\r
    }\r
\r
    .desktop\\:margin-x-205 {\r
        margin-left: 1.25rem;\r
        margin-right: 1.25rem\r
    }\r
\r
    .desktop\\:margin-right-205 {\r
        margin-right: 1.25rem\r
    }\r
\r
    .desktop\\:margin-left-205 {\r
        margin-left: 1.25rem\r
    }\r
\r
    .desktop\\:margin-x-3 {\r
        margin-left: 1.5rem;\r
        margin-right: 1.5rem\r
    }\r
\r
    .desktop\\:margin-right-3 {\r
        margin-right: 1.5rem\r
    }\r
\r
    .desktop\\:margin-left-3 {\r
        margin-left: 1.5rem\r
    }\r
\r
    .desktop\\:margin-x-neg-1px {\r
        margin-left: -1px;\r
        margin-right: -1px\r
    }\r
\r
    .desktop\\:margin-right-neg-1px {\r
        margin-right: -1px\r
    }\r
\r
    .desktop\\:margin-left-neg-1px {\r
        margin-left: -1px\r
    }\r
\r
    .desktop\\:margin-x-neg-2px {\r
        margin-left: -2px;\r
        margin-right: -2px\r
    }\r
\r
    .desktop\\:margin-right-neg-2px {\r
        margin-right: -2px\r
    }\r
\r
    .desktop\\:margin-left-neg-2px {\r
        margin-left: -2px\r
    }\r
\r
    .desktop\\:margin-x-neg-05 {\r
        margin-left: -.25rem;\r
        margin-right: -.25rem\r
    }\r
\r
    .desktop\\:margin-right-neg-05 {\r
        margin-right: -.25rem\r
    }\r
\r
    .desktop\\:margin-left-neg-05 {\r
        margin-left: -.25rem\r
    }\r
\r
    .desktop\\:margin-x-neg-1 {\r
        margin-left: -.5rem;\r
        margin-right: -.5rem\r
    }\r
\r
    .desktop\\:margin-right-neg-1 {\r
        margin-right: -.5rem\r
    }\r
\r
    .desktop\\:margin-left-neg-1 {\r
        margin-left: -.5rem\r
    }\r
\r
    .desktop\\:margin-x-neg-105 {\r
        margin-left: -.75rem;\r
        margin-right: -.75rem\r
    }\r
\r
    .desktop\\:margin-right-neg-105 {\r
        margin-right: -.75rem\r
    }\r
\r
    .desktop\\:margin-left-neg-105 {\r
        margin-left: -.75rem\r
    }\r
\r
    .desktop\\:margin-x-neg-2 {\r
        margin-left: -1rem;\r
        margin-right: -1rem\r
    }\r
\r
    .desktop\\:margin-right-neg-2 {\r
        margin-right: -1rem\r
    }\r
\r
    .desktop\\:margin-left-neg-2 {\r
        margin-left: -1rem\r
    }\r
\r
    .desktop\\:margin-x-neg-205 {\r
        margin-left: -1.25rem;\r
        margin-right: -1.25rem\r
    }\r
\r
    .desktop\\:margin-right-neg-205 {\r
        margin-right: -1.25rem\r
    }\r
\r
    .desktop\\:margin-left-neg-205 {\r
        margin-left: -1.25rem\r
    }\r
\r
    .desktop\\:margin-x-neg-3 {\r
        margin-left: -1.5rem;\r
        margin-right: -1.5rem\r
    }\r
\r
    .desktop\\:margin-right-neg-3 {\r
        margin-right: -1.5rem\r
    }\r
\r
    .desktop\\:margin-left-neg-3 {\r
        margin-left: -1.5rem\r
    }\r
\r
    .desktop\\:margin-x-neg-4 {\r
        margin-left: -2rem;\r
        margin-right: -2rem\r
    }\r
\r
    .desktop\\:margin-right-neg-4 {\r
        margin-right: -2rem\r
    }\r
\r
    .desktop\\:margin-left-neg-4 {\r
        margin-left: -2rem\r
    }\r
\r
    .desktop\\:margin-x-neg-5 {\r
        margin-left: -2.5rem;\r
        margin-right: -2.5rem\r
    }\r
\r
    .desktop\\:margin-right-neg-5 {\r
        margin-right: -2.5rem\r
    }\r
\r
    .desktop\\:margin-left-neg-5 {\r
        margin-left: -2.5rem\r
    }\r
\r
    .desktop\\:margin-x-neg-6 {\r
        margin-left: -3rem;\r
        margin-right: -3rem\r
    }\r
\r
    .desktop\\:margin-right-neg-6 {\r
        margin-right: -3rem\r
    }\r
\r
    .desktop\\:margin-left-neg-6 {\r
        margin-left: -3rem\r
    }\r
\r
    .desktop\\:margin-x-neg-7 {\r
        margin-left: -3.5rem;\r
        margin-right: -3.5rem\r
    }\r
\r
    .desktop\\:margin-right-neg-7 {\r
        margin-right: -3.5rem\r
    }\r
\r
    .desktop\\:margin-left-neg-7 {\r
        margin-left: -3.5rem\r
    }\r
\r
    .desktop\\:margin-x-neg-8 {\r
        margin-left: -4rem;\r
        margin-right: -4rem\r
    }\r
\r
    .desktop\\:margin-right-neg-8 {\r
        margin-right: -4rem\r
    }\r
\r
    .desktop\\:margin-left-neg-8 {\r
        margin-left: -4rem\r
    }\r
\r
    .desktop\\:margin-x-neg-9 {\r
        margin-left: -4.5rem;\r
        margin-right: -4.5rem\r
    }\r
\r
    .desktop\\:margin-right-neg-9 {\r
        margin-right: -4.5rem\r
    }\r
\r
    .desktop\\:margin-left-neg-9 {\r
        margin-left: -4.5rem\r
    }\r
\r
    .desktop\\:margin-x-neg-10 {\r
        margin-left: -5rem;\r
        margin-right: -5rem\r
    }\r
\r
    .desktop\\:margin-right-neg-10 {\r
        margin-right: -5rem\r
    }\r
\r
    .desktop\\:margin-left-neg-10 {\r
        margin-left: -5rem\r
    }\r
\r
    .desktop\\:margin-x-neg-15 {\r
        margin-left: -7.5rem;\r
        margin-right: -7.5rem\r
    }\r
\r
    .desktop\\:margin-right-neg-15 {\r
        margin-right: -7.5rem\r
    }\r
\r
    .desktop\\:margin-left-neg-15 {\r
        margin-left: -7.5rem\r
    }\r
\r
    .desktop\\:margin-x-4 {\r
        margin-left: 2rem;\r
        margin-right: 2rem\r
    }\r
\r
    .desktop\\:margin-right-4 {\r
        margin-right: 2rem\r
    }\r
\r
    .desktop\\:margin-left-4 {\r
        margin-left: 2rem\r
    }\r
\r
    .desktop\\:margin-x-5 {\r
        margin-left: 2.5rem;\r
        margin-right: 2.5rem\r
    }\r
\r
    .desktop\\:margin-right-5 {\r
        margin-right: 2.5rem\r
    }\r
\r
    .desktop\\:margin-left-5 {\r
        margin-left: 2.5rem\r
    }\r
\r
    .desktop\\:margin-x-6 {\r
        margin-left: 3rem;\r
        margin-right: 3rem\r
    }\r
\r
    .desktop\\:margin-right-6 {\r
        margin-right: 3rem\r
    }\r
\r
    .desktop\\:margin-left-6 {\r
        margin-left: 3rem\r
    }\r
\r
    .desktop\\:margin-x-7 {\r
        margin-left: 3.5rem;\r
        margin-right: 3.5rem\r
    }\r
\r
    .desktop\\:margin-right-7 {\r
        margin-right: 3.5rem\r
    }\r
\r
    .desktop\\:margin-left-7 {\r
        margin-left: 3.5rem\r
    }\r
\r
    .desktop\\:margin-x-8 {\r
        margin-left: 4rem;\r
        margin-right: 4rem\r
    }\r
\r
    .desktop\\:margin-right-8 {\r
        margin-right: 4rem\r
    }\r
\r
    .desktop\\:margin-left-8 {\r
        margin-left: 4rem\r
    }\r
\r
    .desktop\\:margin-x-9 {\r
        margin-left: 4.5rem;\r
        margin-right: 4.5rem\r
    }\r
\r
    .desktop\\:margin-right-9 {\r
        margin-right: 4.5rem\r
    }\r
\r
    .desktop\\:margin-left-9 {\r
        margin-left: 4.5rem\r
    }\r
\r
    .desktop\\:margin-x-10 {\r
        margin-left: 5rem;\r
        margin-right: 5rem\r
    }\r
\r
    .desktop\\:margin-right-10 {\r
        margin-right: 5rem\r
    }\r
\r
    .desktop\\:margin-left-10 {\r
        margin-left: 5rem\r
    }\r
\r
    .desktop\\:margin-x-15 {\r
        margin-left: 7.5rem;\r
        margin-right: 7.5rem\r
    }\r
\r
    .desktop\\:margin-right-15 {\r
        margin-right: 7.5rem\r
    }\r
\r
    .desktop\\:margin-left-15 {\r
        margin-left: 7.5rem\r
    }\r
\r
    .desktop\\:margin-x-card {\r
        margin-left: 10rem;\r
        margin-right: 10rem\r
    }\r
\r
    .desktop\\:margin-right-card {\r
        margin-right: 10rem\r
    }\r
\r
    .desktop\\:margin-left-card {\r
        margin-left: 10rem\r
    }\r
\r
    .desktop\\:margin-x-card-lg {\r
        margin-left: 15rem;\r
        margin-right: 15rem\r
    }\r
\r
    .desktop\\:margin-right-card-lg {\r
        margin-right: 15rem\r
    }\r
\r
    .desktop\\:margin-left-card-lg {\r
        margin-left: 15rem\r
    }\r
\r
    .desktop\\:margin-x-mobile {\r
        margin-left: 20rem;\r
        margin-right: 20rem\r
    }\r
\r
    .desktop\\:margin-right-mobile {\r
        margin-right: 20rem\r
    }\r
\r
    .desktop\\:margin-left-mobile {\r
        margin-left: 20rem\r
    }\r
\r
    .desktop\\:margin-x-05em {\r
        margin-left: .5em;\r
        margin-right: .5em\r
    }\r
\r
    .desktop\\:margin-right-05em {\r
        margin-right: .5em\r
    }\r
\r
    .desktop\\:margin-left-05em {\r
        margin-left: .5em\r
    }\r
\r
    .desktop\\:margin-x-1em {\r
        margin-left: 1em;\r
        margin-right: 1em\r
    }\r
\r
    .desktop\\:margin-right-1em {\r
        margin-right: 1em\r
    }\r
\r
    .desktop\\:margin-left-1em {\r
        margin-left: 1em\r
    }\r
\r
    .desktop\\:margin-x-105em {\r
        margin-left: 1.5em;\r
        margin-right: 1.5em\r
    }\r
\r
    .desktop\\:margin-right-105em {\r
        margin-right: 1.5em\r
    }\r
\r
    .desktop\\:margin-left-105em {\r
        margin-left: 1.5em\r
    }\r
\r
    .desktop\\:margin-x-2em {\r
        margin-left: 2em;\r
        margin-right: 2em\r
    }\r
\r
    .desktop\\:margin-right-2em {\r
        margin-right: 2em\r
    }\r
\r
    .desktop\\:margin-left-2em {\r
        margin-left: 2em\r
    }\r
\r
    .desktop\\:margin-x-0 {\r
        margin-left: 0;\r
        margin-right: 0\r
    }\r
\r
    .desktop\\:margin-right-0 {\r
        margin-right: 0\r
    }\r
\r
    .desktop\\:margin-left-0 {\r
        margin-left: 0\r
    }\r
\r
    .desktop\\:margin-x-auto {\r
        margin-left: auto;\r
        margin-right: auto\r
    }\r
\r
    .desktop\\:margin-right-auto {\r
        margin-right: auto\r
    }\r
\r
    .desktop\\:margin-left-auto {\r
        margin-left: auto\r
    }\r
\r
    .desktop\\:measure-1 {\r
        max-width: 44ex\r
    }\r
\r
    .desktop\\:measure-2 {\r
        max-width: 60ex\r
    }\r
\r
    .desktop\\:measure-3 {\r
        max-width: 64ex\r
    }\r
\r
    .desktop\\:measure-4 {\r
        max-width: 68ex\r
    }\r
\r
    .desktop\\:measure-5 {\r
        max-width: 72ex\r
    }\r
\r
    .desktop\\:measure-6 {\r
        max-width: 88ex\r
    }\r
\r
    .desktop\\:measure-none {\r
        max-width: none\r
    }\r
\r
    .desktop\\:order-first {\r
        order: -1\r
    }\r
\r
    .desktop\\:order-last {\r
        order: 999\r
    }\r
\r
    .desktop\\:order-initial {\r
        order: initial\r
    }\r
\r
    .desktop\\:order-0 {\r
        order: 0\r
    }\r
\r
    .desktop\\:order-1 {\r
        order: 1\r
    }\r
\r
    .desktop\\:order-2 {\r
        order: 2\r
    }\r
\r
    .desktop\\:order-3 {\r
        order: 3\r
    }\r
\r
    .desktop\\:order-4 {\r
        order: 4\r
    }\r
\r
    .desktop\\:order-5 {\r
        order: 5\r
    }\r
\r
    .desktop\\:order-6 {\r
        order: 6\r
    }\r
\r
    .desktop\\:order-7 {\r
        order: 7\r
    }\r
\r
    .desktop\\:order-8 {\r
        order: 8\r
    }\r
\r
    .desktop\\:order-9 {\r
        order: 9\r
    }\r
\r
    .desktop\\:order-10 {\r
        order: 10\r
    }\r
\r
    .desktop\\:order-11 {\r
        order: 11\r
    }\r
\r
    .desktop\\:padding-1px {\r
        padding: 1px\r
    }\r
\r
    .desktop\\:padding-y-1px {\r
        padding-top: 1px;\r
        padding-bottom: 1px\r
    }\r
\r
    .desktop\\:padding-x-1px {\r
        padding-left: 1px;\r
        padding-right: 1px\r
    }\r
\r
    .desktop\\:padding-top-1px {\r
        padding-top: 1px\r
    }\r
\r
    .desktop\\:padding-right-1px {\r
        padding-right: 1px\r
    }\r
\r
    .desktop\\:padding-bottom-1px {\r
        padding-bottom: 1px\r
    }\r
\r
    .desktop\\:padding-left-1px {\r
        padding-left: 1px\r
    }\r
\r
    .desktop\\:padding-2px {\r
        padding: 2px\r
    }\r
\r
    .desktop\\:padding-y-2px {\r
        padding-top: 2px;\r
        padding-bottom: 2px\r
    }\r
\r
    .desktop\\:padding-x-2px {\r
        padding-left: 2px;\r
        padding-right: 2px\r
    }\r
\r
    .desktop\\:padding-top-2px {\r
        padding-top: 2px\r
    }\r
\r
    .desktop\\:padding-right-2px {\r
        padding-right: 2px\r
    }\r
\r
    .desktop\\:padding-bottom-2px {\r
        padding-bottom: 2px\r
    }\r
\r
    .desktop\\:padding-left-2px {\r
        padding-left: 2px\r
    }\r
\r
    .desktop\\:padding-05 {\r
        padding: .25rem\r
    }\r
\r
    .desktop\\:padding-y-05 {\r
        padding-top: .25rem;\r
        padding-bottom: .25rem\r
    }\r
\r
    .desktop\\:padding-x-05 {\r
        padding-left: .25rem;\r
        padding-right: .25rem\r
    }\r
\r
    .desktop\\:padding-top-05 {\r
        padding-top: .25rem\r
    }\r
\r
    .desktop\\:padding-right-05 {\r
        padding-right: .25rem\r
    }\r
\r
    .desktop\\:padding-bottom-05 {\r
        padding-bottom: .25rem\r
    }\r
\r
    .desktop\\:padding-left-05 {\r
        padding-left: .25rem\r
    }\r
\r
    .desktop\\:padding-1 {\r
        padding: .5rem\r
    }\r
\r
    .desktop\\:padding-y-1 {\r
        padding-top: .5rem;\r
        padding-bottom: .5rem\r
    }\r
\r
    .desktop\\:padding-x-1 {\r
        padding-left: .5rem;\r
        padding-right: .5rem\r
    }\r
\r
    .desktop\\:padding-top-1 {\r
        padding-top: .5rem\r
    }\r
\r
    .desktop\\:padding-right-1 {\r
        padding-right: .5rem\r
    }\r
\r
    .desktop\\:padding-bottom-1 {\r
        padding-bottom: .5rem\r
    }\r
\r
    .desktop\\:padding-left-1 {\r
        padding-left: .5rem\r
    }\r
\r
    .desktop\\:padding-105 {\r
        padding: .75rem\r
    }\r
\r
    .desktop\\:padding-y-105 {\r
        padding-top: .75rem;\r
        padding-bottom: .75rem\r
    }\r
\r
    .desktop\\:padding-x-105 {\r
        padding-left: .75rem;\r
        padding-right: .75rem\r
    }\r
\r
    .desktop\\:padding-top-105 {\r
        padding-top: .75rem\r
    }\r
\r
    .desktop\\:padding-right-105 {\r
        padding-right: .75rem\r
    }\r
\r
    .desktop\\:padding-bottom-105 {\r
        padding-bottom: .75rem\r
    }\r
\r
    .desktop\\:padding-left-105 {\r
        padding-left: .75rem\r
    }\r
\r
    .desktop\\:padding-2 {\r
        padding: 1rem\r
    }\r
\r
    .desktop\\:padding-y-2 {\r
        padding-top: 1rem;\r
        padding-bottom: 1rem\r
    }\r
\r
    .desktop\\:padding-x-2 {\r
        padding-left: 1rem;\r
        padding-right: 1rem\r
    }\r
\r
    .desktop\\:padding-top-2 {\r
        padding-top: 1rem\r
    }\r
\r
    .desktop\\:padding-right-2 {\r
        padding-right: 1rem\r
    }\r
\r
    .desktop\\:padding-bottom-2 {\r
        padding-bottom: 1rem\r
    }\r
\r
    .desktop\\:padding-left-2 {\r
        padding-left: 1rem\r
    }\r
\r
    .desktop\\:padding-205 {\r
        padding: 1.25rem\r
    }\r
\r
    .desktop\\:padding-y-205 {\r
        padding-top: 1.25rem;\r
        padding-bottom: 1.25rem\r
    }\r
\r
    .desktop\\:padding-x-205 {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem\r
    }\r
\r
    .desktop\\:padding-top-205 {\r
        padding-top: 1.25rem\r
    }\r
\r
    .desktop\\:padding-right-205 {\r
        padding-right: 1.25rem\r
    }\r
\r
    .desktop\\:padding-bottom-205 {\r
        padding-bottom: 1.25rem\r
    }\r
\r
    .desktop\\:padding-left-205 {\r
        padding-left: 1.25rem\r
    }\r
\r
    .desktop\\:padding-3 {\r
        padding: 1.5rem\r
    }\r
\r
    .desktop\\:padding-y-3 {\r
        padding-top: 1.5rem;\r
        padding-bottom: 1.5rem\r
    }\r
\r
    .desktop\\:padding-x-3 {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem\r
    }\r
\r
    .desktop\\:padding-top-3 {\r
        padding-top: 1.5rem\r
    }\r
\r
    .desktop\\:padding-right-3 {\r
        padding-right: 1.5rem\r
    }\r
\r
    .desktop\\:padding-bottom-3 {\r
        padding-bottom: 1.5rem\r
    }\r
\r
    .desktop\\:padding-left-3 {\r
        padding-left: 1.5rem\r
    }\r
\r
    .desktop\\:padding-4 {\r
        padding: 2rem\r
    }\r
\r
    .desktop\\:padding-y-4 {\r
        padding-top: 2rem;\r
        padding-bottom: 2rem\r
    }\r
\r
    .desktop\\:padding-x-4 {\r
        padding-left: 2rem;\r
        padding-right: 2rem\r
    }\r
\r
    .desktop\\:padding-top-4 {\r
        padding-top: 2rem\r
    }\r
\r
    .desktop\\:padding-right-4 {\r
        padding-right: 2rem\r
    }\r
\r
    .desktop\\:padding-bottom-4 {\r
        padding-bottom: 2rem\r
    }\r
\r
    .desktop\\:padding-left-4 {\r
        padding-left: 2rem\r
    }\r
\r
    .desktop\\:padding-5 {\r
        padding: 2.5rem\r
    }\r
\r
    .desktop\\:padding-y-5 {\r
        padding-top: 2.5rem;\r
        padding-bottom: 2.5rem\r
    }\r
\r
    .desktop\\:padding-x-5 {\r
        padding-left: 2.5rem;\r
        padding-right: 2.5rem\r
    }\r
\r
    .desktop\\:padding-top-5 {\r
        padding-top: 2.5rem\r
    }\r
\r
    .desktop\\:padding-right-5 {\r
        padding-right: 2.5rem\r
    }\r
\r
    .desktop\\:padding-bottom-5 {\r
        padding-bottom: 2.5rem\r
    }\r
\r
    .desktop\\:padding-left-5 {\r
        padding-left: 2.5rem\r
    }\r
\r
    .desktop\\:padding-6 {\r
        padding: 3rem\r
    }\r
\r
    .desktop\\:padding-y-6 {\r
        padding-top: 3rem;\r
        padding-bottom: 3rem\r
    }\r
\r
    .desktop\\:padding-x-6 {\r
        padding-left: 3rem;\r
        padding-right: 3rem\r
    }\r
\r
    .desktop\\:padding-top-6 {\r
        padding-top: 3rem\r
    }\r
\r
    .desktop\\:padding-right-6 {\r
        padding-right: 3rem\r
    }\r
\r
    .desktop\\:padding-bottom-6 {\r
        padding-bottom: 3rem\r
    }\r
\r
    .desktop\\:padding-left-6 {\r
        padding-left: 3rem\r
    }\r
\r
    .desktop\\:padding-7 {\r
        padding: 3.5rem\r
    }\r
\r
    .desktop\\:padding-y-7 {\r
        padding-top: 3.5rem;\r
        padding-bottom: 3.5rem\r
    }\r
\r
    .desktop\\:padding-x-7 {\r
        padding-left: 3.5rem;\r
        padding-right: 3.5rem\r
    }\r
\r
    .desktop\\:padding-top-7 {\r
        padding-top: 3.5rem\r
    }\r
\r
    .desktop\\:padding-right-7 {\r
        padding-right: 3.5rem\r
    }\r
\r
    .desktop\\:padding-bottom-7 {\r
        padding-bottom: 3.5rem\r
    }\r
\r
    .desktop\\:padding-left-7 {\r
        padding-left: 3.5rem\r
    }\r
\r
    .desktop\\:padding-8 {\r
        padding: 4rem\r
    }\r
\r
    .desktop\\:padding-y-8 {\r
        padding-top: 4rem;\r
        padding-bottom: 4rem\r
    }\r
\r
    .desktop\\:padding-x-8 {\r
        padding-left: 4rem;\r
        padding-right: 4rem\r
    }\r
\r
    .desktop\\:padding-top-8 {\r
        padding-top: 4rem\r
    }\r
\r
    .desktop\\:padding-right-8 {\r
        padding-right: 4rem\r
    }\r
\r
    .desktop\\:padding-bottom-8 {\r
        padding-bottom: 4rem\r
    }\r
\r
    .desktop\\:padding-left-8 {\r
        padding-left: 4rem\r
    }\r
\r
    .desktop\\:padding-9 {\r
        padding: 4.5rem\r
    }\r
\r
    .desktop\\:padding-y-9 {\r
        padding-top: 4.5rem;\r
        padding-bottom: 4.5rem\r
    }\r
\r
    .desktop\\:padding-x-9 {\r
        padding-left: 4.5rem;\r
        padding-right: 4.5rem\r
    }\r
\r
    .desktop\\:padding-top-9 {\r
        padding-top: 4.5rem\r
    }\r
\r
    .desktop\\:padding-right-9 {\r
        padding-right: 4.5rem\r
    }\r
\r
    .desktop\\:padding-bottom-9 {\r
        padding-bottom: 4.5rem\r
    }\r
\r
    .desktop\\:padding-left-9 {\r
        padding-left: 4.5rem\r
    }\r
\r
    .desktop\\:padding-10 {\r
        padding: 5rem\r
    }\r
\r
    .desktop\\:padding-y-10 {\r
        padding-top: 5rem;\r
        padding-bottom: 5rem\r
    }\r
\r
    .desktop\\:padding-x-10 {\r
        padding-left: 5rem;\r
        padding-right: 5rem\r
    }\r
\r
    .desktop\\:padding-top-10 {\r
        padding-top: 5rem\r
    }\r
\r
    .desktop\\:padding-right-10 {\r
        padding-right: 5rem\r
    }\r
\r
    .desktop\\:padding-bottom-10 {\r
        padding-bottom: 5rem\r
    }\r
\r
    .desktop\\:padding-left-10 {\r
        padding-left: 5rem\r
    }\r
\r
    .desktop\\:padding-15 {\r
        padding: 7.5rem\r
    }\r
\r
    .desktop\\:padding-y-15 {\r
        padding-top: 7.5rem;\r
        padding-bottom: 7.5rem\r
    }\r
\r
    .desktop\\:padding-x-15 {\r
        padding-left: 7.5rem;\r
        padding-right: 7.5rem\r
    }\r
\r
    .desktop\\:padding-top-15 {\r
        padding-top: 7.5rem\r
    }\r
\r
    .desktop\\:padding-right-15 {\r
        padding-right: 7.5rem\r
    }\r
\r
    .desktop\\:padding-bottom-15 {\r
        padding-bottom: 7.5rem\r
    }\r
\r
    .desktop\\:padding-left-15 {\r
        padding-left: 7.5rem\r
    }\r
\r
    .desktop\\:padding-0 {\r
        padding: 0\r
    }\r
\r
    .desktop\\:padding-y-0 {\r
        padding-top: 0;\r
        padding-bottom: 0\r
    }\r
\r
    .desktop\\:padding-x-0 {\r
        padding-left: 0;\r
        padding-right: 0\r
    }\r
\r
    .desktop\\:padding-top-0 {\r
        padding-top: 0\r
    }\r
\r
    .desktop\\:padding-right-0 {\r
        padding-right: 0\r
    }\r
\r
    .desktop\\:padding-bottom-0 {\r
        padding-bottom: 0\r
    }\r
\r
    .desktop\\:padding-left-0 {\r
        padding-left: 0\r
    }\r
\r
    .desktop\\:width-1px {\r
        width: 1px\r
    }\r
\r
    .desktop\\:width-2px {\r
        width: 2px\r
    }\r
\r
    .desktop\\:width-05 {\r
        width: .25rem\r
    }\r
\r
    .desktop\\:width-1 {\r
        width: .5rem\r
    }\r
\r
    .desktop\\:width-105 {\r
        width: .75rem\r
    }\r
\r
    .desktop\\:width-2 {\r
        width: 1rem\r
    }\r
\r
    .desktop\\:width-205 {\r
        width: 1.25rem\r
    }\r
\r
    .desktop\\:width-3 {\r
        width: 1.5rem\r
    }\r
\r
    .desktop\\:width-4 {\r
        width: 2rem\r
    }\r
\r
    .desktop\\:width-5 {\r
        width: 2.5rem\r
    }\r
\r
    .desktop\\:width-6 {\r
        width: 3rem\r
    }\r
\r
    .desktop\\:width-7 {\r
        width: 3.5rem\r
    }\r
\r
    .desktop\\:width-8 {\r
        width: 4rem\r
    }\r
\r
    .desktop\\:width-9 {\r
        width: 4.5rem\r
    }\r
\r
    .desktop\\:width-10 {\r
        width: 5rem\r
    }\r
\r
    .desktop\\:width-15 {\r
        width: 7.5rem\r
    }\r
\r
    .desktop\\:width-card {\r
        width: 10rem\r
    }\r
\r
    .desktop\\:width-card-lg {\r
        width: 15rem\r
    }\r
\r
    .desktop\\:width-mobile {\r
        width: 20rem\r
    }\r
\r
    .desktop\\:width-mobile-lg {\r
        width: 30rem\r
    }\r
\r
    .desktop\\:width-tablet {\r
        width: 40rem\r
    }\r
\r
    .desktop\\:width-tablet-lg {\r
        width: 55rem\r
    }\r
\r
    .desktop\\:width-desktop {\r
        width: 64rem\r
    }\r
\r
    .desktop\\:width-desktop-lg {\r
        width: 75rem\r
    }\r
\r
    .desktop\\:width-widescreen {\r
        width: 87.5rem\r
    }\r
\r
    .desktop\\:width-0 {\r
        width: 0\r
    }\r
\r
    .desktop\\:width-full {\r
        width: 100%\r
    }\r
\r
    .desktop\\:width-auto {\r
        width: auto\r
    }\r
}\r
\r
/*# sourceMappingURL=uswds.min.css.map */`,
        name: 'uswds-rsc',
        turn_off_scss_compilation: 'true',
    },
})
