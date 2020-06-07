import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { secondTitleBlockItem } from './res/interface/common.interface';

@Component({
  tag: 'second-title-block',
  styleUrl: 'second-title-block.css',
  shadow: false,
})
export class SecondTitleBlock implements ComponentInterface {

  @Prop() secondTitle:secondTitleBlockItem;

  render() {
    return (
      <div class="container title-wrapper">
        <div class="row">
          <div class="col">
            <div class="second-category">{this.secondTitle.category}</div>
            <div class="second-title-news">{this.secondTitle.title}</div>
            <div class="second-title-author">
              <div class="name">{this.secondTitle.authorName}</div>
              <div class="date">{this.secondTitle.date}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="header-img-title"
              style={{ backgroundImage: `url(${this.secondTitle.img})`}}
            ></div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-title">
              {this.secondTitle.text}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
