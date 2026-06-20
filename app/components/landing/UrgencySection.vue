<!-- components/landing/UrgencySection.vue -->
<template>
  <section
    class="py-20 bg-slate-950 text-white rounded-3xl my-6 px-8 md:px-16 shadow-xl"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <span
          class="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-3"
          >Infrastructures et Santé</span
        >
        <h2 class="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
          Chaque seconde compte, findMe sauve des vies.
        </h2>
        <p class="text-slate-400 text-sm leading-relaxed mb-8">
          La réactivité est au cœur de notre mission. En cas de crise, notre
          système de navigation guide les secours directement à la porte de
          l'incident, éliminant les incertitudes géographiques.
        </p>
        <div class="flex gap-12" role="list">
          <div>
            <p class="text-4xl font-extrabold text-emerald-400">95%</p>
            <p class="text-xs text-slate-400 mt-1">Gain de temps secours</p>
          </div>
          <div>
            <p class="text-4xl font-extrabold text-emerald-400">1m</p>
            <p class="text-xs text-slate-400 mt-1">
              Précision de positionnement
            </p>
          </div>
        </div>
      </div>
      <div
        class="w-full h-64 md:h-80 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center text-slate-600"
      >
        <span>[Illustration Scène de Secours / Marché]</span>
      </div>
    </div>
  </section>
</template>