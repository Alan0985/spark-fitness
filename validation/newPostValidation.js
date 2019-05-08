const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateNewUserInfo(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (validator.isEmpty(data.text)) {
    errors.text = "Please Say Something";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
