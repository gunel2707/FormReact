import { useFormik } from "formik";
import React, { useEffect } from "react";
import { SignUpSchema } from "./SignUpSchema";
import axios from "axios";

const Formik = () => {
  //   fetch(db.json, {
  //     method: 'POST',
  //     headers: {
  //        'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //        'ID': 2,
  //        'Name': 'John',
  //        'lastName': 'Doe' })
  // })
  // .then(response => response.json())
  // .then(console.log(Users))

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
      rule: "",
    },


    onSubmit : async (values, actions) => {
      console.log(values);
      actions.resetForm()
      try{
        const response = await axios.post('http://localhost:3000/users', values);
      }catch(err){
        console.error(err);
      }
    },
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
        <div className="input-wrapper">
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            placeholder="Adinizi daxil edin!"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="input-wrapper">
          <label htmlFor="surname">Surname</label> <br />
          <input
            type="text"
            id="surname"
            placeholder="Soyadinizi daxil edin!"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && <div className="error">{errors.surname}</div>}
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label> <br />
          <input
            type="text"
            id="email"
            placeholder="Emailinizi daxil edin!"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            placeholder="Sifrenizi daxil edin!"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label> <br />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Sifrenizi tekrar daxil edin!"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>

        <div className="input-wrapper">
          <label htmlFor="rule">Qaydalari oxudum ve qebul edirem!</label> <br />
          <input
            type="checkbox"
            id="rule"
            value={values.rule}
            onChange={handleChange}
          />
          {errors.rule && <div className="error">{errors.rule}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Formik;
