<template>
  <main class="main">
    <FirstScreen />
    <Services />
    <ServicesExamples />
    <ServicesCta @open-form="$emit('open-form')" />
    <Features />
    <FeaturesCTA @open-form="$emit('open-form')" />
    <Portfolio @open-form="$emit('open-form')" />
    <PortfolioCTA @open-form="$emit('open-form')" />
    <Contacts />
  </main>
</template>

<script>
import FirstScreen from '../components/sections/FirstScreen.vue'
import Services from '../components/sections/Services.vue'
import ServicesExamples from '../components/sections/ServicesExamples.vue'
import ServicesCta from '../components/sections/ServicesCta.vue'
import Features from '../components/sections/Features.vue'
import FeaturesCTA from '../components/sections/FeaturesCTA.vue'
import Portfolio from '../components/sections/Portfolio.vue'
import Contacts from '../components/sections/Contacts.vue'
import PortfolioCTA from '@/components/sections/PortfolioCTA.vue'

export default {
  name: 'MainView',
  components: {
    PortfolioCTA,
    FirstScreen,
    Services,
    ServicesExamples,
    ServicesCta,
    Features,
    FeaturesCTA,
    Portfolio,
    Contacts,
  },
  emits: ['open-form'],
}
</script>

<style scoped>
.main {
  position: relative;
  z-index: 1;
}
</style>
