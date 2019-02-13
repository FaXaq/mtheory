<template>
    <div class="m-toast" @click="destroy" :class="{
            'm-toast-info': notification.level == 'info',
            'm-toast-error': notification.level == 'error',
            'm-toast-warning': notification.level == 'error',
        }">
        <span>{{ notification.message }}</span>
        <span class="m-toast-close"></span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { INotification } from '@/App.vue';
import uuid from 'uuid';
import { clearTimeout, setTimeout } from 'timers';

@Component({})
export default class MToast extends Vue {
    @Prop({
      default: () => ({
        level: 'info',
        message: 'This is a default message',
        duration: 2000,
        id: uuid(),
      }),
    })
    private notification!: INotification;

    private timeout!: NodeJS.Timeout;

    destroy() {
      this.$destroy();
    }

    created() {
      this.timeout = setTimeout(() => {
        this.$destroy();
      }, this.notification.duration);
    }

    beforeDestroy() {
      clearTimeout(this.timeout);
      this.$emit('destroy', this.notification.id);
    }
}
</script>

<style lang="scss" scoped>
.m-toast {
    cursor: pointer;
}
</style>
