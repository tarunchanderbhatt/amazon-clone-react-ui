import React from 'react'
import './Product.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Products() {
  const subMenuItems = [
    "Mobiles & Accessories",
    "Laptops & Accessories",
    "TV & Home Entertainment",
    "Audio",
    "Cameras",
    "Computer Peripherals",
    "Smart Technology",
    "Musical Instruments",
    "Office & Stationary"
  ];

  const categoryItems = [
    "Macbooks",
    "Desktops",
    "Monitors",
    "Printers"
  ];

  const ratingFilters = [
    { filled: 4, empty: 1 },
    { filled: 3, empty: 2 },
    { filled: 2, empty: 3 },
    { filled: 1, empty: 4 },
  ];

  // Sample data for the product grid shown in the style image
  const productList = [
    {
      id: 1,
      title: "HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, 4GB RTX 3050 GPU, 15.6-inch (39.6 cm) FHD IPS 144Hz, 16GB DDR4, 512GB...",
      price: "67999",
      rating: 4,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
      offer: "Upto 10% Off on select cards",
      delivery: "Free Delivery By Amazon"
    },
    {
      id: 2,
      title: "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime, Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistanc...",
      price: "1299",
      rating: 4,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
      offer: "Upto 10% Off on select cards",
      delivery: "Free Delivery By Amazon"
    },
    {
      id: 3,
      title: "boAt Immortal 121 in Ear TWS Earbuds with Beast Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing LEDs, Quad Mics...",
      price: "999",
      rating: 4,
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60",
      offer: "Upto 10% Off on select cards",
      delivery: "Free Delivery By Amazon"
    },
    {
      id: 4,
      title: "HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, 4GB RTX 3050 GPU, 15.6-inch (39.6 cm) FHD IPS 144Hz, 16GB DDR4, 512GB...",
      price: "67999",
      rating: 3,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
      offer: "Upto 10% Off on select cards",
      delivery: "Free Delivery By Amazon"
    },
    {
      id: 5,
      title: "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime, Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistanc...",
      price: "1299",
      rating: 3,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
      offer: "Upto 10% Off on select cards",
      delivery: "Free Delivery By Amazon"
    },
    {
      id: 6,
      title: "boAt Immortal 121 in Ear TWS Earbuds with Beast Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing LEDs, Quad Mics...",
      price: "999",
      rating: 1,
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60",
      offer: "Upto 10% Off on select cards",
      delivery: "Free Delivery By Amazon"
    }
  ];

  return (
    <div className='productsPage'>
      <div className='productsTopBanner'>
        <div className="productTopBannerItems">
          Electronics
        </div>
        {subMenuItems.map((item, index) => (
          <div key={index} className='productTopBannerItemsSubMenu'>
            {item}
          </div>
        ))}
      </div>

      <div className="productPageMain">
        {/* Left Sidebar Filters */}
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">
            Category
          </div>
          <div className="productPageMainLeftCategoryContent">
            Computers & Accessories
          </div>
          {categoryItems.map((item, index) => (
            <div key={index} className='productsPageMainLeftCategoryConstentSub'>
              {item}
            </div>
          ))}

          <div className="filterSectionTitle primeSection">Amazon Prime</div>
          <div className="filterSectionTitle reviewTitle">Average Customer Review</div>

          {ratingFilters.map((rating, index) => (
            <div key={`rating-1-${index}`} className='ratingLeftBox'>
              {[...Array(rating.filled)].map((_, i) => (
                <StarRateIcon key={`f-${index}-${i}`} sx={{ fontSize: "18px", color: "#febd69" }} />
                
              ))}
              {[...Array(rating.empty)].map((_, i) => (
                <StarBorderIcon key={`e-${index}-${i}`} sx={{ fontSize: "18px", color: "#febd69" }} />
              ))}
              <div className='andUp'> & Up </div>
            </div>
          ))}
        </div>

        {/* Right Product Grid Area */}
        <div className="productspageMainRight">
          <div className="productPageMainRightTopBanner">
            1-{productList.length} of {productList.length} results for <span className='productsPageMainRightTopBannerspan'>Mackbook</span>
          </div>

          <div className="itemImageProductPage">
            {productList.map((product) => (
              <div className="itemsImageProductPageOne" key={product.id}>
                <div className="imgBlockitemsImageProductPageeOne">
                  <img src={product.image} alt={product.title} className='productImageproduct'/>
                </div>
                
                <div className="productDetailsSection">
                  <p className="productCardTitle">{product.title}</p>
                  
                  {/* Rating */}
                  <div className="productCardRating">
                    {[...Array(product.rating)].map((_, i) => (
                      <StarRateIcon key={i} sx={{ fontSize: "16px", color: "#febd69" }} />
                    ))}
                    {[...Array(5 - product.rating)].map((_, i) => (
                      <StarBorderIcon key={i} sx={{ fontSize: "16px", color: "#febd69" }} />
                    ))}
                  </div>

                  {/* Price & Add to Cart Container */}
                  <div className="priceAndCartRow">
                    <div className="productCardPrice">
                      <span className="rupeeSymbol">₹</span>
                      <span className="priceValue">{product.price}</span>
                    </div>
                    <button className="addToCartBtn">Add To Cart</button>
                  </div>

                  <p className="productCardOffer">{product.offer}</p>
                  <p className="productCardDelivery">{product.delivery}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}