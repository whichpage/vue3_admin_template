<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue';
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

let router = useRouter()

let login = reactive({
  username: 'admin',
  password: '111111'
})

async function handlelogin() {
  try { 
    await userStore.userLogin(login)
    ElNotification.success({
      title: '登录成功',
      message: '欢迎来到登录页'
    })
    router.push('/')
  } catch (error) {
    ElNotification.error({
      title: '登录失败',
      message: (error as Error).message
    })
  }
}
</script>

<template>
  <div class="login-container">
    <el-row >
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
            <h1>Hello</h1>
            <h2>欢迎来到登录页</h2>
          <el-form-item>
            <el-input v-model="login.username" placeholder="请输入用户名" :prefix-icon="User" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="login.password" placeholder="请输入密码" type="password" :prefix-icon="Lock" show-password />
          </el-form-item> 
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="handlelogin">登录</el-button>
          </el-form-item>
        </el-form>
        
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh; 
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login-form {
  position: relative;
  width: 80%;
  margin-top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
  h1 {
    color: #fff;
    font-size: 40px;
  }
  h2 {
    color: #fff;
    font-size: 20px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>