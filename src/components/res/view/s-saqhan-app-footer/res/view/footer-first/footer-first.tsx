import { Component, ComponentInterface, h , Prop} from '@stencil/core';

@Component({
  tag: 'footer-first',
  styleUrl: 'footer-first.css',
  shadow: false,
})
export class FooterFirst implements ComponentInterface {

  @Prop() footer:any;

  getItemsFooter(array){
    return array.map(item => item)
  }

  render() {
    console.log(this.footer)
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
    return <footer-item arr={item} ></footer-item>
  })
}
