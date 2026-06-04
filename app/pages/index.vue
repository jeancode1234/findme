<template>
  <div>
    <AppNavbar />
    <HeroBanner />
    <section class="p-14 font-poppins">
      <div class="max-w-7xl mx-auto">
        <!-- Titre -->
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-[#0B2C53]">
            Vision Technologique
          </h2>

          <div class="w-20 h-1 bg-[#35A66B] rounded-full mx-auto mt-6" />

          <p class="mt-10 text-xl text-slate-500 leading-relaxed">
            Nous construisons le pont entre les données satellites de haute
            précision et la navigation urbaine locale pour une Afrique
            connectée.
          </p>
        </div>

        <!-- Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
        >
          <!-- Card 1 -->
          <div class="bg-[#F8FAFC] rounded-[32px] p-10 border border-slate-100 transition-shadow duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div
              class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-[#0B2C53]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5V4H2v16h5m10 0v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6m10 0H7"
                />
              </svg>
            </div>

            <h3 class="mt-10 text-2xl font-bold text-[#0B2C53]">
              Communautés connectées
            </h3>

            <p class="mt-6 text-lg text-slate-500 leading-relaxed">
              L'intelligence collective pour un maillage territorial sans zone
              d'ombre, accessible à tous.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-[#EEF6F1] rounded-[32px] p-10 border border-[#DCEDE3] transition-shadow duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div
              class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-[#35A66B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 class="mt-10 text-2xl font-bold text-[#35A66B]">
              Livraison efficace
            </h3>

            <p class="mt-6 text-lg text-[#58B685] leading-relaxed">
              Optimisation des trajets et réduction drastique des échecs de
              livraison via des algorithmes prédictifs.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-[#F8FAFC] rounded-[32px] p-10 border border-slate-100 transition-shadow duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div
              class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"
                />
              </svg>
            </div>

            <h3 class="mt-10 text-2xl font-bold text-[#0B2C53]">
              Entrepreneurs autonomes
            </h3>

            <p class="mt-6 text-lg text-slate-500 leading-relaxed">
              Des outils robustes et APIs ouvertes pour booster l'écosystème de
              l'économie numérique locale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="font-poppins p-14">
      <div
        class="grid lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center py-16 lg:py-24"
      >
        <div
          class="lg:col-span-2 h-[460px] rounded-2xl bg-[#203B51] relative p-8"
        >
          <div
            class="w-full h-full bg-white overflow-hidden rounded-2xl -rotate-6 shadow-2xl translate-y-4 transform"
          >
            <img
              src="../images/brand.png"
              class="w-full h-full object-cover object-center"
              alt="brand_img"
            />
          </div>
          <div
            class="absolute p-4 bg-gray-200 rounded-2xl bottom-4 right-4 flex flex-col items-center justify-center"
          >
            <span class="text-green-600 text-2xl font-bold">100%</span>
            <p class="text-base fera tekke text-[#203B51]">satisfait</p>
          </div>
        </div>
        <div class="lg:col-span-2 space-y-8">
          <h2
            class="text-4xl lg:text-5xl leading-snug font-bold text-[#203B51]"
          >
            Impact Résidentiel: <br /><span class="text-green-700"
              >l'autonomie</span
            >
            au pas de votre porte
          </h2>
          <div class="w-full flex space-x-4 items-center">
            <div class="w-[4px] h-8 bg-green-700"></div>
            <p class="text-lg font-poppins text-[#203B51]">
              Chaque foyer mérite une identité géographique précise.
            </p>
          </div>
          <p class="text-lg text-[#71767a]">
            Grâce à notre système d'adressage unique, recevez vos courriers, vos
            livraisons et vos proches avec une précision chirurgicale. Plus
            besoin de points de repère vagues : votre code findMe devient votre
            identifiant officiel et sécurisé.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink
              to="/register"
              class="inline-flex items-center px-6 py-3 rounded-xl bg-[#082F5A] text-white font-semibold hover:bg-[#246628] transition"
            >
              Générer mon adresse

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
          </div>
        </div>
      </div>
    </section>

    <section class="font-poppins p-14 bg-[#203B51]">
      <div
        class="grid lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center py-16 lg:py-24"
      >
        <div class="lg:col-span-2 space-y-8">
          <span class="text-green-500">Infrastructures d'Urgence</span>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl leading-snug font-bold text-[#FFFFFF]"
          >
            Chaque seconde compte, <br />findMe sauve des vies.
          </h2>
          <p class="text-base md:text-lg text-[#cacbcc]">
            La réactivité est le cœur de notre mission. En cas de crise, notre
            système de navigation guide les secours directement à la porte de
            l'incident, éliminant les incertitudes géographiques.
          </p>
          <div class="mt-8 flex flex-wrap gap-4 w-full">
            <div
              class="w-52 lg:w-64 px-8 py-8 bg-[#123049] border border-[#4f616e] rounded-2xl  flex flex-col justify-center"
            >
              <p class="text-green-600 text-2xl font-bold">95%</p>
              <p class="text-sm fera tekke text-[#88898a]">Gain de temps d'intervention</p>
            </div>
            <div
              class="w-52 lg:w-64 px-8 py-8 bg-[#123049] border border-[#4f616e] rounded-2xl flex flex-col justify-center"
            >
              <p class="text-green-600 text-2xl font-bold">1m</p>
              <p class="text-sm fera tekke text-[#88898a]">Précision de localisation</p>
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-2 h-[460px] rounded-2xl"
        >
          <div
            class="w-full h-full overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="../images/brand2.png"
              class="w-full h-full object-cover object-center"
              alt="brand_img"
            />
          </div>
         
        </div>
      </div>
    </section>

     <section class="font-poppins p-14">
      <div class="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div class="relative overflow-hidden rounded-[40px] bg-[#F8FAFC] p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.3)]">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.18),_transparent_35%)]" />
          <div class="relative overflow-hidden rounded-[32px] bg-white shadow-xl">
            <img
              :src="phoneImg"
              alt="Interface mobile FindMe"
              class="w-full h-[520px] object-cover object-center"
            />
          </div>
          <div class="absolute top-8 left-8 w-40 rounded-[28px] border border-slate-200 bg-white p-2 shadow-lg">
            <img
              :src="phoneImg"
              alt="Aperçu application mobile"
              class="w-full h-auto rounded-2xl"
            />
          </div>
          <div class="absolute bottom-8 right-8 w-72 rounded-[32px] border border-slate-200 bg-white/95 p-5 shadow-lg">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B2C53]">
              Livraison locale
            </p>
            <p class="mt-3 text-lg font-semibold text-[#203B51]">
              Trajets plus courts, clients plus proches.
            </p>
            <p class="mt-3 text-sm text-slate-500 leading-relaxed">
              Suivi en direct, points de rendez-vous clairs et navigation simplifiée
              pour le commerce de proximité.
            </p>
          </div>
        </div>

        <div class="space-y-8">
          <div class="inline-flex items-center gap-3 rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#166534]">
            <span class="inline-flex h-3 w-3 rounded-full bg-[#16A34A]"></span>
            Pour les commerçants de proximité
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-[#0B2C53]">
            Booster l'économie locale par la visibilité
          </h2>
          <p class="max-w-xl text-lg text-slate-600 leading-relaxed">
            Les commerçants de proximité sont le moteur de l'économie. Avec
            FindMe, chaque boutique, même au cœur des marchés très denses,
            devient trouvable par les livreurs et les nouveaux clients.
          </p>

          <div class="space-y-5">
            <div class="flex items-start gap-4">
              <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#16A34A]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-lg font-semibold text-[#0B2C53]">Optimisation des tournées de livraison</p>
                <p class="text-sm text-slate-500">Des itinéraires plus rapides et des livraisons plus fiables.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#16A34A]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-lg font-semibold text-[#0B2C53]">Référencement digital immédiat pour PME</p>
                <p class="text-sm text-slate-500">Votre commerce apparaît plus vite quand les clients cherchent autour de vous.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#16A34A]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-lg font-semibold text-[#0B2C53]">Confiance accrue et localisation garantie</p>
                <p class="text-sm text-slate-500">Une adresse précise rassure clients et livreurs à chaque passage.</p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/register"
            class="inline-flex items-center justify-center rounded-full bg-[#0B2C53] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#164258]"
          >
            Inscrire mon commerce
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="font-poppins p-14 bg-[#F8FAFC]">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-[#0B2C53]">
          Prêt à simplifier votre quotidien ?
        </h2>
        <div class="mx-auto mt-6 h-1 w-24 rounded-full bg-[#203B51]"></div>

        <div class="mt-14 grid gap-8 md:grid-cols-3">
          <div class="rounded-[32px] bg-white p-8 shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#0B172A]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M9 21V9h6v12" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#0B2C53]">Domicile</h3>
            <p class="mt-4 text-sm leading-relaxed text-slate-500">
              Générez votre adresse personnelle gratuitement en quelques secondes.
            </p>
          </div>
          <div class="rounded-[32px] bg-white p-8 shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#0B172A]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13h2l3.6-6.59A1 1 0 019.5 5h8.5a1 1 0 011 1v8.5a1 1 0 01-1 1H18a3 3 0 11-6 0H9a3 3 0 11-6 0H3v-1z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16h.01M8 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#0B2C53]">Livraison</h3>
            <p class="mt-4 text-sm leading-relaxed text-slate-500">
              Optimisez vos parcours et assurez-vous d'être livré sans erreur.
            </p>
          </div>
          <div class="rounded-[32px] bg-white p-8 shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#0B172A]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m-4-4h8" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-[#0B2C53]">Urgence</h3>
            <p class="mt-4 text-sm leading-relaxed text-slate-500">
              Accédez aux coordonnées de secours vitales en un seul clic.
            </p>
          </div>
        </div>

        <div class="mt-14 flex justify-center">
          <NuxtLink
            v-if="isAuthenticated"
            to="/dashboard"
            class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            Accéder à mon dashboard
          </NuxtLink>
          <NuxtLink
            v-else
            to="/auth/register"
            class="inline-flex items-center justify-center rounded-full bg-[#0B2C53] px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#163B5A]"
          >
            Rejoindre l'aventure findMe
          </NuxtLink>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
<script setup>
import { useAuth } from '../composables/useAuth'
import AppNavbar from "@/components/AppNavbar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import AppFooter from "@/components/AppFooter.vue";
import phoneImg from "@/images/brand1.png";

const {isAuthenticated} = useAuth()
onMounted(() => {
    if (!isAuthenticated) {
        console.log('User is not authenticated, staying on home page.')
        router.push('/auth/login')
    } 
  console.log('Auth state on home page:', isAuthenticated)
})
</script>
<style scoped>
</style>