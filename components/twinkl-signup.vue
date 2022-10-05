<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function gotoMyTwinkl () {
  router.push('/1234/mine')
}
</script>

<template>
  <button @click="gotoMyTwinkl()">Sign up!</button>
</template>
