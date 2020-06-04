import { Component, h } from "@stencil/core";
import {
  blogCarouselMock,
  blogPost,
  popularNews,
  bannerPopular,
  events,
  menu,
  logoUrl,
  subscribeText,
  footerItems,
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
            console.log("clickOnLogo", item);
          }}
          onClickOnMenu={(item) => this.clickOnMenu(item)}
          onClickOnSubscribeButton={(event) =>
            this.clickOnSubscribeButton(event)
          }
        />
        <s-saqhan-first-slider
          onClickOnLentaNews={(event) => this.clickOnLentaNews(event)}
          onClickOnNewsCategory={(event) => this.clickOnNewsCategory(event)}
          onClickOnMainNews={(event) => this.clickOnMainNews(event)}
          blogCarouselMock={blogCarouselMock}
        />
        <s-saqhan-new-blog
          blogPost={blogPost}
          onClickOnLentaNews={(event) => this.clickOnLentaNews(event)}
          onClickOnNewsCategory={(event) => this.clickOnNewsCategory(event)}
        />
        <s-saqhan-popular-news
          popularNews={popularNews}
          bannerPopular={bannerPopular}
          onClickOnLentaNews={(event) => this.clickOnLentaNews(event)}
          onClickOnNewsCategory={(event) => this.clickOnNewsCategory(event)}
        />
        <s-saqhan-events-blog events={events} />
        <s-saqhan-subsc-banner
          subscribeText={subscribeText}
          onClickOnSubscribeButton={(event) =>
            this.clickOnSubscribeButton(event)
          }
        />
        <s-saqhan-app-footer footerItems={footerItems} />
        <s-saqhan-chat-app></s-saqhan-chat-app>
      </div>
    );
  }
  /**
   *  Клик по меню
   */
  public clickOnMenu({ detail }) {
    return console.log("clickOnMenu", detail);
  }

  /**
   *  Клик по ссылке в ленте новостей
   * */
  public clickOnLentaNews({ detail }) {
    return console.log("clickOnNews", detail);
  }
  /**
   *  Клик по категории публикации
   * */
  public clickOnNewsCategory({ detail }) {
    return console.log("clickOnNewsCategory", detail);
  }

  /**
   *  Клик по главной новости
   * */
  public clickOnMainNews({ detail }) {
    return console.log("clickOnMainNews", detail);
  }
  /**
   *  Клик по кнопке подписаться
   * */
  public clickOnSubscribeButton(event) {
    event.preventDefault();
    return console.log("clickOnSubscribeButton", event);
  }
}
