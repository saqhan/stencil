import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'list-news',
  styleUrl: 'list-news.css',
  shadow: false,
})
export class ListNews implements ComponentInterface {

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
    return (<div class="container-fluid"> <news-card news={item} /> </div> )
  }))
}
