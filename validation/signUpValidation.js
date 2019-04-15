const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateSignUpInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.name, { min: 2 })) {
    errors.name = "Name must be at least 2 characters";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Please input a valid Email";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!validator.isLength(data.password, { min: 4, max: 30 })) {
    errors.password =
      "Password must be at least 4, and no more than 30 characters";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords don't match";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
