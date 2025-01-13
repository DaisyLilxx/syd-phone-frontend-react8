import { useEffect, useState, useRef } from "react";
import CardCom from "./components/card";
import { getHistory } from "~/apis/api";
import Empty from "~/components/empty";
import type { resultRes, MatchProduct } from "~/types/index";
import { Loading } from "react-vant";
import "~/assets/css/resultList.less";
export default function ResultList() {
  const [List, setList] = useState<resultRes[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getHistory().then((res) => {
      console.log("res", res);
      res.data && setList(res.data);
      setLoading(false);
    });
  }, []);
  let inMap = (data: MatchProduct[]) => {
    return data.map((subitem, subindex) => (
      <CardCom data={subitem} key={subindex}></CardCom>
    ));
  };
  let outMap = () => {
    return List.map((item, index) => (
      <div key={index}>
        <div className="head">
          <span>测额时间：</span>
          <span>{item.dateTime}</span>
        </div>
        {inMap(item.data)}
      </div>
    ));
  };
  return (
    <div className="result">
      {loading ? <Loading className="comLoading" /> : ""}
      {!loading && !List.length ? <Empty text="暂无测额记录" /> : ""}
      {!loading && List.length ? outMap() : ""}
    </div>
  );
}
