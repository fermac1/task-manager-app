// stores/useUserStore.js

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: null,
        messages: [],
    }),
    actions: {
        setUserId(id) {
            this.userId = id;
        },
        addMessage(message) {
            this.messages.push(message);
        },
    },
});
