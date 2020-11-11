<template>
 <main class="login-form">
     <Tip/>
 </main>
</template>
<script>
import Vue from 'vue'
import Tip from '../tips/Tip.vue'
export default Vue.extend( {
    data(){
        return{

        }
    },
    components:{
        Tip
    }
})
</script>
<style>
    .login-form{
        position: relative;
        background: green;
        overflow: visible;
        width: 346px;
    }
</style>