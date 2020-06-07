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
  subscribeBlockText,
  footerInfo
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
          onClickOnCategoryNews={(event)=> this.clickOnCategoryNews(event)}
          onClickOnNews={(event) => this.clickOnNews(event)}
          blogCarouselMock={blogCarouselMock}
        />
        <s-saqhan-new-blog
          blogPost={blogPost}
          onClickOnNews={(event) => this.clickOnNews(event)}
          onClickOnCategoryNews={(event)=> this.clickOnCategoryNews(event)}
        />
        <s-saqhan-popular-news
          popularNews={popularNews}
          bannerPopular={bannerPopular}
          onClickOnNews={(event) => this.clickOnNews(event)}
        />
        <s-saqhan-events-blog
          onClickOnNews={(event) => this.clickOnNews(event)}
          onClickOnCategoryNews={(event)=> this.clickOnCategoryNews(event)}
          events={events}
        />
        <s-saqhan-subsc-banner
          subscribeText={subscribeText}
          subscribeBlockText={subscribeBlockText}
          onClickOnSubscribeButton={(event) =>
            this.clickOnSubscribeButton(event)
          }
        />
        <s-saqhan-app-footer
          onClickOnMenu={(item) => this.clickOnMenu(item)}
          footerItems={footerItems}
          footerInfo={footerInfo}
        />
        <s-saqhan-chat-app></s-saqhan-chat-app>
      </div>
    );
  }
  /**
   *  Клик по меню
   */
  public clickOnMenu({ detail }) {
    return console.log("MenuId - ", detail);
  }

  /**
   *  Клик по новости
   * */
  public clickOnNews({ detail }) {
    return console.log("id", detail);
  }

  /**
   *  Клик по категории публикации
   * */
  public clickOnNewsCategory({ detail }) {
    return console.log("id", detail);
  }

  /**
   *  Клик по кнопке подписаться
   * */
  public clickOnSubscribeButton({ detail }) {
    event.preventDefault();
    return console.log("clickOnSubscribeButton", detail);
  }
  /**
   *  Клик по категории
   * */
  public clickOnCategoryNews({ detail }) {
    return console.log("клик по категории - ", detail);
  }
}
