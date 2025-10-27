<template>
  <section id="services" class="container mx-auto px-6 lg:px-20">
    <h2 class="font-serif text-3xl lg:text-4xl font-bold mb-8 text-primary">Como Podemos te Ajudar?</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(s,i) in services" :key="i" class="p-6 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
        <h3 class="font-semibold mb-2 text-slate-900">{{ s.title }}</h3>
        <p class="text-sm text-slate-600">{{ s.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: 'Divórcio e Separação', desc: 'Acompanhamento jurídico e emocional durante o processo.' },
  { title: 'Pensão Alimentícia', desc: 'Cálculo e defesa dos direitos da família.' },
  { title: 'Guarda e Visitação', desc: 'Proteção do melhor interesse da criança.' },
  { title: 'Inventário e Partilha', desc: 'Planejamento e execução do inventário.' },
  { title: 'Mediação Familiar', desc: 'Soluções consensuais e menos traumáticas.' },
  { title: 'Acordos Pré e Pós-Nupciais', desc: 'Segurança patrimonial e previsibilidade.' }
]
</script>
