import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: false,
})
export class AppFooter implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="row footer">
          <div class="col-lg-4 col-md-12 footer-info-block">
            <div class="footer-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid
              asperiores.
            </div>
            <div class="footer-soc">
              <div class="template-demo">
                <button
                  type="button"
                  class="btn btn-social-icon btn-facebook btn-rounded"
                >
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-social-icon btn-twitter btn-rounded"
                >
                  <i class="fab fa-youtube"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-social-icon btn-instagram btn-rounded"
                >
                  <i class="fab fa-instagram"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-social-icon btn-instagram btn-rounded"
                >
                  <i class="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-6 col-6">
            <div class="footer-title">Solutions</div>
            <div class="footer-item">
              <ul>
                <li><a href="#" class="foot-nav-link">Services</a></li>
                <li><a href="#" class="foot-nav-link">Portfolio</a></li>
                <li><a href="#" class="foot-nav-link">About</a></li>
                <li><a href="#" class="foot-nav-link">Blog</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6 col-6">
            <div class="footer-title">Products</div>
            <div class="footer-item">
              <ul>
                <li><a href="#" class="foot-nav-link">Platform</a></li>
                <li><a href="#" class="foot-nav-link">Customers</a></li>
                <li><a href="#" class="foot-nav-link">Products</a></li>
                <li><a href="#" class="foot-nav-link">Pricing</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6 col-6">
            <div class="footer-title">Pricing</div>
            <div class="footer-item">
              <ul>
                <li><a href="#" class="foot-nav-link">Training</a></li>
                <li><a href="#" class="foot-nav-link">Marketplace</a></li>
                <li><a href="#" class="foot-nav-link">Experts</a></li>
                <li><a href="#" class="foot-nav-link">Guides</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6 col-6">
            <div class="footer-title">Offices</div>
            <div class="footer-item">
              <ul>
                <li><a href="#" class="foot-nav-link">Training</a></li>
                <li><a href="#" class="foot-nav-link">Marketplace</a></li>
                <li><a href="#" class="foot-nav-link">Experts</a></li>
                <li><a href="#" class="foot-nav-link">Guides</a></li>
              </ul>
            </div>
          </div>
          <div class="col-12 pt-5">
            <div class="choose-language text-muted small">
              <i class="fas fa-globe-africa"></i> Choose Language<br />
              <a href="/" class="pr-3">English (United Tates)</a>
              <a href="/">French</a>
            </div>
          </div>
        </div>
      </div>

    );
  }

}
