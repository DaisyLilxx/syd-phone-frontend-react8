import React, { ReactNode } from "react";

// import { toThousandsWithSmallNum } from "~/utils/common.ts";
import "./index.less";
interface objectType {
  [key: string]: any;
}

// 父组件
interface ParentProps {
  children?: ReactNode;
  isBig?: boolean;
  data: objectType;
}
const CardCom: React.FC<ParentProps> = ({ isBig, data, children }) => {
  // const props = defineProps<{
  //   isBig: boolean
  //   data: object
  // }>()
  let imgUrlPre = process.env.REACT_APP_BASE_URL;

  return (
    <div className={`card ${isBig ? "bigCrad" : ""} `}>
      <div className="head">
        <img
          src={`${imgUrlPre}/dstp-op/rest/api/app/financial/picture/preview?path=${data.bankIconUrl}`}
        />
        <span>
          {data.bank}｜{data.productName}
        </span>
      </div>
      <div className="text1">预测可借贷额度({data.currency})</div>
      <h2 className="text2">{data.creditAmount}</h2>
      <div className="text3">{data.interestRateDescribe}</div>
      {children}
    </div>
  );
};
export default CardCom;
