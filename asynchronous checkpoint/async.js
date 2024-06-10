// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

const values = ["A", "B", "C", "D", "E"];
iterateWithAsyncAwait(values);

// Task 02: Awaiting a Call
async function awaitCall() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

awaitCall();

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
}

awaitCall();

//Task 04: Chaining Async/Await
async function function1() {
  console.log("Function 1 executed");
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function function2() {
  console.log("Function 2 executed");
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function function3() {
  console.log("Function 3 executed");
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function chainedAsyncFunctions() {
  await function1();
  await function2();
  await function3();
}

chainedAsyncFunctions();

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
  const [response1, response2] = await Promise.all([
    fetch("https://api.example.com/data1"),
    fetch("https://api.example.com/data2"),
  ]);
  const data1 = await response1.json();
  const data2 = await response2.json();
  console.log("Data 1:", data1);
  console.log("Data 2:", data2);
}

concurrentRequests();
