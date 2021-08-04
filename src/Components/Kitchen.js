import React from 'react'
import '../kitchen.css'
import {KitchenCard }from '../Components/KitchenCard'
import data from '../Components/KitchenData'
import {data2,data3,data4,data5,data6} from '../Components/KitchenData'
const Kitchen = () => {
    return (
        <>
        <div className="heading_section">
            <div className="heading_content">

            <h1>Welcome to the Art & Craft Kitchen Ware Products</h1>
            <h4>These wonderful Products gives your kitchen a luxrious Touch </h4>
            </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items">Coasters</h1>
<p className="para_items">Coaster are made up of white marble and mango wood with your choice of text and monogram engraving. see shop policies and ping for more information
</p>

        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                data.map((val, ind) => {
                                    return <KitchenCard
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        // heading={val.heading}
                                        // para={val.para}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items">Choping boards</h1>
<p className="para_items">
    Marble choping boards these gorgeous marble boards are handicraft by our craftman each peice varies in colours due to the natural formation of marble these marble boards are great for serving cheese and cracker in style as with all hand made items slight size and colours variations may occur any imperfection is a part of artisanal appeal and should be embraced marble 20 x 33 cms approx.
</p>

        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                data2.map((val, ind) => {
                                    return <KitchenCard
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        // heading={val.heading}
                                        // para={val.para}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items">paestels</h1>
<p className="para_items">
    Get your Kitchen's a traditional look with mordern touch with Art & Craft's Paestels these paestels are specialy design for home usage purpose and gives your kitchen a traditional look.
</p>

        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4"> 
                            {
                                data3.map((val, ind) => {
                                    return <KitchenCard
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        // heading={val.heading}
                                        // para={val.para}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items">serving Trays</h1>
<p className="para_items">
    Shop art & Craft for decoratives boxes and trays and keep cherised pre possessions organised find decor trays and coffee table trays for stylish storage.
</p>

        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                data4.map((val, ind) => {
                                    return <KitchenCard
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        // heading={val.heading}
                                        // para={val.para}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items">Wine holders</h1>
<p className="para_items">
Hang it up , tuek it away or keep it on display- mordern storage options provides a home for everything you own shop mordern stielves and console online.
</p>

        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                data5.map((val, ind) => {
                                    return <KitchenCard
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        // heading={val.heading}
                                        // para={val.para}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items"> Cake stands</h1>
<p className="para_items">
    Embrace your Presentation of your delicious Cakes with Art & Craft's marble cake stands these beautiful and elegant cake stand make your cake more presentable and delicious .
</p>

        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                data6.map((val, ind) => {
                                    return <KitchenCard
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        // heading={val.heading}
                                        // para={val.para}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


        </>
    )
}

export default Kitchen
