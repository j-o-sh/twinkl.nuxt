<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import useProfiles from '~/stores/profiles'
import usePaths from '../composables/usePaths'

const router = useRouter()
const profiles = useProfiles()
const paths = usePaths()

const currentProfile = computed(() => profiles.find(paths.currentId.value))
const onWishlist = ref(paths.currentIsWishlist)
const onHome = ref(paths.currentIsHome)

function logout () {
  profiles.logout()
  router.push(paths.root.value)
}
</script>

<template>
<!--
  The whole nav only renders when logged in. Otherwise, only the 'Go home'
  option will render, not as 'Log Out' but as 'Twinkl Home'
-->
<nav>
  <div style="border: 1px dashed">
    current: {{paths}}
  </div>
  <ul>
    <!-- Only when on John's Twinkl -->
    <li v-if="onWishlist">{{ currentProfile?.name }}'s Twinkl</li>
    <!-- Only when on 'My Twinkl' -->
    <li v-if="onHome"><nuxt-link :to="paths.wishlist">Preview</nuxt-link></li>
    <ui-vdiv v-if="profiles.loggedIn">
      <li><nuxt-link :to="paths.home">My Twinkl</nuxt-link></li>
      <li><nuxt-link :to="paths.constellation">My Constellation</nuxt-link></li>
      <li><button @click="logout">Log Out!</button></li>
    </ui-vdiv>
    <li v-else><nuxt-link :to="paths.root">Get Started!</nuxt-link></li>
  </ul>
</nav>
</template>
