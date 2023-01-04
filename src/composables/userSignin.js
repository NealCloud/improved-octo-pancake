import { projectAuth } from "../firebase/config"
import { ref } from "vue"

const error = ref(null)

const signin = async (email, password, displayName)=>{
    error.value = null

    try{
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        if(!res){            
            throw new Error('Could not complete the signup')
        }       
        error.value = null        
        return res
    }
    catch(err){
        console.log(err.message)
        error.value = "Incorrect Login Credentials"
    }
}

const userSignin = () => {
    
    return {error, signin }
}


export default userSignin