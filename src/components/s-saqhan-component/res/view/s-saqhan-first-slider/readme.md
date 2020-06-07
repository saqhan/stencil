# s-saqhan-first-slider



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                | Type  | Default     |
| ------------------ | -------------------- | -------------------------- | ----- | ----------- |
| `blogCarouselMock` | `blog-carousel-mock` | массив новостей для вывода | `any` | `undefined` |


## Events

| Event                 | Description                  | Type               |
| --------------------- | ---------------------------- | ------------------ |
| `clickOnCategoryNews` | Фильтруем для ленты новостей | `CustomEvent<any>` |
| `clickOnNews`         | Клик по новости              | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-saqhan-component](../../..)

### Depends on

- [s-saqhan-main-news-card](./res/view/s-saqhan-main-news-card)
- [s-saqhan-lenta-news-card](./res/view/s-saqhan-lenta-news-card)

### Graph
```mermaid
graph TD;
  s-saqhan-first-slider --> s-saqhan-main-news-card
  s-saqhan-first-slider --> s-saqhan-lenta-news-card
  s-saqhan-component --> s-saqhan-first-slider
  style s-saqhan-first-slider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
