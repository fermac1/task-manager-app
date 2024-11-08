import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

const baseUrl = import.meta.env.VITE_API_URL;

const router = useRouter();

export const useNotificationStore = defineStore('notificationStore', {
    state: () => ({
         // initialize state from local storage to enable user to stay logged in
         user: JSON.parse(localStorage.getItem('user')),
         notifications: [],
         messages: [],
        //  user: null,
        // isAuthenticated: false,
    }),
    actions: {
        async getNotifications(user) {
            this.user = user
           try {
            const notification = await axios.get(`${baseUrl}/notifications`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': user.data.token
                }
            })

            this.notifications = notification


           } catch (error) {
            console.log(error);
            
           }
        },
        addMessage(message) {
            this.messages.push(message);
        },

    }
})
