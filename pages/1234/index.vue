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
    <twinkl-menu />
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
