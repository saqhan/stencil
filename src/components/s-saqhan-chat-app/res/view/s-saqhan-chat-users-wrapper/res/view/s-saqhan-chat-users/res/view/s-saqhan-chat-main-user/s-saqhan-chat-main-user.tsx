import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-chat-main-user",
  styleUrl: "s-saqhan-chat-main-user.css",
  shadow: false,
})
export class SSaqhanChatMainUser implements ComponentInterface {
  @Prop() mainUser: any;

  // getUserMain(arr): any[] {
  //   return arr.map((item) => item.main);
  // }
  render() {
    return (
      <div class="main-wrapper">
        <MainUserMessage   main={this.mainUser}></MainUserMessage>
      </div>
    );
  }
}
const MainUserMessage = (props) => {
  return props.main.map((item) => {
    return <s-saqhan-chat-main-user-card main={item}></s-saqhan-chat-main-user-card>;
  });
};
