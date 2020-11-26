<template>
  <div class="grid">
    <div id="vs-app" class="theme-container">
      <Header></Header>
      <main class="page page-home">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Высокая <br>оценка изделий<br> с бриллиантами</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Выдача займа  <br><b style="font-size: 115%;">под залог столового <br>серебра</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Надежный ломбард<br> Работаем <b>с 1993 года</b> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Индивидуальный <br>подход к <br>каждому клиенту</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Новым клиентам <br><b style="font-size: 115%;"> займ под 7,9%!</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Оценка <br><b style="font-size: 115%;">цветных<br> драгоценных<br> камней</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Высокая оценка <br><b style="font-size: 115%;">брендовых <br>изделий</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide style="background-image:url(https://goldlombard.ru/template/img/tmp/slide1.jpg)" class="slider">
            <div class="slide-one">
              <div class="td">
                <div class="stext">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="wrp">
                    <div class="txt img" style="background-image:url(https://goldlombard.ru/template/img/tmp/bl.png);">
                      <p>Социальный займ<br> под <b style="font-size: 125%;">6,9%</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="center content__default">
          <h2>Полезные статьи и новости</h2>
          <vs-card-group>
            <vs-card
              v-for="card in cards"
              :key="card.id"
              type="4"
            >
              <template #title>
                <h3>{{ card.name }}</h3>
              </template>
              <template #img>
                <img :src="`${card.image}`" :alt="`${card.name}`">
              </template>
              <template #text>
                <p>
                  {{ card.text }}
                </p>
              </template>
              <template #interactions>
                <vs-button danger icon>
                  <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </template>
            </vs-card>
          </vs-card-group>
          <vs-button danger icon>
            <i class='bx bx-news'></i> &nbsp;Все новости
          </vs-button>
        </div>
        <div class="content__default">
          <div class="card login-card">
            <div class="example">
              <div class="center examplex"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "~/components/main/Header.vue";
const axios = require("axios");
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

export default {
  components: {
    Header,
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
      cards: [
        {
          id: 1,
          name: 'Информация по отделениям: Чертаново, Молодежное, Юго-Западное',
          image: 'https://avatars.mds.yandex.net/get-altay/934739/2a0000015f515bf21ce738f577522e6aa81c/XXXL',
          text: 'Залоги принимаются до 21.00',
        },
        {
          id: 2,
          name: 'Важная информация по отделению "Черемушки"',
          image: 'https://avatars.mds.yandex.net/get-altay/2433982/2a000001709ad175457185e07dd86d90b9b2/XXXL',
          text: 'Возобновляет работу по прежнему адресу',
        }
      ],
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
  },
};
</script>

<style>
  @import url("assets/css/main.css");
  @import url("assets/css/themes.css");
  @import url("node_modules/swiper/swiper-bundle.css");
</style>