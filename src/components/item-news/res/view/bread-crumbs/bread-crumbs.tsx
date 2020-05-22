import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "bread-crumbs",
  styleUrl: "bread-crumbs.css",
  shadow: false,
})
export class BreadCrumbs implements ComponentInterface {
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
        <bread-card links={item} />
      </div>
    );
  });
};
