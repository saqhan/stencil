import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'footer-third',
  styleUrl: 'footer-third.css',
  shadow: false,
})
export class FooterThird implements ComponentInterface {
    /**
   * массив второго футера
   */
  @Prop() footerThird:any;

  render() {
    return (
      <div>
        <div class="footer-title">{this.footerThird.title}</div>
        <div class="footer-item">
          <ul>
            <FooterValue arr={this.footerThird.links} ></FooterValue>
          </ul>
        </div>
      </div>
    );
  }
}

const FooterValue = (props) => {
  return props.arr.map(item => {
    return <footer-third-item arr={item} ></footer-third-item>
  })
}
