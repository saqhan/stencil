import {
  Component,
  ComponentInterface,
  h,
  Prop,
  EventEmitter,
  Event,
} from "@stencil/core";
import { footerItems2 } from "./res/interface/common.interface";

@Component({
  tag: "s-saqhan-app-footer",
  styleUrl: "s-saqhan-app-footer.css",
  shadow: false,
})
export class SSaqhanAppFooter implements ComponentInterface {
  /**
   * массив меню для вывода
   */
  @Prop() footerItems: footerItems2[];
  /**
   * Инфо о компании в футере
   */
  @Prop() footerInfo: any;
  /**
   * Текст для копирайта
   * */
  @Prop() footerCopyright: any;

  /**
   * клик по кнопке в футере
   */
  @Event() clickOnMenu: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="row footer">
          <div class="col-lg-4 col-md-12 footer-info-block">
            <div class="footer-info">{this.footerInfo.title}</div>
            <div class="footer-soc">
              <div class="template-demo">
                <button
                  type="button"
                  class="btn btn-social-icon btn-facebook btn-rounded"
                >
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-social-icon btn-twitter btn-rounded"
                >
                  <i class="fab fa-youtube"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-social-icon btn-instagram btn-rounded"
                >
                  <i class="fab fa-instagram"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-social-icon btn-instagram btn-rounded"
                >
                  <i class="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
          <FooterFirst footer={this.footerItems}></FooterFirst>
          <div class="col-12 pt-5">
            <div class="choose-language text-muted small">
              <a
                class="pr-3 custom-links"
                onClick={(event) =>
                  this.clickOnMenu.emit({ place: "footer copyright", event })
                }
              >
                <i class="fas fa-globe-africa"></i> {this.footerCopyright.title}
                <br />
                {this.footerCopyright.description}
              </a>
              {/*<a href="/">French</a>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const FooterFirst = (props) => {
  return props.footer.slice(0, 4).map((item) => {
    return (
      <div class="col-lg-2 col-md-3 col-sm-6 col-6">
        <footer-wrapper footer={item}></footer-wrapper>
      </div>
    );
  });
};
