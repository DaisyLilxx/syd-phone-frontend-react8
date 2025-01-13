import { useEffect, useState,useRef } from "react";
import "~/assets/css/limitCalculationEdit.less";
import image1 from "~/assets/images/limitCalculationEdit/icon_gouxuan1.png";
import image2 from "~/assets/images/limitCalculationEdit/able.png";
import image3 from "~/assets/images/limitCalculationEdit/icon_qiyerongzi@2x.png";
import image4 from "~/assets/images/limitCalculationEdit/icon_gouxuan2.png";
import image5 from "~/assets/images/limitCalculationEdit/icon_gouxuan1.png";
import image6 from "~/assets/images/limitCalculationEdit/able.png";
import image7 from "~/assets/images/limitCalculationEdit/icon_gerenrongzi@2x.png";
import image8 from "~/assets/images/limitCalculationEdit/disableP.png";
import { Form, Button, Popup, Picker, Input } from "react-vant";
import type { FormInstance } from 'react-vant';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selection, matchProduct } from "~/apis/api";
import type { Item, SubItem } from "~/types/index";
//import { useSerialNoStore } from '~/stores/index'
import {setSerialNoStore} from '~/store/modules/serialNo'

export default function LimitCalculationEdit() {
 let dispatch = useDispatch();
  const [personDisable, setPersonDisable] = useState(true);
  const [selectionObj, setSelectionObj] = useState<{ [key: string]: any }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [revenueSources, setrevenueSources] = useState<string | number>("");
  const [establishmentYear, setestablishmentYear] = useState<string | number>(
    ""
  );
  const [registrationLocation, setregistrationLocation] = useState<
    string | number
  >("");
  const [brandManagement, setbrandManagement] = useState<string | number>("");
  const [involvingImportExportTrade, setinvolvingImportExportTrade] = useState<
    string | number
  >("");
  const [projectType, setprojectType] = useState<string | number>("");
  const [establishmentYear_text, setestablishmentYear_text] = useState("");
  const [registrationLocation_text, setregistrationLocation_text] =
    useState("");
  const [brandManagement_text, setbrandManagement_text] = useState("");
  const [involvingImportExportTrade_text, setinvolvingImportExportTrade_text] =
    useState("");
  const [projectType_text, setprojectType_text] = useState("");
  const [chooseLi, setchooseLi] = useState(0);
  const [isShow1016, setisShow1016] = useState(false);
  const [isShow1017, setisShow1017] = useState(false);
  const [isShow1018, setisShow1018] = useState(false);
  const [sourceUlActive, setsourceUlActive] = useState(0);
  const [showPicker, setshowPicker] = useState(false);
  const [popTit, setpopTit] = useState<string>("");
  const [columns, setcolumns] = useState<selectTypeItem[]>([]);
  const [currentPopKey, setcurrentPopKey] = useState<string>("");
  let navigate = useNavigate();
  const form = useRef<FormInstance | null>(null);
  const getData = async () => {
    let res = await selection();
    console.log("selection-res",res,res.data,typeof(res.data));
    res.data && (res.data).map((item: Item, index: number) => {
      if (item.itemNo == "MV1001" && item.values.length) {
        setrevenueSources(item?.values[0]?.value);
        chooseSourceUl(0, item?.values[0]);
      }
      let newVal = selectionObj
      newVal[item.itemNo] = item;
      setSelectionObj(newVal)
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const setChooseLiFun = (index: number) => {
    setchooseLi(index);
  };

  const chooseSourceUl = (index: number, item: SubItem) => {
    setsourceUlActive(index);
    setrevenueSources(item.value);
    let show1016Arr = [1, 2, 3];
    let show1017Arr = [1, 2, 3];
    let show1018Arr = [5];
    if (show1016Arr.includes(item.value)) {
      setisShow1016(true);
    } else setisShow1016(false);
    if (show1017Arr.includes(item.value)) {
      setisShow1017(true);
    } else setisShow1017(false);
    if (show1018Arr.includes(item.value)) {
      setisShow1018(true);
    } else setisShow1018(true);
  };

  const onSubmit = (values: any) => {
    console.log("onSubmit",values);
    setIsLoading(true);
    let formData = {
      revenueSources: revenueSources,
      establishmentYear: establishmentYear,
      registrationLocation: registrationLocation,
      brandManagement: brandManagement,
      involvingImportExportTrade: involvingImportExportTrade,
      projectType: projectType,
    };
    matchProduct(formData)
      .then((res) => {
        console.log("matchProduct-res-ppp",res);
        if(res&& res.data){
       
  
         console.log("matchProduct--serialNommmm",res.data?.serialNo);

         dispatch(setSerialNoStore(res.data?.serialNo))
          //  serialNoStore.setSerialNoStore(data.data!.serialNo)
          setIsLoading(false);
          navigate("/productList");
          // router.push({ path: '/productList' })
        }
        
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  type selectTypeItem = {
    text: string;
    value: string;
  };
  type PickerColumnOption = {
    text?: React.ReactNode;
    value?: string;
    children?: PickerColumnOption[];
    disabled?: boolean;
  } & Record<string, any>;
  type PickerColumn<T = PickerColumnOption> = (string | T)[];
  

  // 定义 Picker 选项的类型
  interface PickerOption {
    text: string;
    value: number | string;
  }
  const onConfirm = (options:string,row:selectTypeItem) => {
    let selectValue = row.value;
    let selectText = row.text;
    switch (currentPopKey) {
      case "MV1002":
        setestablishmentYear(selectValue);
      //  setestablishmentYear_text(selectText);
        form.current?.setFieldValue("establishmentYear_text", selectText);
        break;
      case "MV1003":
        setregistrationLocation(selectValue);
       // setregistrationLocation_text(selectText);
        form.current?.setFieldValue("registrationLocation_text", selectText);
        break;
      case "MV1016":
        setbrandManagement(selectValue);
      //  setbrandManagement_text(selectText);
        form.current?.setFieldValue("brandManagement_text", selectText);
        break;
      case "MV1017":
        setinvolvingImportExportTrade(selectValue);
       // setinvolvingImportExportTrade_text(selectText);
        form.current?.setFieldValue("involvingImportExportTrade_text", selectText);
        break;
      case "MV1018":
        setprojectType(selectValue);
        //setprojectType_text(selectText);
        form.current?.setFieldValue("projectType_text", selectText);
        break;
    }
    setshowPicker(false);
  };
  const showPop = (key: string) => {
    setcurrentPopKey(key);
    setpopTit(selectionObj[key].itemName);
    setcolumns(selectionObj[key].values);
    setshowPicker(true);
  };
  return (
    <div className="limitCalculationEdit">
      <Form onFinish={onSubmit} required={true} ref={form} layout="vertical"  footer={
        <Button
          className="btn"
          round
          block
          type="primary"
          nativeType="submit"
          disabled={isLoading}
          loading={isLoading}
          loading-text="提交中..."
        >
          提交
        </Button>
      }>
        <div className="formBlock">
          <div className="head">
            <h2>请填写您的基本信息</h2>
            <h2>以便匹配适合您的数字金融产品</h2>
          </div>
          <div className="cont comFormCont">
            <ul className="typeUl">
              <li
                className={chooseLi == 0 ? "active" : ""}
                onClick={() => setChooseLiFun(0)}
              >
                {chooseLi == 0 ? (
                  <img alt="" src={image1} className="check" />
                ) : (
                  <img src={image2} alt="" className="check" />
                )}

                <img alt="" src={image3} className="typeImg" />
                <h2>企业融资</h2>
              </li>
              <li
                className={chooseLi == 1 ? "active" : ""}
                onClick={() => setChooseLiFun(personDisable ? 0 : 1)}
              >
                {personDisable ? (
                  <img src={image4} alt="" className="check" />
                ) : (
                  ""
                )}
                {chooseLi == 1 ? <img src={image5} className="check" /> : ""}
                {!personDisable && chooseLi == 0 ? (
                  <img src={image6} alt="" className="check" />
                ) : (
                  ""
                )}
                {!personDisable ? (
                  <img src={image7} alt="" className="typeImg2" />
                ) : (
                  ""
                )}
                {personDisable ? (
                  <img src={image8} alt="" className="typeImg2" />
                ) : (
                  ""
                )}

                <h2>个人融资</h2>
              </li>
            </ul>
            <p className="textName">
              <span>*</span>
              {selectionObj["MV1001"] && selectionObj["MV1001"].itemName}
            </p>
            {selectionObj["MV1001"] ? (
              <ul className="sourceUl">
                {selectionObj["MV1001"].values.map(
                  (item: SubItem, index: number) => (
                    <li
                      key={index}
                      className={sourceUlActive == index ? "active" : ""}
                      onClick={() => chooseSourceUl(index, item)}
                    >
                      {item.text}
                    </li>
                  )
                )}
              </ul>
            ) : (
              ""
            )}

            {selectionObj["MV1002"] ? (
              <div>
                <Form.Item
                  name="establishmentYear_text"
                  className="comFieldInp noBor comSelectInp"
                  label={selectionObj["MV1002"].itemName}
                  label-align="top"
                  onClick={() => showPop("MV1002")}
                  rules={[
                    {
                      required: true,
                      message: `请选择${selectionObj["MV1002"].itemName}`,
                    },
                  ]}
                >
                  <Input readOnly placeholder="请选择" />
                </Form.Item>
              </div>
            ) : (
              ""
            )}
            {selectionObj["MV1003"] ? (
              <div>
                <Form.Item
                  name="registrationLocation_text"
                  className="comFieldInp noBor comSelectInp"
                  label={selectionObj["MV1003"].itemName}
                  label-align="top"
                  onClick={() => showPop("MV1003")}
                  rules={[
                    {
                      required: true,
                      message: `请选择${selectionObj["MV1003"].itemName}`,
                    },
                  ]}
                >
                  <Input readOnly placeholder="请选择" />
                </Form.Item>
              </div>
            ) : (
              ""
            )}
            {selectionObj["MV1016"] && isShow1016 ? (
              <div>
                <Form.Item
                  name="brandManagement_text"
                  className="comFieldInp noBor comSelectInp"
                  label={selectionObj["MV1016"].itemName}
                  label-align="top"
                  onClick={() => showPop("MV1016")}
                  rules={[
                    {
                      required: true,
                      message: `请选择${selectionObj["MV1016"].itemName}`,
                    },
                  ]}
                >
                  <Input readOnly placeholder="请选择" />
                </Form.Item>
              </div>
            ) : (
              ""
            )}
            {selectionObj["MV1017"] && isShow1017 ? (
              <div>
                <Form.Item
                  name="involvingImportExportTrade_text"
                  className="comFieldInp noBor comSelectInp"
                  label={selectionObj["MV1017"].itemName}
                  label-align="top"
                  onClick={() => showPop("MV1017")}
                  rules={[
                    {
                      required: true,
                      message: `请选择${selectionObj["MV1017"].itemName}`,
                    },
                  ]}
                >
                  <Input readOnly placeholder="请选择" />
                </Form.Item>
              </div>
            ) : (
              ""
            )}
            {selectionObj["MV1018"] && isShow1018 ? (
              <div>
                <Form.Item
                  name="projectType_text"
                  className="comFieldInp noBor comSelectInp"
                  label={selectionObj["MV1018"].itemName}
                  label-align="top"
                  onClick={() => showPop("MV1018")}
                  rules={[
                    {
                      required: true,
                      message: `请选择${selectionObj["MV1018"].itemName}`,
                    },
                  ]}
                >
                  <Input readOnly placeholder="请选择" />
                </Form.Item>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
     
        
      </Form>
      <Popup
        visible={showPicker}
        round
        position="bottom"
        overlay-className="timeSelect"
      >
        <Picker
          title={popTit}
           placeholder=""
          className="comTimePickerC"
          columns={columns}
          onCancel={() => setshowPicker(false)}
          onConfirm={(value:string, selectedRow:selectTypeItem) => onConfirm(value, selectedRow) }
        />
      </Popup>
    </div>
  );
}
