//the maximum safe integer (Number.MAX_SAFE_INTEGER, which is 9,007,199,254,740,991).
let mydate = new Date();
console.log(mydate.getDate(23));

/**
 * A date is represented internally as a single number, the timestamp.
 *  When interacting with it, the timestamp needs to be interpreted as a 
 * structured date-and-time representation. There are always two ways to 
 * interpret a timestamp: as a local time or as a Coordinated Universal 
 * Time (UTC), the global standard time defined by the World Time Standard. The local timezone is not stored in the 
 * date object, but is determined by the host environment (user's device).
 */

console.log(mydate.toString());
/*console.log(mydate.toDateString()); // only give date 
console.log(mydate.getFullYear())
console.log(mydate.getHours())
console.log(mydate.getMilliseconds())
console.log(mydate.getTimezoneOffset())
console.log(mydate.setTime(25))
console.log(mydate.toDateString());
console.log(mydate.getMinutes())
console.log(mydate.getMonth())
console.log(mydate.getHours())
console.log(mydate.getUTCDay())*/
let newdate = new Date(2025,0,23,7,6,90,33)
console.log(newdate.toLocaleDateString()) // mm-dd-yyyy
console.log(newdate.toLocaleString())

// creating quizes and pole we use timestamp

let mytimestamp = Date.now();

console.log(mytimestamp)// give in milliseconds

console.log(newdate.getTime())
//Also returns the number of milliseconds since Jan 1, 1970, just like Date.now().
// now we need to compare dates then
console.log(Math.round(Date.now()/1000))

newdate.toLocaleString('default' ,{
    dayPeriod: "week"
})
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z








