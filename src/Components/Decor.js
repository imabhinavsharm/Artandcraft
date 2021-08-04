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

            <h1>Welcome to the Art & Craft Decorative Products</h1>
            <h4>These wonderful Products gives your kitchen a luxrious Touch </h4>
            </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items">Antique Candle Stands</h1>
<p className="para_items">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
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
<h1 className="heading_items">Some Lovely Photoframes</h1>
<p className="para_items">
    Photos youll love...with memories for life its a time to framed these wonderful memories into a elegant photoframes by Art & Craft.
</p>
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
<h1 className="heading_items">Table Lamps</h1>
<p className="para_items">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
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
<h1 className="heading_items">pendant Lamps</h1>
<p className="para_items">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo temporibus officia praesentium eligendi neque debitis, tempora voluptates velit, ipsa saepe cum culpa provident placeat repellendus qui quasi. Animi, repellendus.</p>
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
<h1 className="heading_items">Mirrors</h1>
<p className="para_items">
    Change your style to see your beautiful face try the marble based mirrors with Art & Craft your beautiful face look more beautiful when you see it in these mirros .
</p>
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
<h1 className="heading_items">Book ends </h1>
<p className="para_items">
    Give your Book Shelf updation with these elegant marble Book ends these  are available in Lilac marble ,Calatorao marble , Marengo Grey marble and many more or you can customize it with your choice.
</p>
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

