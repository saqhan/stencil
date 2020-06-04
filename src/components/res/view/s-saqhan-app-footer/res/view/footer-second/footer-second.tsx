import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'footer-second',
  styleUrl: 'footer-second.css',
  shadow: false,
})
export class FooterSecond implements ComponentInterface {
  /**
   * массив второго футера
   */
  @Prop() footerSecond: any;
  /**
   * клик по кнопке в футере
   */
  @Event() clickOnMenu: EventEmitter;
  render() {

    return (
      <div>
        <div class="footer-title">{this.footerSecond.title}</div>
        <div class="footer-item">
          <ul>
            <FooterValue arr={this.footerSecond.links} ></FooterValue>
          </ul>
        </div>
      </div>
    );
  }
}

const FooterValue = (props) => {
  return props.arr.map(item => {
    return <footer-second-item arr={item} ></footer-second-item>
  })
}
