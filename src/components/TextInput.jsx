import { ErrorMessage, Field } from "formik";

const TextInput = ({ name, type, placeHolder, labelText }) => {
  return (
    <>
      <label>
        {labelText}
        <span class="text-danger">*</span>
      </label>
      <Field
        type={type}
        name={name}
        class="form-control"
        placeholder={placeHolder}
      />
      <ErrorMessage name={name} component="div" className="error-msg" />
    </>
  );
};

export default TextInput;
