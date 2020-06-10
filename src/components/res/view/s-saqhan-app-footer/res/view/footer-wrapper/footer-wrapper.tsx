import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
} from "@stencil/core";



@Component({
  tag: "footer-wrapper",
  styleUrl: "footer-wrapper.css",
  shadow: false,
})
export class FooterWrapper implements ComponentInterface {
  /**
   * массив 1 футера
   */
  @Prop() footer: any;

  /**
   * Клик на пункт меню
   * */
  @Event() clickOnMenu: EventEmitter;
  render() {
    return (
      <FooterBlock
        title={this.footer.title}
        links={this.footer.links}
        name={this.footer.name}
        id={this.footer.id}
      ></FooterBlock>
    );
  }
}

/**
 * Общая обертка для блока в подвале
 * */

const FooterBlock = (props) => {
  const { title, links, name } = props;

  const currentName = title ? title : name;

  return (
    <div>
      <div class="footer-title">{currentName}</div>
      <div class="footer-item">
        <div>
          <FooterValue arr={links}></FooterValue>
        </div>
      </div>
    </div>
  );
};

/**
 * решаем, который блок должен выходить в браузере - родоительский/дочерний (если есть)
 * */
const FooterValue = (props) => {
  return props.arr.map((item) => {
    if (item.links) {
      return (
        <SubFooterBlock links={item.links} name={item.name}></SubFooterBlock>
      );
    } else {
      return <footer-first-item arr={item}></footer-first-item>;
    }
  });
};

/**
 * блок куда будет помещен дочерний блок
 * */
const SubFooterBlock = (props) => {

  return (
    <div>
      <div class="footer-title">{props.name}</div>
      <div onClick={() => this.clickOnMenu.emit()}>
        {props.links.map((item) => {
          return (
            <div
              onClick={() => this.clickOnMenu.emit({place: 'footerItem', item: this.item}) }
              class="foot-nav-link"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
