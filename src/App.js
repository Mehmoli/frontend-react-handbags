import React from 'react';
import './App.css';
import Button from "./components/button/Button";
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
import Product from "./components/product/Product";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";
import Tile from "./components/tile/Tile";


function App() {
  return (
      <>
          <nav>
        <h1>Handbags & Purses</h1>
              <Button
                  buttonType="button"
                  isDisabled={false}
                  value="to the collection"
                  isClicked={()=>console.log("You clicked")}
              >

              </Button>
              <Button
                  buttonType="button"
                  isDisabled={false}
                  value="shop all bags"
                  isClicked={()=>console.log("You clicked")}
              >

              </Button>
              <Button
                  buttonType="button"
                  isDisabled={true}
                  value="pre-orders"
                  isClicked={()=>console.log("You clicked")}
              >

              </Button>
          </nav>
          <main>
              <Product
                  productLabel="Best seller"
                  image={bag_one} altText="beautiful bag"
                  productName="The handy bag"
                  price=" 400,-"
              >
              </Product>
              <Product
                  productLabel="Best seller"
                  image={bag_two} altText="beautiful bag"
                  productName="The stylish bag"
                  price=" 250,-"
              >
              </Product>
              <Product
                  productLabel="New collection"
                  image={bag_three} altText="beautiful bag"
                  productName="The simple bag"
                  price=" 300,-"
              >
              </Product>
              <Product
                  productLabel="New collection"
                  image={bag_four} altText="beautiful bag"
                  productName="The trendy bag"
                  price=" 150,-"
              >
              </Product>

          </main>
          <footer>
              <Tile

                  title="the Brand"
                >
                  <p>Morem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aperiam, deserunt qui quod rem reprehenderit vero vitae voluptas voluptatum?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aperiam, deserunt qui quod rem reprehenderit vero vitae voluptas voluptatum?</p>

              </Tile>
              <Tile
                  image={brand} altText="brand"
                >

              </Tile>
              <Tile
                  image={our_story} altText="our story"
                >

              </Tile>
              <Tile

                  title="Our Story"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aperiam, deserunt qui quod rem reprehenderit vero vitae voluptas voluptatum?</p>

              </Tile>

          </footer>
        </>
  );
}

export default App;



