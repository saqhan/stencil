import { newE2EPage } from '@stencil/core/testing';

describe('header-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<header-app></header-app>');

    const element = await page.find('header-app');
    expect(element).toHaveClass('hydrated');
  });
});
