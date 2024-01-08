<template>
  <div class="keyboard-content">
    <div class="card">
      <div class="point" />
      <div
        v-for="(item, index) in divList"
        :key="item.id"
        class="grid"
        :class="`${index == current ? 'classborder' : ''} ${index == current2&&boxFlag? 'classborder2' : ''}`"
        @click.stop="divClick(index)"
      >
        <span>{{ item.value }}</span>
      </div>
    </div>
    <!--自定义键盘 中文-->
    <div v-if="show||show1" class="keyboard">
      <div class="close" @click.stop="hideClick">关闭</div>
      <div v-if="show">
        <div class="content">
          <div v-for="item in list" :key="item.id" class="region" @click.stop="btnClick(item)">
            {{ item.font }}
            <img v-if="item.id == 33" src="./assets/delect.png">
          </div>
        </div>
      </div>
      <!--自定义键盘 英文-->
      <div v-if="show1">
        <div class="content content1">
          <div v-for="item in list1" :key="item.id" :class="{'region':true,'btn-disabled':btnFlag(item)}" @click.stop="btnClick(item)">
            {{ item.font }}
            <img v-if="item.id == 38" src="./assets/delect.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './assets/keyboard.json'
export default {
  name: 'Keyboard',
  data() {
    return {
      show: false,
      show1: false,
      current: 100,
      current2: 7,
      boxFlag: true,
      divList: [
        { id: 1, value: '' },
        { id: 2, value: '' },
        { id: 3, value: '' },
        { id: 4, value: '' },
        { id: 5, value: '' },
        { id: 6, value: '' },
        { id: 7, value: '' },
        { id: 8, value: '新能源' }
      ],
      list: [],
      list1: [],
      carData: ''
    }
  },
  watch: {
    divList: {
      deep: true,
      handler: function(ev) {
        if (ev[7].value != '新能源') {
          this.boxFlag = false
        } else {
          this.boxFlag = true
        }
      }
    }
  },
  methods: {
    hideClick() {
      this.show = false
      this.show1 = false
      this.current = 100
    },
    clearDiv() {
      this.divList.map((item, index) => {
        if (index == 7) {
          item.value = '新能源'
          this.current2 = index
        } else {
          item.value = ''
        }
      })
    },
    btnFlag(item) { // 按钮是否显示
      var indexs = this.current
      return (
        indexs != 6 && [35, 36, 37, 39, 41].includes(item.id) ||
        indexs == 1 && item.id <= 10 && item.id != 38 && !['M', '虚'].includes(this.divList[0].value) ||
        indexs != 1 && item.id == 40 // 字母O
      )
    },
    btnClick(item) {
      var indexs = this.current
      if (!this.btnFlag(item)) {
        if (item.id == 33 && indexs == 0) {
          this.divList[indexs].value = ''
        } else if (item.id == 38) {
          if (indexs != 7) {
            this.divList[indexs].value = ''
          } else {
            this.divList[indexs].value = '新能源'
            this.current2 = indexs
            this.boxFlag = true
          }
          this.current = indexs - 1
        } else {
          this.divList[indexs].value = item.font
          this.current = indexs + 1
        }
        if (this.current == 0) {
          this.list = data.chinese
          this.show = true
          this.show1 = false
        } else if (this.divList[0].value == 'M' && (/[^0-9]/.test(this.divList[1].value) && this.current == 6 || !/[^0-9]/.test(this.divList[1].value) && this.current == 5)) {
          this.show1 = false
          this.current = 100
        } else if (this.current == 7) {
          this.show1 = false
          this.current = 100
        } else if (this.current == 8) {
          this.show1 = false
          this.current = 100
          this.current2 = 100
        } else {
          this.list1 = data.English
          this.show1 = true
          this.show = false
        }
        this.dataValue()
        this.$emit('carplate')
      }
    },
    dataValue() {
      this.carData = ''
      for (var i in this.divList) {
        if (this.divList[i].value != '新能源') {
          this.carData += this.divList[i].value
        }
      }
    },
    divClick(index) {
      if (index == 0) {
        this.list = data.chinese
        this.show = true
        this.show1 = false
      } else {
        this.list1 = data.English
        this.show1 = true
        this.show = false
      }
      this.current = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .btn-disabled{
  	background: #c0c0c0 !important;
  	color: #666 !important;
    cursor: context-menu !important;
  }
  .keyboard-content{
    position: relative;
    width: 100%;
  }
.card {
		display: flex;
		margin-right:10px;
		align-items: center;
		justify-content: space-between;
		.grid {
			width: 42px;
			height: 50px;
			font-size: 16px;
			font-weight: 500;
			text-align: center;
			line-height: 50px;
			border: 1px solid #aaa;
      cursor: pointer;
		}
		.grid:nth-child(3){
			margin-right: 10px;
		}
		.classborder2{
			display: flex;
			align-items: center;
			line-height: normal;
			span{
				display: inline-block;
				color: #666;
				font-size: 12px;
        width: 100%;
        transform: scale(.9);
			}
		}
	.point {
		position: absolute;
		left: 95px;
		width: 6px;
		height: 6px;
		background: #999;
		border-radius: 50%;
	}
	.classborder {
		border: 1px solid #407BFF;
	}
}
.keyboard{
background-color: #f9f9f9;
border-radius: 8px;
border: 1px solid #999;
position: absolute;
top: 58px;
z-index: 1;
width: 425px;
.close{
  text-align: right;
  padding-right: 20px;
  cursor: pointer;
}
.content {
	height: 220px;
	background: #e7e7e7;
  border-radius:0 0 8px 8px;
	display: flex;
	flex-wrap: wrap;
	padding-top: 10px;
	justify-content: center;
	.region {
		width: 32px;
		height: 42px;
		font-size: 16px;
		text-align: center;
		line-height: 42px;
		border-radius: 6px;
		background: #fff;
		margin: 0 5px;
    cursor: pointer;
	}
	.region:last-child {
		// width: 55px;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 21px;
			height: 14px;
		}
	}
}

.content1 {
	.region {
		width: 32px;
		height: 40px;
		font-size: 16px;
		text-align: center;
		line-height: 46px;
		border-radius: 6px;
		background: #fff;
		margin: 0 3px;
	}
}
}
</style>
