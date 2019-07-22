<template>
    <div>
      <md-toolbar class="md-primary nav-bar check-knot" position="static">
          <a @click="goBack">
              <span>Назад</span>
          </a>
      </md-toolbar>

      <div class="main-wrapper scroll-container check knot">
          <div class="df">
              <div class="f2">
                  <md-card class="paper knot-info">
                      <div class="df">
                          <h2>№ {{knot.knot_number}}</h2>
                      </div>
                      <div class="bold">{{knot.knot_title}}</div>
                      <span class="product-title">{{knot.product_title}}</span>
                  </md-card>
              </div>
              <div class="f2 bind-to-product">
                  <md-button class="btn" @click="showProductDialog=true">Привязать к изделию</md-button>
                  <div class="item-info">
                      <span class="title">Дата последнего прохождения:</span>
                      <span class="value">{{formatDate(knot.date_last_check, "DD.MM.YYYY HH:mm")}}</span>
                  </div>
              </div>
          </div>
          <div class="df operation-group">
              <h2>Группа операций:</h2>
              <span>Контроль разрешительной документации</span>
          </div>
          <div class="cards-list">
                <div v-for="(operation, index) in knot.operations" :key="index" class="card-wrapper" @click="goToWizard(operation)">
                    <md-card class="card">
                        <div class="card-head">
                            <h2>{{operation.group}}</h2>
                            <div class="bold">{{operation.title}}</div>
                        </div>
                        <div class="frequency-and-method">
                            <span>Частота и метод проверки:</span>
                            <div class="frequency-and-method-values">
                                <span v-for="(method, index) in operation.method" :key="index">
                                    {{method.title}}
                                </span>
                            </div>
                        </div>
                        <div class="lastcheck-datetime">
                            <span>Дата и время последней проверки:</span>
                            <div class="datetime">
                                {{formatDate(knot.date_last_check, "DD.MM.YYYY HH:mm")}}
                            </div>
                        </div>
                    </md-card>
                </div>
          </div>
      </div>

      <md-dialog class="dialog-bind-product" :md-active.sync="showProductDialog">
          <md-dialog-title class="dialog-title"><h2>{{knot.knot_title}}</h2></md-dialog-title>
          <md-dialog-content>
              <div class="search-wrapper">
                  <md-field>
                    <md-input
                        class="search-box"
                        id="time"
                        type="string"
                        placeholder="Поиск по заводскому номеру или наименованию"
                        v-model="searchString"
                    />
                  </md-field>
              </div>
              <div class="row-wrapper">
                  <div v-for="(product, index) in products" :key="index">
                    <div :class="(String(knot.position) === String(product.position)) ? 'row selected' : 'row'" :key="product.position" @click="selectProduct(product)">
                        <div>{{`${product.title} поз. ${product.position}`}}</div>
                        <div class="binded"/>
                    </div>
                  </div>
              </div>
          </md-dialog-content>
          <md-dialog-actions class="dialog-actions">
              <Button @click="showProductDialog=false">ОТМЕНА</Button>
              <Button @click="attachProduct">СОХРАНИТЬ</Button>
          </md-dialog-actions>
      </md-dialog>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { rootPage, wizardPage } from '../../constants/config';
import state from '../../mocks/total';
import { formatDate } from '../../utils'
import { KnotOperation, Product } from '../../types';

@Component
export default class CheckKnotScreen extends Vue {

    showProductDialog: boolean = false

    searchString: string = ''

    position: string = ''

    product = null

    search = ''

    products = [{}]

    mounted () {
        setTimeout(() => {
            if (this.knot) {
                console.log(this.knot.knot_id);
            }
            this.products = [{
                number: "",
                position: "1",
                title: "Установка Мера-ММ 40-10-800"
            }];
        }, 1000);
    }

    // filteredProducts(product: Product) {
    //     return product.title.includes(this.search);
    // }
    
    goBack() {
        this.$router.go(-1);
    }


    get knot() {
        return state.knots.knots.find(knot => knot.knot_id === this.$route.params.id)
    }

    attachProduct() {
        // const {knot, product} = this.state;
        // const {dispatch} = this.props;
        // if (product === null) return;
        // const payload: PostKnotActionPayload = {
        //     knot_id: knot.knot_id,
        //     product_id: product.number,
        //     position: product.position
        // };
        // dispatch(postKnotAction(payload));
        this.showProductDialog = false;
    }

    selectProduct(product: Product) {
        this.position = product.position;
        if(!this.knot) return
        console.log(this.position, this.knot);
    }

    goToWizard(operation: KnotOperation) {
        this.$router.push({
            name: 'wizardKnotScreen',
            params: {
                knotId: this.$route.params.id,
                operationId: operation.operation_id,
            }
        })
    }

    handleClickOpen() {}

    formatDate(date, format) {
        return formatDate(date, format);
    }
}
</script>