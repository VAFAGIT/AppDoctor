<template>
 <div class="bg-cream">
		<div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
			<!--Left Col-->
			<div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
				<h1 data-aos="fade-right" data-aos-once="true" class="my-4 text-5xl font-bold leading-tight text-darken">
					<span class="text-yellow-500">Bienvenue</span>
				</h1>
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="leading-normal text-2xl mb-8"></p>
				<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
					<button class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-md py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						Appointment
					</button>
					<!-- <button class="lg:mx-0 border-2 border-blue-300 text-b text-xl font-bold rounded-md py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						View Doctors
					</button> -->
				</div>
			</div>
			<!--Right Col-->
			<div class="w-full mt-10 lg:w-6/12  relative" id="girl">
				<img data-aos="fade-up" data-aos-once="true" class="w-10/10  mx-auto 2xl:-mb-15" src="https://img.freepik.com/vecteurs-libre/medecin-examinant-enfant-illustration-vectorielle-plane-stethoscope-garcon-enfant-malade-assis-table-dans-cabinet-du-medecin-ayant-rendez-vous-pediatre-examen-aide-concept-evaluation_74855-24494.jpg?w=740" />

			</div>
		</div>

		
    

	</div>
</template>
<script>
import { computed } from '@vue/runtime-core'

export default {
  name: "Home",
  data() {
	  return {
		   user: localStorage.getItem('user')
	  }
  }
  
};
</script>
<style>

/*font*/
body {
    font-family: 'Poppins', sans-serif;
}

.bg-yellow-500 {
    background-color: #2F327D;
}
.text-yellow-500 {
    color: #2F327D;
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
button {
    border-color: #2F327D;
} 
button:hover {
    box-shadow:inset -10.5rem 0 0 0 #2F327D ,inset 10.5rem 0 0 0 #2F327D;
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
    color: #2F327D;
}

</style>
