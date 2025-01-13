import request from "./request";
import { AxiosResponse } from "axios";
import type {
  MatchProductParam,
  MobileParam,
  LoginParam,
  ItemValueParam,
  CalculateResultParam,
  BaseRes,
  Item,
  SubItem,
  MatchProductRes,
  MatchProduct,
  resultRes,
  objectType,
} from "~/types/index";
// 接口调用时需要传入泛型，表示接口返回的类型
// 定义返回数据的类型
// 示例
// interface User {
//   id: number
//   name: string
//   email: string
// }
// // 获取用户信息
// export const getUser = (userId: number) => {
//   return request.get<User>(`/users/${userId}`)
// }

// 小程序下拉查询
export const selection = () => {
  return request.get<string, BaseRes<Item[]>>(
    `/dstp-op/rest/api/app/financial/selection`
  );
};
// 获取匹配产品
export const matchProduct = (data: MatchProductParam) => {
  return request.post<MatchProductParam, BaseRes<MatchProductRes>>(
    `/dstp-op/rest/api/app/financial/match/product`,
    data
  );
};
// 验证码发送
export const sendMobileCode = (data: MobileParam) => {
  return request.get<string, BaseRes<null>>(
    `/dstp-auth/account/app/sendMobileCode`,
    {
      params: data,
    }
  );
};
// 小程序验证码登录接口
export const login = (data: LoginParam) => {
  console.log("loginloginloginloginlogin");
  return request.post<string, objectType>(
    `/dstp-auth/wechat/authCode/login`,
    {},
    {
      params: data,
      headers: {
        "login-strategy": "10",
      },
    }
  );
};
// 获取额度测算提交的动态指标
export const getItemValue = (data: ItemValueParam) => {
  return request.get<string, BaseRes<object>>(
    `/dstp-op/rest/api/app/financial/calculate/itemValue`,
    {
      params: data,
    }
  );
};
// 提交并获取额度测算结果
export const calculateResult = (data: CalculateResultParam) => {
  return request.post<string, BaseRes<resultRes>>(
    `/dstp-op/rest/api/app/financial/calculate/result`,
    data
  );
};
// 获取额度测算结果
export const getCalculateResult = (data: ItemValueParam) => {
  return request.get<string, BaseRes<MatchProduct[]>>(
    `/dstp-op/rest/api/app/financial/calculate/result`,
    {
      params: data,
    }
  );
};

// 获取额度测算详情查询接口
export const getCalculateResultDetail = (id: number) => {
  return request.get(
    `/dstp-op/rest/api/app/financial/calculate/result/${id}`,
    {}
  );
};
// 获取推荐匹配产品 查询接口
export const getProductList = (data: ItemValueParam) => {
  return request.get<string, BaseRes<MatchProduct[]>>(
    `/dstp-op/rest/api/app/financial/match/product`,
    {
      params: data,
    }
  );
};
// 获取推荐匹配产品详情 查询接口
export const getProductDetail = (id: string) => {
  return request.get<string, BaseRes<objectType>>(
    `/dstp-op/rest/api/app/financial/match/product/${id}`,
    {}
  );
};
// 测额记录
export const getHistory = () => {
  return request.get<string, BaseRes<resultRes[]>>(
    `/dstp-op/rest/api/app/financial/calculate/result/history`,
    {}
  );
};
