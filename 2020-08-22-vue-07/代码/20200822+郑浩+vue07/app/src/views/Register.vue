<template>
    <div id="register" class="panel">
           <h2>注册</h2>
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
                        <span class="txt">重复密码：</span>
                        <input type="password" class="form-input" v-model="repassword">
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="txt"></span>
                        <!-- <button class="form-button primary">登录</button> -->
                        <button class="form-button" @click.prevent="registerBtnClick">注册</button>
                    </label>
                </div>
           </form>
       </div>    
</template>

<script>
import { register } from '@/api';
export default {
    name: 'Register',
    data() {
        return {
            name: "",
            password: "",
            repassword: ""
        }
    },
    methods: {
        async registerBtnClick() {
            let params = {
                name: this.name,
                password: this.password,
                repassword: this.repassword
            };
            if (this.name.trim() === '' || this.password.trim() === '') {
                return alert('用户名和密码不能为空');
            }
            if (this.password !== this.repassword) {
                return alert('两次输入密码不一致');
            }
            let res = await register(params);
            if(res.status === 200) {
                this.$router.push({name: 'Login'});
            }
        }
    }
}
</script>