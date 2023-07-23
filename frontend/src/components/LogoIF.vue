<template lang="">
    <div>
        <a href="https://araquari.ifc.edu.br/" target="_blank">
            <img src="../assets/img/logoIF.png" alt="">
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div {
        cursor: pointer;
    }
    img {
        position: fixed;
        bottom: 3%;
        right: 1.5em;
        width: 50px;
        height: 50px;
        transition: all .2s ease-in-out;
    }
    img:hover {
        transform: scale(.7);
    }
</style>