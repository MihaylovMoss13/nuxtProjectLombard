<template>
  <div class="grid">
    <div id="vs-app" class="theme-container">
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
          <nuxt-link to="/">
            <img
              class="logo"
              src="https://goldlombard.ru/template/img/ico/hlogo.png"
              width="180"
            />
          </nuxt-link>
        </template>
        <vs-navbar-item :activeMenu="activeMenu == 'home'" id="home"><nuxt-link to="/index">Главная</nuxt-link></vs-navbar-item>
        <vs-navbar-item :activeMenu="activeMenu == 'docs'" id="docs">Ломбард</vs-navbar-item>
        <vs-navbar-item :activeMenu="activeMenu == 'components'" id="components">О компании</vs-navbar-item>
        <vs-navbar-item :activeMenu="activeMenu == 'license'" id="license"><i class="bx bx-map fs-1"></i> Адреса</vs-navbar-item>
        <template #right>
          <vs-button flat><nuxt-link to="/account">Вход</nuxt-link></vs-button>
          <vs-button border>Оставить заявку</vs-button>
        </template>
      </vs-navbar>
      <vs-sidebar absolute v-model="activeMenu" :open.sync="activeSidebar">
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class="bx bx-home"></i>
          </template>
          Личный кабинет
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <i class="bx bx-grid-alt"></i>
          </template>
          Мои займы
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <i class="bx bxs-music"></i>
          </template>
          Music
        </vs-sidebar-item>
        <vs-sidebar-item id="donate">
          <template #icon>
            <i class="bx bxs-donate-heart"></i>
          </template>
          Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
          <template #icon>
            <i class="bx bx-drink"></i>
          </template>
          Drink
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
          <template #icon>
            <i class="bx bxs-shopping-bags"></i>
          </template>
          Shopping
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <i class="bx bx-chat"></i>
          </template>
          Chat
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <img
                src="https://shop-kc.com/include/Korean-Cream_160x80.png"
                alt=""
              />
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class="bx bx-bell"></i>

              <template #badge> 28 </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
      <main class="page page-login">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide><img src="https://goldlombard.ru/template/img/tmp/slide1.jpg"></swiper-slide>
          <swiper-slide><img src="https://goldlombard.ru/template/img/tmp/slide2.jpg"></swiper-slide>
          <swiper-slide><img src="https://goldlombard.ru/template/img/tmp/slide3.jpg"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="content__default">
          <div class="card login-card">
            <div class="example">
              <div class="center examplex">
                <h2 class="subtitle">Уважаемый Клиент!</h2>
                <h4>В Личном кабинете Вы можете узнать свою задолженность и оплатить проценты</h4>
                <form @submit.prevent="formSubmit" class="center form_login">
                  <vs-input
                    label-placeholder="Номер телефона"
                    type="tel"
                    v-model="Tel"
                    class="form_phone phonenumber"
                  >
                    <template #icon>
                      <i class="bx bx-lock-open-alt"></i>
                    </template>
                  </vs-input>

                  <vs-button
                    gradient
                    :active="active == 1"
                    @click="active = 1"
                  >
                    Войти
                  </vs-button>
                </form>
                <div class="center form_login">
                  <div id="sms-message-status" class="center">
                    {{ Message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside class="sidebar">
        <div class="content-sidebar">
          <ul class="sidebar-links">
            <li class="">
              <section class="sidebar-group collapsable depth-0">
                <p class="sidebar-heading open">
                  <span>Ломбарды в Москве</span> &nbsp; <i class='bx bx-trip bx-burst-hover fs-1' ></i>
                </p>
                <ul class="sidebar-links sidebar-group-items">
                  <li class="">
                    <nuxt-link to="/lombardy-maps" class="sidebar-link" >Ломбарды на карте</nuxt-link>
                  </li>
                  <li class="">
                    <nuxt-link to="/lombardy-list" class="sidebar-link" >Ломбарды списком</nuxt-link>
                  </li>
                </ul>
              </section>
            </li>
            <li class="">
              <section class="sidebar-group collapsable depth-0">
                <p class="sidebar-heading open"><span>Каталог ювелирных изделий</span> <i class='bx bx-pulse bx-burst-hover fs-1'></i></p>
                <ul class="sidebar-links sidebar-group-items">
                  <li class=""><nuxt-link to="/shop/koltsa/" class="sidebar-link">Кольца</nuxt-link></li>
                  <li class=""><nuxt-link to="/shop/brasleti" class="sidebar-link">Браслеты</nuxt-link></li>
                  <li class=""><nuxt-link to="/shop/sergi/" class="sidebar-link">Серьги</nuxt-link></li>
                  <li class=""><nuxt-link to="/shop/koltsa/" class="sidebar-link">Кольца</nuxt-link></li>
                </ul>
              </section>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
const axios = require("axios");

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeSidebar: false,
      activeMenu: "guide",
      active: false,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
      },
      Tel: "",
      Code: "",
      Message: "Проверочный код",
      errors: [],
      editActive: false,
      edit: null,
      editProp: "",
      search: "",
      allCheck: false,
      page: 1,
      max: 3,
      active: 0,
      selected: [],
    };
  },
  created: function () {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    formSubmit() {
      this.signIn();
    },
    signIn() {
      fetch("https://goldlombard.ru/template/lombard/scripts/service.php", {
        method: "POST",
        data: JSON.stringify({
          action: "getInfo",
          Tel: "+7 (999) 821-49-48",
          Date: "2020-11-18T14:46:48",
        }),
        headers: {
          ":authority": "goldlombard.ru",
          ":method": "POST",
          // ":path": "/template/lombard/scripts/service.php",
          ":scheme": "https",
          "accept-encoding": "gzip, deflate, br",
          "cache-control": "no-cache",
          "content-type": "application/json; charset=UTF-8",
        },
      });
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
    this.swiper.slideTo(3, 1000, false);
    axios
      .get(
        "https://goldlombard.ru/template/lombard/scripts/service.php?action=getStatus"
      )
      .then((response) => (this.selected = response.data));
  },
};
</script>

<style>
  @import url("assets/css/main.css");
  @import url("assets/css/themes.css");
  @import url("node_modules/swiper/swiper-bundle.css");
</style>