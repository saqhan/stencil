import { newSpecPage } from '@stencil/core/testing';
import { HeaderApp } from './header-app';

describe('header-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderApp],
      html: `<header-app></header-app>`,
    });
    expect(page.root).toEqualHtml(`
      <header-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </header-app>
    `);
  });
});
