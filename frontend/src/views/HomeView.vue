<template>
    <main>
        <UserBtn />
        <div class="logo-lg">
            <h1>To Know</h1>
            <router-link to="/teamplate">
                <BtnStroke>
                    Começar
                </BtnStroke>
            </router-link>
            <HelpText />
        </div>
        <LogoIF />
        <AuthorDiv />
    </main>
</template>
<script>
import HelpText from '../components/HelpText.vue'
import BtnStroke from '../components/BtnStroke.vue'
import LogoIF from '../components/LogoIF.vue'
import AuthorDiv from '../components/AuthorDiv.vue'
import UserBtn from '../components/UserBtn.vue'

export default {
    // add component
    components: {
        HelpText,
        BtnStroke,
        LogoIF,
        AuthorDiv,
        UserBtn
    },
}
</script>