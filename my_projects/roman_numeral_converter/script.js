document.addEventListener("DOMContentLoaded", function () {
  // Cache references to HTML elements
  const form = document.getElementById("form");
  const convertButton = document.getElementById("convert-btn");
  const output = document.getElementById("output");

  // Function to convert numbers to Roman numerals
  const convertToRoman = (num) => {
    // Reference array containing Roman numeral characters and their corresponding values
    const ref = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    const res = []; // Array to store the Roman numeral representation

    // Iterate through the reference array and convert the number to Roman numerals
    ref.forEach(function (arr) {
      while (num >= arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
      }
    });

    return res.join(""); // Join the Roman numeral characters to form the final representation
  };

  // Function to validate input
  const isValid = (str, int) => {
    let errText = ""; // Variable to store error message

    // Check for various conditions and set error messages accordingly
    if (!str || str.match(/[e.]/g)) {
      errText = "Please enter a valid number.";
    } else if (int < 1) {
      errText = "Please enter a number greater than or equal to 1.";
    } else if (int > 3999) {
      errText = "Please enter a number less than or equal to 3999.";
    } else {
      // No errors detected
      return true;
    }

    // Display error message and apply error styling to the output area
    output.innerText = errText;
    output.classList.add("alert");

    return false;
  };

  // Function to clear output and remove error styling
  const clearOutput = () => {
    output.innerText = "";
    output.classList.remove("alert");
  };

  // Event listener for form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    updateUI(); // Call function to update the user interface
  });

  // Event listener for convert button click
  convertButton.addEventListener("click", () => {
    updateUI(); // Call function to update the user interface
  });

  // Function to update the user interface with converted Roman numeral
  const updateUI = () => {
    const numStr = document.getElementById("number").value; // Retrieve input number as string
    const int = parseInt(numStr, 10); // Parse input number as integer

    output.classList.remove("hidden"); // Remove 'hidden' class from output area

    clearOutput(); // Clear existing output and remove error styling

    // If input is valid, display the converted Roman numeral in the output area
    if (isValid(numStr, int)) {
      output.innerText = convertToRoman(int);
    }
  };
});
