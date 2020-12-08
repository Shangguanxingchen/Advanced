# 面试
## 今日课程内容
- 手写简易 React

## 虚拟 DOM
JS 中最消耗性能的操作为 DOM 操作。但是操作 JS 中的对象却很快。
虚拟 DOM，则是利用 JS 对象模拟 DOM 树

## diff
### 目的
diff 的目的在于调和，也就是在更新时，尽量最少对 DOM 进行操作

### 策略
#### tree diff
同层比较，如果节点不存在，该节点及其子节点都会被删除

#### component diff
1. 同类型的两个组件，比较Virtual DOM树
2. 不同类型的组件，直接删除。或替换为新组建

#### element diff
1. 单个 element 比较
2. 列表 element 比较

## 下节课内容
1. 完善diff
2. 前端工程师的简历编写


https://github.com/kkbjs/react-admin 基于 React 和 antd 构建 Element 后端管理中心，一块来参与呀


给开源项目提 PR 的流程 https://juejin.im/post/6844904191744278542