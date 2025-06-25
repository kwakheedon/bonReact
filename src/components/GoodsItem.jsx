import React from "react";
import { Link } from "react-router";

const GoodsItem = ({item}) => {
  return (
    <div className="goods-item" style={{ position: "relative" }}>
      <div className="goods-item-icon">
        {/*best 상품인지 new 상품인지*/}
        {item.isBest ?(<em className="goods-best">new</em>):
         item.isNew ?(<em className="goods-new">best</em>):("")}

     
      </div>
      <div className="goods-thumb">
        {/* 이미지 클릭 시, 상세페이지 */}
        <Link to={`/goods/${item.id}`}>
          <img style={{width: '240px'}} src={item.main_thumb} alt="이미지" />
        </Link>

    
      </div>
      <div className="goods-name">
        <h4>{item.name}</h4>
        <p>
          <span>{item.price}</span>원
        </p>
      </div>
    </div>
  );
};

export default GoodsItem;
