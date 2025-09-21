import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { apolloClient } from './apollo/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
}).mount('#app')
