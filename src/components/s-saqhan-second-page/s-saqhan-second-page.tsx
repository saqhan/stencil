import { Component, ComponentInterface, h } from "@stencil/core";
import { blogPost, banner, authors } from "../../utils/mock";

@Component({
  tag: "s-saqhan-second-page",
  styleUrl: "s-saqhan-second-page.css",
  shadow: false,
})
export class SSaqhanSecondPage implements ComponentInterface {
  render() {
    return (
      <div>
        <s-saqhan-header-app />
        <s-saqhan-line-book banner={banner} />
        <s-saqhan-quote-text />
        <s-saqhan-author-info author={authors} />
        <s-saqhan-subsc-banner />
        <s-saqhan-new-blog blogPost={blogPost} />
        <s-saqhan-app-footer />
      </div>
    );
  }
}
