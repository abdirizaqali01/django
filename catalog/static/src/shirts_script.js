/*-------------------------------------------------*/
/* PRODUCT-TAB SHIRT */
/*-------------------------------------------------*/
import sharedStyles from './shop_component_style.js';

const template = document.createElement("template")
template.innerHTML = `
    ${sharedStyles}

    <div class="item-wrapper">
        <!-- next and prev butons -->
        <div class="slider-btn">
            <button class="lefter" onclick="plusDivs(-1)"><img src="images/chevron-left.svg" alt=""></button>
            <button class="righter" onclick="plusDivs(1)"><img src="images/chevron-right.svg" alt=""></button>
        </div>

         <!-- Shopping Cart -->
         <div class="cart" id="cart">
            <button>
                <img src="images/cart.svg" alt="">
                <p class="text">Cart</p>
            </button>
        </div>
        
        <!-- PRODUCT CONTENT -->
        <div class="item">
            <div class="product-views" id="product_views_1">
                <div class="img-wrapper" data-target="img_1_1"><img src="images/products/shirt.png" alt=""></div>
                <div class="img-wrapper" data-target="img_1_2"><img src="images/products/shirt-back.png" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_1_1" src="images/products/shirt.png" alt="">
                    <img class="initial-hidden" id="img_1_2" src="images/products/shirt-back.png" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday T-shirt</h2>
                    <p>40€</p>
                </div>
                <div class="product-purchase">
                    <button>L</button>
                    <button>M</button>
                    <button>S</button>
                    <button class="buy-btn">BUY</button>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="product-views" id="product_views_2">
                <div class="img-wrapper" data-target="img_2_1"><img src="images/black-shirt.png" alt=""></div>
                <div class="img-wrapper" data-target="img_2_2"><img src="images/black-shirt-back.png" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_2_1" src="images/black-shirt.png" alt="">
                    <img class="initial-hidden" id="img_2_2" src="images/black-shirt-back.png" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday T-shirt</h2>
                    <p>40€</p>
                </div>
                <div class="product-purchase">
                    <button>L</button>
                    <button>M</button>
                    <button>S</button>
                    <button class="buy-btn">BUY</button>
                </div>
            </div>
        </div>
        
    </div>
`

class ProductTab extends HTMLElement {
    constructor() {
        super();
        this.slideIndex = 1;
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.slideIndex = 1; // initialize slide index
        
        // Set up click listeners for each .img-wrapper
        this.shadowRoot.querySelectorAll('.img-wrapper').forEach(wrapper => {
            wrapper.addEventListener('click', (e) => {
                let productDisplay = e.target.closest('.item').querySelector('.product-display');
                productDisplay.querySelectorAll('img').forEach(img => img.classList.add('initial-hidden'));
                let targetImageId = e.target.closest('.img-wrapper').getAttribute('data-target');
                let targetImage = this.shadowRoot.getElementById(targetImageId);
                if (targetImage) {
                    targetImage.classList.remove('initial-hidden');
                }
            });
        });
    
        // Set up listeners for .lefter and .righter buttons
        this.shadowRoot.querySelector('.lefter').addEventListener('click', () => this.plusDivs(-1));
        this.shadowRoot.querySelector('.righter').addEventListener('click', () => this.plusDivs(1));
        this.showDivs(this.slideIndex); // show initial slide
    }

    plusDivs(n) {
        this.showDivs(this.slideIndex += n);
    }

    showDivs(n) {
        let x = this.shadowRoot.querySelectorAll(".item");
        if (n > x.length) { this.slideIndex = 1; }
        if (n < 1) { this.slideIndex = x.length; }
        x.forEach(item => item.style.display = "none");
        x[this.slideIndex - 1].style.display = "block";
    }
}

customElements.define("product-shirts", ProductTab);
