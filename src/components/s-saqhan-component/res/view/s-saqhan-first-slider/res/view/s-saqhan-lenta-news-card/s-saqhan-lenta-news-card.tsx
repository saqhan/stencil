import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-lenta-news-card",
  styleUrl: "s-saqhan-lenta-news-card.css",
  shadow: false,
})
export class SSaqhanLentaNewsCard implements ComponentInterface {
  @Prop() lentaNews: any;

  render() {
    return (
      <div class="lenta-news d-flex justify-content-between">
        <div class="lenta-img pr-4"> </div>
        <div class="lenta-info">
          <div class={this.ColorCategory(this.lentaNews.category)}>
            {this.lentaNews.category}
          </div>
          <div class="lenta-title font-weight-bold pt-1">
            {this.lentaNews.title}
          </div>
          <div class="btn-read">
            <a href="/second-page/">{this.lentaNews.btnText}</a>
          </div>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "category lenta-category small";
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
