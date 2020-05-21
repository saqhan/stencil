import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "popular-card",
  styleUrl: "popular-card.css",
  shadow: false,
})
export class PopularCard implements ComponentInterface {
  @Prop() post: any;

  render() {
    return (
      <div class="news-block">
        <div class="news-img"></div>
        <div class="news-info">
          <div class="lenta-category category">{this.post.category}</div>
          <div class="lenta-title">{this.post.title}</div>
          <div class="btn-read">
            <a href="#"> {this.post.btnText} </a>
          </div>
        </div>
      </div>
    );
  }
}
