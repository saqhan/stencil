import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from "@stencil/core";

@Component({
  tag: "footer-first-item",
  styleUrl: "footer-first-item.css",
  shadow: false,
})
export class FooterFirstItem implements ComponentInterface {
  @Prop() arr: any;
  @Event() clickOnMenu: EventEmitter;
  render() {
    return (
      <div>
        <span class="foot-nav-link" onClick={() => this.clickOnMenu.emit({place: 'footerItem', item: this.arr} ) } >
          {this.arr.name}
        </span>
      </div>
    );
  }
}
