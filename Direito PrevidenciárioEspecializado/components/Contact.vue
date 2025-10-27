<template>
  <section id="contact" class="container mx-auto px-6 lg:px-20 py-12 lg:py-20">
    <h2 class="font-serif text-3xl lg:text-4xl font-bold mb-8 text-primary">Fale Conosco</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <form class="p-8 rounded-3xl bg-white border border-black/5 shadow-sm" @submit.prevent="onSubmit">
        <div class="mb-5">
          <label class="block text-sm font-medium mb-2 text-slate-700">Nome</label>
          <input v-model="form.name" class="w-full border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition" required />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-medium mb-2 text-slate-700">Email</label>
          <input v-model="form.email" type="email" class="w-full border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition" required />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-medium mb-2 text-slate-700">Mensagem</label>
          <textarea v-model="form.message" class="w-full border border-black/10 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-accent/50 transition" rows="4" required></textarea>
        </div>
        <div class="mb-4">
          <label class="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" class="mt-1 rounded border-black/10" required />
            <span>Autorizo o contato e concordo com a política de privacidade.</span>
          </label>
        </div>
        <button type="submit" class="w-full px-6 py-3 rounded-full bg-accent text-primary font-medium shadow hover:opacity-95 transition">
          Enviar Mensagem
        </button>
      </form>

      <div class="space-y-6">
        <div class="p-6 rounded-3xl bg-primary text-white shadow-xl">
          <h3 class="font-semibold mb-4 text-lg">Contato Rápido</h3>
          <div class="space-y-4">
            <a :href="whatsapp" target="_blank" class="flex items-center gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.373 0 .001 5.373 0 12c0 2.108.553 4.165 1.602 5.99L0 24l6.214-1.601A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.984-.49-3.847-1.48-5.52zM12 22c-1.88 0-3.656-.47-5.237-1.353l-.375-.213-3.693.953.983-3.595-.24-.385A9.873 9.873 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/><path d="M17.472 14.382l-1.01-.292a.999.999 0 0 0-1.106.357l-.43.565c-.46.605-1.2.995-1.992 1.031-1.863.095-3.53-.888-4.62-2.359-.72-.945-1.04-2.036-.9-3.11.11-.88.605-1.747 1.35-2.338l.38-.298a1 1 0 0 0 .247-1.31L7.77 5.92l-.002-.003a1 1 0 0 0-1.323-.335L4.3 7.05a1 1 0 0 0-.403 1.264c1.31 3.064 4.482 5.236 8.166 5.236.88 0 1.738-.11 2.548-.327l.478-.12a1 1 0 0 0 .707-.58l.96-2.266a1 1 0 0 0-.08-.939z"/></svg>
              <div>
                <div class="font-medium">WhatsApp</div>
                <div class="text-sm text-white/80">+55 21 98277-2521</div>
              </div>
            </a>
            <a :href="instagram" target="_blank" rel="noopener noreferrer" @click="openInstagram" class="flex items-center gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3z"/><path d="M12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 1 0 12 7.5zM12 9A3 3 0 1 1 12 15 3 3 0 1 1 12 9zM17.5 6.5a1 1 0 1 1 0 2 1 1 0 1 1 0-2z"/></svg>
              <div>
                <div class="font-medium">Instagram</div>
                <div class="text-sm text-white/80">@eduardaayresadv</div>
              </div>
            </a>
          </div>
        </div>
        <div class="p-6 rounded-3xl bg-cream border border-black/5 shadow-sm">
          <h3 class="font-semibold mb-2 text-lg text-primary">Atendimento</h3>
          <p class="text-sm text-slate-600">Online e presencial. Resposta rápida em horário comercial.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const whatsapp = "https://wa.me/5521982772521"
const instagram = "https://www.instagram.com/eduardaayresadv/"

const form = reactive({ name: '', email: '', message: '' })
function onSubmit() {
  // For demo purposes we just open WhatsApp with message
  const text = `Olá, sou ${form.name}. ${form.message}`
  window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
}

// Função para garantir que o link abra corretamente
function openInstagram(event) {
  event.preventDefault()
  window.open(instagram, '_blank', 'noopener,noreferrer')
}
</script>
