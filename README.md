# Bootstrap navbar addon


## 介绍

扩展bootstrap 3 的 navbar 样式，使其支持`.navbar-fixed-left`布局。简单实现，不会影响 bootstrap 原有的二级菜单和响应式效果。


## 演示

-http://jasonxiang.com/bootstrap-navbar-addon/


## 用法

  1. Clone 或下载项目源码。

  2. 找到`less/bootstrap-navbar-addon.less`，然后加入到自己的项目中编译使用。(你可能需要手动修改@navbar-fixed-left-width)
  
  3. 或者找到`dist/css/bootstrap-navbar-addon.min.css`，直接引用。（你可能需要手动调整navbar的width，以适应你的项目需求。）
  ```html
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="dist/css/bootstrap-navbar-addon.min.css">
  ```

  3. 现在，你可以在 navbar 标签上使用`.navbar-fixed-left`样式了。
  ```html
  <nav class="navbar navbar-inverse navbar-fixed-left">
    <div class="navbar-header">
    ...
    </div>
    <div class="collapse navbar-collapse">
    ...
    </div>
  </div>
  ```


## TODO

1. 完善异常处理；
2. 提供 bowerjs 方式安装；

