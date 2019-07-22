<template>
  <div>
    <md-toolbar class="md-primary nav-bar check" position="static">
      <a @click="goBack">
        <span>Назад</span>
      </a>
      <span>{{login}}</span>
    </md-toolbar>

    <div class="main-wrapper scroll-container check">
      <md-card class="paper prod-info-and-curr-stage">
        <div class="product-info">
          <h2>№ {{check.product_number}}</h2>
          <span class="product-title">{{check.product_title}} (поз.{{check.product_position}})</span>
          <br />
          <span class="product-title">{{check.contract_code ? check.contract_code : '-'}} прил. {{check.contract_annex ? check.contract_annex : '-'}}</span>
        </div>
        <div class="current-stage">
          <h4>Текущий этап</h4>
          <div class="bold">{{check.stage_title}}</div>
          <div class="info-rows">
            <div class="item-info final-screen">
              <span class="title">Плановые даты этапа:</span>
              <span class="value">
                <span class="value1">{{formatDate(check.date_stage_start)}}</span> -
                <span class="value2">{{formatDate(check.date_stage_end)}}</span>
              </span>
            </div>
            <div class="item-info final-screen">
              <span class="title">Фактические даты этапа:</span>
              <span v-if="formatDate(check.date_actual_start) === '-' || formatDate(check.date_actual_end, 'DD.MM.YYYY')" class="value">Ожидание от сервера...</span>
              <span class="value">Ожидание от сервера...</span>
            </div>
            <div class="item-info final-screen">
              <span class="title">Дата последнего прохождения:</span>
              <span class="value">{{formatDate(check.date_last_check, "DD.MM.YYYY HH:mm")}}</span>
            </div>
          </div>
        </div>
      </md-card>
      <div class="cards-list">
        <div v-for="(row, operation_id) in check.operations" :key="operation_id" class="card-wrapper" @click="goToWizard(row)">
            <md-card class="card">
                <div class="card-head">
                    <h2>{{row.group}}</h2>
                    <div class="bold">{{row.title}}</div>
                </div>
                <div class="frequency-and-method">
                    <span>Частота и метод проверки:</span>
                    <div class="frequency-and-method-values">
                      <span v-for="(method, index) in row.method" :key="index">{{method.title}}</span>
                    </div>
                </div>
                <div class="lastcheck-datetime">
                    <span>Дата и время последней проверки:</span>
                    <div class="datetime">
                        {{formatDate(check.date_last_check, "DD.MM.YYYY HH:mm")}}
                    </div>
                </div>
            </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { formatDate } from '../../utils';
import state from '../../mocks/total'
import { rootPage } from '../../constants/config'
import { Check, Operation } from '../../types';

@Component
export default class CheckScreen extends Vue {
  
  created() {
    if (!state) {
          this.$router.push(rootPage);
          return;
      }

      const {check} = state;

      if (!check) {
          this.$router.push(rootPage);
          return;
      }
  }

  get check() {
    return state.checks.list.find(check => check.check_id === this.$route.params.id)
  }
  
  open: boolean = false
  
  productId: string = ""

  checks = state.checks.list

  login = state.login.login
  
  goBack() {
    this.$router.go(-1);
  }

  goToWizard(operation: Operation) {
    this.$router.push({
      name: 'wizardScreen',
      params: {
        operationId: operation.operation_id,
        checkId: this.$route.params.id
      }
    })
  }

  formatDate(date, format) {
    return formatDate(date, format);
  }
}
</script>