import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c348592087c06650ee0cb848cebb3540'],
    table: 'sp_css',
    data: {
        css: `.usa-link--external::after {\r
    background-image: url(uswds_launch.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-link--external::after {\r
        -webkit-mask-image: url(uswds_launch.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_launch.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-link--external.usa-link--alt::after {\r
    background-image: url(uswds_launch--white.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-link--external.usa-link--alt::after {\r
        -webkit-mask-image: url(uswds_launch.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_launch.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-alert--success .usa-alert__body::before {\r
    background-image: url(uswds_check_circle.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-alert--success .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #1b1b1b;\r
        -webkit-mask-image: url(uswds_check_circle.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_check_circle.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-alert--warning .usa-alert__body::before {\r
    background-image: url(uswds_warning.svg);\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-alert--warning .usa-alert__body::before {\r
        -webkit-mask-image: url(uswds_warning.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_warning.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-alert--error .usa-alert__body::before {\r
    background-image: url(uswds_error.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-alert--error .usa-alert__body::before {\r
        -webkit-mask-image: url(uswds_error.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_error.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-alert--info .usa-alert__body::before {\r
    background-image: url(uswds_info.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-alert--info .usa-alert__body::before {\r
        -webkit-mask-image: url(uswds_info.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_info.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-alert--emergency .usa-alert__body::before {\r
    background-image: url(uswds_error--white.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-alert--emergency .usa-alert__body::before {\r
        -webkit-mask-image: url(uswds_error.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_error.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-banner__header-action::after {\r
    background-image: url(uswds_expand_more.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-banner__header-action::after {\r
        -webkit-mask-image: url(uswds_expand_more.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_expand_more.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
@media all and (max-width: 29.99em) {\r
    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before {\r
        background-image: url(uswds_arrow_back.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before {\r
            background: 0 0;\r
            background-color: #71767a;\r
            -webkit-mask-image: url(uswds_arrow_back.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_arrow_back.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
@media all and (min-width: 30em) {\r
    .usa-breadcrumb__list-item:not(:last-child)::after {\r
        background-image: url(uswds_navigate_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-breadcrumb__list-item:not(:last-child)::after {\r
            background: 0 0;\r
            background-color: #71767a;\r
            -webkit-mask-image: url(uswds_navigate_next.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_navigate_next.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-checklist__item.usa-checklist__item--checked::before {\r
    background-image: url(uswds_check--blue-60v.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
    background-position: center;\r
}\r
\r
.usa-footer__primary-link--button::before {\r
    background-image: url(uswds_expand_more.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-footer__primary-link--button::before {\r
        background: 0 0;\r
        background-color: currentColor;\r
        -webkit-mask-image: url(uswds_expand_more.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_expand_more.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-footer__primary-link--button[aria-expanded="false"]::before {\r
    background-image: url(uswds_navigate_next.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-footer__primary-link--button[aria-expanded="false"]::before {\r
        background: 0 0;\r
        background-color: currentColor;\r
        -webkit-mask-image: url(uswds_navigate_next.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_navigate_next.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-nav__primary button[aria-expanded="false"] span::after {\r
    background-image: url(uswds_add.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-nav__primary button[aria-expanded="false"] span::after {\r
        -webkit-mask-image: url(uswds_add.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_add.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
@media all and (min-width: 64em) {\r
    .usa-nav__primary button[aria-expanded="false"] span::after {\r
        background-image: url(uswds_expand_more.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-nav__primary button[aria-expanded="false"] span::after {\r
            -webkit-mask-image: url(uswds_expand_more.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_expand_more.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-nav__primary button[aria-expanded="true"] span::after {\r
    background-image: url(uswds_remove.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-nav__primary button[aria-expanded="true"] span::after {\r
        -webkit-mask-image: url(uswds_remove.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_remove.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
@media all and (min-width: 64em) and (min-width: 64em) {\r
    .usa-nav__primary button[aria-expanded="true"] span::after {\r
        background-image: url(uswds_expand_less.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-nav__primary button[aria-expanded="true"] span::after {\r
            -webkit-mask-image: url(uswds_expand_less.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_expand_less.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-nav__close::before {\r
        background-image: url(uswds_close.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-nav__close::before {\r
            -webkit-mask-image: url(uswds_close.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_close.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-search [type="submit"]::before {\r
        background-image: url(uswds_search.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-search [type="submit"]::before {\r
            -webkit-mask-image: url(uswds_search.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_search.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-site-alert--info .usa-alert .usa-alert__body::before {\r
    background-image: url(uswds_info.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-site-alert--info .usa-alert .usa-alert__body::before {\r
        -webkit-mask-image: url(uswds_info.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_info.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-site-alert--emergency .usa-alert .usa-alert__body::before {\r
    background-image: url(uswds_error--white.svg);\r
    background-repeat: no-repeat;\r
    background-position: center center;\r
}\r
\r
@supports ((-webkit-mask: url()) or (mask: url())) {\r
    .usa-site-alert--emergency .usa-alert .usa-alert__body::before {\r
        background: 0 0;\r
        background-color: #fff;\r
        -webkit-mask-image: url(uswds_error.svg),\r
            linear-gradient(transparent, transparent);\r
        mask-image: url(uswds_error.svg),\r
            linear-gradient(transparent, transparent);\r
        -webkit-mask-position: center center;\r
        mask-position: center center;\r
        -webkit-mask-repeat: no-repeat;\r
        mask-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-checkbox__input:indeterminate+[class*="__label"]::before,\r
.usa-checkbox__input[data-indeterminate]+[class*="__label"]::before {\r
    background-image: url(uswds_checkbox-indeterminate.svg),\r
        linear-gradient(transparent, transparent);\r
}\r
\r
@media (forced-colors: active) {\r
\r
    .usa-checkbox__input:indeterminate+[class*="__label"]::before,\r
    .usa-checkbox__input[data-indeterminate]+[class*="__label"]::before {\r
        background-image: url(uswds_checkbox-indeterminate-alt.svg),\r
            linear-gradient(transparent, transparent);\r
        background-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-checkbox__input:checked+[class*="__label"]::before,\r
.usa-checkbox__input:checked:disabled+[class*="__label"]::before,\r
.usa-checkbox__input:checked[aria-disabled="true"]+[class*="__label"]::before {\r
    background-image: url(uswds_correct8.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
@media (forced-colors: active) {\r
\r
    .usa-checkbox__input:checked+[class*="__label"]::before,\r
    .usa-checkbox__input:checked:disabled+[class*="__label"]::before,\r
    .usa-checkbox__input:checked[aria-disabled="true"]+[class*="__label"]::before {\r
        background-image: url(uswds_correct8-alt.svg),\r
            linear-gradient(transparent, transparent);\r
        background-repeat: no-repeat;\r
    }\r
}\r
\r
.usa-select {\r
    background-image: url(uswds_unfold_more.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-combo-box--pristine .usa-combo-box__clear-input {\r
        background-image: url(uswds_close.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-combo-box--pristine .usa-combo-box__clear-input {\r
            -webkit-mask-image: url(uswds_close.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_close.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-combo-box__clear-input {\r
    background-image: url(uswds_close.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
.usa-date-picker__calendar__previous-year:not([disabled]) {\r
    background-image: url(uswds_navigate_far_before.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-date-picker__calendar__previous-year:not([disabled]) {\r
        background-image: url(uswds_navigate_far_before.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-date-picker__calendar__previous-year:not([disabled]) {\r
            -webkit-mask-image: url(uswds_navigate_far_before.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_navigate_far_before.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__previous-month:not([disabled]) {\r
    background-image: url(uswds_navigate_before.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-date-picker__calendar__previous-month:not([disabled]) {\r
        background-image: url(uswds_navigate_before.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-date-picker__calendar__previous-month:not([disabled]) {\r
            -webkit-mask-image: url(uswds_navigate_before.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_navigate_before.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__next-year:not([disabled]) {\r
    background-image: url(uswds_navigate_far_next.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-date-picker__calendar__next-year:not([disabled]) {\r
        background-image: url(uswds_navigate_far_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-date-picker__calendar__next-year:not([disabled]) {\r
            -webkit-mask-image: url(uswds_navigate_far_next.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_navigate_far_next.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__next-month:not([disabled]) {\r
    background-image: url(uswds_navigate_next.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-date-picker__calendar__next-month:not([disabled]) {\r
        background-image: url(uswds_navigate_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-date-picker__calendar__next-month:not([disabled]) {\r
            -webkit-mask-image: url(uswds_navigate_next.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_navigate_next.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__previous-year-chunk:not([disabled]) {\r
    background-image: url(uswds_navigate_before.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-date-picker__calendar__previous-year-chunk:not([disabled])::after {\r
        background-image: url(uswds_navigate_before.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-date-picker__calendar__previous-year-chunk:not([disabled])::after {\r
            -webkit-mask-image: url(uswds_navigate_before.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_navigate_before.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-date-picker__calendar__next-year-chunk:not([disabled]) {\r
    background-image: url(uswds_navigate_next.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
@media (forced-colors: active) {\r
    .usa-date-picker__calendar__next-year-chunk:not([disabled])::after {\r
        background-image: url(uswds_navigate_next.svg);\r
        background-repeat: no-repeat;\r
        background-position: center center;\r
    }\r
\r
    @supports ((-webkit-mask: url()) or (mask: url())) {\r
        .usa-date-picker__calendar__next-year-chunk:not([disabled])::after {\r
            -webkit-mask-image: url(uswds_navigate_next.svg),\r
                linear-gradient(transparent, transparent);\r
            mask-image: url(uswds_navigate_next.svg),\r
                linear-gradient(transparent, transparent);\r
            -webkit-mask-position: center center;\r
            mask-position: center center;\r
            -webkit-mask-repeat: no-repeat;\r
            mask-repeat: no-repeat;\r
        }\r
    }\r
}\r
\r
.usa-file-input__preview-image.is-loading {\r
    background-image: url(uswds_loader.svg),\r
        linear-gradient(transparent, transparent);\r
    background-position: center center;\r
    background-repeat: no-repeat;\r
}\r
\r
.usa-file-input__preview-image--pdf {\r
    background-image: url(uswds_file-pdf.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
.usa-file-input__preview-image--generic {\r
    background-image: url(uswds_file.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
.usa-file-input__preview-image--word {\r
    background-image: url(uswds_file-word.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
.usa-file-input__preview-image--excel {\r
    background-image: url(uswds_file-excel.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}\r
\r
.usa-file-input__preview-image--video {\r
    background-image: url(uswds_file-video.svg),\r
        linear-gradient(transparent, transparent);\r
    background-repeat: no-repeat;\r
}`,
        name: 'uswds-img-override-rsc.css',
        turn_off_scss_compilation: 'false',
    },
})
