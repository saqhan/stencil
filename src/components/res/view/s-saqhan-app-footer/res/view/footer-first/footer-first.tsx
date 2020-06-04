import { Component, ComponentInterface, h , Prop} from '@stencil/core';

@Component({
  tag: 'footer-first',
  styleUrl: 'footer-first.css',
  shadow: false,
})
export class FooterFirst implements ComponentInterface {

  @Prop() footer:any;

  render() {
    return (
      <div>
        <div class="footer-title">{this.footer.title}</div>
        <div class="footer-item">
          <ul>
            <li><a href="#" class="foot-nav-link"> </a></li>
            <li><a href="#" class="foot-nav-link"></a></li>
            <li><a href="#" class="foot-nav-link">2</a></li>
            <li><a href="#" class="foot-nav-link">22</a></li>
          </ul>
        </div>
      </div>
    );
  }

}
