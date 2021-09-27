import React from 'react'
import '../css/MemberInside.css'
import '../js/memberinside'

export default function MemberInside() {
    return (
        <main className="memberInsideMain">
        <section className="memberInsideSection">
            <div className="membersCondition">
                <div className="memberConditionInfo">
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <p>Member Info</p>
                </div>
                <div className="memberConditionOrders">
                    <i className="fa fa-history" aria-hidden="true"></i>
                    <p>Member Orders</p>
                </div>
            </div>
            <div className="memberInfo">
                <div className="memberInfoItem">
                    <div className="memberInfoRows">
                        <p className="memberInfoText">哈囉～老闆，以下是你的會員資料，<br/><br/> <span>如欲更改請直接輸入，並按下方確認按鈕即可！</span></p>
                    </div>
                    <div className="memberInfoRows">
                        <p className="memberInfoTitle">Member Id</p>
                        <p className="memberInfoDetails">#1487</p>
                    </div>
                    <div className="memberInfoRows">
                        <p className="memberInfoTitle">Name</p>
                        <input type="text" className="memberInfoDetails" placeholder="Jen Hung"/>
                    </div>
                    <div className="memberInfoRows">
                        <p className="memberInfoTitle">Gender</p>
                        <input type="text" className="memberInfoDetails" placeholder="Female"/>
                    </div>
                    <div className="memberInfoRows">
                        <p className="memberInfoTitle">Phone</p>
                        <input type="text" className="memberInfoDetails" placeholder="0987654321"/>
                    </div>
                    <div className="memberInfoRows">
                        <p className="memberInfoTitle">Address</p>
                        <input type="text" className="memberInfoDetails" placeholder="台北市大安區忠孝東路四段123巷45號5樓之二"/>
                    </div>
                    <div className="memberInfoRows">
                        <p className="memberInfoTitle">Email</p>
                        <input type="text" className="memberInfoDetails" placeholder="jenhung910271@gmail.com"/>
                    </div>
                    <div className="memberInfoRows">
                        <p className="memberInfoTitle">Password</p>
                        <input type="text" className="memberInfoDetails" placeholder="**************"/>
                    </div>
                </div> 
                <div className="memberButton">
                    <button className="memberInfoButton deleteButton"><i className="fa fa-minus-circle" aria-hidden="true"></i><p>Discard</p></button>
                    <button className="memberInfoButton saveButton"><i className="fa fa-check-circle-o" aria-hidden="true"></i>Save Changes</button>
                </div>
            </div>
            <div className="memberOrders">
                <div className="memberOrdersTitle">
                    <div className="memberOrdersSee"></div>
                    <div className="memberOrdersId">Orders ID</div>
                    <div className="memberOrdersTime">Orders Time</div>
                    <div className="memberOrdersTotal">Orders Total</div>
                </div>
                <div className="memberOrdersItem">
                    <div className="memberOrdersSee" id="1"><i className="fa fa-list" aria-hidden="true"></i>Details</div>
                    <div className="memberOrdersId">135790</div>
                    <div className="memberOrdersTime">2020-12-28</div>
                    <div className="memberOrdersTotal">NT$3990</div>
                </div>
                <div className="memberOrdersDetails">
                    <ul>
                        <li> #27, 灰色印花棉踢, M, 3件, NT$4500 </li>
                        <li> #453, 兒童100%環保登山刷毛衣, 1件, NT$1280 </li>
                        <li> #1987, 高機能防風防水登山外套, 1件, NT$3780 </li>
                        <li> #3329, 15L超輕量側背包, 1件, NT$3780 </li>
                    </ul>
                </div>
                <div className="memberOrdersItem">
                    <div className="memberOrdersSee" id="2"><i className="fa fa-list" aria-hidden="true"></i>Details</div>
                    <div className="memberOrdersId">246802</div>
                    <div className="memberOrdersTime">2020-09-30</div>
                    <div className="memberOrdersTotal">NT$2570</div>
                </div>
                <div className="memberOrdersDetails">
                    <ul>
                        <li> #27, 灰色印花棉踢, M, 3件, NT$4500 </li>
                        <li> #453, 兒童100%環保登山刷毛衣, 1件, NT$1280 </li>
                        <li> #1987, 高機能防風防水登山外套, 1件, NT$3780 </li>
                        <li> #3329, 15L超輕量側背包, 1件, NT$3780 </li>
                    </ul>
                </div>
                <div className="memberOrdersItem">
                    <div className="memberOrdersSee" id="3"><i className="fa fa-list" aria-hidden="true"></i>Details</div>
                    <div className="memberOrdersId">148778</div>
                    <div className="memberOrdersTime">2020-05-19</div>
                    <div className="memberOrdersTotal">NT$12400</div>
                </div>
                <div className="memberOrdersDetails">
                    <ul>
                        <li> #27, 灰色印花棉踢, M, 3件, NT$4500 </li>
                        <li> #453, 兒童100%環保登山刷毛衣, 1件, NT$1280 </li>
                        <li> #1987, 高機能防風防水登山外套, 1件, NT$3780 </li>
                        <li> #3329, 15L超輕量側背包, 1件, NT$3780 </li>
                    </ul>
                </div>
                <div className="memberOrdersItem">
                    <div className="memberOrdersSee" id="4"><i className="fa fa-list" aria-hidden="true"></i>Details</div>
                    <div className="memberOrdersId">307896</div>
                    <div className="memberOrdersTime">2019-04-27</div>
                    <div className="memberOrdersTotal">NT$1550</div>
                </div>
                <div className="memberOrdersDetails">
                    <ul>
                        <li> #27, 灰色印花棉踢, M, 3件, NT$4500 </li>
                        <li> #453, 兒童100%環保登山刷毛衣, 1件, NT$1280 </li>
                        <li> #1987, 高機能防風防水登山外套, 1件, NT$3780 </li>
                        <li> #3329, 15L超輕量側背包, 1件, NT$3780 </li>
                    </ul>
                </div>
                <div className="memberOrdersItem">
                    <div className="memberOrdersSee" id="5"><i className="fa fa-list" aria-hidden="true"></i>Details</div>
                    <div className="memberOrdersId">107396</div>
                    <div className="memberOrdersTime">2019-03-29</div>
                    <div className="memberOrdersTotal">NT$3290</div>
                </div>
                <div className="memberOrdersDetails">
                    <ul>
                        <li> #27, 灰色印花棉踢, M, 3件, NT$4500 </li>
                        <li> #453, 兒童100%環保登山刷毛衣, 1件, NT$1280 </li>
                        <li> #1987, 高機能防風防水登山外套, 1件, NT$3780 </li>
                        <li> #3329, 15L超輕量側背包, 1件, NT$3780 </li>
                    </ul>
                </div>
                <div className="memberOrdersItem">
                    <div className="memberOrdersSee" id="6"><i className="fa fa-list" aria-hidden="true"></i>Details</div>
                    <div className="memberOrdersId">308741</div>
                    <div className="memberOrdersTime">2019-02-11</div>
                    <div className="memberOrdersTotal">NT$4360</div>
                </div>
                <div className="memberOrdersDetails">
                    <ul>
                        <li> #27, 灰色印花棉踢, M, 3件, NT$4500 </li>
                        <li> #453, 兒童100%環保登山刷毛衣, 1件, NT$1280 </li>
                        <li> #1987, 高機能防風防水登山外套, 1件, NT$3780 </li>
                        <li> #3329, 15L超輕量側背包, 1件, NT$3780 </li>
                    </ul>
                </div>
                <div className="memberOrdersTitle">
                    <div className="memberOrdersSee"></div>
                    <div className="memberOrdersId"></div>
                    <div className="memberOrdersTime"></div>
                    <div className="memberOrdersTotal"></div>
                </div>
            </div>
        </section>
    </main>
    )
}
