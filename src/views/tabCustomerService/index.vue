<script setup lang="ts">
const goHelp = () => {
  window.open('https://www.dstp.com.cn/helpCenter-4341.html', '_blank')
}
</script>
<template>
  <div class="pageBg customerService">
    <div class="block1">
      <p class="text bm10">微信扫码添加您的专属顾问</p>
      <p class="text">开启一对一咨询服务</p>
      <div class="codeWrap">
        <img src="@/assets/images/dataAcquisition/18.png" />
      </div>
    </div>
    <!-- <div class="block2">
      <h2 class="head">添加方法</h2>
      <img src="@/assets/images/customerService/danchuye_img02@2x.png" class="step" />
      <div class="cont">
        <div>
          <div>长按</div>
          <div>识别二维码</div>
        </div>
        <div>
          <div>打开</div>
          <div>企业微信名片</div>
        </div>
        <div>
          <div>添加</div>
          <div>到通讯录</div>
        </div>
      </div>
      <div class="botText">· 或截图本页面后使用微信扫一扫添加 ·</div>
    </div> -->
  </div>
</template>
<style lang="less" scoped>
.customerService {
  background-color: #f6f9fc;
  min-height: 100vh;
  padding-bottom: 214px;
  .block1 {
    background: url(@/assets/images/customerService/danchuye_bg02@2x.png) no-repeat;
    background-size: 100% 100%;
    width: calc(100% - 32px);
    min-height: 770px;
    margin: 0 auto;
    text-align: center;
    padding: 80px 66px 60px;
    .head {
      font-weight: 600;
      font-size: 40px;
      line-height: 56px;
      margin-bottom: 20px;
    }
    .text {
      font-size: 28px;
      line-height: 40px;
      word-break: break-all;
      .link {
        color: #1451d1;
      }
      &.bm10 {
        margin-bottom: 15px;
      }
    }
    .codeWrap {
      margin: 0 auto;
      background: url(@/assets/images/customerService/danchuye_img01@2x.png) no-repeat;
      background-size: 100%;
      width: 418px;
      height: 480px;
      padding: 108px 36px 36px 40px;
      img {
        width: 341px;
        height: 336px;
      }
    }
  }
  .block2 {
    margin: 0 auto;
    width: 694px;
    height: 440px;
    background: #ffffff;
    box-shadow: 0px 4px 12px 0px rgba(222, 222, 222, 0.5);
    border-radius: 32px;
    padding: 60px 37px 30px;
    text-align: center;
    .head {
      font-weight: 500;
      font-size: 32px;
      line-height: 44px;
      position: relative;
      margin-bottom: 60px;
      &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 12px;
        position: absolute;
        left: 50%;
        top: 18px;
        margin-left: -5.5em;
        background: url(@/assets/images/customerService/danchuye_sign01@2x.png) no-repeat;
        background-size: 100%;
      }
      &::after {
        content: '';
        display: inline-block;
        width: 80px;
        height: 12px;
        position: absolute;
        left: 50%;
        top: 18px;
        margin-left: 3em;
        background: url(@/assets/images/customerService/danchuye_sign02@2x.png) no-repeat;
        background-size: 100%;
      }
    }
    .step {
      width: 532px;
      height: 28px;
      margin: 0 auto 16px;
    }
    .cont {
      font-size: 24px;
      line-height: 36px;
      display: flex;
      justify-content: space-between;
      text-align: center;
    }
    .botText {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #f2f6ff;
      border-radius: 28px;
      margin-top: 70px;

      font-size: 24px;
      color: #575757;
    }
  }
}
</style>
