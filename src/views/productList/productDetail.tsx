import { useEffect, useState } from "react";
import "~/assets/css/productDetail.less";
import { useLocation } from "react-router-dom";
import { getProductDetail } from "~/apis/api";
import type { MatchProduct } from "~/types/index";
import FixBottom from "./components/fixBottom";
export default function ProductDetail() {
  let location = useLocation();
  console.log("location", location.state);
  const [resData, setResData] = useState<Partial<MatchProduct>>({});
  useEffect(() => {
    getProductDetail(location.state.id).then((res) => {
      res.data && setResData(res.data);
    });
  }, [location.state.id]);
  return (
    <div className="pageBg productDetail">
      <div className="main">
        <div className="block">
          <span className="span span1"></span>
          <div className="cont">
            <div className="name">适用客户</div>
            <div className="text">{resData.applicableCustomer}</div>
          </div>
        </div>
        <div className="block">
          <span className="span span2"></span>
          <div className="cont">
            <div className="name">
              {resData.productName === "信用证融资" ? "开证服务费" : "年化利率"}
            </div>
            <div className="text">{resData.interestRate}</div>
          </div>
        </div>
        <div className="block">
          <span className="span span3"></span>
          <div className="cont">
            <div className="name">授信额度({resData.currency})</div>
            <div className="text">{resData.limitAmount}</div>
          </div>
        </div>
        <div className="block">
          <span className="span span4"></span>
          <div className="cont">
            <div className="name">还款方式</div>
            <div className="text">{resData.repaymentMode}</div>
          </div>
        </div>
        <div className="block">
          <span className="span span5"></span>
          <div className="cont noBor">
            <div className="name">还款期限</div>
            <div className="text">{resData.repaymentPeriod}</div>
          </div>
        </div>
      </div>
      <div className="tipText">
        各数字金融产品为对应资金方所有，资金方承担贷款审核、放款的责任。展示额度和利率仅供参考，最终利率和额度请以资金方审批为准。
      </div>
      <FixBottom />
    </div>
  );
}
