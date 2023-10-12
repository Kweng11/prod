<template>
        <div>
            <Hero/>
            <Man/>
            <Foot/>
            
        </div>
</template>
<script>
import Hero from '@/Kira/Hero.vue';
import Man from '@/Kira/Man.vue';
import Foot from '@/Kira/Foot.vue';
export default{
    name: 'Kira',
    components: {
       Man,
       Foot,
       Hero,
    },
    mounted() {
     const scriptPaths = [
       '/assets/kira/js/jquery-1.11.3.min.js ',
       'kira/js/owl.carousel.min.js  ',
       'kira/js/jquery.meanmenu.min.js ',
       'kira/js/sticker.js ',
       'kira/bootstrap/js/bootstrap.min.js ',
       'kira/js/jquery.countdown.js',
       'kira/js/jquery.isotope-3.0.6.min.js',
       'kira/js/waypoints.js',
       'kira/js/jquery.magnific-popup.min.js',
       'kira/js/main.js',
          
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

@import '@/assets/kira/css/responsive.css';

@import '@/assets/kira/css/magnific-popup.css';
@import '@/assets/kira/css/animate.css';
@import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap');
@import url('ttps://fonts.googleapis.com/css?family=Open+Sans:300,400,700"');
</style>
