<template>
  <div class="process">
    <Table border :columns="columns1" :data="result">
        <!-- <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ column }" slot="status">
          <strong>{{ column.status }}</strong>
            <Button type="primary" v-if="column.status==1" size="small" style="margin-right: 5px">通过</Button>
            <Button type="error" v-if="column.status" size="small" >待审</Button>
        </template> -->
    </Table>
   
      
    </div>

  </div>
</template>
<script>
import global from "@/comm/global";
const cat_username = window.sessionStorage.getItem("cat_username");
const cat_uid = window.sessionStorage.getItem("cat_uid");
export default {
  data() {
    return {
      uid: cat_uid,
      username: cat_username,
      result: [],
      columns1: [
        {
          title: "id",
          key: "id",
        },
        {
          title: "工号",
          key: "uid",
        },
        {
          title: "姓名",
          key: "username",
        },
        {
          title: "起始时间",
          key: "starttime",
        },
        {
          title: "终止时间",
          key: "endtime",
        },
        {
          title: "请假原因",
          key: "reason",
        },
        {
          title: "审核状态",
          key: "status",
          render: (h, params) => {
            var type = "success"
            var mesg = "通过"
            if(params.row.status!=1){
              type = "warning",
              mesg = "待审"
            }
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: type,
                    size: "small",
                    
                  },
                  style: {
                    marginRight: "5px",
                    borderRadius:"5px"
                  },
                  
                },
                mesg
              ),
            ]);
          },
        },
      ],
    };
  },
  created() {
    this.$axios
      .get("/leave/queryAll", {
        params: { uid: this.uid },
      })
      .then((res) => {
        console.log(res);
        this.result = res;
      });
  },
};
</script>
<style>
.title span {
  /* width: 80px; */
  display: inline-block;
  padding: 10px 53px;
  font-weight: 700;
  /* margin: 0 50px; */
}
.title {
  background-color: #f8f8f9;
  width: 94%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.detail {
  display: flex;
  width: 85%;
  justify-content: space-between;
  margin: 20px auto;
  position: relative;
}
.detail::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
  position: absolute;
  bottom: -8px;
}
.detail div {
  width: 90px;
  padding: 0 20px;
}

.green {
  display: inline-block;
  background-color: #19be6b;
  vertical-align: 4px;
  padding: 10px;
  color: #ffffff;
  border-radius: 10px;
}
.red {
  display: inline-block;
  background-color: #ff9900;
  vertical-align: 4px;
  padding: 10px;
  color: #ffffff;
  border-radius: 10px;
}
</style>