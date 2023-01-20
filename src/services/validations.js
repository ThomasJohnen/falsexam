// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;
const isRightLength = (label) => label.length > 8;
const isSpecialChar = (label) => !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(label);

exports.isEmpty = isEmpty;
