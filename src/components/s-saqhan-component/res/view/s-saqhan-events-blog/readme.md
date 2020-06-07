# s-saqhan-events-blog



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description           | Type                     | Default     |
| -------- | --------- | --------------------- | ------------------------ | ----------- |
| `events` | --        | Массив с публикациями | `SSaqhanEventCardItem[]` | `undefined` |


## Events

| Event                 | Description       | Type               |
| --------------------- | ----------------- | ------------------ |
| `clickOnCategoryNews` | Клик по категории | `CustomEvent<any>` |
| `clickOnNews`         | Клик по новости   | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-saqhan-component](../../..)

### Depends on

- [s-saqhan-event-card](./res/view/s-saqhan-event-card)

### Graph
```mermaid
graph TD;
  s-saqhan-events-blog --> s-saqhan-event-card
  s-saqhan-component --> s-saqhan-events-blog
  style s-saqhan-events-blog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
