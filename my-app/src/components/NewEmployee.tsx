import { Formik } from "formik"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../store/action";

interface Props{
  id: number | null,
  name: string,
  email: string,
  address : string
}
const defaultProps: Props = {
  id: null,
  name: "",
  email: '',
  address : ''
}

const NewEmployee = (props: Props) => {
  const {name,email,address} = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
      <Formik
        initialValues={{ name: name || '', email: email || '',address : address || '' }}
        validate={values => {
          const errors:any = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            let {name,email,address} = values
            dispatch(addEmployee(name, email, address))
            navigate('/')
            setSubmitting(true);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="name"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
NewEmployee.defaultProps = defaultProps
export default NewEmployee