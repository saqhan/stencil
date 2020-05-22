import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'line-book',
  styleUrl: 'line-book.css',
  shadow: false,
})
export class LineBook implements ComponentInterface {

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
          return  <div class="container"><card-banner bannerPost={item}/></div>
      }))
  }

