import React, { useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import addpost from "../../repositories/blogrepositories";

function PostForm(props) {
  //   const [message, setMessage] = useState("");
  const initialValues = {
    title: "",
    description: "",
    email: "",
    date: "",
  };
  const [isupload, setLoading] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
    addpost(values).then((response) => {
      setLoading(true);
      console.log(response);
      props.closeform();
      console.log("added");
    });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "Title cannot be empty";
    }

    if (!values.description) {
      errors.description = "Description cannot be empty";
    }

    if (!values.email) {
      errors.email = "Email cannot be empty";
    } else if (
      !/(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/.test(
        values.email
      )
    ) {
      errors.email = "Email must be in correct format";
    }

    if (!values.date) {
      errors.date = "Date cannot be empty";
    } else if (
      !/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
        values.date
      )
    ) {
      errors.date = "Date must be in DD/MM/YYYY format";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <div className="card">
        <div className="card-header bg-primary">Add Post Details</div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="small text-danger">{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="form-group mt-3">
              <label htmlFor="description">Description</label>
              <textarea
                rows="4"
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="small text-danger">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>

            <div className="form-group mt-3">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="small text-danger">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group mt-3">
              <label htmlFor="Date">Date</label>
              <input
                type="text"
                className="form-control"
                id="date"
                name="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
              {formik.touched.date && formik.errors.date ? (
                <div className="small text-danger">{formik.errors.date}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {/* {message ? <div>{message}</div> : null} */}
        </div>
      </div>
    </>
  );
}

export default PostForm;
