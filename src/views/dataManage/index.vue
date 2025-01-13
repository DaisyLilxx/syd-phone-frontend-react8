<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tabIndexBlock from '@/components/tabIndexBlock.vue'
const active = ref(0)
const router = useRouter()
</script>
<template>
  <!-- <tabIndexBlock isBlank></tabIndexBlock> -->

  <tabIndexBlock>
    <template v-slot:topText>
      <p class="tabIndexBlock_p">
        尊敬的用户: <br />若对<span>数据管理可视链服务</span>感兴趣，请联系服务顾问开通。
      </p>
    </template>
    <template v-slot:topTextImg>
      <img class="tabIndexBlock_textImg" src="@/assets/images/dataAcquisition/11.png" />
    </template>
    <template v-slot:main>
      <p class="tabIndexBlock_main">
        在授权机制下，在全球数源中心为企业集成多方数据形成数据资源可视化报告，满足对数据来源、数据发布、数据授权、数据应用的动态可视化管理，为本企业办理数据合规认证、数据资产入表、数据要素应用等方面带来便利性。
      </p>
      <div class="contWrap">
        <img class="" src="https://static.dstp.com.cn/img/dataAcquisition_12.png" style="" />
        <!-- <img class="" src="https://static.dstp.com.cn/img/dataAcquisition_13.png" /> -->
        <img class="" src="@/assets/images/dataAcquisition/dataAcquisition_13.png" />
      </div>
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
.contWrap {
  padding: 0 40px;
  img:first-child {
    margin-bottom: 14px;
    margin-top: 31px;
  }
  img:last-child {
    padding-bottom: 39px;
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
