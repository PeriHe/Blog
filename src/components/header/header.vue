<template>
    <div class="header">
        <div class="avatar"></div>
        <div class="name">Peri He</div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6rem;
    }
    .avatar{
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background:url(./avatar.jpg);
        background-size: 100%;
        margin-bottom: 4rem;
    }
    .name{
        background-color: #f8e6ed;
        color: #999;
        font-size: 2rem;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
        padding: 0.4rem 1.5rem;
        margin-bottom: 4rem;
    }
    /* 过渡效果有问题 */

/* 
   .v-enter{
    opacity: 0;
    }
    .v-enter-active{
    transition: 0.5s;
    }
    .v-enter-to{
    opacity: 1;
    }
    .v-leave{
    opacity: 1;
    }
    .v-leave-to{
    opacity:0;
    }
    .v-leave-active{
    transition: 0.5s;
    } */
</style>
