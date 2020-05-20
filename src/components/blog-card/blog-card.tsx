import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'blog-card',
  styleUrl: 'blog-card.css',
  shadow: false,
})
export class BlogCard implements ComponentInterface {

  @Prop() post:any;

  render() {
    return (
          <div class="col-12 col-md-6 col-lg-4 pt-5 pt-lg-4 ">
            <div class="d-flex ">
              <div class="blog-card">
                <div class="blog-img"></div>
                <div class=" category blog-category text-primary small pt-4">
                  {this.post.category}
                </div>
                <div class="blog-title pt-3 font-weight-bold">
                  {this.post.title}
                </div>
                <div class="btn-read pt-3">
                  <a href="/second-page/">Read Story</a>
                </div>
              </div>
            </div>
          </div>
    );
  }

}
