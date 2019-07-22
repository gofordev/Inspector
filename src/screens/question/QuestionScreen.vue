<template>
  <div>
    <md-toolbar class="md-primary nav-bar question" position="static">
      <a @click="goBack">
        <span>Назад</span>
      </a>
    </md-toolbar>
    <div class="main-wrapper">
      <div class="cards-list-wrapper">
        <div class="cards-list support question">
          <div class="card-wrapper">
            <md-card class="card support">
              <div class="df">
                <h2>{{ticket.subject}}</h2>
                <span>{{moment.unix(ticket.created).format("DD.MM.YYYY")}}</span>
              </div>
              <div class="card-section">
                <div class="product-title">{{ticket.annotation}}</div>
                <div class="item-info">
                  <span class="title">Последний ответ</span>
                  <span
                    class="value"
                  >{{moment.unix(ticket.updated).format("HH:mm DD.MM.YYYY")}}</span>
                </div>
                <div class="item-info">
                  <span class="title">Статус</span>
                  <span v-if="ticket.status == 0" class="value support-await">Ожидает ответа службы поддержки</span>
                  <span v-if="ticket.status == 1" class="value user-await">Ожидает ответа пользователя</span>
                  <span v-if="ticket.status == 2" class="value user-await">Ожидает подтв. закрытия от пользователя</span>
                  <span v-if="ticket.status == 3" class="value closed">Закрыт</span>
                </div>
              </div>
            </md-card>
          </div>
        </div>
      </div>
      <div class="chat-wrapper">
        <h3>Все ответы ({{messages.length}})</h3>
        <md-card class="card">
          <div class="chat">
            <div v-for="(message, index) in messages" :key="index">
                <div  v-if="profile.uid == String(message.authorId)" class="message user" :key="message.id">
                    <div class="sender-wrapper">
                        <div class="sender">{{profile.full_name}}</div>
                        <span>{{moment.unix(message.created).format("HH:mm DD.MM.YYYY")}}</span>
                    </div>
                    <div class="message-content">
                      <p>{{message.text}}</p>
                    </div>
                </div>
                <div v-else class="message support" :key="message.id">
                    <div class="sender-wrapper">
                        <div class="sender">Служба поддержки</div>
                        <span>{{moment.unix(message.created).format("HH:mm DD.MM.YYYY")}}</span>
                    </div>
                    <div class="message-content">
                      <p>{{message.text}}</p>
                    </div>
                </div>
            </div>
            <div v-if="ticket.status !==2 && ticket.status !==3" class="add-message">
              <md-field>
                <md-textarea
                  placeholder="Комментировать...."
                  v-model="comment"
                />
              </md-field>
            </div>
          </div>
          <div v-if="ticket.status !==2 && ticket.status !==3"  class="df question">
            <!-- <div class="btn-files">
              <div class="add-photo" />
              <div class="add-file" />
            </div> -->
            <div class="btn-result">
              <md-button
                @click="resolveStatus" 
                class="md-primary"
              >Вопрос решён</md-button>
              <md-button
                class="md-primary"
                @click="sendMessage"
              >Отправить</md-button>
            </div>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import state from '../../mocks/total';
import moment from 'moment'

@Component
export default class QuestionScreen extends Vue {

  comment: string = ''

  ticket = state.tickets.ticket

  messages = state.tickets.messages

  profile = state.app.profile

  goBack() {
    this.$router.go(-1);
  }

  resolveStatus() {
    // this.props.dispatch(setTicketStatusAction(this.state.ticket.uid, 3));
    this.$router.go(-1);
  }

  sendMessage() {
    // this.props.dispatch(sendMessageAction(this.state.comment, this.state.ticket.uid));
    this.comment = ""
  }

  onMessageInputChange() {}

  get moment() {
    return moment;
  }

}
</script>