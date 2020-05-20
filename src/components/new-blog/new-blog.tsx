import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {blogPost} from "../../utils/mock";

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
        <div class="row pt-5 pb-5">
          <div class="col-12">
            <h1 class="font-weight-bold">New Blog Post</h1>
          </div>
          <div class="new-blog-cards">
            <NewPostCard post={this.getNewPosts(blogPost)} />
          </div>
        </div>
      </div>
    );
  }
}

const NewPostCard = (props) => {
  return (props.post.map((item) => {
      return <blog-card post={item}/>
    }
  ))
}
