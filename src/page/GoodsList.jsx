import React, { useEffect, useState } from "react";
import GoodsItem from "../components/GoodsItem";
import axios from "axios";

const GoodsList = () => {


  const[goods,setGoodsList]=useState([]);

  const goodsList = async () => {
    const API_URL ="http://localhost:8088/lunch/api/goods_list";
    let res = await axios.get(API_URL);

    let resdata = res.data;
      console.log(resdata);

     setGoodsList(resdata);

  }
  
  useEffect(() => {
    goodsList();
  },[])
 


  return (

    <div className="goods-list">
      {/*상품리스트 안에 있는 출력*/}
      {goods && goods.map((item)=>(
		    <GoodsItem key={item.id} item={item}/>
		  ))}
      
    </div>
  );
};

export default GoodsList;
