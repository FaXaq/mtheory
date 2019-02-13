<template>
    <div class="login">
        <header class="m-page-header m-bg-black m-text-white  m-small-page-header">
            <div class="m-page-header-content">
                <h1>{{ $t('login.title') }}</h1>
            </div>
        </header>
        <main class="m-main">
            <div class="m-flex">
                <div class="m-flex-grow-1  m-padding-l">
                    <h3>{{ $t('login.login.title') }}</h3>
                    <p>{{ $t('login.login.description') }}</p>
                    <form @submit.prevent="login" class="m-flex m-flex-col">
                        <input
                            type="text"
                            name="username"
                            class="m-input-text m-margin-v-s"
                            v-model="loginForm.username"
                            :placeholder="$t('login.login.form.username')">
                        <input
                            type="password"
                            name="passwordConfirmation"
                            class="m-input-text m-margin-v-s"
                            v-model="loginForm.password"
                            :placeholder="$t('login.login.form.password')">
                        <input
                            type="submit"
                            class="m-btn m-margin-v-m"
                            :value="$t('login.login.form.action')">
                    </form>
                </div>
                <div class="m-flex-grow-1 m-padding-l">
                    <h3>{{ $t('login.singup.title') }}</h3>
                    <p>{{ $t('login.signup.description') }}</p>
                    <form @submit.prevent="signup" class="m-flex m-flex-col">
                        <input
                            type="text"
                            name="username"
                            class="m-input-text"
                            v-model="signupForm.username"
                            :placeholder="$t('login.signup.form.username')">
                        <input
                            type="password"
                            name="password"
                            class="m-input-text"
                            v-model="signupForm.password"
                            :placeholder="$t('login.signup.form.password')">
                        <input
                            type="password"
                            name="passwordConfirmation"
                            class="m-input-text"
                            v-model="signupForm.passwordConfirmation"
                            :placeholder="$t('login.signup.form.passwordConfirmation')">
                        <input
                            type="email"
                            name="email"
                            class="m-input-text"
                            v-model="signupForm.email"
                            :placeholder="$t('login.signup.form.email')">
                        <input
                            type="email"
                            name="emailConfirmation"
                            class="m-input-text"
                            v-model="signupForm.emailConfirmation"
                            :placeholder="$t('login.signup.form.emailConfirmation')">
                        <input
                            type="submit"
                            :value="$t('login.signup.action')"
                            class="m-btn">
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import i18n from '@/i18n';

@Component({})
export default class Login extends Vue {
    private loginForm: { [key: string]: string } = {};

    private loading: boolean = false;

    private signupForm: { [key: string]: string } = {};

    async login() {
      try {
        this.loading = true;
        const res = await this.$store.dispatch('login', {
          username: this.loginForm.username,
          password: this.loginForm.password,
        });

        if (res) {
          this.$router.resolve('/');
        }
      } catch (err) {
        this.$emit('notify', {
          level: 'error',
          message: err.response.data.error,
        });
      } finally {
        this.loading = false;
      }
    }

    async signup() {
      try {
        this.loading = true;
        const res = await this.$store.dispatch('signup', {
          username: this.signupForm.username,
          password: this.signupForm.password,
          passwordConformation: this.signupForm.passwordConfirmation,
          email: this.signupForm.email,
          emailConfirmation: this.signupForm.emailConfirmation,
        });
      } catch (err) {
        this.$emit('notify', {
          level: 'error',
          message: err.response.data.error,
        });
      } finally {
        this.loading = false;
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
