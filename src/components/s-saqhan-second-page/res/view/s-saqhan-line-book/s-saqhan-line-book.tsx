import {
  Component,
  ComponentInterface,
  EventEmitter,
  h,
  Prop,
  Event,
} from "@stencil/core";
import { SSaqhanLineBookItem } from "./res/interface/common.interface";

@Component({
  tag: "s-saqhan-line-book",
  styleUrl: "s-saqhan-line-book.css",
  shadow: false,
})
export class SSaqhanLineBook implements ComponentInterface {
  /**
   * Массив элементов для баннера
   * */
  @Prop() banner: SSaqhanLineBookItem[];
  /**
   * Клик по элементам
   * */
  @Event() clickOnLink: EventEmitter;
  /**
   * Функция для получения данных
   * */
  getBanner(arr) {
    return arr.map((item) => item);
  }

  render() {
    return (
      <div>
        <Banner bannerPost={this.getBanner(this.banner)} />
      </div>
    );
  }
}

/**
 * компонентная функция для разбивки массива
 * */
const Banner = (props) => {
  return props.bannerPost.map((item) => {
    return (
      <div class="container">
        <s-saqhan-card-banner bannerPost={item} />
      </div>
    );
  });
};
