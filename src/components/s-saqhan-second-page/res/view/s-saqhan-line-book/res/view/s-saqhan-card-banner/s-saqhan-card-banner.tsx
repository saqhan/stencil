import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-saqhan-card-banner',
  styleUrl: 's-saqhan-card-banner.css',
  shadow: false,
})
export class SSaqhanCardBanner implements ComponentInterface {

  @Prop() bannerPost: any;

  render() {
    return (
      <div class="row banner">
        <div class="col">

        </div>
        <div class="col-12 col-sm-5">
          <div class="banner-title"> {this.bannerPost.title} </div>
          <div class="banner-sub-title">
            {this.bannerPost.subTitle}
          </div>
          <div class="btn-read">
            <button class="btn btn-primary btn-custom-head btn-black-line">{this.bannerPost.btnText}</button>
          </div>
        </div>
        <div class="col-4 right-banner">
          <img src={this.bannerPost.img} alt=""/>
        </div>
      </div>
    );
  }
}
