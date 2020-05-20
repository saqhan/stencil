import { Component, h } from "@stencil/core";

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
        <first-slider />
        <new-blog />
        <popular-news />
        <events-blog />
        <subsc-banner />
        <app-footer/>
      </div>
    );
  }
}
