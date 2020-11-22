function stringToNumber(value) {
    var floatValue = parseFloat(value);
    return floatValue != floatValue ? value : floatValue;
}

function numberToString(number, scale) {
    return number.toString(scale || 10);
}