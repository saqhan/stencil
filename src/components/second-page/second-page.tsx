import { Component, ComponentInterface, h } from "@stencil/core";
import { blogPost, banner, authors } from "../../utils/mock";

@Component({
  tag: "second-page",
  styleUrl: "second-page.css",
  shadow: false,
})
export class SecondPage implements ComponentInterface {
  render() {
    return (
      <div>
        <header-app />
        <line-book banner={banner} />
        <quote-text />
        <author-info author={authors} />
        <subsc-banner />
        <new-blog blogPost={blogPost} />
        <app-footer />
      </div>
    );
  }
}
