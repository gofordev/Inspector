<template>
  <div>
    <div :class="$route.path == urls.rootPage ? 'in-cards' : 'in-list'">
      <div class="main-wrapper check-list scroll-container">
        <div class="df">
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
              @input="search"
              v-model="searchString"
              @keypress="keyPressed"
            />
          </md-field>
          <md-button class="md-raised md-primary" @click="doSearch">Искать</md-button>
        </div>
        
        <div v-if="$route.path == urls.rootPage" style="text-align: left">
          <md-checkbox @change="disableFilter=!disableFilter" :value="disableFilter" class="md-primary notif">
            Показывать все (DEV)
          </md-checkbox>
        </div>

        <div class="sort-wrapper">
          <div class="sort-btns">
            <span class="sort-title">Сортировать по:</span>

            <a
              href="#"
              :class="getSortStyle(sortTypes.StageTitle, sortType)"
              @click="changeSort(sortTypes.StageTitle)"
            >
              Текущему этапу
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.ProductNumber, sortType)"
              @click="changeSort(sortTypes.ProductNumber)"
            >
              Зав. номеру
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.ProductTitle, sortType)"
              @click="changeSort(sortTypes.ProductTitle)"
            >
              Наименованию изделия
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.LastDateCheck, sortType)"
              @click="changeSort(sortTypes.LastDateCheck)"
            >
              Дате последнего прохождения
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.ContractCode, sortType)"
              @click="changeSort(sortTypes.ContractCode)"
            >
              Номер договора
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.ContractAnnex, sortType)"
              @click="changeSort(sortTypes.ContractAnnex)"
            >
              Номер приложения
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.ProductPosition, sortType)"
              @click="changeSort(sortTypes.ProductPosition)"
            >
              Позиция
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.DateStart, sortType)"
              @click="changeSort(sortTypes.DateStart)"
            >
              Дата начала этапа
            </a>
            <a
              href="#"
              :class="getSortStyle(sortTypes.DateEnd, sortType)"
              @click="changeSort(sortTypes.DateEnd)"
            >
              Дата окончания этапа
            </a>
          </div>
        </div>

        <div v-if="isFetch && checks.count()===0">
          <div style="display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'">
              <md-progress-spinner :md-diameter="20" md-mode="indeterminate"/>
          </div>
        </div>
        <div class="cards-list" v-else>
          <div v-for="check in sortedChecks" :key="check.check_id" class="card-wrapper" @click="goToProduct(check)">
              <md-card :class="check.progress == '100' ? 'card check-list complete' : 'card check-list'">
                  <div class="df">
                    <h2 v-if="check.product_number">№{{check.product_number}}</h2>
                    <h2 v-else>Создать зав. номер</h2>
                      <div class="progress">{{check.progress}}%</div>
                  </div>
                  <div class="bold">{{check.stage_title}}</div>
                  <div class="card-section">
                      <span class="product-title">{{formatCheck(check).contractCode}} прил. {{formatCheck(check).contractAnnex}}</span>
                      <span class="product-title">{{check.product_title}} (позиция {{check.product_position}})</span>
                      <div class="info-row">
                          <div class="item-info">
                              <span class="title">Плановые даты этапа:</span>
                              <span class="value">
                                  <span class="value1">{{formatCheck(check).startDate}}</span>
                                  -
                                  <span class="value2">{{formatCheck(check).endDate}}</span>
                              </span>
                          </div>
                          <div class="item-info">
                              <span class="title">Фактические даты этапа:</span>
                              <span class="value">
                                  <span class="value1">{{formatCheck(check).factStartDate}}</span>
                                  -
                                  <span class="value2">{{formatCheck(check).factEndDate}}</span>
                              </span>
                          </div>
                          <div class="item-info">
                              <span class="title">Плановая дата поставки:</span>
                              <span class="value">{{formatCheck(check).cargoDate}}</span>
                          </div>
                          <div class="item-info">
                              <span class="title">Дата последнего прохождения:</span>
                              <span class="value">{{formatCheck(check).lastCheck}}</span>
                          </div>
                      </div>
                  </div>
              </md-card>
          </div>
        </div>
        <div :class="filter ? 'view-list filter' : 'view-list'">
          <div class="sort-back"/>
          <div class="sort-wrapper">
              <div class="sort-btns">
                  <span class="sort-title">Сортировать по:</span>
                  <a href="#"
                        :class="getSortStyle(sortTypes.ContractCode, sortType)"
                        @click="changeSort(sortTypes.ContractCode)">Номер договора</a>
                  <a href="#"
                        :class="getSortStyle(sortTypes.ContractAnnex, sortType)"
                        @click="changeSort(sortTypes.ContractAnnex)">Номер приложения</a>
                  <a href="#"
                        :class="getSortStyle(sortTypes.ProductNumber, sortType)"
                        @click="changeSort(sortTypes.ProductNumber)">Зав. номеру</a>
                  <a href="#"
                        :class="getSortStyle(sortTypes.ProductTitle, sortType)"
                        @click="changeSort(sortTypes.ProductTitle)">Наименованию изделия</a>
              </div>
          </div>
          <md-button class="filter-btn md-primary" @click="filter=!filter">{{""}}</md-button>
          <div class="elements">
            <md-list class="list-element" :md-expand-single="true">
              <md-list-item
                v-for="networkCheck in sortedNetworkChecks" :key="`NetworkRow-${networkCheck.check_id}`"
                md-expand
                @click="expanded=(expanded===networkCheck.check_id)?'':networkCheck.check_id"
              >
                <span class="md-display-0">
                  {{`${networkCheck.product_number} ${networkCheck.product_title} (поз. ${networkCheck.product_position}) ${networkCheck.contract_code} ${networkCheck.contract_annex}`}}
                </span>
                <div slot="md-expand">
                  <div class="table" v-if="expanded===networkCheck.check_id">
                    <div
                      v-for="(sortCheck, index) in sortedChecksByDate.filter(e => checkProduct(networkCheck, e))" :key="index"
                      :class="getDateBetween(sortCheck) ? 'row-wrapper active' : 'row-wrapper'"
                      @click="goToProduct(sortCheck)">
                        <div class="step-circle">
                          <div class="circle"/>
                          <div class="vert-line"/>
                        </div>
                        <div class="row">
                          <div>{{`${sortCheck.stage_title}`}}</div>
                          <div>{{sortCheck.progress}}%</div>
                          <div class="table-dates">
                              <span>{{formatDate(sortCheck.date_stage_start)}}</span>
                              <span>{{formatDate(sortCheck.date_actual_start)}}</span>
                          </div>
                          <div class="table-dates">
                              <span>{{formatDate(sortCheck.date_stage_end)}}</span>
                              <span>{{formatDate(sortCheck.date_actual_end)}}</span>
                          </div>
                          <div :class="sortCheck.progress == '100' ? 'row-back complete' : 'row-back'"
                            :style="{width: `${sortCheck.progress}%`}"/>
                        </div>
                      </div>
                  </div>
                </div>  
              </md-list-item>
            </md-list>            
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
import state from '../../mocks/total';
import { formatDate, sortByDateStart, sortByValues } from '../../utils'
import { Check } from '../../types';
import { productPage, rootPage } from '../../constants/config'
import { constants } from 'crypto';
import moment from 'moment';
import { List } from 'immutable';

enum SortType {StageTitle, ProductNumber, ProductTitle, LastDateCheck, ContractCode, ProductPosition, ContractAnnex, DateStart, DateEnd}

@Component({
  components: {
    'menu-drawer': MenuDrawer,
    'sync-bar': SyncBar
  }
})

export default class ChecksListScreen extends Vue {

  isFetch = state.checks.isFetch

  checks: List<Check> = List(state.checks.list)

  // search = state.checks.search
  search = ' '

  filter: boolean = false

  expanded: string = ''
  
  isNetwork = state.checks.isNetwork

  login = state.login.login

  profile = state.app.profile

  drawerOpen = state.checks.drawOpen

  searchString: string = ''

  sortTypes = SortType

  sortType: SortType = SortType.StageTitle

  disableFilter: boolean = true

  get sortedChecks () {
    return this.checks.filter(check => this.search ? this.searchByField(check) : this.filterByComplete(check))
      .sort(this.sortChecks)
  }

  get sortedNetworkChecks () {
    let networkCheck: { [key: string]: Check } = {}

    this.checks.filter(check => this.search ? this.searchByField(check) : this.filterByComplete(check))
      .forEach(el => {
        if (!networkCheck[`${el.product_id}_${el.product_position}`]) {
            networkCheck[`${el.product_id}_${el.product_position}`] = el
        }
    });
    return Object.keys(networkCheck).map(k => networkCheck[k])
      .filter(check => this.search ? this.searchByField(check) : this.filterByComplete(check))
      .sort(this.sortChecks)
  }

  get sortedChecksByDate() {
    return this.checks.sort(sortByDateStart);
  }

  formatCheck(check: Check) {
    return {
      startDate: formatDate(check.date_stage_start),
      endDate: formatDate(check.date_stage_end),
      cargoDate: formatDate(check.date_cargo),
      factStartDate: formatDate(check.date_actual_start),
      factEndDate: formatDate(check.date_actual_end),
      lastCheck: formatDate(check.date_last_check, "DD.MM.YYYY HH:mm"),
      contractCode: check.contract_code ? check.contract_code : '-',
      contractAnnex: check.contract_annex ? check.contract_annex : '-',
    }
  }

  doSearch() {
    console.log('changeSort', this);
  }

  keyPressed() {
    console.log('changeSort', this);
  }

  changeSort(type: SortType) {
    this.sortType = type;
  }

  getSortStyle(it: SortType, current: SortType): string {
    return (it === current) ? "btn-change active" : "btn-change";
  }

  searchByField(check: Check) {
    const search = this.search;
    if (search === "") {
        return true;
    }

    const contract_code = check.contract_code ? check.contract_code.toLowerCase() : "";
    const product_number = check.product_number ? check.product_number.toLowerCase() : "";
    const product_title = check.product_title ? check.product_title.toLowerCase() : "";
    const stage_title = check.stage_title ? check.stage_title.toLowerCase() : "";
    const contract_annex = check.contract_annex ? check.contract_annex.toLowerCase() : "";

    return contract_code.includes(search.toLowerCase()) || product_number.includes(search.toLocaleLowerCase())
        || product_title.includes(search.toLocaleLowerCase())
        || stage_title.includes(search.toLocaleLowerCase())
        || contract_annex.includes(search.toLocaleLowerCase())
  }

  filterByComplete(check: Check) {
    if (this.disableFilter) {
        return true;
    }
    const start = check.date_stage_start;
    const end = check.date_stage_end;

    return moment().isBetween(moment.unix(parseInt(start)), moment.unix(parseInt(end)))
        || moment().isBetween(moment.unix(parseInt(check.date_actual_start)), moment.unix(parseInt(check.date_actual_end)))
        && check.progress !== "100";
  }

  sortChecks(a: Check, b: Check): number {
    switch (this.sortType) {
      case SortType.StageTitle:
        return sortByValues(a.stage_title, b.stage_title);
      case SortType.ProductNumber:
        return sortByValues(a.product_number, b.product_number);
      case SortType.ProductTitle:
        return sortByValues(a.product_title, b.product_title);
      case SortType.LastDateCheck:
        return sortByValues(a.date_last_check, b.date_last_check);
      case SortType.ContractCode:
        return sortByValues(a.contract_code, b.contract_code);
      case SortType.ProductPosition:
        return sortByValues(a.product_position, b.product_position);
      case SortType.ContractAnnex:
        return sortByValues(a.contract_annex, b.contract_annex);
      case SortType.DateStart:
        return sortByValues(a.date_stage_start, b.date_stage_start);
      case SortType.DateEnd:
        return sortByValues(a.date_stage_end, b.date_stage_end);
      default:
        return 0;
    }
  }
  goToProduct(check: Check) {
    this.$router.push({
      name: 'productScreen',
      params: {
        id: check.check_id
      }
    })
  }

  urls = {
      rootPage,
  }
  
  getDateBetween (sortCheck) {
    return moment().isBetween(moment.unix(parseInt(sortCheck.date_actual_start)), moment.unix(parseInt(sortCheck.date_actual_end)))
  }

  formatDate (date) {
    return formatDate(date);
  }

  checkProduct (product, check) {
    const name1 = `${product.product_number} ${product.product_title} (поз ${product.product_position}) ${product.contract_code}`;
    const name2 = `${check.product_number} ${check.product_title} (поз ${check.product_position}) ${check.contract_code}`;

    return name1 === name2;
  }

  moment() {
    return moment();
  }
}
</script>
