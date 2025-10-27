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
  { title: 'Aposentadoria por Idade', desc: 'Análise e solicitação do benefício para garantir seu direito.' },
  { title: 'Aposentadoria por Tempo de Contribuição', desc: 'Planejamento e requerimento para quem já contribuiu.' },
  { title: 'Aposentadoria Especial', desc: 'Para trabalhadores em condições insalubres ou perigosas.' },
  { title: 'Auxílio-Doença', desc: 'Obtenção e manutenção do benefício por incapacidade.' },
  { title: 'Benefício de Prestação Continuada (BPC)', desc: 'Assistência para idosos e pessoas com deficiência.' },
  { title: 'Revisão de Benefícios', desc: 'Recuperação de valores atrasados e correção de erros.' }
]
</script>
