// Importing the 'fs' (File System) module in Node.js to work with the file system
const fs = require("fs");

// Using the readFile method read the contents of 'sample.txt' file
fs.readFile("sample.txt", "utf8", (err, data) => {
  // If there is an error (e.g., file not found), this block will handle it
  if (err) {
    // Logs an error message if file reading fails
    console.error("Error reading the file:", err);
    return; // Exit the function if an error occurs
  }
  // If no error, log the content of the file to the console
  console.log(data);
});
