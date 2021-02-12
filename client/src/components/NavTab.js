import React from 'react'
import './NavTab.css'
import {Link} from 'react-router-dom'
import tabImage1 from '../assets/images/tabImage1.jpg'
import tabImage2 from '../assets/images/tabImage2.png'
import tabImage3 from '../assets/images/tabImage3.png'
import tabImage4 from '../assets/images/tabImage4.svg'
import tabImage5 from '../assets/images/tabImage5.jpg'
import tabImage6 from '../assets/images/tabImage6.jpg'

function NavTab() {

    const openProductType = productType => e => {
        e.preventDefault()
        var x = document.getElementsByClassName("tab__content");
        var y = document.getElementsByClassName("tab__barBtn");
        for (let i = 0; i < x.length; i++) {
          x[i].style.display = "none";
          y[i].style.color = "#626262"
          y[i].style.background = "#fff"
        }
        e.target.style.color = "#fff"
        e.target.style.backgroundColor = "#536976"
        e.target.style.backgroundColor = "-webkit-linear-gradient(to right, #292E49, #536976)"
        e.target.style.backgroundColor = "linear-gradient(to right, #292E49, #536976)" 

        document.getElementById(productType).style.display = "flex";
    }
    
    return (
        <div className="tab">
            <div className="tab__container">
                <div className="tab__bar">
                    <div className="tab__barBtn" onClick={openProductType('featured')} 
                        style={{
                            color: "#fff",
                            background: "#536976",
                            background: "-webkit-linear-gradient(to right, #292E49, #536976)",
                            background: "linear-gradient(to right, #292E49, #536976)" }}>FEATURED</div>
                    <div className="tab__barBtn" onClick={openProductType('onsale')}>ON SALE</div>
                    <div className="tab__barBtn" onClick={openProductType('toprated')}>TOP RATED</div>
                    <div className="tab__barBtn" onClick={openProductType('newarrival')}>NEW ARRIVAL</div>
                </div>

                {/* tab1 content starts */}
                <div id="featured" className="tab__content">
                    <div className="tab__contentLeft">
                        <div className="tab__contentLeftTop">
                            <img src={tabImage1} alt=""/>
                            <div className="centerElement">
                                <h3>Here are huge offers!</h3>
                                <p>Summer Fooods available in our shop. Summer Fooods available in our shop. Summer Fooods available in our shop</p>
                                <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                            </div>
                        </div>
                        <div className="tab__contentLeftBottom">
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage2} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage3} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab__contentRight">
                        <div className="tab__contentRightImg">
                            <img src={tabImage6} alt=""/>
                            <div className="centerElement">
                                <h3>Here are huge offers!</h3>
                                <p>Summer Fooods available in our shop. Summer Fooods available in our shop. Summer Fooods available in our shop</p>
                                <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* tab1 content starts */}

                {/* tab2 content starts */}
                <div id="onsale" className="tab__content" style={{display: 'none'}}>
                    <div className="tab__contentLeft">
                        <div className="tab__contentLeftTop">
                            <img src={tabImage5} alt=""/>
                            <div className="centerElement">
                                <h3>Here are huge offers!</h3>
                                <p>Summer Fooods</p>
                                <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                            </div>
                        </div>
                        <div className="tab__contentLeftBottom">
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage2} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage3} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab__contentRight">
                        <div className="tab__contentRightImg">
                            <img src={tabImage5} alt=""/>
                            <div className="centerElement">
                                <h3>Here are huge offers!</h3>
                                <p>Summer Fooods</p>
                                <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* tab2 content ends */}

                {/* tab3 content starts */}
                <div id="toprated" className="tab__content" style={{display: 'none'}}>
                    <div className="tab__contentLeft">
                        <div className="tab__contentLeftTop">
                            <img src={tabImage3} alt=""/>
                            <div className="centerElement">
                                <h3>Here are huge offers!</h3>
                                <p>Summer Fooods</p>
                                <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                            </div>
                        </div>
                        <div className="tab__contentLeftBottom">
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage2} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage6} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab__contentRight">
                        <div className="tab__contentRightImg">
                            <img src={tabImage6} alt=""/>
                            <div className="centerElement">
                                <h3>Here are huge offers!</h3>
                                <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* tab3 content ends */}

                {/* tab4 content starts */}
                <div id="newarrival" className="tab__content" style={{display: 'none'}}>
                    <div className="tab__contentLeft">
                        <div className="tab__contentLeftTop">
                            <img src={tabImage4} alt=""/>
                            <div className="centerElement">
                                <h3>Here are huge offers!</h3>
                                <p>Summer Fooods</p>
                                <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                            </div>
                        </div>
                        <div className="tab__contentLeftBottom">
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage2} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                            <div className="tab__contentLeftBottomImg">
                                <img src={tabImage3} alt=""/>
                                <div className="centerElement">
                                    <h4>Here are huge offers!</h4>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab__contentRight">
                        <div className="tab__contentRightImg">
                            <img src={tabImage4} alt=""/>
                                 <div className="centerElement">
                                    <h3>Here are huge offers!</h3>
                                    <p>Summer Fooods</p>
                                    <Link to="#" className="btn btn-primary" variant="primary">BUY NOW</Link>
                                </div>
                        </div> 
                    </div>
                </div>
                {/* tab4 content ends */}


            </div>
        </div>
        
    )
}

export default NavTab
