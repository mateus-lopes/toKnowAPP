<template>
    <main>
        <UserBtn />
        <div class="logo-sm">
            <h1>To Know</h1>
        </div>
        <router-link to="/">
            <BtnStroke>
                Voltar
            </BtnStroke>
        </router-link>
        <LogoIF />
        <span class="help">
            <img src="../assets/img/iconHelp.png" alt="">
        </span>
</main>
</template>
<script>
import BtnStroke from '../components/BtnStroke.vue'
import LogoIF from '../components/LogoIF.vue'
import AuthorDiv from '../components/AuthorDiv.vue'
import UserBtn from '../components/UserBtn.vue'

export default {
    // add component
    components: {
        BtnStroke,
        LogoIF,
        AuthorDiv,
        UserBtn
    },
}
</script>

<style>

.logo-sm {
    position: fixed;
    top: 0;
    left: 1.5em;
    display: flex;
    gap: .5em;
    justify-content: center;
    align-items: center;
    max-height: 80px;
}

.logo-sm h1 {
    font-size: 2em;
    color: var(--primary-color);
    font-family: 'Bungee Shade', cursive;
    margin-bottom: .5em;
}

.help {
    position: fixed;
    bottom: 1.5em;
    left: 1.5em;
}

.help img {
    max-height: 70px;
}

</style>