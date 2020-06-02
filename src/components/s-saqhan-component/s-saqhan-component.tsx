import { Component, h } from "@stencil/core";
import {
  blogCarouselMock,
  blogPost,
  popularNews,
  events,
  menu,
  logoUrl,
  subscribeText,
} from "../../utils/mock";

@Component({
  tag: "s-saqhan-component",
  styleUrl: "s-saqhan-component.css",
  shadow: false,
})
export class SSaqhanComponent {
  render() {
    return (
      <div>
        <s-saqhan-header-app
          menu={menu}
          subscribeText={subscribeText}
          logoUrl={logoUrl}
          onClickToLogo={(item) => {
            console.log("clickOnMenu", item);
          }}
          onClickOnMenu={(item) => this.clickOnMenu(item)}
          onClickOnSubscribeButton={(event) => this.clickOnSubscribeButton(event)}
        />
        <s-saqhan-first-slider
          onClickOnLentaNews={(event) => this.clickOnLentaNews(event)}
          onClickOnNewsCategory={() => this.clickOnNewsCategory()}
          onClickOnMainNews={() => this.clickOnMainNews()}
          blogCarouselMock={blogCarouselMock}
        />
        <s-saqhan-new-blog blogPost={blogPost} />
        <s-saqhan-popular-news popularNews={popularNews} />
        <s-saqhan-events-blog events={events} />
        <s-saqhan-subsc-banner />
        <s-saqhan-app-footer />
        <s-saqhan-chat-app></s-saqhan-chat-app>
      </div>
    );
  }
  /*
   *  Клик по меню
   */
  public clickOnMenu(item) {
    return console.log("clickOnMenu", item);
  }

  /*
   *  Клик по ссылке в ленте новостей
   * */
  public clickOnLentaNews(event) {
    return console.log("clickOnLentaNews", event);
  }
  /*
   *  Клик по категории публикации
   * */
  public clickOnNewsCategory() {

    return console.log("clickOnNewsCategory");
  }

  /*
   *  Клик по главной новости
   * */
  public clickOnMainNews() {
    return console.log("clickOnMainNews");
  }

  public clickOnSubscribeButton(event) {
    event.preventDefault();
    return console.log('clickOnSubscribeButton', event)
  }
}
