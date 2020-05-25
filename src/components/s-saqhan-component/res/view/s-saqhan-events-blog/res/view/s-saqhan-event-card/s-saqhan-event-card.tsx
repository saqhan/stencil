import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "s-saqhan-event-card",
  styleUrl: "s-saqhan-event-card.css",
  shadow: false,
})
export class SSaqhanEventCard implements ComponentInterface {
  @Prop() event: any;

  render() {
    return (
      <div class="blog-card">
        <div
          class="blog-img"
          style={{ backgroundImage: "url(" + this.event.img + ")" }}>
          <span class={!this.event.date ? 'no-date' : 'date-event' }> {this.event.date} </span>
        </div>

        <div class={this.ColorCategory(this.event.category)}>
          {this.event.category}
        </div>
        <div class="blog-title pt-3 font-weight-bold">{this.event.title}</div>
        <div class="btn-read pt-3">
          <a href="/second-page/"> {this.event.btnText} </a>
        </div>
      </div>
    );
  }
  public ColorCategory = (nameCategory) => {
    const classCategory = "category text-warning small";
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
