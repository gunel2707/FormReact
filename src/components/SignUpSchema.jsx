import * as Yup from "yup";
export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().min(2).max(10, "To long!").required(),
  surname: Yup.string().min(5).max(20, "To long!").required(),
//   age: Yup.number()
//     .moreThan(18, "18-den boyuk olmalidir.")
//     .lessThan(100)
//     .required(),
  password: Yup.string().required().min(3).max(10),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), "sifre eyni deyil"]),
  rule: Yup.boolean().required("Mutleq secin"),
});
