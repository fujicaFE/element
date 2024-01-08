<template>
  <span>
    <template v-if="column.children&&column.children.length>0&&column.isShow">
      <el-table-column
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :min-width="column.minwidth"
        :fixed="column.fixed"
        :align="column.align || 'left'"
        :sortable="column.sortable"
        :sort-method="(a, b) => {return a[column.prop] - b[column.prop]}"
        :index="columIndex"
        :show-overflow-tooltip="column.tooltip == null ? true : column.tooltip"
        :render-header="(h)=>renderHeader(h,column)"
      >
        <template v-for="(item, index) of column.children">
          <el-table-column
            v-if="item.isShow"
            :key="`${item.prop}_${index}`"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :min-width="item.minwidth"
            :fixed="item.fixed"
            :align="item.align || 'left'"
            :sortable="item.sortable"
            :sort-method="(a, b) => {return a[item.prop] - b[item.prop]}"
            :index="index"
            :show-overflow-tooltip="item.tooltip == null ? true : item.tooltip"
            :render-header="(h)=>renderHeader(h,item)"
          >
            <template slot-scope="{row,$index}">
              <t-table-col :column="item" :row="row" :index="$index">
                <template :slot="column.prop" slot-scope="data">
                  <slot :name="column.prop" :msg="data.msg" />
                </template>
              </t-table-col>
            </template>
          </el-table-column>
        </template>
      </el-table-column>
    </template>
    <template v-else-if="column.isShow">
      <el-table-column
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
        :render-header="(h)=>renderHeader(h,column)"
      >
        <template slot-scope="{row,$index}">
          <t-table-col :column="column" :row="row" :index="$index">
            <template :slot="column.prop">
              <slot :name="column.prop" :row="row" :index="$index" />
            </template>
          </t-table-col>
        </template>
      </el-table-column>
    </template>
  </span>
</template>

<script>
import Vue from 'vue'
import TTableCol from '@/components/ElmTable/temp/TTableCol.vue'

export default {
  name: 'TTableColumn',
  components: { TTableCol },
  props: {
    column: {
      type: Object
    },
    columIndex: {
      type: Number
    }
  },
  watch: {
    column: {
      handler() {
        console.log(111, this.column)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
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
    sortMethod(a, b, column) {
      if (column.sortType == 'date') { return new Date(a[column.prop]) - new Date(b[column.prop]) } else if (column.ownDefinedSort) {
        return column.ownDefinedSort(a, b)
      } else {
        return a[column.prop] - b[column.prop]
      }
    }
  }
}
</script>

<style scoped>

</style>
