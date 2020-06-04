import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "s-saqhan-first-slider",
  styleUrl: "s-saqhan-first-slider.css",
  shadow: false,
})
export class SSaqhanFirstSlider implements ComponentInterface {
  /**
   * массив новостей для вывода
   */
  @Prop() blogCarouselMock: any;

  /**
   * Клик по новости
   * */
  @Event() clickOnNews: EventEmitter;

  mainNews(arr): any[] {
    return (arr.filter((item) => item.main) || []).slice(-1);
  }

  lentaNews(arr): any[] {
    return arr
      .filter((item) => item.lenta)
      .slice(-4)
      .reverse();
  }

  render() {
    return (
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-12 col-lg-7">
            <MainNews arr={this.mainNews(this.blogCarouselMock)}></MainNews>
          </div>
          <div class="col-12 col-lg-5">
            <LentaNews
              lenta={this.lentaNews(this.blogCarouselMock)}
            ></LentaNews>
          </div>
        </div>
      </div>
    );
  }
}
// получает и передает в компонент элементы
const MainNews = (props) => {
  return props.arr.map((item) => {
    return <s-saqhan-main-news-card mainNews={item}></s-saqhan-main-news-card>;
  });
};

//лента новостей
const LentaNews = (props) => {
  return props.lenta.map((item) => {
    return (
      <s-saqhan-lenta-news-card lentaNews={item}></s-saqhan-lenta-news-card>
    );
  });
};
