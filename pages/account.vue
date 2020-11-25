<template>
  <div class="grid">
    <div id="vs-app" class="theme-container">
      <Header></Header>
      <main class="page">
        <header class="header-page" style="width: 100%">
          <nuxt-link to="/" class="back-link router-link-active"
            ><i class="bx bx-left-arrow-alt"></i
          ></nuxt-link>
          <div class="header__content">
            <div class="flex-header" style="">
              <h1 id="header-title col-12">Михайлов Моисей!</h1>
              <vs-button border>Редактировать</vs-button>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
            viewBox="0 0 160 160"
            class="header-effect"
          >
            <path
              id="Trazado_200"
              data-name="Trazado 200"
              d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
              transform="translate(0 10)"
              fill="#fff"
            ></path>
          </svg>
        </header>
        <div class="content__default">
          <div class="card">
            <div class="example">
              <div class="center examplex">
                <vs-row flex align="center" class="w-8">
                  <vs-button flat icon>
                    <i class='bx bxs-phone-outgoing'></i>
                  </vs-button>
                  <p class="mb-0">+7 (999) 8082554</p>
                  <vs-button
                    icon
                    color="warn"
                    gradient
                    :active="active == 1"
                    @click="active = 1"
                  >
                    <i class="bx bxs-bell-ring"></i>
                  </vs-button>
                  <p class="mb-0">
                    <a href="mailto:mihaylovcorp@yandex.ru"
                      >mihaylovcorp@yandex.ru</a
                    >
                  </p>
                </vs-row>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="example">
              <div class="center examplex">
                <vs-table>
                  <template #thead>
                    <vs-tr>
                      <vs-th width="300px"> # | Изделие </vs-th>
                      <vs-th width="90px"> Дата выкупа </vs-th>
                      <vs-th width="90px">
                        Дата окончания льготного периода
                      </vs-th>
                      <vs-th width="100px"> Процент % </vs-th>
                      <vs-th width="180px"> Займ </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in TicketList">
                      <vs-td>
                        <strong class="">{{ tr.NumTicket }}</strong> <br />
                        <p class="fs-1">{{ tr.Goods[0].OpisanieKratkoe }}</p>
                      </vs-td>
                      <vs-td>{{ tr.DateV }}</vs-td>
                      <vs-td>{{ tr.DateR }}</vs-td>
                      <vs-td>
                        <p class="fw-400 red fs-1-5">
                          {{ tr.SumProc }} ₽
                        </p>
                      </vs-td>
                      <vs-td>
                        <p class="fs-1-8">
                          {{ tr.Goods[0].SumCredit }} ₽
                        </p>
                      </vs-td>

                      <template #expand>
                        <div class="con-content">
                          <div>
                            <vs-avatar>
                              <i class="bx bxl-yelp"></i>
                            </vs-avatar>
                            <p>
                              {{ tr.Goods[0].OpisaniePolnoe }}
                            </p>
                          </div>
                          <div>
                            <vs-button color="#ff3e4e" danger border
                              >Оплатить</vs-button
                            >
                          </div>
                        </div>
                      </template>
                    </vs-tr>
                  </template>
                </vs-table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import Header from "~/components/main/Header.vue";
import Sidebar from "~/components/main/Sidebar.vue";
const axios = require("axios");

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      activeSidebar: false,
      activeMenu: "guide",
      active: false,
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
      selected: [],
      TicketList: [
        {
          Adress: "105215, Москва г, Щёлковское ш, дом 54",
          CountDays: 15,
          DateR: "2021-01-03T00:00:00",
          DateV: "2020-12-03T00:00:00",
          DateZ: "2020-11-04T00:00:00",
          Docs: [
            {
              Doc: "Залог",
              DocCountDays: "",
              DocData: "04.11.2020",
              DocSumCredit: 14600,
              DocSumCreditOplata: 0,
              DocSumOplata: 0,
            },
          ],
          Goods: [
            {
              Kol: 1,
              Opisanie: "/ форма-звезда / поношено; поцарапано;",
              OpisanieKratkoe:
                "КУЛОН БЕЗ ВСТАВКИ, Зол. 585 (Р), общ. вес 5,62 г.",
              OpisaniePolnoe:
                "КУЛОН БЕЗ ВСТАВКИ, Золото 585 (Р), общ. вес 5,62 г., / форма-звезда / поношено; поцарапано;",
              Proba: "Золото 585 (Р)",
              SumCredit: 14600,
              TypeIzd: "КУЛОН БЕЗ ВСТАВКИ",
              Ves: 5.62,
            },
          ],
          NumTicket: "ЩЛ005627",
          OplataVozmozhna: true,
          RateDescription: {
            NameColumns: {
              Percent: "% в день",
              Period: "Период",
            },
            RateString:
              "Процентная ставка по займу: 0,35% в день↵Процентная ставка по просрочке: 0,00% в день",
            RateTable: [
              {
                Percent: "0,35",
                Period: "Процентная ставка по займу",
              },
              {
                Percent: "0,00",
                Period: "Процентная ставка по просрочке",
              },
            ],
            Type: "Простая",
          },
          SumBuyOut: 15366,
          SumCredit: 14600,
          SumProc: 766,
          SumVsego: 766,
          Tel: "+7 (499) 643-28-66",
          Torgi: false,
          WorkHours: "",
        },
        {
          Adress: "105215, Москва г, Щёлковское ш, дом 54",
          CountDays: 15,
          DateR: "2021-01-03T00:00:00",
          DateV: "2020-12-03T00:00:00",
          DateZ: "2020-11-04T00:00:00",
          Docs: [
            {
              Doc: "Залог",
              DocCountDays: "",
              DocData: "04.11.2020",
              DocSumCredit: 14600,
              DocSumCreditOplata: 0,
              DocSumOplata: 0,
            },
          ],
          Goods: [
            {
              Kol: 1,
              Opisanie: "/ форма-звезда / поношено; поцарапано;",
              OpisanieKratkoe:
                "КУЛОН БЕЗ ВСТАВКИ, Зол. 585 (Р), общ. вес 5,62 г.",
              OpisaniePolnoe:
                "КУЛОН БЕЗ ВСТАВКИ, Золото 585 (Р), общ. вес 5,62 г., / форма-звезда / поношено; поцарапано;",
              Proba: "Золото 585 (Р)",
              SumCredit: 14600,
              TypeIzd: "КУЛОН БЕЗ ВСТАВКИ",
              Ves: 5.62,
            },
          ],
          NumTicket: "ЩЛ005627",
          OplataVozmozhna: true,
          RateDescription: {
            NameColumns: {
              Percent: "% в день",
              Period: "Период",
            },
            RateString:
              "Процентная ставка по займу: 0,35% в день↵Процентная ставка по просрочке: 0,00% в день",
            RateTable: [
              {
                Percent: "0,35",
                Period: "Процентная ставка по займу",
              },
              {
                Percent: "0,00",
                Period: "Процентная ставка по просрочке",
              },
            ],
            Type: "Простая",
          },
          SumBuyOut: 15366,
          SumCredit: 14600,
          SumProc: 766,
          SumVsego: 766,
          Tel: "+7 (499) 643-28-66",
          Torgi: false,
          WorkHours: "",
        },
      ],
    };
  },
  created: function () {},
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
    axios
      .get(
        "https://goldlombard.ru/template/lombard/scripts/service.php?action=getStatus"
      )
      .then((response) => (this.courses = response.data));
  },
};
</script>

<style>
@import url("assets/css/main.css");

@import url("assets/css/themes.css");
</style>

