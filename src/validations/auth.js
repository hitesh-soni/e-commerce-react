export const loginValidate = {
  email: [
    {
      required: true,
      whitespace: true,
      message: "Email required",
    },
  ],
  password: [
    {
      required: true,
      whitespace: true,
      message: "Password required",
    },
  ],
};

export const addressValidate = {
  address: [
    {
      required: true,
      whitespace: true,
      message: "Address required",
    },
  ],
  city: [
    {
      required: true,
      whitespace: true,
      message: "City required",
    },
  ],
  state: [
    {
      required: true,
      whitespace: true,
      message: "State required",
    },
  ],
  country: [
    {
      required: true,
      whitespace: true,
      message: "Country required",
    },
  ],
  zip_code: [
    {
      required: true,
      whitespace: true,
      message: "Zip code required",
    },
  ],
};
