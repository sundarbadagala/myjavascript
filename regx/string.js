//combinaiton of charecters and numbers and white spaces
export const nameOptional = /^(([\s\S\d\D\w\W]+)|)$/i
export const nameRequired = /^[\s\S\d\D\w\W]+$/i

//only charecters
const name = /^[a-z][a-z\s]+$/g