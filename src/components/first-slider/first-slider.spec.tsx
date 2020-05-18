import { newSpecPage } from '@stencil/core/testing';
import { FirstSlider } from './first-slider';

describe('first-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FirstSlider],
      html: `<first-slider></first-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <first-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </first-slider>
    `);
  });
});
