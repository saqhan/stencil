import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'footer-second',
  styleUrl: 'footer-second.css',
  shadow: false,
})
export class FooterSecond implements ComponentInterface {

  @Prop() footerSecond: any;

  getItemsFooter(array){
    return array.map(item => item)
  }

  render() {
    console.log(this.footerSecond)
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
