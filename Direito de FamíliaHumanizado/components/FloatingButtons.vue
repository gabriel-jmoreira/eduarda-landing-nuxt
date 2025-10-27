<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a :href="whatsapp" target="_blank" class="flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-green-600 text-white hover:scale-[1.02] transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.82 11.82 0 0 0 12 0C5.373 0 .001 5.373 0 12c0 2.108.553 4.165 1.602 5.99L0 24l6.214-1.601A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.984-.49-3.847-1.48-5.52zM12 22c-1.88 0-3.656-.47-5.237-1.353l-.375-.213-3.693.953.983-3.595-.24-.385A9.873 9.873 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/><path d="M17.472 14.382l-1.01-.292a.999.999 0 0 0-1.106.357l-.43.565c-.46.605-1.2.995-1.992 1.031-1.863.095-3.53-.888-4.62-2.359-.72-.945-1.04-2.036-.9-3.11.11-.88.605-1.747 1.35-2.338l.38-.298a1 1 0 0 0 .247-1.31L7.77 5.92l-.002-.003a1 1 0 0 0-1.323-.335L4.3 7.05a1 1 0 0 0-.403 1.264c1.31 3.064 4.482 5.236 8.166 5.236.88 0 1.738-.11 2.548-.327l.478-.12a1 1 0 0 0 .707-.58l.96-2.266a1 1 0 0 0-.08-.939z"/></svg>
      <span class="hidden lg:inline">WhatsApp</span>
    </a>

    <a :href="instagram" target="_blank" rel="noopener noreferrer" @click="openInstagram" class="flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-pink-600 text-white hover:scale-[1.02] transition cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3z"/><path d="M12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 1 0 12 7.5zM12 9A3 3 0 1 1 12 15 3 3 0 1 1 12 9zM17.5 6.5a1 1 0 1 1 0 2 1 1 0 1 1 0-2z"/></svg>
      <span class="hidden lg:inline">Instagram</span>
    </a>
  </div>
</template>

<script setup>
const whatsapp = "https://wa.me/5521982772521"
const instagram = "https://www.instagram.com/eduardaayresadv/"

// Função para garantir que o link abra corretamente
function openInstagram(event) {
  event.preventDefault()
  window.open(instagram, '_blank', 'noopener,noreferrer')
}
</script>
