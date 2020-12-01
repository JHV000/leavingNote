<template>
<div class="form">
    <Form ref="formValidate" :model="formValidate" :label-width="80">
        <FormItem label="工号" prop="uid">
            <Input v-model="formValidate.uid" placeholder=""></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder=""></Input>
        </FormItem>
        
        <FormItem label="起始时间" prop="starttime">
            <DatePicker  @on-change="getStarttime" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择起始日期和时间" style="width: 200px"></DatePicker>
        </FormItem>
        
        <FormItem label="结束时间" prop="endtime">
            <DatePicker @on-change="getEndtime" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择结束日期和时间" style="width: 200px"></DatePicker>
        </FormItem>
        
        <FormItem label="请假事由" prop="reason">
            <Input v-model="formValidate.reason" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入请假原因" />
        </FormItem>
       
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
import global from '@/comm/global'
    export default {
        data () {
            return {
                formValidate: {
                    uid:global.uid,
                    name: global.username,
                    reason:'',
                    starttime:'',
                    endtime:''
                },
            }
        },
        methods: {
            handleSubmit (name) {
                // console.log(this.formValidate);
                this.$axios.post("/leave/addLeave",{
                    uid:this.formValidate.uid,
                    starttime:this.formValidate.starttime,
                    endtime:this.formValidate.endtime,
                    reason:this.formValidate.reason
                }).then((res)=>{
                    if(res==1){
                        this.$Message.success('提交成功！');
                    }else {
                        this.$Message.success('提交失败，请重试！');
                    }
                })

                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('Success!');
                //     } else {
                //         this.$Message.error('Fail!');
                //     }
                // })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            getStarttime(date){
                this.formValidate.starttime = date
            },
            getEndtime(date){
                this.formValidate.endtime = date
            }
        }
    }
</script>
<style>
.form {
    width: 50%;
    margin: 0 auto;
}
</style>