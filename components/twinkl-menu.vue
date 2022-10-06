<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useProfiles from '~/stores/profiles'

const router = useRouter()
const { active } = storeToRefs(useProfiles())
const { deactivateProfile } = useProfiles()

function logout () {
  deactivateProfile()
  router.push('/')
}
</script>

<template>
<!--
  The whole nav only renders when logged in. Otherwise, only the 'Go home'
  option will render, not as 'Log Out' but as 'Twinkl Home'
-->
<nav>
  <ul>
    <!-- Only when on John's Twinkl -->
    <li>John's Twinkl</li>
    <!-- Only when on 'My Twinkl' -->
    <li v-if="active"><nuxt-link to="/1234">Preview</nuxt-link></li>
    <li v-if="active"><nuxt-link to="/1234/mine">My Twinkl</nuxt-link></li>
    <li v-if="active"><nuxt-link to="/1234/constellation">My Constellation</nuxt-link></li>
    <li v-if="active"><button @click="logout">Log Out!</button></li>
    <li v-else><nuxt-link to="/">Get Started!</nuxt-link></li>
  </ul>
</nav>
</template>
