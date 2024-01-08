<template>
  <span>
    <!-- 默认展示 新增自定义class -->
    <span v-if="column.text" :class="getClassName(row,index)">{{ row[column.prop] }}</span>
    <!-- 状态对象展示 -->
    <span v-if="column.status && row[column.prop]" :class="getClassName(row,index)">{{ row[column.prop].msg }}</span>
    <!-- 自定义内容 -->
    <span v-if="column.ownDefined" :class="getClassName(row,index)">{{ column.ownDefinedReturn(row,index) }}</span>
    <!-- switch开关 -->
    <el-switch
      v-if="column.switch"
      v-model.trim="row[column.prop]"
      :class="getClassName(row,index)"
      :inactive-text="row[column.prop] ? column.openText:column.closeText"
      @change="switchChange(row,index,column.prop)"
    />
    <!-- 块元素展示 -->
    <div v-if="column.div">
      <div v-for="(one,rowI) in row[column.prop]" :key="rowI">{{ one }}</div>
    </div>
    <!-- 图片展示 -->
    <el-popover trigger="hover" placement="top" popper-class="popper">
      <!--            <img v-if="column.image" :src="row[column.prop]">-->
      <el-image v-if="column.image" slot="reference" :class="getClassName(row,index)" :src="row[column.prop]" />
    </el-popover>
    <!-- 大图预览展示 -->
    <el-image v-if="column.previewImage" :src="row[column.prop]" :preview-src-list="[row[column.prop]]" style="display: block;">
      <div slot="error" class="image-slot"><i class="el-icon-picture-outline" /></div>
    </el-image>
    <!-- 可编辑input，仅在text默认展示类型才可编辑-->
    <el-input
      v-if="column.editRow == index && column.text"
      v-model.trim="row[column.prop]"
      v-focus
      :class="getClassName(row,index)"
      @blur="editInputBlur(row,index,column.prop,columIndex)"
    />
    <slot v-if="column.ownSlot" :name="column.prop" />
    <!-- 操作按钮  add disabled status by hxf -->
    <template v-if="column.isOperation" :class="getClassName(row,index) || ''">
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
  </span>
</template>

<script>
export default {
  name: 'TTableCol',
  props: {
    row: {
      type: Object
    },
    index: {
      type: Number
    },
    column: {
      type: Object
    }
  },
  inject: ['switchChange', 'editInputBlur', 'rowOperation', 'maxShow'],
  computed: {
    isShowOperation() {
      return this.column.operation.filter(item => !item.isShow || item.isShow(this.row, this.index))
    }
  },
  methods: {
    getClassName(row, index) {
      return this.column.ownClassName ? this.column.ownClassName(row, index) : this.column.className
    },
    moreCount(row, index) {
      const arr = this.isShowOperation.slice(this.maxShow)
      if (arr.length == 0) return 0
      return arr.filter(item => {
        return !item.isShow || item.isShow(row, index)
      }).length
    }
  }
}
</script>

<style scoped lang="scss">
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
