<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 left-column"></div>
            <div class="col-lg-6 right-column">
                <div class="form-container">
                    <p class="heading">Sign Into Your Account</p>
                    <form @submit.prevent="onSubmit(email, password)" method="post">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password">
                        </div>
                        <div class="mb-3 form-check">
                            <div>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <div>
                                <a href="" class="link">Forgot Password?</a>
                            </div>
    
                        </div>
                        <p>Not registered yet? <a class="link" @click="SignUpLink">Create an account</a></p>
                        <button type="submit" class="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    export default {
        setup(){
            const router = useRouter()
            const authStore = useAuthStore()

            const email = ref('')
            const password = ref('')

            const SignUpLink = () => {
                router.push({name: 'SignUp'})
            }

            const onSubmit = async(email, password) =>{
                await authStore.login(email, password);
                // await authStore.login(router, '/dashboard');
                // router.push({name: 'Dashboard'})
            }

            return { SignUpLink, onSubmit, email, password }
        }
    }
</script>

<style scoped>
    .left-column {
        background-image: url('../../assets/bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
    }
    .form-container {
        margin: 100px 50px;
    }
    .form-container .heading {
        font-size: 20px;
        font-weight: 600;
    }
    .form-check {
        display: flex;
        justify-content: space-between;
    }
    .submit-btn {
        width: 100%;
        border-radius: 8px;
        background: #3795BD;
        border: transparent;
        color: #ffffff;
        font-weight: 600;
        padding: 10px;
    }
    .submit-btn:hover {
        color: #3795BD;
        border: 1px solid #3795BD;
        background: transparent;
    }
    .link {
        color: #3795BD;
        cursor: pointer;
    }
    .form-control:focus {
        box-shadow: none;
    }

    @media screen and (max-width: 992px) {
        .left-column {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        .left-column {
            display: none;
        }
    }
</style>