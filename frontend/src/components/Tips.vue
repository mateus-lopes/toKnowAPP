<template lang="">
    <div class="tips">
        <div :id="tipsForm" class="dropdown-content tips-content" :class='{show : key_dropdown}'>
            <slot></slot>
        </div>
        <button v-on:click='showDropDown()'>
            <img src="../assets/img/iconHelp.png" alt="">
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            key_dropdown: false,
        }
    },
    props: {
        tipsForm: {
            type: String,
            required: true
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
    .tips button {
        cursor: pointer;
        border:none;
        background: transparent;
    }
    .tips-content {
        width: 600px;
        margin-left: calc(-610px + -1.5em);
    }
    .show {
        margin-left: 0;
    }
    .tips {
        position: fixed;
        bottom: 1.5em;
        left: 1.5em;
        display: flex;
        gap: 1.5em;
    }
    
    .tips img {
        max-height: 70px;
        transition: all .4s ease-in-out;
    }

    .tips:hover img {
        transform: rotate(360deg);
    }
</style>