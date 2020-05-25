import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "blog-card",
  styleUrl: "blog-card.css",
  shadow: false,
})
export class BlogCard implements ComponentInterface {
  @Prop() post: any;

  render() {
    return (
      <div class="blog-card">
        <div
          class="blog-img"
          style={{ backgroundImage: "url(" + this.post.img + ")" }}
        ></div>
        <div class={this.ColorCategory(this.post.category)}>
          {this.post.category}
        </div>
        <div class="blog-title pt-3 font-weight-bold">{this.post.title}</div>
        <div class="btn-read pt-3">
          <a href="/second-page/"> {this.post.btnText} </a>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "category small pt-4";
    switch (nameCategory) {
      case "Report":
        return `report ${classCategory}`;
      case "Webinar":
        return `webinar ${classCategory}`;
      case "Blog Post":
        return `blog-post ${classCategory}`;
      default:
        classCategory;
    }
  };
}
