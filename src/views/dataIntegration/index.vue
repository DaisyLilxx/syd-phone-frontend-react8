<script setup lang="ts">
import wx from 'weixin-js-sdk-ts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tabIndexBlock from '@/components/tabIndexBlock.vue'
const active = ref(0)
const router = useRouter()
const weixinChat = window.localStorage.getItem('weixinChat') == 'true'
const goIndex = () => {
  if (weixinChat) {
    // 跳转微信原生tabIndex
    wx.miniProgram.redirectTo({ url: '/pages/index/index' })
  } else {
    router.push('/index')
  }
}
</script>
<template>
  <!-- <tabIndexBlock isBlank></tabIndexBlock> -->

  <tabIndexBlock>
    <template v-slot:topText>
      <p class="tabIndexBlock_p">
        尊敬的用户: <br />若对<span>融资数据集成服务</span>感兴趣，请联系服务顾问开通。
      </p>
    </template>
    <template v-slot:topTextImg>
      <p class="tabIndexBlock_text">融资数据集成服务</p>
    </template>
    <template v-slot:main>
      <p class="tabIndexBlock_main">
        在授权机制下，帮助企业将发布在全球数源中心的零散数据集成，并快速形成满足银行申请要求的数据报告或凭证，助力企业轻松获得低成本银行直贷。
      </p>
      <div class="contWrap">
        <!-- <img class="" src="https://static.dstp.com.cn/img/dataAcquisition_15.png" style="" /> -->
        <img class="" src="@/assets/images/dataAcquisition/dataAcquisition_15.png" style="" />
      </div>
    </template>
    <template v-slot:actBtn>
      <van-button
        class="comSubBtn tabIndexBlock_actBtn"
        round
        block
        type="primary"
        native-type="submit"
        @click="goIndex"
      >
        智能匹配融资产品
      </van-button>
    </template>
  </tabIndexBlock>
</template>
<style lang="less" scoped>
.contWrap {
  img {
    padding-bottom: 38px;
    margin-top: 40px;
  }
}
.dataAcquisition {
}
:deep(.van-tabs__wrap) {
  height: auto;
}
:deep(.van-tabs__nav) {
  padding-bottom: 65px;
}
:deep(.van-tabs__line) {
  bottom: 30px;
  width: 56px;
  height: 6px;
  background-color: #1f66fb;
}
:deep(.van-tab.tabTit) {
  font-size: 28px;
  padding: 0 30px;
  line-height: 25px;
}
</style>
