export interface Student {
  name: string
}
export interface Headers {
  openId?: string
  channelCode?: string
  'wechat-token'?: string
}

export interface MatchProductParam {
  revenueSources: number | string
  establishmentYear: number | string
  registrationLocation: number | string
  brandManagement: number | string
  involvingImportExportTrade: number | string
  projectType: number | string
}
export interface MobileParam {
  mobile: string
}
export interface LoginParam {
  username: string
  authCode: string
}
export interface ItemValueParam {
  serialNo: string
}
export interface CalculateResultParam {
  averageMonthlyReceivableB2B: number | string
  averageMonthlyReceivableB2C: number | string
  distributorMonthlyPurchaseAmount: number | string
  entName: string
  enterpriseLoanBalance: number | string
  governmentBiddingContractAmount: number | string
  lastYearImportExportTradeAmount: number | string
  lastYearNetProfit: number | string
  lastYearOperatingIncome: number | string
  purchaseToPaymentTime: number | string
  serialNo: string
}
export interface resultRes {
  data: []
  dateTime: string
  serialNo: string
}
export interface objectType {
  [key: string]: any
}
export interface BaseRes<T = undefined> {
  code: string
  data: T | null
  flag: string
  message: string
  traceId: string
}
export interface SubItem {
  text: string
  value: number
}
export interface Item {
  itemName: string
  itemNo: string
  values: SubItem[]
}
export interface MatchProductRes {
  data: MatchProduct[]
  serialNo: string
}
export interface MatchProduct {
  applicableCustomer: string
bank: string
bankIconUrl: string|null
creditAmount: number|null
creditAmountStr: string|null
creditCreateTime: string|null
currency: string
interestRate: string
interestRateDescribe: string
interestRateMax: number
interestRateMin: number
limitAmount: string
productId: number
productName:string
promotionLabel: null
repaymentMode: string
repaymentPeriod: string
resultId: null
serialNo: null
}
