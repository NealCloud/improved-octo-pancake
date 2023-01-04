<template>
  <form @submit.prevent="handleSubmit">    
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../composables/userSignin'

export default {
    
    setup(props, context){
        
        const {error, signin} = useLogin();
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () =>{
            await signin(email.value, password.value)
            if(!error.value){
                console.log("user logged in")
                context.emit('login')
            }            
        }
        return{ email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>