<template>
  <div>
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
</template>

<script>
  name: 'sidebar'
</script>