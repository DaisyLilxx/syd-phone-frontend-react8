import "~/assets/css/empty.less";
import Img from "~/assets/images/robot.png";
export default function Empty({ text = "暂无数据", hasEmptyBg = true }) {
  return (
    // <!-- emptyBg :带有背景和高度的暂无数据样式 -->
    // <!-- emptyNoBg：无背景，无设置高度的暂无数据样式 -->
    <div className="hasEmptyBg ? 'emptyBg' : 'emptyNoBg'">
      <div className="contWrap">
        <div className="robot">
          <img src={Img} />
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}
