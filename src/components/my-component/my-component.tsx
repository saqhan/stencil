import { Component, Prop, h } from "@stencil/core";
// import { format } from "../../utils/utils";
import { blogCarouselMock } from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {

  componentDidLoad() {
    blogCarouselMock;
  }

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    return (
      <div>
        <header-app/>
        <first-slider
        />
      </div>
    );
  }
}
