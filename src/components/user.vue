<template>
<div>
  <div class="search">
<Input  search enter-button="搜索" @on-search="search" placeholder="请输入姓名..." />
  </div>
  
  <div class="table">
<Table border :columns="columns7" :data="data6"></Table>
  </div>
   <Page :total="pageTotal" :current="pageIndex" :page-size="6"  @on-change="getIndex" class-name="pageIndex" />
</div>
  
  
</template>
<script>
export default {
  data() {
    return {
      pageIndex:1,
      pageTotal:50,
      columns7: [
        {
          title: "工号",
          key: "uid",
        },
        {
          title: "姓名",
          key: "username",
        },
        {
          title: "性别",
          key: "sex",
        },
        {
          title: "部门",
          key: "department",
        },
        {
          title: "联系方式",
          key: "phone",
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.delete(params.row, params.index);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
      data6: [],
    };
  },
  created() {
   this.getUserData()
  },
  methods: {
    search(chara){
      this.$axios.get("/user/search",{
        params:{
          chara:chara
        }
      }).then((res)=>{
        this.data6 = res
      })
      
    },
    getUserData(){
       this.$axios.get("/user/queryAll",{
         params:{
           index:this.pageIndex
         }
       }).then((res) => {
      this.data6 = res;
      
    });
    },
    getIndex(index){
      this.pageIndex = index
      this.getUserData()
      // console.log(index);
    },
    delete(row, index) {
      // console.log(row);
      var username = row.username;
      var uid = row.uid;
      var that = this
      this.$Modal.confirm({
        title: "提示",
        content: `确认删除${username}用户吗？`,
        onOk() {
          this.$axios
            .get("/user/delete", {
              params: {
                uid: uid,
              },
            })
            .then((res) => {
              if (res == 1) {
                that.data6.splice(index, 1);
                this.$Message.success("删除成功！");
              } else {
                this.$Message.success("删除失败，请重试！");
              }
            });
          // console.log(uid);
        },
      });
    },
    
  },
};
</script>
<style>
.search {
  width: 60%;
  margin: 20px auto;
}
</style>