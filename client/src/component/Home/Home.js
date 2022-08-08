import React, { Fragment, useEffect } from 'react'
import Slider from '../layout/Slider/Slider'
import "./Home.css";
import Product from "./ProductCard.js"
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import {useSelector,useDispatch} from "react-redux"
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';


const Home = () => {
  const alert=useAlert();
  const dispatch = useDispatch();
  const {loading,error,products}=useSelector((state)=>state.products);

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  },[dispatch , error , alert]);
  return (
    <Fragment>
      {loading ? <Loader/> : <Fragment>
      <MetaData title="JUSTBuy"/>
        <Slider/>
        <h1 className='homeHeading'>Featured Products</h1>
        <div className='container' id='container'>
           {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
        </div>
    </Fragment>}
    </Fragment>
  )
}

export default Home