import React from 'react'

import 'assets/styles/publish/iconfont.css'

import addressImg from 'assets/images/publish/定位@3x.png'

import 'animate.css'

import { Footer, FooterTop, FooterMiddle } from './footer'

import TabBar from './tabbar/tabbar.jsx'

const FooterUI = props => {
    return (
        <Footer>
            <FooterTop>
                <div className = "position">
                    <img src={ addressImg } alt=""/>
                    <span>你在哪里</span>
                </div>
                <div 
                    className = "setUp" 
                    onClick = { props.setUpClick } 
                    data-id = { props.setUp }
                >
                    <span>设置</span>
                    <i className={ props.setUp }></i>
                    {
                        !props.setUp &&(
                        <div className = 'animated zoomIn ckeckout' onClick = { props.stopClick }>
                            <div className = 'selectTop'>
                                <div className = 'seeRange'>可见范围</div>
                                <div className = 'select'>
                                    <label htmlFor="gckj" className='labelName'>广场可见</label>
                                    <input type="radio" name = 'seeRange' id = 'gckj'/>
                                    <label htmlFor="gckj" className = 'radio iconfont icon-check-circle' onClick= { props.labelClick }></label>
                                    <label htmlFor="zykj" className='labelName'>主页可见</label>
                                    <input type="radio" name = 'seeRange' id = 'zykj'/>
                                    <label htmlFor="zykj" className = 'radio iconfont' onClick= { props.labelClick }></label>
                                    <label htmlFor="zjkj" className='labelName'>自己可见</label>
                                    <input type="radio" name = 'seeRange' id = 'zjkj'/>
                                    <label htmlFor="zjkj" className = 'radio iconfont' onClick= { props.labelClick }></label>
                                    <label htmlFor="jmsrkj" className='labelName'>仅陌生人可见</label>
                                    <input type="radio" name = 'seeRange' id = 'jmsrkj'/>
                                    <label htmlFor="jmsrkj" className = 'radio iconfont' onClick= { props.labelClick }></label>
                                </div>
                                <div className = 'seeRange'>权限</div>
                                <div className = 'control'>
                                    <label htmlFor="jzxz" className='labelName'>禁止下载</label>
                                    <input type="checkbox" name = 'control' id = 'jzxz'/>
                                    <label htmlFor="jzxz" className = 'iconfont icon-check-circle' onClick= { props.moreLabelClick }></label>
                                    <label htmlFor="jzzf" className='labelName'>禁止转发</label>
                                    <input type="checkbox" name = 'control' id = 'jzzf'/>
                                    <label htmlFor="jzzf" className = 'iconfont' onClick= { props.moreLabelClick }></label>
                                    <label htmlFor="lzzz" className='labelName'>来自转载</label>
                                    <input type="checkbox" name = 'control' id = 'lzzz'/>
                                    <label htmlFor="lzzz" className = 'iconfont' onClick= { props.moreLabelClick }></label>
                                </div>
                            </div>
                            <div className = 'sanjiao'></div>
                        </div>  )
                    }
                </div>
            </FooterTop>
            <FooterMiddle>
                {/* <span className='voice'></span>
                <span className='picture'></span>
                <span className='tackPickture'></span>
                <span className='emoticon'></span> */}
                <TabBar></TabBar>
            </FooterMiddle>    
        </Footer>
    )
}

export default FooterUI