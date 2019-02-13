<template>
    <header class="m-page-header m-vh-100">
        <div class="m-page-header-content m-text-white">
            <h1 class="m-fade-in">{{ $t('404.header.title') }}</h1>
        </div>
        <m-svg-container id="error-bg" class="m-position-absolute m-fill">
        </m-svg-container>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MSvgContainer from '@/components/ui/svg/SvgContainer.vue';

@Component({
  components: {
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
