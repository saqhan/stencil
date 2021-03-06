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
   * Клик по новости
   **/
  @Event() clickOnNews: EventEmitter;

  render() {
    return (
      <div class="news-block">
        <div
          class="news-img custom-links"
          style={{ backgroundImage: `url(${this.post.img})` }}
          onClick={() =>
            this.clickOnNews.emit({ place: "img", item: this.post })
          }
        ></div>
        <div class="news-info">
          <span
            class={this.ColorCategory(this.post.category)}
            onClick={() =>
              this.clickOnNews.emit({ place: "category", item: this.post })
            }
          >
            {this.post.category}
          </span>
          <div class="lenta-title ">
            <span
              class="custom-links"
              onClick={() =>
                this.clickOnNews.emit({ place: "title", item: this.post })
              }
            >
              {this.post.title}
            </span>
          </div>
          <div class="btn-read">
            <span
              class="custom-links"
              onClick={() =>
                this.clickOnNews.emit({ place: "btn-read", item: this.post })
              }
            >
              {this.post.btnText}
            </span>
          </div>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "lenta-category category custom-links";
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
