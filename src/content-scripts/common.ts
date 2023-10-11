export class Common {
  rootNodeClass = "job-details-jobs-unified-top-card__content--two-pane";

  get jobDetailsCardElement(): Element | null {
    return document.querySelector(`.${this.rootNodeClass}`);
  }

  get companyName(): string | null | undefined {
    const selector = `.${this.rootNodeClass} :nth-child(2) a`;
    return document.querySelector(selector)?.textContent;
  }

  get workLocation(): string | null | undefined {
    return document
      .querySelector(`.${this.rootNodeClass} :nth-child(2) div`)
      ?.textContent?.toLowerCase();
  }

  IsWorkLocation(location: string): boolean | undefined {
    return this.workLocation?.includes(location.toLowerCase());
  }

  get shadowRootStyle() {
    const style = document.createElement("style");
    style.textContent = `
    .div {
      border:3px solid blue;
      margin:10px;
      padding:10px
    }`;
    return style;
  }

  get companyNameNode() {
    const div = document.createElement("div");
    div.className = "p-company-name";
    div.textContent = `${this.companyName}`;
    return div;
  }

  get shadowRootNode() {
    const div = document.createElement("div");
    div.className = "div root-class";
    div.appendChild(this.companyNameNode);
    return div;
  }

  get hostElementNode() {
    const hostElm = document.createElement("div");
    hostElm.className = "job-top-card-ai-section-host";
    return hostElm;
  }

  get hostElement() {
    return document.querySelector(".job-top-card-ai-section-host");
  }

  get rootElement(): Element | null {
    return document.querySelector(
      ".job-details-jobs-unified-top-card__content--two-pane",
    );
  }
}

export default Common;
