import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newscart from './Newscart';

const CategoryNews = () => {
    const {id}=useParams()
  
    const data=useLoaderData()

    const [catagoryNews,setcatagoryNews]=useState([])
    //   console.log(id,data)
    useEffect (()=>{
        if(id=='0'){
            setcatagoryNews(data);
            return;
        }else if(id=='1'){
            const filterNews=data.filter((news)=>news.others.is_today_pick== true);
            setcatagoryNews(filterNews)
        }else{
            const filterNews=data.filter(news=>news.category_id== id)
        console.log(filterNews)
        setcatagoryNews(filterNews)

        }
        
    },[data,id])


    return (
        <div>
            <h1 className='font-bold mb-5'>Total<span className='text-secondary'> {catagoryNews.length} </span>News Found</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    catagoryNews.map(news=> <Newscart key={news.id} news={news}></Newscart> )
                }

            </div>
        </div>
    );
};

export default CategoryNews;