<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 left-column"></div>
            <div class="col-lg-6 right-column">
                <div class="form-container">
                    <p class="heading">Create An Account</p>
                    <form action="" method="post">
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstName">
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                        <div class="mb-3">
                            <div>
                                Already have an account? <a class="link" @click="SignInLink">Log in</a>
                            </div>
                        </div>
                        <button type="submit" class="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

    export default {
        setup(){
            const router = useRouter()

            const SignInLink = () => {
                router.push({name: 'SignIn'})
            }

            return { SignInLink }
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
        margin: 80px 50px;
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