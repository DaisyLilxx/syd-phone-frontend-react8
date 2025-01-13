import TabbarFun from "~/components/tabbar";
// 1. 引入你需要的组件
import { Tabs } from "react-vant";
import { useState } from "react";
import logo from "~/assets/images/index/font.png";
import mapImg from "~/assets/images/index/home_tableview@2x.png";
import company from "~/assets/images/index/company.png";
import icon1 from "~/assets/images/index/icon_1.png";
import icon6 from "~/assets/images/index/icon_6.png";
import icon2 from "~/assets/images/index/icon_2.png";
import icon3 from "~/assets/images/index/icon_3.png";
import icon4 from "~/assets/images/index/icon_4.png";
import icon5 from "~/assets/images/index/icon_5.png";
import "../../assets/css/index.less";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const tabBarIndex = 1;
  const [active, setActive] = useState(0);
  const demoList = [
    {
      menu: "外贸企业",
      tit: "广州DB物流供应链有限公司",
      subTit: "李总",
      cont: "DSTP使我们能够运用自身及上下游企业发布在全球数源中心的报关、采购、销售、库存等确权数据，放大信用价值，成功申请到交通银行的信用证融资产品，获得了5000万元的信用证额度，为我们的外综服、跨境品牌经销等业务提供了强大助力，还有效降低了交易风险。",
      icon: "",
    },
    {
      menu: "品牌经销商",
      tit: "XC商贸有限公司",
      subTit: "萧总",
      cont: "我们一直从事品牌经销生意，今年加入了全球数源中心，凭采购、销售等确权数据获得了平安银行数字贷产品上百万元的授信额度批复，这笔资金让我们进一步铺设了经销业务网，更好、更稳定地加强与品牌方的合作关系。",
      icon: "",
    },
    {
      menu: "电商企业",
      tit: "健T有限公司",
      subTit: "*总",
      cont: "DSTP让我们库存数据、商品数据等资产焕发活力，信用价值倍增，轻松斩获1.2亿港币融资。这笔资金如同及时雨，极大地促进了公司资金的流转与运用，为跨境电商业务的稳健经营与全球扩张提供了高效支持。",
      icon: "",
    },
    {
      menu: "科技型企业",
      tit: "广州XTW信息科技有限公司",
      subTit: "孙总",
      cont: "在DSTP的帮助下，我们运用发布在全球数源中心的企业经营纳税信息、专利信息等确权数据，极大地降低了融资的准入门槛，成功获得浦发银行的近百万元贷款额度批复，高效满足资金周转需求，这无疑也是对我们科技创新能力和市场潜力的肯定。",
      icon: "",
    },
    {
      menu: "个体工商户",
      tit: "MP快餐店",
      subTit: "吴老板",
      cont: "DSTP帮助我们利用门店流量数据、税务数据，获得招商银行的五十万元的贷款额度批复，年化利率才3.5%，成本很低，这解决了我们近期的燃眉之急，让我们不愁进货问题，还能多搞点促销吸引顾客，生意越做越顺心了。",
      icon: "",
    },
  ];
  const goTest = () => {
    navigate("/limitCalculationEdit");
  };
  return (
    <div className="pageBg index ">
      <section className="top">
        <img alt="logo" src={logo} className="logo" />
        <h2 className="head">数据要素 x 金融服务</h2>
        <p className="p">
          依托全球数源中心的数据规则，DSTP数源贷模型帮助您将数据资产转化为信用价值，智能推荐众多银行的数字金融产品，助您获得更优的融资体验。
        </p>
      </section>
      <section className="block2">
        <p className="p">您知道吗?您的数据有无限潜力</p>
        <div className="map">
          <span className="span span1">经营及纳税数据</span>
          <span className="span span2">物流数据</span>
          <span className="span span3">报关数据</span>
          <span className="span span4">电商数据</span>
          <span className="span span5">采销数据</span>
          <span className="span span6">门店流量数据</span>
          <span className="span span7">库存数据</span>
          <span className="span span8">专利数据</span>
          <img alt="mapImg" src={mapImg} className="mapImg" />
        </div>
        <div className="goTestBtn" onClick={goTest}>
          立即测算
        </div>
        <p className="orangeFont">数据信用额度高至 100000000元</p>
      </section>
      <section className="block3">
        <h3 className="comhead">客户案例</h3>
        <Tabs
          active={active}
          swipeable
          animated
          ellipsis={false}
          title-inactive-color="#2B2B2B"
          title-active-color="#1F66FB"
        >
          {demoList.map((item, index) => (
            <Tabs.TabPane title={item.menu} key={index} titleClass="tabTit">
              <div className="tabCont">
                <img alt="" src={company} className="img" />
                <h2 className="tit">{item.tit}</h2>
                <p className="subTit"></p>
                <p className="text">{item.cont}</p>
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </section>
      <section className="block4">
        <h3 className="comhead">全球数源中心金融服务共建方</h3>
        <ul>
          <li>
            <img alt="" src={icon1} />
          </li>
          <li>
            <img alt="" src={icon6} />
          </li>
          <li>
            <img alt="" src={icon2} />
          </li>
          <li>
            <img alt="" src={icon3} />
          </li>
          <li>
            <img alt="" src={icon4} />
          </li>
          <li>
            <img alt="" src={icon5} />
          </li>
        </ul>
      </section>
      <section className="footer">
        <p className="p">融资服务由银行提供</p>
        <p className="p">数据发布、确权与管理由企业依托全球数源中心自主控制</p>
        <p className="p">
          数源贷模型版权所有
          <span>©粤港澳国际供应链（广州）有限公司</span>
        </p>
      </section>
      <TabbarFun active={tabBarIndex}></TabbarFun>
    </div>
  );
}
