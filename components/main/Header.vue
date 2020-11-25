<template>
  <header>
    <vs-navbar
      square
      shadow
      fixed
      relative
      center-collapsed
      class="navbar"
      v-model="activeMenu"
    >
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu"></i>
        </vs-button>
        <HeaderLogo></HeaderLogo>
      </template>
      <vs-navbar-item :activeMenu="activeMenu == 'home'" id="home"
        ><nuxt-link to="/">Главная</nuxt-link></vs-navbar-item
      >
      <vs-navbar-item :activeMenu="activeMenu == 'docs'" id="docs"
        >Ломбард</vs-navbar-item
      >
      <vs-navbar-item :activeMenu="activeMenu == 'components'" id="components"
        >О компании</vs-navbar-item
      >
      <vs-navbar-item :activeMenu="activeMenu == 'license'" id="license"
        ><i class="bx bx-map fs-1"></i> Адреса</vs-navbar-item
      >
      <template #right>
        <vs-button
          v-if="!currentAccount"
          @click="activeModalLogin=!activeModalLogin"
          border
        >
          <i class="bx bx-log-in fs-1"></i> &nbsp;Войти</vs-button
        >
        <vs-tooltip bottom shadow not-hover v-model="activeTooltipLogin" v-if="currentAccount">
          <vs-button danger @click="activeTooltipLogin = !activeTooltipLogin">
            <nuxt-link to="/account">
              <i class="bx bx-log-in fs-1"></i> &nbsp;Личный кабинет
            </nuxt-link>
          </vs-button>
          <template #tooltip>
            <div class="content-tooltip">
              <h4 class="center">Михайлов Моисей</h4>
              <p>Вы точно хотите выйти из личного кабинета?</p>
              <footer>
                <vs-button
                  @click="logoutNotification('bottom-right', 'success')"
                  danger
                  block
                >
                  <i class="bx bx-log-in fs-1"></i> &nbsp; Выйти
                </vs-button>
                <vs-button
                  @click="activeTooltipLogin = false"
                  transparent
                  dark
                  block
                >
                  Отменить
                </vs-button>
              </footer>
            </div>
          </template>
        </vs-tooltip>
        <vs-button
          @click="activeModal=!activeModal"
          border
        >
          <i class="bx bx-phone-call fs-1"></i> &nbsp;Оставить
          заявку</vs-button
        >
      </template>
      {{currentPageAccount}}
    </vs-navbar>
    <HeaderSidebar
      :activeSidebar="activeSidebar"
      :activeMenu="activeMenu"
      @changeSidebarMenu="changeSidebar"
    />
    <Modal
      :activeModal="activeModal"
      @changeThisModal="changeThisModal"
    />
    <ModalLogin
      :activeModalLogin="activeModalLogin"
      @changeThisModal="changeThisModal"
    />
  </header>
</template>

<script>
import HeaderLogo from "~/components/main/HeaderLogo.vue";
import HeaderSidebar from "~/components/main/HeaderSidebar.vue";
import Modal from "~/components/main/Modal.vue";
import ModalLogin from "~/components/main/ModalLogin.vue";

export default {
  components: {
    HeaderLogo,
    HeaderSidebar,
    Modal,
    ModalLogin,
  },
  computed: {
    currentPageAccount() {
      if(this.$route.name == 'account')
        this.currentAccount = true
    }
  },
  data() {
    return {
      activeSidebar: false,
      activeMenu: "guide",
      activeTooltipLogin: false,
      activeModal: false,
      currentAccount: false,
      activeModalLogin: false
    };
  },
  methods: {
    changeSidebar(data) {
      this.activeSidebar = data;
    },
    changeThisModal(data) {
      this.activeModal = data;
    },
    logoutNotification(position = null, color) {
      this.activeTooltipLogin = !this.activeTooltipLogin;
      const noti = this.$vs.notification({
        progress: "auto",
        color,
        position,
        title: "Авторизация на сайте",
        text: `Вы успешно вышли с личного кабинета 👉 Ломбард Меридиан`,
      });
    },
    changeThisModalLogin(data) {
      this.activeModalLogin = data;
    }
  },
};
</script>