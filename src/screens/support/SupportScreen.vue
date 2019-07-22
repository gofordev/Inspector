<template>
    <div>
      <md-toolbar class="md-primary nav-bar support" position="static" style='display: "flex", justifyContent: "center", alignItems: "center"'>
          <a @click="goBack" style='width: "100%"'>
              <span>Назад</span>
          </a>
          <a @click="goCreateQuestion" style='width: "100%"'>
              <span>Задать вопрос</span>
          </a>
      </md-toolbar>

      <div class="main-wrapper scroll-container support">
          <div class="cards-list-wrapper">
              <div class="cards-list support">
                  <div v-for="(ticket, index) in getTickets" :key="index" class="card-wrapper">
                    <md-card class="card support" md-with-hover>
                      <div @click="goToQuestion(ticket)">
                        <div>
                            <h2>{{ticket.subject}}</h2>
                            <p>{{ticket.annotation}}</p>
                        </div>
                        <div class="card-section">
                            <div class="product-title"/>
                            <div class="item-info">
                                <span class="title">
                                  Вопрос задан
                                </span>
                                <span class="value">
                                    {{formatDate(ticket.created, 'HH:mm')}}&nbsp;&nbsp;&nbsp;{{formatDate(ticket.created)}}
                                </span>
                            </div>
                            <div class="item-info">
                                <span class="title">Статус</span>
                                <span v-if="ticket.status==0" class="value support-await">Ожидает ответа службы поддержки</span>
                                <span v-if="ticket.status==1" class="value user-await">Ожидает ответа пользователя </span>
                                <span v-if="ticket.status==2" class="value user-await">Ожидает подтв. закрытия от пользователя </span>;
                                <span v-if="ticket.status==3" class="value closed">Закрыт</span>
                            </div>
                        </div>
                      </div>
                    </md-card>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { supportPage, questionPage, questionCreatePage } from '../../constants/config';
import state from '../../mocks/total';
import { formatDate } from '../../utils'
import {Ticket} from "../../types";

@Component
export default class SupportScreen extends Vue {

  isFetch = state.tickets.isFetch;

  tickets = state.tickets.tickets;

  ticketsClosed = state.tickets.ticketsClosed;

  isSending = state.tickets.isSending;

  goBack() {
    this.$router.go(-1);
  }

  goToQuestion(ticket: Ticket) {
    this.$router.push(questionPage)
  }

  goCreateQuestion() {
    this.$router.push(questionCreatePage)
  }

  get getTickets() {
    if (this.$route.path == supportPage)
      return this.tickets;
    else
      return this.ticketsClosed;
  }

  formatDate (date, format) {
    return formatDate(date, format);
  }

}

</script>
