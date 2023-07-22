<template lang="">
    <section class="user">
        <button class='btn-user'>
            <span>
                <img src="../assets/img/iconUser.png" alt="">
            </span>
        </button>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
    .user {
        position: fixed;
        top: 1.5em;
        right: 1.5em;
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
</style>