<template lang="">
    <section>
        <button class="btn-stroke">
            <slot></slot>
        </button>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    button {
        background-color: transparent;
        border: 1px solid var(--primary-color);
        border-radius: 30px;
        color: var(--primary-color);
        cursor: pointer;
        padding: 1em 2em;
        font-size: 1.05em;
        transition: all .4s ease-in-out;
    }
    button:hover {
        background-color: var(--primary-color);
        color: #fff;
    }
</style>