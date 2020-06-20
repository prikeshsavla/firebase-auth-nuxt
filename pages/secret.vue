<template>
  <div>
    <h1 class="text-3xl">This is secret info</h1>
  </div>
</template>

<script>
import {getUserFromCookie} from '@/helpers'
import * as firebase from 'firebase/app'
export default {

  asyncData({req, redirect}){
    if(process.server){

       const user = getUserFromCookie(req);
        if(!user){
            redirect('/login')
        }
    }
    else{
      let user = firebase.auth().currentUser
      if(!user){
          redirect('/login')
      }
    }
  }

}
</script>

<style lang="scss" scoped></style>
