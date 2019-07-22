<template>
    <md-drawer :md-active.sync="drawOpen">
        <div
            class="drawer"
            role="presentation"
            @click="drawOpen=false"
            @keydown="drawOpen=false"
        >
            <md-toolbar class="md-primary user-info" position="static">
                <div>Пользователь</div>
                <span class="md-display-1">
                    {{profile && profile.full_name}}
                </span>
            </md-toolbar>
            <md-list class="drawer-menu">
                <md-list-item
                    :class="$route.path == urls.rootPage ? 'menu-item active' : ' menu-item'"
                    @click="toggleViewMode(false)">
                    <md-icon><div class="icon-cards"/></md-icon>
                    <span class="menu-text">Этапы</span>
                </md-list-item>

                <md-list-item
                    :class="$route.path == urls.networkPage ? 'menu-item active' : ' menu-item'"
                    @click="toggleViewMode(true)">
                    <md-icon><div class="icon-list"/></md-icon>
                    <span class="menu-text">План график</span>
                </md-list-item>

                <md-list-item
                    :class="$route.path == urls.knotsListPage ? 'menu-item active' : ' menu-item'"
                    @click="$router.push(urls.knotsListPage)">
                    <md-icon><div class="icon-knots"/></md-icon>
                    <span class="menu-text">Узлы</span>
                </md-list-item>

                <md-list-item class="menu-item"
                    @click="$router.push(urls.supportPage)">
                    <md-icon><div class="icon-support"/></md-icon>
                    <span class="menu-text">Поддержка</span>
                </md-list-item>

                <md-list-item class="menu-item"
                    @click="$router.push(urls.supportArchivePage)">
                    <md-icon><div class="icon-support"/></md-icon>
                    <span class="menu-text">Архив</span>
                </md-list-item>

                <md-list-item class="menu-item"
                    @click="$router.push(urls.loginPage)">
                    <md-icon><div class="icon-exit"/></md-icon>
                    <span class="menu-text">Выйти</span>
                </md-list-item>
            </md-list>
        </div>
    </md-drawer>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import state from '../mocks/total';
import { knotsListPage, rootPage, networkPage, supportPage, supportArchivePage, loginPage } from '../constants/config';

@Component
export default class MenuDrawer extends Vue {
    @Prop()
    open!: boolean;

    get drawOpen() {
        return this.open;
    }

    set drawOpen(val) {
        this.$emit('close', val);
    }

    isNetwork = state.checks.isNetwork;

    profile = state.app.profile;
    
    urls = {
        knotsListPage,
        rootPage,
        networkPage,
        supportPage,
        supportArchivePage,
        loginPage
    }

    toggleViewMode(value) {
        if (value === false) {
            // this.props.dispatch(toggleNetworkMode(false));
            this.$router.push(rootPage);
        }
        if (value === true) {
            // this.props.dispatch(toggleNetworkMode(true));
            this.$router.push(networkPage);
        }
    }
}
</script>
