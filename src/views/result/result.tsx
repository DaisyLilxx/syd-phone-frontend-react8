import { useEffect, useState, useRef } from "react";
import CardCom from "./components/card";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "~/hook/hook";
import { getCalculateResult } from "~/apis/api";
import { Loading } from "react-vant";
import Empty from "~/components/empty";
import "~/assets/css/result.less";
import type { MatchProduct } from "~/types/index";
export default function Result() {
  let navigate = useNavigate();
  const SerialNoStore = useTypedSelector((state) => state.serialNoSlice);
  const [list, setList] = useState<MatchProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const goCustomer = () => {
    navigate("/customerService");
  };
  useEffect(() => {
    // 测试流水号 'CE202409181142190019'
    getCalculateResult({ serialNo: SerialNoStore.serialNo }).then((res) => {
      console.log("res", res);
      res.data && setList(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="result">
      {loading ? <Loading className="comLoading" /> : ""}
      {!loading && !list.length ? (
        <Empty
          text="不满足授信条件，暂无法评估您的授信额度。"
          hasEmptyBg={false}
        />
      ) : (
        ""
      )}
      {!loading && list.length
        ? list.map((item: any, index: number) => (
            <CardCom isBig={true} data={item} key={index}>
              <div className="whiteWrap">
                <button
                  className="comWhiteBtn"
                  onClick={goCustomer}
                  type="button"
                >
                  立即申请
                </button>
                <div className="comRightIcon">{item.promotionLabel}</div>
              </div>
            </CardCom>
          ))
        : ""}
    </div>
  );
}
