const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateContactForm(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.text = !isEmpty(data.text) ? data.text : "";

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

  if (!validator.isLength(data.text, { min: 10 })) {
    errors.text = "Message must be at least 10 characters";
  }

  if (validator.isEmpty(data.text)) {
    errors.text = "Message is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
