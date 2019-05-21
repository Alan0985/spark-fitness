const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateNewUserInfo(data) {
  let errors = {};

  // data.name = !isEmpty(data.name) ? data.name : "";

  // if (!validator.isLength(data.name, { min: 2 })) {
  //   errors.name = "Name must be at least 2 characters";
  // }

  // if (validator.isEmpty(data.name)) {
  //   errors.name = "Name is required";
  // }

  if (data.weight < 0) {
    errors.weight = "Please input valid weight";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
