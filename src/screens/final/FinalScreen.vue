<template>
  <div>
    <md-toolbar class="md-primary final nav-bar">
      <a class="back" @click="goBack">
        <span>Назад</span>
      </a>
    </md-toolbar>

    <md-dialog :md-active.sync="progressDialogShow">
      <md-dialog-title id="alert-dialog-title">Внимание</md-dialog-title>
      <md-dialog-content>
        <p
          id="alert-dialog-description"
        >Этап будет завершён, отменить действие будет невозможно. Подтверждаете выполнение этапа?</p>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button @click="closeProgressAlert">Нет</md-button>
        <md-button @click="sendProgressBarValue">Да</md-button>
      </md-dialog-actions>
    </md-dialog>

    <div class="main-wrapper final">
      <md-card class="paper prod-info-and-curr-stage">
        <div class="product-info">
          <h2>№ {{check.product_number}}</h2>
          <span class="product-title">{{check.product_title}} (поз.{{check.product_position}})</span>
          <br />
          <span class="product-title">{{check.contract_code?check.contract_code:'-'}} прил. {{check.contract_annex?check.contract_annex:'-'}}</span>
        </div>
        <div class="current-stage">
          <h4>Текущий этап</h4>
          <div class="bold">{{operation.title}}</div>
          <div class="info-rows">
            <div class="item-info">
              <span class="title">Плановые даты этапа:</span>
              <span class="value">
                <span class="value1">{{formatDate(check.date_stage_start)}}</span> -
                <span class="value2">{{formatDate(check.date_stage_end)}}</span>
              </span>
            </div>
            <div class="item-info">
              <span class="title">Фактические даты этапа:</span>
                <div v-if="formatDate(check.date_actual_start) === '-' || formatDate(check.date_actual_end, 'DD.MM.YYYY') === '—'" class="row">
                    <span class="value">Ожидание от сервера 
                      <md-progress-spinner
                        class="indicator"
                        :md-diameter="15" disableShrink/>
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
        </div>
      </md-card>

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
      <div class="item-info final-screen">
        <span class="title">Ожидаемая дата завершения этапа:&nbsp;&nbsp;</span>
        <span
          class="value"
        >{{formatDate(check.date_actual_end, "DD.MM.YYYY", "(необходима синхроинзация)")}}</span>
      </div>

      <md-card class="paper final">
        <div class="paper-title">Общий комментарий</div>
        <div class="paper-content">{{comment}}</div>
        <md-button class="md-primary" @click="showCommentModal = true">Изменить</md-button>
      </md-card>

      <md-checkbox v-model="discrepancy" class="md-primary">
        <span class="notif">Выписано Уведомление о несоответствии</span>
      </md-checkbox>

      <div class="footer-btns final">
        <md-field>
          <md-button class="md-primary" @click="goBack">
            <md-icon class="back-icon">arrow_back</md-icon>
            <span>Предыдущая характеристика</span>
          </md-button>
        </md-field>

        <md-field>
          <md-button class="md-primary" @click="finish">
            <md-icon class="back-icon">done</md-icon>
            <span>Завершить проверку</span>
          </md-button>
        </md-field>
      </div>

      <md-dialog class="dialog-comment" :md-active.sync="showCommentModal">
        <md-dialog-title class="dialog-title">Комментарий</md-dialog-title>
        <md-dialog-content class="dialog-content">
          <md-field>
            <md-input
              id="number"
              type="text"
              v-model="comment"
            />
          </md-field>
        </md-dialog-content>
        <md-dialog-actions class="dialog-actions">
          <md-button @click="sendComment" class="md-primary">Ок</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import state from '../../mocks/total'
import { formatDate } from '../../utils';
import { RequestFeature, Feature, Check } from '../../types';
import { Map, List } from "immutable";
import { rootPage } from '../../constants/config';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

@Component({
  components: {
    'vue-slider': VueSlider
  }
})
export default class FinalScreen extends Vue {

  created () {
    this.check = state.checks.list.find(check => check.check_id == this.$route.params.checkId)
    this.value = this.check ? parseInt(this.check.progress) : 0
  }

  progressDialogShow: boolean = false
  
  value: number = 0

  beforeValue =  this.value

  check?: Check

  comment: string = this.check ? this.check.note : ''

  showCommentModal: boolean = false

  discrepancy: boolean = this.operation ? this.operation.discrepancy : false

  feature?: Feature

  // featuresData: Map<string, RequestFeature> = Map()

  get operation() {
    if (this.check) {
      return this.check.operations.find(operation => operation.operation_id == this.$route.params.operationId)
    }
  }

  goBack() {
    this.$router.go(-1);
  }

  finish() {
    this.$router.push(rootPage);
    // const dispatch, location} = this.props;
    // const features = this.featuresData.valueSeq().toArray();
    // dispatch(sendFeatureActions(features));
    // if (this.props.check) {
    //     const {operation} = this.props.location.state;
    //     dispatch(updateFeaturesAction(this.props.check.check_id, operation.operation_id, features));
    //     dispatch(storeCheckByIdAction(this.props.check.check_id));
    //     dispatch(updateDiscrepancyAction({
    //         discrepancy: this.state.discrepancy,
    //         operation_id: operation.operation_id
    //     }))
    // }

    // dispatch(resetCheckAction());
    // dispatch(fetchChecksAction());
    // dispatch(setFeaturesTempAction(Map()));
    // this.forceUpdate();
  }

  closeProgressAlert() {
    this.progressDialogShow = false;
    this.value = this.beforeValue;
  }

  sendProgressBarValue() {
    this.progressDialogShow = false;
    this.beforeValue = this.value;
    if(this.check) {
      // this.props.dispatch(updateCheckAction({check_id: check.check_id, progress: this.state.value}));
      // this.props.dispatch(storeCheckByIdAction(check.check_id));
      // this.forceUpdate();
    }
  }

  sendComment() {
    this.showCommentModal = false;
    // const {dispatch} = this.props;
    // const {check} = this.props;
    // if (check) {
    //     const data: RequestUpdateCheckPayload = {
    //         check_id: check.check_id,
    //         progress: this.state.value,
    //         complite: true
    //     };
    //     if (this.state.comment) {
    //         data.note = this.state.comment;
    //     }
    //     dispatch(updateCheckAction(data));
    //     dispatch(storeCheckByIdAction(check.check_id));
    // }
  }

  progressBarDragEnd() {
    if(this.value == 100) {
      return this.progressDialogShow = true;
    }
    this.sendProgressBarValue();
  }

  progressBarHandleChange(value: number) {
    this.value = value;
  }

  formatDate(data, format) {
    return formatDate(data, format);
  }
}
</script>