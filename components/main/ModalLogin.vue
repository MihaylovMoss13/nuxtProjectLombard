<template>
  <div class="center">
    <vs-dialog
      blur
      v-model="activeModalLogin"
      dark
      :value="changeModalPopupLogin"
    >
      <template #header>
        <h4 class="not-margin">Войти <b>в личный кабинет</b></h4>
      </template>

      <div class="con-form">
        <vs-input type="tel" v-model="phone" placeholder="Ваш телефон">
          <template #icon>
            <i class="bx bx-phone"></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
            <nuxt-link to="/account">Отправить</nuxt-link>
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  props: {
    activeModalLogin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    changeModalPopupLogin() {
      this.$emit("changeThisModalLogin", this.activeModalLogin);
    },
  },
};
</script>