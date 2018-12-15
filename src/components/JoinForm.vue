<template>
  <section class="join-us">
    <div class="background">
      <hr>
      <div class="content">
        <h1>{{$t('joinUsTitle')}}</h1>
        <p>{{$t('joinUsPhrase')}}</p>
      </div>

      <div class="form-container">
        <form class="form" id="f_join" @submit.prevent="onSubmit">
          <div class="custom-file-input">
            <input type="file" name="adjunto" id="file"
                   @change="onChange($event)" :disabled="isSaving">
            <div class="wrapper">
              <label for="file" class="file-input" :disabled="isSaving">
                {{$t('uploadCVPhrase')}}
              <span>
                <svg version="1.1" class="icon" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M128.4,189.3L233.4,89c5.8-6,13.7-9,22.4-9c8.7,0,16.5,3,22.4,9l105.4,100.3c12.5,11.9,12.5,31.3,0,43.2
                  c-12.5,11.9-32.7,11.9-45.2,0L288,184.4v217c0,16.9-14.3,30.6-32,30.6c-17.7,0-32-13.7-32-30.6v-217l-50.4,48.2
                  c-12.5,11.9-32.7,11.9-45.2,0C115.9,220.6,115.9,201.3,128.4,189.3z"/>
                </svg>
              </span>
              </label>
            </div>
          </div>
          <br>
          <v-button colorClass="button-secondary" :disabled="isSaving">{{
            $t('sendButton')}}
          </v-button>
        </form>
      </div>
    </div>
    <div class="follow">
      <br>
      <hr class="left">
      <h1> {{$t('followUs')}}</h1>
      <p> {{$t('followUsPhrase')}}</p>
    </div>
  </section>
</template>

<script>
  import Button from './Button'
  import FileUpload from '../mixins/FileUpload'

  export default {
    name: 'JoinForm',
    components: {
      'v-button': Button
    },
    mixins: [FileUpload]
  }
</script>

<style lang="scss" scoped>

  .join-us {
    color: black;
  }

  .background {
    padding-top: 20px;
    text-align: center;
    padding-bottom: 70px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    color: white;
  }

  .file-input {
    padding: 10px 0 10px 10px;
    border: 2px solid #abaaaa;
    cursor: pointer;
    border-radius: 5px;
    color: #abaaaa;
    min-width: 85%;
    display: inline-block;
    text-align: left;
    transition: all .3s;
    margin: 15px;
    text-align: center;
  }

  .file-input:hover {
    border-color: #8c8c8c;
    color: #8c8c8c;
    transform: scale(1.05);
  }

  input[type="file"] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .icon {
    position: relative;
    font-size: 1.3em;
    left: 20px;
    margin: 0px 25px -7px -30px;
    padding-left: 20px;
    width: 25px;
    fill: #abaaaa;
  }

  .content {
    color: #9933ff;
  }

  h1 {
    color: #330066;
  }

  .follow {
    display: none;
    text-align: right;
  }

  .follow h1 {
    color: #38E090;
  }

  .follow p {
    color: white;
  }

  @media (min-width: 641px) {
    body {
      background-color: transparent !important;
    }

    .follow {
      display: block;
    }

    .h1 {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 30px;
    }
  }


</style>
