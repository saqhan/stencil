import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-saqhan-popular-news',
  styleUrl: 's-saqhan-popular-news.css',
  shadow: false,
})
export class SSaqhanPopularNews implements ComponentInterface {

  @Prop() popularNews:any;
  @Prop() bannerPopular:any;
  @Event() clickOnLentaNews: EventEmitter;
  @Event() clickOnNewsCategory: EventEmitter;

  getPopularNews(arr): any[] {
    return arr.map(item => item);
  }


  render() {
    return (
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-12">
            <h1 class="font-weight-bold pb-4 block-title">Popular Resours</h1>
          </div>
          <div class="col-12 col-lg-7">
            <div class="cards-popular">
              <CardPopular post={this.getPopularNews(this.popularNews)}/>
            </div>
          </div>
        <div class="col-12 col-lg-5 p-5 p-lg-0 banner">
          <div class="banner-title text-center text-white">
            {this.bannerPopular.title}
          </div>
          <div class="btn-read pt-3">
            <span >{this.bannerPopular.nameLink}</span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const CardPopular = (props) => {
  return (props.post.map((item) => {
      return <s-saqhan-popular-card post={item}/>
    }
  ))
}
