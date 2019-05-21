const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateContactForm(data) {
  let errors = {};

  if (!validator.isLength(data.name, { min: 2 })) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Please input a valid Email";
  }

  if (!validator.isLength(data.text, { min: 10 })) {
    errors.text = "Message must be at least 10 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
