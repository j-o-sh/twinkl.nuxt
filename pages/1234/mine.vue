<script>
export default { name: 'mine-page' }
</script>

<template>
<div>
  <header>
    <h1>My Twinkl</h1>
    <p class="subtitle">This is my page.</p>
  </header>

  <aside>
    <!-- this only exists when logged in -->
    <nav>
      <ul>
        <li><nuxt-link to="/1234">Preview</nuxt-link></li>
        <li>My Twinkl</li>
        <li><nuxt-link to="/1234/constellation">My Constellation</nuxt-link></li>
        <li><nuxt-link to="/">Log Out</nuxt-link></li>
      </ul>
    </nav>
  </aside>

  <main>
    <ul>
      <li>A Wish</li>
      <li>A Wish</li>
      <li>A Wish</li>
    </ul>
  </main>
</div>
</template>
