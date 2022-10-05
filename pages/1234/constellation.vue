<script>
export default { name: 'constellation-page' }
</script>

<template>
<div>
  <header>
    <h1>My Twinkl Constellation</h1>
    <p class="subtitle">The twinkls I watch.</p>
    <nav>
      <nuxt-link to="/">Log Out</nuxt-link>
    </nav>
  </header>

  <aside>
    <twinkl-menu />
  </aside>

  <main>
    <ul>
      <li><nuxt-link to="/1234">John</nuxt-link></li>
    </ul>
  </main>
</div>
</template>
