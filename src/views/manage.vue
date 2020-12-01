<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100vh' }">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu
          active-name="1-1"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
        >
          <MenuItem @click.native="showCard(1)" name="1-1">
            <Icon type="md-clipboard" />
            审批假条
          </MenuItem>

          <MenuItem @click.native="showCard(2)" name="1-2">
            <Icon type="md-checkmark-circle-outline" />
            人员管理
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header
          :style="{
            background: '#fff',
            boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
          }"
        >
          <!-- <span>{{ username }}</span> -->
        </Header>
        <Content :style="{ padding: '0 16px 16px' }">
          <Breadcrumb :style="{ margin: '16px 0' }"> </Breadcrumb>
          <Card>
            <div style="height: 600px" v-if="showId == 1">
            <card></card>
             
            </div>
            <div style="height: 600px" v-if="showId == 2">
              <user></user>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import user from '@/components/user'
import card from '@/components/card'
export default {
  name: "manage",
  components: {
   user,
   card
  },
  data() {
    return {
      isCollapsed: false,
      showId: 1,
    };
  },
  computed: {
    menuitemClasses: function () {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  methods: {
    showCard(id) {
      this.showId = id;
      // console.log(this.$root.username)
    },
  },
};
</script>
<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>