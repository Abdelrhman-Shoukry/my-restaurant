import React from "react";
import "../style/header.css";
import background from "../images/background3.webp";
import "../style/sec2.css";

class Sec2 extends React.Component {
  render() {
    return (
      <section id="sec3">
        <div class="imgnew">
          <img src={background} alt="" />
        </div>
        <header>
          <div>
            <h1>Menu Categories </h1>
          </div>

          <div>
            <button class="order1">
              view the full menu <i class="fa-solid fa-right-long"></i>
            </button>
          </div>
        </header>

        <div class="araf">
          <a href="">
            <div class="sewarr">
              <div class="img1">Appetizers</div>
              <div class="img2">Burgers</div>
              <div class="img3">Pizza</div>
              <div class="img4">fries</div>
              <div class="img5">Sides</div>
              <div class="img6">Desserts </div>
              <div class="img7">Beverages </div>
              <div class="img8">Specials</div>
            </div>
          </a>
        </div>
        <div class="ab">
          <div class="parent">
            <div class="imgicon">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <h2>Vegetarian</h2>
          </div>
          <div class="parent">
            <div class="imgicon">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <h2>Gluten Free</h2>
          </div>
          <div class="parent">
            <div class="imgicon3">
              <i class="fa-solid fa-person-skating"></i>
            </div>
            <h2>Dairy Free </h2>
          </div>
          <div class="parent">
            <div class="imgicon">
              <i class="fa-solid fa-person-skating"></i>
            </div>
            <h2> keto Friendly</h2>
          </div>
        </div>

        
      </section>
      
    )
  }
}

export default Sec2;
