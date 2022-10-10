import { defineStore } from 'pinia'

export default defineStore('profiles', {
  state: () => ({
    loggedIn: '',
    profiles: [
      // TODO initial state for fast development. REMOVE!
      { name: 'John', id: 'john' },
      { name: 'Jane', id: 'jane' },
      { name: 'Josh', id: 'josh' },
      { name: 'Jimmy', id: 'jimmy' },
      { name: 'Jåmes', id: 'james' }
    ]
  }),

  getters: {
    find: state => id => [...state.profiles].find(x => x.id === id)
  },

  actions: {
    login (id) {
      this.loggedIn = id
    },

    create (profile) {
      console.log('creating profile:', profile)
      this.profiles.push(profile)
    },

    logout () {
      this.loggedIn = ''
    }
  }
})
