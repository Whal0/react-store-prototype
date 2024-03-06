# React store page prototype

The project was done as part of the course credit in 2021.

## Description

The project is a web application for an online store. The app allows users to browse the store's assortment, add products to the shopping cart, modify the number of products in the cart, view the order summary, and process payments. It uses various tools and programming languages such as HTML/CSS, React.js, React Router, Material UI, Node.js, Commerse.js.

** Currently the app is slow to change state due to a very long wait for XHR POST from the api with sample objects

## Requirements

- Node.js
- Any code editor

## Building the project

1. **Clone the Repository**: 
    ```bash
    git clone <repository_url>
    ```

2. **Navigate to the Project Directory**: 
    ```bash
    cd <project_directory>
    ```

3. **Install Dependencies**: 
    ```bash
    npm install
    ```

4. **Run the Application**: 
    ```bash
    npm start
    ```

5. **Access the Application**: 
   Once the application is running, you can access it by opening a web browser and navigating to the specified URL (usually `http://localhost:3000`).

## Features

- Fetching product data from the Commerse API.
- Adding products to the shopping cart with the ability to modify the quantity.
- Dynamically changing the cart icon depending on the number of products in the cart.
- Enabling navigation through different subpages using React Router.
- Different views of the shopping cart depending on its contents.
- A simple order form with relevant fields (payment options are disabled).
- Order summary with a list of products and total price.


