<template>
  <div class="NuxtLogo">
    <nuxt-link to="/">
      <img
        class="logo"
        src="https://goldlombard.ru/template/img/ico/hlogo.png"
        width="180"
      />
    </nuxt-link>
  </div>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
}

.NuxtLogo img {
  padding: 0 10px
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>