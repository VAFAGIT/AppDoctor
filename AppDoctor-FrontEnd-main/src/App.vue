<template>
<div> 
  <nav>
   
    <NavBar  />
  </nav>
 
  <router-view/>
</div> 
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import { get } from 'js-cookie';
import  Cookies from 'js-cookie'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data(){
    return {
      data :[],
    }
  },
  beforeCreate() {
    console.log('beforeDestroy'+Cookies.get('user'));
    // set data into store
    this.$store.commit('setAuthIsReady', Cookies.get('authIsReady'));
    this.$store.commit('setUser', Cookies.get('user'));
  
    
  },
  HandleLogout()
  {
    console.log('logout');
    this.$store.dispatch('logoutUser')
    Cookies.remove('authIsReady')
    Cookies.remove('user')
  },
  
}
</script>

<style>
.text-l {
  color: aliceblue;
}

/*font*/
body {
  font-family: 'Poppins', sans-serif;
  background-color: #000000 !important;  
}

.bg-yellow-500 {
    background-color: #3c6996;
}
.text-yellow-500 {
    color: #3c6996;
}
.floating { 
    animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
} 
@keyframes floating { 
    0% { transform: translate(0, 0px); } 
    50% { transform: translate(0, 8px); } 
    100% { transform: translate(0, -0px); }  
}
button{
    border-color: #3c6996;
} 
button:hover {
    box-shadow:inset -10.5rem 0 0 0 #3c6996 ,inset 10.5rem 0 0 0 #3c6996;
    color: white;
    
}
.floating-4 { 
    animation-name: floating; 
    animation-duration: 4s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
} 
@keyframes floating-4 { 
    0% { transform: translate(0, 0px); } 
    50% { transform: translate(0, 8px); } 
    100% { transform: translate(0, -0px); }  
}
.text-darken {
    color: #3c6996;
}
nav {
  margin-top: 20px;
}
nav a {
  font-weight: bold;
  color: #3c6996;
}

nav a.router-link-exact-active {
  color: #3c6996;
}
</style>
