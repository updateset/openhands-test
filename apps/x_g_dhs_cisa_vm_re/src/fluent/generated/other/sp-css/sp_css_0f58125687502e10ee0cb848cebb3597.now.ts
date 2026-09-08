import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0f58125687502e10ee0cb848cebb3597'],
    table: 'sp_css',
    data: {
        css: `/** \r
* Conversion factor to make USWDS fit properly alongside Bootstrap is 1.6 \r
*/\r
\r
.usa-input[readonly], .usa-radio__label[readonly]{\r
    color: #454545;\r
    background-color: #c9c9c9 !important;\r
    cursor: not-allowed;\r
    opacity: 1;\r
    -webkit-text-fill-color: #454545;\r
}\r
\r
ul.usa-list li {\r
  list-style: disc;\r
}\r
\r
ol.usa-list li {\r
  list-style: decimal;\r
}\r
\r
ul.usa-list--unstyled li {\r
  list-style: none; \r
}\r
\r
.usa-combo-box__input, .usa-input, .usa-input-group, .usa-select {\r
  height: 4rem;\r
}\r
\r
.usa-input-group input {\r
  padding-right: 4rem;    \r
}\r
\r
.usa-input-prefix+input {\r
  padding-left: 4rem;\r
  padding-right: .8rem;\r
}\r
\r
.usa-in-page-nav__item--active .usa-in-page-nav__link {\r
  border-left: 4px solid #005ea2; /* or whatever color you prefer */\r
  padding-left: 12px;\r
  color: #000000 !important;\r
}\r
\r
.usa-in-page-nav__item__primary {\r
  font-weight: 600;\r
}\r
\r
.usa-checkbox__label, .usa-combo-box__input, .usa-combo-box__list, .usa-fieldset, \r
.usa-hint, .usa-input, .usa-input-group, .usa-radio__label, .usa-range, .usa-select, .usa-textarea{\r
  font-size: 1.5rem;\r
}\r
\r
.usa-accordion__button{\r
  background-size: 2.25rem;\r
}\r
\r
.usa-modal{\r
  max-width: 45rem; \r
}\r
\r
.usa-modal__main {\r
  padding: .75rem 3rem 3rem;\r
}\r
\r
.usa-modal--lg {\r
  max-width: 82.5rem;\r
}\r
\r
.usa-modal--lg .usa-modal__main {\r
  padding-bottom: 6rem;\r
  padding-top: 1.875rem;\r
  max-width: 60rem;\r
}\r
\r
.usa-modal__close .usa-icon {\r
  height: 3rem;\r
  margin: 3px 3px 0 0;\r
  width: 3rem;\r
}\r
\r
.usa-tooltip__body{\r
  padding: .75rem !important;\r
  border-radius: .375rem !important;\r
}\r
\r
.usa-accordion__button[aria-expanded=false], .usa-accordion__button[aria-expanded=false]:hover {\r
  background-size: 2.25rem;\r
}\r
\r
.usa-accordion__button:hover {\r
  background-size: 2.25rem;\r
}\r
\r
.usa-banner__button[aria-expanded=false], .usa-banner__button[aria-expanded=false]:hover, .usa-banner__button[aria-expanded=true], .usa-banner__button[aria-expanded=true]:hover {\r
  background-image: none;\r
}\r
\r
.usa-banner__button[aria-expanded=true]::after{\r
  -webkit-mask-size: 1.5rem;\r
  mask-size: 1.5rem;\r
}\r
\r
.usa-banner__button[aria-expanded=false]::after{\r
  -webkit-mask-size: 1.5rem;\r
  mask-size: 1.5rem;\r
}\r
\r
.usa-banner__header-action::after {\r
  -webkit-mask-size: 1.5rem;\r
  mask-size: 1.5rem;\r
}\r
\r
.usa-banner__header--expanded .usa-banner__header-action {\r
  display: none;\r
}\r
\r
.usa-combo-box__input {\r
  height: 3.75rem; \r
}\r
\r
/* .usa-combo-box__list-option.focus-option */\r
.usa-combo-box__list-option[data-state=true] {\r
  background-color: #f5f5f6;\r
  border-left: .25rem solid #005ea2;\r
  outline: none;\r
}\r
\r
.usa-label{\r
  font-size: 1.5rem;\r
}\r
\r
.usa-hint{\r
  font-size: 1.5rem;\r
  color: black;\r
}\r
\r
.usa-link:focus {\r
    outline: 0.4rem solid #2491ff;\r
}\r
\r
.usa-link--external::after {\r
    background-size: 1.5rem 1.5rem;\r
    height: 1.5rem;\r
    width: 1.5rem;\r
}\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-link--external::after {\r
        -webkit-mask-size: 1.5rem 1.5rem;\r
        mask-size: 1.5rem 1.5rem\r
    }\r
}\r
\r
.usa-link--external.usa-link--alt::after {\r
    background-size: 1.5rem 1.5rem;\r
    height: 1.5rem;\r
    width: 1.5rem;\r
}\r
@supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-link--external.usa-link--alt::after {\r
        -webkit-mask-size: 1.5rem 1.5rem;\r
        mask-size: 1.5rem 1.5rem\r
    }\r
}\r
\r
.usa-button {\r
  border-radius: .375rem;\r
  -moz-column-gap: .75rem;\r
  column-gap: .75rem;\r
  margin-right: .75rem;\r
  padding: 1.125rem 1.125rem;\r
}\r
\r
.usa-button--big {\r
    border-radius: .4rem;\r
    padding: 1.6rem 2.4rem;\r
}\r
\r
.usa-alert .usa-alert__heading {\r
  font-size: 2rem;\r
}\r
\r
.usa-alert .usa-alert__body::before {\r
  left: 1.75rem;\r
}\r
\r
.usa-alert .usa-alert__body {\r
  padding-left: 1.875rem;\r
  padding-right: 1.875rem;\r
  padding-bottom: 1.5rem;\r
  padding-top: 1.5rem;\r
}\r
\r
.usa-alert--info .usa-alert__body::before {\r
  -webkit-mask-size: 3.2rem 3.2rem;\r
  mask-size: 3.2rem 3.2rem;\r
  height:3.2rem;\r
  width: 3.2rem;\r
  top: 1.0667rem;\r
}\r
\r
.usa-alert--info .usa-alert__body>* {\r
  margin-left: 4rem;\r
}\r
\r
.usa-alert--warning .usa-alert__body::before {\r
  -webkit-mask-size: 3.2rem 3.2rem;\r
  mask-size: 3.2rem 3.2rem;\r
  height:3.2rem;\r
  width: 3.2rem;\r
  top: 1.0667rem;\r
}\r
\r
.usa-alert--warning .usa-alert__body>* {\r
  margin-left: 4rem;\r
}\r
\r
.usa-alert--success .usa-alert__body::before {\r
  -webkit-mask-size: 3.2rem 3.2rem;\r
  mask-size: 3.2rem 3.2rem;\r
  height:3.2rem;\r
  width: 3.2rem;\r
  top: 1.0667rem;\r
}\r
\r
.usa-alert--success .usa-alert__body>* {\r
  margin-left: 3.75rem;\r
}\r
\r
.usa-alert--error .usa-alert__body::before {\r
  -webkit-mask-size: 3.2rem 3.2rem;\r
  mask-size: 3.2rem 3.2rem;\r
  height:3.2rem;\r
  width: 3.2rem;\r
  top: 1.0667rem;\r
}\r
\r
.usa-alert--error .usa-alert__body>* {\r
  margin-left: 3.75rem;\r
}\r
\r
.usa-alert--emergency .usa-alert__body::before {\r
  -webkit-mask-size: 3.2rem 3.2rem;\r
  mask-size: 3.2rem 3.2rem;\r
  height:3.2rem;\r
  width: 3.2rem;\r
  top: 1.0667rem;\r
}\r
\r
.usa-alert--emergency .usa-alert__body>* {\r
  margin-left: 3.75rem;\r
}\r
\r
.usa-alert--slim .usa-alert__body {\r
  padding-bottom: .75rem;\r
  padding-top: .75rem;\r
  min-height: 0;\r
}\r
\r
.usa-alert--slim .usa-alert__body:before {\r
   -webkit-mask-size: 2.25rem 2.25rem;\r
  mask-size: 2.25rem 2.25rem;\r
  height: 2.25rem;\r
  top: .75rem;\r
  width: 2.25rem;\r
}\r
\r
.usa-alert--no-icon .usa-alert__body>* {\r
  margin-left: 0;\r
}\r
\r
\r
.usa-input{\r
  height: 3.75rem;\r
}\r
\r
.usa-textarea {\r
  margin-top: .75rem;\r
  max-width: 45rem;\r
  padding: .75rem;\r
  height: 15rem;\r
}\r
\r
\r
.usa-select{\r
  background-position: right .75rem center;\r
  background-size: 1.875rem;\r
  padding-right: 3.2rem;\r
  height: 3.75rem;\r
}\r
\r
[type=checkbox], [type=radio], legend {\r
  font-size: 1.5rem; \r
}\r
\r
.usa-radio__label {\r
  padding: 1.125rem 1.5rem 1.125rem 3rem;\r
}\r
\r
.usa-radio__input--tile+[class*=__label]::before {\r
  left: .75rem;\r
}\r
\r
.usa-radio__input--tile+[class*=__label] {\r
  margin-top: .75rem;\r
  padding: 1.125rem 1.5rem 1.125rem 3.75rem;\r
  font-size: 1.5rem;\r
  border-radius: .4rem;\r
}\r
\r
.usa-radio__label::before {\r
  margin-top: .096rem;\r
  margin-left: .1875px;\r
  height: 1.875rem;\r
  width: 1.875rem;\r
}\r
\r
.usa-radio__label-description{\r
  font-size: 1.36rem;\r
}\r
\r
.usa-checkbox__input--tile+[class*=__label] {\r
  margin-top: .75rem;\r
  padding: 1.125rem 1.5rem 1.125rem 3.75rem;\r
  font-size: 1.5rem;\r
  border-radius: .4rem;\r
}\r
\r
.usa-checkbox__label{\r
  padding: 1.125rem 1.5rem 1.125rem 3rem\r
}\r
\r
.usa-checkbox__label::before {\r
  margin-top: .096rem;\r
  margin-left: .1875px;\r
  height: 1.875rem;\r
  width: 1.875rem;\r
}\r
\r
.usa-checkbox__input--tile+[class*=__label]::before {\r
  left: .75rem;\r
}\r
\r
.usa-checkbox__label-description{\r
  font-size: 1.36rem;\r
}\r
\r
.usa-checkbox__input:checked+[class*=__label]::before, .usa-checkbox__input:checked:disabled+[class*=__label]::before, .usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before{\r
  background-size: 1.2rem auto;\r
}\r
\r
.usa-date-picker__button {\r
  background-size: 2.4rem;\r
  margin-top: 5px;\r
}\r
\r
button:not([disabled]):focus, input:not([disabled]):focus, select:not([disabled]):focus, textarea:not([disabled]):focus {\r
  outline: .4rem solid #2491ff;\r
}\r
\r
.usa-input-group--error, .usa-input-group--success {\r
  border-width: .4rem;\r
}\r
\r
.usa-form-group--error {\r
  border-left-width: .4rem;\r
}\r
\r
.uswds-dual-column{\r
  display: grid;\r
  grid-template-columns: repeat(2, 1fr);\r
  gap: 0em 1em; \r
}\r
\r
.uswds-three-column{\r
  display: grid;\r
  grid-template-columns: repeat(3, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-four-column{\r
  display: grid;\r
  grid-template-columns: repeat(4, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-five-column{\r
  display: grid;\r
  grid-template-columns: repeat(5, 1fr);\r
  gap: 0em 1em;  \r
}\r
.uswds-six-column{\r
  display: grid;\r
  grid-template-columns: repeat(6, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-seven-column{\r
  display: grid;\r
  grid-template-columns: repeat(7, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-eight-column{\r
  display: grid;\r
  grid-template-columns: repeat(8, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-nine-column{\r
  display: grid;\r
  grid-template-columns: repeat(9, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-ten-column{\r
  display: grid;\r
  grid-template-columns: repeat(10, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-eleven-column{\r
  display: grid;\r
  grid-template-columns: repeat(11, 1fr);\r
  gap: 0em 1em; \r
}\r
.uswds-twelve-column{\r
  display: grid;\r
  grid-template-columns: repeat(12, 1fr);\r
  gap: 0em 1em; \r
}\r
\r
.usa-step-indicator {\r
  font-size: 1rem; \r
}\r
\r
.usa-sort-icon {\r
  margin-left: 0.3rem;\r
}\r
\r
.usa-combo-box__list-option[data-selected="true"] {\r
  background-color: #f5f5f6; /* #e6e6e6 */\r
  border-left: 0.25rem solid #85b063;\r
  outline: none;\r
  /* Add any other styling you want for selected options */\r
}\r
\r
.usa-combo-box__list-option[data-state="true"] {\r
  background-color: #f5f5f6;\r
  border-left: 0.25rem solid #005ea2;\r
  outline: none;\r
}\r
\r
.usa-combo-box__list-option[data-selected="true"][data-state="true"] {\r
  background-color: #e6e6e6;\r
  border-left: 0.25rem solid #85b063;\r
  outline: none;\r
}\r
\r
.usa-combo-box__selected-item {\r
  padding: 0.5rem 0.75rem !important;\r
  font-size: 1.13rem;\r
}\r
\r
.usa-combo-box__input-wrapper {\r
  position: relative;\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.usa-combo-box__input-button-separator-multiple {\r
  height: calc(100% - 1.5rem) !important;\r
  top: 8px !important;\r
}\r
\r
.usa-combo-box__toggle-list-multiple {\r
  top: 8px !important;\r
}\r
\r
.usa-combo-box__list-multiple {\r
  position: absolute;\r
  top: 100%;\r
  left: 0;\r
  right: 0;\r
  z-index: 1000;\r
  margin-top: 2px;\r
}\r
\r
.usa-logo {\r
  margin: 1.5rem 0 1rem !important; \r
}\r
\r
.usa-search [type=submit] {\r
  height: 37.5px; \r
  width: 37px;\r
}\r
\r
@media (min-width: 30em) {\r
  .usa-search--big .usa-search__input, .usa-search--big [type=search] {\r
    /* font-size: 1.06rem; */\r
    height: 3.75rem;\r
  }\r
}\r
\r
@media (min-width: 64em) {\r
  .usa-nav__secondary {\r
    margin-bottom: 2rem;\r
  }\r
\r
  @media (min-width: 64em) {\r
    .usa-megamenu.usa-nav__submenu {      \r
      width: 30rem;\r
    }\r
  }\r
\r
  .usa-input-mask--content, .usa-masked {\r
    background-color: transparent;\r
    padding: .5rem;\r
  }\r
\r
  .usa-input-mask--content, .usa-masked {\r
    background-color: transparent;\r
    padding: .8rem;\r
  }\r
\r
  .usa-input-mask--content {\r
    border: 1.6px solid transparent;\r
    left: 3.2px;\r
  }\r
\r
\r
\r
  .usa-site-alert .usa-alert .usa-alert__body {\r
    padding-bottom: 1.6rem;\r
    padding-top: 1.6rem;\r
    position: relative\r
  }\r
\r
\r
  .usa-site-alert .usa-alert .usa-alert__heading {\r
    margin-bottom: .8rem\r
  }\r
\r
  .usa-site-alert .usa-alert .usa-alert__body>.usa-list,\r
  .usa-site-alert .usa-alert>.usa-list {\r
    padding-left: 3.2ch\r
  }\r
\r
  .usa-site-alert .usa-alert .usa-alert__body {\r
    padding-left: 2rem;\r
    padding-right: 2rem\r
  }\r
\r
  .usa-site-alert .usa-alert .usa-alert__body::before {\r
    left: 1.75rem\r
  }\r
\r
  @media all and (min-width:64em) {\r
    .usa-site-alert .usa-alert .usa-alert__body {\r
      padding-left: 2.8rem;\r
      padding-right: 2.8rem\r
    }\r
\r
    .usa-site-alert .usa-alert .usa-alert__body::before {\r
      left: 1.5833333333rem\r
    }\r
  }\r
\r
  .usa-site-alert--info .usa-alert .usa-alert__body {\r
    min-height: 5.3333333333rem\r
  }\r
\r
  .usa-site-alert--info .usa-alert .usa-alert__body::before {\r
    height: 3.2rem;\r
    width: 3.2rem;\r
    top: 1.066666666666667rem\r
  }\r
\r
  @supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-site-alert--info .usa-alert .usa-alert__body::before {\r
      -webkit-mask-size: 3.2rem 3.2rem;\r
      mask-size: 3.2rem 3.2rem;\r
    }\r
  }\r
\r
  .usa-site-alert--info .usa-alert .usa-alert__body>* {\r
    margin-left: 4rem\r
  }\r
\r
  .usa-site-alert--emergency .usa-alert .usa-alert__body {\r
    min-height: 5.3333333333rem\r
  }\r
\r
  .usa-site-alert--emergency .usa-alert .usa-alert__body::before {\r
    background-size: 3.2rem 3.2rem;\r
    height: 3.2rem;\r
    width: 3.2rem;\r
    top: 1.066666666666667rem\r
  }\r
\r
  @supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-site-alert--emergency .usa-alert .usa-alert__body::before {\r
      -webkit-mask-size: 3.2rem 3.2rem;\r
      mask-size: 3.2rem 3.2rem;\r
    }\r
  }\r
\r
  .usa-site-alert--emergency .usa-alert .usa-alert__body>* {\r
    margin-left: 4rem\r
  }\r
\r
  .usa-site-alert--slim .usa-alert .usa-alert__body {\r
    padding-bottom: .8rem;\r
    padding-top: .8rem;\r
    min-height: 0;\r
  }\r
\r
  .usa-site-alert--slim .usa-alert .usa-alert__body:before {\r
    height: 2.4rem;\r
    top: .8rem;\r
    width: 2.4rem\r
  }\r
\r
  @supports ((-webkit-mask:url()) or (mask:url())) {\r
    .usa-site-alert--slim .usa-alert .usa-alert__body:before {\r
      -webkit-mask-size: 2.4rem;\r
      mask-size: 2.4rem\r
    }\r
  }\r
\r
  .usa-site-alert--slim .usa-alert .usa-alert__body>* {\r
    margin-left: 3.2rem\r
  }\r
\r
  .usa-site-alert--slim .usa-alert .usa-alert__body::before {\r
    left: 1.8rem\r
  }\r
\r
  @media all and (min-width:64em) {\r
    .usa-site-alert--slim .usa-alert .usa-alert__body::before {\r
      left: 2.6rem\r
    }\r
  }\r
}\r
\r
.usa-tag {\r
    font-size: 1.4rem;\r
    margin-right: .4rem;\r
    padding: 1.6px .8rem\r
}\r
\r
.usa-tag--big {\r
  padding-left: .8rem;\r
  padding-right: .8rem;\r
  font-size: 1.6rem;\r
}\r
\r
\r
[type=file] {\r
  margin-top: .8rem;\r
  padding-top: .32rem\r
}\r
\r
.usa-file-input {\r
  max-width: 48rem;\r
}\r
\r
.usa-file-input__target {\r
  border: 1.6px dashed #a9aeb1;\r
  margin-top: .8rem;\r
}\r
\r
\r
.usa-file-input__accepted-files-message {\r
  margin: -2.4rem 0 2.4rem;\r
}\r
\r
.usa-file-input__choose:focus {\r
  outline: .4rem solid #2491ff;\r
}\r
\r
.usa-file-input__instructions {\r
  padding: 3.2rem 1.6rem;\r
}\r
\r
.usa-file-input .usa-file-input__input[type] {\r
  padding: .8rem;\r
}\r
\r
.usa-file-input__preview-heading {\r
  padding: .8rem\r
}\r
\r
.usa-file-input__preview {\r
  margin-top: 1.6px;\r
  padding: .4rem .8rem;\r
}\r
\r
.usa-file-input__preview:last-child {\r
  margin-bottom: -2.4rem\r
}\r
\r
.usa-file-input__preview-image {\r
  height: 4rem;\r
  margin-right: .8rem;\r
  width: 4rem\r
}\r
\r
.usa-file-input__preview-image.is-loading {\r
  background-size: 3.2rem\r
}\r
\r
.usa-file-input__preview-image--excel,\r
.usa-file-input__preview-image--generic,\r
.usa-file-input__preview-image--pdf,\r
.usa-file-input__preview-image--video,\r
.usa-file-input__preview-image--word {\r
  background-size: 2.4rem\r
}\r
\r
\r
\r
\r
.usa-form-group--error .usa-file-input__target {\r
  border-width: 3.2px\r
}\r
\r
\r
\r
.usa-alert--validation .usa-checklist {\r
    margin-top: 1.6rem\r
}\r
\r
.usa-checklist__item {\r
    text-indent: -4rem;\r
    margin-top: 0;\r
    margin-bottom: 0;\r
    margin-top: .8rem\r
}\r
\r
.usa-checklist__item::before {\r
    content: " ";\r
    display: inline-block;\r
    height: 1.6rem;\r
    margin-left: -.4rem;\r
    margin-right: 1.2rem;\r
    width: 3.2rem\r
}\r
\r
.usa-checklist__item.usa-checklist__item--checked::before {\r
    background-size: 2.4rem\r
}\r
\r
.usa-date-picker__external-input::-webkit-calendar-picker-indicator {\r
    display: none;\r
}\r
\r
  .usa-modal-overlay {\r
    padding: 2.4rem;\r
  }\r
\r
  .usa-modal {\r
    margin: 2rem auto;\r
    max-width: 48rem;\r
  }\r
\r
  .usa-modal__content {\r
    padding-top: 3.2rem;\r
  }\r
  .usa-modal__main {\r
    padding: .8rem 3.2rem 3.2rem\r
  }\r
\r
  .usa-modal__close {\r
    margin: -3.2rem 0 0 auto;\r
    padding: .4rem;\r
  }\r
\r
  .usa-modal__footer {\r
    margin-top: 2.4rem\r
  }\r
\r
  .usa-modal--lg {\r
    max-width: 88rem;\r
  }\r
\r
  .usa-modal--lg .usa-modal__main {\r
    padding-bottom: 6.4rem;\r
    padding-top: 2em;\r
    max-width: 64rem\r
  }\r
\r
.usa-modal__close > i {\r
  font-size:2.4rem;\r
}\r
\r
  .usa-input-mask--content{\r
    padding: .8rem;\r
    font-size: 1.5rem;\r
  }\r
\r
.usa-collection {\r
    margin-bottom: 1.6em;\r
    margin-top: 1.6em;\r
}\r
\r
.usa-collection ol,\r
.usa-collection ul,\r
.usa-prose .usa-collection ol,\r
.usa-prose .usa-collection ul {\r
    margin-top: .4em\r
}\r
\r
.usa-prose .usa-collection {\r
    margin-bottom: 1.6em;\r
    margin-top: 1.6em;\r
}\r
\r
.usa-collection__item,\r
.usa-prose .usa-collection__item {\r
    margin-bottom: 1.6rem;\r
    margin-top: 1.6rem;\r
    padding-top: 1.6rem\r
}\r
\r
.usa-collection__calendar-date,\r
.usa-collection__img {\r
    width: 6.4rem;\r
    margin-right: 1.6rem\r
}\r
\r
\r
.usa-collection__body {\r
    flex: 1 1 0%\r
}\r
\r
.usa-collection__description {\r
    margin-bottom: .8rem;\r
    margin-top: .8rem\r
}\r
\r
.usa-collection__meta {\r
    margin-top: .4rem\r
}\r
\r
.usa-collection__meta-item {\r
    margin-top: .4rem;\r
    margin-right: .8rem\r
}\r
\r
.usa-collection__meta-item.usa-tag {\r
    padding-bottom: .4rem;\r
    padding-top: .4rem;\r
    margin-top: .4rem\r
}\r
\r
.usa-collection__calendar-date-day,\r
.usa-collection__calendar-date-month {\r
    padding: .4rem;\r
}\r
\r
.usa-collection--condensed .usa-collection__item {\r
    margin-bottom: .8rem;\r
    margin-top: .8rem;\r
    padding-top: .8rem\r
}\r
\r
/*@media print {\r
	.usa-radio__input:checked + [class*=__label]::before {\r
		font-size : 24px;\r
		content: "\\25c9";\r
		top: 5px;\r
		color:  #005ea2 !important;\r
	}\r
}*/\r`,
        name: 'uswds-component-override-rsc.css',
        turn_off_scss_compilation: 'true',
    },
})
