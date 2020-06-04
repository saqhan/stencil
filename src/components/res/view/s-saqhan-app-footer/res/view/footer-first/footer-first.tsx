import { Component, ComponentInterface, h , Prop} from '@stencil/core';

@Component({
  tag: 'footer-first',
  styleUrl: 'footer-first.css',
  shadow: false,
})
export class FooterFirst implements ComponentInterface {
  /**
   * массив 1 футера
   */
  @Prop() footer:any;

  render() {

    return (
      <div>
        <div class="footer-title">{this.footer.title}</div>
        <div class="footer-item">
          <ul>
            <FooterValue arr={this.footer.links} ></FooterValue>
          </ul>
        </div>
      </div>
    );
  }
}

const FooterValue = (props) => {
  return props.arr.map(item => {
    return <footer-first-item arr={item} ></footer-first-item>
  })
}
