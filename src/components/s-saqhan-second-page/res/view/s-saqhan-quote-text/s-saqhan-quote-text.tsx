import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "s-saqhan-quote-text",
  styleUrl: "s-saqhan-quote-text.css",
  shadow: false,
})
export class SSaqhanQuoteText implements ComponentInterface {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class=" col ">
            <div class="quote-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              assumenda delectus dignissimos dolore eius eligendi eum excepturi
              hic iure iusto labore nisi nobis nulla pariatur quo sapiente,
              suscipit veritatis voluptatem. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Adipisci assumenda delectus
              dignissimos dolore eius eligendi eum excepturi hic iure iusto
              labore nisi nobis nulla pariatur quo sapiente, suscipit veritatis
              voluptatem.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
