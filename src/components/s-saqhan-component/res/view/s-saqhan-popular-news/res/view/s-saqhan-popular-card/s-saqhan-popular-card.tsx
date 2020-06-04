import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-popular-card",
  styleUrl: "s-saqhan-popular-card.css",
  shadow: false,
})
export class SSaqhanPopularCard implements ComponentInterface {
  /**
  * Массив с популярными элементами
  * */
  @Prop() post: any;
  /**
   * клик по новости
  **/
  @Event() clickOnLentaNews: EventEmitter;
  /**
   * клик по категории новости
   **/
  @Event() clickOnNewsCategory: EventEmitter;

  render() {
    return (
      <div class="news-block">
        <div
          class="news-img"
          style={{ backgroundImage: `url(${this.post.img})` }}
          onClick={() => this.clickOnLentaNews.emit(this.post.img)}
        ></div>
        <div class="news-info">
          <div
            class={this.ColorCategory(this.post.category)}
            onClick={() => this.clickOnNewsCategory.emit(this.post.category)}
          >
            {this.post.category}
          </div>
          <div
            class="lenta-title"
            onClick={() => this.clickOnLentaNews.emit(this.post.title)}
          >
            {this.post.title}
          </div>
          <div class="btn-read">
            <span onClick={() => this.clickOnLentaNews.emit(this.post.btnText)}>
              {this.post.btnText}
            </span>
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
