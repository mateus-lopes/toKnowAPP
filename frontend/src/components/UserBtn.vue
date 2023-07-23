<template lang="">
    <section class="user">
        <button v-on:click="showDropDown()" class='btn-user'>
            <span>
                <img src="../assets/img/iconUser.png" alt="">
            </span>
        </button>
        <div id="userLinks" class="dropdown-content user-content" :class='{show : key_dropdown}'>
            <router-link to="/perfil">
                <a href="#">Ver Perfil</a>
            </router-link>
            <a href="#">Sair</a>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            key_dropdown: false,
        }
    },
    methods: {
        showDropDown() {
            this.key_dropdown = !this.key_dropdown
            console.log(this.key_dropdown)
        }
    }
}
</script>
<style scoped>
    .user-content {
        width: 200px;
        margin-right: calc(-210px + -1.5em);
        text-align: left;
    }
    
    .show {
        margin-right: 0;
    }
    .user {
        position: fixed;
        top: 1.5em;
        right: 1.5em;
        display: flex;
        gap: 1.5em;
    }
    .btn-user {
        background-color: transparent;
        background: var(--primary-color);
        border: 1px solid var(--primary-color);
        border-radius: 40px;
        width: 65px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .4s ease-in-out;
    }
    .btn-user:hover {
        background-color: var(--secondary-color);
        border: 1px solid var(--secondary-color);
    }
</style>