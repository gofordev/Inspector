<template>
  <div class="login-wrapper">
    <div class="main-wrapper login">
      <div class="login-inner">
        <img src="../../img/logo.svg" alt="Logo" />
        <md-field class="login-input">
          <label>Логин</label>
          <md-input :value="login_input" />
        </md-field>
        <md-field class="pass-input" :md-toggle-password="false">
          <label>Пароль</label>
          <md-input
            type="password"
            :value="pass_input"
          />
        </md-field>
        <md-button class="md-primary login" @click="signIn">Войти</md-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { rootPage } from '../../constants/config';

@Component
export default class LoginScreen extends Vue {
  login_input: string = 'korvet@gazprom.tech';

  pass_input: string = '1923';

  signIn() {
    console.log(this.login_input, this.pass_input);
    this.$router.push(rootPage);
  }
}
</script>
