<template>
  <p>SSR</p>
  <pre>{{ data?.[0] }} </pre>
  <p>Client-only</p>
  <pre>{{ clientData?.[0] }} </pre>

</template>
<script lang="ts" setup>
const { data } = await useFetch<Record<string, any>[]>('https://jsonplaceholder.typicode.com/posts', {
  onRequest() {
    console.log('request...')
  }
});

const { data: clientData } = await useFetch<Record<string, any>[]>('https://jsonplaceholder.typicode.com/posts', {
  server: false,
  onRequest() {
    console.log('Client-only request...')
  }
});

</script>  