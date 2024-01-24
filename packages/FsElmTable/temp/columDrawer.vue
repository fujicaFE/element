<template>
  <el-drawer
    title="列设置"
    :visible.sync="drawer"
    direction="rtl"
    :size="400"
    :before-close="handleClose"
  >
    <div slot="title">
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange" />
      <span>列设置</span>
    </div>
    <div class="demo-drawer__content">
      <el-tree
        ref="tree"
        class="checkboxs"
        :data="columns"
        show-checkbox
        default-expand-all
        node-key="prop"
        highlight-current
        :check-on-click-node="true"
        :filter-node-method="filterNode"
        :props="defaultProps"
        @check="checkChange"
      />
      <!--      <el-checkbox-group v-model="checkedColumns" class="checkboxs" @change="handleCheckedColumnsChange">-->
      <!--        <el-checkbox v-for="(item,index) in columns" :key="item.label" :label="item.label">{{ item.label }}</el-checkbox>-->
      <!--      </el-checkbox-group>-->
      <div class="demo-drawer__footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { deepClone } from '@/utils'
export default {
  name: 'ColumDrawer',
  data() {
    return {
      drawer: false,
      checkAll: true, // 全选值
      columns: [], // 列设置数据
      checkedColumns: [], // 已选择的列数据
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    // 是否是半选
    isIndeterminate() {
      return !(this.handleGetAllKeys(this.columns).length == this.checkedColumns.length || this.checkedColumns.length == this.handleGetSetableKeys(this.columns).length) && !this.checkAll
    }
  },
  methods: {
    open(colums) {
      this.columns = deepClone(colums)
      this.$nextTick(() => {
        this.$refs.tree.filter()
      })
      this.handleFirstCheck()
      this.drawer = true
    },
    handleClose() {
      this.checkedColumns = []
      this.drawer = false
    },
    submit() {
      if (this.checkedColumns.length == 0) {
        this.$message.warning('请选择至少一项列展示')
        return false
      }
      this.$emit('change', this.columns)
      this.handleClose()
    },
    // 过滤掉 配置为 不可自定义列设置的 列数据
    filterNode(value, data) {
      return data.columnsetable !== false
    },
    handleCheckedColumnsChange(e) {
      this.columns.map(item => {
        item.isShow = this.checkedColumns.includes(item.prop)
      })
    },
    /**
     * 全选/全不选
     */
    handleCheckAllChange(val) {
      this.checkedColumns = []
      if (val) {
        this.checkedColumns = this.handleGetAllKeys(this.columns)
      }
      this.handleCheck(this.columns, this.checkedColumns)
      this.handleIsCheck()
    },
    /**
     * 递归 拿到所有节点的keys
     * @param data
     * @param keys
     */
    handleGetAllKeys(data) {
      const arr = []
      data.map(item => {
        arr.push(item.prop)
        if (item.children && item.children.length > 0) {
          arr.push(...this.handleGetAllKeys(item.children))
        }
      })
      return arr
    },
    /**
     * 递归 拿到所有不可自定义设置列节点的keys
     * @param data
     * @param keys
     */
    handleGetSetableKeys(data) {
      const arr = []
      data.map(item => {
        item.columnsetable === false ? arr.push(item.prop) : ''
        if (item.children && item.children.length > 0) {
          item.columnsetable === false ? arr.push(...this.handleGetAllKeys(item.children)) : ''
        }
      })
      return arr
    },
    /**
     * tree 组件复选框被点击的时候触发
     */
    checkChange(item, { checkedKeys, halfCheckedKeys }) {
      this.checkedColumns = checkedKeys.concat(halfCheckedKeys)
      this.handleCheck(this.columns, checkedKeys.concat(halfCheckedKeys))
      this.checkAll = this.handleGetAllKeys(this.columns).length == this.checkedColumns.length
    },
    /**
     * 递归 设置表头显示状态
     * @param data
     * @param keys
     */
    handleCheck(data, keys) {
      data.map(item => {
        item.isShow = item.columnsetable == false ? true : keys.includes(item.prop)
        if (item.children && item.children.length > 0) {
          this.handleCheck(item.children, keys)
        }
      })
    },
    /**
     * 设置tree选中
     */
    handleIsCheck() {
      this.checkedColumns = []
      this.columns.map(item => {
        item.isShow ? this.checkedColumns.push(item.prop) : ''
        if (item.children && item.children.length > 0) {
          item.children.map(ii => {
            ii.isShow ? this.checkedColumns.push(ii.prop) : ''
          })
        }
      })
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(this.checkedColumns)
      })
      this.checkAll = this.handleGetAllKeys(this.columns).length == this.checkedColumns.length
    },
    /**
     * 设置tree 初次选中
     */
    handleFirstCheck() {
      this.checkedColumns = []
      this.checkAll = true
      this.columns.map(item => {
        if (item.children && item.children.length > 0) {
          item.children.map(ii => {
            ii.isShow ? this.checkedColumns.push(ii.prop) : this.checkAll = false
          })
        } else {
          item.isShow ? this.checkedColumns.push(item.prop) : this.checkAll = false
        }
      })
      console.log(this.checkedColumns)
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(this.checkedColumns)
      })
    }
  }
}
</script>

<style scoped lang="scss">
/deep/.el-drawer__body{
  padding: 20px;
}
.demo-drawer__content{
  display: flex;
  flex-direction: column;
  height: 100%;

  .checkboxs{
    flex: 1;
    overflow-y: auto;
    .el-checkbox{
      display: block;
      margin-bottom: 24px;
    }
  }
  .demo-drawer__footer{
    display: flex;
    button{
      flex: 1;
    }
  }
}
</style>
