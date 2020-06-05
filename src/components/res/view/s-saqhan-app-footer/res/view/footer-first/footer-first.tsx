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
      <FooterBlock title={this.footer.title} links={this.footer.links} name={this.footer.name}  id={this.footer.id}></FooterBlock>
    );
  }
}

const subFooterBlock = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <div>
        {props.links.map(
          (item) => {
            return (<span>{item.name}</span>)
          }
        )}
      </div>
    </div>
  );
}

const FooterBlock = (props) => {

  const {title, id, links, name} = props;

  const currentName = title ? title : name;

  return (
    <div>
      <div class="footer-title">{currentName}</div>
      <div class="footer-item">
        <div>
          <FooterValue arr={links} ></FooterValue>
        </div>
      </div>
    </div>
  )
}

const FooterValue = (props) => {
  return props.arr.map(item => {
    console.log('FooterValue', item.links, item.title )
    if (item.links)  {
      return (<subFooterBlock name={item.name} links={item.links}></subFooterBlock>)
    } else {
      return <footer-first-item arr={item}></footer-first-item>
    }
  })
}
