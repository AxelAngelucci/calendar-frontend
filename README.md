
# Calendar Frontend
A calendar app that implements the apod api.

### Tech Stack
* Icons Collection Provided By [react-icons](https://www.npmjs.com/package/react-icons).
* [React](https://www.npmjs.com/package/react) & [Typescript](https://www.npmjs.com/package/typescript).
* Client & Server Side Validation/Page Rendering with [NextJs](https://www.npmjs.com/package/next).
* Responsive Styling using [SASS](https://sass-lang.com/).
* Query client-side caching with [react-query](https://www.npmjs.com/package/react-query).
* [Axios](https://www.npmjs.com/package/axios) data-fetching.
* [ESLint](https://www.npmjs.com/package/eslint) Code Formatting.


## About 
This project belongs to Axel Angelucci. It's divided between a REST API Server, developed using [node.js](https://nodejs.org/en) and [Express](https://expressjs.com/es/) using Firestore as DB. Meanwhile, it has a [NextJs](https://nextjs.org) with [Typescript](https://www.typescriptlang.org) frontend, wich is a framework that works on top of [React](https://reactjs.org). It is styled with [SASS](https://sass-lang.com/), featuring a responsive layout. 

**Before Running Anything**, you need to follow theese steps:

**Backend**
- Add your personal Firestore json key in src/config
- Run the backend: 
```
npm install
npm run build
npm start
```

**Frontend**
- In .env.local, add the APOD API URL with your own API KEY and add your own comments API URL or use my deployed api "https://calendar-nasa-backend.onrender.com/comments/"
```
NEXT_PUBLIC_NASA_API =  your-APOD-API

NEXT_PUBLIC_COMMENTS_API =  your-comments-API
```
- Run the FrontEnd:
```
npm install
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

[Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

[Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Every operation runs through Controllers. There's one for each module. While requests and responses are also modelled in JAVASCRIPT with the usage of MVC pattern, the server will handle JSON bodies back and forth.\
When testing the endpoints, one must note that JSON objects are **camelCased**


## File Structure:
Note that:
- Folders that have ":" below indicate many files of a certain kind.
- Files named [Type] mean that they have a custom name, and are classes
that are related to that specific "Type".

### Frontend:
```
Calendar Frontend:
├── Components
│   ├── Calendar
│   │   ├── CalendarComponent.module.scss
│   │   ├── CalendarComponent.tsx
│   │   └── CalendarDayItem
│   │       ├── CalendarDayItem.module.scss
│   │       └── CalendarDayItem.tsx
│   ├── Comments
│   │   ├── CommentBox
│   │   │   ├── CommentBox.module.scss
│   │   │   └── CommentBox.tsx
│   │   ├── Comments.module.scss
│   │   ├── Comments.tsx
│   │   └── Error
│   │       ├── CommentBox.module.scss
│   │       └── ErrorComponent.tsx
│   ├── DayDetail
│   │   ├── DayDetail.module.scss
│   │   └── DayDetail.tsx
│   ├── Error
│   │   ├── ErrorComponent.module.scss
│   │   └── ErrorComponent.tsx
│   ├── index.ts
│   └── Loader
│       ├── LoaderComponent copy.tsx
│       ├── LoaderComponent.module.scss
│       └── LoaderComponent.tsx
├── hooks
│   ├── Queries
│   │   ├── useCommentsQuery.tsx
│   │   └── useDayDetailQuery.tsx
│   ├── useComments.tsx
│   ├── useFirstDayOfMonth.tsx
│   └── useMonthSelector.tsx
├── interfaces
│   ├── commentsApi.ts
│   └── nasaApi.ts
├── pages
│   ├── api
│   │   └── hello.ts
│   ├── _app.tsx
│   ├── details
│   │   └── [day].tsx
│   ├── _document.tsx
│   └── index.tsx
├── services
│   ├── comments
│   │   └── api.comments.ts
│   └── nasa
│       └── api.picture.ts
├── styles
│   ├── globals.css
│   └── Home.module.css
└── utils
    ├── constants.ts
    ├── generateMonthDays.ts
    ├── getSelectedMonth.ts
    ├── index.ts
    └── isImage.ts
```