import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-popular-card",
  styleUrl: "s-saqhan-popular-card.css",
  shadow: false,
})
export class SSaqhanPopularCard implements ComponentInterface {
  @Prop() post: any;

  render() {
    return (
      <div class="news-block">
        <div class="news-img"></div>
        <div class="news-info">
          <div class={this.ColorCategory(this.post.category)} >{this.post.category}</div>
          <div class="lenta-title">{this.post.title}</div>
          <div class="btn-read">
            <a href="#"> {this.post.btnText} </a>
          </div>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "lenta-category category";
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
