
import React from "react";
import '../style/header.css'

class Header extends React.Component{
    render(){
        return(
<section id="sec1">
        <header>
            <div class="logo">
                <a href="">
                    <img src="https://avada.website/takeout/wp-content/uploads/sites/136/2021/04/takeout-logo.svg"
                        />
                </a>
            </div>

            <nav>
                <ul>
                    <li><a href="" class="active">Home <i class="fa fa-arrow-down"></i> </a></li>
                    <li><a href=""> Order online</a></li>
                    <li><a href=""> About </a></li>
                    <li><a href=""> News</a></li>
                    <li><a href=""> Contact us</a></li>
                </ul>
            </nav>
        </header>

       
            <div class="content">
                <h3>Hungry?</h3>
                <h1>Great Food</h1>
                <h2>Delivered</h2>
                <button>View our menue</button>
            </div>
    </section>

        )
    }
}


export default Header;


