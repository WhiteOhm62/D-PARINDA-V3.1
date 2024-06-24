import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Category from '../../components/category/Category';
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard';
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial';
import myContext from '../../context/myContext';
import { Heading1 } from 'lucide-react';
import Loader from '../../components/loader/Loader';
import SearchBar from '../../components/searchBar/SearchBar';

const HomePage = () => {
  const context = useContext(myContext);
  return (
    <div className='w-full overflow-x-hidden'>
      <Layout>
        <SearchBar/>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>  
      
    </Layout>
    </div>
    
  )
}

export default HomePage