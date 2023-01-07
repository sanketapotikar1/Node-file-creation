const dateObject = new Date();
const date = `0 ${dateObject.getDate()}`.slice(-2);

const month = `0 ${dateObject.getMonth() + 1}`.slice(-2);

const year = dateObject.getFullYear();

const hours = dateObject.getHours();

const minutes = dateObject.getMinutes();

const seconds = dateObject.getSeconds();

const Current_Timestamp = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

const fs = require("fs");

fs.writeFile(
  `./filename-${Current_Timestamp}.html`,
  Current_Timestamp,
  (err) => {
    console.log("Writing Completed.");
  }
);
