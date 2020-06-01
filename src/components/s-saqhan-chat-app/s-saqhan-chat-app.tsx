import { Component, ComponentInterface, h, State, Event } from "@stencil/core";
import { messages, mainUser } from "../../utils/mock";

@Component({
  tag: "s-saqhan-chat-app",
  styleUrl: "s-saqhan-chat-app.css",
  shadow: false,
})
export class SSaqhanChatApp implements ComponentInterface {
  @State() showChat: boolean;
  @State() showContent = "users";

  @Event() close: boolean;
  @Event() selectPersonal: string;
  @Event() selectUsers: string;
  @Event() selectFiles: string;

  public isShowChat() {
    this.showChat = !this.showChat;
  }
  public onClose() {
    this.showChat = false;
  }

  public onSelectPersonal() {
    return  this.showContent = 'personal';
  }
  public onSelectUsers() {
    return  this.showContent = 'users';
  }
  public onSelectFiles() {
    return  this.showContent = 'files';
  }


  render() {
    return (
      <div class="wrapper-modal">
        {this.showChat ? (
          <s-saqhan-chat-wrapper
            messages={messages}
            mainUser={mainUser}
            onSelectPersonal={() => this.onSelectPersonal()}
            onSelectUsers={() => this.onSelectUsers()}
            onSelectFiles={() => this.onSelectFiles()}
            onClose={() => this.onClose()}
            showContent={this.showContent}
          ></s-saqhan-chat-wrapper>
        ) : (
          ""
        )}
        <div class="btn-wrapper">
          <div class="open-chat">
            <button onClick={() => this.isShowChat()} class="btn-open">
              <span>
                {this.showChat ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="far fa-comment-dots"></i>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
