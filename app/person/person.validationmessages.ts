export var validation_messages = {
  firstName: [
    { type: "required", message: "First name is required." },
    {
      type: "maxlength",
      message: "First name cannot be more than 20 characters long."
    }
  ],
  lastName: [
    { type: "required", message: "Last name is required." },
    {
      type: "maxlength",
      message: "Last name cannot be more than 40 characters long."
    }
  ],
  nationalRegNumber: [
    { type: "pattern", message: "Registration number is not correct." }
  ]
};
