// Helper function to create a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main async function to iterate with async/await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await delay(1000); // Delay for 1 second
  }
}

// Example usage
const values = ["Imo", "Rivers", "Abuja", "Delta", "Ebonyi"];
iterateWithAsyncAwait(values);

//task 2 & 3
const AWAITCALL = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/");
    const dataDisplay = await data.json();
    console.log(dataDisplay);
  } catch (error) {
    console.log("profile not found in database");
  }
};
console.log(AWAITCALL());

//task 4
async function concurrentRequests() {
  const url1 = "https://api.example.com/endpoint1";
  const url2 = "https://api.example.com/endpoint2";

  try {
    // Create promises for both API calls
    const request1 = fetch(url1).then((response) => response.json());
    const request2 = fetch(url2).then((response) => response.json());

    // Wait for both promises to resolve using Promise.all
    const [result1, result2] = await Promise.all([request1, request2]);

    // Log the combined results
    console.log("Combined Results:", { result1, result2 });
  } catch (error) {
    // Handle any errors that might have occurred during the requests
    console.error("Error making API calls:", error);
  }
}

// Call the function to test it
concurrentRequests();
