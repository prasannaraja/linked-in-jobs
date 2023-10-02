chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.someData) {
    console.log(`Received data: ${message.someData}`);
    // You can do something with the data here
  }
});
