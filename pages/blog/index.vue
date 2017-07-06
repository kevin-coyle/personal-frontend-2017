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
            <li v-for="(post,index) in posts">
            <nuxt-link :to="{ name: 'blog-id', params: { id: post.attributes.field_fieldablepath.replace('/blog/','') } }">
              <article class="blog-listing__teaser blog-teaser">
              <div class="columns is-mobile">
                <div class="column is-one-quarter">
                <img v-bind:src="included[index].attributes.url" v-bind:alt="post.relationships.field_side.data.meta.alt">
                </div>
                <div class="column">
                  <header>
                    <h1 class="title is-4">
                      {{post.attributes.title}}
                    </h1>
                    <time class="dateline">{{post.attributes.created | moment}}</time>
                  </header>
                {{post.attributes.body.summary}}
                </div>
              </div>

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
      return axios.get('https://backend.webdev.pro/jsonapi/node/blog', {
        params: {
          include: 'field_side,field_side.data'
        }
      })
          .then((res) => {
            console.log(res)
            return {
              posts: res.data.data,
              included: res.data.included
            }
          })
    }
  }
</script>
