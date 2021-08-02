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
<h1>Coasters</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Ducimus consequuntur, consequatur possimus eum architecto quis, expedita et minima at a eligendi facilis! Laborum cupiditate ratione omnis laboriosam consequatur.
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
<h1>Choping boards</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Ducimus consequuntur, consequatur possimus eum architecto quis, expedita et minima at a eligendi facilis! Laborum cupiditate ratione omnis laboriosam consequatur.
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
<h1>paestels</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Ducimus consequuntur, consequatur possimus eum architecto quis, expedita et minima at a eligendi facilis! Laborum cupiditate ratione omnis laboriosam consequatur.
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
<h1>serving Trays</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Ducimus consequuntur, consequatur possimus eum architecto quis, expedita et minima at a eligendi facilis! Laborum cupiditate ratione omnis laboriosam consequatur.
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
<h1>Wine holders</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Ducimus consequuntur, consequatur possimus eum architecto quis, expedita et minima at a eligendi facilis! Laborum cupiditate ratione omnis laboriosam consequatur.
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
<h1> Cake stands</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero. Ducimus consequuntur, consequatur possimus eum architecto quis, expedita et minima at a eligendi facilis! Laborum cupiditate ratione omnis laboriosam consequatur.
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
