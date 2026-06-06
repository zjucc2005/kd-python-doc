<script>
    import h from './library_function_data'
    export default {
        data() {
            return {
                data: [],
                node: {},
                filter_text: '',
            }
        },
        mounted() {
            this.data = this.parse_h(h)
        },
        methods: {
            parse_h(obj) {
                let d = []
                for (let k of Object.keys(obj)) {
                    if (k != '_v') {
                        d.push({ 
                            l: k, 
                            v: obj[k]._v, 
                            c: this.parse_h(obj[k])
                        })
                    }
                }
                return d
            },
            node_click(e) {
                this.node = e
            },
            node_filter(value, data) {
                if (!value) return true
                return data.l.toUpperCase().includes(value.toUpperCase())
            },
            filter_trigger(value) {
                this.$refs.treeRef.filter(value)
            }
        }
    }
</script>

<template>
    <el-row :gutter="15">
        <el-col :span="8">
            <el-input
                v-model="filter_text"
                placeholder="Filter keyword"
                @change="filter_trigger"
            />
            <el-scrollbar max-height="calc(100vh - 124px)">
                <el-tree
                    ref="treeRef"
                    :data="data"
                    :props="{ children: 'c', label: 'l' }"
                    accordion
                    :default-expand-all="false"
                    :filter-node-method="node_filter"
                    @node-click="node_click"
                    @node-expand="node_click"
                    @node-collapse="node_click"
                />
            </el-scrollbar>
        </el-col>
        <el-col :span="16">
            <el-card v-if="node.v" shadow="never">
                <p class="cc-text">{{ node.v }}</p>
            </el-card>
        </el-col>
    </el-row>
    
</template>

<style scoped>
    .el-card {
        --el-card-padding: 10px 15px;
    }
    .cc-text {
        font-size: 14px;
        color: #606266;
        white-space: pre-wrap;
    }
</style>
