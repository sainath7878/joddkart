<div align="center">

# JODDKart

</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-joddkart">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
      <li><a href="#landing-page">Landing Page</a></li>
        <li><a href="#products-listing-page">Products Listing page</a></li>
        <li><a href="#wishlist-page">Wishlist Page</a></li>
        <li><a href="#cart-page">Cart Page</a></li>
        <li><a href="#authentication">Authentication</a></li>
      </ul>
    </li>
  </ol>
</details>

---

## About JoddKart

JODDKart is an E-Commerce platform which is a one stop solution to buy PC, PS4, Xbox Games. JODDKart is publicly hosted on netlify at [https://joddkart-react.netlify.app/](https://joddkart-react.netlify.app/)

The website is built using following tech-stack:

<ul>
    <li>ReactJS</li>
    <li>React Router v6</li>
    <li>useContext + useReducer for state management</li>
    <li>Jodd UI and Vanilla CSS</li>
    <li>MockBee for mock Backend</li>
</ul>

---

## Getting Started

---

### Installation

Clone the repository on your local machine by typing the below commands on your terminal and cd to `joddkart`.

```
git clone https://github.com/sainath7878/joddkart.git
cd joddkart
```

Install the necessary dependencies.

```
npm install
```

`joddkart` uses `mockbee's` mockbackend.
Create an environment variable inside .env file in the root of the project with the below code.

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
```

Now to run the app write the following command in your terminal:

`npm start`
This should run the app on localhost:3000.

```
npm start
```

---

## Features

---

### Landing Page

- User can click on the Category which the user wants to buy
- User can find Trending Products and add products to cart

### Products Listing Page

- User can filter out products using different filters like
  - filter by Category
  - Sort by Price
  - Slider to filter by Price
- User can add products to wishlist
- User can add items to cart

### WishList Page
- User can remove products from wishlist.
- User can add products to cart. If a product is already in cart then user can navigate from wishlist

### Cart Page
- User can see Cart Summary.
- User can update quantity of products
- User can remove products from cart
- User can move products to wishlist

### Authentication

- User can do a guest login
- User can Log In/Log Out with existing credentials
- User can sign up by if they are new to website

## SOCIALS

---

<a href="https://twitter.com/sainath_svm"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/svm-sainath-90aa061aa/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>

</ul>
