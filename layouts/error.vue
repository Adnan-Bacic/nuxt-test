<template>
  <div>
      <h1>error</h1>
      <NuxtLink to="/">
      index
    </NuxtLink>
  </div>
</template>

<script>
export default {
  head: {
    title: 'error page',
    meta: [
      {
        hid: 'error robots',
        name: 'robots',
        content: 'noindex'
      }
    ],
  }
}
</script>

<style>

</style>