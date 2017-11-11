# milva

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## TODO List

* [x] Create HomePage
  * [x] Display unique list of categories (with "all" option)
  * [x] Display list of quizzes
  * [x] Filter list of quizzes after select category
  * [x] Create route for concrete category
  * [x] Display whole list of quizzes when category is not selected
  * [x] Create route for concrete quiz
* [x] Create QuizPage
  * [x] Get quizId from URL
  * [x] Get quizModel by quizId
  * [x] Redirect to HomePage when quizModel is not found
  * [x] Display quiz description on profile page
  * [x] Display single question (with answers)
  * [x] Switch question after choose answer
  * [x] Display answering progress for single quiz
  * [x] When user answers all questions:
    * [x] Display score
    * [x] Display share button
