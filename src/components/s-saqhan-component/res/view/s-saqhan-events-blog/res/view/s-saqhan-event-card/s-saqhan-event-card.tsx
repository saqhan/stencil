import {
  Component,
  ComponentInterface,
  Prop,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";
@Component({
  tag: "s-saqhan-event-card",
  styleUrl: "s-saqhan-event-card.css",
  shadow: false,
})
export class SSaqhanEventCard implements ComponentInterface {
  /**
   * Массив публикаций Ивентов
   * */
  @Prop() event: any;
  /**
   * Клик по новости
   * */
  @Event() clickOnNews: EventEmitter;
  /**
   * Клик по категории
   * */
  @Event() clickOnCategoryNews: EventEmitter;
  render() {
    return (
      <div class="blog-card">
        <div
          class="blog-img custom-links"
          style={{ backgroundImage: "url(" + this.event.img + ")" }}
          onClick={() =>
            this.clickOnNews.emit({ place: "img", item: this.event })
          }
        >
          <span class={!this.event.date ? "no-date" : "date-event"}>
            {" "}
            {this.event.date}{" "}
          </span>
        </div>

        <span
          class={this.ColorCategory(this.event.category)}
          onClick={() =>
            this.clickOnCategoryNews.emit({
              place: "category",
              item: this.event,
            })
          }
        >
          {this.event.category}
        </span>
        <div
          class="blog-title"
          onClick={() =>
            this.clickOnNews.emit({ place: "title", item: this.event })
          }
        >
          <span class="custom-links">{this.event.title}</span>
        </div>
        <div
          class="btn-read "
          onClick={() =>
            this.clickOnNews.emit({ place: "btn-read", item: this.event })
          }
        >
          <span class="custom-links"> {this.event.btnText} </span>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "category text-warning small custom-links";
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
