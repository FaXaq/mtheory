<template>
    <div id="rythm">
        <m-page-header class="m-bg-black m-text-white m-position-relative">
            <m-page-header-content>
                <h1>{{ $t('learn.rythm.header.title') }}</h1>
                <p>{{ $t('learn.rythm.header.content') }}</p>
            </m-page-header-content>
            <m-svg-container class="m-position-absolute m-fill">
                <m-circle />
            </m-svg-container>
        </m-page-header>
        <m-main>
            <m-flex-container>
                <m-card class="m-margin-m">
                    <h2>test</h2>
                    <p>placeat molestiae vero saepe?</p>
                    <button class="m-btn m-bg-black m-text-white m-margin-v-m">Wat</button>
                </m-card>
                <m-card class="m-margin-m">
                    <h2>test2</h2>
                    <p>excepturi nobis ratione magnam, placeat molestiae vero saepe?</p>
                </m-card>
            </m-flex-container>
        </m-main>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MPageHeader from '@/components/ui/page/PageHeader.vue';
import MPageHeaderContent from '@/components/ui/page/PageHeaderContent.vue';
import MMain from '@/components/ui/page/Main.vue';
import MCircle from '@/components/ui/svg/Circle.vue';
import MSvgContainer from '@/components/ui/svg/SvgContainer.vue';
import MFlexContainer from '@/components/ui/containers/FlexContainer.vue';
import MCard from '@/components/ui/misc/Card.vue';

@Component({
  components: {
    MPageHeader,
    MPageHeaderContent,
    MMain,
    MFlexContainer,
    MCard,
    MSvgContainer,
  },
})
export default class LearnRythm extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
