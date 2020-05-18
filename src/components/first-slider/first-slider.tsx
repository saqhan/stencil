import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {blogCarouselMock} from "../../utils/mock";

@Component({
  tag: 'first-slider',
  styleUrl: 'first-slider.css',
  shadow: false,
})
export class FirstSlider implements ComponentInterface {

  @Prop() blogCarouselMock;

  render() {
    return (
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-12 col-lg-7">
            <div>
              {blogCarouselMock.map((news) => {
                if (news.main) {
                  return (
                    <div class="main-news" >
                      <div >
                        <div class="img-news m-auto"></div>
                        <div class="category-news pt-3 text-primary small">
                          {news.category}
                        </div>
                        <div class="title-news pt-3 h2 font-weight-bold">
                          {news.title}
                        </div>
                        <div class="sub-title-news pt-3 pb-3 text-muted">
                          {news.subTitle}
                        </div>
                        <a href="/second-page/" class="btn btn-primary btn-custom"
                        >Read Story</a>
                      </div>
                    </div>
                  )
                }
              })}
            </div>

    </div>
    <div class="col-12 col-lg-5">

        {blogCarouselMock.map((lenta) => {
          if (lenta.lenta) {
            return (
              <div class="lenta-news d-flex justify-content-between" >
                <div class="lenta-img pr-4"> </div>
                <div class="lenta-info">
                  <div class="lenta-category small text-danger">
                    {lenta.category}
                  </div>
                  <div class="lenta-title font-weight-bold pt-1">
                    {lenta.title}
                  </div>
                  <div class="btn-read">
                    <a href="/second-page/"
                    >Read Report</a>
                  </div>
                </div>
              </div>
            );
          }
        })}

    </div>
  </div>

</div>
    );
  }

}
