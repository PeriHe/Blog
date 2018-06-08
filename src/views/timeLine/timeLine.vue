<template>
    <div class="wrap">
        <div class="block">
            <h2>2018</h2>
            <ul class="list">
                <li>
                    <a href="">
                        <span class="time">2017/05/24</span>&nbsp;
                        <span class="title">拥抱 HTTPS</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="time">2017/05/20</span>&nbsp;
                        <span class="title">你好 Disqus, 再见多说!</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="time">2016/12/04</span>&nbsp;
                        <span class="title">MySQL5.6使用Notifier无法停止或重启服务</span>
                    </a>
                </li>
            </ul>
        </div>
       <div class="bolck">
            <h2>2017</h2>
            <ul class="list">
                <li>
                    <a href="">
                        <span class="time">2017/05/24</span>&nbsp;
                        <span class="title">拥抱 HTTPS</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="time">2017/05/20</span>&nbsp;
                        <span class="title">你好 Disqus, 再见多说!</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="time">2016/12/04</span>&nbsp;
                        <span class="title">MySQL5.6使用Notifier无法停止或重启服务</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'timeLine'
    }
</script>

<style scoped>
    .wrap{
        font-size: 1.4rem;
        color: #666;
        padding-bottom:10rem; 
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }
    .block{
        margin: 3rem 0;
    }
    .time{
        /* color:#333; */
        font-weight: 600;
    }
    ul li a{
        color: #666;
        text-decoration: none;
        line-height: 2rem;
    }
    ul li a:hover{
        color:purple;
        font-weight: 400;
    }
</style>
