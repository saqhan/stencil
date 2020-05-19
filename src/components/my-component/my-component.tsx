import {Component, h, Prop} from "@stencil/core";
import {blogPost} from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {

  @Prop() blogPost: object;

  getNewPosts(arr): any[] {
    return arr.map((item) => item);
  }

  render() {
    return (
      <div>
        <header-app/>
        <first-slider />
        <NewPostCard post={this.getNewPosts(blogPost)} />
      </div>
    );
  }
}

const NewPostCard = (props) => {
  return (props.post.map((item) => {
      return <new-blog post={item}/>
    }
  ))
}
