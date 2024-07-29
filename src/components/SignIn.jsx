import { useFormik } from "formik";
import React, { useEffect } from "react";
import { SignUpSchema } from "./SignUpSchema";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
const SignIn = () => {
  let navigate = useNavigate();

  async function SubmitFunk(values, actions) {
    console.log(values);
    navigate("products");
    actions.resetForm();

    try {
      const response = await axios.post(apiKey, values);
    } catch (err) {
      console.error(err);
    }
  }

  const apiKey = import.meta.env.VITE_API_KEY;
  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      rule: "",
      gender: "",
    },

    onSubmit: SubmitFunk,

    validationSchema: SignUpSchema,
  });

  // useEffect(()=>{
  //   getData()
  // } , [])
  // const getData = async()=>{
  //   const res = await axios.get('http://localhost:3000/users')
  //    console.log(res.data);
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="content">
          {" "}
          <div>
            <div className="input-wrapper">
              <label htmlFor="name">Adiniz:</label> <br />
              <input
                type="text"
                id="name"
                placeholder="Adinizi daxil edin..."
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div className="input-wrapper">
              <label htmlFor="surname">Soyadiniz:</label> <br />
              <input
                type="text"
                id="surname"
                placeholder="Soyadinizi daxil edin..."
                value={values.surname}
                onChange={handleChange}
              />
              {errors.surname && <div className="error">{errors.surname}</div>}
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">Emailiniz:</label> <br />
              <input
                type="text"
                id="email"
                placeholder="Emailinizi daxil edin..."
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>
          <div>
            <div className="input-wrapper">
              <label htmlFor="phone">Telefon nomreniz:</label> <br />
              <input
                type="phone"
                id="phoneNumber"
                placeholder="Telefon nomresini daxil edin..."
                value={values.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <div className="error">{errors.phoneNumber}</div>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password:</label> <br />
              <input
                type="password"
                id="password"
                placeholder="Sifrenizi daxil edin..."
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="confirmPassword">Confirm Password:</label> <br />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Sifrenizi tekrar daxil edin..."
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
          </div>{" "}
        </div>
        <div className="content-footer">
          {" "}
          <p>Cinsiyyetiniz:</p>{" "}
          <div className="input-wrapper footer">
            <label htmlFor="kisi">Kisi</label> <br />
            <input
              type="radio"
              name="gender"
              id="kisi"
              value={"kisi"}
              onChange={handleChange}
            />
            {errors.gender && <div className="error">{errors.gender}</div>}
          </div>
          <div className="input-wrapper footer">
            <label htmlFor="qadin">Qadin </label> <br />
            <input
              type="radio"
              name="gender"
              id="qadin"
              value={"qadin"}
              onChange={handleChange}
            />
            {errors.gender && <div className="error">{errors.gender}</div>}
          </div>
          <div className="input-wrapper footer">
            <label htmlFor="rule">Men robot deyilem!</label> <br />
            <input
              type="checkbox"
              id="rule"
              value={values.rule}
              onChange={handleChange}
            />
            {errors.rule && <div className="error">{errors.rule}</div>}
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignIn;
