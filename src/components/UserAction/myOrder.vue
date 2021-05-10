<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                        <span>{{ props.row.goodName }}</span>
                    </el-form-item>
                    <el-form-item label="发起者">
                        <span>{{ props.row.orderOwner }}</span>
                    </el-form-item>
                    <el-form-item label="商品价格">
                        <span>{{ props.row.goodPrice }}</span>
                    </el-form-item>
                    <el-form-item label="商品尺寸">
                        <span>{{ props.row.goodSize }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <span>{{ props.row.goodDes }}</span>
                    </el-form-item>
                    <br>
                    <el-form-item v-if="userId==props.row.goodOwner&&props.row.goodStatus=='待发货'">
                        <el-button type="text" @click="updateStatus(props.row,2)"> 发货</el-button>
                    </el-form-item>
                    <el-form-item v-if="userId==props.row.orderOwner&&props.row.goodStatus=='已发货'">
                        <el-button type="text" @click="updateStatus(props.row,3)"> 已收货</el-button>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                label="商品名称"
                prop="goodName">
        </el-table-column>
        <el-table-column
                label="所有者"
                prop="goodOwner">
        </el-table-column>
        <el-table-column
                label="状态"
                prop="goodStatus">
        </el-table-column>
    </el-table>
</template>

<script>
    import {getMyOrder, shipItem} from "../../api/user";

    export default {
        name: "myOrder",
        data() {
            return {
                tableData: [],
                userId: this.$store.getters.getUserId
            }
        },
        methods: {
            OrderGet() {
                let params = {userId: this.$store.getters.getUserId}
                getMyOrder(params).then(res => {
                    console.log(res);
                    this.tableData = res.data;
                })
            },
            updateStatus(item,status) {
                console.log(item)
                let param = {goodId: item.goodId,status: status}
                shipItem(param).then(res => {
                    console.log(res)
                    this.OrderGet()
                })

            }
        },
        mounted() {
            this.OrderGet()
        }
    }
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
