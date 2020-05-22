import { Component, ComponentInterface,  h } from '@stencil/core';
import {breadCrumbs, NewsStore} from "../../utils/mock";

@Component({
  tag: 'item-news',
  styleUrl: 'item-news.css',
  shadow: false,
})
export class ItemNews implements ComponentInterface {

  render() {
    return (
      <div>
        <header-app />
        <bread-crumbs links={breadCrumbs} />
        <list-news news={NewsStore}/>
        <app-footer />
      </div>
    );
  }

}
