import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "lenta-news-card",
  styleUrl: "lenta-news-card.css",
  shadow: false,
})
export class LentaNewsCard implements ComponentInterface {
  @Prop() lentaNews: any;

  render() {
    return (
      <div class="lenta-news d-flex justify-content-between">
        <div class="lenta-img pr-4"> </div>
        <div class="lenta-info">
          <div class=" category lenta-category small text-primary">
            {this.lentaNews.category}
          </div>
          <div class="lenta-title font-weight-bold pt-1">
            {this.lentaNews.title}
          </div>
          <div class="btn-read">
            <a href="/second-page/">Read Report</a>
          </div>
        </div>
      </div>
    );
  }
}
