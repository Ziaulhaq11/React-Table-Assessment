import { Formik } from "formik"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee, editEmployee } from "../store/action";
import './styles.css'

interface Props {
  id: number,
  name: string,
  email: string,
  address: string
}
const defaultProps: Props = {
  id: 0,
  name: "",
  email: '',
  address: ''
}

const EmployeeForm = (props: Props) => {
  const { id, name, email, address } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="main-form">
      <Formik
        initialValues={{ id: id, name: name, email: email, address: address }}
        validate={values => {
          const errors: any = {};
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
            let { name, email, address } = values
            if (id) {
              dispatch(editEmployee(id, name, email, address))
            } else {
              dispatch(addEmployee(name, email, address))
            }
            navigate('/')
            setSubmitting(true);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="sub-form" onSubmit={handleSubmit}>

            {!!id &&
              <div className="form">
                <input
                type="number"
                name="id"
                disabled
                value={values.id}
              />
              </div>
            }
            <div className="form">
              <input
                type="name"
                name="name"
                placeholder="Name..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              /></div>
            <div className="form email">
              <input
                type="email"
                name="email"
                placeholder="Email..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form">
              <input
                type="name"
                name="address"
                placeholder="Address..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
            </div>
            <div className="form">
              <button type="submit" className="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
EmployeeForm.defaultProps = defaultProps
export default EmployeeForm