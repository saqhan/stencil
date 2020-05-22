import {Component, h} from "@stencil/core";
import {blogCarouselMock, blogPost,popularNews,events } from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {



  render() {
    return (
      <div>
        <header-app />
        <first-slider blogCarouselMock={blogCarouselMock} />
        <new-blog blogPost={blogPost}/>
        <popular-news popularNews={popularNews} />
        <events-blog events={events}/>
        <subsc-banner />
        <app-footer/>
      </div>
    );
  }
}
