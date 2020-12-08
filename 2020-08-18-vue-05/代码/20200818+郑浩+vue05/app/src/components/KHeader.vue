<template>
    <header id="header">
        <a href="/" id="logo"></a>

        <nav id="nav">
            <a href="">手机</a>
            <a href="">笔记本</a>
            <a href="">家居</a>
        </nav>

        <div id="user">
            <router-link :to="{name:'Login'}">登录</router-link>
            <router-link :to="{name:'Register'}">注册</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'KHeader'
}
</script>