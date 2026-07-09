# Date and Time

## Creation

- new Date() -> returns current data and time
  - if an intger is passed in the Date() object
  - it returns the time after the integer milliseconds that have passed after 1-1-1970

- let date = new Date("2017-01-26");
  - returns the given date
  - for dates before 1-1-1970 use negative intergers

## Accessing and Seting Date Components

- accessing date components
  - .getFullYear() - 4 digit year
  - .getMonth() month - (0 to 11)
  - .getDate() - date 1 to 31
  - .getHours, Minutes, Seconds, Milliseconds - get corresponding time component 
  - .getDay() - day 0 to 6
  - .getTimezoneOffset() - returns difference between UTC and local time
  - .getTime() - returns the number of millisends passed from 1-1-1970

- set Date components
  - setFullYear(year, [month], [date])
  - setMonth(month, [date])
  - setDate(date)
  - setHours(hour, [min], [sec], [ms])
  - setMinutes(min, [sec], [ms])
  - setSeconds(sec, [ms])
  - setMilliseconds(ms)
  - setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

- autocorrection
  - if any component exceeds it defined value it is self adjusted
  - let date = new Date(2013, 0, 32)
    - shifts to Feb 1st

## Date.parse(str)

- it is used to read a date from a string
- the format
  - YYYY-MM-DDTHH:mm:ss.sssZ
  - 2012-01-26T13:51:50.417-07:00
  - the T character is used as a delimiter
