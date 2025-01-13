import Tabbar from "~/components/tabbar";
import { useNavigate } from "react-router-dom";
import "~/assets/css/tabIndex.less";
import { Arrow } from "@react-vant/icons";
import Img1 from "~/assets/images/tabIndex/4.png";
import Img2 from "~/assets/images/tabIndex/7.png";
import Img3 from "~/assets/images/tabIndex/8.png";
import Img4 from "~/assets/images/tabIndex/12.png";
import Img5 from "~/assets/images/tabIndex/6.png";
import Img6 from "~/assets/images/tabIndex/10.png";
import Img7 from "~/assets/images/tabIndex/9.png";
import Img8 from "~/assets/images/tabIndex/5.png";
import Img9 from "~/assets/images/tabIndex/13.png";
export default function TabIndex() {
  const navigate = useNavigate();
  const goBland = () => {
    // window.location.href = 'https://book.yunzhan365.com/hyokc/csci/mobile/index.html'
    window.location.href = "https://dstp.com/";
  };
  const goPg = () => {
    navigate("/");
  };
  // dealParamFromWxWebView()
  return (
    <div className="tabIndex">
      <h2 className="head">激活数据资产，开启数据价值变现之旅</h2>
      <div className="stepWrap">
        <ul className="stepUl">
          <li>
            <img src={Img1} />
            <p>加入数源</p>
          </li>
          <li>
            <Arrow />
          </li>
          <li>
            <img src={Img2} />
            <p>数据发布</p>
          </li>
          <li>
            <Arrow />
          </li>
          <li>
            <img src={Img3} />
            <p>数据管理</p>
          </li>
          <li>
            <Arrow />
          </li>
          <li>
            <img src={Img4} />
            <p>数据应用</p>
          </li>
        </ul>
      </div>
      <div className="blockList">
        <div>
          <img src={Img5} />
          <p>数据采集工具</p>
        </div>
        <div>
          <img src={Img6} />
          <p>数据控制塔</p>
        </div>
        <div>
          <img src={Img7} />
          <p>数据可视链</p>
        </div>
        <div>
          <img src={Img8} />
          <p>融资数据集成</p>
        </div>
      </div>
      <div className="cardBlue">
        <p>快速测算数据信用额度</p>
        <img src={Img9} />
        <button className="pgBtn" onClick={goPg}>
          立即评估
        </button>
      </div>
      <div className="cardGray">
        <h3>DSTP，释放数据价值，开拓数据新视界</h3>
        <p onClick={goBland}>品牌故事&gt;&gt;</p>
      </div>
      <Tabbar active={0}></Tabbar>
    </div>
  );
}
