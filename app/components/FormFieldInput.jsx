import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormFieldInput = ({ input, id, placeholder, className, label, type, meta: { touched, error, warning } }) => {
  const classNames = classnames('form-group', className);
  return (
    <div className={classNames}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...input} id={id} className="form-control" placeholder={placeholder || label} type={type} />
      {touched && (
        (error && <small className="error form-text text-muted">{error}</small>) ||
        (warning && <small className="form-text text-muted">{warning}</small>)
      )}
    </div>
  );
};

FormFieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

FormFieldInput.defaultProps = {
  type: 'text',
  className: null,
};

export default FormFieldInput;

