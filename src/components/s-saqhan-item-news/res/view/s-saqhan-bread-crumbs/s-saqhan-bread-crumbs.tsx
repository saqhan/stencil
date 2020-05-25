import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-bread-crumbs",
  styleUrl: "s-saqhan-bread-crumbs.css",
  shadow: false,
})
export class SSaqhanBreadCrumbs implements ComponentInterface {
  @Prop() links: any;

  getLinks(arr) {
    return arr.map((item) => item);
  }

  render() {
    return (
      <div>
        <BreadLinks links={this.getLinks(this.links)} />
      </div>
    );
  }
}

const BreadLinks = (props) => {
  return props.links.map((item) => {
    return (
      <div class="container">
        <s-saqhan-bread-card links={item} />
      </div>
    );
  });
};
