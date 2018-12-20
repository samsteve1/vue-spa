<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
      <app-post :link="post.rest_api_enabler.Link">
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <span slot="post-content" v-html="post.excerpt.rendered"></span>
      </app-post>
    </div>
  </div>
</template>
<script>
  import AppPost from './Post.vue'
  import { mapGetters } from 'vuex'
  export default{
    components: {
      appPost: AppPost
    },
    computed: {
      ...mapGetters('postsModule', ['posts'])
    },
    methods: {
      loadPosts () {
        let categoryId = 2
        if (this.$route.params.category === 'mobile') {
          categoryId = 11
        }
        this.$store.dispatch('postsModule/updateCategory', categoryId)
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadPosts()
      }
    },
    created () {
      //  do something after creating vue instance
      this.loadPosts()
    }
  }
</script>
