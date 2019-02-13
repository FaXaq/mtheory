<template>
    <div class="thanks">
        <header class="m-page-header m-position-relative m-text-white m-bg-black">
            <div class="m-page-header-content">
                <h1 class="m-fade-in">{{ $t('thanks.title') }}</h1>
                <p class="m-fade-in-long">{{ $t('thanks.text') }}</p>
            </div>
        </header>
        <main class="m-main">
            <h3>Development resources :</h3>
            <ul>
                <li><a href="https://github.com/tensorflow/magenta-js/tree/master/music">Magenta</a></li>
                <li><a href="https://github.com/tensorflow/">Tensor Flow</a></li>
                <li><a href="https://jwt.io/">JWT</a></li>
            </ul>
            <h3>Tutorials :</h3>
            <ul>
                <li><a href="https://github.com/oleg-agapov/flask-jwt-auth">JWT API with Flask</a></li>
            </ul>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Thanks extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
