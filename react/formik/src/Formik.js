import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";

export default function FormikForm() {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validateName(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (value === "admin" || value === "Admin") {
      error = "Admin cannot be the name!";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (value.length < 6) {
      error = "Password length should be atleast 6 characters";
    }
    return error;
  }

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle}>Login</h2>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  validate={validateName}
                />
                {props.errors.name && props.touched.name && (
                  <div>{props.errors.name}</div>
                )}

                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  validate={validateEmail}
                />
                {props.errors.email && props.touched.email && (
                  <div>{props.errors.email}</div>
                )}

                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  validate={validatePassword}
                />
                {props.errors.password && props.touched.password && (
                  <div>{props.errors.password}</div>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  color="primary"
                  style={{ marginTop: "1rem" }}
                >
                  {props.isSubmitting ? "Loading" : "Sign up"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
}
