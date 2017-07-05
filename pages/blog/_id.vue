<template>
  <div class="page-blog-item">
    <Heading></Heading>
    <main>
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="blog-content section">
            <article>
              <header>
                <h1 class="title">
                  {{post.attributes.title}}
                </h1>
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

export default {
  components: {
    Heading
  },
  asyncData ({req, params}) {
    return axios.get(`https://backend.webdev.pro/jsonapi/node/blog/${params.id}`)
        .then((res) => {
          return {
            post: res.data.data
          }
        })
  }
}
</script>
