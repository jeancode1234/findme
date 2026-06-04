<template>
  <section class="w-full relative bg-cover bg-center bg-no-repeat  overflow-hidden font-poppins bg-[url('/images/city.jpg')]">
    <div class="w-full h-full bg-white/70 absolute z-10 top-0 right-0"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8 xl:px-10 relative z-20">
      <div class="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 items-center py-16 lg:py-24 ">
        <!-- Contenu -->
        <div class=" xl:col-span-3">
          <h1
            class="text-4xl md:text-5xl  font-bold leading-tight text-[#203B51]"
          >
            Créez une adresse fiable.
            Connectez votre
            <span class="text-[#2E7D32]"> territoire. </span>
          </h1>

          <p class="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Trouvez votre position, créez votre adresse officielle et facilitez
            la livraison, les services et votre quotidien.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink
              to="/register"
              class="inline-flex items-center px-6 py-3 rounded-xl bg-[#082F5A] text-white font-semibold hover:bg-[#246628] transition"
            >
              Créer mon adresse

              <svg
                class="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/demo"
              class="inline-flex items-center px-6 py-3 rounded-xl border border-slate-300 bg-white text-[#203B51] font-semibold hover:bg-slate-50 transition"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>

              Voir comment ça marche
            </NuxtLink>
          </div>
        </div>

        <!-- Image Hero -->
        <div class="relative xl:col-span-2">

          <!-- Téléphone -->
          <img
            src="../images/ip.png"
            alt="Phone"
            class="absolute right-8 top-0 -translate-y-1/2  h-[420px] hidden lg:block"
          />

          <!-- Carte Position -->
          <div
            class="hidden lg:block absolute  left-0 bg-white rounded-2xl shadow-xl p-4 w-60"
          >
            <p class="font-semibold text-[#203B51]">Votre position</p>

            <p class="text-sm text-slate-500 mt-2">3.8670° N, 11.5222° E</p>

            <p class="text-sm font-medium mt-1">Makepe, Douala</p>
          </div>
        </div>
      </div>

      <!-- Statistiques -->
      <div
        class="bg-white rounded-t-3xl shadow-lg grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-8"
      >
        <div>
          <h3 class="text-3xl font-bold text-[#203B51]">25K+</h3>

          <p class="text-slate-500">Utilisateurs actifs</p>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-[#203B51]">70K+</h3>

          <p class="text-slate-500">Adresses créées</p>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-[#203B51]">15+</h3>

          <p class="text-slate-500">Villes couvertes</p>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-[#203B51]">99.5%</h3>

          <p class="text-slate-500">Adresses vérifiées</p>
        </div>
      </div>
    </div>
  </section>
</template>