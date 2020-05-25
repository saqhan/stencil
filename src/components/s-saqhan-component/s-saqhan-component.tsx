import {Component, h} from "@stencil/core";
import {blogCarouselMock, blogPost,popularNews,events } from "../../utils/mock";

@Component({
  tag: "s-saqhan-component",
  styleUrl: "s-saqhan-component.css",
  shadow: false,
})
export class SSaqhanComponent {



  render() {
    return (
      <div>
        <s-saqhan-header-app />
        <s-saqhan-first-slider blogCarouselMock={blogCarouselMock} />
        <s-saqhan-new-blog blogPost={blogPost}/>
        <s-saqhan-popular-news popularNews={popularNews} />
        <s-saqhan-events-blog events={events}/>
        <s-saqhan-subsc-banner />
        <s-saqhan-app-footer/>
      </div>
    );
  }
}
