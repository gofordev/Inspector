<template>
  <div id="app">
    <md-dialog :md-active.sync="showModal">
      <md-dialog-title id="alert-dialog-title">{"Обнаружена ошибка"}</md-dialog-title>
      <md-dialog-content>
        <div id="alert-dialog-description">
          Скопируйте текст ниже и передайте администратору.
        </div>
      </md-dialog-content>
      <md-dialog-content>
        <div id="alert-dialog-description">
          {this.state.error}
        </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showModal=false">
          Продолжить работу
        </md-button>
        <md-button class="md-primary" autoFocus @click="reloadPage">
          Перезагрузить
        </md-button>
      </md-dialog-actions>
    </md-dialog>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import './App.scss';
import { Component } from 'vue-property-decorator';
import total from './mocks/total';

@Component
export default class App extends Vue {
  showModal = false;

  reloadPage() {
    console.log('reload page', this);
  }
}
</script>
