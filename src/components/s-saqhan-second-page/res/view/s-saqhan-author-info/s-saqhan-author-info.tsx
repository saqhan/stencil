import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";
import {authorItem} from "./res/interface/common.interface";

@Component({
  tag: "s-saqhan-author-info",
  styleUrl: "s-saqhan-author-info.css",
  shadow: false,
})
export class SSaqhanAuthorInfo implements ComponentInterface {

  /**
   * Элементы об авторе статьи
   * */
  @Prop() author: authorItem[];
  /**
   * Клик по автору статьи
   * */
  @Event() clickOnLink: EventEmitter;

  getAuthor(arr) {
    return arr.map((item) => item);
  }

  render() {
    return (
      <div class="container">
        <CardAuthor author={this.getAuthor(this.author)} />
      </div>
    );
  }
}


const CardAuthor = (props) => {
  return props.author.map((item) => {
    return (
      <div class="content-text">
        <hr />
        <s-saqhan-card-author author={item} />
      </div>
    );
  });
};
