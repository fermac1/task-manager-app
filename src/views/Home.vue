<template>
    <div class="home-container">
        <div class="heading">Task Manager</div>
        <div class="buttons">
            <button @click="signIn">Log in</button>
            <button @click="signUp">Sign up</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

    export default {
        setup() {
            const router = useRouter()

            const signIn = () => {
                router.push({name: 'SignIn'})
            }
            const signUp = () => {
                router.push({name: 'SignUp'})
            }

            return { signIn, signUp }
        }
    }
</script>

<style>
.home-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
}
.heading {
    font-size: 50px;
    font-weight: 600;
    display: block;
    color: #3795BD;
}
.buttons {
    display: flex; 
    justify-content: center;
    margin-top: 10px;
}
.buttons button {
    margin: auto 10px;
    padding: 8px 15px;
    width: 250px;
    border-radius: 8px;
    background: #3795BD;
    border: transparent;
    color: #ffffff;
    font-weight: 600;
}
.buttons button:hover {
    color: #3795BD;
    border: 1px solid #3795BD;
    background: transparent;
}
</style>
