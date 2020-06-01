# my-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-saqhan-header-app](../res/view/s-saqhan-header-app)
- [s-saqhan-first-slider](./res/view/s-saqhan-first-slider)
- [s-saqhan-new-blog](../res/view/s-saqhan-new-blog)
- [s-saqhan-popular-news](./res/view/s-saqhan-popular-news)
- [s-saqhan-events-blog](./res/view/s-saqhan-events-blog)
- [s-saqhan-subsc-banner](../res/view/s-saqhan-subsc-banner)
- [s-saqhan-app-footer](../res/view/s-saqhan-app-footer)
- [s-saqhan-chat-app](../s-saqhan-chat-app)

### Graph
```mermaid
graph TD;
  s-saqhan-component --> s-saqhan-header-app
  s-saqhan-component --> s-saqhan-first-slider
  s-saqhan-component --> s-saqhan-new-blog
  s-saqhan-component --> s-saqhan-popular-news
  s-saqhan-component --> s-saqhan-events-blog
  s-saqhan-component --> s-saqhan-subsc-banner
  s-saqhan-component --> s-saqhan-app-footer
  s-saqhan-component --> s-saqhan-chat-app
  s-saqhan-first-slider --> s-saqhan-main-news-card
  s-saqhan-first-slider --> s-saqhan-lenta-news-card
  s-saqhan-new-blog --> s-saqhan-blog-card
  s-saqhan-popular-news --> s-saqhan-popular-card
  s-saqhan-events-blog --> s-saqhan-event-card
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
  style s-saqhan-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
