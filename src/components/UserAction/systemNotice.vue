<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="活动名称">
                        <span>{{ props.row.actionTitle }}</span>
                    </el-form-item>
                    <br>
                    <el-form-item label="活动日期">
                        <span>{{ props.row.activityDate }}</span>
                    </el-form-item>
                    <br>
                    <el-form-item label="适合用户">
                        <span>{{ props.row.activityUser }}</span>
                    </el-form-item>
                    <br>
                    <el-form-item label="活动描述">
                        <span>{{ props.row.actionMsg }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                label="活动名称"
                prop="actionTitle">
        </el-table-column>
        <el-table-column
                label="活动日期"
                prop="activityDate">
        </el-table-column>
        <el-table-column
                label="适合用户"
                prop="activityUser">
        </el-table-column>
    </el-table>
</template>

<script>
    import {getSystemNotification} from "../../api/user";

    export default {
        name: "systemNotice",
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
            }
        },
        mounted() {
            this.getGongGao()
        },
        methods:{
            getGongGao(){
                getSystemNotification().then(res=>{
                    console.log(res)
                    this.tableData=res.data;
                })
            }
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
