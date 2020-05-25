import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-saqhan-list-news',
  styleUrl: 's-saqhan-list-news.css',
  shadow: false,
})
export class SSaqhanListNews implements ComponentInterface {

  @Prop() news:any;

  getNews(arr){
    return arr.map(item => item);
  }

  render() {
    return (
      <div>
        <NewsItem news={this.getNews(this.news)} />
      </div>
    );
  }
}

const NewsItem = (props) => {
  return (props.news.map(item => {
    return (<div class="container-fluid"> <s-saqhan-news-card news={item} /> </div> )
  }))
}
