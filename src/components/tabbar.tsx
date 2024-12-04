import { Tabbar } from "react-vant";
interface Props {
  active: number | string;
}
export default function TabBar(props: Props) {
  const { active } = props;
  const onChangeFun = (index: number | string) => {
    console.log(index);
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
          <img
            alt=""
            v-if="active == 0"
            src="~@/assets/images/index/index_active.png"
            className="indexImg"
          />
          <img
            alt=""
            v-else
            src="~@/assets/images/index/2.png"
            className="indexImg"
          />
        </div>
        <div>首页</div>
      </Tabbar.Item>
      <Tabbar.Item className="index">
        <div className="flex-center">
          <img
            alt=""
            v-if="active == 1"
            src="~@/assets/images/tabIndex/11_active.png"
            className="indexImg2"
          />
          <img
            alt=""
            v-else
            src="~@/assets/images/tabIndex/11.png"
            className="indexImg2"
          />
        </div>
        <div>数据信用评估额度</div>
      </Tabbar.Item>
      <Tabbar.Item className="my">
        <div className="flex-center">
          <img
            alt=""
            v-if="active == 2"
            src="~@/assets/images/index/1.png"
            className="myImg"
          />
          <img
            alt=""
            v-else
            src="~@/assets/images/index/person_normal.png"
            className="myImg"
          />
        </div>
        <div>我的</div>
      </Tabbar.Item>
    </Tabbar>
  );
}
