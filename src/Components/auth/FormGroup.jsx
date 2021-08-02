const FormGroup = ({ type, placeholder, name, icono, handleOnChange }) => {
  return (
    <div className="auth__formGroup">
      <input
        type={type}
        className="auth__input"
        placeholder={placeholder}
        name={name}
        onChange={e => handleOnChange(name, e.target.value)}
      />
      <i aria-hidden className={icono}></i>
    </div>
  );
};

export default FormGroup;
