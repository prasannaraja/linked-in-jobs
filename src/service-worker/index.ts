const IsLinkedInJobSection = (tabUrl: string): boolean => {
  return tabUrl.includes(`https://www.linkedin.com/jobs/search/`);
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (IsLinkedInJobSection(tab.url!))
      chrome.scripting.executeScript({
        files: ["content-script.js"],
        target: { tabId: tab.id! },
      });
  }
});
