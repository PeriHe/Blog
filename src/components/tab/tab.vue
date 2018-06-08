<template>
    <div class="wrap">
        <span class="word">你是笨蛋吧 ~~~ ~~ ~ </span>
        <div class="nav">
            <router-link to="/" class="link" exact><img class="logo" src="./文章2.png" alt="">文章</router-link>
            <router-link to="/archives" class="link"><img class="logo" src="./档案数据.png" alt="">归档</router-link>
            <router-link to="/about" class="link"><img class="logo" src="./人像.png" alt="">了解我</router-link>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Tab'
    }
</script>

<style scoped>
    .wrap{
        width: 100%;
        border-bottom: 1px solid #999;
        margin-bottom: 9rem;        
    }
    .word{
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 1.8rem;
        color: #666;
        font-weight: 400;
    }
    .nav{
        display: flex;
        justify-content: flex-end;
    }
    .link{
        text-decoration: none;
        color: #333;
        font-weight: 600;
        font-size: 1.4rem;
        padding: 0.4rem 1rem .2rem;
    }
    .logo{
        width: 1rem;
        height: 1rem;
        margin-right: .5rem;
    }
    .link:hover{
        /* border-bottom: 1px solid #F5ACF1; */
    }
    /* 激活的状态 */
    .router-link-active{
        /* border: 1px solid #F8E6ED; */
        /* background-color: #F8E6ED; */
        border: 1px solid #999;
        border-top-left-radius: 30%;
        border-top-right-radius: 30%;
        margin-bottom: -1px;
        border-bottom: 1px solid white;
    }
</style>
