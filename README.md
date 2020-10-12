# Hacker News Clone

<img src="https://raw.githubusercontent.com/moisestech/hacker-news/master/public/assets/hacker-news-clone-logo.png" width="250px" />
Hacker News API clone for reading post, linking to articles and connecting with users.

## ⚙ Features

- React 17
- React RouterV6
- React Hooks
- ES8
- RouterV6
- PropTypes
- Light/Dark Theme

## 👁️‍🗨️ Project Preview

|                                                                                                                                                         Light Mode                                                                                                                                                         |                                                                                                                                                         Dark Mode                                                                                                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![](https://user-images.githubusercontent.com/2933430/55542659-c0b0e100-5684-11e9-9877-20f218c8fde5.png) ![](https://user-images.githubusercontent.com/2933430/55542657-c0184a80-5684-11e9-9473-8a153a232301.png) ![](https://user-images.githubusercontent.com/2933430/55542656-c0184a80-5684-11e9-923b-2836944a474a.png) | ![](https://user-images.githubusercontent.com/2933430/55542654-c0184a80-5684-11e9-9436-9b3ae973e8b5.png) ![](https://user-images.githubusercontent.com/2933430/55542658-c0b0e100-5684-11e9-821f-03dc5f80c97c.png) ![](https://user-images.githubusercontent.com/2933430/55542655-c0184a80-5684-11e9-832b-657b683d0625.png) |

## 🗺 URL Tree

```bash
├── /               #Home
├── /posts          #Post
├── /posts/:postId  #Post:ID
├── /users          #User
└── /*              #404
```

## 🌿 Application Tree

```bash
├── README.md
├── package.json
├── public
│   └── _redirects
├── src
│   ├── components
│   │   ├── Comment
│   │   │   └── index.js
│   │   ├── Loading
│   │   │   └── index.js
│   │   ├── Nav
│   │   │   ├── components
│   │   │   │   ├── NavHeader
│   │   │   │   │   └── index.js
│   │   │   │   └── ThemeButton
│   │   │   │       └── index.js
│   │   │   └── index.js
│   │   ├── Post
│   │   │   └── index.js
│   │   ├── PostMetaInfo
│   │   │   └── index.js
│   │   ├── PostTitle
│   │   │   └── index.js
│   │   ├── Posts
│   │   │   └── index.js
│   │   ├── PostsList
│   │   │   └── index.js
│   │   └── User
│   │       ├── components
│   │       │   ├── UserAbout
│   │       │   │   └── index.js
│   │       │   └── UserPosts
│   │       │       └── index.js
│   │       └── index.js
│   ├── contexts
│   │   └── theme.js
│   ├── hooks
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   └── utils
│       ├── api.js
│       └── helpers.js
└── webpack.config.js
```

## ⛰️ Roadmap

- Looking at more robust versions of this project.

## 📝 Todos

- Create Pages Folder and restructure
- Link out in new tab.
- Create generative profile image for user.
- User has 0 post, "User has no Posts"
- Home page click button
- Add Favicon
- Light / Dark Mode Theme
