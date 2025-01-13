import axios from "axios";
import { Toast } from "react-vant";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
// import { useSelector } from "react-redux";
import store from "~/store/index";
import type { Headers } from "~/types";
// 创建 axios 实例
const http: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // 你需要的接口地址
  timeout: 10000, // 超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const headersData = store.getState()?.headerSlice;
    console.log("headersData", headersData);

    // // 强制类型转换为 InternalAxiosRequestConfig
    const internalConfig = config as InternalAxiosRequestConfig;
    // 如果需要确保 headers 存在
    internalConfig.headers = internalConfig.headers || {};
    const openId = headersData.headers.openId ? headersData.headers.openId : "";
    const token = headersData.headers["wechat-token"];
    if (openId || token) {
      internalConfig.headers.openId = headersData.headers.openId;
      internalConfig.headers.channelCode = headersData.headers.channelCode;
      internalConfig.headers["wechat-token"] =
        headersData.headers["wechat-token"];
    }
    return internalConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 根据你的 API 返回的格式进行调整
    if (response.status === 200) {
      if (response.data.flag === "FAILURE") Toast.info(response.data.message);
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // 处理错误
    console.error("请求出错", error);
    return Promise.reject(error);
  }
);

export default http;
