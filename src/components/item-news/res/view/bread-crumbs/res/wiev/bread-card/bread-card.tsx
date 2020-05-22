import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'bread-card',
  styleUrl: 'bread-card.css',
  shadow: false,
})
export class BreadCard implements ComponentInterface {

  @Prop() links:any;

  render() {
    return (
      <div class="bread-crumbs">
        <div class="col left">
          <ul>
            <li class="nav-link"><a href="/">Home</a></li>
            <li class="nav-link active"><a href="#">List Items</a></li>
          </ul>
        </div>
        <div class="col right">
          <ul>
            <li class="nav-link"><a href="/">All</a></li>
            <li class="nav-link"><a href="#">Second Page</a></li>
            <li class="nav-link active"><a href="#">List Items</a></li>
          </ul>
        </div>
      </div>
    );
  }

}
