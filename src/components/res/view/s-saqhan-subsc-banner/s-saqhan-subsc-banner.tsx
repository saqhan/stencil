import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
@Component({
  tag: 's-saqhan-subsc-banner',
  styleUrl: 's-saqhan-subsc-banner.css',
  shadow: false,

})
export class SSaqhanSubscBanner implements ComponentInterface {

  /**
   * текст вывода в кнопке подписаться
   */
  @Prop() subscribeText: string;
  /**
  * Массив данных для черного баннера
  * */
  @Prop() subscribeBlockText: any;
  /**
   * клик по кнопке подписаться
   */
  @Event() clickOnSubscribeButton: EventEmitter;

  render() {
    return (
      <div class="container">
        <div class="row subscribe d-flex justify-content-between align-items-center pt-5 pb-5 text-white">
          <div class="col-12 col-lg-6 left">
            <div class="sub-title">
              <h1> {this.subscribeBlockText.title} </h1>
            </div>
            <div class="subs-sub-title text-muted">
              {this.subscribeBlockText.subTitle}
              <span class="btn-read-sub"
                    onClick={() => this.clickOnSubscribeButton.emit({place:'See pricing', item: this.subscribeText})}
              >
                <span class="custom-links" > {this.subscribeBlockText.nameLink}</span>
              </span>
            </div>
          </div>
          <div class="col-12 col-lg-6 p-3 right pr-sm-5 text-right">
            <div class="col-12">
              <form class="form" onSubmit={(event) => event.preventDefault()} >
                <div class="input-group">
                  <i class="fas fa-at"></i>
                  <input
                    type="text"
                    class="form-control rounded"
                    placeholder="Enter work email"
                  />
                  <div class="input-group-append">
                    <button
                      onClick={() => this.clickOnSubscribeButton.emit({place:'btn-subscribe', item: this.subscribeText})}
                      class="btn btn-primary btn-custom-head"
                      type="submit"
                    >
                      {this.subscribeText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-12">
              <div class="logos text-center text-muted pt-4">
                <span onClick={() => this.clickOnSubscribeButton.emit()} >
                  <i class="far fa-address-book"></i>
                </span>
                <span onClick={() => this.clickOnSubscribeButton.emit()} >
                  <i class="fas fa-paper-plane"></i>
                </span>
                <span onClick={() => this.clickOnSubscribeButton.emit()} >
                  <i class="fas fa-envelope"></i>
                </span>
                <span onClick={() => this.clickOnSubscribeButton.emit()} >
                  <i class="fas fa-map-marked"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
