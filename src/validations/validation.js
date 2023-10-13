exports.optional = {
  post: (schema) => schema.required(),
  put: (schema) => schema.optional(),
};
