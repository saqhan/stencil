import {
  Component,
  ComponentInterface, Event, EventEmitter,
  h,
  Prop,
} from "@stencil/core";
// import { SSaqhanLentaNewsCardItem } from "./interface/common.interface";

@Component({
  tag: "s-saqhan-lenta-news-card",
  styleUrl: "s-saqhan-lenta-news-card.css",
  shadow: false,
})
export class SSaqhanLentaNewsCard implements ComponentInterface {
  // @Prop() lentaNews: SSaqhanLentaNewsCardItem[] = [];
  @Prop() lentaNews: any;
  @Event() clickOnLentaNews: EventEmitter;
  @Event() clickOnNewsCategory: EventEmitter;
  render() {
    return (
      <div class="lenta-news ">
        <div
          class="lenta-img pr-4 custom-link"
          onClick={() => this.clickOnLentaNews.emit(event)}
          style={{ backgroundImage: `url(${this.lentaNews.img})` }}
        ></div>
        <div class="lenta-info custom-link">
          <div onClick={() => this.clickOnNewsCategory.emit()} class={this.ColorCategory(this.lentaNews.category)}>
            {this.lentaNews.category}
          </div>
          <div onClick={() => this.clickOnLentaNews.emit(event)} class="lenta-title  custom-link">
            {this.lentaNews.title}
          </div>
          <div class="btn-read custom-link"  >
            <span onClick={() => this.clickOnLentaNews.emit(event)} >{this.lentaNews.btnText}</span>
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
