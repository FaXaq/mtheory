<template>
    <m-page-header class="m-vh-100">
        <m-page-header-content class="m-text-white">
            <h1 class="m-fade-in">{{ $t('404.header.title') }}</h1>
        </m-page-header-content>
        <m-svg-container id="error-bg" class="m-position-absolute m-fill">
        </m-svg-container>
    </m-page-header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MPageHeader from '@/components/ui/page/PageHeader.vue';
import MPageHeaderContent from '@/components/ui/page/PageHeaderContent.vue';
import MSvgContainer from '@/components/ui/svg/SvgContainer.vue';

@Component({
  components: {
    MPageHeader,
    MPageHeaderContent,
    MSvgContainer,
  },
})
export default class Error404 extends Vue {

}
</script>

<style lang="scss" scoped>
#error-bg {
    background-image: linear-gradient(315deg, #ff8800 0%, #940000 100%);
}
</style>
