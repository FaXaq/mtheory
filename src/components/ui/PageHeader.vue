<template>
    <header class="m-page-header m-bg-gradient m-text-white">
        <div class="m-page-header-content">
            <h1 class="m-fade-in">{{ content.title }}</h1>
            <p class="m-fade-in-long">{{ content.text }}</p>
        </div>
        <slot></slot>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface IHeaderContent {
    text?: string,
    title?: string
}

@Component({})
export default class MPageHeader extends Vue {
    @Prop({
      default: (() => ({ title: 'No Title', text: 'No Text' }))(),
    })
    private content!: IHeaderContent;
}
</script>

<style lang="scss" scoped>

</style>
