import {
  Component,
  ComponentInterface,
  h,
  EventEmitter,
  Event,
  Prop,
} from "@stencil/core";
import { SSaqhanHedearMenuItem } from "./interface/common.interface";

@Component({
  tag: "s-saqhan-header-app",
  styleUrl: "s-saqhan-header-app.css",
  shadow: false,
})
export class SSaqhanHeaderApp implements ComponentInterface {
  /**
   * массив меню для вывода
   */
  @Prop() menu: SSaqhanHedearMenuItem[] = [];

  /**
   * ссылка на изображение логотипа
   */
  @Prop() logoUrl: string;

  /**
   * текст вывода в кнопке подписаться
   */
  @Prop() subscribeText: string;

  /**
   * клик по конкретному меню
   */
  @Event() clickOnMenu: EventEmitter<SSaqhanHedearMenuItem>;

  /**
   * клик по кнопке подписаться
   */
  @Event() clickOnSubscribeButton: EventEmitter;

  /**
   * клик по лого
   */
  @Event() clickToLogo: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <header>
              <nav class="navbar navbar-expand-lg navbar-light p-0 d-flex ">
                <a
                  onClick={() => {
                    this.clickToLogo.emit();
                  }}
                  class="navbar-brand logo-header"
                  style={{ backgroundImage: "url(" + this.logoUrl + ")" }}
                ></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse header-nav"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ">
                    {this.menu.map((item) => {
                      return (
                        <li
                          class="nav-item"
                          onClick={() => this.clickOnMenu.emit(item)}
                        >
                          <a class="nav-link header active">{item.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                  <div class="header-right">
                    <a href="#" class="pr-4">
                      <i class="fas fa-search"></i>
                    </a>
                    <form class="form" onSubmit={(event) => this.clickOnSubscribeButton.emit(event)}>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control rounded"
                          placeholder="Enter work email"
                        />
                        <div class="input-group-append">
                          <button
                            class="btn btn-primary btn-custom-head"
                            type="submit"
                          >
                            {this.subscribeText}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
    );
  }
}


