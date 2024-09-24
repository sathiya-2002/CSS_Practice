function calculateRectangleArea(length, width) {
    if (isNaN(length) || isNaN(width)) {
      throw new Error("Both length and width must be numbers.");
    }
  
    if (length <= 0 || width <= 0) {
      throw new Error("Both length and width must be positive numbers.");
    }
  
    return length * width;
  }
  
  try {
    const length = Number(10);
    const width = "abs";
  
    const area = calculateRectangleArea(length, width);
  
    console.log(`The area of the rectangle is: ${area}`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Program execution has ended.");
  }



  //****************************************************** 



  try {
    // Code that may throw an error
    throw new TypeError('This is a custom type error');
  } catch (error) {
    if (error instanceof TypeError) {
      // Handle specific TypeError
      console.error('A TypeError occurred:', error.message);
    } else if (error instanceof RangeError) {
      // Handle specific RangeError
      console.error('A RangeError occurred:', error.message);
    } else {
      // Handle other types of errors
      console.error('An error occurred:', error.message);
    }
  }