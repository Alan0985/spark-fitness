const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateNewUserInfo(data) {
  let errors = {};

  if (data.weight < 0) {
    errors.weight = "Please input valid weight";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
