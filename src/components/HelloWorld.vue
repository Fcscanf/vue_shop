<template>
  <div>

    <el-container>
      <div class="fun">
        <el-link>注册</el-link>
        <el-link>登录</el-link>
      </div>
      <el-header>
        <!--商城首页头部-商城标题、用户登录注册-->
        <h1>LKD网上商城</h1>
      </el-header>
      <el-main>
        <!--    商城轮播图展示区-->
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in turns" :key="item">

            <img :src="item">
          </el-carousel-item>
        </el-carousel>
        <!--    商城商品展示区-->
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>

import img1 from '../img/hello/turn/turn1.jpg'
import img2 from '../img/hello/turn/turn2.jpg'
import img3 from '../img/hello/turn/turn3.jpg'
import img4 from '../img/hello/turn/turn4.jpg'
import img5 from '../img/hello/turn/turn5.jpg'
import img6 from '../img/hello/turn/turn6.jpg'

export default {
  name: 'HelloWorld',
  data () {
    return {
        activeIndex: '1',
        activeIndex2: '1',
        turns:[img1, img2, img3, img4, img5, img6]
    }
  },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    height: 100%;
    width: 100%;
  }

  /*轮播图样式定义区*/
  .el-carousel{
    height: 400px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*布局样式定义*/
  h1{
    margin-top: 0px;
  }

  .el-header{
    margin-top: -30px;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    height: 100%;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .fun{
    margin-top: -50px;
    margin-left: 90%;
  }

</style>
