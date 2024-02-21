import React from 'react';
import classNames from 'classnames';

const ButtonBase = ({ children, ...props }) => {
    return React.createElement("button", { ...props }, children);
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

var css_248z = "@use \"sass:math\";\n.button-module_button__yfHX9 {\n  align-items: center;\n  border-color: transparent;\n  box-shadow: rgba(33, 35, 38, 0.1) 0 10px 10px -10px;\n  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  display: inline-flex;\n  font-size: 0.9rem;\n  margin: 0 .2rem .2rem;\n  height: 25px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 0;\n  transition: background-color .6s; }\n  .button-module_button__yfHX9 span {\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3); }\n  .button-module_button__yfHX9:disabled, .button-module_button__yfHX9:disabled:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n    opacity: 0.5;\n    cursor: not-allowed; }\n\n.button-module_buttonContent__4A7zq {\n  padding: 0px 0.7rem;\n  font-weight: 400; }\n\n.button-module_default__QlCDU {\n  background-color: #ffffff; }\n  .button-module_default__QlCDU:hover {\n    background-color: #d9d9d9; }\n  .button-module_default__QlCDU .button-module_iconWrapper__QUHW4 {\n    background-color: #d9d9d9; }\n\n.button-module_rounded__jNVzk {\n  border-radius: 20px; }\n\n.button-module_iconWrapper__QUHW4 {\n  align-items: center;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  width: 25px;\n  height: 25px; }\n\n.button-module_rounded__jNVzk .button-module_iconWrapper__QUHW4 {\n  border-radius: 20px; }\n\n.button-module_primary__owGsB {\n  background-color: #8d6b94;\n  box-shadow: 0px 3px 0px 0px #715676; }\n  .button-module_primary__owGsB:hover {\n    background-color: #634b68; }\n  .button-module_primary__owGsB span {\n    color: white; }\n  .button-module_primary__owGsB .button-module_iconWrapper__QUHW4 {\n    background-color: #715676;\n    color: white; }\n  .button-module_primary__owGsB .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_secondary__5ndRZ {\n  background-color: #b185a7;\n  box-shadow: 0px 3px 0px 0px #9d6691; }\n  .button-module_secondary__5ndRZ:hover {\n    background-color: #8e5b83; }\n  .button-module_secondary__5ndRZ span {\n    color: white; }\n  .button-module_secondary__5ndRZ .button-module_iconWrapper__QUHW4 {\n    background-color: #9d6691;\n    color: white; }\n  .button-module_secondary__5ndRZ .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_success__-dqWn {\n  background-color: #06d6a0;\n  box-shadow: 0px 3px 0px 0px #05a47b; }\n  .button-module_success__-dqWn:hover {\n    background-color: #048c68; }\n  .button-module_success__-dqWn span {\n    color: white; }\n  .button-module_success__-dqWn .button-module_iconWrapper__QUHW4 {\n    background-color: #05a47b;\n    color: white; }\n  .button-module_success__-dqWn .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_danger__ANkhq {\n  background-color: #ef476f;\n  box-shadow: 0px 3px 0px 0px #eb184a; }\n  .button-module_danger__ANkhq:hover {\n    background-color: #d71341; }\n  .button-module_danger__ANkhq span {\n    color: white; }\n  .button-module_danger__ANkhq .button-module_iconWrapper__QUHW4 {\n    background-color: #eb184a;\n    color: white; }\n  .button-module_danger__ANkhq .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_info__XPmH4 {\n  background-color: #7796cb;\n  box-shadow: 0px 3px 0px 0px #527abd; }\n  .button-module_info__XPmH4:hover {\n    background-color: #446cb2; }\n  .button-module_info__XPmH4 span {\n    color: white; }\n  .button-module_info__XPmH4 .button-module_iconWrapper__QUHW4 {\n    background-color: #527abd;\n    color: white; }\n  .button-module_info__XPmH4 .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_warning__KEyfR {\n  background-color: #f2f3ae;\n  box-shadow: 0px 3px 0px 0px #dddf29; }\n  .button-module_warning__KEyfR:hover {\n    background-color: #e7e96b; }\n  .button-module_warning__KEyfR span {\n    color: black; }\n  .button-module_warning__KEyfR .button-module_iconWrapper__QUHW4 {\n    background-color: #dddf29;\n    color: black; }\n  .button-module_warning__KEyfR .button-module_icon__Uk-sL {\n    color: black; }\n\n.button-module_dark__B-o-h {\n  background-color: #212121;\n  box-shadow: 0px 3px 0px 0px #080808; }\n  .button-module_dark__B-o-h:hover {\n    background-color: black; }\n  .button-module_dark__B-o-h span {\n    color: white; }\n  .button-module_dark__B-o-h .button-module_iconWrapper__QUHW4 {\n    background-color: #080808;\n    color: white; }\n  .button-module_dark__B-o-h .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_light__ugMlT {\n  background-color: #ffffff;\n  box-shadow: 0px 3px 0px 0px #e6e6e6;\n  color: #000; }\n  .button-module_light__ugMlT:hover {\n    background-color: #d9d9d9; }\n  .button-module_light__ugMlT span {\n    color: black; }\n  .button-module_light__ugMlT .button-module_iconWrapper__QUHW4 {\n    background-color: #e6e6e6;\n    color: black; }\n  .button-module_light__ugMlT .button-module_icon__Uk-sL {\n    color: black; }\n\n.button-module_block__QXp9s {\n  flex: 1;\n  width: 100%; }\n  .button-module_block__QXp9s > span.button-module_buttonContent__4A7zq {\n    flex: 1;\n    text-align: center; }\n";
var styles = {"button":"button-module_button__yfHX9","buttonContent":"button-module_buttonContent__4A7zq","default":"button-module_default__QlCDU","iconWrapper":"button-module_iconWrapper__QUHW4","rounded":"button-module_rounded__jNVzk","primary":"button-module_primary__owGsB","icon":"button-module_icon__Uk-sL","secondary":"button-module_secondary__5ndRZ","success":"button-module_success__-dqWn","danger":"button-module_danger__ANkhq","info":"button-module_info__XPmH4","warning":"button-module_warning__KEyfR","dark":"button-module_dark__B-o-h","light":"button-module_light__ugMlT","block":"button-module_block__QXp9s"};
styleInject(css_248z);

const Icon = () => {
    return null;
};

/**
 * Button component which allows to include an icon inside it
 * it provides a set of variants and a rounded prop to make it rounded
 * @param param0
 * @returns
 */
const Button = ({ children, className, icon, rounded, block, variant, loading, ...props }) => {
    return (React.createElement(ButtonBase, { className: classNames(styles.button, {
            [styles.default]: variant === 'default',
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.danger]: variant === 'danger',
            [styles.info]: variant === 'info',
            [styles.warning]: variant === 'warning',
            [styles.success]: variant === 'success',
            [styles.light]: variant === 'light',
            [styles.dark]: variant === 'dark',
            [styles.rounded]: rounded,
            [styles.block]: block
        }, className), tabIndex: 0, ...props },
        icon && (React.createElement("i", { className: classNames(styles.iconWrapper, {}) },
            React.createElement(Icon, { icon: icon, className: classNames(styles.icon) }))),
        React.createElement("span", { className: styles.buttonContent }, loading ? 'loading ... ' : children)));
};
Button.defaultProps = {
    tabIndex: 0
};

export { Button, ButtonBase };
//# sourceMappingURL=index.js.map
