<template>
  <div class="page-router element-demo">
    <h3 class="page-title">Button 按钮</h3>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning" size="small">警告按钮</el-button>
      <el-button type="danger" size="mini">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain size="small">警告按钮</el-button>
      <el-button type="danger" plain size="mini">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round size="small">警告按钮</el-button>
      <el-button type="danger" round size="mini">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle size="small"></el-button>
      <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
    </el-row>
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button disabled plain>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled size="small">警告按钮</el-button>
      <el-button type="danger" plain disabled size="mini">危险按钮</el-button>
    </el-row>

    <h4>日期选择</h4>
    <el-row>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-date-picker
        v-model="value2"
        type="week"
        format="yyyy 第 WW 周"
        placeholder="选择周">
      </el-date-picker>
    </el-row>
    <h4>Tag 标签</h4>
    <el-row>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning" size="small">标签四</el-tag>
      <el-tag type="danger" size="mini">标签五</el-tag>
    </el-row>
    <h4>Dropdown 下拉菜单</h4>
    <el-row>
      <el-dropdown split-button type="primary">
        默认尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="medium" split-button type="primary">
        中等尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown size="small" split-button type="primary">
        小型尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
    <h4>Progress 进度条</h4>
    <el-row>
      <el-col :span="12" :xs="24" class="progress-demo">
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="100" :format="format"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="100" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiElement'
})
export default class UiElement extends Vue {
  value1 =[new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
  value2 = ''
  created() {
  }
  format(percentage) {
    return percentage === 100 ? '完成' : `${percentage}%`;
  }
}
</script>
<style lang="scss">
  .element-demo{
    padding: var(--gap-xl);
    padding-top:var(--gap-s);
    .el-row{
      margin-bottom: 20px;
    }
    .progress-demo{
      .el-progress{
        margin-bottom: 10px;
      }
    }
  }
</style>