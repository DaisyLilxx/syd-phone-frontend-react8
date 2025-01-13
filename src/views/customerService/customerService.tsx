import Img from "../../assets/images/customerService/chat.png";
import "~/assets/css/customerService.less";
export default function CustomerService() {
  const goHelp = () => {
    window.open("https://www.dstp.com.cn/helpCenter-4341.html", "_blank");
  };
  return (
    <div className="pageBg customerService">
      <div className="block1">
        <h2 className="head">尊敬的用户</h2>
        <p className="text bm10">
          请电脑登录全球数源中心：https://www.global-suyuan.com/，订阅融资数据集成服务。
          <span className="link" onClick={goHelp}>
            订购指引&gt;&gt;
          </span>
        </p>
        <p className="text">
          系统已为您分配专属数字金融顾问，订购过程中有任何疑问，可随时与我们取得联系
        </p>
        <div className="codeWrap">
          <img src={Img} />
        </div>
      </div>
    </div>
  );
}
