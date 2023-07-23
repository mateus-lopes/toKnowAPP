<template>
    <main>
        <UserBtn />
        <LogoSM />
        <Question />
        <LogoIF />
        <Tips>
            <p>DICA</p>
        </Tips>
</main>
</template>
<script>
import LogoSM from '../components/LogoSM.vue'
import Question from '../components/Question.vue'
import Tips from '../components/Tips.vue'
import BtnStroke from '../components/BtnStroke.vue'
import LogoIF from '../components/LogoIF.vue'
import AuthorDiv from '../components/AuthorDiv.vue'
import UserBtn from '../components/UserBtn.vue'

export default {
    // add component
    components: {
        LogoSM,
        Question,
        Tips,
        BtnStroke,
        LogoIF,
        AuthorDiv,
        UserBtn
    },
}
</script>