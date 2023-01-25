import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ParticipantForm({ postData }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required!")
        .max(15, "Must be less than 15 characters"),
      lastName: Yup.string()
        .required("Required!")
        .max(15, "Must be less than 15 characters"),
      email: Yup.string().email("Invalid Email address!").required("Required"),
    }),
    onSubmit: (values) => {
      postData(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <h1>Add participant</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          {...formik.getFieldProps("firstName")}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <div className="window text-danger p-1 rounded-2">
            {formik.errors.firstName}
          </div>
        )}
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" {...formik.getFieldProps("lastName")} />
        {formik.errors.lastName && formik.touched.lastName && (
          <div className="window text-danger p-1 rounded-2">
            {formik.errors.lastName}
          </div>
        )}
        <br />
        <label for="lname">Email:</label>
        <br />
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.errors.email && formik.touched.email && (
          <div className="window text-danger p-1 rounded-2">
            {formik.errors.email}
          </div>
        )}
        <br />
        <br />
        <button
          data-testid="add-button"
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default ParticipantForm;
