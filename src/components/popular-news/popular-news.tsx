import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {popularNews} from "../../utils/mock";

@Component({
  tag: 'popular-news',
  styleUrl: 'popular-news.css',
  shadow: false,
})
export class PopularNews implements ComponentInterface {

  @Prop() popularNews:object;

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
              <CardPopular post={this.getPopularNews(popularNews)}/>
            </div>
          </div>
        <div class="col-12 col-lg-5 p-5 p-lg-0 banner d-flex align-items-center flex-column justify-content-center">
          <div class="banner-title text-center text-white">
            Storyteller Circle <br />
            Event Series
          </div>
          <div class="btn-read pt-3">
            <a href="#">Watch Webinar</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const CardPopular = (props) => {
  return (props.post.map((item) => {
      return <popular-card post={item}/>
    }
  ))
}
