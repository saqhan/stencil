import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";

@Component({
  tag: "footer-fourth-item",
  styleUrl: "footer-fourth-item.css",
  shadow: false,
})
export class FooterFourthItem implements ComponentInterface {

  /**
   * массив 4 футера
   */
  @Prop() arr: any;
  /**
   * клик по кнопке в футере
   */
  @Event() clickOnMenu: EventEmitter;

  render() {
    return (
      <li>
        <span  class="foot-nav-link" onClick={() => this.clickOnMenu.emit(this.arr.name) } >
          {this.arr.name}
        </span>
      </li>
    );
  }
}
