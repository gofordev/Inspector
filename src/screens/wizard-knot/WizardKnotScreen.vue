<template>
  <div>
    <md-toolbar class="md-primary nav-bar wizard-knot" position="static">
      <div v-if="!showFinalPage" class="stage-info">
        Проверяемая характеристика 
        <span>{{position + 1}}</span> из <span>{{operation.features.length}}</span>
      </div>
      <a v-else class="back" @click="goPrevFeature" style="width:100%;">
        <span>Назад</span>
      </a>
    </md-toolbar>
    <div v-if="showFinalPage" class="main-wrapper final knot">
        <md-card class="paper">
            <div class="df">
                <h2>{{knot.knot_title}}</h2>
                <span>№ {{knot.knot_number}}</span>
            </div>
            <div class="product-title"></div>
            <div class="item-info">
                <span class="title">Дата последнего прохождения:</span>
                <span class="value">{{formatDate(knot.date_last_check, "DD.MM.YYYY HH:mm")}}</span>
            </div>
        </md-card>

        <md-card class="paper">
            <div class="paper-title">Общий комментарий</div>
            <div class="paper-content">{{finalComment}}</div>
            <md-button class="md-primary"
              @click="showCommentModal = true"
            ><span>Изменить</span></md-button>
        </md-card>

        <div class="footer-btns">
            <md-button class="md-primary" @click="goPrevFeature">
              <md-icon class="back-icon">arrow_back</md-icon>Предыдущая характеристика
            </md-button>
            <md-button class="md-primary" @click="finish">
              <md-icon class="forward-icon">done</md-icon>Завершить проверку
            </md-button>
        </div>

        <md-dialog class="dialog-comment wizard-knot" :md-active.sync="showCommentModal">
            <md-dialog-title class="dialog-title"><h2 style="color: #000000">Комментарий</h2></md-dialog-title>
            <md-dialog-content class="dialog-content">
                <md-field>
                  <md-textarea
                    id="noter"
                    type="text"
                    rows="4"
                    v-model="note"
                  />
                </md-field>
            </md-dialog-content>
            <md-dialog-actions class="dialog-actions">
                <md-button @click="handleCloseFinalComments"
                  class="md-primary">Ок</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
    <div v-else class="main-wrapper wizard">
      <div class="df">
          <div class="f2">
              <md-card class="paper product-info-only">
                  <h2>№ {{knot.knot_number}}</h2>
                  <div class="bold">{{knot.knot_title}}</div>
                  <span class="product-title">{{knot.product_title}}</span>
              </md-card>
          </div>
          <div class="f2">
              <md-card class="paper documents-and-criterions">
                  <div class="documents">
                      Ссылочные документы
                      <md-button class="md-primary"
                        @click="handleClickOpenDocs">
                        Посмотреть
                      </md-button>
                  </div>
                  <div class="divider"/>
                  <div class="criterions">
                      Критерии приемки
                      <md-button class="md-primary"
                        @click="handleClickOpenCrits">Посмотреть
                      </md-button>
                  </div>
              </md-card>
          </div>
      </div>
      <div class="verification-info">
          <h4>Операция</h4>
          <h2>{{operation.title}}</h2>
          <h4>Характеристика</h4>
          <h2>{{feature.title}}</h2>
      </div>

      <div class="df">
          <div class="f2">
              <md-card class="paper verification-status">
                  <h2>Статус проверки</h2>
                  <div class="btns-panel">
                      <div class="btn-wrapper">
                          <md-button :class="getButtonclass('1', featuresData.get(feature.feature_id).status)"
                                  @click="setStatus(1)">Проверка пройдена успешно</md-button>
                      </div>
                      <div class="btn-wrapper">
                          <md-button :class="getButtonclass('2', featuresData.get(feature.feature_id).status)"
                                  @click="setStatus(2)">Выявлены несоответствия</md-button>
                      </div>
                      <div class="btn-wrapper">
                          <md-button :class="getButtonclass('0', featuresData.get(feature.feature_id).status)"
                                  @click="setStatus(0)">Проверка не проводилась</md-button>
                      </div>
                  </div>
              </md-card>
          </div>
          <div class="f2">
              <md-card class="paper verification-comment">
                  <h2>Комментарий</h2>
                  <div class="paper-content">{{note}}</div>
                  <md-button class="md-primary" @click="handleClickOpenComments"><span>Изменить</span></md-button>
              </md-card>
          </div>
      </div>

      <div class="photos-wrapper">
        <a class="upload-photo" @click="$refs.uploader.click()">
          Добавить фото</a>
        <input type="file" accept="image/*" capture id="file"
          ref="uploader"
          :style="{display: 'none'}" @change="e => fileSelected(e)"/>
          <hooper :settings="hooperSettings">
            <slide class="photos-gallery" v-for="(photo, index) in photos" :key="index">
              <div v-if="photo.source" class="img-wrapper">
                  <div class="img-inner">
                      <img class="photo" :src="`${photo.source}`"
                            alt="photo" :style="{transform: `rotate(${photo.rotate}deg)`}"/>
                      <md-icon class="delete-photo">
                          <div class="delete-ico" @click="deletePhoto(photo.uid)"/>
                      </md-icon>
                  </div>
                  <div class="photo-index">
                      <span>{{index + 1}}</span> из <span>{{photos.length}}</span>
                  </div>
              </div>
              <div v-if="photo.path" class="img-wrapper" :key="photo.uid">
                  <div class="img-inner">
                      <img class="photo" :src="`${PHOTO_PATH}${photo.path}`" alt="photo"/>
                      <md-icon class="delete-photo" @click="deletePhoto(photo.uid)">
                          <div class="delete-ico"/>
                      </md-icon>
                  </div>
                  <div class="photo-index">
                      <span>{{index + 1}}</span> из <span>{{photos.length}}</span>
                  </div>
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons" :class="photos.length > 3 ? 'nav-show' : 'nav-invisible'"/>
        </hooper>
      </div>

      <div class="footer-btns">
          <md-button class="md-primary" @click="goPrevFeature">
            <md-icon class="back-icon">arrow_back</md-icon>
              Предыдущая характеристика
          </md-button>
          <md-button class="md-primary" @click="goNextFeature">Следующая характеристика
            <md-icon class="forward-icon">arrow_forward</md-icon>
          </md-button>
      </div>
    </div>
    <md-dialog :md-active.sync="statusDialogVisible">
      <md-dialog-title id="alert-dialog-title">Внимание</md-dialog-title>
      <md-dialog-content>
        <p id="alert-dialog-description">
          Нужно выбрать статус для перехода в следующую характеристику.
        </p>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button @click="statusDialogVisible = false">
          Ok
        </md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="editPhotoDialogVisible">
        <md-dialog-title id="alert-dialog-title">Редактирование фото</md-dialog-title>
        <md-dialog-content style="flex: 1">
          <div v-if="processedPhoto" style="display: 'flex', text-align: 'center', justifyContent: 'center'">
              <img
                  :style="{width: '100%', height: '100%', transform: `rotate(${rotate}deg)`}"
                  class="photo"
                  :src="processedPhoto"
                  alt="photo"/>
          </div>
        </md-dialog-content>

        <md-dialog-actions style="margin-left: 15px;">
            <span style="flex: 1">
              <md-button :disabled="isProcessed"
                @click="rotate = rotate + 90">
                  <md-icon>sync</md-icon>
                  Поворот
              </md-button>
            </span>
            <md-button @click="resetImageProcessing">
                Отмена
            </md-button>
            <md-button :disabled="processedPhoto === null"
              @click="addFile(String(processedPhoto)); resetImageProcessing();">
              Ok
            </md-button>
        </md-dialog-actions>
    </md-dialog>
    <md-dialog class="dialog-documents" :md-active.sync="openDocs">
        <md-dialog-title class="dialog-title"><h2 style="color:#000000">Ссылочные документы</h2></md-dialog-title>
        <md-dialog-content class="dialog-content">
            {{operation.docs}}
        </md-dialog-content>
        <md-dialog-actions class="dialog-actions">
            <md-button @click="handleCloseDocs" class="md-primary">Ок</md-button>
        </md-dialog-actions>
    </md-dialog>

    <md-dialog class="dialog-crits" :md-active.sync="openCrits">
        <md-dialog-title class="dialog-title"><h2 style="color:#000000">Критерии приемки</h2></md-dialog-title>
        <md-dialog-content class="dialog-content">
          <a v-for="(item, index) in operation.criterias" :key="index">{{item.title}}</a>
        </md-dialog-content>
        <md-dialog-actions class="dialog-actions">
            <md-button @click="handleCloseCrits" class="md-primary">Ок</md-button>
        </md-dialog-actions>
    </md-dialog>

    <md-dialog class="dialog-comment wizard-knot" :md-active.sync="openComments">
        <md-dialog-title class="dialog-title"><h2 style="color:#000000">Комментарий</h2></md-dialog-title>
        <md-dialog-content class="dialog-content">
          <md-field>
            <md-textarea
              id="noter"
              type="text"
              rows="4"
              v-model="note"
            />
        </md-field>
        </md-dialog-content>
        <md-dialog-actions class="dialog-actions">
            <md-button @click="handleCloseComments" class="md-primary">Ок</md-button>
        </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import state from '../../mocks/total'
import { RequestFeature, Mode, Feature, LocalPhoto } from '../../types';
import { futimesSync } from 'fs';
import { formatDate } from '../../utils'
import { Map, List } from "immutable";
import uuid from "react-native-uuid";
import { Resolver } from 'dns';
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css';

interface Target extends EventTarget {
    result: string
}

@Component({
  components: {
    'hooper': Hooper,
    'slide' : Slide,
    'hooper-navigation': HooperNavigation,
  }
})
export default class WizardKnotScreen extends Vue {

  showFinalPage: boolean = false

  showDialog: boolean = false

  showCommentModal: boolean = false

  openDocs: boolean = false
  
  openCrits: boolean = false

  openComments: boolean = false

  statusDialogVisible: boolean = false

  editPhotoDialogVisible: boolean = false
  
  processedPhoto: string | null = null

  isProcessed: boolean = false

  hooperSettings: Object = {}

  rotate: number = 0

  position: number = 0

  note: string | undefined = ''

  finalComment: string = ''

  feature?: Feature

  featuresData: Map<string, RequestFeature> = Map()

  created() {
    this.featuresData = Map()
    if (this.operation) {
      const features = this.operation.features;
      this.feature = features[0] as Feature;
      for (const _feature of features) {
          this.featuresData = this.featuresData.set(_feature.feature_id, {
              feature_id: _feature.feature_id,
              status: _feature.status,
              photos: List(_feature.photos),
              mode: Mode.Knot
          })
      }
    }
    if(!this.feature) return
    const featureData = this.featuresData.get(this.feature.feature_id)
    if(!featureData) return
    this.note = featureData.note || this.feature.note
    this.hooperSettings = {
      playSpeed: 500,
      itemsToShow: 2,
      itemsToSlide: 1,
      initialSlide: 4,
      infiniteScroll: false,
      wheelControl: false,
      responsive: [
          {
              breakpoint: 960,
              settings: {
                  itemsToShow: 3,
                  itemsToSlide: 3
              }
          }
      ]
    };
  }

  get knot() {
    return state.knots.knots.find(knot => knot.knot_id == this.$route.params.knotId)
  }

  get operation() {
    if (this.knot) {
      return this.knot.operations.find(operation => operation.operation_id == this.$route.params.operationId)
    }
  }

  get photos() {
    if(!this.feature) return
    const featureData = this.featuresData.get(this.feature.feature_id) as RequestFeature;
    const photos = featureData.photos;
    if(!photos) return
    return photos.toArray();
  }

  goPrevFeature() {
    if(this.showFinalPage == true) {
      console.log("1",this.position, this.feature);
      return this.showFinalPage = false;
    }
    if(this.position === 0) {
      console.log("2",this.position, this.feature);
      return
    } else if(this.operation){
      const position = this.position - 1;
      const operation = this.operation;
      const features = operation.features;
      const feature = features[position];

      window.scroll(0, 0);

      this.position = position;
      this.feature = feature;
      this.$forceUpdate();
    }
  }

  goNextFeature() {
    const featuresData = this.featuresData;
    const currentFeatureData = this.getCurrentFeatureDate();
    if(!currentFeatureData) return
    if (currentFeatureData.status === "-1") {
        return this.statusDialogVisible = true;
    }
    // this.props.dispatch(setFeaturesTempAction(featuresData));
    if (this.position + 1 === this.featuresData.count()) {
        return this.showFinalPage = true;
    }

    const position = this.position + 1;
    const operation = this.operation;
    if(!operation) return
    const features = operation.features;
    const feature = features[position];

    window.scroll(0, 0);

    this.position = position;
    this.feature = feature;
    this.$forceUpdate();
  };

  getCurrentFeatureDate() {
    const feature = this.feature;
    if(!feature) return
    return this.featuresData.get(feature.feature_id) as RequestFeature;
  }

  finish() {
    // const {dispatch} = this.props;
    // const features = this.featuresData.valueSeq().toArray();
    // dispatch(sendFeatureActions(features));
    this.$router.push("/knots");
  }

  handleCloseFinalComments() {
    // const knot = this.state;
    // const {dispatch} = this.props;
    this.showCommentModal = false;
    // const postKnotPayload: PostKnotActionPayload = {
    //     knot_id: knot.knot_id,
    //     note: this.state.finalComment,
    //     position: String(knot.position)
    // };
    // dispatch(postKnotAction(postKnotPayload));
  }

  handleClickOpenDocs() {
    this.openDocs = true;
  }

  handleClickOpenCrits() {
    this.openCrits = true;
  }

  resetImageProcessing() {
    this.editPhotoDialogVisible = false;
    this.processedPhoto = null;
    this.rotate = 0;
  }

  addFile(result: string) {
    const feature = this.feature;

    if (!feature) return

    const featureData = this.featuresData.get(feature.feature_id) as RequestFeature;
    console.log('feature data', featureData);
    if (featureData.status === "0") {
        this.setStatus(-1);
    }
    this.featuresData = this.featuresData.update(feature.feature_id, (_feature: RequestFeature) => {
      const photo: LocalPhoto = {
        rotate: this.rotate,
        uid: uuid.v4(),
        source: result
      };

      if(_feature.photos) {
        _feature.photos = _feature.photos.push(photo);
      }
      console.log('feature data', _feature);
      // sendPhotoAction(feature.feature_id, photo, Mode.Knot);

      return _feature;
    });

    this.$nextTick().then(() => {
      this.resetImageProcessing();
      this.$forceUpdate();
    })
  }

  setStatus(status: number) {
      const feature = this.feature;
      if(!feature) return;
      const featuresData = this.featuresData.update(feature.feature_id, (_feature: RequestFeature) => {
          _feature.status = String(status);
          return _feature;
      });
      return {
          featuresData
      }
      this.$nextTick().then(() =>{
          this.$forceUpdate();
      })
  }

  handleCloseDocs() {
    this.openDocs = false;
  }

  handleCloseCrits() {
    this.openCrits = false;
  }

  handleCloseComments() {
    this.openComments = false;
  }

  handleClickOpenComments() {
    this.openComments = true;
  }

  getButtonclass(val: string, current: string) {
    if(val === current) {
      return "btn"
    } else {
      return "btn btn-disabled"
    }
  }

  async fileSelected(e) {
    const fileReader = new FileReader();

    fileReader.onload = async (event: ProgressEvent) => {
      this.editPhoto((event.target as Target).result);
    };
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
  }

  editPhoto(photoBase64: string) {
    this.processedPhoto = photoBase64;
    this.editPhotoDialogVisible = true;
    this.$nextTick().then(() => {
        this.$forceUpdate();
    });
  };

  deletePhoto(uid: string) {
    console.log(uid);
    const feature = this.feature;
    if(!feature) return
    const featuresData = this.featuresData.update(feature.feature_id, (_feature: RequestFeature) => {
      if(_feature.photos)
      {
        _feature.photos = _feature.photos.filter(photo => photo.uid !== uid);
      }
        return _feature;
    });
    return {
      featuresData
    }
    this.$nextTick().then(()=>{
        this.$forceUpdate();
        // this.props.dispatch(deletePhotoAction(uid));
    });
  }

  formatDate(date, format) {
    return formatDate(date, format);
  }

}
</script>