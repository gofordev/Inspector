<template>
  <div>
    <md-snackbar 
      md-position="center" 
      :md-duration="5000" 
      :md-active.sync="showSnackbar" 
      md-persistent
      style="width: 200px;"
      class="error-mail">
        <span id="message-id"><ErrorIcon />{{errMessage}}</span>
        <md-button class="md-icon-button md-inherit" @click="showSnackbar=false">
            <md-icon>close</md-icon>
        </md-button>
    </md-snackbar>

    <md-toolbar class="md-primary nav-bar create-question" position="static">
        <a @click="goBack" style="width: 100%">
            <span>Назад</span>
        </a>
    </md-toolbar>

    <div class="main-wrapper create-question">
        <div :class="!success ? 'active' : ''">
            <md-field class="question-theme">
              <md-input
                placeholder="Введите тему вопроса"
                v-model="subject"
              />
            </md-field>

            <div class="add-message">
                <md-field>
                  <md-textarea
                    rowsMax="4"
                    placeholder="Текст вопроса..."
                    fullWidth
                    v-model="text"
                  />
              </md-field>
            </div>

            <div class="df question">
                <div class="btn-files">
                    <div class="add-photo" hidden={true}></div>
                    <div class="add-file" hidden={true}></div>
                </div>

                <div class="btn-result">
                    <md-progress-spinner v-if="loading" 
                      disableShrink />
                    <md-button v-else 
                      @click="sendMail(subject, text)"
                      :class="!subject || !text ? 'md-primary disabled' : 'btn-primary'"
                      :disabled="!subject || !text" 
                    ><span>Отправить</span></md-button>
                </div>
            </div>
        </div>

        <div :class="!success ? 'question-create-success' : 'question-create-success active'">
            <h1>Ваш вопрос упешно добавлен!</h1>
            <md-button 
              md-raised 
              class="md-primary" 
              @click="success=false; subject=''; text=''"
            >Спасибо!</md-button>
        </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import state from '../../mocks/total';

@Component
export default class QuestionCreateScreen extends Vue {

  showSnackbar: boolean = false

  success: boolean = false
  
  loading = state.mail.loading;

  errMessage = state.mail.errMessage;

  subject = state.mail.subject;

  text = state.mail.text;

  goBack() {
    this.$router.go(-1);
  }

  sendMail( subject, text ) {
    console.log(subject, text);
  }
}
</script>
