import { newE2EPage } from '@stencil/core/testing';

describe('first-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<first-slider></first-slider>');

    const element = await page.find('first-slider');
    expect(element).toHaveClass('hydrated');
  });
});
