import { defineStore } from 'pinia'

export default defineStore('profiles', {
  state: () => ({
    active: undefined,
    profiles: [
      // TODO initial state for fast development. REMOVE!
      { name: 'john' },
      { name: 'jane' },
      { name: 'josh' },
      { name: 'jimmy' },
      { name: 'james' }
    ]
  }),

  getters: {
    find: state => name => [...state.profiles].find(x => x.name === name)
  },

  actions: {
    activate (name) {
      this.active = this.find(name)
    },

    create (profile) {
      console.log('creating profile:', profile)
      this.profiles.push(profile)
    },

    deactivateProfile () {
      this.active = undefined
    }
  }
})
