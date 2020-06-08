import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import { secondTitleBlockItem } from './res/interface/common.interface';

@Component({
  tag: 'second-title-block',
  styleUrl: 'second-title-block.css',
  shadow: false,
})
export class SecondTitleBlock implements ComponentInterface {

  /**
   * массив данных для первого блока
   * */
  @Prop() secondTitle:secondTitleBlockItem;
  /**
   * события при клике на элементы первого блока в одностраничной новостиы
   * */
  @Event() clickOnLink: EventEmitter;

  render() {
    return (
      <div class="container title-wrapper">
        <div class="row">
          <div class="col">
            <div class="second-category custom-links "
              onClick={() => this.clickOnLink.emit({place: 'category', item:this.secondTitle }) }
            >{this.secondTitle.category}</div>
            <div class="second-title-news custom-links"
                 onClick={() => this.clickOnLink.emit({place: 'title', item:this.secondTitle }) }
            >{this.secondTitle.title}</div>
            <div class="second-title-author">
              <div class="name custom-links"
                   onClick={() => this.clickOnLink.emit({place: 'name', item:this.secondTitle }) }>{this.secondTitle.authorName}</div>
              <div class="date custom-links" onClick={() => this.clickOnLink.emit({place: 'date', item:this.secondTitle }) }>{this.secondTitle.date}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="header-img-title custom-links"
                 onClick={() => this.clickOnLink.emit({place: 'img', item:this.secondTitle }) }
              style={{ backgroundImage: `url(${this.secondTitle.img})`}}
            ></div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-title"

            >
              {this.secondTitle.text}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
