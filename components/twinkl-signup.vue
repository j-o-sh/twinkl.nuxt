<script setup>
import { useRouter } from 'vue-router'
import useProfiles from '~/stores/profiles'

const router = useRouter()
const profiles = useProfiles()
const myTwinkl = () => profiles.active && `/${profiles.active.name}/mine`

function signup ({ target }) {
  const name = new FormData(target).get('name')
  console.log(`signing up as ${name}.`)
  if (!profiles.find(name)) {
    console.log('Creating profile...')
    profiles.create({ name })
  }
  profiles.activate(name)
  router.push(myTwinkl())
}
</script>

<template>
  <router-link :to="myTwinkl()" v-if="profiles.active">Go to my Twinl</router-link>
  <details v-else>
    <summary>Get Started!</summary>
    <form @submit.prevent="signup">
      <label>Name<input name="name"></label>
      <input type="submit" value="Sign Up!">
    </form>
  </details>
</template>
