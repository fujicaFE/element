<template>
  <div>
    <el-row class="mb-40">
      <i v-if="isColumSet" style="min-width: auto;float: right" class="el-icon-s-operation" @click="showColumDrawer" />
      <!--    自定义列展示-->
      <el-table
        ref="EleTable"
        v-loading="loading"
        size="medium"
        :data="tableData"
        :stripe="false"
        :border="border"
        fit
        :lazy="columObj.lazy"
        :show-summary="showSummary"
        :summary-method="summaryMethod"
        :row-key="rowKey"
        :show-header="true"
        :tree-props="treeProps"
        :highlight-current-row="true"
        :row-class-name="tableRowClassName"
        :default-expand-all="defaultExpandAll"
        :load="load"
        @row-click="rowClick"
        @selection-change="$emit('selectionChange', $event)"
        @select="(selection,row)=>{this.$emit('select',selection,row)}"
        @select-all="$emit('selectAll', $event)"
      >
        <!-- 选择框是否开启，selectable控制是否单行禁用 -->
        <el-table-column v-if="columObj.selection" type="selection" :reserve-selection="true" :width="columObj.sWidth || 55" :selectable="columObj.selectable" />
        <!--解决自定义表头顺序错乱 问题 现象:第一列变成最后一列渲染 -->
        <!-- 普通列 -->
        <template v-for="(column,columIndex) in showColumnData">
          <el-table-column
            v-if="column.isShow"
            :key="column.prop"
            :prop="column.prop"
            :label="column.label"
            :width="column.width"
            :min-width="column.minwidth"
            :fixed="column.fixed"
            :align="column.align || 'left'"
            :sortable="column.sortable"
            :sort-method="(a,b)=>sortMethod(a, b,column)"
            :index="columIndex"
            :show-overflow-tooltip="column.tooltip == null ? true : column.tooltip"
          >
            <template slot-scope="{row,$index}">
              <span v-if="column.text" :class="getClassName(row,index,column)">{{ row[column.prop] }}</span>
              <!-- 状态对象展示 -->
              <span v-else-if="column.ownDefined" :class="getClassName(row,index,column)">{{ column.ownDefinedReturn(row,index) }}</span>
              <slot v-else-if="column.ownSlot" :name="column.prop" :row="row" :index="$index" />
              <el-image v-else-if="column.previewImage" :src="row[column.prop]" :preview-src-list="[row[column.prop]]" style="display: block;">
                <div slot="error" class="image-slot"><i class="el-icon-picture-outline" /></div>
              </el-image>
              <template v-else-if="column.isOperation">
                <span v-for="(operations, index) in maxShow==0?isShowOperation : isShowOperation.slice(0,maxShow)" :key="index">
                  <!--操作按钮-->
                  <el-tooltip
                    :disabled="!operations.isTooltip"
                    effect="light"
                    placement="right"
                  >
                    <el-button
                      v-if="operations.isShow ? operations.isShow(row,index) : true"
                      :icon="operations.icon"
                      :type="operations.type"
                      :style="{color:operations.color}"
                      :disabled="operations.disabled ? operations.disabled(row,index) : false"
                      size="small"
                      @click="rowOperation(row,index,operations.operation)"
                    >{{ operations.labelRow?operations.labelRow(row,index):operations.label }}</el-button>
                    <div slot="content">{{ operations.tooltipText }}</div>
                  </el-tooltip>
                </span>
                <el-dropdown v-if="isShowOperation.length>maxShow&&maxShow!=0&&moreCount(row,index)>0" id="dropdown" ref="dropdown" :hide-on-click="false" trigger="click">
                  <span class="el-dropdown-link">
                    更多<i class="el-icon-arrow-down el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="(operations, index) in isShowOperation.slice(maxShow)"
                      :key="index"
                      :disabled="operations.disabled ? operations.disabled(row,index) : false"
                      @click.native="rowOperation(row,index,operations.operation)"
                    >
                      <el-tooltip
                        v-if="operations.isShow ? operations.isShow(row,index) : true"
                        :disabled="!operations.isTooltip"
                        effect="light"
                        placement="right"
                      >
                        <div> {{ operations.labelRow?operations.labelRow(row,index):operations.label }}</div>
                        <div slot="content">{{ operations.tooltipText }}</div>
                      </el-tooltip>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-row>
    <!-- 分页 -->
    <div v-if="showPage" class="page_div" :style="{textAlign: pageObj.position || 'center'}">
      <pagination
        v-show="pageObj.total>0"
        :total="pageObj.total"
        :page.sync="pageObj.current"
        :limit.sync="pageObj.size"
        @pagination="getList"
      />
    </div>
    <ColumDrawer ref="columDrawer" @change="chandelColumChange" />
  </div>
</template>

<script>
import Vue from 'vue'
import ColumDrawer from './temp/columDrawer.vue'
import { deepClone } from '../utils'

export default {
  directives: {
    // 自定义指令,用于可编辑input自动获取焦点
    focus: {
      inserted: function(e) {
        e.querySelector('input').focus()
      }
    }
  },
  components: { ColumDrawer },
  props: {
    // 否认不展开
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    border: {
      type: Boolean,
      default: true
    },
    showPage: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    fit: {
      type: Boolean,
      default: true
    },
    tableData: {
      type: Array,
      required: true
    },
    height: {
      type: String,
      default: '100%'
    },
    columObj: {
      type: Object,
      default: () => {
        return { columnData: [] }
      },
      required: true
    },
    // columObj.type(如果为""空，就不会加载多选框，或者index编号),lazy(是否支持懒加载)
    // columnData.columType(列类型,可选text(默认为普通文字模式),input(input可编辑框),switch(switch开关),image(图片),operation(操作按钮))
    // prop(参数),label(列名),width(宽度),align(对齐方式),sortable(是否支持排序)
    // 如果为操作列,则需要填写需要的操作按钮,类型为Object。operation(操作类型,可选edit,delete,see),type(按钮样式,参考el—botton类型),label(按钮文字)icon(参考el-icon),color(字体颜色)
    pageObj: {
      type: Object,
      default: () => {
        return {}
      },
      required: true
    },
    // 最大展示数，默认3个，超过则隐藏，为0时不限制
    maxShow: {
      type: Number,
      default: 3
    },
    // 是否可自定义表格展示列
    isColumSet: {
      type: Boolean,
      default: true
    },
    // 渲染嵌套数据的配置选项
    treeProps: {
      type: Object
    },
    // 是否显示合计行
    showSummary: {
      type: Boolean,
      default: false
    },
    // 自定义合计行的函数
    summaryMethod: {
      type: Function
    },
    // 加载子节点数据的函数
    load: {
      type: Function
    },
    // 行的 className 的回调方法，
    rowClassName: {
      type: Function
    }
  },
  data() {
    // const readUploadFileUrl = this.$store.state.user.readUploadFileUrl
    return {
      // viewUrl: readUploadFileUrl
      showColumnData: [], // 使用的表格列表配置数据
      column: {
        operation: []
      }
    }
  },
  computed: {
    isShowOperation() {
      // 查询showColumnData中含有isOperation为true的列
      return this.column.operation
    }
  },
  watch: {
    'columObj.columnData': {
      handler() {
        this.showColumnData = deepClone(this.columObj.columnData)
        this.column = this.showColumnData.find((item, index) => {
          if (item.isOperation) {
            this.index = index
            this.row = item.operation
            return true
          }
        })
        this.showColumnData.map(item => {
          item.isShow = true
          if (item.children && item.children.length > 0) {
            item.children.map(ii => {
              ii.isShow = true
            })
          }
        })
      },
      immediate: true,
      deep: true
    }
  },
  provide() {
    return {
      switchChange: this.switchChange,
      editInputBlur: this.editInputBlur,
      rowOperation: this.rowOperation,
      maxShow: this.maxShow
    }
  },
  beforeUpdate() {
    this.$nextTick(() => {
      this.$refs.EleTable?.doLayout()
    })
  },
  methods: {
    sortMethod(a, b, column) {
      if (column.sortType == 'date') { return new Date(a[column.prop]) - new Date(b[column.prop]) } else if (column.ownDefinedSort) {
        return column.ownDefinedSort(a, b)
      } else {
        return a[column.prop] - b[column.prop]
      }
    },
    moreCount(row, index) {
      const arr = this.isShowOperation.slice(this.maxShow)
      if (arr.length == 0) return 0
      return arr.filter(item => {
        return !item.isShow || item.isShow(row, index)
      }).length
    },
    change() {
      this.showColumnData[0].isShow = !this.showColumnData[0].isShow
      this.$forceUpdate()
    },
    getClassName(row, index, column) {
      return column.ownClassName ? column.ownClassName(row, index) : column.className
    },
    /**
     * 表格头部扩展 可传入自定义的template 代码片段
     * @param h
     * @param column
     * @returns {*}
     */
    renderHeader(h, column) {
      if (!column.ownHeader) {
        return h('span', column.label)
      } else {
        const com = Vue.extend({ template: column.ownHeaderHtml })
        return h(com)
      }
    },
    // 行操作
    rowOperation(row, $index, now) {
      this.$emit('rowOperation', row, $index, now)
    },
    // switchChange调用
    switchChange(row, $index, prop) {
      this.$emit('switchChange', row, $index, prop)
    },
    // 帮助点击行，获取点击的下标
    tableRowClassName({
      row,
      rowIndex
    }) {
      row.rowIndex = rowIndex
      if (this.rowClassName) {
        return this.rowClassName({ row, rowIndex })
      }
    },
    // 点击行
    rowClick(row, column, event) {
      this.$emit('rowClick', row, column, event)
    },
    // 可编辑input失去焦点
    editInputBlur(row, $index, prop, columIndex) {
      this.$emit('editInputBlur', row, $index, prop, columIndex)
    },
    getList() {
      this.$emit('getList')
    },
    clearSelection() {
      this.$refs.EleTable.clearSelection()
    },
    /**
     * 表格列设置弹框打开
     */
    showColumDrawer() {
      this.$refs.columDrawer.open(this.showColumnData)
    },
    /**
     * 表格列展示调整
     */
    chandelColumChange(colums) {
      this.showColumnData = colums
      console.log(colums)
    },
    /**
     * 表格折叠展开
     * @param row
     * @param expanded
     */
    toggleRowExpansion(row, expanded) {
      this.$refs.EleTable.toggleRowExpansion(row, expanded)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-icon-s-operation{
  min-width: auto;
  float: right;
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 12px;
  color: #606060;
  font-size: 20px;
  cursor: pointer;
}
/deep/.el-table__footer-wrapper tbody td, /deep/.el-table__footer tbody td  {
  padding: 7.5px 0;
  background-color: #f5f7fa;
  color: #606266;
}
/deep/.el-table__body-wrapper .fluous-column{
  width: 0px;
  .cell{
   padding: 0px;
  }
}
.el-button {
  margin: 0 6px;
}

/deep/.el-table .el-input__inner {
  border: none;
}

/deep/.el-image__inner {
  height: 50px;
}

// switch左边文字颜色
/deep/.el-switch__label--left {
  color: #606266;
}

img {
  height: 400px;
}
/deep/.el-image {
  background-color: #f5f7fa;
  width: 100%;
  max-width: 80px;
  height: 54px;
  .image-slot {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  .el-icon-picture-outline {
    font-size: 20px;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #2D72FF;
  font-size: 12px;
}

.el-table__body-wrapper{
  z-index: 2;
}
</style>
