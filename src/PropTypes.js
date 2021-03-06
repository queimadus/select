import PropTypes from 'prop-types';

function valueType(props, propName, componentName) {
  const basicType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]);

  const labelInValueShape = PropTypes.shape({
    key: basicType.isRequired,
    label: basicType,
  });
  if (props.labelInValue) {
    const validate = PropTypes.oneOfType([
      PropTypes.arrayOf(labelInValueShape),
      labelInValueShape,
    ]);
    const error = validate(...arguments);
    if (error) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`, ` +
          `when you set \`labelInValue\` to \`true\`, \`${propName}\` should in ` +
          `shape of \`{ key: string | number, label?: string | number }\`.`
      );
    }
  } else if (props.multiple && props[propName] === '') {
    return new Error(
      `Invalid prop \`${propName}\` of type \`string\` supplied to \`${componentName}\`, ` +
        `expected \`array\` when \`multiple\` is \`true\`.`
    );
  } else {
    const validate = PropTypes.oneOfType([
      PropTypes.arrayOf(basicType),
      basicType,
    ]);
    return validate(...arguments);
  }
}

export const SelectPropTypes = {
  defaultActiveFirstOption: PropTypes.bool,
  multiple: PropTypes.bool,
  filterOption: PropTypes.any,
  children: PropTypes.any,
  showSearch: PropTypes.bool,
  disabled: PropTypes.bool,
  allowClear: PropTypes.bool,
  showArrow: PropTypes.bool,
  tags: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  transitionName: PropTypes.string,
  optionLabelProp: PropTypes.string,
  optionFilterProp: PropTypes.string,
  animation: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.any,
  onDeselect: PropTypes.func,
  labelInValue: PropTypes.bool,
  value: valueType,
  defaultValue: valueType,
  dropdownStyle: PropTypes.object,
  maxTagTextLength: PropTypes.number,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.any,
  tokenSeparators: PropTypes.arrayOf(PropTypes.string),
  getInputElement: PropTypes.func,
  showAction: PropTypes.arrayOf(PropTypes.string),
};
