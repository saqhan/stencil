import {Component, ComponentInterface,  h, Prop} from '@stencil/core';

@Component({
  tag: 'footer-fourth',
  styleUrl: 'footer-fourth.css',
  shadow: false,
})
export class FooterFourth implements ComponentInterface {

    /**
   * массив второго футера
   */
  @Prop() footerFourth:any;


  render() {
    return (
      <div>
        <div class="footer-title">{this.footerFourth.title}</div>
        <div class="footer-item">
          <ul>
            <FooterValue arr={this.footerFourth.links} ></FooterValue>
          </ul>
        </div>
      </div>
    );
  }
}

const FooterValue = (props) => {
  return props.arr.map(item => {
    return <footer-fourth-item arr={item} ></footer-fourth-item>
  })
}
