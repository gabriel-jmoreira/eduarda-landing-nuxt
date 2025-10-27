<template>
  <section id="hero" class="py-12 lg:py-20">
    <div class="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
      <div class="order-2 lg:order-1">
        <div class="w-full aspect-[4/5] lg:aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
          <img src="/hero-photo.jpg" alt="Foto da Dra" class="w-full h-full object-cover object-top" loading="eager" decoding="async" />
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <div class="bg-primary text-white rounded-3xl p-8 lg:p-10 shadow-xl">
          <h1 class="font-serif text-4xl lg:text-6xl font-extrabold leading-tight">Direito Previdenciário
            <span class="block">Especializado</span>
          </h1>
          <p class="mt-5 text-lg/7 text-white/90 max-w-xl">
            Garantimos seu direito à aposentadoria e benefícios. Atendimento técnico para conquistar o que você merece.
          </p>
          <div class="mt-7">
            <a :href="whatsapp" target="_blank" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-primary font-semibold text-lg shadow hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-accent/30 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.373 0 .001 5.373 0 12c0 2.108.553 4.165 1.602 5.99L0 24l6.214-1.601A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.984-.49-3.847-1.48-5.52zM12 22c-1.88 0-3.656-.47-5.237-1.353l-.375-.213-3.693.953.983-3.595-.24-.385A9.873 9.873 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/><path d="M17.472 14.382l-1.01-.292a.999.999 0 0 0-1.106.357l-.43.565c-.46.605-1.2.995-1.992 1.031-1.863.095-3.53-.888-4.62-2.359-.72-.945-1.04-2.036-.9-3.11.11-.88.605-1.747 1.35-2.338l.38-.298a1 1 0 0 0 .247-1.31L7.77 5.92l-.002-.003a1 1 0 0 0-1.323-.335L4.3 7.05a1 1 0 0 0-.403 1.264c1.31 3.064 4.482 5.236 8.166 5.236.88 0 1.738-.11 2.548-.327l.478-.12a1 1 0 0 0 .707-.58l.96-2.266a1 1 0 0 0-.08-.939z"/></svg>
              <span>Falar com especialista</span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const whatsapp = "https://wa.me/5521982772521"
</script>
