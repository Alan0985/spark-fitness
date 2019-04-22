const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateNewUserInfo(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";

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

  if (data.weight < 0) {
    errors.weight = "Please input valid weight";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
