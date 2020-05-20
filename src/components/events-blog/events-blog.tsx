import { Component, ComponentInterface, Prop, h } from '@stencil/core';
import {events} from "../../utils/mock";

@Component({
  tag: 'events-blog',
  styleUrl: 'events-blog.css',
  shadow: false,
})
export class EventsBlog implements ComponentInterface {

  @Prop() events:object;

  getEvents(arr){
    return arr.map(item => item);
  }

  render() {
    return (
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-12">
            <h1 class="font-weight-bold block-title">Upcoming events</h1>
          </div>
          <div class=" col-12 new-blog-cards pt-5 pt-lg-4">
              <EventsPost  event={this.getEvents(events)}/>
          </div>
        </div>
      </div>

    );
  }

}

const EventsPost = (props) => {
  return (props.event.map(item => {
    return <event-card event={item}/>
  }))
}
