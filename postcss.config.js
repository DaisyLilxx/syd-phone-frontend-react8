// postcss.config.js
module.exports = {
  plugins: [
    require("autoprefixer"), // 自动添加浏览器前缀
    // 如果需要将 px 转换为 vw 或 rem，可以使用 postcss-px-to-viewport 插件
    require("postcss-px-to-viewport")({
      viewportWidth: 750, // 设计稿的宽度
      // viewportHeight: 667, // 可选，设计稿的高度
      unitPrecision: 3, // 转换精度
      //   viewportUnit: "vw", // 转换为 vw 单位
      //  minPixelValue: 1, // 小于等于 1px 不转换
      //mediaQuery: false, // 是否在媒体查询中转换
    }),
  ],
};
