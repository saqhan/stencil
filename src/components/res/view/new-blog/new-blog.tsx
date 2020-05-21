import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "new-blog",
  styleUrl: "new-blog.css",
  shadow: false,
})
export class NewBlog implements ComponentInterface {

  @Prop() blogPost: object;

  getNewPosts(arr): any[] {
    return arr.map((item) => item);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="font-weight-bold">New Blog Post</h1>
          </div>
        </div>
        <div class="row">
          <NewPostCard post={this.getNewPosts(this.blogPost)} />
        </div>
      </div>

    );
  }
}

const NewPostCard = (props) => {
  return (props.post.map((item) => {
    return <div class="col-12 col-md-6 col-lg-4 "><blog-card post={item}/></div>
    }
  ))
}
