# ElmTable 组件使用参照文档
## 参数说明:
参数|说明|类型|默认值|可选值
------|------|------|------|------
border|是否显示边框|boolean|true|false
rowKey|行数据的 Key|string|'id'|--
showPage|是否显示分页|boolean|true|false
isColumSet|是否可自定义表格展示列|boolean|true|false
loading|loading是否显示|boolean|false|true
fit|列的宽度是否自撑开|boolean|true|false
tableData|显示的数据|array|-|-
height|显示的高度,同element表格中使用一直|string|100%|-
maxShow|操作按钮的最大展示数,超过则隐藏(暂时在更多的折叠里面)，**为0时不限制**|number|3|-
columObj|详细见下说明|string|100%|-
treeProps|渲染嵌套数据的配置选项|objects|-|{hasChildren: 'hasChildren', children: 'children'}
load|加载子节点数据的函数，(同官方文档)|Function(row, treeNode, resolve)|-|-
summary-method|自定义的合计计算方法，(同官方文档)|Function({ columns, data })|-|-

## columObj参数说明:
参数|说明|类型|默认值|可选值
------|------|------|------|------
text|表格内容以文字的形式呈现|boolean|-|-
status|状态对象展示|boolean|-|-
ownDefined|自定义显示内容,搭配 ownDefinedReturn函数使用|boolean|-|-
ownDefinedReturn|自定义显示内容函数,必须有返回值|Function({row,index})|-|-
previewImage|大图预览展示|boolean|-|-
ownSlot|插槽模式显示（自动生成具名插槽,name为列字段名称（prop））|boolean|-|-
ownHeader|表头自定义个性化显示|boolean|-|-
ownHeaderHtml|ownHeader搭配使用,为自定义展示的template代码片段|string|-|-
className|列的 className|string|-|-
ownClassName|列的 className 根据具体的行数据自定义样式|Function({row,index})|-|-
label|列名|string|-|-
prop|列字段名称|string|-|-
width|列宽,表格若设定为自由设置列,则不建议使用改属性,建议用minwidth代替|string|-|-
minwidth|最小列宽|string|-|-
sortable|是否排序|boolean|false|true
sortType|排序数据类型(目前针对于时间做了特殊处理)|string|-|date(时间排序)
ownDefinedSort|自定义排序规则,必须有返回值,用法同官方文档sort-method一样|Function(a,b)|-|-
tooltip|当内容过长被隐藏时显示 tooltip(如果不需要显示,请单独设置为false)|boolean|true|false
isOperation|true时为操作列表,与operation搭配使用|boolean|-|-
operation|具体配置详见下说明|array|-|-
columnsetable|是否用户可在列设置里面 ,自定义列显示 , 当配置为false时,用户不可在列设置里面自定义操作改列|boolean|-|false

## 操作按钮operation参数说明:
参数|说明|类型|默认值|可选值
------|------|------|------|------
operation|操作按钮的key 名称|string|-|-
label|操作按钮名称|string|-|-
isShow|是否显示此按钮,一般用于做权限控制等|string|-|-
isTooltip|鼠标hover时 是否显示tooltip,搭配tooltipText使用|boolean|false|true
tooltipText|显示tooltip时的内容文案|string|-|-
icon|操作按钮的icon|string|-|-
type|操作按钮的type|string|-|-
color|操作按钮的颜色设置|string|-|-
disabled|操作按钮是否是disabled(置灰)|Function({row,index})|-|-
labelRow|操作按钮自定义文案显示|Function({row,index})|-|-

## 回调 Methods
参数|说明|类型|默认值|可选值
------|------|------|------|------
rowOperation|行操作 now当前操作按钮信息|Function(row, $index, now)|-|-
switchChange|switchChange调用|Function(row,$index,prop)|-|-
rowClick|点击行|Function(row, column, event)|-|-
editInputBlur|可编辑input失去焦点|Function( row, $index, prop, columIndex)|-|-
getList|getList|Function()|-|-
toggleRowExpansion|用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）(用法与官方想通)|Function(row, expanded)|-|-
