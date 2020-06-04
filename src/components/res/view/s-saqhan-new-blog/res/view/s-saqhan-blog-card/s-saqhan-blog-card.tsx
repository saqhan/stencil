import {Component, ComponentInterface, Prop, h, Event, EventEmitter} from "@stencil/core";

@Component({
  tag: "s-saqhan-blog-card",
  styleUrl: "s-saqhan-blog-card.css",
  shadow: false,
})
export class SSaqhanBlogCard implements ComponentInterface {
  @Prop() post: any;
  @Event() clickOnLentaNews: EventEmitter;
  @Event() clickOnNewsCategory: EventEmitter;

  render() {
    return (
      <div class="blog-card">
        <div
          class="blog-img"
          style={{ backgroundImage: `url( ${this.post.img})` }}
          onClick={() => this.clickOnLentaNews.emit(this.post.img)}
        ></div>
        <div class={this.ColorCategory(this.post.category)}
             onClick={() => this.clickOnNewsCategory.emit(this.post.category)}
        >
          {this.post.category}
        </div>
        <div class="blog-title pt-3 font-weight-bold"
             onClick={() => this.clickOnLentaNews.emit(this.post.title)}
        >{this.post.title}</div>
        <div class="btn-read pt-3">
          <span  onClick={() => this.clickOnLentaNews.emit(this.post.btnText)}
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
