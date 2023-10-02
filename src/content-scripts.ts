function analyzeHTMLByClass(className: string) {
  // Initialize ranking and matched keywords arrays
  let ranking = "Low";
  let matchedKeywords: string[] = [];

  // Define the keywords to search for
  const keywordsToMatch = [
    ".net",
    "angular",
    "react",
    "c#",
    "mvc",
    "full stack developer",
    "visa sponsorship",
  ];

  // Get elements with the specified class name
  const elements = document.getElementsByClassName(className);

  // Iterate through each element and analyze its content
  for (const element of elements) {
    // Recursive function to traverse through nodes
    function traverse(node: any) {
      if (node.nodeType === Node.TEXT_NODE) {
        // Check if the text content of the node contains any keyword
        const text = node?.textContent?.toLowerCase();
        for (const keyword of keywordsToMatch) {
          if (text?.includes(keyword)) {
            // Update ranking to High and add the matched keyword
            ranking = "High";
            matchedKeywords.push(keyword);
          }
        }
      }

      // Recursively traverse child nodes
      for (const childNode of node.childNodes) {
        traverse(childNode);
      }
    }

    // Start traversing from the current element
    traverse(element);
  }

  // Return the ranking and matched keywords
  return { ranking, matchedKeywords };
}

// Example usage:
// const className = "yourClassName"; // Replace with your actual class name
// const result = analyzeHTMLByClass(className);
// console.log("Ranking:", result.ranking);
// console.log("Matched Keywords:", result.matchedKeywords);

if (document.readyState !== "loading") {
  document.addEventListener("click", (event) => {
    const layoutElement = document.getElementsByClassName("job-view-layout");
    const jobDetailTopCard = document.getElementsByClassName(
      "job-details-jobs-unified-top-card__primary-description"
    );

    const { ranking, matchedKeywords } = analyzeHTMLByClass("job-view-layout");

    const newParagraph = document.createElement("p");
    newParagraph.textContent = matchedKeywords.join(",");

    // Create the <div> element
    var divElement = document.createElement("div");

    // Create the <p> element
    var pElement = document.createElement("p");

    // Set the text content of the <p> element
    pElement.textContent = matchedKeywords.join(",");

    // Append the <p> element to the <div> element
    divElement.appendChild(pElement);

    jobDetailTopCard.item(0)?.appendChild(divElement);
  });
}
