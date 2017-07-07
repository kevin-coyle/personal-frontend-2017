<template>
  <div class="page-blog-item">
    <Heading></Heading>
    <main>
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="blog-content section">
            <article class="blog-content">
              <header class="blog-content__header">
                <h1 class="title">
                  {{post.attributes.title}}
                </h1>
                <time class="dateline">{{post.attributes.created | moment}}</time>
              </header>
              <div class="content" v-html="post.attributes.body.value">
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>

    </main>
  </div>

</template>
<script>
import Heading from '~components/Heading.vue'
import axios from 'axios'
import moment from 'moment'

export default {
  components: {
    Heading
  },
  filters: {
    moment: function (date) {
      return moment.unix(date).format('Do MMMM YYYY')
    }
  },
  asyncData ({req, params}) {
    return axios.get(`https://data.webdev.pro/node/blog?filter[field_path][value]=/blog/${params.id}`)
        .then((res) => {
          return {
            post: res.data.data[0]
          }
        })
  }
}
</script>
