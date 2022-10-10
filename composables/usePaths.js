import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import useProfiles from '~/stores/profiles'

export default function () {
  const route = useRoute()
  const { loggedIn } = storeToRefs(useProfiles())

  const namedPath = (path = '', { id = loggedIn.value } = {}) => '/' + [
    id,
    ...path.split('/')
  ].filter(x => !!x).join('/')

  return {
    currentId: computed(() => {
      const match = route.path.match(/^\/?(\w+)\/?/)
      return match && match[1].toLowerCase()
    }),
    home: computed(() => namedPath('mine')),
    homeOf: id => namedPath('mine', { id }),
    currentIsHome: computed(() => {
      const match = route.path.match(/^\/(\w+)\/mine\/?$/)
      return !!match && match[1] === loggedIn.value
    }),
    wishlist: computed(namedPath),
    wishlistOf: id => namedPath('', { id }),
    currentIsWishlist: computed(() => !!route.path.match(/^\/?(\w+)\/?$/)),
    constellation: computed(() => namedPath('constellation')),
    root: ref('/')
  }
}
