<template>
    <div class="app" style="display: flex;">
        <h1 style="text-align: center;">你好！</h1>
        <Header />
        <Main />
        <Footer />  
    </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
    components: {
        Header, Main, Footer
    }
}
</script>

