import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import RightAside from '../Component/RightAside';
import NewsdetailCard from './NewsdetailCard';
import { useLoaderData, useParams } from 'react-router';

const Newsdetails = () => {
    const data=useLoaderData()

    const {id}=useParams()
       
        const[news,setNews]=useState({})
        //  console.log(data,id,news)
         useEffect(()=>{
            const newsDetails=data.find((singleNews)=>singleNews.id==id)

            setNews(newsDetails)
         },[data,id])


    return (
        <div>
            <header>
        <Header></Header>
        </header>
        <main className='w-11/12 m-auto grid grid-cols-12 gap-10'>
        <section className='col-span-9'>
            <h2 className='font-bold mb-5'>Dragon News</h2>
            <NewsdetailCard news={news}></NewsdetailCard>

        </section>
        <aside className='col-span-3'>
            <RightAside></RightAside>
        </aside>
            
        </main>
        </div>
    );
};

export default Newsdetails;