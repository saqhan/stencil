import {Component, ComponentInterface, h, Prop, Event, EventEmitter} from "@stencil/core";
import { NewBlogItem } from "./res/interface/commin.interface";
@Component({
  tag: "s-saqhan-new-blog",
  styleUrl: "s-saqhan-new-blog.css",
  shadow: false,
})





export class SSaqhanNewBlog implements ComponentInterface {
  /**
   * Массив с публикациями
   * */
  @Prop() blogPost: NewBlogItem[]; //NewBlogItem
  /**
   * Клик по новости
   * */
  @Event() clickOnNews: EventEmitter;
  /**
   * Клик по category
   * */
  @Event() clickOnCategoryNews: EventEmitter;

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
    return <div class="col-12 col-md-6 col-lg-4 "><s-saqhan-blog-card post={item}/></div>
    }
  ))
}
