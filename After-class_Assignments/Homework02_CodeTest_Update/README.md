<h1>作业介绍</h1><br>
<p><strong>项目名称：</strong>第二次作业-代码学习及优化第一次作业</p>
<p><strong>文件构成：</strong> 由两个文件夹构成，Homework02_Code_Test为“微信开发文档-框架”部分代码学习的测试代码，Homework02_Update_Homework01是对第一次作业chapter页面进行的代码优化，使用了列表渲染，结构如下：</p>

<table>
<thead>
<tr>
<th>文件名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Homework02_Code_Test/app.json</td>
    <td>测试<strong>“框架-全局变量”</strong>代码，在pages中添加页面，在windows中调整页面颜色、导航栏文字和颜色，添加tabBar并添加相应设置，开启debug模式，设置网络请求超时时间，申明需要后台运行的能力，获取位置信息等</td>
</tr>
<tr>
<td>Homework02_Code_Test/index1.json</td>
    <td>测试<strong>“框架-局部变量”</strong>代码，完成当前页面的设置（如更改当前页面导航栏文字和颜色、下拉页面背景颜色等）</td>
</tr>
<tr>
<td>Homework02_Code_Test/sitemap.json</td>
    <td>测试<strong>“框架-sitemap配置”</strong>代码，配置其小程序页面是否允许微信索引（设定index允许索引，index1不允许）</td>
</tr>
<tr>
<td>Homework02_Code_Test/index1.js</td>
    <td>测试<strong>“框架-框架接口-小程序APP及页面”</strong>代码，使用各类生命周期函数并记录在日志中（如页面加载完成、渲染完成等），设置用户查找页面不存在触发情况，tab页触发情况，设定初始数据并在wxml文件中引用，组件事件处理，打印页面路径，利用setData函数将数据从逻辑层发送到视图层</td>
</tr>
<tr>
<td>Homework02_Code_Test/index1.wmxl</td>
    <td>测试<strong>“框架-WXML语法参考-数据绑定/列表渲染/条件渲染/模板/引用”</strong>代码，将index1.js中初始化的值在标签内容、属性等地进行了绑定和组合，使用了button,checkbox等标签</td>
</tr>
</tbody>
</table>


<table>
<thead>
<tr>
<th>文件名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Homework02_Update_Homework01/pages/chapters/chapters.js</td>
    <td>以数组的形式<strong>储存原始数据</strong>，即目录的章节数和中英文名称，每一章以对象的形式储存</td>
</tr>
<tr>
<td>Homework02_Update_Homework01/pages/chapters/chapters.wxml</td>
    <td><strong>渲染</strong>储存在js文件中章节列表，以表格形式展现</td>
</tr>
<tr>
<td>Homework02_Update_Homework01中其他文件</td>
    <td>设置和功能均与第一次作业相同</td>
</tr>
</tbody>
</table>


<p>第一次作业优化部分代码展示：</p>


```
<view class="table">
      <view class="tr">
          <view class="th th1">章节</view>
          <view class="th th2">中文</view>
          <view class="th th3">英文</view>
      </view>
      <view wx:for="{{chapters}}" class="tr">
          <view class="td td1">{{item.number}}</view>
          <view class="td td2">{{item.Chinese}}</view>
          <view class="td td3">{{item.English}}</view>
      </view>
    </view>
```



```
data: {
    chapters:[
      {
        "number":"一",
        "Chinese":"经济篇",
        "English":"Economy"
      },
      {
        "number": "二",
        "Chinese": "我的生活所在；我的生活追求",
        "English": "Where I Lived, and What I Lived For"
      },
      {
        "number": "三",
        "Chinese": "阅读",
        "English": "Reading"
      },
      {
        "number": "四",
        "Chinese": "声",
        "English": "Sounds"
      },
      {
        "number": "五",
        "Chinese": "孤独",
        "English": "Solitude"
      },
      {
        "number": "六",
        "Chinese": "访客",
        "English": "Visitors"
      },
      {
        "number": "七",
        "Chinese": "豆田",
        "English": "The Bean-Field"
      },
      {
        "number": "八",
        "Chinese": "村子",
        "English": "The Village"
      },
      {
        "number": "九",
        "Chinese": "湖",
        "English": "The Ponds"
      },
      {
        "number": "十",
        "Chinese": "贝克田庄",
        "English": "Baker Farm"
      },
      {
        "number": "十一",
        "Chinese": "更高的法则",
        "English": "Higher Laws"
      },
      {
        "number": "十二",
        "Chinese": "禽兽为邻",
        "English": "Brute Neighbors"
      },
      {
        "number": "十三",
        "Chinese": "室内取暖",
        "English": "House-warming"
      },
      {
        "number": "十四",
        "Chinese": "昔日的居民，冬日的访客",
        "English": "Former Inhabitants; and Winter Visitors"
      },
      {
        "number": "十五",
        "Chinese": "冬天的禽兽",
        "English": "Winter Animals"
      },
      {
        "number": "十六",
        "Chinese": "冬天的湖",
        "English": "The Pond in Winter"
      },
      {
        "number": "十七",
        "Chinese": "春天",
        "English": "Spring"
      },
      {
        "number": "十八",
        "Chinese": "结束语",
        "English": "Conclusion"
      }
    ]
  }
```

<p>原本代码：</p>

```
 	  <view class="tr">
          <view class="th th1">章节</view>
          <view class="th th2">中文</view>
          <view class="th th3">英文</view>
      </view>
      <view class="tr">
          <view class="td td1">一</view>
          <view class="td td2">经济篇</view>
          <view class="td td3">Economy</view>
      </view>
      <view class="tr">
          <view class="td td1">二</view>
          <view class="td td2">我的生活所在；我的生活追求</view>
          <view class="td td3">Where I Lived,and What I Lived For</view>
      </view>
      <view class="tr">
          <view class="td td1">三</view>
          <view class="td td2">阅读</view>
          <view class="td td3">Reading</view>
      </view>
```

