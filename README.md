# milva

> Milva - Take a break. Take a quiz!

![](./static/images/promo/banner-600x200.jpg)

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

# count LOC in src/ directory
npm run count

# start express server to serve dist/
npm run start

# build dist/ directory (and commit) and upload on Heroku & GitHub 
npm run deploy
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## TODO List

* [x] Create HomePage (v1)
  * [x] Defined some files with mocks quiz questions and answers
  * [x] Convert questions from Markdown to HTML
  * [x] Filter list of quizzes after select category
  * [x] Redirect to HomePage when category is exists (incorrect categoryId in URL) 
  * [x] Menu with categories
    * [x] Display unique list of categories (with "all" option)
    * [x] Create route for concrete category
  * [x] Display list of quizzes
    * [x] Display whole list of quizzes (when category is not selected)
    * [x] Display message when list is empty
    * [x] Create route for concrete quiz
* [x] Create QuizPage
  * [x] Get quizId from URL
  * [x] Get quizModel by quizId
  * [x] Redirect to HomePage when quizModel is not found
  * [x] Display quiz description on profile page
  * [x] Display single question (with answers)
  * [x] Highlight code inside question
  * [x] Switch question after choose answer
  * [x] Display answering progress for single quiz
  * [x] When user answers all questions:
    * [x] Display score
    * [x] Display share button
* [x] Create AddQuizPage (v2)
  * [x] Add button from HomePage
  * [x] Create new route for page
  * [x] Create form
* [x] User (v3)
  * [x] User panel
    * [x] Sign in user with:
      * [x] Regular form component
      * [x] ~~SSO with Facebook / Twitter / GitHub~~
    * [x] Sign out user
    * [x] Save state of logging to storage
  * [x] User profile 
    * [x] Collect score from quizzes and store them
    * [x] Display ranking of quizzes result
* [ ] WebSocket
  * [ ] Display ranking of current logged users
  * [ ] Display ranking of all registered users
* [ ] Time
  * [ ] Setup time limit in configuration
  * [ ] Display time on question
  * [ ] Redirect to next question when time is end
* [ ] Hints
  * [ ] Display question hints (step by step) when they defined
  * [ ] Add to AddQuizPage field where user can defined hints
