import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Userform() {
    const navigate = useNavigate();
    const URI = 'http://localhost:5000/users';
    const isAddMode = true


    const allroles = [
        {
            value: "User",
            label: "User"
        },
        {
            value: "Admin",
            label: "Admin"
        },
        {
            value: "Manager",
            label: "Manager"
        },
    ];
    const initialValues = {
        name: '',
        email: '',
        age: '',
        role: '',
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required(' Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        age: Yup.number()
            .typeError('you must specify a number')
            .min(0, 'Min value 0.')
            .max(30, 'Max value 30.')
            .required('Age is required'),
        role: Yup.string()
            .required('role is required'),
    });
    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        if (isAddMode) {
            createuser(fields, setSubmitting);
        } else {
            // updateUser(id, fields, setSubmitting);
        }
    }
    function createuser(fields, setSubmitting) {
        axios.post(URI, fields)
            .then((result) => {
                debugger;
                if (result.status === 201) {
                    toast.success("User added successfully.. !");
                    navigate('/users')
                    setSubmitting(false);

                }
            });
    };

    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    <div ><h4 className="page-title">Student Details</h4></div>
                </div>
            </div>
            <div className="card-body">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ errors, touched, isSubmitting, setFieldValue }) => {
                        return (
                            <Form>
                                <div className="form-row">
                                    <div className="form-group col-5 mt-2">
                                        <label> Name</label>
                                        <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                        <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-5 mt-2">
                                        <label>Email</label>
                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-5 mt-2">
                                        <label>Age</label>
                                        <Field name="age" type="text" className={'form-control' + (errors.age && touched.age ? ' is-invalid' : '')} />
                                        <ErrorMessage name="age" component="div" className="invalid-feedback" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-5 mt-2">
                                        <label>Role</label>
                                        <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}>
                                            <option value=""></option>
                                            {allroles.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="role" component="div" className="invalid-feedback" />
                                    </div>
                                </div>

                                <div className="form-group mt-2">
                                    <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Save
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Userform