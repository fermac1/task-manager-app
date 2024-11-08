<template>
    <div class="page-container">
        <Sidebar />

        <div class="main-content">
            <p class="heading">Task</p>
        </div>
        
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

    export default {
        components: {
            Sidebar
        }
    }
</script>

<style scoped>
.page-container {
    display: flex;
}
.main-content {
    /* width: calc(100% - 60px); */
    /* margin-left: 60px; */
    padding: 20px;
    flex-grow: 1; /* Take the remaining space */
}
</style>