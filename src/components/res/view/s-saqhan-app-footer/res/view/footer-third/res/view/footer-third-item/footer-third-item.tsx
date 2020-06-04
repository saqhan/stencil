import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'footer-third-item',
  styleUrl: 'footer-third-item.css',
  shadow: false,
})
export class FooterThirdItem implements ComponentInterface {

    /**
   * массив 3 футера
   */
  @Prop() arr:any;
    /**
   * клик по кнопке в футере
   */
  @Event() clickOnMenu: EventEmitter;

  render() {
    return (
      <li>
        <span class="foot-nav-link" onClick={() => this.clickOnMenu.emit(this.arr.name) }>
          {this.arr.name}
        </span>
      </li>
    );
  }
}
