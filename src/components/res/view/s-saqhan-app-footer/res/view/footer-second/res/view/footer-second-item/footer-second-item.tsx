import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'footer-second-item',
  styleUrl: 'footer-second-item.css',
  shadow: false,
})
export class FooterSecondItem implements ComponentInterface {
  /**
   * массив второго футера
   */
  @Prop() arr:any;
  /**
   * клик по кнопке в футере
   */
  @Event() clickOnMenu: EventEmitter;
  render() {
    return (
      <li>
        <span  class="foot-nav-link" onClick={() => this.clickOnMenu.emit(this.arr.name) }>
          {this.arr.name}
        </span>
      </li>
    );
  }
}