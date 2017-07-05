<template>
    <div class="container">
      <header id="mainHeading">
          <section class="section">
                    <div class="columns">
          <div class="column">
            <nuxt-link to="/">
              <Logo></Logo>
            </nuxt-link>
          </div>
          <div class="column">
            <nav id="mainNav">
              <ul>
                <li>
                  <nuxt-link to="/about">About Me</nuxt-link></li>
                <li>
                  <nuxt-link to="/cv">CV</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <div class="social-menu">
              <ul>
                <li>
                  <a href="https://github.com/kevin-coyle">
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kevincoyle">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://drupal.org/u/kevla">
                    <i class="fa fa-drupal" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          </section>

      </header>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import Logo from '~components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>
