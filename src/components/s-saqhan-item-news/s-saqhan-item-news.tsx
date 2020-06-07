import { Component, ComponentInterface,  h } from '@stencil/core';
import {breadCrumbs, NewsStore} from "../../utils/mock";

@Component({
  tag: 's-saqhan-item-news',
  styleUrl: 's-saqhan-item-news.css',
  shadow: false,
})
export class SSaqhanItemNews implements ComponentInterface {

  render() {
    return (
      <div>
        <s-saqhan-bread-crumbs links={breadCrumbs} />
        <s-saqhan-list-news news={NewsStore}/>
        <s-saqhan-app-footer />
      </div>
    );
  }

}
