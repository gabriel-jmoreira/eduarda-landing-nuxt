<template>
  <section id="contact" class="container mx-auto px-6 lg:px-20">
    <h2 class="text-2xl font-bold mb-4">Fale Conosco Agora</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form class="p-6 border rounded-xl bg-white shadow-sm" @submit.prevent="onSubmit">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Nome</label>
          <input v-model="form.name" class="w-full border rounded px-3 py-2" required />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Email</label>
          <input v-model="form.email" type="email" class="w-full border rounded px-3 py-2" required />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Mensagem</label>
          <textarea v-model="form.message" class="w-full border rounded px-3 py-2" rows="4" required></textarea>
        </div>
        <div>
          <button type="submit" class="px-5 py-2 bg-primary text-white rounded">Enviar Mensagem</button>
        </div>
      </form>

      <div class="p-6 border rounded-xl bg-slate-50">
        <h3 class="font-semibold mb-2">Contato Rápido</h3>
        <p class="text-slate-600">Whatsapp: <a :href="whatsapp" class="text-green-600">+55 21 98277-2521</a></p>
        <p class="text-slate-600">Instagram: <a :href="instagram" class="text-sky-600">eduardaayresadv</a></p>
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
</script>
