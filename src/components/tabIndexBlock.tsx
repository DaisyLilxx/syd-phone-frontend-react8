import '~/assets/css/tabIndexBlock.less'
export default function TabIndexBlock({isBlank = false}){
return (
  <div className="pageBg tabIndexBlock">
    <div className="top">
      {!isBlank?
      <div className="cont" >
      <slot name="topText"></slot>
    </div>
      :''}
      {isBlank?<div className="cont blankTip" >移动端功能即将上线， 敬请期待！</div>:''}
      
      <img src="@/assets/images/dataAcquisition/3.png" />
    </div>
    {
      !isBlank?
      <div className="mainBg" >
      <div className="main">
        <div className="blueHead"><slot name="topTextImg"></slot></div>
        <slot name="main"></slot>
      </div>
      <div className="mainBtn">
        <div className="btnFixWrap"><slot name="actBtn"></slot></div>
      </div>
    </div>
      :''
    }
    {
      isBlank?
      <div className="mainBg" >
      <div className="blankBlock">
        <img src="@/assets/images/dataAcquisition/7.png" />
        <p>请先前往电脑端使用</p>
        <button type="button" className="zyBtn">使用指引&gt;&gt;</button>
      </div>
    </div>:''
    }
  </div>
)
}
