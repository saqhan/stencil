import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "event-card",
  styleUrl: "event-card.css",
  shadow: false,
})
export class EventCard implements ComponentInterface {
  @Prop() event: any;

  render() {
    return (
      <div class="blog-card">
        <div class="blog-img" style={{ backgroundImage: 'url(' + this.event.img + ')'}}>
          <span class="date-event">24</span>
        </div>

        <div class="blog-category text-warning small">
          {this.event.category}
        </div>
        <div class="blog-title pt-3 font-weight-bold">{this.event.title}</div>
        <div class="btn-read pt-3">
          <a href="/second-page/">Read Story</a>
        </div>
      </div>
    );
  }
}
