<script>
    import { useSidebarStore } from '@/stores/sidebar';
    export default {
        data() {
            return {
                sidebar: useSidebarStore()
            }
        }
    }
</script>

<template>
    <el-scrollbar max-height="100vh">
        <el-menu default-active="dashboard" :router="true" :collapse="sidebar.collapse">
            <el-menu-item index="/dashboard">
                <el-icon><Home-filled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="/kd">
                <template #title>
                    <el-icon><ElementPlus /></el-icon>
                    <span>金蝶插件</span>
                </template>
                <el-menu-item index="/kd/library_function">
                    <el-icon><ArrowRight /></el-icon>
                    <span>库函数</span>
                </el-menu-item>
                <el-menu-item index="/kd/bill_plugin">
                    <el-icon><ArrowRight /></el-icon>
                    <span>表单插件</span>
                </el-menu-item>
                <el-menu-item index="/kd/list_plugin">
                    <el-icon><ArrowRight /></el-icon>
                    <span>列表插件</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<style scoped>
    .el-menu {
        min-height: 100vh;
        --el-menu-bg-color: #304156;
        --el-menu-hover-bg-color: #1d2b3b;
        --el-menu-text-color: #ffffff;
        --el-menu-active-color: #409eff;
    }
</style>