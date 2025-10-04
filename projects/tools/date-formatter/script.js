const currentDateParagraph = document.getElementById("current-date"); 

const dateOptionsSelectElement = document.getElementById("date-options")

const date = new Date(); // returns the current date and time

const day = date.getDate(); // returns a number between 1 and 31 to represent day of the month

const month = date.getMonth() + 1; // returns a number between 0 and 11 to represent January and December respectively. This result is zero based so you need to add '1' to get the expected month number.

const year = date.getFullYear(); // returns the year for the current day

const hours = date.getHours();// returns the hours of the date between 0 and 23 for midnight and 11pm respectively

const minutes = date.getMinutes(); // returns a number between 0 and 59 to represent the minutes for the date provided

const formattedDate = `${day}-${month}-${year}`; // returns the current date in the following format: day-month-year, for example 01-01-2001

currentDateParagraph.textContent = formattedDate; // displays the formatted date on the page


// To format the date, the 'split', 'reverse', and 'join' methods are used to modify the date string.
// 'split' method takes in the parameter as a separator
// 'reverse' method will reverse an array of elements so that the first element becomes the last, the last element becomes the first, the second element becomes the penultimate...
// 'join' method takes an array of elements and joins them into a string.

dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
        currentDateParagraph.textContent = formattedDate
            .split("-")
            .reverse()
            .join("-")
        break;
    case "mm-dd-yyyy-h-mm":
        currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;
    default:
        currentDateParagraph.textContent = formattedDate
  }
}) 
// The 'change' event detects when the value of an HTML element changed. When the user makes a selection from the dropdown menu, the function should retrieve the user's value and display the current date in the chosen format.
