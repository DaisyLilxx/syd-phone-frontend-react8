

import { useEffect, useState,useRef } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Popup, Button, Input, Form ,Checkbox } from 'react-vant';
import { sendMobileCode, login } from '~/apis/api'
import { useTypedSelector } from '~/hook/hook';
import { setUserMessStore} from '~/store/modules/userMess'
import { setHeaderStore} from '~/store/modules/header'
import type { LoginParam } from '~/types/index'
import type { FormInstance } from 'react-vant';
import Yhxy from './components/yhxy'
import Ysxy from './components/ysxy'
import company from "~/assets/images/login/story_logo@2x.png";
export default function Login() {
  let location = useLocation()
  let navigate = useNavigate()
  let dispatch = useDispatch()
  console.log("location",location)
let countInterval: number | null = null
const HeaderStore = useTypedSelector(state=>state.headerSlice)

const UserStore =  useTypedSelector(state=>state.userMessSlice)
const [username,setUsername] = useState('')
const [authCode,setAuthCode] = useState('')
const [checked,setChecked] = useState(false)
const [hasSendCode,setHasSendCode] = useState(false)
const [countText,setCountText] = useState('获取验证码')
const [isShowYhxy,setIsShowYhxy] = useState(false)
const [isShowYsxy,setIsShowYsxy] = useState(false)
const formRef = useRef<any>(null)
const form = useRef<FormInstance | null>(null);

const onSubmit = (values: LoginParam) => {
  console.log("values",values)  
  if (!checked) {
    return
  }
  login(values)
    .then((data) => {
      if (data.flag == 'SUCCESS' || data.token) {
        dispatch(setUserMessStore(data.userinfo))
        dispatch(setHeaderStore({ 'wechat-token': data.token }))
        if (location.state.referPage) navigate(location.state.referPage,{ replace:true })
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
const getCode =  () => {
let phone = form.current?.getFieldValue('username')
  if (hasSendCode) return
  //不能写成  form.current?.validateFields('username')
  form.current?.validateFields(['username'])
    .then(() => {
      // 如果验证通过，执行获取验证码的逻辑
      console.log('验证码已发送')
      sendMobileCode({ mobile: phone }).then((res) => {
        setHasSendCode(true)
        let time = 60
        setCountText(`${time}s后重发`)
        countInterval = window.setInterval(() => {
          if (time == 1) {
            setHasSendCode(false)
            clearInterval(countInterval!)
            setCountText(`获取验证码`)
          } else {
            time--
            setCountText(`${time}s后重发`)
          }
        }, 1000)
        console.log(res.data)
      })
    })
    .catch((error:any) => {
      // 验证未通过，提示错误信息
      console.log('error', error)
    })
}
const showYhxy = () => {
  setIsShowYhxy(true)
}
const showYsxy = () => {
  setIsShowYsxy(true)
}
useEffect(() => {
  return () => {
    if (countInterval) {
      window.clearInterval(countInterval)
    }
  }
  
},[])
return (
  <div>
  <div className="login">
    <h2 className="tit">欢迎来到</h2>
    <img src={company} className="company" />
    <div className="main">
    <Form onFinish={onSubmit} required={true} ref={form}  footer={ <div  className={`comNormalSubBtn ${checked ? '' : 'comNormalSubBtnDisabled'}`} >
          <Button round block  className="actBtn"  type="primary"
          nativeType="submit">
            提交
          </Button>
        </div>}>
        <Form.Item
          className="fieldInp phoneInp"
           name="username"
          rules={[{ required: true, message: '请输入手机号' }]}
        > 
        <Input placeholder='请输入手机号' maxLength={11}/>
        </Form.Item>
        <Form.Item
          name="authCode"
          className="fieldInp codeInp"
          rules={[{ required: true, message: '请输入验证码' }]}
        >
          <Input
            type="tel"
            maxLength={6} 
            suffix={<Button size="small"
            className={`codeBtn ${hasSendCode ? 'disableBtn' : ''}`}
            disabled={hasSendCode}
            onClick={getCode} type="primary">{countText}</Button>}
            placeholder="请输入验证码"
          />
        </Form.Item>
       
        <div className="checkWrap">
        <Checkbox checked={checked} shape='square' onChange={setChecked}>
        已阅读并同意
      </Checkbox><span className="xy"
            ><span onClick={showYhxy}>《用户协议》</span>、<span onClick={showYsxy}
              >《隐私政策》</span></span>

          {/* <van-checkbox
            shape="square"
            name="checkedFlag"
            v-model="checked"
            rules={[{ required: true, message: '请勾选协议' }]}
            >已阅读并同意</van-checkbox
          ><span className="xy"
            ><span @click="showYhxy">《用户协议》</span>、<span @click="showYsxy"
              >《隐私政策》</span
            ></span
          > */}
        </div>
        </Form>
      <p className="p">若您没有注册账号，点击登录后系统会自动为您注册。</p>
    </div>
  </div>
  {/* <!-- 圆角弹窗（底部） --> */}
  <Popup visible={isShowYhxy}
    onClose={() => setIsShowYhxy(false)}
    round
    position="bottom"
    style={{height: '80%'}}
  >
    <Yhxy />
  </Popup>
  <Popup
    visible={isShowYsxy}
    onClose={() => setIsShowYsxy(false)}
    round
    position="bottom"
    style={{height: '80%'}}
  >
    <Ysxy />
  </Popup>
  </div>
  )
}

