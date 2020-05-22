import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'card-author',
  styleUrl: 'card-author.css',
  shadow: false,
})
export class CardAuthor implements ComponentInterface {

  @Prop() author:any;

  render() {
    return (
      <div class="row sub-auth">
        <div class="col">
          <div class="author-sub">
            <div class="img" style={{ backgroundImage: 'url(' + this.author.img + ')'}}>

            </div>
            <div class="author-info">
              <div class="name">
                {this.author.firstName}
              </div>
              <div class="info">
                {this.author.position}
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="follow">
            <div>Follow me on:</div>

            <div class="soc-acc">
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
                    class="btn btn-social-icon btn-instagram btn-rounded"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
