<template>
    <div class="page-cv">
        <Heading></Heading>
        <main>
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <section class="section profile">
                            <h1 class="title is-2">Profile</h1>
                            <div class="content">
                                <p>I am an experienced Acquia certified developer with over 10 years experience in PHP and Drupal. I have an eclectic range of skills but currently my main focus is on <strong>PHP</strong>, <strong>Laravel</strong> and <strong>Drupal</strong>. I currently am quite involved in DevOPs. I am a great team player but I also possess the ability to work well independently. I have been interested in IT and programming since childhood and it is something that I am truly passionate about. Linux and OS X are my primary operating systems of choice.</p>
                            </div>
                        </section>
                        <section class="section experience">
                            <h1 class="title is-3">
                                Recent Experience
                            </h1>
                            <ul>
                                <li>
                                    <article class="experience__item">
                                        <header>
                                            <h1 class="title is-5">Ashfield Healthcare</h1>
                                            <div class="experience__item__dates">
                                                <span><strong>Start Date:</strong> Nov 2013</span>
                                                <span><strong>End Date:</strong> Jun 2017</span>                                                </div>
                                        </header>
                                        <div class="content">
                                            Initially brought in for a six week contract I was tasked with creating the backend for a e-commerce healthcare website. After completing that I moved on to lead the development on numerous websites utilising various toolsets such as Drupal, Wordpress, Laravel, NodeJS and even .NET (Sitefinity). In addition to development I also set up their linux infrastructure and implemented version control and continuous integration using both Jenkins and later Bitbucket pipelines.
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article class="experience__item">
                                        <header>
                                            <h1 class="title is-5">TalkTalk</h1>
                                            <div class="experience__item__dates">
                                                <span><strong>Start Date:</strong> Sep 2012</span>
                                                <span><strong>End Date:</strong> Dec 2013</span>                                                </div>
                                        </header>
                                        <div class="content">
                                            Originally starting as a short term contractor I was taken on a permanent basis. I created and led the Drupal team at TalkTalk Technology, creating high traffic solutions to be used both in house and externally. In this role I hired and trained staff, implemented process and liased across the large business to create cost-effective and viable business application solutions using open source technologies.
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article class="experience__item">
                                        <header>
                                            <h1 class="title is-5">Drutek</h1>
                                            <div class="experience__item__dates">
                                                <span><strong>Start Date:</strong> Jun 2012</span>
                                            </div>
                                        </header>
                                        <div class="content">
                                            In this position as Director I work on many small projects for SMEs, people in the media and politics. I was responsible for managing a varied client portfolio, all Drupal development and maintenance of servers.
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article class="experience__item">
                                        <header>
                                            <h1 class="title is-5">CoyleDesign</h1>
                                            <div class="experience__item__dates">
                                                <span><strong>Start Date:</strong> Feb 2010</span>
                                                <span><strong>End Date:</strong> Jun 2012</span>                                                </div>
                                        </header>
                                        <div class="content">
                                            <p>Straight after leaving university and in the height of the global financial crisis I set up CoyleDesign. Starting with a small client base initially it soon grew into a thriving company that was providing services to celebrities and people in politics.</p><p>As managing director I was responsible completely for the welfare and success of the business. In addition to doing the initial development work I was also tasked with marketing and promotion for the business to ensure that it was profitable.</p>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </section>
                        <section class="section qualifications">
                            <h1 class="title is-3">Professional Qualifications</h1>
                            <ul>
                                <li>
                                    <article>
                                        <h2 class="title is-5">Acquia</h2>
                                        <p>Acquia Certified Drupal Developer 2014</p>
                                    </article>
                                </li>
                            </ul>
                        </section>
                        <section class="section publications">
                            <h1 class="title is-3">Publications</h1>
                            <ul>
                                <li>
                                    Mastering Laravel. Packt Pub 2014. Technical Reviewer
                                </li>
                            </ul>
                        </section>
                        <section class="section education">
                            <h1 class="title is-3">
                                Education
                            </h1>
                            <ul>
                                <li>
                                    <article>
                                        <h1 class="title is-5">Manchester University</h1>
                                        <ul>
                                            <li>
                                                Physics with Technological Physics
                                            </li>
                                        </ul>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                        <h1 class="title is-5">Headlands School and Community Science College</h1>
                                        <ul>
                                            <li>
                                                A Levels: Physics, Maths, Music Technology
                                            </li>
                                            <li>
                                                GCSES: 11 A-B Grade including Maths, Science and English
                                            </li>
                                        </ul>
                                    </article>
                                </li>
                            </ul>
                        </section>
                        <section class="section skills">
                            <h1 class="title is-3">Skills</h1>
                            <ul>
                                <li>
                                    <p>Familiar with most frontend javascript frameworks including AngularJS, Angular(2/4), VueJS and React</p>
                                </li>
                                <li>
                                    <p>Experience with Puppet, Jenkins and Bitbucket Pipelines</p>
                                </li>
                                <li>
                                    <p>Highly skilled with the linux commandline (Bash and ZSH)</p>
                                </li>
                                <li>
                                    <p>Advanced user of GIT</p>
                                </li>
                                <li>
                                    <p>Comfortable with AWS and related cloud based technologies including Microsoft Azure</p>
                                </li>
                                <li>
                                    <p>Some knowledge of IIS and Microsoft Windows Server</p>
                                </li>
                                <li>
                                    <p>Experience with Gulp, Grunt and Webpack</p>
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

  export default {
    components: {
      Heading
    }
  }
</script>
<style lang="scss" scoped>
    .page-cv {
        .education {
            article {
                margin-bottom: 2rem;
            }
        }
        .experience {
            &__item {
                margin: {
                    top: 1rem;
                    bottom: 2rem;
                }
                &__dates {
                    margin-bottom: 0.5rem;
                    span {
                        &:not(:first-child) {
                            margin-left: 1rem;
                        }
                    }

                }
            }
        }
    }
</style>
