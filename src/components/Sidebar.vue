<template>
    <div class="sidebar">
        <router-link
            v-for="item in items"
            :key="item.name"
            :to="item.path"
            class="sidebar-item"
            active-class="active"
            exact-active-class="active"
        >
            <i :class="item.icon" class="icon"></i>
            <span class="name">{{ item.name }}</span>
        </router-link>

    </div>
  </template>
  
  <script>
import { ref } from 'vue';

  export default {
    setup () {
        const showName = ref('')
        const selectedItem = ref({})
        const items = ref([
            { name: 'Home', icon: 'bi bi-house', path: '/dashboard' },
            { name: 'Task', icon: 'bi bi-list', path: '/task' },
            { name: 'Settings', icon: 'bi bi-gear' },
            { name: 'Profile', icon: 'bi bi-person' },
        ])

        const selectItem = (item) => {
            selectedItem.value = item;
        }

        return {showName, items, selectItem}
    }

  };
  </script>
  
<style>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 60px;
  background-color: #f4f4f4; 
  height: 100vh;
}

.sidebar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
  cursor: pointer;
}

.icon {
  font-size: 24px; /* Adjust icon size */
}

/* Adjusting the name position to the right */
.name {
  position: absolute;
  left: 70px; /* Position to the right of the sidebar */
  top: 50%;
  transform: translateY(-50%);
  background-color: #333; /* Background color for the name */
  color: white; /* Text color */
  padding: 5px;
  border-radius: 3px;
  white-space: nowrap;
  display: none;
  z-index: 1;
}
.sidebar-item:hover .name {
  display: inline-block;
}
</style>