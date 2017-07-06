<template>
<div class="page-blog">
<Heading/>
  <main>
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="section blog-listing">
          <h1 class="title is-2">Blog</h1>
          <ul>
            <li v-for="post in posts">
            <nuxt-link :to="{ name: 'blog-id', params: { id: post.attributes.field_fieldablepath.replace('/blog/','') } }">
              <article>
              <header>
                <h1 class="title is-4">
                  {{post.attributes.title}}
                </h1>
              </header>
              {{post.attributes.body.summary}}
              </article>
              </nuxt-link>
            </li>
          </ul>
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
      return axios.get('https://backend.webdev.pro/jsonapi/node/blog')
          .then((res) => {
            return {
              posts: res.data.data
            }
          })
    }
  }
</script>
