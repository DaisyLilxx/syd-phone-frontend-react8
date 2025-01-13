<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tabIndexBlock from '@/components/tabIndexBlock.vue'
const active = ref(0)
const router = useRouter()
</script>
<template>
  <tabIndexBlock>
    <template v-slot:topText>
      <p class="tabIndexBlock_p">
        尊敬的用户: <br />若对<span>企业数据运营控制塔</span>感兴趣，请联系服务顾问开通。
      </p>
    </template>
    <template v-slot:topTextImg>
      <img class="tabIndexBlock_textImg" src="@/assets/images/dataAcquisition/14.png" />
    </template>
    <template v-slot:main>
      <p class="tabIndexBlock_main pMb">
        在授权机制下，在全球数源中心为企业集成贸易生态数据资源，形成数据控制塔，实现数字化运营管理。
      </p>
      <van-tabs
        v-model:active="active"
        swipeable
        animated
        :ellipsis="false"
        title-inactive-color="#2B2B2B"
        title-active-color="#1F66FB"
      >
        <van-tab title="商流" title-class="tabTit"
          ><img src="https://static.dstp.com.cn/img/dataAcquisition_16.png"
        /></van-tab>
        <van-tab title="物流" title-class="tabTit"
          ><img src="https://static.dstp.com.cn/img/dataAcquisition_17.png"
        /></van-tab>
      </van-tabs>
    </template>
    <template v-slot:actBtn>
      <van-button
        class="comSubBtn tabIndexBlock_actBtn"
        round
        block
        type="primary"
        native-type="submit"
        @click="router.push({ path: 'tabCustomerService' })"
      >
        服务咨询
      </van-button>
    </template>
  </tabIndexBlock>
</template>
<style lang="less" scoped>
.pMb {
  padding-bottom: 81px;
}
.dataAcquisition {
}
:deep(.van-tabs__wrap) {
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 45px;
    right: 45px;
    height: 0.5px;
    background: #a8a8a8;
    bottom: 30px;
    z-index: 1;
    opacity: 0.5;
  }
}
:deep(.van-tabs__wrap) {
  height: auto;
}
:deep(.van-tabs__nav) {
  padding-bottom: 65px;
  padding-top: 3px;
  width: 60%;
  margin: 0 auto;
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
