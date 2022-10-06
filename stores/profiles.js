import { defineStore } from 'pinia'

export default defineStore('profiles', {
  state: () => ({
    active: undefined,
    profiles: []
  }),

  getters: {
    find: state => name => [...state.profiles].find(x => x.name === name)
  },

  actions: {
    activate (name) {
      this.active = this.find(name)
    },

    create (profile) {
      this.profiles.push(profile)
    },

    deactivateProfile () {
      this.active = undefined
    }
  }
})
