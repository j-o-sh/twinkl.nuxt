<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useProfiles from '~/stores/profiles'
import usePaths from '../composables/usePaths'

const router = useRouter()
const profiles = useProfiles()
const paths = usePaths()

const loggedIn = ref(profiles.loggedIn)

function signup ({ target }) {
  const name = new FormData(target).get('name')
  const id = name.toLowerCase()
  console.log(`signing up as ${name} (${id}).`)
  if (!profiles.find(id)) {
    console.log('Creating profile...')
    profiles.create({ id, name })
  }
  profiles.login(id)
  router.push(paths.homeOf(id))
}
</script>

<template>
  <router-link :to="paths.home" v-if="loggedIn">Go to my Twinl</router-link>
  <details v-else>
    <summary>Get Started!</summary>
    <form @submit.prevent="signup">
      <label>Name<input name="name"></label>
      <input type="submit" value="Sign Up!">
    </form>
  </details>
</template>
