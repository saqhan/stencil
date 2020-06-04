import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'footer-second-item',
  styleUrl: 'footer-second-item.css',
  shadow: false,
})
export class FooterSecondItem implements ComponentInterface {

  @Prop() arr:any;

  render() {
    return (
      <li>
        <a href="#" class="foot-nav-link">
          {this.arr.name}
        </a>
      </li>
    );
  }
}
