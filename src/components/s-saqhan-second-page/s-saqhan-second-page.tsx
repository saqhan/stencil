import { Component, ComponentInterface, h } from "@stencil/core";
import {
  blogPost,
  banner,
  authors,
  quoteText,
  menu,
  subscribeText,
  logoUrl,
  footerItems,
  footerInfo,
  secondTitle,
  subscribeBlockText
} from "../../utils/mock";

@Component({
  tag: "s-saqhan-second-page",
  styleUrl: "s-saqhan-second-page.css",
  shadow: false,
})
export class SSaqhanSecondPage implements ComponentInterface {
  render() {
    return (
      <div>
        <s-saqhan-header-app
          menu={menu}
          subscribeText={subscribeText}
          logoUrl={logoUrl}
        />
        <second-title-block secondTitle={secondTitle}></second-title-block>
        <s-saqhan-line-book banner={banner} />
        <s-saqhan-quote-text quoteText={quoteText} />
        <s-saqhan-author-info author={authors} />
        <s-saqhan-subsc-banner
          subscribeText={subscribeText}
          subscribeBlockText={subscribeBlockText}
          onClickOnSubscribeButton={(event) =>
            this.clickOnSubscribeButton(event)
          }></s-saqhan-subsc-banner>
        <s-saqhan-new-blog blogPost={blogPost} />
        <s-saqhan-app-footer
          footerItems={footerItems}
          footerInfo={footerInfo}
        />
      </div>
    );
  }
  /**
   *  Клик по кнопке подписаться
   * */
  public clickOnSubscribeButton({ detail }) {
    return console.log(detail);
  }
}
