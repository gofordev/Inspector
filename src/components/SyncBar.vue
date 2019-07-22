<template>
    <div v-if="isOffline">
      <div class="sync">Нет соединения с сервером</div>
    </div>
    <div v-else>
      <div v-if="tasksCount !== 0">
        <div className="sync">
          Загружено {{syncedTasks}} / {{tasksCount}} 
          <md-progress-spinner :md-diameter="20" md-mode="indeterminate"/>
        </div>
      </div>
      <div class="sync">Синхронизация завершена</div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
  
@Component
export default class SyncBar extends Vue {
  @Prop()
  isOffline!: boolean;

  syncedTasks: string = '';
  tasksCount: number = 0;
}
</script>
