# s-saqhan-app-footer



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description             | Type  | Default     |
| ------------- | -------------- | ----------------------- | ----- | ----------- |
| `footerInfo`  | `footer-info`  | клик по кнопке в футере | `any` | `undefined` |
| `footerItems` | `footer-items` | массив меню для вывода  | `any` | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `clickOnMenu` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-saqhan-component](../../../s-saqhan-component)
 - [s-saqhan-item-news](../../../s-saqhan-item-news)

### Depends on

- [footer-first](./res/view/footer-first)

### Graph
```mermaid
graph TD;
  s-saqhan-app-footer --> footer-first
  footer-first --> footer-first-item
  s-saqhan-component --> s-saqhan-app-footer
  s-saqhan-item-news --> s-saqhan-app-footer
  style s-saqhan-app-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
