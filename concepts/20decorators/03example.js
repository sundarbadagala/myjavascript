const stringHandler = (callback) => {
  return (...args) => {
    const isValidate = args.every((item) => typeof item === "string");
    if (!isValidate) throw new Error("Arguments should be string");
    return callback(...args);
  };
};

const lengthHandler = (callback) => {
  return (...args) => {
    const isValidate = args.every((item) => item.length > 0);
    if (!isValidate) throw new Error("Arguments should not be empty");
    return callback(...args);
  };
};

const handleClick = stringHandler(
  lengthHandler((firstName, lastName) => {
    return `Hi ${firstName} ${lastName}`;
  })
);

console.log(handleClick("ram", "raj"));
