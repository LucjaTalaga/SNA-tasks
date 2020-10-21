
// function that gets the actual date and adds given number of hours
function datePlusHours(hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours* 60 * 60 * 1000));
    return date.toString();
}

console.log(datePlusHours(40));