# s-saqhan-item-news



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-saqhan-header-app](../res/view/s-saqhan-header-app)
- [s-saqhan-bread-crumbs](./res/view/s-saqhan-bread-crumbs)
- [s-saqhan-list-news](./res/view/s-saqhan-list-news)
- [s-saqhan-app-footer](../res/view/s-saqhan-app-footer)

### Graph
```mermaid
graph TD;
  s-saqhan-item-news --> s-saqhan-header-app
  s-saqhan-item-news --> s-saqhan-bread-crumbs
  s-saqhan-item-news --> s-saqhan-list-news
  s-saqhan-item-news --> s-saqhan-app-footer
  s-saqhan-header-app --> menu-item
  s-saqhan-bread-crumbs --> s-saqhan-bread-card
  s-saqhan-list-news --> s-saqhan-news-card
  s-saqhan-app-footer --> footer-first
  footer-first --> footer-first-item
  style s-saqhan-item-news fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
