<template>
    <div class="page-home">
        <Heading/>
        <main>
            <section class="is-hero">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <article>
                                <h1 class="title has-text-centered">I'm a freelance full stack web developer.</h1>
                                <h2 class="subtitle has-text-centered">Welcome to my website.</h2>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section what-i-use">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <h1 class="title is-3">
                                I currently use:
                            </h1>
                            <ul>
                                <li>
                                    <article class="i-use__icon">
                                        <img src="/images/laravel-l-slant.png" alt="Laravel Logo">
                                        <h2 class="title">Laravel</h2>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                        <img src="/images/nodejs-icon.svg" alt="NodeJS">
                                        <h2 class="title">NodeJS</h2>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                        <img src="/images/drupal_logo.png" alt="Drupal Logo">
                                        <h2 class="title">Drupal 7 &amp; 8</h2>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                        <img src="/images/docker.svg" alt="Docker Logo">
                                        <h2 class="title">Docker</h2>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section dark recent-blogs">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <h1 class="title is-3">Recent Ramblings</h1>
                    <ul class="columns">
                      <li v-for="(post,index) in posts" class="column">
                      <nuxt-link :to="{ name: 'blog-id', params: { id: post.attributes.field_path.replace('/blog/','') } }">
                          <article>
                            <header>
                              <h1 class="title is-5">{{post.attributes.title}}</h1>
                            </header>
                            <p>{{post.attributes.body.summary}}</p>
                          </article>
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
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
        return axios.get('https://data.webdev.pro/node/blog', {
          params: {
            'page[limit]': '2'
          }
        })
            .then((res) => {
              return {
                posts: res.data.data
              }
            })
      }

    }
</script>

<style lang="scss" scoped>
.is-hero {
  background-image: url('/images/home_banner.jpg');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}
.what-i-use {
  h1 {
    margin-top: 0;
  }
}
.section {
  &.dark {
    background: #2e3440;
    h1, h2, h3, h4, h5, p {
      color: #ffffff;
    }
  }
}

</style>
