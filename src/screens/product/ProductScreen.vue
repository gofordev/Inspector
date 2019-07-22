<template>
  <div>
    <md-toolbar class="md-primary nav-bar product-nav" position="static">
      <a @click="goBack">
        <span>Назад</span>
      </a>
      <span>{{login}}</span>
    </md-toolbar>
    <md-dialog :md-active.sync="progressDialogShow">
      <md-dialog-title id="alert-dialog-title"><h2 style="color: '#000000'">Внимание</h2></md-dialog-title>
      <md-dialog-content>
        <p id="alert-dialog-description"
        >Этап будет завершён, отменить действие будет невозможно. Подтверждаете выполнение этапа?</p>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button @click="closeProgressAlert" class="md-primary">Нет</md-button>
        <md-button @click="sendProgressBarValue" color="md-primary" autofocus>Да</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div class="main-wrapper product">
      <div class="df">
        <div class="f2">
          <md-card class="paper product-info-only">
            <div class="df">
              <h2>№ {{check.product_number}}</h2>
              <md-button
                class="btn-change"
                @click="openChangeNumberDialog"
              >{{check.product_number ? "Изменить" : "Создать"}}</md-button>
            </div>
            <span class="product-title">{{check.product_title}} (поз.{{check.product_position}})</span>
            <br />
            <span class="product-title">{{ check.contract_code ? check.contract_code : '-'}} прил. {{check.contract_annex ? check.contract_annex : '-'}}</span>
          </md-card>

          <md-card class="paper current-stage-only">
            <h4>Текущий этап</h4>
            <div class="bold">{{check.stage_title}}</div>
            <div class="info-rows">
              <div class="item-info">
                <span class="title">Плановые даты этапа:</span>
                <span class="value">
                  <span class="value1">{{formatDate(check.date_stage_start)}}</span>
                  -
                  <span class="value2">{{formatDate(check.date_stage_end)}}</span>
                </span>
              </div>
              <div class="item-info">
                <span class="title">Фактические даты этапа:</span>
                <div v-if="formatDate(check.date_actual_start) === '-' || formatDate(check.date_actual_end, 'DD.MM.YYYY') === '—'" class="row">
                    <span class="value">Ожидание от сервера 
                      <md-progress-spinner
                        class="indicator"
                        md-mode="indeterminate"
                        :md-diameter="15"/>
                    </span>
                </div>
                <span v-else>
                    <span class="value">
                        <span class="value1">{{formatDate(check.date_actual_start)}}</span>
                            -
                        <span class="value2">{{formatDate(check.date_actual_end, "DD.MM.YYYY")}}</span>
                    </span>
                </span>
              </div>
              <div class="item-info">
                <span class="title">Дата последнего прохождения:</span>
                <span class="value">{{formatDate(check.date_last_check, "DD.MM.YYYY HH:mm")}}</span>
              </div>
            </div>
          </md-card>
        </div>
        <div class="f2 df">
          <div class="btns-panel">
            <div class="btn-wrapper">
              <md-button class="btn" @click="goToCheck">
                Текущий этап указан верно.<br>
                Приступить к контролю
              </md-button>
            </div>
            <div class="btn-wrapper">
              <datetime class="date-picker" v-model="selectedDate" @close="changeDate" />
            </div>
            <div class="btn-wrapper">
              <md-button class="btn" @click="handleClickOpen">Текущий этап указан неверно</md-button>
            </div>
          </div>
        </div>
      </div>

      <md-card class="paper product-progress">
        <div class="progress-info">
          <h1>ЗАВЕРШЕННОСТЬ ЭТАПА, %</h1>
          <span class="progress-value">{{value}}%</span>
        </div>
        <vue-slider
          class="progress-slider"
          v-model="value"
          @change="progressBarHandleChange"
          @drag-end="progressBarDragEnd"
        />
      </md-card>
    </div>

    <md-dialog class="dialog-select-stage" :md-active.sync="stageDialogShow">
      <md-dialog-title class="dialog-title"><h2 style="color: '#000000'">Выберите этап</h2></md-dialog-title>
      <md-dialog-content>
        <div v-for="(stage, stage_id) in stages" :key="stage_id">
          {{stage.title}}
          <md-radio class="md-primary" v-model="radio" :value="stage.stage_id" />
        </div>
      </md-dialog-content>
      <md-dialog-actions class="dialog-actions">
        <md-button @click="handleClose" color="primary">Отмена</md-button>
        <md-button @click="stageAccept" color="primary">Ок</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog class="dialog-select-stage" :md-active.sync="changeNumberShow">
      <md-dialog-title class="dialog-title"><h2 style="color: '#000000'">Введите заводской номер</h2></md-dialog-title>
      <md-dialog-content>
        <md-field>
          <md-input
            class="input-product-id"
            id="time"
            type="string"
            v-model="productNumber"
          />
        </md-field>
      </md-dialog-content>
      <md-dialog-actions class="dialog-actions">
        <md-button @click="closeChangeNumberDialog" color="primary">Отмена</md-button>
        <md-button @click="productNumberUpdate" color="primary">Ок</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import state from '../../mocks/total';
import { formatDate } from '../../utils'
import moment from 'moment'
import { Map, List } from 'immutable'
import { Datetime } from 'vue-datetime';
import { Check } from '../../types';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

@Component({
  components: {
    datetime: Datetime,
    'vue-slider': VueSlider
  }
})
export default class ProductScreen extends Vue {

  progressDialogShow: boolean = false

  datePickerShow:boolean = false

  stageDialogShow: boolean = false
  
  changeNumberShow: boolean = false

  // selectedStage = this.selectStage(this.check ? this.check.stage_title : '')

  selectedDate: string = moment().toISOString()

  productNumber: string = ""

  value: number = 0
  
  beforeValue: number = 0

  checks = state.checks.list

  stages = List(state.checks.stages)

  login = state.login.login

  check?: Check

  radio: number = 0

  created () {
    this.check = state.checks.list.find(check => check.check_id === this.$route.params.id)
    this.value = this.check ? parseInt(this.check.progress) : 0
  }

  selectStage(title: string) {
      for (const stage of this.stages.toArray()) {
          if (stage.title === title) {
              return stage.stage_id
          }
      }
      return "";
  };

  goBack() {
    this.$router.go(-1);
  }

  closeProgressAlert() {
    this.progressDialogShow = false;
    this.value = this.beforeValue;
  }

  sendProgressBarValue() {
    this.progressDialogShow = false;
    this.beforeValue = this.value;
    // const { check } = state;
    // const { dispatch } = this.props;
    // dispatch(updateCheckAction({check_id: check.check_id, progress: this.state.value}));
    // dispatch(storeCheckByIdAction(check.check_id));
    // dispatch(updateCheckOfflineAction({check_id: check.check_id, date_actual_start: "0", date_actual_end: "0"}));
    // this.$forceUpdate();
  }

  formatDate(date, format) {
    return formatDate(date, format);
  }

  openChangeNumberDialog() {
    this.changeNumberShow = true;
  }

  goToCheck() {
    const check = this.check;
    if(check){
      this.$router.push({
        name: 'checkScreen',
        params: {
          id: check.check_id
        }
      })
    }
  }

  openPicker() {
    this.datePickerShow = true;
  }

  handleClickOpen() {
    this.stageDialogShow = true;
  }

  changeDate(value) {
    if (this.check) {
      this.$set(this.check, 'date_actual_start', '0');
      setTimeout(() => {
        if (this.check) {
          const date = moment(this.selectedDate).valueOf()/1000;
          console.log('sdfsdf', date)
          this.$set(this.check, 'date_actual_start', date);
        }
      }, 1000);
    }
  }

  progressBarDragEnd() {
    this.progressDialogShow = true;
    if (this.check) {
      const temp = this.check.date_actual_start;
      this.$set(this.check, 'date_actual_start', '0');
      setTimeout(() => {
        if (this.check) {
          this.$set(this.check, 'date_actual_start', temp);
        }
      }, 3000);
    }
  }

  progressBarHandleChange() {
    this.progressDialogShow = true;
    if (this.check) {
      const temp = this.check.date_actual_start;
      this.$set(this.check, 'date_actual_start', '0');
      setTimeout(() => {
        if (this.check) {
          this.$set(this.check, 'date_actual_start', temp);
        }
      }, 5000);
    }
    this.sendProgressBarValue;
  }

  handleClose() {
    this.stageDialogShow = false;
  }

  stageAccept() {
    // if (!this.state.check) {
    //     return;
    // }
    // const {check} = this.state;
    // const {dispatch} = this.props;
    // dispatch(updateCheckAction({check_id: check.check_id, stage_id: this.state.selectedStage, progress: 0}));
    // dispatch(storeCheckByIdAction(check.check_id));
    this.handleClose();
    // this.openPicker(e);
    this.value = 0;
  }

  closeChangeNumberDialog() {
    this.changeNumberShow = false;
  }

  productNumberUpdate() {
    this.changeNumberShow = false;
  }
}
</script>

