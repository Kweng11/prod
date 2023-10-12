<template>
    <div>
         <Headr/>
         <Sec/>
         <Foot/>
    </div>
</template>
<script>
import Headr from '@/Finexo/Headr.vue';
import Sec from '@/Finexo/Sec.vue';
import Foot from '@/Finexo/Foot.vue';
export default{
    name: 'Finexo',
    components: {
        Headr,
        Sec,
        Foot,
    },
    mounted() {
     const scriptPaths = [
       '/finexo/js/jquery-3.4.1.min.js',
       '/finexo/js/bootstrap.js',
       '/finexo/js/owl-carousel.min.js',
        '/finexo/js/custom.js',
   
        ];

        const loadScript = (path) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = path;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
        };

        const loadScripts = async () => {
        try {
            await loadScript(scriptPaths[0]); // Load jQuery first
            for (let i = 1; i < scriptPaths.length; i++) {
            await loadScript(scriptPaths[i]);
            }
        } catch (error) {
            console.error('Failed to load scripts:', error);
        }
        };
        loadScripts();
    }
}
</script>
<style scoped>
@import '@/assets/finexo/css/bootstrap.css';
@import '@/assets/finexo/css/style.css';
@import '@/assets/finexo/css/responsive.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');

</style>
