<template>
    <div id="login" class="panel">
           <h2>登录</h2>
           <form action="">
                <div class="form-item">
                    <label>
                        <span class="txt">姓名：</span>
                        <input type="text" class="form-input" v-model="name">
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="txt">密码：</span>
                        <input type="password" class="form-input" v-model="password">
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="txt"></span>
                        <button class="form-button primary" @click.prevent="loginBtnClick">登录</button>
                        <!-- <button class="form-button">注册</button> -->
                    </label>
                </div>
           </form>
       </div>    
</template>

<script>
import { login } from '@/api';
export default {
    name: 'Login',
    data() {
        return {
            name: "",
            password: ""
        }
    },
    methods: {
        async loginBtnClick() {
            if (this.name.trim() === '' || this.password.trim() === '') {
                return alert('用户名和密码不能为空');
            }
            let params = {
                name: this.name,
                password: this.password
            };
            let res = await login(params);
            if(res.status === 200) {
                this.$router.push({name: 'Home'});
                localStorage.setItem("token", res.data.name + "_" + res.data.id)
            }
        }
    }
}
</script>