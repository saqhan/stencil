import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-main-news-card",
  styleUrl: "s-saqhan-main-news-card.css",
  shadow: false,
})
export class SSaqhanMainNewsCard implements ComponentInterface {
  /**
  * Массив с новостями
  * */
  @Prop() mainNews: any;
  /**
  * Клик по новости
  * */
  @Event() clickOnNews: EventEmitter;
  render() {
    return (
      <div class="main-news">
        <div>
          <div
            class="img-news m-auto custon-link"
            onClick={() => this.clickOnNews.emit({place: 'img', item: this.mainNews})}
            style={{ backgroundImage: `url(${this.mainNews.img})` }}
          ></div>
          <div
            onClick={() => this.clickOnNews.emit({place: 'category', item: this.mainNews})}
            class={this.ColorCategory(this.mainNews.category)}
          >
            {this.mainNews.category}
          </div>
          <div
            onClick={() => this.clickOnNews.emit({place: 'title', item: this.mainNews})}
            class="title-news pt-3 h2 font-weight-bold custon-link"
          >
            {this.mainNews.title}
          </div>
          <div
            onClick={() => this.clickOnNews.emit({place: 'subTitle', item: this.mainNews})}
            class="sub-title-news pt-3 pb-3 text-muted custon-link"
          >
            {this.mainNews.subTitle}
          </div>
          <span
            onClick={() => this.clickOnNews.emit({place: 'btn read', item: this.mainNews})}
            class="btn btn-primary btn-custom custon-link"
          >
            {this.mainNews.btnText}
          </span>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "category category-news pt-3 small custon-link";
    switch (nameCategory) {
      case "Report":
        return `report ${classCategory}`;
      case `Webinar ${classCategory}`:
        return `webinar ${classCategory}`;
      case "Blog Post":
        return `blog-post ${classCategory}`;
      default:
        classCategory;
    }
  };
}
