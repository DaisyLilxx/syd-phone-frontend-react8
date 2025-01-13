import { Tabbar } from "react-vant";
import "~/assets/css/tabbar.less";
import indexImg1 from "~/assets/images/index/index_active.png";
import indexImg2 from "~/assets/images/index/2.png";
import indexImg3 from "~/assets/images/tabIndex/11_active.png";
import indexImg4 from "~/assets/images/tabIndex/11.png";
import indexImg5 from "~/assets/images/index/1.png";
import indexImg6 from "~/assets/images/index/person_normal.png";
import { useNavigate } from "react-router-dom";
interface Props {
  active: number | string;
}
export default function TabbarFun(props: Props) {
  const { active } = props;
  let navigate = useNavigate();
  const onChangeFun = (index: number | string) => {
    console.log("index", index);
    switch (index) {
      case 0:
        navigate("/tabIndex");
        break;
      case 1:
        navigate("/");

        break;
      case 2:
        navigate("/my");
        break;
    }
  };
  return (
    <Tabbar
      value={active}
      active-color="#1F66FB"
      inactive-color="#2B2B2B"
      placeholder={true}
      safe-area-inset-bottom
      className="tabbar"
      onChange={onChangeFun}
    >
      <Tabbar.Item className="index">
        <div className="flex-center">
          {active == 0 ? (
            <img alt="" src={indexImg1} className="indexImg" />
          ) : (
            <img alt="" src={indexImg2} className="indexImg" />
          )}
        </div>
        <div>首页</div>
      </Tabbar.Item>
      <Tabbar.Item className="index">
        <div className="flex-center">
          {active == 1 ? (
            <img alt="" src={indexImg3} className="indexImg2" />
          ) : (
            <img alt="" src={indexImg4} className="indexImg2" />
          )}
        </div>
        <div>数据信用评估额度</div>
      </Tabbar.Item>
      <Tabbar.Item className="index">
        <div className="flex-center">
          {active == 2 ? (
            <img alt="" src={indexImg5} className="myImg" />
          ) : (
            <img alt="" src={indexImg6} className="myImg" />
          )}
        </div>
        <div>我的</div>
      </Tabbar.Item>
    </Tabbar>
  );
}
