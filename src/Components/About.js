import React from 'react'
import './about.css'

import { Link}from "react-router-dom";
const About = () => {
    return (
        <>
            <div className="heading">
                <div className="content">
                    <div className="headingContent">
                        <div className="mainContent">

                            <h1>What We Do</h1>
                            <p>At <span>Art & Craft</span>, we make,beautiful & luxurios Stone utensils and decorative items for the people, who loves traditional items with a modern touch, always with a standard of excellence and guided by our core values.</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="part_2">
                <div className="part_2_content">
                    <div className="part_2Main">
                        <div className="part2left"></div>
                        <div className="part2right">
                            <h1>ART & CRAFT</h1>
                            <p style={{fontSize:"20px"}}>Art & Craft is an Indian startup manufacturer of custom-made carve marble composite products -- specializing in transforming various applications of cultured marble, onyx, and granite aggregates into a broad palette of colors, patterns, and finishes suitable for any design preference.  Products range from kitchen choping board,soap dish, including standard and custom-sized cake stands and a wide variety of accessories.
                            </p>
                            <p style={{fontSize:"20px"}}>
                            In no where time, Art & Craft has pursued an ongoing commitment to outstanding quality and customer service, and our customer base has grown to include individual customers, independent interior designer, kitchen and bathroom wares, and large-scale home developers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kitchenware_About">
                <div className="headingAboutKitchen"><h1>kitchenware</h1>
                <p style={{fontSize:"20px"}}>
                Give your dinnerware a matching marble makeover! Impress your friends with this sleek black and white crockery with gorgeous gold detail.
                    </p></div>
                    <div className="kitchenware_main">
                    <div className="kitchen_main_left">
                        <div className="leftcontent">
                            <h1>Lorem, ipsum.</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime amet, nobis expedita eveniet consequuntur iste. Praesentium sint culpa cupiditate unde optio excepturi, voluptas numquam voluptate dignissimos labore incidunt, quod placeat maiores et, officiis quaerat deleniti.
                            </p>
                        </div>
                    </div>
                    <div className="kitchen_main_right">
<div className="right1"></div>
<div className="right2"></div>
                    </div>
            </div>
            <div className="gotobutton">
            <Link className="links"  to="kitchen" style={{textDecoration:"none"}}>CHECK OUT MORE ON KITCHEN WARE</Link>

            </div>
                    </div>

            <div className="kitchenware_About">
                <div className="headingAboutKitchen"><h1>Bathroom ware</h1>
                <p style={{fontSize:"20px"}}>
                Handcrafted to exhibit the beautiful veining of the natural white marble, these Frost Marble Accessories elevate the bath to spa status. Made of 100% natural marble. Different color tones and texture makes the product unique. Imported.
                    </p></div>
                    <div className="kitchenware_main">
                    <div className="bathroom_main_left">
                        <div className="leftcontent">
                            <h1>hello</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime amet, nobis expedita eveniet consequuntur iste. Praesentium sint culpa cupiditate unde optio excepturi, voluptas numquam voluptate dignissimos labore incidunt, quod placeat maiores et, officiis quaerat deleniti.
                            </p>
                        </div>
                    </div>
                    <div className="kitchen_main_right">
<div className="right3"></div>
<div className="right4"></div>
                    </div>
                    </div>
                    <div className="gotobutton">
            <Link className="links"  to="bathroom" style={{textDecoration:"none"}}>CHECK OUT MORE ON BATHROOM WARE</Link>

            </div>
           
            </div>

            <div className="kitchenware_About">
                <div className="headingAboutKitchen"><h1>Decor</h1>
                <p style={{fontSize:"20px"}}>
                If you are looking for something different we introduce the new Marble Effect Porcelain Tiles Design collection of selected quality tiles in larger sizes
                    </p></div>
                    <div className="kitchenware_main" style={{width:"100%" , height:"auto"}}>
                        <div className="leftAboutdecor">

                        </div>
                        <div className="rightAboutdecor">
<h1 style={{color:"#42d113"}}>Lorem, ipsum dolor.</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, molestias. Et laudantium dignissimos minus distinctio iure? Autem cum quis, vitae fugiat exercitationem totam aliquam illum iure eveniet aperiam, sequi reprehenderit sit repellat velit blanditiis alias at ipsa. Voluptatibus quae qui deserunt architecto consequuntur, voluptatem voluptatum.</p>
                        </div>
                    </div>
                  <div className="parent_three_decor">
                      <div className="decor1"></div>
                      <div className="decor2"></div>
                      <div className="decor3"></div>
                  </div>
                    <div className="gotobutton">
            <Link className="links"  to="decor" style={{textDecoration:"none"}}>CHECK OUT MORE ON DECOR</Link>

            </div>
            </div>
        </>
    )
}

export default About
