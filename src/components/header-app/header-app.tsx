import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'header-app',
  styleUrl: 'header-app.css',
  shadow: false,
})
export class HeaderApp implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <header>
              <nav
                class="navbar navbar-expand-lg navbar-light p-0 d-flex justify-content-between"
              >
                <a href="/" class="navbar-brand"><img src="https://saqhan.github.io/wibbitz/assets/img/logo.jpg" /></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse justify-content-around align-items-center"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                      <a class="nav-link active" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/second-page/">Second Page</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/list-items/">List Items</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/chat/">Online Chat</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/second-page/">Customer Stories</a>
                    </li>
                  </ul>
                  <a href="#" class="pr-4">
                    <span class="material-icons">search</span>
                  </a>
                  <form class="form">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control rounded"
                        placeholder="Enter work email"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary btn-custom-head" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </nav>
            </header>
          </div>
        </div>

      </div>
    );
  }

}
