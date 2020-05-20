import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "new-blog",
  styleUrl: "new-blog.css",
  shadow: false,
})
export class NewBlog implements ComponentInterface {

  @Prop() post:any;

  render() {
    return (
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-12">
            <h1 class="font-weight-bold">New Blog Post</h1>
          </div>
          <div class="col-12 col-md-6 col-lg-4 pt-5 pt-lg-4">
            <div class="d-flex justify-content-between">
              <div class="blog-card">
                <div class="blog-img"></div>
                <div class=" category blog-category text-primary small pt-4">
                  {this.post.category}
                </div>
                <div class="blog-title pt-3 font-weight-bold">
                  {this.post.title}
                </div>
                <div class="btn-read pt-3">
                  <a href="/second-page/">Read Story1</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
