import React from 'react';
import './HomeBanner.css';

function HomeBanner() {
  // Fallback / Duplicate image link agar main image load na ho
  const fallbackImage = "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&auto=format&fit=crop&q=60";

  const allCardsData = [
    {
      id: 1,
      title: "Revamp your home in style",
      items: [
        { img: "invalid-url-test.jpg", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1595515106967-1c2e16d068b3?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" }
      ]
    },
    {
      id: 2,
      title: "Appliances for your home | Up to 55% off",
      items: [
        { img: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1571175372375-09a87383ed16?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" }
      ]
    },
    {
      id: 3,
      title: "Automotive essentials | Up to 60% off",
      items: [
        { img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" }
      ]
    },
    {
      id: 4,
      title: "Starting ₹199 | Amazon Brands & more",
      items: [
        { img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" },
        { img: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=300&auto=format&fit=crop&q=60", name: "Cushion covers, bedsheets & more" }
      ]
    },
    {
      id: 5,
      title: "Up to 60% off | Styles for women",
      items: [
        { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" }
      ]
    },
    {
      id: 6,
      title: "Starting ₹129 | Amazon Brands & more",
      items: [
        { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" }
      ]
    },
    {
      id: 7,
      title: "Up to 60% off | Professional tools, testing & more",
      items: [
        { img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" }
      ]
    },
    {
      id: 8,
      title: "Best Sellers in Sports, Fitness & Outdoors",
      items: [
        { img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" },
        { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&auto=format&fit=crop&q=60", name: "boAt Stone 1800 Bluet" }
      ]
    }
  ];

  return (
    <div className='homeBanner'>
      <div className="grayBackgroundHomeBanner"></div>
      
      <div className='homeBannerItemDev'>
        {allCardsData.map((card) => (
          <div className='homeBannerItemDivCard' key={card.id}>
            <div className='homeBannerItemDivCardTitle'>
              <h2>{card.title}</h2>
            </div>
            
            <div className='imgHomeBannerItemDeivCard'>
              {card.items.map((item, index) => (
                <div className='imgBannerHomeDiv' key={index}>
                  <img 
                    className='imgBannerHomeDivImg' 
                    src={item.img} 
                    alt={item.name} 
                    onError={(e) => {
                      e.target.onerror = null; // Infinite loop roknay ke liye
                      e.target.src = fallbackImage; // Duplicate/Fallback image set ho jayegi
                    }}
                  />
                  <div className='imgBanerImgName'>{item.name}</div>
                </div>
              ))}
            </div>

            <div className='seeMoreLink'>
              <a href="#see-more">See More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBanner;