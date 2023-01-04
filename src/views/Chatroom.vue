<template>
  <div class="container">
    <Navbar/>
    
    <ChatLog/>
    <ChatForm/>
  </div> 
</template>

<script>
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar.vue'
import ChatForm from '../components/NewChatForm.vue'
import ChatLog from '../components/ChatLog.vue'
import { watch, watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'


export default {
  components:{
    Navbar,
    ChatForm,
    ChatLog
  },
  setup(){
    const {user} = getUser()
    const router = useRouter() 

    watchEffect(()=>{      
      if(!user.value){
        router.push({name:'welcome'})        
      }      
    })   

    return {user}
  }


}
</script>

<style>
  
</style>