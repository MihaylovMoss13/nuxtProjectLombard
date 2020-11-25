<template>
  <div>
    <vs-sidebar v-model="activeMenu" :open.sync="activeSidebar">
      <template #logo>
        <vs-button @click="changeSidebar" flat icon>
          <i class='bx bx-x'></i>
        </vs-button>
        <HeaderLogo></HeaderLogo>
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
            <HeaderLogo></HeaderLogo>
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
  import HeaderLogo from '~/components/main/HeaderLogo.vue';

  export default {
    components: {
      HeaderLogo
    },
    props: {
      activeSidebar: {
        type: Boolean,
        default: false
      },
      activeMenu: {
        type: String,
        default: 'home',
      }
    },
    data() {
      return {

      }
    },
    methods: {
      changeSidebar() {
        this.activeSidebar = !this.activeSidebar;
        this.$emit('changeSidebarMenu', this.activeSidebar);
      }
    }
  }
</script>