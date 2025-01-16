import "~/assets/css/my.less";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Tabbar from "~/components/tabbar";
import { useTypedSelector } from "~/hook/hook";
import { Cell } from "react-vant";
import { clearUserMessStore } from "~/store/modules/userMess";
import { clearHeaderStore } from "~/store/modules/header";
import { clearSerialNoStore } from "~/store/modules/serialNo";
import Img from "../../assets/images/my/profile_touxiang@2x.png";
export default function My() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const UserStore = useTypedSelector((state) => state.userMessSlice);
  const HeaderStore = useTypedSelector((state) => state.headerSlice);
  console.log("UserStore", UserStore);
  let loginRes = "";
  const goList = () => {
    if (loginRes || HeaderStore.headers["wechat-token"]) {
      navigate("/resultList");
    } else {
      navigate("/login", { state: { referPage: "/my" } });
    }
  };
  const goLogin = () => {
    navigate("/login", { state: { referPage: "/my" } });
  };
  const goServer = () => {
    navigate("/CustomerService");
  };
  const exit = () => {
    dispatch(clearUserMessStore());
    dispatch(clearHeaderStore());
    dispatch(clearSerialNoStore());
    console.log("退出");
  };
  return (
    <div className="pageBg my">
      <div className="company">
        <img src={Img} alt="" />
        <div>
          {UserStore.userMess && UserStore.userMess?.username ? (
            <h3 className="name">{UserStore.userMess?.username}</h3>
          ) : (
            <h3 className="name" onClick={goLogin}>
              请登录
            </h3>
          )}
        </div>
      </div>
      <div className="cont">
        <div className="list">
          <Cell
            title="测额记录"
            icon={<span className="span span1"></span>}
            onClick={goList}
            isLink
          ></Cell>
          <Cell
            title="联系客服"
            icon={<span className="span span2"></span>}
            onClick={goServer}
            isLink
          ></Cell>
          <Cell
            title="退出登录"
            icon={<span className="span span1"></span>}
            onClick={exit}
            isLink
          ></Cell>
        </div>
      </div>
      <Tabbar active={2}></Tabbar>
    </div>
  );
}
