import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {SSaqhanNewsCardItem} from './interface/common.interface';
@Component({
  tag: 's-saqhan-news-card',
  styleUrl: 's-saqhan-news-card.css',
  shadow: false,
})


export class SSaqhanNewsCard implements ComponentInterface {

  @Prop() news:SSaqhanNewsCardItem;

  render() {
    return (
      <div class="container list-items">
        <div class="row item">
          <div class="col-12 col-sm-4">
            <div
              class="item-img"
            style={{ backgroundImage: 'url(' + this.news.img + ')' }}
            ></div>
        </div>
        <div class="col">
          <div class="item-title">
            <a href="/">{ this.news.title }</a>
          </div>
          <div class="item-info">
            <div class="item-author">
              <a href="/">{ this.news.author }</a>
            </div>
            <div class="item-date">
              <a href="/">{ this.news.date }</a>
            </div>
            <button class="btn btn-primary btn-custom-head" >
              { this.news.category }
            </button>
          </div>
          <div class="item-sub-title">
            { this.news.subTitle }
          </div>
          <div class="item-link">
            <a href="#"
            >Keep Readeing <i class="fas fa-chevron-circle-right"></i
            ></a>
          </div>
        </div>
      </div>
  </div>
    );
  }

}
