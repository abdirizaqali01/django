const sharedStyles = `
  <style>
        .slider-btn {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            z-index: 7;
        }

        .slider-btn button {
            background: linear-gradient(180deg, var(--second-global-color) 0%, var(--dark-global-color) 100%);
            padding: 6px 10px;
            color: var(--main-text-color);
            transform: skew(-12deg);
            letter-spacing: 0.04em;
            border: solid 4px var(--main-global-color);
            border-radius: 6px;
            cursor: pointer;
        }

        .slider-btn button:active {
            border: solid 4px var(--main-accent-color);
        }

        .slider-btn button img {
            cursor: pointer;
        }

        .slider-btn .lefter {
            position: absolute;
            left: 0;
        }

        .slider-btn .righter {
            position: absolute;
            right: 0;
        }

        /* SHOPPING CART */
        .cart {
            position: absolute;
            right: 0;
            top: 0;
            margin: 5px;
            z-index: 6;
            text-align: center;
            cursor: pointer;
        }

        .cart button {
            background: none;
            border: none;
            cursor: pointer;
        }

        .cart img {
            height: 40px;
            cursor: pointer;
        }

        .cart p {
            font-family: 'Segoe UI';
            font-size: 1.2em;
            color: white;
            margin: 3px;
            cursor: pointer;
        }

        .item {
            position: relative;
            height: 100%;
            width: 100%;
            display: none;
            z-index: 5;
        }

        .item .product-views {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 7;
        }

        .item .product-views .img-wrapper {
            background: rgba(0, 0, 0, 0.3);
            padding: 12px;
            margin:  5px;
            transition: .2s;
            cursor: pointer;
        }

        .item .product-views .img-wrapper:hover {
            opacity: .8;
        }

        .item .product-views .img-wrapper img {
            height: 50px;
            cursor: pointer;
        }

        .item .product-body {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .item .product-body .product-display {
            position: relative;
            z-index: 5;
        }

        .item .product-body .product-display img {
            height: 400px;
        }

        .item .product-body .product-display .initial-hidden {
            display: none;
        }

        .item .product-body .shine {
            position: absolute;
            top: 0;
            left: -275px;
            z-index: 1;
        }

        .item .product-body .shine img {
            height: 650px;
        }

        .item .product-body .product-description {
            position: relative;
            margin-top: 8%;
            z-index: 5;
        }

        .item .product-body .product-description h2 {
            font-family: var(--main-title-font);
            font-size: 1.1em;
            color: var(--main-text-color);
        }

        .item .product-body .product-description p {
            font-family: var(--main-text-font);
            font-weight: bolder;
            font-size: 1.25em;
            letter-spacing: 0.05em;
            color: var(--main-text-color);
            margin-top: 2%;
        }

        .item .product-body .product-purchase {
            position: relative;
            margin-top: 8%;
            z-index: 6;
        }

        .item .product-body .product-purchase button {
            font-family: var(--main-title-font);
            background: linear-gradient(180deg, var(--second-global-color) 0%, var(--dark-global-color) 100%);
            padding: 10px 15px;
            color: var(--main-text-color);
            font-size: 13px;
            transform: skew(-12deg);
            letter-spacing: 0.04em;
            border: solid 4px var(--main-global-color);
            border-radius: 6px;
            cursor: pointer;
        }

        .item .product-body .product-purchase button:active, 
        .item .product-body .product-purchase button:focus {
            border: solid 4px var(--main-accent-color);
        }

        .item .product-body .product-purchase .buy-btn {
            padding: 10px 50px;
        }

        .item .product-body .product-purchase button:hover {
            border: solid 4px var(--main-accent-color);
        }
  </style>
`;

export default sharedStyles;