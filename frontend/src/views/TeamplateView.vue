<template>
    <main>
        <UserBtn />
        <div class="logo-sm">
            <h1>To Know</h1>
        </div>
        <div>
            <h1>TEAMPLATE</h1>
            <router-link to="/game">
                <BtnStroke>
                    ir pro game
                </BtnStroke>
            </router-link>
            <br>
            <router-link to="/">
                <BtnStroke>
                    Voltar
                </BtnStroke>
            </router-link>
        </div>
        <LogoIF />
        <Tips>
            <p>DICA</p>
        </Tips>
</main>
</template>
<script>
import Tips from '../components/Tips.vue'
import BtnStroke from '../components/BtnStroke.vue'
import LogoIF from '../components/LogoIF.vue'
import AuthorDiv from '../components/AuthorDiv.vue'
import UserBtn from '../components/UserBtn.vue'

export default {
    // add component
    components: {
        Tips,
        BtnStroke,
        LogoIF,
        AuthorDiv,
        UserBtn
    },
}
</script>