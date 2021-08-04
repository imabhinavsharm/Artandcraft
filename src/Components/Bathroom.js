import React from 'react'
import '../kitchen.css'
import {KitchenCard }from '../Components/KitchenCard'
import bathroom from '../Components/Bathroomdata'
const Bathroom = () => {
    return (
        <>
        <div className="heading_section_bathroom">
            <div className="heading_content">

            <h1>Welcome to the Art & Craft Bathroom Ware Products</h1>
            <h4>These wonderful Products gives your kitchen a luxrious Touch </h4>
            </div>
        </div>
        <div className="kitchen_ware">

        <div className="cards_kitchenware">
<h1 className="heading_items">Bathroom ware</h1>
<p className="para_items">
Handcrafted to exhibit the beautiful veining of the natural white marble, these Frost Marble Accessories elevate the bath to spa status. Made of 100% natural marble. Different color tones and texture makes the product unique. Imported.
</p>
        <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                             bathroom.map((val, ind) => {
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

export default Bathroom
