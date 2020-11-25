<template>
  <div class="center">
    <vs-dialog
      blur
      v-model="activeModal"
      dark
      :value="changeModalPopup"
    >
      <template #header>
        <h4 class="not-margin">Оставить <b>заявку</b></h4>
      </template>

      <div class="con-form">
        <vs-input v-model="input1" placeholder="Ваше имя">
          <template #icon>
            <i class="bx bx-user"></i>
          </template>
        </vs-input>
        <vs-input type="tel" v-model="input2" placeholder="Ваш телефон">
          <template #icon>
            <i class="bx bx-phone"></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Отправить </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  props: {
    activeModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input1: "",
      input2: "",
    };
  },
  methods: {
    changeModalPopup() {
      this.$emit("changeThisModal", this.activeModal);
    },
  },
};
</script>