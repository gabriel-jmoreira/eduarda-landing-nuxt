<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'pt-BR' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap' }
  ],
  titleTemplate: (titleChunk) => {
    const base = 'Dra. Eduarda Ayres — Direito de Família';
    return titleChunk ? `${titleChunk} | ${base}` : base;
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0b132b' },
    { name: 'description', content: 'Atendimento humanizado e estratégico em Direito de Família.' }
  ]
})
</script>

<style>
html, body {
  background-color: #f8f7f4; /* cream */
}
</style>
