import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 's-saqhan-subsc-banner',
  styleUrl: 's-saqhan-subsc-banner.css',
  shadow: false,
})
export class SSaqhanSubscBanner implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="row subscribe d-flex justify-content-between align-items-center pt-5 pb-5 text-white">
          <div class="col-12 col-lg-6 left">
            <div class="sub-title">
              <h1>Ready to take a test drive</h1>
            </div>
            <div class="subs-sub-title text-muted">
              We'll help you elevate your video content strategy. Prices
              strating from $49 a month.
              <span class="btn-read">
                <a href="/second-page/">See&nbsp;pricing</a>
              </span>
            </div>
          </div>
          <div class="col-12 col-lg-6 p-3 right pr-sm-5 text-right">
            <div class="col-12">
              <form class="form">
                <div class="input-group">
                  <i class="fas fa-at"></i>
                  <input
                    type="text"
                    class="form-control rounded"
                    placeholder="Enter work email"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary btn-custom-head"
                      type="submit"
                    >
                      Try it Free
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-12">
              <div class="logos text-center text-muted pt-4">
                <a href="/second-page/">
                  <i class="far fa-address-book"></i>
                </a>
                <a href="/second-page/">
                  <i class="fas fa-paper-plane"></i>
                </a>
                <a href="/second-page/">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="/second-page/">
                  <i class="fas fa-map-marked"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
