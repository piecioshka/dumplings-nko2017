<template>
  <section class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <router-link :to="'/quiz/' + quiz.id">
          <img v-bind:src="quiz.banner" alt=""/>
        </router-link>
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ quiz.name }}</p>
          <p class="subtitle is-6">
            <a :href="quiz.author.url">@{{ quiz.author.name }}</a>
          </p>
        </div>
      </div>

      <div class="content level">
        <div class="tags has-addons level-left">
          <span class="tag">Category</span>
          <span class="tag is-info">{{ quiz.category.name }}</span>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a
        :href="getFacebookShareUrl()"
        class="card-footer-item has-text-info">

        <i class="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;Share
      </a>
      <router-link
        :to="'/quiz/' + quiz.id"
        class="card-footer-item has-text-danger">
        Start
      </router-link>
    </footer>
  </section>
</template>

<script>
  import {QuizModel} from '../../models/quiz.model';
  import {CategoryModel} from '../../models/category.model';
  import importer from '../../helper/importer';

  export default {
    name: 'QuizListElement',
    props: [
      'quiz'
    ],
    methods: {
      getFacebookShareUrl() {
        return 'https://www.facebook.com/sharer/sharer.php?u=' + location.href + '/quiz/' + this.quiz.id;
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    margin: 10px;
  }
</style>
