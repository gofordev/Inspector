<template>
  <div class="in-cards knots">
    <md-dialog class="dialog-select-stage" :md-active.sync="showDialogAttach">
      <md-dialog-title class="dialog-title"><h2>{{dialogAttachTitle}}</h2></md-dialog-title>
      <md-dialog-content>
        <md-field>
          <md-input
            id="number"
            placeholder="Номер узла"
            type="text"
            v-model="newProductNumber"
          />
        </md-field>
      </md-dialog-content>
      <md-dialog-actions class="dialog-actions">
        <md-button @click="showDialogAttach=false; 
          newProductNumber=''; 
          knotGroupIdSender=''" 
          class="md-primary"
        >Отмена</md-button>
        <md-button @click="showDialogAttach=false" 
          class="md-primary"
        >Сохранить</md-button>
      </md-dialog-actions>
    </md-dialog>

    <div class="main-wrapper check-list scroll-container">
      <div class="df">
        <div class="user-info-wrapper">
          <h1>
            План на сегодня,&nbsp;&nbsp;
            <span>{{ moment().format("DD.MM.YYYY") }}</span>
          </h1>
          <sync-bar position="relative" color="primary"/>
        </div>
        <div class="view-btns">
          <md-button class="md-icon-button" @click="drawerOpen=true">
            <div class="icon-burger" color="white" />
          </md-button>
          <menu-drawer :open="drawerOpen" @close="drawerOpen=false" />
        </div>
      </div>

      <div class="search-wrapper">
        <md-field>
          <md-input
            class="search-box"
            id="time"
            type="string"
            placeholder="Поиск по заводскому номеру или наименованию"
            v-model="searchString"
            @keypress="keyPressed"
          />
        </md-field>
        <md-button
          class="md-raised md-primary search"
          @click="doSearch"
        >Искать</md-button>
      </div>

      <div class="sort-wrapper">
        <div class="sort-btns">
          <span class="sort-title">Сортировать по:</span>

          <a
            href="#"
            :class="getSortStyle(sortKnotTypes.KnotNumber, sortKnotType)"
            @click="changeSort(sortKnotTypes.KnotNumber)"
          >№ узла</a>
          <a
            href="#"
            :class="getSortStyle(sortKnotTypes.KnotTitle, sortKnotType)"
            @click="changeSort(sortKnotTypes.KnotTitle)"
          >Наимен. узла</a>
          <a
            href="#"
            :class="getSortStyle(sortKnotTypes.ProductNumber, sortKnotType)"
            @click="changeSort(sortKnotTypes.ProductNumber)"
          >№ изделия</a>
          <a
            href="#"
            :class="getSortStyle(sortKnotTypes.ProductTitle, sortKnotType)"
            @click="changeSort(sortKnotTypes.ProductTitle)"
          >Наимен. изделия</a>

          <a
            href="#"
            :class="getSortStyle(sortKnotTypes.DateLastCheck, sortKnotType)"
            @click="changeSort(sortKnotTypes.DateLastCheck)"
          >Дате послед. прохождения</a>
        </div>
      </div>

      <div class="cards-list-wrapper">
        <div class="cards-list knots">
          <div v-for="(knot, index) in filteredKnots.filter(e => e.knot_number === '')" :key="index" class="card-wrapper">
              <md-card class="card check-list knot knot-group">
                <div class="df">
                  <div class="bold">{{knot.knot_title}}</div>
                  <div class="knots-remain">остаток {{knot.knot_count}} шт.</div>
                </div>

                <div class="card-section">
                  <Button variant="contained" 
                    color="primary" class="btn-primary" 
                    @click="showDialogAttach = true; 
                      dialogAttachTitle = knot.knot_title; 
                      knotGroupIdSender = knot.knot_group_id"
                  ><span>Взять в работу</span></Button>
                </div>
              </md-card>
          </div>
        </div>
        <div class="cards-list knots">
          <div v-for="(knot, index) in filteredKnots.filter(e => e.knot_number !== '')" :key="index" class="card-wrapper">
              <md-card class="card check-list knot" md-with-hover>
                <div @click="goToKnot(knot)">
                  <div class="df">
                      <h2>№{{knot.knot_number}}</h2>
                  </div>
                  <div class="df">
                      <div class="bold">{{knot.knot_title}}</div>
                  </div>

                  <div class="card-section">
                      <span class="product-title">{{knot.product_title}}</span>
                      <div class="item-info final-screen">
                          <span class="title">Дата последнего прохождения:</span>
                          <span class="value">{{formatDate(knot.date_last_check, "DD.MM.YYYY HH:mm")}}</span>
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
import SyncBar from '../../components/SyncBar.vue';
import MenuDrawer from '../../components/MenuDrawer.vue';
import { knotsCheckPage, checkPage } from '../../constants/config'

import moment from 'moment'
import { Knot } from '../../types';
import state from '../../mocks/total';
import { formatDate, sortByValues } from '../../utils'


enum SortKnotType {None, KnotNumber, KnotTitle, ProductNumber, ProductTitle, DateLastCheck}

@Component({
  components: {
    'menu-drawer': MenuDrawer,
    'sync-bar': SyncBar
  }
})
export default class KnotsListScreen extends Vue {

  keyPressed: boolean = false

  showDialogAttach: boolean = false

  dialogAttachTitle: string = ''

  newProductNumber: string = ''

  searchString: string = ''

  sortKnotTypes = SortKnotType

  sortKnotType: SortKnotType = SortKnotType.None

  knots: Array<Knot> = state.knots.knots

  profile = state.app.profile

  // search = state.knots.search
  search = ' '

  drawerOpen = state.checks.drawOpen

  doSearch() {}

  sortKnot(a: Knot, b: Knot): number {
    switch (this.sortKnotType) {
      case SortKnotType.KnotNumber:
          return sortByValues(a.knot_group_id, b.knot_group_id);
      case SortKnotType.KnotTitle:
          return sortByValues(a.knot_title, b.knot_title);
      case SortKnotType.ProductNumber:
          return sortByValues(a.knot_number, b.knot_number);
      case SortKnotType.DateLastCheck:
          return sortByValues(a.date_last_check, b.date_last_check);
      case SortKnotType.None:
          return 0;
      default:
          return 0;
    }
  }

  filterSearchHandler(knot: Knot) {
      return (knot.knot_title.toLowerCase().includes(this.search.toLowerCase())
          || knot.knot_number.toLowerCase().includes(this.search.toLowerCase())
          || knot.product_title.toLowerCase().includes(this.search.toLowerCase()))
  }

  getSortStyle(it: SortKnotType, current: SortKnotType | null) {
    if (current === null) return "btn-change";
      return (it === current) ? "btn-change active" : "btn-change"
  }

  changeSort(type: SortKnotType) {
    this.sortKnotType = type;
  }

  get filteredKnots() {
    return this.knots.sort(this.sortKnot).filter(this.filterSearchHandler);
  }

  goToKnot(knot: Knot) {
    this.$router.push({
      name: 'checkKnotScreen',
      params: {
        id: knot.knot_id
      }
    })
  };

  moment() {
    return moment();
  }

  formatDate (arg) {
    return formatDate(arg);
  }

}

</script>