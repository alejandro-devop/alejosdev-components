import React, { forwardRef, useCallback, useMemo } from 'react';
import cs from 'classnames';

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

var css_248z$4 = "@use \"sass:math\";\n.button-module_button__yfHX9 {\n  align-items: center;\n  border-color: transparent;\n  box-shadow: rgba(33, 35, 38, 0.1) 0 10px 10px -10px;\n  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n  height: 25px;\n  margin: 0 0.2rem 0.2rem;\n  padding: 0;\n  transition: background-color 0.6s; }\n  .button-module_button__yfHX9 span {\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3); }\n  .button-module_button__yfHX9:disabled, .button-module_button__yfHX9:disabled:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n    opacity: 0.5;\n    cursor: not-allowed; }\n\n.button-module_buttonContent__4A7zq {\n  padding: 0px 0.7rem;\n  font-weight: 400; }\n\n.button-module_default__QlCDU {\n  background-color: #ffffff; }\n  .button-module_default__QlCDU:hover {\n    background-color: #d9d9d9; }\n  .button-module_default__QlCDU span {\n    color: black; }\n  .button-module_default__QlCDU .button-module_iconWrapper__QUHW4 {\n    background-color: #d9d9d9;\n    color: black; }\n\n.button-module_rounded__jNVzk {\n  border-radius: 20px; }\n\n.button-module_iconWrapper__QUHW4 {\n  align-items: center;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  width: 25px;\n  height: 25px; }\n\n.button-module_rounded__jNVzk .button-module_iconWrapper__QUHW4 {\n  border-radius: 20px; }\n\n.button-module_primary__owGsB {\n  background-color: #8d6b94;\n  box-shadow: 0px 3px 0px 0px #715676; }\n  .button-module_primary__owGsB:hover {\n    background-color: #634b68; }\n  .button-module_primary__owGsB span {\n    color: white; }\n  .button-module_primary__owGsB .button-module_iconWrapper__QUHW4 {\n    background-color: #715676;\n    color: white; }\n  .button-module_primary__owGsB .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_secondary__5ndRZ {\n  background-color: #b185a7;\n  box-shadow: 0px 3px 0px 0px #9d6691; }\n  .button-module_secondary__5ndRZ:hover {\n    background-color: #8e5b83; }\n  .button-module_secondary__5ndRZ span {\n    color: white; }\n  .button-module_secondary__5ndRZ .button-module_iconWrapper__QUHW4 {\n    background-color: #9d6691;\n    color: white; }\n  .button-module_secondary__5ndRZ .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_success__-dqWn {\n  background-color: #06d6a0;\n  box-shadow: 0px 3px 0px 0px #05a47b; }\n  .button-module_success__-dqWn:hover {\n    background-color: #048c68; }\n  .button-module_success__-dqWn span {\n    color: white; }\n  .button-module_success__-dqWn .button-module_iconWrapper__QUHW4 {\n    background-color: #05a47b;\n    color: white; }\n  .button-module_success__-dqWn .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_danger__ANkhq {\n  background-color: #ef476f;\n  box-shadow: 0px 3px 0px 0px #eb184a; }\n  .button-module_danger__ANkhq:hover {\n    background-color: #d71341; }\n  .button-module_danger__ANkhq span {\n    color: white; }\n  .button-module_danger__ANkhq .button-module_iconWrapper__QUHW4 {\n    background-color: #eb184a;\n    color: white; }\n  .button-module_danger__ANkhq .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_info__XPmH4 {\n  background-color: #7796cb;\n  box-shadow: 0px 3px 0px 0px #527abd; }\n  .button-module_info__XPmH4:hover {\n    background-color: #446cb2; }\n  .button-module_info__XPmH4 span {\n    color: white; }\n  .button-module_info__XPmH4 .button-module_iconWrapper__QUHW4 {\n    background-color: #527abd;\n    color: white; }\n  .button-module_info__XPmH4 .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_warning__KEyfR {\n  background-color: #f2f3ae;\n  box-shadow: 0px 3px 0px 0px #dddf29; }\n  .button-module_warning__KEyfR:hover {\n    background-color: #e7e96b; }\n  .button-module_warning__KEyfR span {\n    color: black; }\n  .button-module_warning__KEyfR .button-module_iconWrapper__QUHW4 {\n    background-color: #dddf29;\n    color: black; }\n  .button-module_warning__KEyfR .button-module_icon__Uk-sL {\n    color: black; }\n\n.button-module_dark__B-o-h {\n  background-color: #212121;\n  box-shadow: 0px 3px 0px 0px #080808; }\n  .button-module_dark__B-o-h:hover {\n    background-color: black; }\n  .button-module_dark__B-o-h span {\n    color: white; }\n  .button-module_dark__B-o-h .button-module_iconWrapper__QUHW4 {\n    background-color: #080808;\n    color: white; }\n  .button-module_dark__B-o-h .button-module_icon__Uk-sL {\n    color: white; }\n\n.button-module_light__ugMlT {\n  background-color: #ffffff;\n  box-shadow: 0px 3px 0px 0px #e6e6e6;\n  color: #000; }\n  .button-module_light__ugMlT:hover {\n    background-color: #d9d9d9; }\n  .button-module_light__ugMlT span {\n    color: black; }\n  .button-module_light__ugMlT .button-module_iconWrapper__QUHW4 {\n    background-color: #e6e6e6;\n    color: black; }\n  .button-module_light__ugMlT .button-module_icon__Uk-sL {\n    color: black; }\n\n.button-module_block__QXp9s {\n  flex: 1;\n  width: 100%; }\n  .button-module_block__QXp9s > span.button-module_buttonContent__4A7zq {\n    flex: 1;\n    text-align: center; }\n";
var styles$4 = {"button":"button-module_button__yfHX9","buttonContent":"button-module_buttonContent__4A7zq","default":"button-module_default__QlCDU","iconWrapper":"button-module_iconWrapper__QUHW4","rounded":"button-module_rounded__jNVzk","primary":"button-module_primary__owGsB","icon":"button-module_icon__Uk-sL","secondary":"button-module_secondary__5ndRZ","success":"button-module_success__-dqWn","danger":"button-module_danger__ANkhq","info":"button-module_info__XPmH4","warning":"button-module_warning__KEyfR","dark":"button-module_dark__B-o-h","light":"button-module_light__ugMlT","block":"button-module_block__QXp9s"};
styleInject(css_248z$4);

const Icon = () => {
    return null;
};

const defaultVariantMaps = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    warning: 'warning',
    success: 'success',
    info: 'info',
    light: 'light',
    dark: 'dark',
    flat: 'flat'
};
const applyButtonVariantStyles = (config) => {
    const { styles, variant, variantMapper = {} } = config;
    const keys = {
        ...defaultVariantMaps,
        ...variantMapper
    };
    return {
        [styles[keys.primary]]: variant === 'primary',
        [styles[keys.secondary]]: variant === 'secondary',
        [styles[keys.danger]]: variant === 'danger',
        [styles[keys.warning]]: variant === 'warning',
        [styles[keys.success]]: variant === 'success',
        [styles[keys.info]]: variant === 'info',
        [styles[keys.light]]: variant === 'light',
        [styles[keys.dark]]: variant === 'dark',
        [styles[keys.flat]]: variant === 'flat'
    };
};

/**
 * Button component which allows to include an icon inside it
 * it provides a set of variants and a rounded prop to make it rounded
 * @param param0
 * @returns
 */
const Button = ({ children, className, icon, rounded, block, variant, loading, ...props }) => {
    return (React.createElement(ButtonBase, { className: cs(styles$4.button, {
            ...applyButtonVariantStyles({
                styles: styles$4,
                variant
            }),
            [styles$4.rounded]: rounded,
            [styles$4.block]: block
        }, className), tabIndex: 0, ...props },
        icon && (React.createElement("i", { className: cs(styles$4.iconWrapper, {}) },
            React.createElement(Icon, { icon: icon, className: cs(styles$4.icon) }))),
        React.createElement("span", { className: styles$4.buttonContent }, loading ? 'loading ... ' : children)));
};
Button.defaultProps = {
    tabIndex: 0,
    rounded: true
};

var css_248z$3 = "";
var styles$3 = {};
styleInject(css_248z$3);

const IconButton = forwardRef(({ children, classes, icon, label, variant, onClick, ...props }, ref) => {
    const handleClick = useCallback((e) => {
        e.stopPropagation();
        onClick?.(e);
    }, [onClick]);
    const buttonRenderer = useMemo(() => {
        return (React.createElement("button", { ref: ref, type: "button", className: cs(styles$3.root, classes?.root, props?.className, {
                ...applyButtonVariantStyles({ variant, styles: styles$3 }),
                [styles$3.disabled]: props?.disabled
            }), onClick: handleClick, tabIndex: 0, ...props }, children ? children : React.createElement(Icon, { className: styles$3.icon, icon: icon })));
    }, [classes, props?.className, children]);
    if (label) {
        return (React.createElement("div", { className: styles$3.withLabelWrapper },
            buttonRenderer,
            React.createElement("span", { className: cs(styles$3.label, classes?.label) }, label)));
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

var css_248z$2 = "@use \"sass:math\";\n.input-module_root__xcWOB {\n  align-items: flex-end;\n  display: flex;\n  margin: 0.5rem 0.25rem;\n  margin-bottom: 1rem; }\n\n.input-module_input__9x0t6 {\n  background-color: #ffffff;\n  border: 1px solid #b3b3b3;\n  border-radius: 20px;\n  color: #000;\n  max-width: 100%;\n  min-height: 1.5rem;\n  padding: 0.2rem 1rem;\n  width: 100%; }\n  .input-module_input__9x0t6::placeholder {\n    color: #b3b3b3;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out; }\n  .input-module_input__9x0t6.input-module_withLabel__m6cZE {\n    margin-top: 1.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_input__9x0t6 {\n      color: #fff;\n      background-color: #292929;\n      border-color: #8f8f8f; }\n      .input-module_input__9x0t6::placeholder {\n        color: #5c5c5c; } }\n\n.input-module_inputWrapper__qSGvA {\n  flex: 1;\n  position: relative; }\n\n.input-module_label__sQuAx {\n  /* need this to apply only on chrome */\n  -webkit-bottom: 0.25rem;\n  bottom: 0.3rem;\n  display: block;\n  left: 1rem;\n  position: absolute;\n  transition: bottom 0.2s ease-in-out, left 0.2s ease-in-out, font-size 0.2s ease-in-out; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_label__sQuAx.input-module_label__sQuAx {\n      color: #fff; } }\n\n.input-module_input__9x0t6:focus + .input-module_label__sQuAx,\n.input-module_withValue__wYYkt + .input-module_label__sQuAx {\n  bottom: calc(100% - 1.25rem);\n  font-size: 0.9rem;\n  font-weight: 500;\n  left: 0.2rem; }\n\n.input-module_input__9x0t6:focus {\n  outline: none;\n  border-color: #8d6b94; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_input__9x0t6:focus {\n      border-color: #fff; } }\n  .input-module_input__9x0t6:focus::placeholder {\n    opacity: 1; }\n\n.input-module_maxDisplay__2ajTW {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7rem;\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem; }\n  @media (prefers-color-scheme: dark) {\n    .input-module_maxDisplay__2ajTW {\n      color: rgba(255, 255, 255, 0.4); } }\n";
var styles$2 = {"root":"input-module_root__xcWOB","input":"input-module_input__9x0t6","withLabel":"input-module_withLabel__m6cZE","inputWrapper":"input-module_inputWrapper__qSGvA","label":"input-module_label__sQuAx","withValue":"input-module_withValue__wYYkt","maxDisplay":"input-module_maxDisplay__2ajTW"};
styleInject(css_248z$2);

var css_248z$1 = "@use \"sass:math\";\n.form-control-module_root__DeA9S {\n  flex: 0 0 auto;\n  max-width: 100%;\n  position: relative;\n  width: 100%; }\n\n.form-control-module_error__dWO81 {\n  color: #ef476f;\n  font-size: 0.8rem;\n  font-weight: 400;\n  position: absolute;\n  text-align: center;\n  top: 100%;\n  width: 100%; }\n";
var styles$1 = {"root":"form-control-module_root__DeA9S","error":"form-control-module_error__dWO81"};
styleInject(css_248z$1);

const FormControl = ({ children, className, error, ...props }) => {
    return (React.createElement("div", { className: cs(styles$1.root, className), ...props },
        children,
        Boolean(error) && React.createElement("p", { className: styles$1.error }, error)));
};

var css_248z = "@use \"sass:math\";\n.label-module_root__5HbZT {\n  color: #7f5174;\n  font-weight: 400; }\n  @media (prefers-color-scheme: dark) {\n    .label-module_root__5HbZT {\n      color: #000; } }\n";
var styles = {"root":"label-module_root__5HbZT"};
styleInject(css_248z);

/**
 * Facade for label element. It's a simple label element.
 * any common functinoality should be added here.
 * @returns React.FC
 */
const Label = ({ children, className, ...props }) => {
    return (React.createElement("label", { className: cs(styles.root, className), ...props }, children));
};

const InputBase = forwardRef(({ action, actionIcon, actionRef, actionVariant, className, disableAction, error, hideMax, id, isNumeric, label, leadingIcon, leadingComponent, max, maxEndingSpaces, name, onChange, onlyInput, trailingIcon, trailingComponent, trimSpaces, value, ...props }, ref) => {
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
        return (React.createElement("input", { className: cs(styles$2.input, className, {
                [styles$2.withValue]: hasValue,
                [styles$2.withLabel]: Boolean(label),
                [styles$2.withLeadingIcon]: Boolean(leadingIcon),
                [styles$2.withTrailingIcon]: Boolean(trailingIcon)
            }), id: htmlId, maxLength: max, name: name, onChange: handleChangeProxy, ref: ref, value: value || '', ...props }));
    }, [props, htmlId, max, name, className]);
    const length = useMemo(() => value?.length || 0, [value]);
    if (onlyInput) {
        return inputRender;
    }
    return (React.createElement(FormControl, { error: error, className: styles$2.root },
        leadingComponent,
        React.createElement("div", { className: styles$2.inputWrapper },
            leadingIcon && React.createElement(Icon, { icon: leadingIcon, className: styles$2.icon }),
            inputRender,
            Boolean(label) && (React.createElement(Label, { htmlFor: htmlId, className: cs(styles$2.label, {
                    [styles$2.labelWithLeadingIcon]: Boolean(leadingIcon)
                }) }, label)),
            trailingIcon && (React.createElement(Icon, { icon: trailingIcon, className: (styles$2.trailingIcon) })),
            !hideMax && hasValue && (React.createElement("span", { className: styles$2.maxDisplay }, `${length}/${max}`))),
        Boolean(action) && (React.createElement(IconButton, { ref: actionRef, icon: actionIcon, className: styles$2.actionIcon, onClick: action, variant: actionVariant, disabled: disableAction }))));
});
InputBase.defaultProps = {
    max: 100,
    trimSpaces: true
};

const Grid = ({ children, className }) => {
    return React.createElement("div", { className: cs('grid-container', className) }, children);
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
    return React.createElement("div", { className: generatedClassName }, children);
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
    return React.createElement("div", { className: cs('row', className) }, children);
};

export { Button, ButtonBase, Col, FormControl, Grid, IconButton, InputBase, Label, Row, useInputId };
//# sourceMappingURL=index.js.map
