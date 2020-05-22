import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "author-info",
  styleUrl: "author-info.css",
  shadow: false,
})
export class AuthorInfo implements ComponentInterface {
  @Prop() author: any;

  getAuthor(arr) {
    return arr.map((item) => item);
  }

  render() {
    return (
      <div class="container">
        <CardAuthor author={this.getAuthor(this.author)} />
      </div>
    );
  }
}


const CardAuthor = (props) => {
  return props.author.map((item) => {
    return (
      <div class="content-text">
        <hr />
        <card-author author={item} />
      </div>
    );
  });
};
