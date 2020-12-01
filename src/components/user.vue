<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
export default {
  data() {
    return {
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
    this.$axios.get("/user/queryAll").then((res) => {
      this.data6 = res;
      //   console.log(res);
    });
  },
  methods: {
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
