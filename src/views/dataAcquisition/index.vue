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
        尊敬的用户: <br />若对<span>数据采集工具服务</span>感兴趣，请联系服务顾问开通。
      </p>
    </template>
    <template v-slot:topTextImg>
      <img class="tabIndexBlock_textImg" src="@/assets/images/dataAcquisition/4.png" />
    </template>
    <template v-slot:main>
      <p class="tabIndexBlock_main pMb">
        一个可信的数据采集工具将成为您数据资产入表的得力助手。为您精选可靠、可信的数据采集工具，精准抓取海量数据。
      </p>
      <van-tabs
        v-model:active="active"
        swipeable
        animated
        :ellipsis="false"
        title-inactive-color="#2B2B2B"
        title-active-color="#1F66FB"
      >
        <van-tab title="关单数据" title-class="tabTit"
          ><img src="https://static.dstp.com.cn/img/dataAcquisition_1.png"
        /></van-tab>
        <van-tab title="税务数据" title-class="tabTit">
          <!-- <img src="https://static.dstp.com.cn/img/dataAcquisition_10.png"/> -->
          <img src="@/assets/images/dataAcquisition/dataAcquisition_10.png" />
        </van-tab>
        <van-tab title="电商数据" title-class="tabTit">
          <!-- <img src="https://static.dstp.com.cn/img/dataAcquisition_8.png"/> -->
          <img src="@/assets/images/dataAcquisition/dataAcquisition_8.png" />
        </van-tab>
        <van-tab title="海运数据" title-class="tabTit">
          <!-- <img src="https://static.dstp.com.cn/img/dataAcquisition_9.png"/> -->
          <img src="@/assets/images/dataAcquisition/dataAcquisition_9.png" />
        </van-tab>
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
  height: auto;
}
:deep(.van-tabs__nav) {
  padding-top: 3px;
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
