# s-saqhan-chat-app



<!-- Auto Generated Below -->


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `close`          |             | `CustomEvent<any>` |
| `selectFiles`    |             | `CustomEvent<any>` |
| `selectPersonal` |             | `CustomEvent<any>` |
| `selectUsers`    |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-saqhan-component](../s-saqhan-component)

### Depends on

- [s-saqhan-chat-wrapper](./res/view/s-saqhan-chat-wrapper)

### Graph
```mermaid
graph TD;
  s-saqhan-chat-app --> s-saqhan-chat-wrapper
  s-saqhan-chat-wrapper --> s-saqhan-chat-personal
  s-saqhan-chat-wrapper --> s-saqhan-chat-users-wrapper
  s-saqhan-chat-wrapper --> s-saqhan-chat-files-wrapper
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-form-search
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-users
  s-saqhan-chat-users-wrapper --> s-saqhan-chat-add-question
  s-saqhan-chat-users --> s-saqhan-chat-main-user
  s-saqhan-chat-users --> s-saqhan-chat-user
  s-saqhan-chat-main-user --> s-saqhan-chat-main-user-card
  s-saqhan-chat-user --> s-saqhan-chat-user-card
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-form-search-files
  s-saqhan-chat-files-wrapper --> s-saqhan-chat-files
  s-saqhan-component --> s-saqhan-chat-app
  style s-saqhan-chat-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
