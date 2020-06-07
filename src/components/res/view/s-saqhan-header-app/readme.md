# s-saqhan-header-app



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                       | Type                      | Default     |
| --------------- | ---------------- | --------------------------------- | ------------------------- | ----------- |
| `logoUrl`       | `logo-url`       | ссылка на изображение логотипа    | `string`                  | `undefined` |
| `menu`          | --               | массив меню для вывода            | `SSaqhanHedearMenuItem[]` | `[]`        |
| `subscribeText` | `subscribe-text` | текст вывода в кнопке подписаться | `string`                  | `undefined` |


## Events

| Event                    | Description                | Type                                 |
| ------------------------ | -------------------------- | ------------------------------------ |
| `clickOnMenu`            | клик по конкретному меню   | `CustomEvent<SSaqhanHedearMenuItem>` |
| `clickOnSubscribeButton` | клик по кнопке подписаться | `CustomEvent<any>`                   |
| `clickToLogo`            | клик по лого               | `CustomEvent<any>`                   |


## Dependencies

### Used by

 - [s-saqhan-component](../../../s-saqhan-component)
 - [s-saqhan-item-news](../../../s-saqhan-item-news)

### Depends on

- [menu-item](./res/view/menu-item)

### Graph
```mermaid
graph TD;
  s-saqhan-header-app --> menu-item
  s-saqhan-component --> s-saqhan-header-app
  s-saqhan-item-news --> s-saqhan-header-app
  style s-saqhan-header-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
