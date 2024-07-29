import * as Yup from "yup";
export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().min(2).max(10, "To long!").required(),
  surname: Yup.string().min(5).max(20, "To long!").required(),
//   age: Yup.number()
//     .moreThan(18, "18-den boyuk olmalidir.")
//     .lessThan(100)
//     .required(),
phoneNumber: Yup.string()
.matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
.min(10, "too short")
  .max(10, "too long")
  .required(),
  password: Yup.string().required().min(3).max(10),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), "sifre eyni deyil"]),
  rule: Yup.boolean().required("Mutleq secin"),
gender:Yup.string().required("Birini secmelisiniz!")
});
