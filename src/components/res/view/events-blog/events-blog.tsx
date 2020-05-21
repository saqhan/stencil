import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "events-blog",
  styleUrl: "events-blog.css",
  shadow: false,
})
export class EventsBlog implements ComponentInterface {
  @Prop() events: any;

  getEvents(arr) {
    return arr.map((item) => item);
  }

  render() {
    return (
      <div class="container">
        <div class=" pt-5 pb-5">
          <div class="col-12">
            <h1 class="font-weight-bold block-title">Upcoming events</h1>
          </div>
          <div class="row">
            <EventsPost event={this.getEvents(this.events)} />
          </div>
        </div>
      </div>
    );
  }
}

const EventsPost = (props) => {
  return props.event.map((item) => {
    return (
      <div class="col-12 col-md-6 col-lg-4">
        <event-card event={item} />
      </div>
    );
  });
};
