const convertFahrToCelsius = (number) => {

    if(Array.isArray(number)) {
        return JSON.stringify(number) + " is not a number but an Array"
    } else if(typeof(number) === 'object') {
        return JSON.stringify(number) + " is not a number but an Object"
    }
    else if(typeof(number) === 'string') {
        return number + " is not a number but a String"
    }
    else if(typeof(number) === 'boolean') {
        return JSON.stringify(number) + " is not a number but a Boolean"
    }
    else {
        const celcius = (number - 32) / 1.8;
        const roundup = celcius.toFixed(4)
        return roundup + " deg C";
    }
}


