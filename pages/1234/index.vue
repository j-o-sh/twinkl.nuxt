<script>
export default { name: 'wishlist-page' }
</script>

<template>
<div>
  <header>
    <h1>John's Twinkl</h1>
    <p class="subtitle">These are john's wishes.</p>
  </header>

  <aside>
    <!-- this only exists when logged in -->
    <nav>
      <ul>
        <li>John's Twinkl</li>
        <li><nuxt-link to="/1234/mine">My Twinkl</nuxt-link></li>
        <li><nuxt-link to="/1234/constellation">My Constellation</nuxt-link></li>
        <li><nuxt-link to="/">Log Out</nuxt-link></li>
      </ul>
    </nav>
  </aside>

  <main>
    <nav>
      <!-- only if I am not John -->
      <button>Watch!</button>
    </nav>
    <ul>
      <li>A Wish</li>
      <li>A Wish</li>
      <li>A Wish</li>
    </ul>
  </main>
</div>
</template>
