<template>
  <div class="about">
     <WalterNav/>
    <!-- <TailwindNav/> -->
    <!-- <TailwindDiv/> -->   
    <!-- <div>      
      <img
          sizes="(min-width: 500px) 480w, 650w "
          srcset="../assets/main1.jpg 480w, ../assets/main1.jpg 650w "
          class="absolute max-h-fit -z-20 object-cover object-center distance-1"
          src="../assets/main1.jpg"
          aria-hidden="true">          
    </div> -->
  </div>
  <MainWalter/>
</template>

<script>
import TailwindNav from '../components/TailwindNav.vue'
import TailwindDiv from '../components/TailwindDiv.vue'
import WalterNav from '../components/WalterNav.vue'
import MainWalter from '../components/MainWalter.vue'

export default{
  components:{
    TailwindNav,
    TailwindDiv,
    WalterNav,
    MainWalter
  }
}
</script>

<style >

</style>
