<script setup>
import { useRouter, useRoute } from 'vue-router'
import useProfiles from '~/stores/profiles'

const router = useRouter()
const route = useRoute()
const profiles = useProfiles()

function logout () {
  profiles.deactivateProfile()
  router.push('/')
}

function currentProfile () {
  const match = route.path.match(/^\/(\w+)\/?$/)
  return match && profiles.find(match[1])
}

// TODO investigate: useRefs seems to fail on newly created profiles.
// Maybe because the proxy needs to shift from undefined to a value?
function activeProfile () {
  return profiles.active
}

function onWishlistRoute () {
  return !!currentProfile()
}

function onMyTwinkl () {
  const match = route.path.match(/^\/(\w+)\/mine\/?$/)
  return match && profiles.active &&
    match[1].toLowerCase() === profiles.active.name.toLowerCase()
}

function myLink (subpath = '') {
  return profiles.active && `/${profiles.active.name}/${subpath}`
}

function currentProfileName () {
  return currentProfile()?.name.replace(/^(\w)/, l => l.toUpperCase())
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
    <li v-if="onWishlistRoute()">{{ currentProfileName() }}'s Twinkl</li>
    <!-- Only when on 'My Twinkl' -->
    <li v-if="onMyTwinkl()"><nuxt-link :to="myLink()">Preview</nuxt-link></li>
    <ui-vdiv v-if="activeProfile()">
      <li><nuxt-link :to="myLink('mine')">My Twinkl</nuxt-link></li>
      <li><nuxt-link :to="myLink('constellation')">My Constellation</nuxt-link></li>
      <li><button @click="logout">Log Out!</button></li>
    </ui-vdiv>
    <li v-else><nuxt-link to="/">Get Started!</nuxt-link></li>
  </ul>
</nav>
</template>
