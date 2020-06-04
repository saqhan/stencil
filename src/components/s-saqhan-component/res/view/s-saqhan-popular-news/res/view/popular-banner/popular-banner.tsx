import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'popular-banner',
  styleUrl: 'popular-banner.css',
  shadow: true,
})
export class PopularBanner implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
