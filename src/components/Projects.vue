<template>
  <section id="projects">
    <picture v-for="(project, j) in projects" :key="project.name"
      :style="{ left: `calc((${j} - ${getIndex()}) * 100%)` }"
      class="background" :class="{ transition }">
      <source
        type="image/webp"
        media="(max-width: 480px)"
        :srcset="`${buildURL(current.background.mobile.webp)}`"
        :alt="current.name"/>
      <source
        type="image/webp"
        media="(min-width: 481px)"
        :srcset="`${buildURL(current.background.desktop.webp)}`"
        :alt="current.name"/>
      <source
        type="image/jpg"
        media="(max-width: 480px)"
        :srcset="`${buildURL(current.background.mobile.jpg)}`"
        :alt="current.name"/>
      <img
        type="image/jpg"
        media="(min-width: 481px)"
        :srcset="`${buildURL(current.background.desktop.jpg)}`"
        :alt="current.name"/>
    </picture>
    <!--div class="video-overlay">
      <div class="overlay"></div>
    </div-->
    <div class="description" :class="{ transition }">
      <h4 class="section-title">case studies</h4>
      <h3 class="project-name">{{ current.name }}</h3>
      <p class="project-description">{{ current.description }}</p>
    </div>

    <div class="sidenav">
      <div class="dot" :class="{ 'current-project': current.name == project.name }"
        v-for="(project, index) in projects" :key="project.name" @click="goTo(index)"></div>
    </div>

    <div class="navigation">
      <div class="read-more-container">
        <a class="call-to-action" target="_blank" :href="current.caseLink">
          <div class="text">
            <span class="read-more">see more</span>
            <span class="prompt">let's see the magic</span>
          </div>
          <img src="~@/assets/images/arrow-right-dark.svg" alt="arrow right icon">
        </a>
        <div class="link visible-md visible-lg">
          <div>
            <a :class="{transition}" :href="current.link">{{ current.link }}</a>
            <hr/>
          </div>
        </div>
      </div>

      <div class="bottom-nav">
        <div class="current">
          <span>next case <b>{{ next.name }}</b></span>
        </div>

        <button class="button next" @click="onNext">
          <img src="~@/assets/images/arrow-right-dark.svg" alt="arrow right icon">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Projects',
    data () {
      return {
        projects: [
          {
            name: 'BeatHey',
            description: 'Engage the challenge of a straight calendar and deliver an increible platform in two weeks. From ideation to code.',
            background: {
              mobile: {
                jpg: 'case-mobile-beathey.jpg',
                webp: 'case-mobile-beathey.webp'
              },
              desktop: {
                jpg: 'case-beathey.jpg',
                webp: 'case-beathey.webp'
              }
            },
            link: 'beathey.com',
            caseLink: 'https://www.youtube.com/watch?v=KcyroWrooUE&t=1s',
            videoId: 'KcyroWrooUE'
          },
          {
            name: 'Fanelli',
            description: 'Engage the challenge of a straight calendar and deliver an increible platform in two weeks. From ideation to code.',
            background: {
              mobile: {
                jpg: 'case-mobile-fanelli.jpg',
                webp: 'case-mobile-fanelli.webp'
              },
              desktop: {
                jpg: 'case-fanelli.jpg',
                webp: 'case-fanelli.webp'
              }
            },
            link: 'gusystem.net',
            caseLink: 'https://www.youtube.com/watch?v=9M0IFLk49TI',
            videoId: '9M0IFLk49TI'
          }
        ],
        index: 0,
        transition: false
      }
    },
    computed: {
      current () {
        return this.projects[this.index % this.projects.length]
      },
      next () {
        return this.get(this.index + 1)
      }
    },
    methods: {
      onNext () {
        this.beginTransition(() => {
          this.index = this.index + 1
        })
      },
      beginTransition (callback) {
        this.transition = true
        const t = setTimeout(() => {
          clearTimeout(t)
          callback()
          this.transition = false
        }, 400)
      },
      get (position) {
        return this.projects[position % this.projects.length]
      },

      getIndex () {
        return this.index % this.projects.length
      },

      goTo (index) {
        this.beginTransition(() => {
          this.index = index
        })
      },
      buildURL (file) {
        return `static/img/${file}`
      },
      setVideo (url) {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/_variables';

  section {
    position: relative;
    padding: 50px 0;
    min-height: 667px;
  }

  .section-title {
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    max-width: 90%;
  }

  .project-name, .project-description {
    color: white;
  }

  .description {
    padding: 0 34px;

    .project-name, .section-title, .project-description {
      transition-property: all;
    }

    &.transition {
      .project-name, .section-title, .project-description  {
        transform: translateY(-60px);
        opacity: 0;
        transition-duration: .4s;
      }

      .section-title {
        transition-delay: .1s;
      }

      .project-name {
        transition-delay: .15s;
      }

      .project-description {
        transition-delay: .2s;
      }
    }
  }

  .background {
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition-property: left opacity;
    transition-duration: .2s;
    transition-timing-function: ease-out;

    &.transition {
      left: -250px;
      opacity: 0.8;
    }
  }

  picture img {
    height: 100%;
    width: 100%;
  }

  .sidenav {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 71px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
  }

  .dot {
    border-radius: 50%;
    background-color: $dot-grey;
    border-radius: 50%;
    height: 9px;
    width: 9px;

    &.current-project {
      background-color: $purple-uby;
    }
  }

  .navigation {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 72px;
  }

  .bottom-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .read-more-container {
    height: 154px;
    position: absolute;
    bottom: 72px;
    margin-left: 34px;
    display: flex;
    flex-direction: row;
  }

  .call-to-action {
    height: 100%;
    width: 154px;
    background-color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding-bottom: 30px;
    text-decoration: none;
    color: $black-uby;

    .text {
      .read-more {
        font-weight: bold;
        padding-left: 20px;
      }

      .prompt {
        position: absolute;
        visibility: hidden;
        bottom: -20px;
      }
    }

    img {
      display: none;
    }
  }

  .button.next {
    border-radius: 0;
    height: 100%;
    background-color: #fff;
    width: 71px;
  }

  .current {
    margin-left: 34px;
    padding: 0 20px;
    background-color: $purple-uby;
    color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1024px) {
    p {
      max-width: 40%;
    }

    .video-overlay {
      position: absolute;
      background-color: $purple-uby;
      height: calc(100% + 50px);
      width: 50%;
      right: 0;
      z-index: -1;
      top: -50px;
    }

    .description {
      padding: 0 68px;
    }

    .read-more-container {
      bottom: 0;
      height: 235px;
      width: 90%;
    }

    .call-to-action {
      position: absolute;
      transition: all .3s;
      justify-content: flex-start;

      .text {
        .read-more {
          transition: all .3s;
          position: absolute;
          bottom: 34px;
          padding-left: 34px;
        }

        .prompt {
          transition: all .3s;
          padding-left: 34px;
        }
      }

      img {
        display: block;
        visibility: hidden;
        transition-duration: .1s;
        position: absolute;
        right: 34px;
      }

      &:hover {
        width: 300px;
        background-color: $pale-mauve-uby;

        .text {
          .read-more {
            bottom: 40px;
          }

          .prompt {
            bottom: 20px;
            visibility: visible;
          }
        }

        img {
          visibility: visible;
        }
      }
    }

    .link {
      width: 60%;
      background-color: $black-uby;
      display: flex !important;
      align-items: flex-end;
      justify-content: flex-end;

      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 34px 60px 34px 0;
        text-align: left;
        transition-property: transform opacity;
        transition-duration: .3s;

        &.transition {
          transform: translateY(-20px);
          opacity: 0;
        }
      }

      hr {
        margin: 0;
        border-bottom: 4px solid pink;
      }
    }

    .dot {
      border: 1px solid #fff;
      background-color: transparent;
      cursor: pointer;

      &.current-project {
        background-color: #fff;
      }
    }

    .bottom-nav {
      justify-content: flex-end;
    }

    .current {
      width: 25%;
      justify-content: flex-end;
      background-color: transparent;
    }
  }

   iframe {
    position: absolute;
    transform: scale(2.5);
    right: 2%;
    z-index: -10;
  }
</style>
