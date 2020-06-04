import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'menu-item',
  styleUrl: 'menu-item.css',
  shadow: false,
})
export class MenuItem implements ComponentInterface {

  @Prop() arr:any;
  @Event() clickOnMenu: EventEmitter;

  render() {
    return (
      <li class="nav-item" onClick={() => this.clickOnMenu.emit(this.arr)}>
        <a class="nav-link header ">{this.arr.name}</a>
      </li>
    );
  }

}
