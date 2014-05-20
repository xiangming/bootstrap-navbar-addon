Bootstrap navbar addon
=====

介绍
-----
扩展bootstrap 3 的 navbar 样式，使其支持`.navbar-fixed-left`布局。简单实现，不会影响 bootstrap 原有的二级菜单和响应式效果。

演示
-----
-http://jasonxiang.com/bootstrap-navbar-addon/

用法
-----

  1. Clone 或下载项目源码。

  2. 找到`less/bootstrap-navbar-addon.less`，然后加入到自己的项目中编译使用。或者找到`css/bootstrap-navbar-addon.css`，直接引用。

  3. 现在，你可以在 navbar 标签上使用`.navbar-fixed-left`样式了。
  ```html
  <nav class="navbar navbar-inverse navbar-fixed-left">
  ```

TODO
-----
1. 增加 navbar-static-left 支持；
2. 完善异常处理；
3. 提供 bowerjs 方式安装；
4. 增加 navbar-transparent 支持；(必须针对性修改配色)

