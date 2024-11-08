import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
import { useUserStore } from '@/stores/UserStore';

const baseUrl = import.meta.env.VITE_API_URL;

const router = useRouter();

export const useAuthStore = defineStore('authStore', {
    state: () => ({
         // initialize state from local storage to enable user to stay logged in
         user: JSON.parse(localStorage.getItem('user')),
         returnUrl: null
        //  user: null,
        // isAuthenticated: false,
    }),
    actions: {
        async login(email, password) {
const userStore = useUserStore();

            // const formData = {
            //     email: email,
            //     password: password
            // }
            try {
                 
                const user = await axios.post(`${baseUrl}/login`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    email, password
                    // body: JSON.stringify({
                    //     email,
                    //     password,
                    // }),
                })

                // update pinia state
                this.user = user;

                userStore.setUserId(user); // Set the dynamic user ID


                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));

                // redirect to previous url or default to home page
                // router.push(this.returnUrl || '/');
                //  router.push({name: 'Dashboard'})
                //  await router.push('/dashboard')
                this.router.push('/dashboard');
                console.log('success');
                
            } catch (error) {
                // const alertStore = useAlertStore();
                // alertStore.error(error);        
                console.log(error);
                        
            }
        },

        // async login(username, password) {
        //     // Simulating a dummy API call
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             // Replace this logic with your actual API call
        //             if (username === 'admin' && password === 'password') {
        //                 this.user = { username }; // Set user data
        //                 this.isAuthenticated = true; // Update authentication status
        //                 resolve(this.user);
        //             } else {
        //                 reject('Invalid credentials');
        //             }
        //         }, 1000); // Simulate network delay
        //     });
        // },
    }
})
