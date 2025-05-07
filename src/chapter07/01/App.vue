<template>
    <div class="app">
        <h1>Hello World</h1>
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

