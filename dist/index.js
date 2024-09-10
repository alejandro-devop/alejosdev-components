import * as React from 'react';
import React__default, { useMemo as useMemo$1, createContext, useContext, useState as useState$1, forwardRef, useRef, useCallback as useCallback$1, useEffect } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import Select from 'react-select';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { HexColorPicker } from 'react-colorful';
import { createPortal } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAdd, faAnglesLeft, faAnglesRight, faArrowsRotate, faBan, faBell, faBars, faBed, faBedPulse, faBomb, faBook, faBoxesStacked, faBriefcase, faBrain, faBullseye, faCarrot, faCartShopping, faCalendar, faCalendarAlt, faCalendarDay, faCar, faCheck, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCircle, faClipboard, faClock, faCloud, faCogs, faComment, faComputer, faComputerMouse, faCreditCard, faCreditCardAlt, faDog, faDroplet, faDumbbell, faFile, faFilter, faEdit, faEllipsisV, faEllipsisH, faEnvelope, faExclamationTriangle, faExclamation, faExclamationCircle, faEye, faEyeSlash, faFlag, faFloppyDisk, faFlask, faFireBurner, faFireAlt, faFireFlameCurved, faGamepad, faGasPump, faGauge, faGift, faGlassWater, faGlobe, faGraduationCap, faHandFist, faFilm, faHeart, faHeartCrack, faHeartPulse, faHeartCirclePlus, faHome, faImage, faFileInvoice, faFileInvoiceDollar, faKitchenSet, faLanguage, faLightbulb, faList, faListCheck, faLock, faLockOpen, faMinus, faMotorcycle, faMoneyBill, faMoneyBillTransfer, faMoon, faMugHot, faPause, faPalette, faPen, faPenAlt, faPerson, faPlayCircle, faPoo, faQuestionCircle, faRightToBracket, faRocket, faRuler, faSearch, faShirt, faShower, faSoap, faStar, faStarHalf, faStarHalfAlt, faStopwatch20, faStop, faSun, faTag, faTimes, faTooth, faTrash, faThumbsUp, faThumbsDown, faUtensils, faUser, faWallet, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

const icons = [
    'add',
    'angles-left',
    'angles-right',
    'arrows-rotate',
    'ban',
    'bars',
    'bed',
    'bed-pulse',
    'bell',
    'brain',
    'bomb',
    'book',
    'boxes-stacked',
    'briefcase',
    'bullseye',
    'calendar',
    'calendar-alt',
    'calendar-day',
    'car',
    'carrot',
    'cart-shopping',
    'check',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'chevron-down',
    'circle',
    'clipboard',
    'clock',
    'cloud',
    'cogs',
    'comment',
    'computer',
    'computer-mouse',
    'credit-card',
    'credit-card-alt',
    'dog',
    'droplet',
    'dumbbell',
    'edit',
    'ellipsis-v',
    'ellipsis-h',
    'exclamation-triangle',
    'exclamation',
    'exclamation-circle',
    'eye',
    'eye-slash',
    'envelope',
    'file',
    'film',
    'filter',
    'fire-burner',
    'fire-alt',
    'fire-flame-curved',
    'flag',
    'flask',
    'floppy-disk',
    'gas-pump',
    'gauge',
    'gift',
    'glass-water',
    'globe',
    'graduation-cap',
    'hand-fist',
    'heart',
    'heart-crack',
    'heart-pulse',
    'heart-circle-plus',
    'home',
    'file-invoice',
    'file-invoice-dollar',
    'gamepad',
    'image',
    'kitchen-set',
    'language',
    'lightbulb',
    'list',
    'list-check',
    'lock',
    'lock-open',
    'minus',
    'money-bill',
    'money-bill-transfer',
    'motorcycle',
    'mug-hot',
    'palette',
    'play-circle',
    'pause',
    'pen',
    'pen-alt',
    'person',
    'poo',
    'question-circle',
    'right-to-bracket',
    'rocket',
    'ruler',
    'search',
    'shirt',
    'shower',
    'soap',
    'star',
    'star-half',
    'star-half-alt',
    'stop',
    'stopwatch-20',
    'sun',
    'tag',
    'times',
    'tooth',
    'trash',
    'thumbs-up',
    'thumbs-down',
    'utensils',
    'user',
    'wallet',
    'weight-hanging'
];

function getContrastColor(hexColor) {
    if (!hexColor)
        return null;
    // Remove the hash character if it's included
    hexColor = hexColor?.replace('#', '');
    // Convert the hex color to RGB
    var r = parseInt(hexColor.slice(0, 2), 16);
    var g = parseInt(hexColor.slice(2, 4), 16);
    var b = parseInt(hexColor.slice(4, 6), 16);
    // Calculate the luminance using the relative luminance formula
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    // Choose white or black as the contrasting color based on luminance
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

const ButtonBase = ({ children, ...props }) => {
    return React__default.createElement("button", { ...props }, children);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$q = "@use \"sass:math\";\n.button-module_button__yfHX9 {\n  align-items: center;\n  border-color: transparent;\n  box-shadow: rgba(33, 35, 38, 0.1) 0 10px 10px -10px;\n  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n  height: 30px;\n  margin: 0 0.2rem 0.5rem 0.2rem;\n  padding: 0;\n  position: relative;\n  transition: background-color 0.6s; }\n  .button-module_button__yfHX9 span {\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3); }\n  .button-module_button__yfHX9:disabled, .button-module_button__yfHX9:disabled:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .button-module_button__yfHX9.button-module_sm__sM-Bn {\n    height: 25px; }\n    .button-module_button__yfHX9.button-module_sm__sM-Bn span {\n      padding: 0px 0.5rem;\n      font-weight: 500;\n      font-size: small; }\n  .button-module_button__yfHX9.button-module_lg__kGxW1 {\n    height: 40px; }\n    .button-module_button__yfHX9.button-module_lg__kGxW1 span {\n      padding: 0px 1rem;\n      font-weight: 500;\n      font-size: large; }\n\n.button-module_buttonContent__4A7zq {\n  padding: 0px 0.7rem;\n  font-weight: 400; }\n\n.button-module_default__QlCDU {\n  background-color: #ffffff; }\n  .button-module_default__QlCDU:hover {\n    background-color: #d9d9d9; }\n  .button-module_default__QlCDU span {\n    color: black; }\n  .button-module_default__QlCDU.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #ffffff; }\n  .button-module_default__QlCDU.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n    color: #ffffff; }\n  .button-module_default__QlCDU.button-module_flat__ItVb2.button-module_flat__ItVb2:hover {\n    background-color: #ffffff; }\n    .button-module_default__QlCDU.button-module_flat__ItVb2.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n      color: black; }\n\n.button-module_rounded__jNVzk {\n  border-radius: 20px; }\n\n.button-module_iconWrapper__QUHW4 {\n  align-items: center;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  width: 30px;\n  height: 30px; }\n\n.button-module_iconLead__Kpl1u {\n  left: 0; }\n\n.button-module_iconEnd__h067L {\n  right: 0; }\n\n.button-module_button__yfHX9.button-module_lg__kGxW1 .button-module_iconWrapper__QUHW4 {\n  width: 40px;\n  height: 40px; }\n\n.button-module_rounded__jNVzk .button-module_iconWrapper__QUHW4 {\n  border-radius: 20px; }\n\n.button-module_primary__owGsB {\n  background-color: #8d6b94;\n  box-shadow: 0px 3px 0px 0px #715676; }\n  .button-module_primary__owGsB:hover {\n    background-color: #634b68; }\n  .button-module_primary__owGsB span {\n    color: white; }\n  .button-module_primary__owGsB .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_primary__owGsB.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #8d6b94;\n    box-shadow: none; }\n    .button-module_primary__owGsB.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #8d6b94;\n      font-weight: 400; }\n    .button-module_primary__owGsB.button-module_flat__ItVb2:hover {\n      background-color: #8d6b94; }\n      .button-module_primary__owGsB.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_secondary__5ndRZ {\n  background-color: #b185a7;\n  box-shadow: 0px 3px 0px 0px #9d6691; }\n  .button-module_secondary__5ndRZ:hover {\n    background-color: #8e5b83; }\n  .button-module_secondary__5ndRZ span {\n    color: white; }\n  .button-module_secondary__5ndRZ .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_secondary__5ndRZ.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #b185a7;\n    box-shadow: none; }\n    .button-module_secondary__5ndRZ.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #b185a7;\n      font-weight: 400; }\n    .button-module_secondary__5ndRZ.button-module_flat__ItVb2:hover {\n      background-color: #b185a7; }\n      .button-module_secondary__5ndRZ.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_success__-dqWn {\n  background-color: #06d6a0;\n  box-shadow: 0px 3px 0px 0px #05a47b; }\n  .button-module_success__-dqWn:hover {\n    background-color: #048c68; }\n  .button-module_success__-dqWn span {\n    color: white; }\n  .button-module_success__-dqWn .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_success__-dqWn.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #06d6a0;\n    box-shadow: none; }\n    .button-module_success__-dqWn.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #06d6a0;\n      font-weight: 400; }\n    .button-module_success__-dqWn.button-module_flat__ItVb2:hover {\n      background-color: #06d6a0; }\n      .button-module_success__-dqWn.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_danger__ANkhq {\n  background-color: #ef476f;\n  box-shadow: 0px 3px 0px 0px #eb184a; }\n  .button-module_danger__ANkhq:hover {\n    background-color: #d71341; }\n  .button-module_danger__ANkhq span {\n    color: white; }\n  .button-module_danger__ANkhq .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_danger__ANkhq.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #ef476f;\n    box-shadow: none; }\n    .button-module_danger__ANkhq.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #ef476f;\n      font-weight: 400; }\n    .button-module_danger__ANkhq.button-module_flat__ItVb2:hover {\n      background-color: #ef476f; }\n      .button-module_danger__ANkhq.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_info__XPmH4 {\n  background-color: #7796cb;\n  box-shadow: 0px 3px 0px 0px #527abd; }\n  .button-module_info__XPmH4:hover {\n    background-color: #446cb2; }\n  .button-module_info__XPmH4 span {\n    color: white; }\n  .button-module_info__XPmH4 .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_info__XPmH4.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #7796cb;\n    box-shadow: none; }\n    .button-module_info__XPmH4.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #7796cb;\n      font-weight: 400; }\n    .button-module_info__XPmH4.button-module_flat__ItVb2:hover {\n      background-color: #7796cb; }\n      .button-module_info__XPmH4.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_warning__KEyfR {\n  background-color: #f2f3ae;\n  box-shadow: 0px 3px 0px 0px #dddf29; }\n  .button-module_warning__KEyfR:hover {\n    background-color: #e7e96b; }\n  .button-module_warning__KEyfR span {\n    color: black; }\n  .button-module_warning__KEyfR .button-module_icon__Uk-sL {\n    color: black; }\n  .button-module_warning__KEyfR.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #f2f3ae;\n    box-shadow: none; }\n    .button-module_warning__KEyfR.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #f2f3ae;\n      font-weight: 400; }\n    .button-module_warning__KEyfR.button-module_flat__ItVb2:hover {\n      background-color: #f2f3ae; }\n      .button-module_warning__KEyfR.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: black; }\n\n.button-module_dark__B-o-h {\n  background-color: #212121;\n  box-shadow: 0px 3px 0px 0px #080808; }\n  .button-module_dark__B-o-h:hover {\n    background-color: black; }\n  .button-module_dark__B-o-h span {\n    color: white; }\n  .button-module_dark__B-o-h .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_dark__B-o-h.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #212121;\n    box-shadow: none; }\n    .button-module_dark__B-o-h.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #212121;\n      font-weight: 400; }\n    .button-module_dark__B-o-h.button-module_flat__ItVb2:hover {\n      background-color: #212121; }\n      .button-module_dark__B-o-h.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_light__ugMlT {\n  background-color: #ffffff;\n  box-shadow: 0px 3px 0px 0px #e6e6e6;\n  color: #000; }\n  .button-module_light__ugMlT:hover {\n    background-color: #d9d9d9; }\n  .button-module_light__ugMlT span {\n    color: black; }\n  .button-module_light__ugMlT .button-module_icon__Uk-sL {\n    color: black; }\n  .button-module_light__ugMlT.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #ffffff;\n    box-shadow: none; }\n    .button-module_light__ugMlT.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #ffffff;\n      font-weight: 400; }\n    .button-module_light__ugMlT.button-module_flat__ItVb2:hover {\n      background-color: #ffffff; }\n      .button-module_light__ugMlT.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: black; }\n\n.button-module_block__QXp9s {\n  flex: 1;\n  width: 100%; }\n  .button-module_block__QXp9s > span.button-module_buttonContent__4A7zq {\n    flex: 1;\n    text-align: center; }\n\n.button-module_withIcon__8aB-N.button-module_iconLeading__PzMb4 {\n  padding-left: 1rem; }\n\n.button-module_withIcon__8aB-N.button-module_iconEnding__QJBec {\n  padding-right: 1rem; }\n";
var styles$q = {"button":"button-module_button__yfHX9","sm":"button-module_sm__sM-Bn","lg":"button-module_lg__kGxW1","buttonContent":"button-module_buttonContent__4A7zq","default":"button-module_default__QlCDU","flat":"button-module_flat__ItVb2","rounded":"button-module_rounded__jNVzk","iconWrapper":"button-module_iconWrapper__QUHW4","iconLead":"button-module_iconLead__Kpl1u","iconEnd":"button-module_iconEnd__h067L","primary":"button-module_primary__owGsB","icon":"button-module_icon__Uk-sL","secondary":"button-module_secondary__5ndRZ","success":"button-module_success__-dqWn","danger":"button-module_danger__ANkhq","info":"button-module_info__XPmH4","warning":"button-module_warning__KEyfR","dark":"button-module_dark__B-o-h","light":"button-module_light__ugMlT","block":"button-module_block__QXp9s","withIcon":"button-module_withIcon__8aB-N","iconLeading":"button-module_iconLeading__PzMb4","iconEnding":"button-module_iconEnding__QJBec"};
styleInject(css_248z$q);

var css_248z$p = "@use \"sass:math\";\n.icon-module_root__XG4tj {\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .icon-module_root__XG4tj {\n      color: #fff; } }\n";
var styles$p = {"root":"icon-module_root__XG4tj"};
styleInject(css_248z$p);

/**
 * Renders a FontAwesomeIcon with the given icon name.
 * check the list of available icons at https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free
 * and check @utils/icon-registry/icons-available.ts file to see the list of available icons or
 * check @utils/icon-registry/registerIcons.ts to see how to register new icons.
 * @param param0
 * @returns
 */
const Icon = ({ className = '', icon = 'tag', style }) => {
    return (React.createElement(FontAwesomeIcon, { icon: icon || '', className: classNames(styles$p.root, className), style: style }));
};

const defaultVariantMaps = {
    default: 'default',
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    warning: 'warning',
    success: 'success',
    info: 'info',
    light: 'light',
    dark: 'dark'
};
const applyButtonVariantStyles = (config) => {
    const { styles, variant, variantMapper = {} } = config;
    const keys = {
        ...defaultVariantMaps,
        ...variantMapper
    };
    return {
        [styles[keys.default]]: variant === 'default',
        [styles[keys.primary]]: variant === 'primary',
        [styles[keys.secondary]]: variant === 'secondary',
        [styles[keys.danger]]: variant === 'danger',
        [styles[keys.warning]]: variant === 'warning',
        [styles[keys.success]]: variant === 'success',
        [styles[keys.info]]: variant === 'info',
        [styles[keys.light]]: variant === 'light',
        [styles[keys.dark]]: variant === 'dark'
    };
};

/**
 * Button component which allows to include an icon inside it
 * it provides a set of variants and a rounded prop to make it rounded
 * @param param0
 * @returns
 */
const Button = ({ children, className, icon, rounded = true, block, variant = 'default', loading, size = 'md', flat, iconPosition = 'lead', tabIndex = 0, loadingLabel, ...props }) => {
    const iconRenderer = useMemo$1(() => (React__default.createElement("i", { className: classNames(styles$q.iconWrapper, {
            [styles$q.iconEnd]: iconPosition === 'end',
            [styles$q.iconLead]: iconPosition === 'lead'
        }) },
        React__default.createElement(Icon, { icon: icon, className: classNames(styles$q.icon) }))), [icon, iconPosition]);
    return (React__default.createElement(ButtonBase, { className: classNames(styles$q.button, {
            ...applyButtonVariantStyles({
                styles: styles$q,
                variant
            }),
            [styles$q.rounded]: rounded,
            [styles$q.block]: block,
            [styles$q.sm]: size === 'sm',
            [styles$q.md]: size === 'md',
            [styles$q.lg]: size === 'lg',
            [styles$q.flat]: flat,
            [styles$q.withIcon]: Boolean(icon),
            [styles$q.iconLeading]: iconPosition === 'lead',
            [styles$q.iconEnding]: iconPosition === 'end'
        }, className), tabIndex: tabIndex, ...props },
        icon && iconPosition === 'lead' && iconRenderer,
        React__default.createElement("span", { className: styles$q.buttonContent }, loading ? loadingLabel || 'loading...' : children),
        icon && iconPosition === 'end' && iconRenderer));
};

var css_248z$o = "@use \"sass:math\";\n.icon-button-module_root__u1x4- {\n  width: 40px;\n  height: 40px;\n  border: none;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 0;\n  margin: 0 0.2rem;\n  box-sizing: inherit;\n  background-color: transparent;\n  border-radius: 50%;\n  transition: background-color 0.6s;\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .icon-button-module_root__u1x4- {\n      color: #fff;\n      border-color: #8f8f8f; } }\n  .icon-button-module_root__u1x4-:disabled {\n    opacity: 0.2;\n    cursor: not-allowed;\n    color: #000;\n    background-color: rgba(0, 0, 0, 0.08); }\n\n.icon-button-module_withLabelWrapper__9aC34 {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .icon-button-module_withLabelWrapper__9aC34 span.icon-button-module_label__rKElE {\n    font-size: 0.7rem;\n    margin-top: 0.2rem;\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .icon-button-module_withLabelWrapper__9aC34 span.icon-button-module_label__rKElE {\n        color: #fff; } }\n\n.icon-button-module_primary__Lm3HE {\n  color: #8d6b94;\n  background-color: #e8e1ea;\n  box-shadow: 0px 2px 0px 0px #7f6085; }\n  .icon-button-module_primary__Lm3HE:hover {\n    background-color: #715676; }\n  .icon-button-module_primary__Lm3HE:hover > .icon-button-module_icon__x11Ki {\n    color: white; }\n  .icon-button-module_primary__Lm3HE > .icon-button-module_icon__x11Ki {\n    color: #8d6b94; }\n\n.icon-button-module_secondary__8ReRg {\n  color: #b185a7;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #a7759c; }\n  .icon-button-module_secondary__8ReRg:hover {\n    background-color: #9d6691; }\n  .icon-button-module_secondary__8ReRg:hover > .icon-button-module_icon__x11Ki {\n    color: white; }\n  .icon-button-module_secondary__8ReRg > .icon-button-module_icon__x11Ki {\n    color: #b185a7; }\n\n.icon-button-module_success__H97Hp {\n  color: #06d6a0;\n  background-color: #abfde8;\n  box-shadow: 0px 2px 0px 0px #05bd8d; }\n  .icon-button-module_success__H97Hp:hover {\n    background-color: #05a47b; }\n  .icon-button-module_success__H97Hp:hover > .icon-button-module_icon__x11Ki {\n    color: white; }\n  .icon-button-module_success__H97Hp > .icon-button-module_icon__x11Ki {\n    color: #06d6a0; }\n\n.icon-button-module_danger__Sq2b1 {\n  color: #ef476f;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #ed305d; }\n  .icon-button-module_danger__Sq2b1:hover {\n    background-color: #eb184a; }\n  .icon-button-module_danger__Sq2b1:hover > .icon-button-module_icon__x11Ki {\n    color: white; }\n  .icon-button-module_danger__Sq2b1 > .icon-button-module_icon__x11Ki {\n    color: #ef476f; }\n\n.icon-button-module_warning__jSzGR {\n  color: #b7ba1b;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #eef098; }\n  .icon-button-module_warning__jSzGR:hover {\n    background-color: #e4e655; }\n  .icon-button-module_warning__jSzGR:hover > .icon-button-module_icon__x11Ki {\n    color: black; }\n  .icon-button-module_warning__jSzGR > .icon-button-module_icon__x11Ki {\n    color: #b7ba1b; }\n\n.icon-button-module_info__WYMmR {\n  color: #7796cb;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #6588c4; }\n  .icon-button-module_info__WYMmR:hover {\n    background-color: #527abd; }\n  .icon-button-module_info__WYMmR:hover > .icon-button-module_icon__x11Ki {\n    color: white; }\n  .icon-button-module_info__WYMmR > .icon-button-module_icon__x11Ki {\n    color: #7796cb; }\n\n.icon-button-module_light__8B2so {\n  color: gray;\n  background-color: white;\n  box-shadow: none; }\n  .icon-button-module_light__8B2so:hover {\n    background-color: #cccccc;\n    color: black; }\n\n.icon-button-module_dark__fsKvI {\n  color: black;\n  background-color: #a1a1a1;\n  box-shadow: 0px 2px 0px 0px #141414; }\n  .icon-button-module_dark__fsKvI:hover {\n    background-color: black; }\n  .icon-button-module_dark__fsKvI:hover > .icon-button-module_icon__x11Ki {\n    color: white; }\n  .icon-button-module_dark__fsKvI > .icon-button-module_icon__x11Ki {\n    color: black; }\n\n.icon-button-module_flat__qVklj {\n  background-color: transparent;\n  box-shadow: none; }\n  .icon-button-module_flat__qVklj.icon-button-module_flat__qVklj .icon-button-module_icon__x11Ki {\n    color: gray; }\n    @media (prefers-color-scheme: dark) {\n      .icon-button-module_flat__qVklj.icon-button-module_flat__qVklj .icon-button-module_icon__x11Ki {\n        color: #e6e6e6; } }\n\n.icon-button-module_sizeLg__HPQh1 {\n  width: 50px;\n  height: 50px; }\n\n.icon-button-module_sizeSm__-4j1C {\n  width: 30px;\n  height: 30px; }\n";
var styles$o = {"root":"icon-button-module_root__u1x4-","withLabelWrapper":"icon-button-module_withLabelWrapper__9aC34","label":"icon-button-module_label__rKElE","primary":"icon-button-module_primary__Lm3HE","icon":"icon-button-module_icon__x11Ki","secondary":"icon-button-module_secondary__8ReRg","success":"icon-button-module_success__H97Hp","danger":"icon-button-module_danger__Sq2b1","warning":"icon-button-module_warning__jSzGR","info":"icon-button-module_info__WYMmR","light":"icon-button-module_light__8B2so","dark":"icon-button-module_dark__fsKvI","flat":"icon-button-module_flat__qVklj","sizeLg":"icon-button-module_sizeLg__HPQh1","sizeSm":"icon-button-module_sizeSm__-4j1C"};
styleInject(css_248z$o);

var css_248z$n = "@use \"sass:math\";\n.alert-module_root__DQW41 {\n  border-radius: 10px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 1rem; }\n\n.alert-module_primary__iu0Wq {\n  background-color: rgba(141, 107, 148, 0.4);\n  color: white; }\n  .alert-module_primary__iu0Wq .alert-module_icon__0xtkg {\n    color: white; }\n\n.alert-module_info__5PrZI {\n  background-color: rgba(119, 150, 203, 0.4);\n  color: white; }\n  .alert-module_info__5PrZI .alert-module_icon__0xtkg {\n    color: white; }\n\n.alert-module_iconWrapper__5NtU- {\n  margin-right: 1rem; }\n\n.alert-module_content__a9vpO {\n  flex: 1; }\n\n.alert-module_actionButton__ZpuDJ {\n  margin: 0; }\n";
var styles$n = {"root":"alert-module_root__DQW41","primary":"alert-module_primary__iu0Wq","icon":"alert-module_icon__0xtkg","info":"alert-module_info__5PrZI","iconWrapper":"alert-module_iconWrapper__5NtU-","content":"alert-module_content__a9vpO","actionButton":"alert-module_actionButton__ZpuDJ"};
styleInject(css_248z$n);

const Alert = ({ action, actionIcon, actionLabel, actionVariant = 'primary', message, icon, variant = 'default' }) => {
    return (React__default.createElement("div", { className: classNames(styles$n.root, {
            [styles$n.primary]: variant === 'primary',
            [styles$n.secondary]: variant === 'secondary',
            [styles$n.success]: variant === 'success',
            [styles$n.info]: variant === 'info',
            [styles$n.danger]: variant === 'danger',
            [styles$n.warning]: variant === 'warning'
        }) },
        icon && (React__default.createElement("div", { className: styles$n.iconWrapper },
            React__default.createElement(Icon, { className: styles$n.icon, icon: icon }))),
        React__default.createElement("div", { className: styles$n.content }, message),
        Boolean(action) && (React__default.createElement(Button, { className: styles$n.actionButton, variant: actionVariant, icon: actionIcon, onClick: action }, actionLabel))));
};

var css_248z$m = "@use \"sass:math\";\n.pill-module_root__f-Exi {\n  align-items: center;\n  border-radius: 20px;\n  border-style: solid;\n  border-width: 2px;\n  display: inline-flex;\n  flex-shrink: 0;\n  flex-grow: 0;\n  font-size: 0.8rem;\n  margin: 0 0.1rem 0.2rem; }\n  .pill-module_root__f-Exi.pill-module_sizeSM__1wes5 {\n    font-size: 0.6rem; }\n  .pill-module_root__f-Exi.pill-module_sizeLG__t6yHN {\n    font-size: 1rem;\n    padding: 0.2rem; }\n\n.pill-module_label__2heeo,\n.pill-module_value__TtQc3 {\n  display: inline-block;\n  padding: 0.1rem 0.5rem; }\n\n.pill-module_value__TtQc3 {\n  margin-left: 0.2rem;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px; }\n\n.pill-module_icon__tfAjQ {\n  margin-left: 0.5rem; }\n\n.pill-module_default__xEF67 {\n  background-color: #ffffff;\n  border-color: #d9d9d9;\n  color: black; }\n  .pill-module_default__xEF67 .pill-module_value__TtQc3 {\n    background-color: #e6e6e6; }\n  @media (prefers-color-scheme: dark) {\n    .pill-module_default__xEF67 .pill-module_icon__tfAjQ,\n    .pill-module_default__xEF67 .pill-module_value__TtQc3,\n    .pill-module_default__xEF67 .pill-module_label__2heeo {\n      color: #000; } }\n\n.pill-module_primary__GnHHP {\n  background-color: #8d6b94;\n  border-color: #634b68; }\n  .pill-module_primary__GnHHP .pill-module_label__2heeo,\n  .pill-module_primary__GnHHP .pill-module_icon__tfAjQ {\n    color: white; }\n  .pill-module_primary__GnHHP .pill-module_value__TtQc3 {\n    background-color: #554059;\n    color: white; }\n\n.pill-module_secondary__oSDnT {\n  background-color: #b185a7;\n  border-color: #8e5b83; }\n  .pill-module_secondary__oSDnT .pill-module_label__2heeo,\n  .pill-module_secondary__oSDnT .pill-module_icon__tfAjQ {\n    color: white; }\n  .pill-module_secondary__oSDnT .pill-module_value__TtQc3 {\n    background-color: #7f5174;\n    color: white; }\n\n.pill-module_success__wRcmf {\n  background-color: #06d6a0;\n  border-color: #048c68; }\n  .pill-module_success__wRcmf .pill-module_label__2heeo,\n  .pill-module_success__wRcmf .pill-module_icon__tfAjQ {\n    color: white; }\n  .pill-module_success__wRcmf .pill-module_value__TtQc3 {\n    background-color: #037356;\n    color: white; }\n\n.pill-module_info__q-5Kq {\n  background-color: #7796cb;\n  border-color: #446cb2; }\n  .pill-module_info__q-5Kq .pill-module_label__2heeo,\n  .pill-module_info__q-5Kq .pill-module_icon__tfAjQ {\n    color: white; }\n  .pill-module_info__q-5Kq .pill-module_value__TtQc3 {\n    background-color: #3d619f;\n    color: white; }\n\n.pill-module_danger__cDGNE {\n  background-color: #ef476f;\n  border-color: #d71341; }\n  .pill-module_danger__cDGNE .pill-module_label__2heeo,\n  .pill-module_danger__cDGNE .pill-module_icon__tfAjQ {\n    color: white; }\n  .pill-module_danger__cDGNE .pill-module_value__TtQc3 {\n    background-color: #bf113a;\n    color: white; }\n\n.pill-module_warning__NJPR- {\n  background-color: #f2f3ae;\n  border-color: #e7e96b; }\n  .pill-module_warning__NJPR- .pill-module_label__2heeo,\n  .pill-module_warning__NJPR- .pill-module_icon__tfAjQ {\n    color: black; }\n  .pill-module_warning__NJPR- .pill-module_value__TtQc3 {\n    background-color: #e4e655;\n    color: black; }\n  @media (prefers-color-scheme: dark) {\n    .pill-module_warning__NJPR- .pill-module_icon__tfAjQ,\n    .pill-module_warning__NJPR- .pill-module_value__TtQc3,\n    .pill-module_warning__NJPR- .pill-module_label__2heeo {\n      color: #000; } }\n\n.pill-module_dark__5oAtq {\n  background-color: #212121;\n  border-color: black; }\n  .pill-module_dark__5oAtq .pill-module_label__2heeo,\n  .pill-module_dark__5oAtq .pill-module_icon__tfAjQ {\n    color: white; }\n  .pill-module_dark__5oAtq .pill-module_value__TtQc3 {\n    background-color: black;\n    color: white; }\n\n.pill-module_light__t49uX {\n  background-color: #ffffff;\n  border-color: #d9d9d9; }\n  .pill-module_light__t49uX .pill-module_label__2heeo,\n  .pill-module_light__t49uX .pill-module_icon__tfAjQ {\n    color: black; }\n  .pill-module_light__t49uX .pill-module_value__TtQc3 {\n    background-color: #cccccc;\n    color: black; }\n";
var styles$m = {"root":"pill-module_root__f-Exi","sizeSM":"pill-module_sizeSM__1wes5","sizeLG":"pill-module_sizeLG__t6yHN","label":"pill-module_label__2heeo","value":"pill-module_value__TtQc3","icon":"pill-module_icon__tfAjQ","default":"pill-module_default__xEF67","primary":"pill-module_primary__GnHHP","secondary":"pill-module_secondary__oSDnT","success":"pill-module_success__wRcmf","info":"pill-module_info__q-5Kq","danger":"pill-module_danger__cDGNE","warning":"pill-module_warning__NJPR-","dark":"pill-module_dark__5oAtq","light":"pill-module_light__t49uX"};
styleInject(css_248z$m);

/**
 * Generates a pill component,
 * which is a small rounded rectangle with a text inside or icon
 * @returns React.FC
 */
const Pill = ({ label, variant = 'default', icon, value, className, size = 'md' }) => {
    return (React__default.createElement("div", { className: classNames(styles$m.root, className, {
            [styles$m.default]: variant === 'default',
            [styles$m.primary]: variant === 'primary',
            [styles$m.secondary]: variant === 'secondary',
            [styles$m.success]: variant === 'success',
            [styles$m.warning]: variant === 'warning',
            [styles$m.danger]: variant === 'danger',
            [styles$m.info]: variant === 'info',
            [styles$m.light]: variant === 'light',
            [styles$m.dark]: variant === 'dark',
            [styles$m.sizeSM]: size === 'sm',
            [styles$m.sizeMD]: size === 'md',
            [styles$m.sizeLG]: size === 'lg'
        }) },
        Boolean(icon) && React__default.createElement(Icon, { className: styles$m.icon, icon: icon }),
        React__default.createElement("span", { className: styles$m.label }, label),
        value && React__default.createElement("span", { className: styles$m.value }, value)));
};

var css_248z$l = "@use \"sass:math\";\n.step-module_step__AmOI8 h3 {\n  text-align: center;\n  font-size: 1.4rem;\n  margin-top: 1rem;\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .step-module_step__AmOI8 h3 {\n      color: #fff; } }\n\n.step-module_description__V6pXT {\n  text-align: center;\n  font-size: 0.9rem;\n  margin-bottom: 2rem;\n  color: #848484; }\n";
var styles$l = {"step":"step-module_step__AmOI8","description":"step-module_description__V6pXT"};
styleInject(css_248z$l);

const Step = ({ children, className, description, title }) => {
    return (React__default.createElement("div", { className: classNames(styles$l.step, className) },
        React__default.createElement("h3", null, title),
        React__default.createElement("p", { className: styles$l.description }, description),
        children));
};

const StepperCTX = createContext({
    goNext: () => { },
    goBack: () => { },
    isInFirstStep: false,
    isInLastStep: false
});
const StepperProvider = StepperCTX.Provider;
StepperCTX.Consumer;

const StepperActions = ({ children, appendRender }) => {
    const { isInLastStep } = useContext(StepperCTX);
    return (React__default.createElement("div", { className: "flex flex-1 mt-4 justify-center" },
        children,
        appendRender?.({ isInLastStep })));
};

const StepperNext = ({ label }) => {
    const { goNext, isInLastStep, isValidStep } = useContext(StepperCTX);
    if (isInLastStep)
        return null;
    return (React__default.createElement(Button, { variant: "primary", rounded: true, onClick: goNext, disabled: !isValidStep, type: "button" }, label || 'Next step'));
};
// * Keep the dots visible when the page reloads
// * Hide the tooltip when the user scrolls down.
// * Basically there will be only one set of dots opened at the same time
// *

const StepperBack = ({ label }) => {
    const { goBack, isInFirstStep } = useContext(StepperCTX);
    if (isInFirstStep)
        return null;
    return (React__default.createElement(Button, { rounded: true, onClick: goBack, type: "button", variant: "light" }, label || 'Previous'));
};

const StepperFinish = ({ label, ...props }) => {
    const { goBack, isInLastStep } = useContext(StepperCTX);
    return (React__default.createElement(Button, { rounded: true, disabled: !isInLastStep, onClick: goBack, type: "button", variant: "success", ...props }, label || 'Finish'));
};

const StepWrapper = ({ children }) => {
    return React__default.createElement(React__default.Fragment, null, children);
};

var css_248z$k = "@use \"sass:math\";\n.stepper-module_stepperRoot__d2yiJ,\n.stepper-module_stepperStep__mwSSL,\n.stepper-module_stepperStepWrapper__hDUxK {\n  display: flex; }\n\n.stepper-module_stepperRoot__d2yiJ,\n.stepper-module_stepperStep__mwSSL,\n.stepper-module_stepperStepWrapper__hDUxK {\n  align-items: center;\n  justify-content: center; }\n\n.stepper-module_stepperRoot__d2yiJ {\n  flex: 1;\n  position: relative;\n  align-items: center;\n  justify-content: space-between; }\n\n.stepper-module_stepperStep__mwSSL {\n  flex: 1;\n  position: relative; }\n  .stepper-module_stepperStep__mwSSL::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 5px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 20px;\n    transform: translateY(-50%);\n    z-index: -1; }\n  .stepper-module_stepperStep__mwSSL.stepper-module_active__l5Rqf::after {\n    background-color: #8d6b94; }\n  .stepper-module_stepperStep__mwSSL:last-child::after {\n    display: none; }\n\n.stepper-module_stepperStepWrapper__hDUxK {\n  background-color: #d1d1d1;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px; }\n  .stepper-module_stepperStepWrapper__hDUxK span {\n    color: #848484; }\n  .stepper-module_stepperStepWrapper__hDUxK.stepper-module_active__l5Rqf {\n    background-color: #8d6b94; }\n    .stepper-module_stepperStepWrapper__hDUxK.stepper-module_active__l5Rqf span {\n      color: #fff;\n      font-size: 0.8rem; }\n";
var styles$k = {"stepperRoot":"stepper-module_stepperRoot__d2yiJ","stepperStep":"stepper-module_stepperStep__mwSSL","stepperStepWrapper":"stepper-module_stepperStepWrapper__hDUxK","active":"stepper-module_active__l5Rqf"};
styleInject(css_248z$k);

const Stepper = ({ children, onCompleted, stepsValidation, initialStep = 0 }) => {
    const [currentStep, setStep] = useState$1(initialStep);
    const stepsToRender = useMemo$1(() => {
        return React__default.Children.map(children, (child) => {
            if (React__default.isValidElement(child) && child.type === Step) {
                return child;
            }
            return null;
        })?.filter((item) => Boolean(item));
    }, [children]);
    const otherPieces = useMemo$1(() => {
        return React__default.Children.map(children, (child) => {
            if (React__default.isValidElement(child) && child.type === StepperActions) {
                return child;
            }
            return null;
        })?.filter((item) => Boolean(item));
    }, [children]);
    const totalSteps = useMemo$1(() => stepsToRender?.length || 0, [stepsToRender]);
    const handleNext = () => {
        let newStep = currentStep + 1;
        if (newStep < totalSteps) {
            setStep(newStep);
        }
        if (newStep === totalSteps - 1 && onCompleted) {
            onCompleted?.();
        }
    };
    const handleBack = () => {
        let newStep = currentStep - 1;
        if (newStep >= 0) {
            setStep(newStep);
        }
    };
    const isInLastStep = useMemo$1(() => currentStep === totalSteps - 1, [currentStep, totalSteps]);
    const isValidStep = useMemo$1(() => {
        if (stepsValidation && stepsValidation[currentStep] === false) {
            return false;
        }
        return true;
    }, [stepsValidation, currentStep]);
    const isInFirstStep = useMemo$1(() => currentStep === 0, [currentStep]);
    return (React__default.createElement(StepperProvider, { value: {
            goNext: handleNext,
            goBack: handleBack,
            isInFirstStep,
            isInLastStep,
            stepsValidation,
            isValidStep
        } },
        React__default.createElement("div", { className: styles$k.stepperRoot }, _.range(0, totalSteps).map((item, key) => (React__default.createElement("div", { className: classNames(styles$k.stepperStep, {
                [styles$k.active]: key < currentStep
            }), key: `step-${key}` },
            React__default.createElement("div", { className: classNames(styles$k.stepperStepWrapper, {
                    [styles$k.active]: key <= currentStep
                }) },
                React__default.createElement("span", null, item + 1)))))),
        stepsToRender?.[currentStep],
        otherPieces?.map((item, key) => (React__default.createElement(StepWrapper, { key: `step-${key}` }, item)))));
};

var css_248z$j = "@use \"sass:math\";\n.spinner-loader-module_loader__L1Fq1 {\n  display: inline-block;\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 3px solid rgba(141, 107, 148, 0.3);\n  border-radius: 50%;\n  border-top-color: #8d6b94;\n  animation: spinner-loader-module_spin__wFFZE 1s ease-in-out infinite;\n  -webkit-animation: spinner-loader-module_spin__wFFZE 1s ease-in-out infinite;\n  margin: 0 0.5rem; }\n\n.spinner-loader-module_md__o8ofm {\n  width: 2rem;\n  height: 2rem;\n  border-width: 6px; }\n\n.spinner-loader-module_lg__PNz-3 {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-width: 6px; }\n\n.spinner-loader-module_dark__3i42R {\n  border: 3px solid rgba(0, 0, 0, 0.3);\n  border-top-color: #000; }\n\n@keyframes spinner-loader-module_spin__wFFZE {\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes spinner-loader-module_spin__wFFZE {\n  to {\n    -webkit-transform: rotate(360deg); } }\n";
var styles$j = {"loader":"spinner-loader-module_loader__L1Fq1","spin":"spinner-loader-module_spin__wFFZE","md":"spinner-loader-module_md__o8ofm","lg":"spinner-loader-module_lg__PNz-3","dark":"spinner-loader-module_dark__3i42R"};
styleInject(css_248z$j);

const SpinnerLoader = ({ dark, size = 'md' }) => {
    return (React__default.createElement("div", { className: classNames(styles$j.loader, {
            [styles$j.dark]: dark,
            [styles$j.lg]: size === 'lg',
            [styles$j.md]: size === 'md'
        }) }));
};

const IconButton = forwardRef(({ icon, children, label, variant, onClick, classes, size = 'md', ...props }, ref) => {
    const handleClick = (e) => {
        e.stopPropagation();
        onClick?.(e);
    };
    const buttonRenderer = (React__default.createElement("button", { ...props, ref: ref, type: "button", className: classNames(styles$o.root, classes?.root, props?.className, {
            [styles$o.primary]: variant === 'primary',
            [styles$o.secondary]: variant === 'secondary',
            [styles$o.danger]: variant === 'danger',
            [styles$o.warning]: variant === 'warning',
            [styles$o.success]: variant === 'success',
            [styles$o.info]: variant === 'info',
            [styles$o.light]: variant === 'light',
            [styles$o.dark]: variant === 'dark',
            [styles$o.flat]: variant === 'flat',
            [styles$o.disabled]: props?.disabled,
            [styles$o.sizeMd]: size === 'md',
            [styles$o.sizeLg]: size === 'lg',
            [styles$o.sizeSm]: size === 'sm'
        }), onClick: handleClick, tabIndex: 0 }, children ? children : React__default.createElement(Icon, { className: styles$o.icon, icon: icon })));
    if (label) {
        return (React__default.createElement("div", { className: styles$o.withLabelWrapper },
            buttonRenderer,
            React__default.createElement("span", { className: classNames(styles$o.label, classes?.label) }, label)));
    }
    return buttonRenderer;
});

/**
 * Function to generate a random number between the given range.
 * @param config
 * @returns
 */
const generateRandom = (config) => {
    const { min = 0, max = 200000 } = config || {};
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Hook used to generate input ids, you can use it without
 * params in order to receive an auto generated id
 * if no id or name given the output will be a generated id
 * otherwise the hook decides whether id or name attribute (id has priority)
 * @param config
 * @returns
 */
const useInputId = (config) => {
    const { name, id } = config || {};
    return !id && !name ? `input-${generateRandom().toString()}` : id || name;
};

/**
 * Validator class
 * @param fields
 * @param otherConfig
 * @constructor
 * @example
 * const validator = new Validator(fields, { required: ["email"] });
 * const error = validator.validate({ field: "email", value: "test" });
 */
class Validator {
    fields = {};
    required;
    constructor(fields, otherConfig) {
        this.fields = fields;
        const { required } = otherConfig || {};
        this.required = required || [];
    }
    /**
     * Interprets a string of rules and validates the value
     * @param config
     * @returns
     */
    validateASString = (config) => {
        const { rules, value, form } = config;
        const rulesToValidate = rules.split('|');
        let error = '';
        for (const ruleItem of rulesToValidate) {
            const [rule, ...config] = ruleItem.split(':');
            switch (rule) {
                case 'required': {
                    error = this.validateRequired(value);
                    break;
                }
                case 'email': {
                    error = this.validateEmail(value);
                    break;
                }
                case 'min': {
                    const [min] = config;
                    error = this.validateMin(value, parseInt(min, 10));
                    break;
                }
                case 'max': {
                    const [max] = config;
                    error = this.validateMax(value, parseInt(max, 10));
                    break;
                }
                case 'match': {
                    const [fieldToMatch] = config;
                    error = this.matchField(value, this.fields[fieldToMatch]?.label || fieldToMatch, form[fieldToMatch]);
                }
            }
            // If an error was found we stop the search
            if (!_.isEmpty(error)) {
                break;
            }
        }
        return error;
    };
    /**
     * Checks if the given value is empty
     * @param value
     * @returns
     */
    validateRequired = (value) => {
        console.log('Validate Value: ', value);
        return _.isEmpty(value) ? 'Required' : null;
    };
    /**
     * Checks if the given value is a valid email
     * @param value
     * @returns
     */
    validateEmail = (value) => {
        const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return value.match(regExp) ? null : 'Invalid email';
    };
    /**
     * Checks if the given value is greather or equals to the given min
     * @param value
     * @param min
     * @returns
     */
    validateMin = (value, min) => {
        return value.length >= min ? null : `Must be greather or equals to ${min} characters`;
    };
    /**
     * Checks if the given value is lower or equals to the given max
     * @param value
     * @param max
     * @returns
     */
    validateMax = (value, max) => {
        return value.length >= max ? null : `Must be lower or equals to ${max} characters`;
    };
    /**
     * Checks if the given value matches the given field
     * @param value
     * @param fieldToMatch
     * @param currentValue
     * @returns
     */
    matchField = (value, fieldToMatch, currentValue) => {
        return value === currentValue ? null : `Must match ${fieldToMatch}`;
    };
    /**
     * Executes the validation of the given field
     * @param config
     * @returns
     */
    validate = (config) => {
        const { field, value, form } = config;
        const rules = this.fields[field]?.rules;
        if (this.required.includes(field) && _.isEmpty(value)) {
            if (typeof value === 'number' && value > 0) {
                return null;
            }
            return `* required`;
        }
        if (typeof rules === 'string') {
            return this.validateASString({ field, rules, value, form });
        }
        return null;
    };
}

/**
 * Hook to manage forms
 * @param config
 * @returns
 */
const useForm = (config) => {
    const { defaultValues, fields, required } = config || { defaultValues: {} };
    const [form, setForm] = useState$1(defaultValues);
    const validator = useRef(new Validator(fields, {
        required: required
    })).current;
    const processValue = useCallback$1((processorConfig) => {
        const { processor, field, form, type, checked } = processorConfig;
        const [processorName] = processor.split(':');
        if (processorName === 'switchGroup' && type === 'checkbox') {
            const otherFields = Object.keys(fields || {}).filter((key) => {
                const fieldConfig = fields ? fields[key] : {};
                return fieldConfig?.processor?.includes(processor);
            });
            const groupValue = otherFields.reduce((accu, currentKey) => ({
                ...accu,
                [currentKey]: false
            }), []);
            return { ...form, ...groupValue, [field]: checked };
        }
    }, [fields]);
    /**
     * Handles the change of the form fields
     */
    const handleChange = useCallback$1((e) => {
        const { name, value, type, checked } = e.target;
        const config = fields ? fields[name] : {};
        if (config?.processor) {
            const newValue = processValue({
                processor: config?.processor,
                form,
                field: name,
                currentValue: value,
                type,
                checked: Boolean(checked)
            });
            setForm(newValue);
        }
        else {
            setForm({
                ...form,
                [name]: value
            });
        }
    }, [form, fields, processValue]);
    /**
     * Output form data buit from the configuration of the fields
     */
    const [formData, isValidForm, fieldsWithErrors] = useMemo$1(() => {
        const config = {};
        let hasError = false;
        const fieldsWithErrors = [];
        Object.entries(fields || {}).forEach((item) => {
            const [inputId, inputConfig] = item;
            const rules = inputConfig?.rules;
            let error = null;
            const isRequired = required?.includes(inputId);
            if (rules || required?.includes(inputId)) {
                error = validator.validate({
                    field: inputId,
                    value: (form || {})[inputId],
                    form
                });
            }
            const defaultValue = (defaultValues || {})[inputId] || inputConfig?.default;
            config[inputId] = {
                id: inputId,
                name: inputId,
                label: inputConfig?.label || inputId,
                placeholder: inputConfig?.placeholder,
                value: (form ? form[inputId] : defaultValue),
                onChange: handleChange,
                renderer: inputConfig?.renderer,
                inputProps: inputConfig?.inputProps,
                sourceProps: inputConfig?.sourceProps,
                required: isRequired,
                error
            };
            if (!config[inputId]?.inputProps) {
                delete config[inputId]?.inputProps;
            }
            if (!config[inputId]?.sourceProps) {
                delete config[inputId]?.sourceProps;
            }
            if (Boolean(error)) {
                fieldsWithErrors.push(inputId);
            }
            if (!hasError && Boolean(error)) {
                hasError = true;
            }
        });
        return [config, !hasError, fieldsWithErrors];
    }, [form, fields, handleChange, validator, defaultValues, required]);
    const changeForm = useCallback$1((newForm) => {
        setForm({
            ...form,
            ...newForm
        });
    }, [form]);
    const clearForm = useCallback$1(() => {
        setForm(defaultValues);
    }, [defaultValues]);
    const fieldsFilled = useCallback$1((fields, form) => {
        let valid = true;
        if (!fields) {
            return true;
        }
        fields.forEach((field) => {
            if (!form?.[field] || fieldsWithErrors.includes(field)) {
                valid = false;
            }
        });
        return valid;
    }, [fieldsWithErrors]);
    delete formData.isValidForm;
    return [
        formData,
        form,
        {
            onChange: handleChange,
            isValidForm,
            changeForm,
            fieldsFilled,
            clearForm
        }
    ];
};

var css_248z$i = ".media-query-module_mediaWrapper__p8cKU {\n  position: fixed;\n  bottom: 0;\n  right: 10px;\n  z-index: 20000;\n  background-color: rgba(255, 255, 255, 0.5); }\n";
var styles$i = {"mediaWrapper":"media-query-module_mediaWrapper__p8cKU"};
styleInject(css_248z$i);

const MediaQueryCTX = createContext({
    currentRes: 'xl',
    isIn: () => false
});
const MediaQueryProviderProvider = MediaQueryCTX.Provider;
MediaQueryCTX.Consumer;
const MediaQueryProvider = ({ children }) => {
    const [loaded, setLoaded] = useState$1(false);
    const [res, setResolution] = useState$1({
        width: 0,
        height: 0
    });
    useEffect(() => {
        const handleUpdate = () => {
            setResolution({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleUpdate);
        return () => {
            window.removeEventListener('resize', handleUpdate);
        };
    }, []);
    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            setResolution({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
    }, [loaded]);
    const currentRes = useMemo$1(() => {
        if (res.width < 479)
            return 'xs';
        if (res.width < 719)
            return 'sm';
        if (res.width < 959)
            return 'md';
        if (res.width < 1200)
            return 'lg';
        return 'xl';
    }, [res.width]);
    const isIn = useCallback$1((res) => {
        return res.includes(currentRes);
    }, [currentRes]);
    return (React__default.createElement(MediaQueryProviderProvider, { value: {
            currentRes,
            isIn
        } },
        res.width > 0 && res.height > 0 && children,
        React__default.createElement("div", { className: styles$i.mediaWrapper },
            "Resolution: w: ",
            res.width,
            " | h: ",
            res.height,
            " | ",
            currentRes)));
};

const useMediaQuery = () => {
    const context = useContext(MediaQueryCTX);
    return context;
};

/**
 * Detect click outside of an element
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutsideEffect(ref, () => {
 *  // Do something
 * });
 * @param ref The element you want to detect click outside
 * @param callBack The callback function when click outside
 * @returns
 */
const useClickOutsideEffect = (ref, callBack) => {
    const [mounted, setMounted] = useState$1(false);
    useEffect(() => {
        const handleClickOutsite = (event) => {
            if (!ref.current)
                return;
            if (ref.current.contains(event.target))
                return;
            callBack?.();
        };
        if (!ref.current || !mounted)
            return;
        document.addEventListener('click', handleClickOutsite);
        return () => {
            document.removeEventListener('click', handleClickOutsite);
        };
    }, [ref, callBack, mounted]);
    useEffect(() => {
        if (!mounted) {
            setMounted(true);
        }
    }, [mounted]);
    return null;
};

var css_248z$h = "@use \"sass:math\";\n.input-module_root__xcWOB {\n  align-items: flex-end;\n  display: flex; }\n\n.input-module_input__9x0t6 {\n  background-color: #ffffff;\n  border: 1px solid #b3b3b3;\n  border-radius: 20px;\n  color: #000;\n  max-width: 100%;\n  min-height: 2.5rem;\n  padding: 0.2rem 1rem;\n  width: 100%; }\n  .input-module_input__9x0t6::placeholder {\n    color: #b3b3b3;\n    transition: opacity 0.2s ease-in-out; }\n  .input-module_input__9x0t6.input-module_withLabel__m6cZE {\n    margin-top: 1.5rem; }\n    .input-module_input__9x0t6.input-module_withLabel__m6cZE::placeholder {\n      opacity: 0; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_input__9x0t6 {\n      color: #fff;\n      background-color: #292929;\n      border-color: #8f8f8f;\n      border: 1px solid #767676; }\n      .input-module_input__9x0t6::placeholder {\n        color: #5c5c5c; } }\n\n.input-module_isRequiredField__Xx5qd {\n  margin-bottom: 1rem; }\n\n.input-module_inputWrapper__qSGvA {\n  flex: 1;\n  position: relative; }\n\n.input-module_label__sQuAx {\n  display: block;\n  left: 1rem;\n  margin: 0.2rem 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_label__sQuAx.input-module_label__sQuAx {\n      color: #fff; } }\n\n.input-module_floatingLabel__WrOdN {\n  bottom: 0.75rem;\n  margin: 0;\n  position: absolute;\n  transition: bottom 0.2s ease-in-out, left 0.2s ease-in-out, font-size 0.2s ease-in-out; }\n\n.input-module_input__9x0t6:focus + .input-module_label__sQuAx,\n.input-module_withValue__wYYkt + .input-module_label__sQuAx {\n  bottom: calc(100% - 1.25rem);\n  font-size: 0.9rem;\n  font-weight: 500;\n  left: 0.2rem; }\n\n.input-module_input__9x0t6:focus {\n  outline: none;\n  border-color: #8d6b94; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_input__9x0t6:focus {\n      border-color: #fff; } }\n  .input-module_input__9x0t6:focus::placeholder {\n    opacity: 1; }\n\n.input-module_icon__JQ0Uo {\n  position: absolute;\n  bottom: 0.75rem;\n  left: 1rem;\n  pointer-events: none;\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_icon__JQ0Uo {\n      color: #fff; } }\n\n.input-module_trailingIcon__ixXtK {\n  right: 1rem;\n  left: auto; }\n\n.input-module_withLeadingIcon__3vKMc {\n  padding-left: 2.5rem; }\n\n.input-module_withTrailingIcon__80V4h {\n  padding-right: 1.6rem; }\n\n.input-module_actionIcon__hhYVt {\n  position: relative;\n  margin-left: 0.25rem;\n  color: rgba(0, 0, 0, 0.5); }\n\n.input-module_maxDisplay__2ajTW {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7rem;\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_maxDisplay__2ajTW {\n      color: rgba(255, 255, 255, 0.4); } }\n";
var styles$h = {"root":"input-module_root__xcWOB","input":"input-module_input__9x0t6","withLabel":"input-module_withLabel__m6cZE","isRequiredField":"input-module_isRequiredField__Xx5qd","inputWrapper":"input-module_inputWrapper__qSGvA","label":"input-module_label__sQuAx","floatingLabel":"input-module_floatingLabel__WrOdN","withValue":"input-module_withValue__wYYkt","icon":"input-module_icon__JQ0Uo","trailingIcon":"input-module_trailingIcon__ixXtK","withLeadingIcon":"input-module_withLeadingIcon__3vKMc","withTrailingIcon":"input-module_withTrailingIcon__80V4h","actionIcon":"input-module_actionIcon__hhYVt","maxDisplay":"input-module_maxDisplay__2ajTW"};
styleInject(css_248z$h);

var css_248z$g = "@use \"sass:math\";\n.form-control-module_root__DeA9S {\n  flex: 0 0 auto;\n  max-width: 100%;\n  position: relative;\n  box-sizing: border-box; }\n\n.form-control-module_error__dWO81 {\n  color: #ef476f;\n  font-size: 0.8rem;\n  font-weight: 400;\n  position: absolute;\n  top: 100%;\n  left: 1rem;\n  width: 100%; }\n";
var styles$g = {"root":"form-control-module_root__DeA9S","error":"form-control-module_error__dWO81"};
styleInject(css_248z$g);

const FormControl = ({ children, className, error, hideRequired, ...props }) => {
    return (React__default.createElement("div", { className: classNames(styles$g.root, className), ...props },
        children,
        !hideRequired && React__default.createElement(React__default.Fragment, null, Boolean(error) && React__default.createElement("p", { className: styles$g.error }, error))));
};

var css_248z$f = "@use \"sass:math\";\n.label-module_root__5HbZT {\n  color: #7f5174;\n  font-weight: 400; }\n  @media (prefers-color-scheme: dark) {\n    .label-module_root__5HbZT {\n      color: #000; } }\n";
var styles$f = {"root":"label-module_root__5HbZT"};
styleInject(css_248z$f);

/**
 * Facade for label element. It's a simple label element.
 * any common functinoality should be added here.
 * @returns React.FC
 */
const Label = ({ children, className, ...props }) => {
    return (React__default.createElement("label", { className: classNames(styles$f.root, className), ...props }, children));
};

const trimeSpacesEvent = (evt, config) => {
    const { maxEndingSpaces = 4 } = config;
    if (evt.target?.value?.length > 0) {
        evt.target.value = evt.target?.value?.trimStart();
    }
    if (maxEndingSpaces > 0 && evt.target?.value?.length > 0) {
        const [matches] = evt.target?.value?.match(/(\s|\r\n|\r|\n)+$/) || [];
        if (matches && matches?.length >= maxEndingSpaces) {
            evt.target.value = evt.target?.value?.trimEnd();
        }
    }
    return evt;
};

const InputBase = forwardRef(({ action, actionIcon, actionRef, actionVariant, className, classes, disableAction, error, floatingLabel, hideMax, id, isNumeric, label, leadingIcon, leadingComponent, max = 200, maxEndingSpaces, name, onChange, onlyInput, trailingIcon, trailingComponent, trimSpaces = true, value, hideRequired, ...props }, ref) => {
    const htmlId = useInputId({ id, name });
    const handleChangeProxy = useCallback$1((event) => {
        /**
         * Todo: Implement string, number, email validations.
         */
        onChange?.(trimeSpacesEvent(event, { maxEndingSpaces }));
    }, [onChange]);
    const hasValue = useMemo$1(() => value?.length > 0, [value]);
    const inputRender = useMemo$1(() => {
        return (React__default.createElement("input", { className: classNames(styles$h.input, className, {
                [styles$h.withValue]: hasValue,
                [styles$h.withLabel]: Boolean(label) && floatingLabel,
                [styles$h.withLeadingIcon]: Boolean(leadingIcon),
                [styles$h.withTrailingIcon]: Boolean(trailingIcon)
            }), id: htmlId, maxLength: max, name: name, onChange: handleChangeProxy, ref: ref, value: value || '', ...props }));
    }, [props, htmlId, max, name, className]);
    const length = useMemo$1(() => value?.length || 0, [value]);
    const renderLabel = useMemo$1(() => (React__default.createElement(Label, { htmlFor: htmlId, className: classNames(styles$h.label, {
            [styles$h.labelWithLeadingIcon]: Boolean(leadingIcon),
            [styles$h.floatingLabel]: floatingLabel
        }) }, label)), [floatingLabel]);
    if (onlyInput) {
        return inputRender;
    }
    return (React__default.createElement(FormControl, { error: error, hideRequired: hideRequired, className: classNames(styles$h.root, classes?.wrapper, {
            [styles$h.isRequiredField]: Boolean(props.required)
        }) },
        leadingComponent,
        React__default.createElement("div", { className: styles$h.inputWrapper },
            leadingIcon && React__default.createElement(Icon, { icon: leadingIcon, className: styles$h.icon }),
            Boolean(label) && !floatingLabel && renderLabel,
            inputRender,
            Boolean(label) && floatingLabel && renderLabel,
            trailingIcon && (React__default.createElement(Icon, { icon: trailingIcon, className: classNames(styles$h.icon, styles$h.trailingIcon) })),
            !hideMax && hasValue && (React__default.createElement("span", { className: styles$h.maxDisplay }, `${length}/${max}`))),
        trailingComponent,
        Boolean(action) && (React__default.createElement(IconButton, { ref: actionRef, icon: actionIcon, className: styles$h.actionIcon, onClick: action, variant: actionVariant, disabled: disableAction }))));
});

/**
 * Component documentation...
 * @returns React.FC
 */
const TextField = forwardRef(({ ...props }, ref) => {
    return React__default.createElement(InputBase, { ref: ref, ...props });
});

const PasswordField = ({ ...props }) => {
    const [visible, setVisible] = useState$1(false);
    const toggleVisible = () => setVisible(!visible);
    return (React__default.createElement(InputBase, { ...props, type: visible ? 'text' : 'password', action: toggleVisible, actionIcon: visible ? 'eye-slash' : 'eye' }));
};

var css_248z$e = "@use \"sass:math\";\n.select-field-module_root__l5e-P {\n  margin-bottom: 1rem; }\n\n.select-field-module_inputLabel__Cex2T {\n  display: block;\n  left: 1rem;\n  margin: 0.2rem 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .select-field-module_inputLabel__Cex2T.select-field-module_inputLabel__Cex2T {\n      color: #fff; } }\n\n.select-field-module_control__24wTu {\n  color: red; }\n\n.select-field-module_formErrorMsg__EWFH2 {\n  font-size: 0.9rem;\n  margin-left: 1rem; }\n";
var styles$e = {"root":"select-field-module_root__l5e-P","inputLabel":"select-field-module_inputLabel__Cex2T","control":"select-field-module_control__24wTu","formErrorMsg":"select-field-module_formErrorMsg__EWFH2"};
styleInject(css_248z$e);

const useDeviceMode = () => {
    const currentMode = useMemo$1(() => {
        return window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    }, []);
    const [mode, setMode] = useState$1(currentMode);
    const toggleMode = useCallback$1(() => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }, [mode]);
    return { mode, toggleMode };
};

const SelectField = ({ label: inputLabel, placeholder = '', error, id, onChange, name, options = [], value, loading }) => {
    const { mode } = useDeviceMode();
    const handleChange = (data) => {
        onChange?.({
            target: {
                name: name || '',
                value: data.value
            }
        });
    };
    const defaultSelected = useMemo$1(() => {
        return options?.find((item) => item.value === value);
    }, [options, value]);
    return (React__default.createElement(FormControl, { error: error, className: styles$e.root },
        inputLabel && (React__default.createElement(Label, { htmlFor: id, className: styles$e.inputLabel }, inputLabel)),
        !loading && (React__default.createElement(Select, { placeholder: placeholder, options: [
                ...(Boolean(placeholder) ? [{ label: placeholder, value: '' }] : []),
                ...options
            ], classNamePrefix: 'react-select-control__', onChange: handleChange, isLoading: loading, menuPortalTarget: document.body, styles: {
                control: (base) => ({
                    ...base,
                    borderRadius: 20,
                    border: mode === 'dark' ? '1px solid #8f8f8f' : '1px solid #b3b3b3',
                    outline: 'none',
                    backgroundColor: mode === 'dark' ? '#292929' : '#ffffff'
                }),
                input: (base) => ({
                    ...base,
                    color: mode === 'dark' ? '#FFF' : '#000'
                }),
                menuPortal: (base) => ({
                    ...base,
                    zIndex: 20000
                })
            }, value: defaultSelected }))));
};

var css_248z$d = "@use \"sass:math\";\n.check-box-field-module_root__Owe-O {\n  width: 25px;\n  height: 25px;\n  position: relative;\n  display: flex;\n  justify-content: center; }\n  .check-box-field-module_root__Owe-O input {\n    display: none; }\n\n.check-box-field-module_check__TWIEp {\n  width: 25%;\n  height: 50%;\n  display: block;\n  border-color: #06d6a0;\n  border-bottom-width: 3px;\n  border-right-width: 3px;\n  position: absolute;\n  transform-origin: center;\n  transform: rotate(45deg) translate(0.2rem, 0.2rem); }\n  .check-box-field-module_check__TWIEp ::before,\n  .check-box-field-module_check__TWIEp ::after {\n    content: ''; }\n\n.check-box-field-module_disabled__B8wBD {\n  opacity: 0.25;\n  cursor: not-allowed; }\n\n.check-box-field-module_control__MXB8J {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: inline-block;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  border: 1px solid black;\n  cursor: pointer; }\n  @media (prefers-color-scheme: dark) {\n    .check-box-field-module_control__MXB8J {\n      border: 2px solid white; } }\n\n@keyframes check-box-field-module_mark-check__j-h7X {\n  0% {\n    width: 0;\n    height: 3px; }\n  50% {\n    width: 25%; }\n  100% {\n    height: 50%; } }\n";
var styles$d = {"root":"check-box-field-module_root__Owe-O","check":"check-box-field-module_check__TWIEp","disabled":"check-box-field-module_disabled__B8wBD","control":"check-box-field-module_control__MXB8J","mark-check":"check-box-field-module_mark-check__j-h7X"};
styleInject(css_248z$d);

const CheckBoxField = ({ className, onChange, name, value, checked, label, classes, disabled }) => {
    const isChecked = useMemo$1(() => Boolean(value) || checked, [checked, value]);
    const handleChange = useCallback$1((e) => {
        e.stopPropagation();
        if (!disabled) {
            onChange?.({
                target: {
                    name: name || '',
                    checked: !Boolean(isChecked),
                    type: 'checkbox'
                }
            });
        }
    }, [onChange, name, isChecked, disabled]);
    const handleKeyDown = (e) => {
        const { key, code } = e;
        if (['Enter'].includes(key) || ['Space'].includes(code)) {
            if (!disabled) {
                onChange?.({
                    target: {
                        name: name || '',
                        checked: !Boolean(isChecked),
                        type: 'checkbox'
                    }
                });
            }
        }
    };
    const inputRenderer = (React__default.createElement("div", { className: classNames(styles$d.root, {
            [styles$d.disabled]: Boolean(disabled)
        }, className) },
        isChecked && React__default.createElement("span", { className: styles$d.check }),
        React__default.createElement("input", { type: "checkbox", disabled: disabled }),
        React__default.createElement("label", { htmlFor: "", onClick: handleChange, className: styles$d.control })));
    if (!label)
        return inputRenderer;
    return (React__default.createElement(FormControl, { className: classNames('flex items-center mb-2', classes?.wrapper) },
        inputRenderer,
        React__default.createElement("span", { className: "textWithMode block pl-2 ml-2 cursor-pointer z-1", tabIndex: 0, onClick: handleChange, onKeyDown: handleKeyDown }, label)));
};

var css_248z$c = "@use \"sass:math\";\n.textarea-module_textAreaRoot__BTLb5 {\n  width: 100%;\n  position: relative;\n  margin-bottom: 1rem; }\n\n.textarea-module_inputLabel__sNfSq {\n  display: block;\n  left: 1rem;\n  margin: 0.2rem 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .textarea-module_inputLabel__sNfSq.textarea-module_inputLabel__sNfSq {\n      color: #fff; } }\n\n.textarea-module_textArea__v8bRT {\n  display: block;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  margin: 0px 0px 10px 0px;\n  field-sizing: content;\n  min-height: 1lh;\n  width: 100%;\n  border: 1px solid #b3b3b3;\n  resize: none;\n  background-color: #ffffff; }\n  .textarea-module_textArea__v8bRT:focus {\n    outline: none; }\n  @media (prefers-color-scheme: dark) {\n    .textarea-module_textArea__v8bRT {\n      color: #fff;\n      background-color: #292929;\n      border-color: darkgray; } }\n\n.textarea-module_filled__OQ2A- {\n  border: none; }\n\n.textarea-module_charCount__nw4qg {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  font-size: 0.6rem;\n  color: rgba(0, 0, 0, 0.5); }\n  @media (prefers-color-scheme: dark) {\n    .textarea-module_charCount__nw4qg {\n      color: #fff;\n      opacity: 0.8; } }\n";
var styles$c = {"textAreaRoot":"textarea-module_textAreaRoot__BTLb5","inputLabel":"textarea-module_inputLabel__sNfSq","textArea":"textarea-module_textArea__v8bRT","filled":"textarea-module_filled__OQ2A-","charCount":"textarea-module_charCount__nw4qg"};
styleInject(css_248z$c);

const TextAreaField = forwardRef(({ label, error, value = '', max = 255, onChange, hideMax, trimSpaces = true, maxEndingSpaces = 4, className, classes, ...props }, ref) => {
    const defaultRef = useRef(null);
    const textAreaRef = ref || defaultRef;
    const trimEventSpaces = useCallback$1((evt) => {
        if (trimSpaces && evt.target?.value?.length > 0) {
            evt.target.value = evt.target?.value?.trimStart();
        }
        if (maxEndingSpaces > 0 && evt.target?.value?.length > 0) {
            const [matches] = evt.target?.value?.match(/(\s|\r\n|\r|\n)+$/) || [];
            if (matches && matches?.length >= maxEndingSpaces) {
                evt.target.value = evt.target?.value?.trimEnd();
            }
        }
        return evt;
    }, [trimSpaces, maxEndingSpaces]);
    const handleChangeProxy = useCallback$1((evt) => {
        onChange?.(trimEventSpaces(evt));
    }, [onChange, trimEventSpaces]);
    // useLayoutEffect(() => {
    //     if (textAreaRef.current && textAreaRef.current.style) {
    //         textAreaRef.current.style.height = `${Math.max(
    //             textAreaRef.current.scrollHeight,
    //             TEXT_AREA_INPUT_HEIGHT
    //         )}px`
    //     }
    // }, [value])
    return (React__default.createElement(FormControl, { className: classNames(styles$c.textAreaRoot, classes?.root) },
        label && (React__default.createElement(Label, { className: styles$c.inputLabel, htmlFor: props?.id },
            label,
            error && React__default.createElement("span", { className: styles$c.formErrorMsg }, error))),
        React__default.createElement("textarea", { ref: textAreaRef, onChange: handleChangeProxy, maxLength: max, className: classNames(styles$c.textArea, className), value: value || '', ...props }),
        max && !hideMax && (React__default.createElement("span", { className: styles$c.charCount },
            `${value || ''}`?.length,
            "/",
            max))));
});

var css_248z$b = ".number-field-module_iconButton__ZBKjd {\n  position: relative;\n  bottom: 0.125rem; }\n";
var styles$b = {"iconButton":"number-field-module_iconButton__ZBKjd"};
styleInject(css_248z$b);

const NumberField = ({ value: defValue, min = 0, max = 1000, step = 1, onChange, name, addVariant, subVariant, ...props }) => {
    const inputRef = useRef({}).current;
    const [value, setValue] = React__default.useState(isNaN(defValue) ? 0 : parseInt(defValue, 10));
    const triggerChange = useCallback$1((newValue) => {
        onChange?.({
            target: {
                name: name || '',
                value: newValue
            }
        });
    }, [name, onChange]);
    const increase = useCallback$1(() => {
        let newValue = value + step;
        if (newValue > max) {
            newValue = max;
        }
        setValue(newValue);
        triggerChange(newValue);
    }, [max, value, step, triggerChange]);
    const decrease = useCallback$1(() => {
        let newValue = value - step;
        if (newValue < min) {
            newValue = min;
        }
        setValue(newValue);
        triggerChange(newValue);
    }, [min, value, step, triggerChange]);
    const handleChangeValue = useCallback$1((e) => {
        const { value } = e?.target;
        const valueToCheck = parseInt(value, 10);
        let newValue = valueToCheck;
        // Validate if the value is a number so I can set the state
        if (!isNaN(valueToCheck)) {
            if (valueToCheck < max) {
                newValue = valueToCheck;
                // setValue(valueToCheck);
            }
            else if (valueToCheck < min) {
                // setValue(min);
                newValue = min;
            }
            else {
                // setValue(max);
                newValue = max;
            }
        }
        else {
            // setValue(min);
            newValue = min;
        }
        setValue(newValue);
        triggerChange(newValue);
    }, [min, max, triggerChange]);
    const handleWheel = useCallback$1((e) => {
        e.preventDefault();
    }, []);
    useEffect(() => {
        if (inputRef?.current) {
            inputRef?.current.addEventListener('wheel', handleWheel);
        }
        return () => {
            if (inputRef?.current) {
                inputRef?.current.removeEventListener('wheel', handleWheel);
            }
        };
    }, [handleWheel, inputRef]);
    useEffect(() => {
        if (defValue !== value) {
            console.log('Changed value!');
            setValue(parseInt(defValue, 10));
        }
    }, [defValue, value]);
    return (React__default.createElement(TextField, { ref: (ref) => {
            inputRef.current = ref;
        }, hideMax: true, ...props, leadingComponent: React__default.createElement(IconButton, { tabIndex: -1, className: styles$b.iconButton, icon: "minus", disabled: value === min, onClick: decrease, variant: subVariant }), type: "number", onChange: handleChangeValue, trailingComponent: React__default.createElement(IconButton, { tabIndex: -1, className: styles$b.iconButton, icon: "add", disabled: value === max, onClick: increase, variant: addVariant }), value: value.toString() }));
};
var NumberField$1 = React__default.memo(NumberField);

var css_248z$a = "@use \"sass:math\";\n.input-control-module_root__FvlwC {\n  display: flex;\n  flex-direction: column; }\n\n.input-control-module_input__lvLgx {\n  width: 4rem;\n  text-align: center;\n  max-width: 100%;\n  min-height: 1.5rem;\n  padding: 0rem 0.5rem;\n  font-size: 1.5rem;\n  margin: 0;\n  background-color: #ffffff;\n  border: 1px solid #b3b3b3;\n  border-radius: 20px;\n  color: #000; }\n  .input-control-module_input__lvLgx::placeholder {\n    color: #ffffff;\n    transition: color 0.2s; }\n  @media (prefers-color-scheme: dark) {\n    .input-control-module_input__lvLgx {\n      color: #fff;\n      background-color: #292929;\n      border-color: black; }\n      .input-control-module_input__lvLgx::placeholder {\n        color: #292929; } }\n\n.input-control-module_input__lvLgx:focus {\n  border-width: 1px;\n  outline: none;\n  border-color: #8d6b94; }\n  .input-control-module_input__lvLgx:focus::placeholder {\n    color: rgba(0, 0, 0, 0.4); }\n  @media (prefers-color-scheme: dark) {\n    .input-control-module_input__lvLgx:focus::placeholder {\n      color: rgba(255, 255, 255, 0.4); } }\n";
var styles$a = {"root":"input-control-module_root__FvlwC","input":"input-control-module_input__lvLgx"};
styleInject(css_248z$a);

const InputControl = ({ value, onChange, twoDigitMax = 59, oneDigitMax = 5, autoFocus }) => {
    const handleChange = useCallback$1((e) => {
        const { value } = e.target;
        if (value.length > 2)
            return;
        if (value.length === 2 && parseInt(value) > twoDigitMax)
            return;
        if (value.length === 1 && parseInt(value) > oneDigitMax)
            return;
        onChange(value);
    }, [onChange, oneDigitMax, twoDigitMax]);
    const handleBlur = useCallback$1(() => {
        if (value.length === 1) {
            onChange(`0${value}`);
        }
    }, [value, onChange]);
    const formatValue = (valueToFormat) => {
        return valueToFormat < 10 ? `0${valueToFormat}` : `${valueToFormat}`;
    };
    const handleUp = useCallback$1(() => {
        let newValue = parseInt(value) + 1;
        if (newValue > twoDigitMax)
            newValue = 0;
        onChange(formatValue(newValue));
    }, [value, onChange, twoDigitMax]);
    const handleDown = useCallback$1(() => {
        let newValue = parseInt(value) - 1;
        if (newValue < 0)
            newValue = twoDigitMax;
        onChange(formatValue(newValue));
    }, [value, onChange, twoDigitMax]);
    return (React__default.createElement("div", { className: styles$a.root },
        React__default.createElement("button", { tabIndex: -1, className: styles$a.actionButton, onClick: handleUp },
            React__default.createElement(Icon, { icon: "chevron-up" })),
        React__default.createElement("input", { tabIndex: 0, autoFocus: autoFocus, placeholder: "mm", value: value, onChange: handleChange, className: styles$a.input, onBlur: handleBlur }),
        React__default.createElement("button", { tabIndex: -1, className: styles$a.actionButton, onClick: handleDown },
            React__default.createElement(Icon, { icon: "chevron-down" }))));
};

var css_248z$9 = "@use \"sass:math\";\n.time-field-module_wrapper__C-I0x {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n\n.time-field-module_timeSeparator__Cp93w {\n  font-size: 2rem;\n  color: #000;\n  margin: 0 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .time-field-module_timeSeparator__Cp93w {\n      color: #fff; } }\n";
var styles$9 = {"wrapper":"time-field-module_wrapper__C-I0x","timeSeparator":"time-field-module_timeSeparator__Cp93w"};
styleInject(css_248z$9);

const { useState, useCallback, useMemo } = React;
const TimeField = ({ value, onChange, name, label, ...props }) => {
    const defaultTime = useMemo(() => (value ? moment(value, 'HH:mm') : moment()), [value]);
    const [minutes, setMinutes] = useState(value ? defaultTime.format('mm') : '00');
    const [hours, setHours] = useState(value ? defaultTime.format('HH') : '00');
    const formattedValue = useMemo(() => `${hours}:${minutes}`, [hours, minutes]);
    const handleChange = useCallback((newVal) => {
        onChange?.({
            target: {
                name: name || '',
                value: newVal
            }
        });
    }, [onChange, name]);
    const handleChangeMinutes = useCallback((minutesVal) => {
        const newVal = `${hours}:${minutesVal}`;
        setMinutes(minutesVal);
        handleChange(newVal);
    }, [handleChange, hours]);
    const handleChangeHours = useCallback((hoursVal) => {
        const newVal = `${hoursVal}:${minutes}`;
        setHours(hoursVal);
        handleChange(newVal);
    }, [minutes, handleChange]);
    React.useEffect(() => {
        if (value !== formattedValue) {
            console.log('The value changed!: ', value, formattedValue);
            const newTime = moment(value, 'HH:mm');
            setMinutes(newTime.format('mm'));
            setHours(newTime.format('HH'));
        }
    }, [formattedValue, value]);
    return (React.createElement("div", { className: styles$9.root },
        React.createElement(Label, null, label),
        React.createElement("input", { type: "hidden", value: formattedValue, ...props }),
        React.createElement("div", { className: styles$9.wrapper },
            React.createElement(InputControl, { autoFocus: props?.autoFocus, value: hours, onChange: handleChangeHours, oneDigitMax: 9, twoDigitMax: 23 }),
            React.createElement("span", { className: styles$9.timeSeparator }, ":"),
            React.createElement(InputControl, { value: minutes, onChange: handleChangeMinutes }))));
};

// import 'react-datepicker/dist/react-datepicker.css'
const DateField = ({}) => {
    // const initialDate = useRef(value ? moment(value as string, format) : moment()).current
    // const inputRef = useRef<HTMLInputElement>(null)
    // const [currentDate, setCurrentDate] = useState(initialDate.toDate())
    const handleChange = () => {
        // const handleChange = (date: any) => {
        // const parseDate = moment(date)
        // setCurrentDate(parseDate.toDate())
        // onChange?.({
        //     target: {
        //         name: name || '',
        //         value: parseDate.format('YYYY-MM-DD')
        //     }
        // } as any)
    };
    // const handleInputAction = useCallback(() => {
    //     if (inputRef?.current) {
    //         ;(inputRef?.current as any)?.deferFocusInput()
    //     }
    // }, [inputRef])
    // useEffect(() => {
    //     if (inputRef?.current) {
    //         ;(inputRef?.current as any)?.input?.setAttribute('readonly', 'true')
    //     }
    // }, [])
    // const strValueDate = useMemo(() => {
    //     return moment(value as any, format).format('YYYY-MM-DD')
    // }, [value, format])
    // const strCurrentDate = useMemo(() => {
    //     return moment(currentDate, format).format('YYYY-MM-DD')
    // }, [currentDate, format])
    // useEffect(() => {
    //     if (strValueDate !== strCurrentDate) {
    //         setCurrentDate(moment(value as string, format).toDate())
    //     }
    // }, [strValueDate, strCurrentDate, value, currentDate, format, onChange])
    return (React__default.createElement(DatePicker
    // ref={inputRef as any}
    // wrapperClassName={styles.root}
    // selected={currentDate}
    , { 
        // ref={inputRef as any}
        // wrapperClassName={styles.root}
        // selected={currentDate}
        onChange: handleChange, dateFormat: 'yyyy-MM-dd' }));
};

var css_248z$8 = "@use \"sass:math\";\n.options-field-module_mainLabel__7rChb {\n  color: #8d6b94;\n  margin-bottom: 0.5rem;\n  display: block; }\n\n.options-field-module_label__98IL4 {\n  display: flex;\n  padding-left: 1rem;\n  position: relative;\n  margin-bottom: 0.4rem;\n  align-items: center; }\n  .options-field-module_label__98IL4 input[type='radio'] {\n    display: none; }\n  .options-field-module_label__98IL4 span {\n    display: inline-block; }\n  .options-field-module_label__98IL4 span.options-field-module_control__NZaec {\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n    border-radius: 50%;\n    border: 2px solid #cccccc;\n    cursor: pointer;\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 0.5rem; }\n  .options-field-module_label__98IL4 input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    content: '';\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    background-color: #cccccc;\n    border-radius: 50%; }\n  .options-field-module_label__98IL4.options-field-module_primary__p9hE8 span.options-field-module_control__NZaec {\n    border-color: #8d6b94; }\n  .options-field-module_label__98IL4.options-field-module_primary__p9hE8 span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_primary__p9hE8 span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_primary__p9hE8 input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #8d6b94; }\n  .options-field-module_label__98IL4.options-field-module_secondary__d-b2t span.options-field-module_control__NZaec {\n    border-color: #b185a7; }\n  .options-field-module_label__98IL4.options-field-module_secondary__d-b2t span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_secondary__d-b2t span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_secondary__d-b2t input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #b185a7; }\n  .options-field-module_label__98IL4.options-field-module_success__zgosL span.options-field-module_control__NZaec {\n    border-color: #06d6a0; }\n  .options-field-module_label__98IL4.options-field-module_success__zgosL span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_success__zgosL span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_success__zgosL input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #06d6a0; }\n  .options-field-module_label__98IL4.options-field-module_danger__OSNrV span.options-field-module_control__NZaec {\n    border-color: #ef476f; }\n  .options-field-module_label__98IL4.options-field-module_danger__OSNrV span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_danger__OSNrV span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_danger__OSNrV input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #ef476f; }\n  .options-field-module_label__98IL4.options-field-module_warning__avuUr span.options-field-module_control__NZaec {\n    border-color: #b7ba1b; }\n  .options-field-module_label__98IL4.options-field-module_warning__avuUr span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_warning__avuUr span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_warning__avuUr input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #b7ba1b; }\n  .options-field-module_label__98IL4.options-field-module_info__AdifF span.options-field-module_control__NZaec {\n    border-color: #7796cb; }\n  .options-field-module_label__98IL4.options-field-module_info__AdifF span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_info__AdifF span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_info__AdifF input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #7796cb; }\n  .options-field-module_label__98IL4.options-field-module_light__FS4LK span.options-field-module_control__NZaec {\n    border-color: #999999; }\n  .options-field-module_label__98IL4.options-field-module_light__FS4LK span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_light__FS4LK span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_light__FS4LK input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #999999; }\n  .options-field-module_label__98IL4.options-field-module_dark__greBM span.options-field-module_control__NZaec {\n    border-color: #212121; }\n  .options-field-module_label__98IL4.options-field-module_dark__greBM span.options-field-module_label__98IL4 {\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .options-field-module_label__98IL4.options-field-module_dark__greBM span.options-field-module_label__98IL4 {\n        color: #fff; } }\n  .options-field-module_label__98IL4.options-field-module_dark__greBM input[type='radio']:checked ~ span.options-field-module_control__NZaec::after {\n    background-color: #212121; }\n\n.options-field-module_horizontal__2sweq {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 0; }\n";
var styles$8 = {"mainLabel":"options-field-module_mainLabel__7rChb","label":"options-field-module_label__98IL4","control":"options-field-module_control__NZaec","primary":"options-field-module_primary__p9hE8","secondary":"options-field-module_secondary__d-b2t","success":"options-field-module_success__zgosL","danger":"options-field-module_danger__OSNrV","warning":"options-field-module_warning__avuUr","info":"options-field-module_info__AdifF","light":"options-field-module_light__FS4LK","dark":"options-field-module_dark__greBM","horizontal":"options-field-module_horizontal__2sweq"};
styleInject(css_248z$8);

const OptionsButton = ({ name, label, options = [], value, onChange, horizontal, variant = 'primary' }) => {
    const [selected, setSelected] = useState$1(value);
    const changeValue = (newValue) => {
        setSelected(newValue);
        onChange?.({
            target: {
                name: name || '',
                value: newValue
            }
        });
    };
    return (React__default.createElement("div", { className: styles$8.buttonsRoot },
        label && React__default.createElement(Label, { className: styles$8.mainLabel }, label),
        React__default.createElement("div", { className: classNames({
                [styles$8.horizontal]: horizontal
            }) }, options.map((item, key) => (React__default.createElement(Label, { key: `option-${key}`, className: classNames(styles$8.label, {
                [styles$8.primary]: variant === 'primary',
                [styles$8.secondary]: variant === 'secondary',
                [styles$8.danger]: variant === 'danger',
                [styles$8.warning]: variant === 'warning',
                [styles$8.success]: variant === 'success',
                [styles$8.info]: variant === 'info',
                [styles$8.light]: variant === 'light',
                [styles$8.dark]: variant === 'dark'
            }) },
            React__default.createElement("input", { type: "radio", name: name, onClick: () => changeValue(item.value), onChange: () => null, checked: selected === item.value }),
            React__default.createElement("span", { className: styles$8.control }),
            React__default.createElement("span", { className: styles$8.label, onClick: () => changeValue(item.value) }, item.label)))))));
};

var css_248z$7 = "@use \"sass:math\";\n.color-field-module_root__UGqmn {\n  position: relative; }\n\n.color-field-module_input__mny-u {\n  width: 100%;\n  max-width: 100%;\n  min-height: 1.5rem;\n  padding: 0.2rem 1rem;\n  border: 1px solid #b3b3b3;\n  border-radius: 20px;\n  color: #000;\n  background-color: var(--color-to-apply); }\n\n.color-field-module_inputWrapper__RQGtx {\n  flex: 1;\n  display: flex; }\n\n.color-field-module_controlWrapper__XQWKa {\n  position: absolute;\n  z-index: 1000;\n  background-color: #fff;\n  padding: 0.5rem 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.4);\n  border-radius: 0 0 20px 20px; }\n  .color-field-module_controlWrapper__XQWKa:focus {\n    outline: 2px solid #8d6b94; }\n\n.color-field-module_actionsWrapper__FsVib {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0.5rem;\n  margin-top: 1rem; }\n\n.color-field-module_dialogFrame__ic6cc.color-field-module_dialogFrame__ic6cc {\n  width: 230px;\n  height: auto;\n  border-radius: 14px; }\n\n.color-field-module_dialogFrame__ic6cc .color-field-module_dialogFooter__7riqz.color-field-module_dialogFooter__7riqz {\n  justify-content: center; }\n\n.color-field-module_dialogBody__IZRzN.color-field-module_dialogBody__IZRzN {\n  display: flex;\n  justify-content: center; }\n\n.color-field-module_dialogOverLay__HRGau.color-field-module_dialogOverLay__HRGau {\n  align-items: center;\n  display: flex;\n  justify-content: center; }\n";
var styles$7 = {"root":"color-field-module_root__UGqmn","input":"color-field-module_input__mny-u","inputWrapper":"color-field-module_inputWrapper__RQGtx","controlWrapper":"color-field-module_controlWrapper__XQWKa","actionsWrapper":"color-field-module_actionsWrapper__FsVib","dialogFrame":"color-field-module_dialogFrame__ic6cc","dialogFooter":"color-field-module_dialogFooter__7riqz","dialogBody":"color-field-module_dialogBody__IZRzN","dialogOverLay":"color-field-module_dialogOverLay__HRGau"};
styleInject(css_248z$7);

const Grid = ({ children, className }) => {
    return React__default.createElement("div", { className: classNames('grid-container', className) }, children);
};

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const Col = ({ all, applyFor, applyFrom, ascendingApply = true, children, xs = 12, sm = 12, md = 12, lg = 12, xl = 12 }) => {
    const generatedClassName = useMemo$1(() => {
        let dimensions = {
            xs,
            sm,
            md,
            lg,
            xl
        };
        if (all) {
            // If all means that the given value should apply for all dimension keys
            dimensions = Object.keys(dimensions).reduce((result, currentKey) => {
                result[currentKey] = all;
                return result;
            }, {});
        }
        else if (applyFor) {
            // Apply the given value only to the given keys
            dimensions = { ...dimensions, ...applyFor };
        }
        else if (applyFrom && Array.isArray(applyFrom)) {
            // Depending on the ascendingApply it will apply the value to all
            // dimensions forward or backwarsapplyFrom
            const [dimFrom = 'xs', value = 12] = applyFrom;
            const index = colSizes.findIndex((item) => item === dimFrom);
            const iniIndex = ascendingApply ? index : 0;
            const endIndex = ascendingApply ? undefined : index;
            const resultSizes = colSizes.slice(iniIndex, endIndex);
            resultSizes.forEach((size) => {
                dimensions[size] = value;
            });
        }
        return Object.keys(dimensions).reduce((result, currentKey) => {
            return `${result} col-${currentKey}-${dimensions[currentKey]}`;
        }, '');
    }, [xs, sm, md, lg, xl, all, applyFor, applyFrom, ascendingApply]);
    return React__default.createElement("div", { className: generatedClassName }, children);
};

const Row = ({ children, className }) => {
    return React__default.createElement("div", { className: classNames('row', className) }, children);
};

var css_248z$6 = "@use \"sass:math\";\n.detail-view-module_root__DfdLG {\n  max-width: 100%;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0.5rem;\n  margin: 0.4rem 0rem; }\n\n.detail-view-module_header__-rQvG {\n  padding: 0.5rem 1rem; }\n  .detail-view-module_header__-rQvG h3 {\n    font-size: 1.2rem;\n    font-weight: 500;\n    color: #8d6b94; }\n\n.detail-view-module_body__21s5h {\n  background-color: #ffffff;\n  border-radius: 10px;\n  padding: 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .detail-view-module_body__21s5h {\n      background-color: #292929; } }\n  .detail-view-module_body__21s5h .detail-view-module_detailsWrapper__E88MM {\n    display: flex;\n    flex-direction: column; }\n  .detail-view-module_body__21s5h .detail-view-module_icon__nrFKn {\n    margin-right: 0.5rem;\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .detail-view-module_body__21s5h .detail-view-module_icon__nrFKn {\n        color: #fff; } }\n  .detail-view-module_body__21s5h .detail-view-module_infoTitle__-YYMg {\n    font-size: 1rem;\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .detail-view-module_body__21s5h .detail-view-module_infoTitle__-YYMg {\n        color: #fff; } }\n    @media (min-width: 720px) {\n      .detail-view-module_body__21s5h .detail-view-module_infoTitle__-YYMg {\n        flex: 2; } }\n  .detail-view-module_body__21s5h .detail-view-module_infoDescription__2yjTG {\n    font-size: 0.9rem;\n    color: rgba(0, 0, 0, 0.5); }\n    @media (prefers-color-scheme: dark) {\n      .detail-view-module_body__21s5h .detail-view-module_infoDescription__2yjTG {\n        color: rgba(255, 255, 255, 0.5); } }\n    @media (min-width: 720px) {\n      .detail-view-module_body__21s5h .detail-view-module_infoDescription__2yjTG {\n        flex: 3; } }\n\n.detail-view-module_infoCol__RiYFk {\n  flex: 1;\n  margin: 0.5rem;\n  min-width: 200px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  @media (prefers-color-scheme: dark) {\n    .detail-view-module_infoCol__RiYFk {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1); } }\n  @media (min-width: 720px) {\n    .detail-view-module_infoCol__RiYFk {\n      display: flex; } }\n";
var styles$6 = {"root":"detail-view-module_root__DfdLG","header":"detail-view-module_header__-rQvG","body":"detail-view-module_body__21s5h","detailsWrapper":"detail-view-module_detailsWrapper__E88MM","icon":"detail-view-module_icon__nrFKn","infoTitle":"detail-view-module_infoTitle__-YYMg","infoDescription":"detail-view-module_infoDescription__2yjTG","infoCol":"detail-view-module_infoCol__RiYFk"};
styleInject(css_248z$6);

const DetailView = ({ title, details, pills, children }) => {
    const detailsToRender = useMemo$1(() => {
        return details?.filter((item) => item !== null);
    }, [details]);
    return (React__default.createElement("div", { className: styles$6.root },
        Boolean(title) && (React__default.createElement("div", { className: styles$6.header },
            React__default.createElement("h3", null, title))),
        React__default.createElement("div", { className: styles$6.body },
            React__default.createElement("div", { className: styles$6.detailsWrapper }, detailsToRender?.map((detail, key) => (React__default.createElement("div", { className: styles$6.infoCol, key: key },
                React__default.createElement("p", { className: styles$6.infoTitle },
                    detail?.icon && (React__default.createElement(Icon, { icon: detail.icon, className: styles$6.icon })),
                    detail?.title),
                React__default.createElement("span", { className: styles$6.infoDescription }, detail?.description))))),
            React__default.createElement("div", { className: "flex flex-wrap" }, pills?.map((pill, key) => (React__default.createElement(Pill, { key: key, label: pill?.title, icon: pill.icon, variant: pill?.variant })))),
            children)));
};

var css_248z$5 = "@use \"sass:math\";\n.table-module_table__s0wcG {\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 0.3rem 0.6rem 0.3rem 0.6rem;\n  table-layout: auto;\n  width: 100%;\n  border-collapse: collapse;\n  /** mobile **/\n  /** mobile **/ }\n  @media (prefers-color-scheme: dark) {\n    .table-module_table__s0wcG {\n      background-color: #292929; } }\n  .table-module_tableToolbar__XES3X {\n    display: flex;\n    padding: 10px; }\n  .table-module_tableToolbarLeft__TYjrQ {\n    flex-grow: 2; }\n  .table-module_tableToolbarRight__7tL5d {\n    flex-grow: 3;\n    display: flex;\n    justify-content: flex-end; }\n  .table-module_table__s0wcG table,\n  .table-module_table__s0wcG tr,\n  .table-module_table__s0wcG td,\n  .table-module_table__s0wcG th {\n    border: none; }\n  .table-module_table__s0wcG table {\n    min-width: 100%; }\n  .table-module_table__s0wcG .table-module_isMobile__YBoRq thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  .table-module_table__s0wcG .table-module_isMobile__YBoRq tr {\n    border-bottom: 3px solid #ddd;\n    display: block; }\n  .table-module_table__s0wcG .table-module_isMobile__YBoRq td {\n    color: #000;\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 0.8em;\n    text-align: left;\n    min-height: 20px;\n    padding: 0.4em 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .table-module_table__s0wcG .table-module_isMobile__YBoRq tr,\n    .table-module_table__s0wcG .table-module_isMobile__YBoRq td {\n      border-bottom-color: rgba(255, 255, 255, 0.1); }\n    .table-module_table__s0wcG .table-module_isMobile__YBoRq td {\n      color: #fff; } }\n  .table-module_table__s0wcG .table-module_isMobile__YBoRq td::before {\n    /*\n            * aria-label has no advantage, it won't be read inside a table\n            content: attr(aria-label);\n            */\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    min-width: 35%; }\n  .table-module_table__s0wcG .table-module_isMobile__YBoRq td:last-child {\n    border-bottom: 0; }\n  .table-module_table__s0wcG .table-module_isMobile__YBoRq tr:nth-child(even) {\n    background-color: rgba(0, 0, 0, 0.08); }\n  @media (min-width: 720px) {\n    .table-module_table__s0wcG table {\n      table-layout: auto;\n      max-width: 100%; }\n    .table-module_table__s0wcG thead th span {\n      align-items: center;\n      justify-content: center;\n      display: inline-flex;\n      background-color: rgba(0, 0, 0, 0.06);\n      border-radius: 5px;\n      width: 100%;\n      height: 100%; }\n    .table-module_table__s0wcG th,\n    .table-module_table__s0wcG td {\n      font-size: 0.9rem;\n      height: 35px;\n      color: #000; } }\n\n@media (min-width: 720px) and (prefers-color-scheme: dark) {\n  .table-module_table__s0wcG th,\n  .table-module_table__s0wcG td {\n    color: #fff; } }\n  @media (min-width: 720px) {\n    .table-module_table__s0wcG td {\n      padding: 0.4rem 1.2rem;\n      white-space: normal;\n      word-wrap: break-word;\n      text-overflow: ellipsis; }\n    .table-module_table__s0wcG th.table-module_hasActions__h89lt:last-child,\n    .table-module_table__s0wcG td.table-module__hasActions__FTO2A:last-child {\n      text-align: right;\n      white-space: nowrap;\n      width: 10%; }\n    .table-module_table__s0wcG td.table-module_actionsCell__1xBTM {\n      display: flex;\n      justify-content: center; }\n    .table-module_table__s0wcG tbody tr {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.08); }\n    .table-module_table__s0wcG tr:nth-child(even) {\n      background-color: rgba(0, 0, 0, 0.01); } }\n  @media (min-width: 720px) and (prefers-color-scheme: dark) {\n    .table-module_table__s0wcG tr:nth-child(even) {\n      background-color: rgba(0, 0, 0, 0.2); } }\n\n@media (min-width: 720px) and (prefers-color-scheme: dark) {\n  .table-module_table__s0wcG th {\n    background-color: rgba(0, 0, 0, 0.4); } }\n";
var styles$5 = {"table":"table-module_table__s0wcG","tableToolbar":"table-module_tableToolbar__XES3X","tableToolbarLeft":"table-module_tableToolbarLeft__TYjrQ","tableToolbarRight":"table-module_tableToolbarRight__7tL5d","isMobile":"table-module_isMobile__YBoRq","hasActions":"table-module_hasActions__h89lt","_hasActions":"table-module__hasActions__FTO2A","actionsCell":"table-module_actionsCell__1xBTM"};
styleInject(css_248z$5);

var css_248z$4 = "";
var styles$4 = {};
styleInject(css_248z$4);

const TableActions = ({ actions, onActionCalled }) => {
    return (React__default.createElement("div", { className: styles$4.tableActions }, actions?.map((item, index) => (React__default.createElement(Button, { key: `table-action-${index}`, icon: item.icon, onClick: () => onActionCalled?.(item.action, item), ...item.buttonProps }, item.label)))));
};

var css_248z$3 = "@use \"sass:math\";\n.table-footer-module_tableFooter__a8UlX {\n  padding: 0 1rem 0.8rem;\n  display: flex;\n  flex-direction: row-reverse; }\n  .table-footer-module_tableFooter__a8UlX .table-footer-module_legend__M-3pp {\n    font-size: 0.8rem;\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .table-footer-module_tableFooter__a8UlX .table-footer-module_legend__M-3pp {\n        color: rgba(255, 255, 255, 0.5); } }\n  .table-footer-module_tableFooter__a8UlX .table-footer-module_pagesWrapper__0qQ47 {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .table-footer-module_tableFooter__a8UlX .table-footer-module_footerActions__aolfo {\n    flex: 1; }\n  .table-footer-module_tableFooter__a8UlX ul {\n    display: flex; }\n";
var styles$3 = {"tableFooter":"table-footer-module_tableFooter__a8UlX","legend":"table-footer-module_legend__M-3pp","pagesWrapper":"table-footer-module_pagesWrapper__0qQ47","footerActions":"table-footer-module_footerActions__aolfo"};
styleInject(css_248z$3);

const TableFooter = () => {
    const pages = _.range(1, 6);
    return (React__default.createElement("div", { className: styles$3.tableFooter },
        React__default.createElement("div", { className: styles$3.pagesWrapper },
            React__default.createElement("ul", null,
                React__default.createElement("li", null,
                    React__default.createElement(IconButton, { icon: "angles-left" })),
                React__default.createElement("li", null,
                    React__default.createElement(IconButton, { icon: "chevron-left" })),
                React__default.createElement("li", null, pages.map((page) => (React__default.createElement(IconButton, { key: `page-${page}` }, page)))),
                React__default.createElement("li", null,
                    React__default.createElement(IconButton, { icon: "chevron-right" })),
                React__default.createElement("li", null,
                    React__default.createElement(IconButton, { icon: "angles-right" }))),
            React__default.createElement("span", { className: styles$3.legend }, "Showing 1 to 10 of 500 entries")),
        React__default.createElement("div", { className: styles$3.footerActions })));
};

var css_248z$2 = "@use \"sass:math\";\n.table-empty-module_cell__uiktf.table-empty-module_cell__uiktf {\n  opacity: 0.5;\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .table-empty-module_cell__uiktf.table-empty-module_cell__uiktf {\n      color: #fff; } }\n  .table-empty-module_cell__uiktf.table-empty-module_cell__uiktf > span {\n    display: block;\n    text-align: center; }\n";
var styles$2 = {"cell":"table-empty-module_cell__uiktf"};
styleInject(css_248z$2);

const TableEmpty = ({ colsNumber }) => {
    return (React__default.createElement("tr", null,
        React__default.createElement("td", { className: styles$2.cell, colSpan: colsNumber },
            React__default.createElement("span", null, "No data to be displayed"))));
};

const RenderRow = ({ actions, cols, colLabels, data, rowId, handleAction, columnResolvers, columnClasses }) => {
    return (React__default.createElement("tr", null,
        cols.map((key, index) => (React__default.createElement("td", { className: columnClasses?.[key], "data-label": colLabels ? colLabels[key] || key : key, key: `${rowId}-${index}` }, columnResolvers?.[key] ? columnResolvers?.[key]?.(data) : data[key]))),
        actions && actions?.length > 0 && (React__default.createElement("td", { "data-label": 'Actions', className: classNames(styles$5.actionsCell, styles$5.hasActions) }, actions.map((item, index) => (React__default.createElement(IconButton, { className: "mr-2", icon: item.icon, onClick: () => handleAction(item.action, data), key: `${index}-${item.action}`, size: "sm", ...item?.buttonProps })))))));
};
const Table = ({ actions, data, colLabels = {}, columns: receivedCols, onActionCalled, onTableActionCalled, tableActions, columnResolvers, columnClasses, disablePagination }) => {
    const { isIn } = useMediaQuery();
    const columns = !receivedCols ? Object.keys(colLabels) : receivedCols;
    const handleActionTriggered = useCallback$1((action, item) => {
        onActionCalled?.(action, item);
    }, [onActionCalled]);
    const isMobile = isIn(['xs', 'sm', 'md']);
    const hasData = data?.length || 0 > 0;
    return (React__default.createElement("div", { className: classNames(styles$5.table) },
        tableActions && tableActions?.length > 0 && (React__default.createElement("div", { className: styles$5.tableToolbar },
            React__default.createElement("div", { className: styles$5.tableToolbarRight },
                React__default.createElement(TableActions, { actions: tableActions, onActionCalled: onTableActionCalled })))),
        React__default.createElement("table", { className: classNames({ [styles$5.isMobile]: isMobile }) },
            React__default.createElement("thead", null,
                React__default.createElement("tr", null,
                    columns.map((col, index) => (React__default.createElement("th", { key: `title-${index}` },
                        React__default.createElement("span", null, colLabels[col] || col)))),
                    actions && actions?.length > 0 && (React__default.createElement("th", { className: classNames(styles$5.actionsCell, styles$5.hasActions) },
                        React__default.createElement("span", null, "Actions"))))),
            React__default.createElement("tbody", null,
                !hasData && (React__default.createElement(TableEmpty, { colsNumber: columns?.length + (Boolean(actions) ? 1 : 0) })),
                data?.map((rowData, index) => (React__default.createElement(RenderRow, { columnClasses: columnClasses, handleAction: handleActionTriggered, actions: actions, rowId: `${index}`, colLabels: colLabels, cols: columns, data: rowData, key: `row-${index}`, columnResolvers: columnResolvers }))))),
        !disablePagination && hasData && React__default.createElement(TableFooter, null)));
};

const DialogRenderer = ({ children }) => {
    const parent = useRef(document.getElementById('root')).current;
    return parent ? createPortal(children, parent) : null;
};

var css_248z$1 = "@use \"sass:math\";\n.dialog-base-module_dialogOverlay__dubAm {\n  animation: dialog-base-module_blurAnimation__pVd0G 0.6s ease forwards;\n  backdrop-filter: blur(0);\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 10000; }\n  @media (prefers-color-scheme: dark) {\n    .dialog-base-module_dialogOverlay__dubAm {\n      background-color: rgba(255, 255, 255, 0.2); } }\n  @media (min-width: 720px) {\n    .dialog-base-module_dialogOverlay__dubAm {\n      align-items: center;\n      display: flex;\n      justify-content: center; } }\n\n.dialog-base-module_closeButton__keC6o {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.dialog-base-module_dialogFrame__rmlzf {\n  opacity: 0;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  position: relative;\n  margin-top: 2rem;\n  min-height: 200px;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  animation: dialog-base-module_slideAnimation__-sF0m 0.6s ease 0.6s forwards;\n  display: flex;\n  flex-direction: column; }\n  @media (prefers-color-scheme: dark) {\n    .dialog-base-module_dialogFrame__rmlzf {\n      background-color: #333;\n      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); } }\n  .dialog-base-module_dialogFrame__rmlzf .dialog-base-module_dialogBody__vxHZo {\n    padding: 1rem;\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n    flex: 1;\n    flex-direction: column;\n    overflow: auto; }\n  .dialog-base-module_dialogFrame__rmlzf .dialog-base-module_dialogFooter__cCxKp {\n    display: flex;\n    justify-content: flex-end;\n    padding: 10px 20px; }\n  .dialog-base-module_dialogFrame__rmlzf .dialog-base-module_dialogHeader__2VI4j {\n    border-bottom: 1px solid #eee;\n    display: flex;\n    min-height: 2.5rem;\n    justify-content: space-between;\n    padding: 10px 5px 10px 20px; }\n    .dialog-base-module_dialogFrame__rmlzf .dialog-base-module_dialogHeader__2VI4j h3 {\n      font-size: 1.2rem;\n      font-weight: 500; }\n  @media (min-width: 720px) {\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameXS__2-zoS, .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameSmall__ha21Q, .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameMedium__B4JmB, .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameLarge__rsXU1, .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameFull__TqqcE {\n      border-radius: 14px;\n      max-width: 500px;\n      height: auto;\n      max-height: 80%; } }\n  .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameLarge__rsXU1 {\n    width: 80%;\n    max-width: 80%; }\n  .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameFull__TqqcE {\n    width: 95%;\n    max-width: 95%; }\n  @media (min-width: 720px) {\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameSmall__ha21Q {\n      width: 60%; }\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameMedium__B4JmB {\n      width: 70%;\n      max-width: 70%; }\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameLarge__rsXU1 {\n      width: 80%;\n      max-width: 80%; }\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameFull__TqqcE {\n      width: 95%;\n      max-width: 95%; } }\n  @media (min-width: 960px) {\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameMedium__B4JmB {\n      width: 60%;\n      max-width: 60%; } }\n  @media (min-width: 1200px) {\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameSmall__ha21Q {\n      width: 40%;\n      max-width: 30%; }\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameMedium__B4JmB {\n      width: 40%;\n      max-width: 40%; }\n    .dialog-base-module_dialogFrame__rmlzf.dialog-base-module_dialogFrameLarge__rsXU1 {\n      width: 60%;\n      max-width: 60%; } }\n\n.dialog-base-module_lockCurtain__kxAaN {\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 100000;\n  border-radius: 4px; }\n\n.dialog-base-module_dialogClosed__ZpPkP {\n  animation: dialog-base-module_blurOutAnimation__UbYSK 0.6s ease forwards; }\n\n.dialog-base-module_dialogClosed__ZpPkP .dialog-base-module_dialogFrame__rmlzf {\n  opacity: 1;\n  animation: dialog-base-module_slideOutAnimation__DyNcB 0.6s ease forwards;\n  animation-delay: 0.2s; }\n\n@keyframes dialog-base-module_blurAnimation__pVd0G {\n  from {\n    backdrop-filter: blur(0px); }\n  to {\n    backdrop-filter: blur(3px); } }\n\n@keyframes dialog-base-module_blurOutAnimation__UbYSK {\n  from {\n    backdrop-filter: blur(3px); }\n  to {\n    backdrop-filter: blur(0px);\n    background-color: transparent; } }\n\n@keyframes dialog-base-module_slideAnimation__-sF0m {\n  0% {\n    transform: translateY(100%);\n    opacity: 0; }\n  50% { }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes dialog-base-module_slideOutAnimation__DyNcB {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  50% {\n    transform: translateY(-20px); }\n  100% {\n    transform: translateY(100%);\n    opacity: 0; } }\n";
var styles$1 = {"dialogOverlay":"dialog-base-module_dialogOverlay__dubAm","blurAnimation":"dialog-base-module_blurAnimation__pVd0G","closeButton":"dialog-base-module_closeButton__keC6o","dialogFrame":"dialog-base-module_dialogFrame__rmlzf","slideAnimation":"dialog-base-module_slideAnimation__-sF0m","dialogBody":"dialog-base-module_dialogBody__vxHZo","dialogFooter":"dialog-base-module_dialogFooter__cCxKp","dialogHeader":"dialog-base-module_dialogHeader__2VI4j","dialogFrameXS":"dialog-base-module_dialogFrameXS__2-zoS","dialogFrameSmall":"dialog-base-module_dialogFrameSmall__ha21Q","dialogFrameMedium":"dialog-base-module_dialogFrameMedium__B4JmB","dialogFrameLarge":"dialog-base-module_dialogFrameLarge__rsXU1","dialogFrameFull":"dialog-base-module_dialogFrameFull__TqqcE","lockCurtain":"dialog-base-module_lockCurtain__kxAaN","dialogClosed":"dialog-base-module_dialogClosed__ZpPkP","blurOutAnimation":"dialog-base-module_blurOutAnimation__UbYSK","slideOutAnimation":"dialog-base-module_slideOutAnimation__DyNcB"};
styleInject(css_248z$1);

/**
 * The dialog is mounted using the open flag, if the flag
 * is false the dialog will be unmounted with the content inside it.
 *
 * @param param0
 * @returns
 */
const DialogBase = ({ disableClose, dialogBodyProps, footerProps, children, classes, title, labels, onClose, onAccept, disableFooter, disableHeader, open, size = 'sm', disableAccept, hideAccept, lock, hideCancel }) => {
    /**
     * The flags are being stored in an object to avoid calling
     * multiple setState at the same time and generate multipe
     * render
     */
    const [flags, setFlags] = useState$1({
        closed: false,
        open: open
    });
    const { accept = 'Accept', cancel = 'Cancel' } = labels || {};
    /**
     * The close uses a timeout function to delay the unmounting and
     * give some time to execute the css animation.
     */
    const handleClose = useCallback$1(() => {
        onClose?.();
    }, [onClose]);
    useEffect(() => {
        if (!flags.open && open === true && !flags.closed) {
            setFlags((prev) => ({ ...prev, open: true }));
        }
        else if (!flags.closed && !open && flags.open === true) {
            handleClose();
        }
    }, [flags, open, handleClose]);
    useEffect(() => {
        const rootElement = document.body;
        if (rootElement) {
            rootElement.classList.add('disableScroll');
        }
        return () => {
            rootElement?.classList?.remove('disableScroll');
        };
    }, []);
    if (!flags.open) {
        return null;
    }
    return (React__default.createElement(DialogRenderer, null,
        React__default.createElement("div", { className: `${styles$1.dialogOverlay} ${flags?.closed ? styles$1.dialogClosed : ''} ${classes?.overlay}` },
            React__default.createElement("div", { className: classNames(styles$1.dialogFrame, {
                    [styles$1.dialogFrameSmall]: size === 'sm',
                    [styles$1.dialogFrameMedium]: size === 'md',
                    [styles$1.dialogFrameLarge]: size === 'lg',
                    [styles$1.dialogFrameFull]: size === 'full',
                    [styles$1.dialogFrameXS]: size === 'xs'
                }, classes?.frame) },
                !disableHeader && (React__default.createElement("div", { className: classNames(styles$1.dialogHeader, classes?.header) },
                    title && React__default.createElement("h3", { className: "textWithMode" }, title),
                    !disableClose && (React__default.createElement(IconButton, { className: styles$1.closeButton, icon: "times", onClick: handleClose })))),
                React__default.createElement("div", { ...dialogBodyProps, className: classNames(styles$1.dialogBody, dialogBodyProps?.className) }, children),
                !disableFooter && (React__default.createElement("div", { className: classNames(styles$1.dialogFooter, footerProps?.className) },
                    !hideCancel && (React__default.createElement(Button, { disabled: flags?.closed, variant: "light", rounded: true, onClick: handleClose }, cancel)),
                    !hideAccept && (React__default.createElement(Button, { rounded: true, disabled: flags?.closed || disableAccept, variant: "primary", onClick: onAccept }, accept)))),
                lock && React__default.createElement("div", { className: styles$1.lockCurtain })))));
};

const Dialog = ({ children, ...props }) => {
    return React__default.createElement(DialogBase, { ...props }, children);
};

var css_248z = "@use \"sass:math\";\n.confirm-dialog-module_root__0IcnC {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.confirm-dialog-module_header__lCUcf h3 {\n  text-align: center;\n  width: 100%; }\n\n.confirm-dialog-module_frame__YFoV4 {\n  border-radius: 14px;\n  height: auto;\n  min-height: 150px;\n  width: auto;\n  min-width: 300px;\n  max-width: 95%; }\n";
var styles = {"root":"confirm-dialog-module_root__0IcnC","header":"confirm-dialog-module_header__lCUcf","frame":"confirm-dialog-module_frame__YFoV4"};
styleInject(css_248z);

const ConfirmDialog = ({ children, disableAcctions, message, acceptLabel = 'Accept', cancelLabel = 'Cancel', onAccept, onCancel, onClose, loading, size = 'xs', ...props }) => {
    return (React__default.createElement(Dialog, { ...props, disableFooter: true, onClose: onClose, disableClose: true, size: size, classes: {
            overlay: styles.root,
            frame: styles.frame,
            header: styles.header
        } },
        React__default.createElement("p", { className: "text-center textWithMode mb-4" }, message),
        children && React__default.createElement("div", null, children),
        loading && (React__default.createElement("div", { className: "flex justify-center mb-4" },
            React__default.createElement(SpinnerLoader, { size: "lg" }))),
        !disableAcctions && !loading && (React__default.createElement("div", { className: "flex justify-center" },
            React__default.createElement(Button, { rounded: true, variant: "info", onClick: onCancel || onClose }, cancelLabel),
            React__default.createElement(Button, { rounded: true, variant: "danger", onClick: onAccept }, acceptLabel)))));
};

const PickerRenderer = ({ currentColor, handleChange, onClose, placeholder }) => {
    const [newColor, setNewColor] = useState$1(currentColor);
    const handleDialogColorChange = (color) => {
        setNewColor(color);
    };
    const handleClose = () => {
        onClose();
    };
    const handleAccept = () => {
        handleChange(newColor);
        onClose();
    };
    return (React__default.createElement(Dialog, { classes: { frame: styles$7.dialogFrame, overlay: styles$7.dialogOverLay }, dialogBodyProps: {
            className: styles$7.dialogBody
        }, footerProps: {
            className: styles$7.dialogFooter
        }, hideCancel: true, labels: { accept: 'Pick' }, onClose: handleClose, size: "xs", onAccept: handleAccept, open: true, title: placeholder || 'Pick a color' },
        React__default.createElement(HexColorPicker, { color: newColor, onChange: handleDialogColorChange })));
};
PickerRenderer.defaultProps = {};

const ColorField = ({ onChange, value = '#ffffff', ...props }) => {
    const [colorToApply, setColorToApply] = useState$1(`${value}`);
    const [opened, setOpened] = useState$1(false);
    const inlineStyles = useMemo$1(() => {
        const textColor = getContrastColor(colorToApply);
        return {
            '--color-to-apply': colorToApply,
            color: textColor
        };
    }, [colorToApply]);
    const handleChange = useCallback$1((color) => {
        setColorToApply(color);
        onChange?.({
            target: {
                name: props.name || 'color-field',
                value: color
            }
        });
    }, [onChange, props.name]);
    return (React__default.createElement("div", { className: styles$7.root },
        React__default.createElement("div", { className: styles$7.inputWrapper },
            React__default.createElement("input", { className: styles$7.input, style: inlineStyles, value: colorToApply, onFocus: () => setOpened(true), onClick: () => setOpened(true), readOnly: true }),
            React__default.createElement(IconButton, { icon: "palette", onClick: () => setOpened(!opened) })),
        opened && (React__default.createElement(PickerRenderer, { currentColor: colorToApply, handleChange: handleChange, placeholder: props?.placeholder, onClose: () => {
                setOpened(false);
            } }))));
};
ColorField.defaultProps = {};

const registerIcons = () => {
    library.add(faAdd, faAnglesLeft, faAnglesRight, faArrowsRotate, faBan, faBell, faBars, faBed, faBedPulse, faBomb, faBook, faBoxesStacked, faBriefcase, faBrain, faBullseye, faCarrot, faCartShopping, faCalendar, faCalendarAlt, faCalendarDay, faCar, faCheck, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCircle, faClipboard, faClock, faCloud, faCogs, faComment, faComputer, faComputerMouse, faCreditCard, faCreditCardAlt, faDog, faDroplet, faDumbbell, faFile, faFilter, faEdit, faEllipsisV, faEllipsisH, faEnvelope, faExclamationTriangle, faExclamation, faExclamationCircle, faEye, faEyeSlash, faFlag, faFloppyDisk, faFlask, faFireBurner, faFireAlt, faFireFlameCurved, faGamepad, faGasPump, faGauge, faGift, faGlassWater, faGlobe, faGraduationCap, faHandFist, faFilm, faHeart, faHeartCrack, faHeartPulse, faHeartCirclePlus, faHome, faImage, faFileInvoice, faFileInvoiceDollar, faKitchenSet, faLanguage, faLightbulb, faList, faListCheck, faLock, faLockOpen, faMinus, faMotorcycle, faMoneyBill, faMoneyBillTransfer, faMoon, faMugHot, faPause, faPalette, faPen, faPenAlt, faPerson, faPlayCircle, faPoo, faQuestionCircle, faRightToBracket, faRocket, faRuler, faSearch, faShirt, faShower, faSoap, faStar, faStarHalf, faStarHalfAlt, faStopwatch20, faStop, faSun, faTag, faTimes, faTooth, faTrash, faThumbsUp, faThumbsDown, faUtensils, faUser, faWallet, faWeightHanging);
};

export { Alert, Button, ButtonBase, CheckBoxField, Col, ColorField, ConfirmDialog, DateField, DetailView, Dialog, DialogBase, FormControl, Grid, Icon, IconButton, InputBase, Label, MediaQueryProvider, NumberField$1 as NumberField, OptionsButton as OptionsField, PasswordField, Pill, Row, SelectField, SpinnerLoader, Step, Stepper, StepperActions, StepperBack, StepperFinish, StepperNext, Table, TextAreaField, TextField, TimeField, getContrastColor, icons, registerIcons, useClickOutsideEffect, useForm, useInputId, useMediaQuery };
//# sourceMappingURL=index.js.map
