# s-saqhan-new-blog



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description           | Type            | Default     |
| ---------- | --------- | --------------------- | --------------- | ----------- |
| `blogPost` | --        | Массив с публикациями | `NewBlogItem[]` | `undefined` |


## Events

| Event                 | Description      | Type               |
| --------------------- | ---------------- | ------------------ |
| `clickOnCategoryNews` | Клик по category | `CustomEvent<any>` |
| `clickOnNews`         | Клик по новости  | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-saqhan-component](../../../s-saqhan-component)
 - [s-saqhan-second-page](../../../s-saqhan-second-page)

### Depends on

- [s-saqhan-blog-card](./res/view/s-saqhan-blog-card)

### Graph
```mermaid
graph TD;
  s-saqhan-new-blog --> s-saqhan-blog-card
  s-saqhan-component --> s-saqhan-new-blog
  s-saqhan-second-page --> s-saqhan-new-blog
  style s-saqhan-new-blog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
