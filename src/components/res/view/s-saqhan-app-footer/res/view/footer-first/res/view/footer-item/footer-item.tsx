import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "footer-item",
  styleUrl: "footer-item.css",
  shadow: false,
})
export class FooterItem implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
      <li>
        <a href="#" class="foot-nav-link">
          {this.arr.name}
        </a>
      </li>
    );
  }
}
