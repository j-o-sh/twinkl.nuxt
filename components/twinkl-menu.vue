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
    <li><nuxt-link to="/1234">Preview</nuxt-link></li>
    <li>My Twinkl</li>
    <li><nuxt-link to="/1234/constellation">My Constellation</nuxt-link></li>
    <li><nuxt-link to="/">Log Out</nuxt-link></li>
  </ul>
</nav>
</template>
