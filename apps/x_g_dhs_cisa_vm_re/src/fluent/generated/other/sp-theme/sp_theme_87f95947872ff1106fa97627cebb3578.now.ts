import { SPTheme } from '@servicenow/sdk/core'

SPTheme({
    $id: Now.ID['87f95947872ff1106fa97627cebb3578'],
    name: 'Ready Set Cyber',
    customCss: `// Grays\r
$gray-base: #000000;\r
$gray-dark: lighten($gray-base, 18.04%);\r
$gray-darker: lighten($gray-base, 8.24%);\r
$gray-light: lighten($gray-base, 40%);\r
$gray-lighter: lighten($gray-base, 94.51%);\r
$gray: lighten($gray-base, 29.02%);\r
\r
////// Branding variables //////\r
// should always end with !default and no other variable should have !default\r
$brand-primary: #1F8476 !default;\r
$body-bg: #ffffff !default;\r
$brand-success: #48C891 !default;\r
$state-success-text: darken(desaturate(adjust-hue($brand-success, 3), 15.64%), 34.31) !default;\r
$sp-navbar-divider-color: #5A7F71 !default;\r
$text-color: $gray-dark !default;\r
$navbar-inverse-link-hover-color: #ffffff !default;\r
$navbar-inverse-bg: #293e40 !default;\r
$brand-warning: #DFD139 !default;\r
$brand-danger: #C83C36 !default;\r
$sp-tagline-color: #ffffff !default;\r
$navbar-inverse-link-color: #A7B0B2 !default;\r
$brand-info: #6ABECF !default;\r
$link-color: $brand-primary !default;\r
$sp-logo-margin-x: 15px !default;\r
$text-muted: $gray-light !default;\r
////////////////////////////////////\r
\r
// Link hover decoration\r
$link-hover-decoration: underline !default;\r
\r
// La Jolla variables\r
$brand-primary-dark: #1F8476 !default;\r
$brand-primary-darker: #165C53 !default;\r
$brand-primary-light: #5FBAA4 !default;\r
$brand-primary-lighter: #B8E0D7 !default;\r
$brand-primary-lightest: #EEF8F8 !default;\r
$dropdown-link-disabled-color: $gray-light;\r
$link-hover-color: darken(desaturate(adjust-hue($link-color, 1), 0.42%), 16.67);\r
$navbar-inverse-link-active-bg: #213234;\r
$navbar-inverse-link-hover-bg: $brand-primary;\r
$panel-primary-border: $brand-primary ;\r
$panel-primary-heading-bg: $brand-primary ;\r
$panel-primary-text: #ffffff;\r
$primary: $brand-primary;\r
$input-border-focus: #1f8476;\r
$quicklinks-background: #EDF7F5;\r
$btn-success-bg: $brand-success;\r
$btn-default-color: #2e2e2e;\r
$btn-primary-color: #ffffff;\r
$btn-primary-bg: $brand-primary;\r
$btn-primary-border: darken($btn-primary-bg, 5%);\r
$btn-success-bg: $brand-success;\r
$btn-success-border: darken($btn-success-bg, 5%);\r
$btn-success-color: darken(desaturate(adjust-hue($brand-success, 3), 15.64%), 34.31);\r
$btn-disabled-opacity: 0.25;\r
$component-active-color: $gray;\r
$component-active-bg: #f5f5f5;\r
$state-danger-bg: lighten(saturate(adjust-hue($brand-danger, 354), 42.52%), 42.94);\r
$state-danger-border: #C83C36;\r
$state-danger-text: #64201A;\r
$state-info-bg: lighten(desaturate($brand-info, 3.27%), 19.02);\r
$state-info-border: $brand-info;\r
$state-info-text: darken(desaturate(adjust-hue($brand-info, 1), 2.75%), 41.57);\r
$state-success-bg: lighten(saturate($brand-success, 3.67%), 28.24);\r
$state-success-border: $brand-success;\r
$state-warning-bg: lighten(saturate(adjust-hue($brand-warning, -3), 17.70%), 29.61);\r
$state-warning-border: $brand-warning;\r
$state-warning-text: darken(desaturate(adjust-hue($brand-warning, -4), 20.32%), 44.31);\r
$alert-danger-bg: $state-danger-bg;\r
$alert-danger-border: $state-danger-border;\r
$alert-danger-text: $state-danger-text;\r
$alert-info-bg: $state-info-bg;\r
$alert-info-border: $state-info-border;\r
$alert-info-text: $state-info-text;\r
$alert-success-bg: $state-success-bg;\r
$alert-success-border: $state-success-border;\r
$alert-success-text: $state-success-text;\r
$alert-warning-bg: $state-warning-bg;\r
$alert-warning-border: $state-warning-border;\r
$alert-warning-text: $state-warning-text;\r
\r
// To get service status messages consistent with brand colors\r
$primary: $brand-primary;\r
$warning: $brand-warning;\r
$success: $brand-success;\r
$info: $brand-info;\r
$danger: $brand-danger;\r
$input-border-placeholder: white;\r
\r
\r
// Service Catalog panel hover highlight\r
$panel-list-item: lighten(desaturate(adjust-hue($panel-primary-heading-bg, -6), 20.79%), 58.04);\r
$panel-primary-heading-bg: #47a992;\r
\r
$multiple-issues-color: #7070B3;\r
$no-issue-color: lighten($brand-success, 40%);\r
$planned-maintenance-color: lighten($brand-info, 35%);\r
$service-degredation-color: lighten($brand-warning, 40%);\r
$service-outage-color: lighten($brand-danger, 45%);\r
\r
$no-issue-border-color: $brand-success;\r
$planned-maintenance-border-color: $brand-info;\r
$service-degredation-border-color: $brand-warning;\r
$service-outage-border-color: $brand-danger;\r
\r
$no-issues-text: $state-success-text;\r
$planned-maintenance-text: $state-info-text;\r
$service-degredation-text: $state-info-text;\r
$service-outage-text: $state-danger-bg;\r
\r
$login-btn-bg: $btn-primary-bg;\r
$login-btn-border: $btn-primary-border;\r
\r
$qa-tag-color: $state-info-text;\r
$qa-tag-bg: $state-info-bg;\r
$qa-tag-border: $state-info-bg;\r
$qa-tag-hover-color: darken($qa-tag-color, 10%);\r
$qa-tag-hover-bg: darken($qa-tag-bg, 10%);\r
\r
$qa-thread-tag-color: $state-info-text;\r
$qa-thread-tag-bg: $state-info-bg;\r
$qa-thread-tag-hover-color: darken($qa-thread-tag-color, 10%);\r
$qa-thread-tag-hover-bg: darken($qa-thread-tag-bg, 10%);\r
\r
$qa-panel-link-color: $link-color;\r
$select2-container-active: $input-border-focus;\r
\r
$not-webkit-outline-color: $input-border-focus;\r
$webkit-outline-color: $input-border-focus;\r
\r
$label-success-bg: lighten(saturate($brand-success, 3.67%), 28.24);\r
$label-info-bg: lighten(desaturate($brand-info, 3.27%), 19.02);\r
$label-warning-bg: lighten(saturate(adjust-hue($brand-warning, -3), 17.70%), 29.61);\r
$label-danger-bg: lighten(saturate(adjust-hue($brand-danger, 354), 42.52%), 42.94);\r
$label-primary-bg : #C83C36;\r
$data-table-selected: $brand-primary;\r
\r
$button-selected-color: $btn-primary-bg;\r
$dropdown-link-active-bg: $brand-primary;\r
$dropdown-link-active-color: #ffffff;\r
$widget-editor-fa-bg: $brand-primary;\r
\r
$input-border-tab-focus: $input-border-focus;\r
\r
$fav-star-color: darken($brand-warning, 20%);\r
$fav-star-color-off: #ffffff;\r
$fav-star-outline-color: #6b611f;\r
$fav-star-outline: -1px 0 $fav-star-outline-color, 0 1px $fav-star-outline-color, 1px 0$fav-star-outline-color, 0 -1px $fav-star-outline-color;\r
\r
$sc-field-error-color: #1a424b;\r
$qa-star-color-on: $brand-warning;\r
$qa-star-color-off: #ffffff;\r
\r
$list-group-link-color: $brand-primary;\r
$list-group-hover-bg: lighten($panel-primary-heading-bg, 40%);\r
\r
$accessible-placeholder-gray: #565656;\r
\r
\r
\r
\r`,
    header: 'bf5ec2f2cb10120000f8d856634c9c0c',
})
