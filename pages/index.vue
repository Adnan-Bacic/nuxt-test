<template>
<div>
  <h1>index1</h1>
  <div class="container">
    <div class="row">
      <div class="col-6">123</div>
      <div class="col-6">123</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'index description',
        name: 'description',
        content: 'Home page description'
      },
      { property: 'og:url', content: 'https://nordiskmusculupati.dk/' },
    ],
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
