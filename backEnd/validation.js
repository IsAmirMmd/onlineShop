import joi from "joi";

export const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().email().min(6).required(),
    phoneNumber: joi.string().required(),
    password: joi.string().min(8).required(),
  });
  return schema.validate(data);
};

export const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return schema.validate(data);
};
