// Define the type for the 'init' function
type InitFunction = () => void;

// Declare the 'init' variable before checking if it's undefined
let init: InitFunction | undefined;

// Check if 'init' is of type 'undefined'
if (typeof init === "undefined") {
  // Define the 'init' function
  init = () => {
    console.log("it works");
  };

  // Call the 'init' function
  init();
}
