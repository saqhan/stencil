import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-saqhan-line-book',
  styleUrl: 's-saqhan-line-book.css',
  shadow: false,
})
export class SSaqhanLineBook implements ComponentInterface {

  @Prop() banner:any;

  getBanner(arr){
    return arr.map(item => item);
  }

  render() {
    return (
      <div>
            <Banner bannerPost={this.getBanner(this.banner)}/>
      </div>
    );
  }

}

const Banner = (props) => {
  return (props.bannerPost.map(item => {
          return  <div class="container"><s-saqhan-card-banner bannerPost={item}/></div>
      }))
  }

