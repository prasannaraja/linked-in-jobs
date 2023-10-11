import Common from "./common";

// Define the type for the 'init' function
type InitFunction = () => void;

// Declare the 'init' variable before checking if it's undefined
let init: InitFunction | undefined;

const common = new Common();

const attachShadow = () => {
  return common.hostElement?.attachShadow({ mode: "open" });
};

const appendHtml = () => {
  //shadow root
  if (!common.hostElement?.shadowRoot) {
    const shadowRoot = attachShadow();
    shadowRoot?.appendChild(common.shadowRootStyle);
    shadowRoot?.appendChild(common.shadowRootNode);
  } else {
    common.hostElement?.shadowRoot.removeChild(
      common.hostElement?.shadowRoot.querySelector(".root-class")!,
    );
    common.hostElement?.shadowRoot.append(common.shadowRootNode);
  }
};

// Check if 'init' is of type 'undefined'
if (typeof init === "undefined") {
  // Define the 'init' function
  init = () => {
    common.rootElement?.appendChild(common.hostElementNode);

    appendHtml();
  };

  // Call the 'init' function
  init();

  // job-details-jobs-unified-top-card__content--two-pane
}
