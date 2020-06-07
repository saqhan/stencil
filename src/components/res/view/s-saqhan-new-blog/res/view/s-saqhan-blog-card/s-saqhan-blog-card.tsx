import {Component, ComponentInterface, Prop, h, Event, EventEmitter} from "@stencil/core";

@Component({
  tag: "s-saqhan-blog-card",
  styleUrl: "s-saqhan-blog-card.css",
  shadow: false,
})


export class SSaqhanBlogCard implements ComponentInterface {
  /**
   * Массив с публикациями
   * */
  @Prop() post: any;
  /**
   * Клик по новости
   * */
  @Event() clickOnNews: EventEmitter;
  /**
   * Клик по category
   * */
  @Event() clickOnCategoryNews: EventEmitter;

  render() {
    return (
      <div class="blog-card">
        <div
          class="blog-img"
          style={{ backgroundImage: `url( ${this.post.img})` }}
          onClick={() => this.clickOnNews.emit({place: 'img', item: this.post })}
        ></div>
        <div class={this.ColorCategory(this.post.category)}
             onClick={() => this.clickOnCategoryNews.emit({place: 'category', item: this.post })}
        >
          {this.post.category}
        </div>
        <div class="blog-title pt-3 font-weight-bold"
             onClick={() => this.clickOnNews.emit({place: 'title', item: this.post })}
        >{this.post.title}</div>
        <div class="btn-read pt-3">
          <span  onClick={() => this.clickOnNews.emit({place: 'btn-read', item: this.post })}
          > {this.post.btnText} </span>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "category small pt-4";
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
