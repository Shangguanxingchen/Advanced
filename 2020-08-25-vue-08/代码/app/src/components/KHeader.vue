<template>
    <header id="header">
        <a href="/" id="logo"></a>

        <nav id="nav">
            <a href="">手机</a>
            <a href="">笔记本</a>
            <a href="">家居</a>
        </nav>

        <div id="user">
            <div v-if="user">
                <router-link :to="''">{{user.name}}</router-link>
                <span style="cursor: pointer;" @click="logout">退出</span>
            </div>
            <div v-else>
                <router-link :to="{name: 'Login'}">登录</router-link>
            </div>
            
        </div>
    </header>
</template>

<script>
// import {mapState} from 'vuex';
import {createNamespacedHelpers} from 'vuex';

const { mapState: userMapState } = createNamespacedHelpers('userModule');
// const { mapState: itemMapState } = createNamespacedHelpers('itemModule');

export default {
    name: 'KHeader',

    // computed: {
    //     user() {
    //         console.log(this.$store.state.userModule.user);
    //         return this.$store.state.userModule.user;
    //     }
    // },

    // mapState() 会返回一个对象，它会按照你传入的数据进行state的映射
    // mapState(['user'])
    computed: userMapState(['user']),
    // return {
    //     user() {
    //         return this.$store.state.user;
    //     },
    //     a() {
    //         return this.$store.state.;
    //     }
    // }
    // computed: mapState(['user']),
    // computed: {
    //     a() {
    //         return 1;
    //     },
    //     ...mapState({
    //         user: (state) => {
    //             // console.log(state);
    //             return state.userModule.user;
    //         }
    //     })
    // },

    // computed: mapState(['user']),


    // data() {
    //     return {
    //         user: null
    //     }
    // },

    // created() {
    //     let storageUser = localStorage.getItem('user');
    //     if (storageUser) {
    //         this.user = JSON.parse(storageUser);
    //         // console.log(this.user);
    //     }
    // },

    // watch: {
    //     $route() {
    //         console.log('...');
    //     }
    // },

    methods: {
        logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            window.location.reload();
        }
    }
}
</script>