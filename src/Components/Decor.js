import React from 'react'
import '../kitchen.css'
import {KitchenCard }from '../Components/KitchenCard'
import candle from '../Components/Datadecor'
import { frames,table,pendant,mirror,books } from '../Components/Datadecor'
const Decor = () => {
    return (
        <>
        <div className="heading_section_decor">
            <div className="heading_content">

            <h1>Welcome to the Art & Craft Kitchen Ware Products</h1>
            <h4>These wonderful Products gives your kitchen a luxrious Touch </h4>
            </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1>Antique Candle Stands</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                candle.map((val, ind) => {
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
<h1>Some Lovely Photoframes</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                frames.map((val, ind) => {
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
<h1>Table Lamps</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                table.map((val, ind) => {
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
<h1>pendant Lamps</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                pendant.map((val, ind) => {
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
<h1>Mirrors</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                mirror.map((val, ind) => {
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
<h1>Book ends </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                books.map((val, ind) => {
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

export default Decor

