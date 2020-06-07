import {
  Component,
  ComponentInterface, Event, EventEmitter,
  h,
  Prop,
} from "@stencil/core";



@Component({
  tag: "s-saqhan-lenta-news-card",
  styleUrl: "s-saqhan-lenta-news-card.css",
  shadow: false,
})
export class SSaqhanLentaNewsCard implements ComponentInterface {
  /**
  * Массив с новостями для ленты
  * */
 @Prop() lentaNews: any;

 /**
 * Клик по новости
 * */
 @Event() clickOnNews: EventEmitter;

  render() {
    return (
      <div class="lenta-news ">
        <div
          class="lenta-img pr-4 custom-link"
          onClick={() => this.clickOnNews.emit({place: 'img', item: this.lentaNews})}
          style={{ backgroundImage: `url(${this.lentaNews.img})` }}
        ></div>
        <div class="lenta-info custom-link">
          <div onClick={() => this.clickOnNews.emit({place: 'category', item: this.lentaNews})} class={this.ColorCategory(this.lentaNews.category)}>
            {this.lentaNews.category}
          </div>
          <div onClick={() => this.clickOnNews.emit({place: 'title', item: this.lentaNews})} class="lenta-title  custom-link">
            {this.lentaNews.title}
          </div>
          <div class="btn-read custom-link"  >
            <span onClick={() => this.clickOnNews.emit({place: 'btn-read', item: this.lentaNews})} >{this.lentaNews.btnText}</span>
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
