<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
    <div class="container mx-auto px-6 lg:px-20 h-16 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3 group" aria-label="Início">
        <img src="/logo-ea.svg" alt="Eduarda Ayres Advogada" class="h-8 w-auto" />
      </a>
      <nav class="hidden md:flex items-center gap-6 text-slate-700">
        <a href="#services" class="hover:text-primary">Serviços</a>
        <a href="#about" class="hover:text-primary">Sobre</a>
        <a href="#differentials" class="hover:text-primary">Diferenciais</a>
        <a href="#faq" class="hover:text-primary">FAQ</a>
        <a href="#contact" class="hover:text-primary">Contato</a>
      </nav>
      <div class="flex items-center gap-3">
        <button class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 text-slate-700" @click="toggle = !toggle" aria-label="Abrir menu">
          <span>☰</span>
        </button>
      </div>
    </div>
    <div v-if="toggle" class="md:hidden border-t border-black/5 bg-white/90">
      <div class="container mx-auto px-6 lg:px-20 py-3 flex flex-col gap-3">
        <a href="#services" @click="toggle=false" class="py-1">Serviços</a>
        <a href="#about" @click="toggle=false" class="py-1">Sobre</a>
        <a href="#differentials" @click="toggle=false" class="py-1">Diferenciais</a>
        <a href="#faq" @click="toggle=false" class="py-1">FAQ</a>
        <a href="#contact" @click="toggle=false" class="py-1">Contato</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const toggle = ref(false)
</script>
