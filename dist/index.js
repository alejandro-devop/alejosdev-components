import * as React from 'react';
import React__default, { useMemo, forwardRef, useState, useRef, useCallback } from 'react';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import Select from 'react-select';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAdd, faAnglesLeft, faAnglesRight, faArrowsRotate, faBan, faBell, faBars, faBed, faBedPulse, faBomb, faBook, faBoxesStacked, faBriefcase, faBrain, faBullseye, faCarrot, faCartShopping, faCalendar, faCalendarAlt, faCar, faCheck, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCircle, faClipboard, faClock, faCloud, faCogs, faComment, faComputer, faComputerMouse, faCreditCard, faCreditCardAlt, faDog, faDroplet, faDumbbell, faFile, faFilter, faEdit, faEllipsisV, faEllipsisH, faEnvelope, faExclamationTriangle, faExclamation, faExclamationCircle, faEye, faEyeSlash, faFlag, faFloppyDisk, faFlask, faFireBurner, faFireAlt, faFireFlameCurved, faGamepad, faGasPump, faGauge, faGift, faGlassWater, faGlobe, faGraduationCap, faHandFist, faFilm, faHeart, faHeartCrack, faHeartPulse, faHeartCirclePlus, faHome, faImage, faFileInvoice, faFileInvoiceDollar, faKitchenSet, faLanguage, faLightbulb, faList, faListCheck, faLock, faLockOpen, faMinus, faMotorcycle, faMoneyBill, faMoneyBillTransfer, faMoon, faMugHot, faPause, faPalette, faPen, faPenAlt, faPerson, faPlayCircle, faPoo, faQuestionCircle, faRightToBracket, faRocket, faRuler, faSearch, faShirt, faShower, faSoap, faStar, faStarHalf, faStarHalfAlt, faStopwatch20, faStop, faSun, faTag, faTimes, faTooth, faTrash, faThumbsUp, faThumbsDown, faUtensils, faUser, faWallet, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

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

var css_248z$8 = "@use \"sass:math\";\n.button-module_button__yfHX9 {\n  align-items: center;\n  border-color: transparent;\n  box-shadow: rgba(33, 35, 38, 0.1) 0 10px 10px -10px;\n  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n  height: 30px;\n  margin: 0 0.2rem 0.5rem 0.2rem;\n  padding: 0;\n  position: relative;\n  transition: background-color 0.6s; }\n  .button-module_button__yfHX9 span {\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3); }\n  .button-module_button__yfHX9:disabled, .button-module_button__yfHX9:disabled:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .button-module_button__yfHX9.button-module_sm__sM-Bn {\n    height: 25px; }\n    .button-module_button__yfHX9.button-module_sm__sM-Bn span {\n      padding: 0px 0.5rem;\n      font-weight: 500;\n      font-size: small; }\n  .button-module_button__yfHX9.button-module_lg__kGxW1 {\n    height: 40px; }\n    .button-module_button__yfHX9.button-module_lg__kGxW1 span {\n      padding: 0px 1rem;\n      font-weight: 500;\n      font-size: large; }\n\n.button-module_buttonContent__4A7zq {\n  padding: 0px 0.7rem;\n  font-weight: 400; }\n\n.button-module_default__QlCDU {\n  background-color: #ffffff; }\n  .button-module_default__QlCDU:hover {\n    background-color: #d9d9d9; }\n  .button-module_default__QlCDU span {\n    color: black; }\n  .button-module_default__QlCDU.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #ffffff; }\n  .button-module_default__QlCDU.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n    color: #ffffff; }\n  .button-module_default__QlCDU.button-module_flat__ItVb2.button-module_flat__ItVb2:hover {\n    background-color: #ffffff; }\n    .button-module_default__QlCDU.button-module_flat__ItVb2.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n      color: black; }\n\n.button-module_rounded__jNVzk {\n  border-radius: 20px; }\n\n.button-module_iconWrapper__QUHW4 {\n  align-items: center;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  width: 30px;\n  height: 30px; }\n\n.button-module_iconLead__Kpl1u {\n  left: 0; }\n\n.button-module_iconEnd__h067L {\n  right: 0; }\n\n.button-module_button__yfHX9.button-module_lg__kGxW1 .button-module_iconWrapper__QUHW4 {\n  width: 40px;\n  height: 40px; }\n\n.button-module_rounded__jNVzk .button-module_iconWrapper__QUHW4 {\n  border-radius: 20px; }\n\n.button-module_primary__owGsB {\n  background-color: #8d6b94;\n  box-shadow: 0px 3px 0px 0px #715676; }\n  .button-module_primary__owGsB:hover {\n    background-color: #634b68; }\n  .button-module_primary__owGsB span {\n    color: white; }\n  .button-module_primary__owGsB .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_primary__owGsB.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #8d6b94;\n    box-shadow: none; }\n    .button-module_primary__owGsB.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #8d6b94;\n      font-weight: 400; }\n    .button-module_primary__owGsB.button-module_flat__ItVb2:hover {\n      background-color: #8d6b94; }\n      .button-module_primary__owGsB.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_secondary__5ndRZ {\n  background-color: #b185a7;\n  box-shadow: 0px 3px 0px 0px #9d6691; }\n  .button-module_secondary__5ndRZ:hover {\n    background-color: #8e5b83; }\n  .button-module_secondary__5ndRZ span {\n    color: white; }\n  .button-module_secondary__5ndRZ .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_secondary__5ndRZ.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #b185a7;\n    box-shadow: none; }\n    .button-module_secondary__5ndRZ.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #b185a7;\n      font-weight: 400; }\n    .button-module_secondary__5ndRZ.button-module_flat__ItVb2:hover {\n      background-color: #b185a7; }\n      .button-module_secondary__5ndRZ.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_success__-dqWn {\n  background-color: #06d6a0;\n  box-shadow: 0px 3px 0px 0px #05a47b; }\n  .button-module_success__-dqWn:hover {\n    background-color: #048c68; }\n  .button-module_success__-dqWn span {\n    color: white; }\n  .button-module_success__-dqWn .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_success__-dqWn.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #06d6a0;\n    box-shadow: none; }\n    .button-module_success__-dqWn.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #06d6a0;\n      font-weight: 400; }\n    .button-module_success__-dqWn.button-module_flat__ItVb2:hover {\n      background-color: #06d6a0; }\n      .button-module_success__-dqWn.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_danger__ANkhq {\n  background-color: #ef476f;\n  box-shadow: 0px 3px 0px 0px #eb184a; }\n  .button-module_danger__ANkhq:hover {\n    background-color: #d71341; }\n  .button-module_danger__ANkhq span {\n    color: white; }\n  .button-module_danger__ANkhq .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_danger__ANkhq.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #ef476f;\n    box-shadow: none; }\n    .button-module_danger__ANkhq.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #ef476f;\n      font-weight: 400; }\n    .button-module_danger__ANkhq.button-module_flat__ItVb2:hover {\n      background-color: #ef476f; }\n      .button-module_danger__ANkhq.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_info__XPmH4 {\n  background-color: #7796cb;\n  box-shadow: 0px 3px 0px 0px #527abd; }\n  .button-module_info__XPmH4:hover {\n    background-color: #446cb2; }\n  .button-module_info__XPmH4 span {\n    color: white; }\n  .button-module_info__XPmH4 .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_info__XPmH4.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #7796cb;\n    box-shadow: none; }\n    .button-module_info__XPmH4.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #7796cb;\n      font-weight: 400; }\n    .button-module_info__XPmH4.button-module_flat__ItVb2:hover {\n      background-color: #7796cb; }\n      .button-module_info__XPmH4.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_warning__KEyfR {\n  background-color: #f2f3ae;\n  box-shadow: 0px 3px 0px 0px #dddf29; }\n  .button-module_warning__KEyfR:hover {\n    background-color: #e7e96b; }\n  .button-module_warning__KEyfR span {\n    color: black; }\n  .button-module_warning__KEyfR .button-module_icon__Uk-sL {\n    color: black; }\n  .button-module_warning__KEyfR.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #f2f3ae;\n    box-shadow: none; }\n    .button-module_warning__KEyfR.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #f2f3ae;\n      font-weight: 400; }\n    .button-module_warning__KEyfR.button-module_flat__ItVb2:hover {\n      background-color: #f2f3ae; }\n      .button-module_warning__KEyfR.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: black; }\n\n.button-module_dark__B-o-h {\n  background-color: #212121;\n  box-shadow: 0px 3px 0px 0px #080808; }\n  .button-module_dark__B-o-h:hover {\n    background-color: black; }\n  .button-module_dark__B-o-h span {\n    color: white; }\n  .button-module_dark__B-o-h .button-module_icon__Uk-sL {\n    color: white; }\n  .button-module_dark__B-o-h.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #212121;\n    box-shadow: none; }\n    .button-module_dark__B-o-h.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #212121;\n      font-weight: 400; }\n    .button-module_dark__B-o-h.button-module_flat__ItVb2:hover {\n      background-color: #212121; }\n      .button-module_dark__B-o-h.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: white; }\n\n.button-module_light__ugMlT {\n  background-color: #ffffff;\n  box-shadow: 0px 3px 0px 0px #e6e6e6;\n  color: #000; }\n  .button-module_light__ugMlT:hover {\n    background-color: #d9d9d9; }\n  .button-module_light__ugMlT span {\n    color: black; }\n  .button-module_light__ugMlT .button-module_icon__Uk-sL {\n    color: black; }\n  .button-module_light__ugMlT.button-module_flat__ItVb2 {\n    background-color: transparent;\n    border: 2px solid #ffffff;\n    box-shadow: none; }\n    .button-module_light__ugMlT.button-module_flat__ItVb2 .button-module_buttonContent__4A7zq {\n      color: #ffffff;\n      font-weight: 400; }\n    .button-module_light__ugMlT.button-module_flat__ItVb2:hover {\n      background-color: #ffffff; }\n      .button-module_light__ugMlT.button-module_flat__ItVb2:hover .button-module_buttonContent__4A7zq {\n        color: black; }\n\n.button-module_block__QXp9s {\n  flex: 1;\n  width: 100%; }\n  .button-module_block__QXp9s > span.button-module_buttonContent__4A7zq {\n    flex: 1;\n    text-align: center; }\n\n.button-module_withIcon__8aB-N.button-module_iconLeading__PzMb4 {\n  padding-left: 1rem; }\n\n.button-module_withIcon__8aB-N.button-module_iconEnding__QJBec {\n  padding-right: 1rem; }\n";
var styles$8 = {"button":"button-module_button__yfHX9","sm":"button-module_sm__sM-Bn","lg":"button-module_lg__kGxW1","buttonContent":"button-module_buttonContent__4A7zq","default":"button-module_default__QlCDU","flat":"button-module_flat__ItVb2","rounded":"button-module_rounded__jNVzk","iconWrapper":"button-module_iconWrapper__QUHW4","iconLead":"button-module_iconLead__Kpl1u","iconEnd":"button-module_iconEnd__h067L","primary":"button-module_primary__owGsB","icon":"button-module_icon__Uk-sL","secondary":"button-module_secondary__5ndRZ","success":"button-module_success__-dqWn","danger":"button-module_danger__ANkhq","info":"button-module_info__XPmH4","warning":"button-module_warning__KEyfR","dark":"button-module_dark__B-o-h","light":"button-module_light__ugMlT","block":"button-module_block__QXp9s","withIcon":"button-module_withIcon__8aB-N","iconLeading":"button-module_iconLeading__PzMb4","iconEnding":"button-module_iconEnding__QJBec"};
styleInject(css_248z$8);

var css_248z$7 = "@use \"sass:math\";\n.icon-module_root__XG4tj {\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .icon-module_root__XG4tj {\n      color: #fff; } }\n";
var styles$7 = {"root":"icon-module_root__XG4tj"};
styleInject(css_248z$7);

/**
 * Renders a FontAwesomeIcon with the given icon name.
 * check the list of available icons at https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free
 * and check @utils/icon-registry/icons-available.ts file to see the list of available icons or
 * check @utils/icon-registry/registerIcons.ts to see how to register new icons.
 * @param param0
 * @returns
 */
const Icon = ({ className, icon = 'tag' }) => {
    return React.createElement(FontAwesomeIcon, { icon: icon || '', className: cs(styles$7.root, className) });
};
Icon.defaultProps = {
    className: '',
    icon: 'tag'
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
const Button = ({ children, className, icon, rounded, block, variant, loading, size, flat, iconPosition, ...props }) => {
    const iconRenderer = useMemo(() => (React__default.createElement("i", { className: cs(styles$8.iconWrapper, {
            [styles$8.iconEnd]: iconPosition === 'end',
            [styles$8.iconLead]: iconPosition === 'lead'
        }) },
        React__default.createElement(Icon, { icon: icon, className: cs(styles$8.icon) }))), [icon, iconPosition]);
    return (React__default.createElement(ButtonBase, { className: cs(styles$8.button, {
            ...applyButtonVariantStyles({
                styles: styles$8,
                variant
            }),
            [styles$8.rounded]: rounded,
            [styles$8.block]: block,
            [styles$8.sm]: size === 'sm',
            [styles$8.md]: size === 'md',
            [styles$8.lg]: size === 'lg',
            [styles$8.flat]: flat,
            [styles$8.withIcon]: Boolean(icon),
            [styles$8.iconLeading]: iconPosition === 'lead',
            [styles$8.iconEnding]: iconPosition === 'end'
        }, className), tabIndex: 0, ...props },
        icon && iconPosition === 'lead' && iconRenderer,
        React__default.createElement("span", { className: styles$8.buttonContent }, loading ? 'loading ... ' : children),
        icon && iconPosition === 'end' && iconRenderer));
};
Button.defaultProps = {
    iconPosition: 'lead',
    tabIndex: 0,
    rounded: true,
    size: 'md',
    variant: 'default'
};

var css_248z$6 = "@use \"sass:math\";\n.icon-button-module_root__u1x4- {\n  width: 40px;\n  height: 40px;\n  border: none;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit;\n  background-color: transparent;\n  border-radius: 50%;\n  transition: background-color 0.6s;\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .icon-button-module_root__u1x4- {\n      color: #fff;\n      border-color: #8f8f8f; } }\n  .icon-button-module_root__u1x4-:disabled {\n    opacity: 0.2;\n    cursor: not-allowed;\n    color: #000;\n    background-color: rgba(0, 0, 0, 0.08); }\n\n.icon-button-module_withLabelWrapper__9aC34 {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .icon-button-module_withLabelWrapper__9aC34 span.icon-button-module_label__rKElE {\n    font-size: 0.7rem;\n    margin-top: 0.2rem;\n    color: #000; }\n    @media (prefers-color-scheme: dark) {\n      .icon-button-module_withLabelWrapper__9aC34 span.icon-button-module_label__rKElE {\n        color: #fff; } }\n\n.icon-button-module_primary__Lm3HE {\n  color: #8d6b94;\n  background-color: #e8e1ea;\n  box-shadow: 0px 2px 0px 0px #7f6085; }\n  .icon-button-module_primary__Lm3HE:hover {\n    background-color: #715676;\n    color: white; }\n  .icon-button-module_primary__Lm3HE > .icon-button-module_icon__x11Ki {\n    color: #8d6b94; }\n\n.icon-button-module_secondary__8ReRg {\n  color: #b185a7;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #a7759c; }\n  .icon-button-module_secondary__8ReRg:hover {\n    background-color: #9d6691;\n    color: white; }\n  .icon-button-module_secondary__8ReRg > .icon-button-module_icon__x11Ki {\n    color: #b185a7; }\n\n.icon-button-module_success__H97Hp {\n  color: #06d6a0;\n  background-color: #abfde8;\n  box-shadow: 0px 2px 0px 0px #05bd8d; }\n  .icon-button-module_success__H97Hp:hover {\n    background-color: #05a47b;\n    color: white; }\n  .icon-button-module_success__H97Hp > .icon-button-module_icon__x11Ki {\n    color: #06d6a0; }\n\n.icon-button-module_danger__Sq2b1 {\n  color: #ef476f;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #ed305d; }\n  .icon-button-module_danger__Sq2b1:hover {\n    background-color: #eb184a;\n    color: white; }\n  .icon-button-module_danger__Sq2b1 > .icon-button-module_icon__x11Ki {\n    color: #ef476f; }\n\n.icon-button-module_warning__jSzGR {\n  color: #b7ba1b;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #eef098; }\n  .icon-button-module_warning__jSzGR:hover {\n    background-color: #e4e655;\n    color: black; }\n  .icon-button-module_warning__jSzGR > .icon-button-module_icon__x11Ki {\n    color: #b7ba1b; }\n\n.icon-button-module_info__WYMmR {\n  color: #7796cb;\n  background-color: white;\n  box-shadow: 0px 2px 0px 0px #6588c4; }\n  .icon-button-module_info__WYMmR:hover {\n    background-color: #527abd;\n    color: white; }\n  .icon-button-module_info__WYMmR > .icon-button-module_icon__x11Ki {\n    color: #7796cb; }\n\n.icon-button-module_light__8B2so {\n  color: gray;\n  background-color: white;\n  box-shadow: none; }\n  .icon-button-module_light__8B2so:hover {\n    background-color: #cccccc;\n    color: black; }\n\n.icon-button-module_dark__fsKvI {\n  color: black;\n  background-color: #a1a1a1;\n  box-shadow: 0px 2px 0px 0px #141414; }\n  .icon-button-module_dark__fsKvI:hover {\n    background-color: black;\n    color: white; }\n  .icon-button-module_dark__fsKvI > .icon-button-module_icon__x11Ki {\n    color: black; }\n\n.icon-button-module_flat__qVklj {\n  background-color: transparent;\n  box-shadow: none; }\n  .icon-button-module_flat__qVklj.icon-button-module_flat__qVklj .icon-button-module_icon__x11Ki {\n    color: gray; }\n    @media (prefers-color-scheme: dark) {\n      .icon-button-module_flat__qVklj.icon-button-module_flat__qVklj .icon-button-module_icon__x11Ki {\n        color: #e6e6e6; } }\n\n.icon-button-module_sizeLg__HPQh1 {\n  width: 50px;\n  height: 50px; }\n\n.icon-button-module_sizeSm__-4j1C {\n  width: 30px;\n  height: 30px; }\n";
var styles$6 = {"root":"icon-button-module_root__u1x4-","withLabelWrapper":"icon-button-module_withLabelWrapper__9aC34","label":"icon-button-module_label__rKElE","primary":"icon-button-module_primary__Lm3HE","icon":"icon-button-module_icon__x11Ki","secondary":"icon-button-module_secondary__8ReRg","success":"icon-button-module_success__H97Hp","danger":"icon-button-module_danger__Sq2b1","warning":"icon-button-module_warning__jSzGR","info":"icon-button-module_info__WYMmR","light":"icon-button-module_light__8B2so","dark":"icon-button-module_dark__fsKvI","flat":"icon-button-module_flat__qVklj","sizeLg":"icon-button-module_sizeLg__HPQh1","sizeSm":"icon-button-module_sizeSm__-4j1C"};
styleInject(css_248z$6);

var css_248z$5 = "@use \"sass:math\";\n.alert-module_root__DQW41 {\n  border-radius: 10px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 1rem; }\n\n.alert-module_primary__iu0Wq {\n  background-color: rgba(141, 107, 148, 0.4);\n  color: white; }\n  .alert-module_primary__iu0Wq .alert-module_icon__0xtkg {\n    color: white; }\n\n.alert-module_info__5PrZI {\n  background-color: rgba(119, 150, 203, 0.4);\n  color: white; }\n  .alert-module_info__5PrZI .alert-module_icon__0xtkg {\n    color: white; }\n\n.alert-module_iconWrapper__5NtU- {\n  margin-right: 1rem; }\n\n.alert-module_content__a9vpO {\n  flex: 1; }\n\n.alert-module_actionButton__ZpuDJ {\n  margin: 0; }\n";
var styles$5 = {"root":"alert-module_root__DQW41","primary":"alert-module_primary__iu0Wq","icon":"alert-module_icon__0xtkg","info":"alert-module_info__5PrZI","iconWrapper":"alert-module_iconWrapper__5NtU-","content":"alert-module_content__a9vpO","actionButton":"alert-module_actionButton__ZpuDJ"};
styleInject(css_248z$5);

const Alert = ({ action, actionIcon, actionLabel, actionVariant, message, icon, variant = 'default' }) => {
    return (React__default.createElement("div", { className: cs(styles$5.root, {
            [styles$5.primary]: variant === 'primary',
            [styles$5.secondary]: variant === 'secondary',
            [styles$5.success]: variant === 'success',
            [styles$5.info]: variant === 'info',
            [styles$5.danger]: variant === 'danger',
            [styles$5.warning]: variant === 'warning'
        }) },
        icon && (React__default.createElement("div", { className: styles$5.iconWrapper },
            React__default.createElement(Icon, { className: styles$5.icon, icon: icon }))),
        React__default.createElement("div", { className: styles$5.content }, message),
        Boolean(action) && (React__default.createElement(Button, { className: styles$5.actionButton, variant: actionVariant, icon: actionIcon, onClick: action }, actionLabel))));
};
Alert.defaultProps = {
    actionVariant: 'primary'
};

const IconButton = forwardRef(({ icon, children, label, variant, onClick, classes, ...props }, ref) => {
    const handleClick = (e) => {
        e.stopPropagation();
        onClick?.(e);
    };
    const buttonRenderer = (React__default.createElement("button", { ...props, ref: ref, type: "button", className: cs(styles$6.root, classes?.root, props?.className, {
            [styles$6.primary]: variant === 'primary',
            [styles$6.secondary]: variant === 'secondary',
            [styles$6.danger]: variant === 'danger',
            [styles$6.warning]: variant === 'warning',
            [styles$6.success]: variant === 'success',
            [styles$6.info]: variant === 'info',
            [styles$6.light]: variant === 'light',
            [styles$6.dark]: variant === 'dark',
            [styles$6.flat]: variant === 'flat',
            [styles$6.disabled]: props?.disabled,
            [styles$6.sizeMd]: props?.size === 'md',
            [styles$6.sizeLg]: props?.size === 'lg',
            [styles$6.sizeSm]: props?.size === 'sm'
        }), onClick: handleClick, tabIndex: 0 }, children ? children : React__default.createElement(Icon, { className: styles$6.icon, icon: icon })));
    if (label) {
        return (React__default.createElement("div", { className: styles$6.withLabelWrapper },
            buttonRenderer,
            React__default.createElement("span", { className: cs(styles$6.label, classes?.label) }, label)));
    }
    return buttonRenderer;
});
IconButton.defaultProps = {
    size: 'md'
};

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
    const [form, setForm] = useState(defaultValues);
    const validator = useRef(new Validator(fields, {
        required: required
    })).current;
    const processValue = useCallback((processorConfig) => {
        const { processor, currentValue, field, form } = processorConfig;
        const [processorName] = processor.split(':');
        if (processorName === 'switchGroup') {
            const otherFields = Object.keys(fields || {}).filter((key) => {
                const fieldConfig = fields ? fields[key] : {};
                return fieldConfig?.processor?.includes('switchGroup');
            });
            const groupValue = otherFields.reduce((accu, currentKey) => ({
                ...accu,
                [currentKey]: false
            }), []);
            return { ...form, ...groupValue, [field]: currentValue === 'on' };
        }
    }, [fields]);
    /**
     * Handles the change of the form fields
     */
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        const config = fields ? fields[name] : {};
        if (config?.processor) {
            const newValue = processValue({
                processor: config?.processor,
                form,
                field: name,
                currentValue: value
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
    const [formData, isValidForm, fieldsWithErrors] = useMemo(() => {
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
    const changeForm = useCallback((newForm) => {
        setForm({
            ...form,
            ...newForm
        });
    }, [form]);
    const clearForm = useCallback(() => {
        setForm(defaultValues);
    }, [defaultValues]);
    const fieldsFilled = useCallback((fields, form) => {
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

var css_248z$4 = "@use \"sass:math\";\n.input-module_root__xcWOB {\n  align-items: flex-end;\n  display: flex; }\n\n.input-module_input__9x0t6 {\n  background-color: #ffffff;\n  border: 1px solid #b3b3b3;\n  border-radius: 20px;\n  color: #000;\n  max-width: 100%;\n  min-height: 2.5rem;\n  padding: 0.2rem 1rem;\n  width: 100%; }\n  .input-module_input__9x0t6::placeholder {\n    color: #b3b3b3;\n    transition: opacity 0.2s ease-in-out; }\n  .input-module_input__9x0t6.input-module_withLabel__m6cZE {\n    margin-top: 1.5rem; }\n    .input-module_input__9x0t6.input-module_withLabel__m6cZE::placeholder {\n      opacity: 0; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_input__9x0t6 {\n      color: #fff;\n      background-color: #292929;\n      border-color: #8f8f8f; }\n      .input-module_input__9x0t6::placeholder {\n        color: #5c5c5c; } }\n\n.input-module_isRequiredField__Xx5qd {\n  margin-bottom: 1rem; }\n\n.input-module_inputWrapper__qSGvA {\n  flex: 1;\n  position: relative; }\n\n.input-module_label__sQuAx {\n  display: block;\n  left: 1rem;\n  margin: 0.2rem 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_label__sQuAx.input-module_label__sQuAx {\n      color: #fff; } }\n\n.input-module_floatingLabel__WrOdN {\n  bottom: 0.75rem;\n  margin: 0;\n  position: absolute;\n  transition: bottom 0.2s ease-in-out, left 0.2s ease-in-out, font-size 0.2s ease-in-out; }\n\n.input-module_input__9x0t6:focus + .input-module_label__sQuAx,\n.input-module_withValue__wYYkt + .input-module_label__sQuAx {\n  bottom: calc(100% - 1.25rem);\n  font-size: 0.9rem;\n  font-weight: 500;\n  left: 0.2rem; }\n\n.input-module_input__9x0t6:focus {\n  outline: none;\n  border-color: #8d6b94; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_input__9x0t6:focus {\n      border-color: #fff; } }\n  .input-module_input__9x0t6:focus::placeholder {\n    opacity: 1; }\n\n.input-module_icon__JQ0Uo {\n  position: absolute;\n  bottom: 0.75rem;\n  left: 1rem;\n  pointer-events: none;\n  color: #000; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_icon__JQ0Uo {\n      color: #fff; } }\n\n.input-module_trailingIcon__ixXtK {\n  right: 1rem;\n  left: auto; }\n\n.input-module_withLeadingIcon__3vKMc {\n  padding-left: 2.5rem; }\n\n.input-module_withTrailingIcon__80V4h {\n  padding-right: 1.6rem; }\n\n.input-module_actionIcon__hhYVt {\n  position: relative;\n  margin-left: 0.25rem;\n  color: rgba(0, 0, 0, 0.5); }\n\n.input-module_maxDisplay__2ajTW {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7rem;\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_maxDisplay__2ajTW {\n      color: rgba(255, 255, 255, 0.4); } }\n";
var styles$4 = {"root":"input-module_root__xcWOB","input":"input-module_input__9x0t6","withLabel":"input-module_withLabel__m6cZE","isRequiredField":"input-module_isRequiredField__Xx5qd","inputWrapper":"input-module_inputWrapper__qSGvA","label":"input-module_label__sQuAx","floatingLabel":"input-module_floatingLabel__WrOdN","withValue":"input-module_withValue__wYYkt","icon":"input-module_icon__JQ0Uo","trailingIcon":"input-module_trailingIcon__ixXtK","withLeadingIcon":"input-module_withLeadingIcon__3vKMc","withTrailingIcon":"input-module_withTrailingIcon__80V4h","actionIcon":"input-module_actionIcon__hhYVt","maxDisplay":"input-module_maxDisplay__2ajTW"};
styleInject(css_248z$4);

var css_248z$3 = "@use \"sass:math\";\n.form-control-module_root__DeA9S {\n  flex: 0 0 auto;\n  max-width: 100%;\n  position: relative;\n  box-sizing: border-box; }\n\n.form-control-module_error__dWO81 {\n  color: #ef476f;\n  font-size: 0.8rem;\n  font-weight: 400;\n  position: absolute;\n  top: 100%;\n  left: 1rem;\n  width: 100%; }\n";
var styles$3 = {"root":"form-control-module_root__DeA9S","error":"form-control-module_error__dWO81"};
styleInject(css_248z$3);

const FormControl = ({ children, className, error, hideRequired, ...props }) => {
    return (React__default.createElement("div", { className: cs(styles$3.root, className), ...props },
        children,
        !hideRequired && React__default.createElement(React__default.Fragment, null, Boolean(error) && React__default.createElement("p", { className: styles$3.error }, error))));
};

var css_248z$2 = "@use \"sass:math\";\n.label-module_root__5HbZT {\n  color: #7f5174;\n  font-weight: 400; }\n  @media (prefers-color-scheme: dark) {\n    .label-module_root__5HbZT {\n      color: #000; } }\n";
var styles$2 = {"root":"label-module_root__5HbZT"};
styleInject(css_248z$2);

/**
 * Facade for label element. It's a simple label element.
 * any common functinoality should be added here.
 * @returns React.FC
 */
const Label = ({ children, className, ...props }) => {
    return (React__default.createElement("label", { className: cs(styles$2.root, className), ...props }, children));
};

const InputBase = forwardRef(({ action, actionIcon, actionRef, actionVariant, className, classes, disableAction, error, floatingLabel, hideMax, id, isNumeric, label, leadingIcon, leadingComponent, max, maxEndingSpaces, name, onChange, onlyInput, trailingIcon, trailingComponent, trimSpaces, value, hideRequired, ...props }, ref) => {
    const htmlId = useInputId({ id, name });
    const handleChangeProxy = useCallback((event) => {
        /**
         * Todo: Implement trim spaces from the event
         * Todo: Implement string, number, email validations.
         */
        onChange?.(event);
    }, [onChange]);
    const hasValue = useMemo(() => value?.length > 0, [value]);
    const inputRender = useMemo(() => {
        return (React__default.createElement("input", { className: cs(styles$4.input, className, {
                [styles$4.withValue]: hasValue,
                [styles$4.withLabel]: Boolean(label) && floatingLabel,
                [styles$4.withLeadingIcon]: Boolean(leadingIcon),
                [styles$4.withTrailingIcon]: Boolean(trailingIcon)
            }), id: htmlId, maxLength: max, name: name, onChange: handleChangeProxy, ref: ref, value: value || '', ...props }));
    }, [props, htmlId, max, name, className]);
    const length = useMemo(() => value?.length || 0, [value]);
    const renderLabel = useMemo(() => (React__default.createElement(Label, { htmlFor: htmlId, className: cs(styles$4.label, {
            [styles$4.labelWithLeadingIcon]: Boolean(leadingIcon),
            [styles$4.floatingLabel]: floatingLabel
        }) }, label)), [floatingLabel]);
    if (onlyInput) {
        return inputRender;
    }
    return (React__default.createElement(FormControl, { error: error, hideRequired: hideRequired, className: cs(styles$4.root, classes?.wrapper, {
            [styles$4.isRequiredField]: Boolean(props.required)
        }) },
        leadingComponent,
        React__default.createElement("div", { className: styles$4.inputWrapper },
            leadingIcon && React__default.createElement(Icon, { icon: leadingIcon, className: styles$4.icon }),
            Boolean(label) && !floatingLabel && renderLabel,
            inputRender,
            Boolean(label) && floatingLabel && renderLabel,
            trailingIcon && (React__default.createElement(Icon, { icon: trailingIcon, className: cs(styles$4.icon, styles$4.trailingIcon) })),
            !hideMax && hasValue && (React__default.createElement("span", { className: styles$4.maxDisplay }, `${length}/${max}`))),
        Boolean(action) && (React__default.createElement(IconButton, { ref: actionRef, icon: actionIcon, className: styles$4.actionIcon, onClick: action, variant: actionVariant, disabled: disableAction }))));
});
InputBase.defaultProps = {
    max: 100,
    trimSpaces: true
};

/**
 * Component documentation...
 * @returns React.FC
 */
const TextField = forwardRef(({ ...props }, ref) => {
    return React__default.createElement(InputBase, { ref: ref, ...props });
});
TextField.defaultProps = {};

const PasswordField = ({ ...props }) => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => setVisible(!visible);
    return (React__default.createElement(InputBase, { ...props, type: visible ? 'text' : 'password', action: toggleVisible, actionIcon: visible ? 'eye-slash' : 'eye' }));
};
PasswordField.defaultProps = {};

var css_248z$1 = "@use \"sass:math\";\n.select-field-module_root__l5e-P {\n  margin-bottom: 1rem; }\n\n.select-field-module_inputLabel__Cex2T {\n  display: block;\n  left: 1rem;\n  margin: 0.2rem 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .select-field-module_inputLabel__Cex2T.select-field-module_inputLabel__Cex2T {\n      color: #fff; } }\n\n.select-field-module_control__24wTu {\n  color: red; }\n\n.select-field-module_formErrorMsg__EWFH2 {\n  font-size: 0.9rem;\n  margin-left: 1rem; }\n";
var styles$1 = {"root":"select-field-module_root__l5e-P","inputLabel":"select-field-module_inputLabel__Cex2T","control":"select-field-module_control__24wTu","formErrorMsg":"select-field-module_formErrorMsg__EWFH2"};
styleInject(css_248z$1);

const useDeviceMode = () => {
    const currentMode = useMemo(() => {
        return window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    }, []);
    const [mode, setMode] = useState(currentMode);
    const toggleMode = useCallback(() => {
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
    const defaultSelected = useMemo(() => {
        return options?.find((item) => item.value === value);
    }, [options, value]);
    return (React__default.createElement(FormControl, { error: error, className: styles$1.root },
        inputLabel && (React__default.createElement(Label, { htmlFor: id, className: styles$1.inputLabel }, inputLabel)),
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

var css_248z = "@use \"sass:math\";\n.checkbox-module_wrapper__59cHH {\n  margin-bottom: 0.5rem; }\n\n.checkbox-module_input__0vGVq {\n  opacity: 0;\n  position: relative; }\n\n.checkbox-module_inputLabel__mdbEq {\n  position: relative; }\n  .checkbox-module_inputLabel__mdbEq:before, .checkbox-module_inputLabel__mdbEq:after {\n    content: '';\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    left: 0;\n    top: 0;\n    transform: translateX(-30px); }\n  .checkbox-module_inputLabel__mdbEq:before {\n    background-color: #ffffff;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #b3b3b3;\n    border-radius: 4px; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_primary__m4cHK::before {\n    border-color: #8d6b94; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_secondary__3LYbL::before {\n    border-color: #b185a7; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_success__Miwfk::before {\n    border-color: #06d6a0; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_danger__XuQuV::before {\n    border-color: #ef476f; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_warning__9aj1J::before {\n    border-color: #f2f3ae; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_info__Sa-Yc::before {\n    border-color: #7796cb; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_light__oHM-7::before {\n    border-color: #ffffff; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_dark__sikeW::before {\n    border-color: #212121; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_rounded__kPVM0::before {\n    border-radius: 50%; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_checked__Zge3z:before {\n    background-color: #ffffff; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_checked__Zge3z:after {\n    border-right: 3px solid #999999;\n    border-bottom: 3px solid #999999;\n    width: calc($check-box-size * 0.3);\n    height: calc($check-box-size * 0.6);\n    transform: rotate(45deg) translate(-14px, 18px);\n    transform-origin: center; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_primary__m4cHK.checkbox-module_checked__Zge3z:after {\n    border-right-color: #8d6b94;\n    border-bottom-color: #8d6b94; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_secondary__3LYbL.checkbox-module_checked__Zge3z:after {\n    border-right-color: #b185a7;\n    border-bottom-color: #b185a7; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_success__Miwfk.checkbox-module_checked__Zge3z:after {\n    border-right-color: #06d6a0;\n    border-bottom-color: #06d6a0; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_danger__XuQuV.checkbox-module_checked__Zge3z:after {\n    border-right-color: #ef476f;\n    border-bottom-color: #ef476f; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_warning__9aj1J.checkbox-module_checked__Zge3z:after {\n    border-right-color: #b7ba1b;\n    border-bottom-color: #b7ba1b; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_info__Sa-Yc.checkbox-module_checked__Zge3z:after {\n    border-right-color: #7796cb;\n    border-bottom-color: #7796cb; }\n  .checkbox-module_inputLabel__mdbEq.checkbox-module_dark__sikeW.checkbox-module_checked__Zge3z:after {\n    border-right-color: #212121;\n    border-bottom-color: #212121; }\n";
var styles = {"wrapper":"checkbox-module_wrapper__59cHH","input":"checkbox-module_input__0vGVq","inputLabel":"checkbox-module_inputLabel__mdbEq","primary":"checkbox-module_primary__m4cHK","secondary":"checkbox-module_secondary__3LYbL","success":"checkbox-module_success__Miwfk","danger":"checkbox-module_danger__XuQuV","warning":"checkbox-module_warning__9aj1J","info":"checkbox-module_info__Sa-Yc","light":"checkbox-module_light__oHM-7","dark":"checkbox-module_dark__sikeW","rounded":"checkbox-module_rounded__kPVM0","checked":"checkbox-module_checked__Zge3z"};
styleInject(css_248z);

const CheckboxField = ({ label, error, value, checked = false, onChange, onClick, rounded, classes, ...props }) => {
    const htmlID = useInputId({ id: props.id, name: props.name });
    const handleChange = () => {
        const newValue = !checked;
        onChange?.({ target: { name: [props?.name], value: newValue } });
    };
    return (React__default.createElement(FormControl, { className: cs(styles.wrapper, classes?.wrapper) },
        React__default.createElement("input", { id: htmlID, ...props, name: props?.name || htmlID, className: styles.input, type: "checkbox", checked: Boolean(checked), onClick: handleChange, onChange: () => null }),
        React__default.createElement(Label, { className: cs(styles.inputLabel, {
                [styles.checked]: checked,
                [styles.primary]: props.variant === 'primary',
                [styles.secondary]: props.variant === 'secondary',
                [styles.success]: props.variant === 'success',
                [styles.danger]: props.variant === 'danger',
                [styles.warning]: props.variant === 'warning',
                [styles.info]: props.variant === 'info',
                [styles.dark]: props.variant === 'dark',
                [styles.rounded]: rounded
            }), onClick: handleChange }, label)));
};
CheckboxField.defaultProps = {};

const Grid = ({ children, className }) => {
    return React__default.createElement("div", { className: cs('grid-container', className) }, children);
};

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const Col = ({ all, applyFor, applyFrom, ascendingApply, children, xs, sm, md, lg, xl }) => {
    const generatedClassName = useMemo(() => {
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
Col.defaultProps = {
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
    md: 12,
    ascendingApply: true
};

const Row = ({ children, className }) => {
    return React__default.createElement("div", { className: cs('row', className) }, children);
};

const registerIcons = () => {
    library.add(faAdd, faAnglesLeft, faAnglesRight, faArrowsRotate, faBan, faBell, faBars, faBed, faBedPulse, faBomb, faBook, faBoxesStacked, faBriefcase, faBrain, faBullseye, faCarrot, faCartShopping, faCalendar, faCalendarAlt, faCar, faCheck, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCircle, faClipboard, faClock, faCloud, faCogs, faComment, faComputer, faComputerMouse, faCreditCard, faCreditCardAlt, faDog, faDroplet, faDumbbell, faFile, faFilter, faEdit, faEllipsisV, faEllipsisH, faEnvelope, faExclamationTriangle, faExclamation, faExclamationCircle, faEye, faEyeSlash, faFlag, faFloppyDisk, faFlask, faFireBurner, faFireAlt, faFireFlameCurved, faGamepad, faGasPump, faGauge, faGift, faGlassWater, faGlobe, faGraduationCap, faHandFist, faFilm, faHeart, faHeartCrack, faHeartPulse, faHeartCirclePlus, faHome, faImage, faFileInvoice, faFileInvoiceDollar, faKitchenSet, faLanguage, faLightbulb, faList, faListCheck, faLock, faLockOpen, faMinus, faMotorcycle, faMoneyBill, faMoneyBillTransfer, faMoon, faMugHot, faPause, faPalette, faPen, faPenAlt, faPerson, faPlayCircle, faPoo, faQuestionCircle, faRightToBracket, faRocket, faRuler, faSearch, faShirt, faShower, faSoap, faStar, faStarHalf, faStarHalfAlt, faStopwatch20, faStop, faSun, faTag, faTimes, faTooth, faTrash, faThumbsUp, faThumbsDown, faUtensils, faUser, faWallet, faWeightHanging);
};

export { Alert, Button, ButtonBase, CheckboxField as CheckBoxField, Col, FormControl, Grid, Icon, IconButton, InputBase, Label, PasswordField, Row, SelectField, TextField, registerIcons, useForm, useInputId };
//# sourceMappingURL=index.js.map
