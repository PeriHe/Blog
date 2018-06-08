<template>
    <div class="content">
        <div class="wrap">
            <span class="logo"><img src="./收藏实心.png" alt=""></span>
            <div class="time">
                <span class="trig"></span>
                <span class="data">2018.06.07</span>
            </div>
            <a href="">JavaScript的深浅拷贝</a>
            <img class="pic" src="./bg1.jpg" alt="">
            <p class="des">对于仅仅是复制了引用（地址），即原来的变量和新的变量指向同一个地址，彼此之间的操作会互相影响，为浅拷贝。而如果是在堆中重新分配内存，拥有不同的地址，复制后的对象与原来的对象完全隔离，互不影响，为深拷贝。深浅拷贝的主要区别就是：复制的是引用(地址)还是复制的是实例。</p>
        </div>
        <div class="wrap">
            <span class="logo"><img src="./收藏实心.png" alt=""></span>
            <div class="time">
                <span class="trig"></span>
                <span class="data">2018.06.07</span>
            </div>
            <a href="">JavaScript的深浅拷贝</a>
            <img class="pic" src="./bg1.jpg" alt="">
            <p class="des">对于仅仅是复制了引用（地址），即原来的变量和新的变量指向同一个地址，彼此之间的操作会互相影响，为浅拷贝。而如果是在堆中重新分配内存，拥有不同的地址，复制后的对象与原来的对象完全隔离，互不影响，为深拷贝。深浅拷贝的主要区别就是：复制的是引用(地址)还是复制的是实例。</p>
        </div>
        <div class="wrap">
            <span class="logo"><img src="./收藏实心.png" alt=""></span>
            <div class="time">
                <span class="trig"></span>
                <span class="data">2018.06.07</span>
            </div>
            <a href="">JavaScript的深浅拷贝</a>
            <img class="pic" src="./bg1.jpg" alt="">
            <p class="des">对于仅仅是复制了引用（地址），即原来的变量和新的变量指向同一个地址，彼此之间的操作会互相影响，为浅拷贝。而如果是在堆中重新分配内存，拥有不同的地址，复制后的对象与原来的对象完全隔离，互不影响，为深拷贝。深浅拷贝的主要区别就是：复制的是引用(地址)还是复制的是实例。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Artical'
    }
</script>

<style scoped>
    .wrap{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        border-left: 1px dashed rgb(245, 172, 241);
        padding-left: 2.4rem;
        padding-bottom: 5rem;
        color: rgb(43, 34, 34);
        position: relative;
    }
    .logo{
        position: absolute;
        left: -1rem;
        top: -.1rem;
    }
    .logo img{
        width: 2rem;
        height: 2rem;
    }
    .time{
        margin-bottom: 2rem;      
        display: flex;
    }
   .trig{
       width: 0;
       height: 0;
       border-top: 1rem solid transparent;
       border-right: 1.6rem solid #f8e6ed;
       border-bottom: 1rem solid transparent;
   }
   .data{
        background-color: #f8e6ed;
        padding: .5rem;
    }
    a{
        text-decoration: none;
        color: #333;
        font-size: 1.6rem;
    }
    .pic{
        max-width: 26rem;
        margin: 1rem 0;
    }
    .des{
        line-height: 1.5rem;
        color: #666;
    }
</style>
