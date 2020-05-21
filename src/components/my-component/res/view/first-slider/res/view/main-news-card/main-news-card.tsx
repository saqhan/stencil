import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "main-news-card",
  styleUrl: "main-news-card.css",
  shadow: false,
})
export class MainNewsCard implements ComponentInterface {
  @Prop() mainNews: any;

  render() {
    return (
      <div class="main-news">
        <div>
          <div class="img-news m-auto"></div>
          <div class="category category-news pt-3 text-primary small">
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
}
