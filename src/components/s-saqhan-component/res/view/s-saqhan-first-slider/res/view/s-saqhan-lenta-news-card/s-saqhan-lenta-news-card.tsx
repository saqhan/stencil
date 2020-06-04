import {
  Component,
  ComponentInterface, Event, EventEmitter,
  h,
  Prop,
} from "@stencil/core";
import { SSaqhanLentaNewsCardItem } from "./interface/common.interface";



@Component({
  tag: "s-saqhan-lenta-news-card",
  styleUrl: "s-saqhan-lenta-news-card.css",
  shadow: false,
})
export class SSaqhanLentaNewsCard implements ComponentInterface {
 @Prop() lentaNews: SSaqhanLentaNewsCardItem;

  @Event() clickOnLentaNews: EventEmitter;
  @Event() clickOnNewsCategory: EventEmitter;
  render() {
    return (
      <div class="lenta-news ">
        <div
          class="lenta-img pr-4 custom-link"
          onClick={() => this.clickOnLentaNews.emit(this.lentaNews.img)}
          style={{ backgroundImage: `url(${this.lentaNews.img})` }}
        ></div>
        <div class="lenta-info custom-link">
          <div onClick={() => this.clickOnNewsCategory.emit(this.lentaNews.category)} class={this.ColorCategory(this.lentaNews.category)}>
            {this.lentaNews.category}
          </div>
          <div onClick={() => this.clickOnLentaNews.emit(this.lentaNews.title)} class="lenta-title  custom-link">
            {this.lentaNews.title}
          </div>
          <div class="btn-read custom-link"  >
            <span onClick={() => this.clickOnLentaNews.emit(this.lentaNews.btnText)} >{this.lentaNews.btnText}</span>
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
