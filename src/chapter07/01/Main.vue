<template>
    <div class="main">
        <main-banner></main-banner>
        <main-product-list></main-product-list>
    </div>

</template>

<script>
import MainBanner from './MainBanner.vue'
import MainProductList from './MainProductList.vue'
export default {
    name: 'Main',
    components: {
        'main-banner': MainBanner,
        'main-product-list': MainProductList
    }
}
</script>
