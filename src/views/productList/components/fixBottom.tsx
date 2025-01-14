import { useNavigate } from "react-router-dom";
import "~/assets/css/fixBottom.less";
import { useTypedSelector } from "~/hook/hook";
export default function FixBottom() {
  let navigate = useNavigate();
  const HeaderStore = useTypedSelector((state) => state.headerSlice);
  const goCompleteMess = () => {
    if (HeaderStore.headers["wechat-token"]) navigate("/completeMess");
    else {
      // if (weixinChat) {
      //   wx.miniProgram.navigateTo({ url: '/pages/login/login?referPage=/completeMess' })
      // } else {
      //   navigate('/login',{state: { referPage: '/completeMess' } })
      // }
      navigate("/login", { state: { referPage: "/completeMess" } });
    }
  };

  return (
    <div className="fixBottom">
      <div className="botCont">
        <div className="cont">
          <h2 className="tit">精准测额还差一步</h2>
          <p className="text">马上完善资料，即可获取精准额度</p>
          <div className="step">
            <div className="progress"></div>
            <span>60%</span>
          </div>
        </div>
        <div className="comSubBtn" onClick={goCompleteMess}>
          去测额
        </div>
      </div>
    </div>
  );
}
