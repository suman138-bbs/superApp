import { useState } from "react";
import style from "./signup.module.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const defaultError = {
    errorName: "",
    errorUsername: "",
    errorEmail: "",
    errorNumber: "",
    errorAgree: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    agree: "",
  });

  const [error, setError] = useState(defaultError);
  const dataValidate = (data) => {
    if (/\d/.test(data.name)) {
      setError({
        ...defaultError,
        errorName: "Name should not contain numbers.",
      });
    } else if (data.name === "") {
      setError({ ...defaultError, errorName: "Field is required" });
    } else if (data.username === "") {
      setError({ ...defaultError, errorUsername: "Field is required" });
    } else if (data.email === "") {
      setError({ ...defaultError, errorEmail: "Field is required" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      setError({ ...defaultError, errorEmail: "Invalid Email" });
    } else if (data.mobile === "") {
      setError({ ...defaultError, errorNumber: "Field is required" });
    } else if (data.number?.toString()?.length < 10) {
      setError({ ...defaultError, errorNumber: "Invalid Number" });
    } else if (data.agree !== true) {
      setError({ ...defaultError, errorAgree: "Field is required" });
    } else {
      setError(defaultError);
      const data = JSON.stringify(formData);
      localStorage.setItem("formData", data);

      console.log(JSON.parse(localStorage.getItem("formData")));
      navigate("/categories");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataValidate(formData);
  };

  const handleChange = (value) => {
    setFormData({ ...value });
  };
  return (
    <div className={style.signUpContainer}>
      <form>
        <div className={style.formHeader}>
          <h1 className={style.heading}>Super app</h1>
          <p>Create Your new account</p>
        </div>
        <div className={style.inputContainer}>
          <div>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => {
                handleChange({ ...formData, name: e.target.value });
              }}
            />
            <p className={style.error}>{error.errorName}</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="UserName"
              required
              onChange={(e) => {
                handleChange({ ...formData, username: e.target.value });
              }}
            />
            <p className={style.error}>{error.errorUsername}</p>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                handleChange({ ...formData, email: e.target.value });
              }}
            />
            <p className={style.error}>{error.errorEmail}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Mobile"
              required
              onChange={(e) => {
                handleChange({ ...formData, number: e.target.value });
              }}
            />
            <p className={style.error}>{error.errorNumber}</p>
          </div>
        </div>
        <div className={style.checkBox}>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange({ ...formData, agree: !formData.agree });
            }}
          />

          <label htmlFor="">Share my registration data with Superapp</label>
          <p className={style.error}>{error.errorAgree}</p>
        </div>

        <div className={style.termsAndCondition}>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            SIGN UP
          </button>
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
