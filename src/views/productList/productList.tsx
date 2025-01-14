import { useEffect, useState } from "react";
import "~/assets/css/productList.less";
import { useNavigate } from "react-router-dom";
import { getProductList } from "~/apis/api";

// import { useSerialNoStore } from '@/stores/index'
import type { MatchProduct } from "~/types/index";
import FixBottom from "./components/fixBottom";
import Empty from "~/components/empty";
import { useTypedSelector } from "~/hook/hook";
export default function ProductList() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const serialNoStore = useTypedSelector((state) => state.serialNoSlice);
  console.log("serialNoStore", serialNoStore);
  const goDetail = (id: number) => {
    console.log("id", id);
    navigate("/productDetail", { state: { id } });
  };
  let imgUrlPre = process.env.REACT_APP_BASE_URL;
  const [dataList, setDataList] = useState<MatchProduct[]>([]);
  useEffect(() => {
    getProductList({ serialNo: serialNoStore.serialNo }).then((res) => {
      console.log("getProductList-res", res);
      res.data && setDataList(res.data);
      setLoading(false);
    });
  }, [serialNoStore.serialNo]);
  return (
    <div className="productList">
      <div className="mainWrap">
        <div className="main">
          <p className="tip">为您匹配到以下金融产品</p>
          {/* <van-loading className="comLoading" v-if="loading" /> */}
          {!loading && !dataList.length ? (
            <Empty text="暂无符合您条件的金融产品" hasEmptyBg={false} />
          ) : (
            ""
          )}
          {!loading && dataList.length ? (
            <ul className="list">
              {dataList.map((item, index) => (
                <li
                  className={index % 2 === 0 ? "orange" : "pruple"}
                  key={index}
                >
                  <img
                    src={`${imgUrlPre}/dstp-op/rest/api/app/financial/picture/preview?path=${item.bankIconUrl}`}
                    className="bankImg"
                    alt=""
                  />
                  <div className="rightCont">
                    <div className="head">
                      <span className="name">
                        {item.bank}｜{item.productName}
                      </span>
                      <div
                        className="detail"
                        onClick={() => goDetail(item.productId)}
                      >
                        <span className="search_icon"></span>详情
                      </div>
                    </div>
                    <div className="moneyCont">
                      <div>
                        <div className="name">额度({item.currency}）</div>
                        <div className="money">{item.limitAmount}</div>
                      </div>
                      <div>
                        <div className="name">
                          {item.productName === "信用证融资"
                            ? "开证服务费"
                            : "利率"}
                        </div>

                        <div className="money">{item.interestRate}</div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      {dataList.length ? <FixBottom /> : ""}
    </div>
  );
}
