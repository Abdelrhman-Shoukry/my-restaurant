
import React from "react";
import '../style/sec1.css'

class Sec1 extends React.Component{
    render(){
        return(

            <section id="sec2">
            <div class="icon">
                <div class="item">
                    <i class="fa-regular fa-clock"></i> <span>24/7 DELIVERY</span>
                </div>
                <div class="item">
                    <i class="fa-mobile"></i><span>OVER 100 DISHES</span>
                </div>
                <div class="item">
                    <i class=" fa-mobile"></i> <span>IN APP ORDERING </span>
                </div>
                <div class="item">
                    <i class="fa-solid fa-car"></i> <span>FAST DELIVERY </span>
                </div>
            </div>
            <h1>Our Most Popular Dishes</h1>
            <div class="row">
                <a href="">
                    <div class="item">
                        <div class="child">
                            <p>select options / Detials</p>
                        </div>
                    </div>
                    <p class="felos">Skin On Fries</p>
                    <p class="se3r">$6.99</p>
                </a>
                <a href="">
                    <div class="item2">
                        <div class="child">
                            <p>add to cart/ Detials</p>
                        </div>
                    </div>
                    <p class="felos">Choco Cookie Frappe</p>
                    <p class="se3r">$4.99 </p>
    
                </a>
                <a href="">
                    <div class="item3">
                        <div class="child">
                            <p>add to cart / Detials</p>
                        </div>
                    </div>
                    <p class="felos">The Donut Burger </p>
    
                    <p class="se3r">$6.99</p>
                </a>
    
            </div>
            <div>
                <button class="order">START YOUR ORDER <i class="fa-solid fa-right-long"></i></button>
            </div>
        </section>
        )
    }
}


export default Sec1;