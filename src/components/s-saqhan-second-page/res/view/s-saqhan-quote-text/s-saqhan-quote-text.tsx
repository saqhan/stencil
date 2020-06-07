import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "s-saqhan-quote-text",
  styleUrl: "s-saqhan-quote-text.css",
  shadow: false,
})



export class SSaqhanQuoteText implements ComponentInterface {

  @Prop() quoteText:any;

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class=" col ">
            <div class="quote-text">
              {this.quoteText.text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
