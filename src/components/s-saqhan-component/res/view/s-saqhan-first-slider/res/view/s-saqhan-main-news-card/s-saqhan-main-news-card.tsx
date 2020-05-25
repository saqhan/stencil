import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-main-news-card",
  styleUrl: "s-saqhan-main-news-card.css",
  shadow: false,
})
export class SSaqhanMainNewsCard implements ComponentInterface {
  @Prop() mainNews: any;

  render() {
    return (
      <div class="main-news">
        <div>
          <div class="img-news m-auto"></div>
          <div class={this.ColorCategory(this.mainNews.category)}>
            {this.mainNews.category}
          </div>
          <div class="title-news pt-3 h2 font-weight-bold">
            {this.mainNews.title}
          </div>
          <div class="sub-title-news pt-3 pb-3 text-muted">
            {this.mainNews.subTitle}
          </div>
          <a href="/second-page/" class="btn btn-primary btn-custom">
            {this.mainNews.btnText}
          </a>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = 'category category-news pt-3 small';
    switch (nameCategory) {
      case 'Report':
        return `report ${classCategory}`;
      case `Webinar ${classCategory}`:
        return `webinar ${classCategory}`;
      case 'Blog Post':
        return `blog-post ${classCategory}`;
      default: classCategory ;
    }
  }
}


