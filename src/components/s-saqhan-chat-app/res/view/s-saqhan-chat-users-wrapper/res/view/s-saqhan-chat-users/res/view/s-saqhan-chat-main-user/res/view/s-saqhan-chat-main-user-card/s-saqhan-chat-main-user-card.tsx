import {Component, ComponentInterface,Event, EventEmitter, h, Prop,} from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-main-user-card',
  styleUrl: 's-saqhan-chat-main-user-card.css',
  shadow: false,
})
export class SSaqhanChatMainUserCard implements ComponentInterface {

  @Prop() main:any;
  @Event() selectPersonal: EventEmitter;

  render() {
    return (
      <div class="user-wrapper-main" onClick={() => this.selectPersonal.emit() }>
        <div class="left">
          <div  class="img-user" style={{ backgroundImage: "url(" + this.main.img + ")" }}></div>
        </div>
        <div class="right-main">
          <div class="user-data">
            <div class="user-name">{this.main.name}</div>
            <div class="message-date"> {this.main.date} </div>
          </div>
          <div class="mess-wrapper">
            <div class="user-mess">{this.main.message}</div>
            <div class="new-mess-wrap" ><span class="new-mess">2</span></div>
          </div>
        </div>
      </div>
    );
  }

}
