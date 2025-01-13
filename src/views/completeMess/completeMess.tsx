import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "~/hook/hook";
import { getItemValue, calculateResult } from "~/apis/api";
import { Form, Button, Popup, Picker, Input } from "react-vant";
import type { FormInstance } from "react-vant";
// import { dealParamFromWxWebView } from '~/utils/common'
import type { CalculateResultParam } from "~/types/index";
import "~/assets/css/completeMess.less";
export default function CompleteMess() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const SerialNoStore = useTypedSelector((state) => state.serialNoSlice);
  console.log("SerialNoStore", SerialNoStore);
  const [isShow1018, setIsShow1018] = useState(false);
  const [isShow1017, setIsShow1017] = useState(false);
  const [isShow1016, setIsShow1016] = useState(false);
  const [isShow1001, setIsShow1001] = useState(false);
  const form = useRef<FormInstance>(null);
  const [contactData, setContactData] = useState<{ [key: string]: any }>({});
  const [time, setTime] = useState(10);
  let timeVal = 10;
  const [formData, setFormData] = useState<CalculateResultParam>({
    averageMonthlyReceivableB2B: "",
    averageMonthlyReceivableB2C: "",
    distributorMonthlyPurchaseAmount: "",
    entName: "",
    enterpriseLoanBalance: "",
    governmentBiddingContractAmount: "",
    lastYearImportExportTradeAmount: "",
    lastYearNetProfit: "",
    lastYearOperatingIncome: "",
    purchaseToPaymentTime: "",
    serialNo: SerialNoStore.serialNo,
  });
  let countTime: number | null = null;
  //dealParamFromWxWebView()
  const onSubmit = (values: CalculateResultParam) => {
    console.log("submit", values);
    console.log("calculateResult-formData", formData);

    setIsLoading(true);
    if (countTime) return;
    countTime = window.setInterval(function () {
      timeVal--;
      setTime(timeVal);
      if (time == 0) {
        clearInterval(countTime!);
      }
    }, 1000);
    calculateResult(formData)
      .then((res) => {
        console.log("calculateResult-res", res);
        if (res.data && res.flag == "SUCCESS") {
          if (countTime) clearInterval(countTime!);
          navigate("/result");
        }
      })
      .catch((e) => {
        console.log("eee", e);
      });
  };
  useEffect(() => {
    getItemValue({ serialNo: SerialNoStore.serialNo }).then((res) => {
      res.data && setContactData(res.data);
    });
    return () => {
      if (countTime) clearInterval(countTime);
    };
  }, []);
  // setContactData 设置新值后不能马上获取，需要useEffect监听并执行回调
  useEffect(() => {
    if (JSON.stringify(contactData) != "{}") {
      if (contactData["MV1018"]) setIsShow1018(true);
      if (contactData["MV1017"]) setIsShow1017(true);
      if (contactData["MV1016"]) setIsShow1016(true);
      if (contactData["MV1001"]) setIsShow1001(true);
    }
  }, [contactData]);

  const onInput = (e: string, key: keyof CalculateResultParam) => {
    let val: string = e;
    // 最多只允许输入12位正数并限制最多2位小数的正则
    const regex = /^\d{1,12}(\.\d{1,2})?$/;
    console.log("aaa", regex.test(val));
    // 如果输入的值符合正则规则，更新值
    if (regex.test(val)) {
      setFormData((formData) => ({
        ...formData,
        [key]: val,
      }));
    } else {
      val = val
        .replace(/[^0-9.]/g, "") // 移除非数字和小数点
        .replace(/^0+(\d)/, "$1") // 移除多余的前导0
        .replace(/(\..*)\./g, "$1") // 删除多余的小数点
        .replace(/^(\d{12})\d+/, "$1") // 限制整数部分最多12位
        .replace(/(\.\d{2})\d+/, "$1"); // 限制小数点后最多2位
      setFormData((formData) => ({
        ...formData,
        [key]: val,
      }));
    }
  };
  // 最多只允许输入12位正数或负数并限制最多2位小数的正则
  const onInputFs = (e: string, key: keyof CalculateResultParam) => {
    let val = e;
    // 最多只允许输入12位正数或负数并限制最多2位小数的正则
    const regex = /^-?\d{0,12}(\.\d{0,2})?$/;
    // 如果输入的值符合正则规则，更新值
    if (regex.test(val)) {
      setFormData((formData) => ({
        ...formData,
        [key]: val,
      }));
    } else {
      val = val
        .replace(/[^0-9.-]/g, "") // 移除所有非数字、非负号和小数点的字符
        .replace(/(\..*)\./g, "$1") // 确保只允许一个小数点
        .replace(/(?!^)-/g, "") // 确保负号只允许在开头
        .replace(/^(-?\d{12})\d*(\.\d*)?/, "$1$2") // 限制整数部分最多12位
        .replace(/(\.\d{2})\d+/, "$1"); // 限制小数点后最多2位
      // 更新 formData 和输入框的值
      setFormData((formData) => ({
        ...formData,
        [key]: val,
      }));
      // e = val // 更新输入框的值
    }
  };

  return (
    <div>
      {!isLoading ? (
        <div className="pageBg completeMess">
          <Form
            onFinish={onSubmit}
            required={true}
            ref={form}
            layout="vertical"
            footer={
              <Button
                className="comSubBtn"
                round
                block
                type="primary"
                nativeType="submit"
              >
                提交
              </Button>
            }
          >
            <div className="main">
              <div className="head">
                <div>提供更多信息，快速了解自己的数据潜</div>
                <div>力，获得更详细的授信额度预测数据</div>
              </div>
              <div className="comFormCont">
                <Form.Item
                  className="comFieldInp"
                  v-model="formData.entName"
                  name="entName"
                  label="企业名称"
                  label-align="top"
                  rules={[{ required: true, message: "请填入企业名称" }]}
                >
                  <Input maxLength={32} placeholder="请选择" />
                </Form.Item>
                <Form.Item
                  className="comFieldInp"
                  v-model="formData.lastYearOperatingIncome"
                  name="lastYearOperatingIncome"
                  label="上一自然年营业收入"
                  label-align="top"
                  rules={[
                    { required: true, message: "请填入上一自然年营业收入" },
                  ]}
                >
                  <Input
                    type="number"
                    onChange={(e) => onInput(e, "lastYearOperatingIncome")}
                    suffix={<span>万元</span>}
                    placeholder="请填入上一自然年营业收入"
                  />
                </Form.Item>
                <Form.Item
                  className="comFieldInp"
                  v-model="formData.lastYearNetProfit"
                  name="lastYearNetProfit"
                  label="上一自然年净利润"
                  label-align="top"
                  rules={[
                    { required: true, message: "请填入上一自然年净利润" },
                  ]}
                >
                  <Input
                    onChange={(e) => onInputFs(e, "lastYearNetProfit")}
                    suffix={<span>万元</span>}
                    placeholder="请填入上一自然年净利润"
                  />
                </Form.Item>
                <Form.Item
                  className="comFieldInp"
                  v-model="formData.enterpriseLoanBalance"
                  name="enterpriseLoanBalance"
                  label="企业借款余额"
                  label-align="top"
                  rules={[{ required: true, message: "请填入企业借款余额" }]}
                >
                  <Input
                    type="number"
                    onChange={(e) => onInput(e, "enterpriseLoanBalance")}
                    suffix={<span>万元</span>}
                    placeholder="请填入企业借款余额"
                  />
                </Form.Item>
                {isShow1018 ? (
                  <Form.Item
                    className="comFieldInp"
                    v-model="formData.governmentBiddingContractAmount"
                    name="governmentBiddingContractAmount"
                    label="政府招标项目合同金额"
                    label-align="top"
                    rules={[
                      { required: true, message: "请填入政府招标项目合同金额" },
                    ]}
                  >
                    <Input
                      type="number"
                      onChange={(e) =>
                        onInput(e, "governmentBiddingContractAmount")
                      }
                      suffix={<span>万元</span>}
                      placeholder="请填入政府招标项目合同金额"
                    />
                  </Form.Item>
                ) : (
                  ""
                )}
                {isShow1017 && contactData["MV1017"] == "涉及进出口贸易" ? (
                  <Form.Item
                    className="comFieldInp"
                    v-model="formData.lastYearImportExportTradeAmount"
                    name="lastYearImportExportTradeAmount"
                    label="上一自然年进出口贸易额"
                    label-align="top"
                    rules={[
                      {
                        required: true,
                        message: "请填入上一自然年进出口贸易额",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      onChange={(e) =>
                        onInput(e, "lastYearImportExportTradeAmount")
                      }
                      suffix={<span>万元</span>}
                      placeholder="请填入上一自然年进出口贸易额"
                    />
                  </Form.Item>
                ) : (
                  ""
                )}
                {isShow1016 && contactData["MV1016"] == "有品牌经销权" ? (
                  <Form.Item
                    className="comFieldInp"
                    v-model="formData.distributorMonthlyPurchaseAmount"
                    name="distributorMonthlyPurchaseAmount"
                    label="品牌经销商月均采购金额"
                    label-align="top"
                    rules={[
                      {
                        required: true,
                        message: "请填入品牌经销商月均采购金额",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      onChange={(e) =>
                        onInput(e, "distributorMonthlyPurchaseAmount")
                      }
                      suffix={<span>万元</span>}
                      placeholder="请填入品牌经销商月均采购金额"
                    />
                  </Form.Item>
                ) : (
                  ""
                )}
                {isShow1016 && contactData["MV1016"] == "有品牌经销权" ? (
                  <Form.Item
                    v-model="formData.purchaseToPaymentTime"
                    name="purchaseToPaymentTime"
                    className="comFieldInp noBor"
                    label="从采购到回款耗时多少天"
                    label-align="top"
                    rules={[
                      {
                        required: true,
                        message: "请填入从采购到回款耗时多少天",
                      },
                    ]}
                  >
                    <Input
                      type="digit"
                      suffix={<span>天</span>}
                      maxLength={3}
                      placeholder="填入从采购到回款耗时多少天"
                    />
                  </Form.Item>
                ) : (
                  ""
                )}
                {isShow1001 && contactData["MV1001"] == "线上电商平台销售" ? (
                  <Form.Item
                    className="comFieldInp"
                    v-model="formData.averageMonthlyReceivableB2B"
                    name="averageMonthlyReceivableB2B"
                    label="电商平台月均应收账款余额（B2B）"
                    label-align="top"
                    rules={[
                      {
                        required: true,
                        message: "请填入电商平台月均应收账款余额",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      onChange={(e) =>
                        onInput(e, "averageMonthlyReceivableB2B")
                      }
                      suffix={<span>万元</span>}
                      placeholder="请填入电商平台月均应收账款余额"
                    />
                  </Form.Item>
                ) : (
                  ""
                )}
                {isShow1001 && contactData["MV1001"] == "线上电商平台销售" ? (
                  <Form.Item
                    className="comFieldInp"
                    v-model="formData.averageMonthlyReceivableB2C"
                    name="averageMonthlyReceivableB2C"
                    label="电商平台月均应收账款余额（B2C）"
                    label-align="top"
                    rules={[
                      {
                        required: true,
                        message: "请填入电商平台月均应收账款余额",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      onChange={(e) =>
                        onInput(e, "averageMonthlyReceivableB2C")
                      }
                      suffix={<span>万元</span>}
                      placeholder="请填入电商平台月均应收账款余额"
                    />
                  </Form.Item>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Form>
        </div>
      ) : (
        ""
      )}
      {isLoading ? (
        <div className="pageBg completeMess2">
          <div className="submitLoading">
            <img
              src="https://static.dstp.com.cn/img/loading.gif"
              className="loadImg"
            />
            <h2 className="tit">额度测算中</h2>
            <div className="text">
              正在努力为您测算，请稍等…<span>{time}s</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
