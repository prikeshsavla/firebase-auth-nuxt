<template>
  <div class="main min-h-screen bg-gray-100">
    <div class="main-links">
      <nuxt-link to="/">Home Page</nuxt-link>
      <nuxt-link to="secret">Secret</nuxt-link>
      <nuxt-link to="login" v-if="!loggedIn">Login</nuxt-link>
      <div class="logout-link" @click="logOut" v-else>Logout</div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'
export default {
  mounted() {
    this.setupFirebase()
  },
  data() {
    return {
      loggedIn: true,
    }
  },
  methods: {
    logOut() {
      console.log(this.logggedIn)
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login')
        })
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.loggedIn = true
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((token) => {
              Cookies.set('access_token', token)
            })
        } else {
          this.loggedIn = false
          Cookies.remove('access_token');
        }
      })
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.main {
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-links {
  width: 30%;
  display: flex;
  justify-content: space-around;
}
</style>
