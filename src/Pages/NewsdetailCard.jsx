import React from 'react';
import { Link } from 'react-router';
// {
//     "id": "bcdefa0123456789bcdefa01",
//     "category_id": 2,
//     "title": "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
//     "rating": {
//         "number": 4,
//         "badge": "trending"
//     },
//     "total_view": 6789,
//     "author": {
//         "name": "Shirin Akter",
//         "published_date": "2025-04-22T17:00:00.000Z",
//         "img": "https://randomuser.me/api/portraits/women/29.jpg"
//     },
//     "thumbnail_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
//     "image_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
//     "details": "Bangladesh's export sector has demonstrated robust performance in the first quarter of 2025, registering significant growth compared to the same period last year. Key sectors such as readymade garments and leather goods have contributed substantially to this positive trend. The increase in export earnings is attributed to rising global demand and the government's supportive policies aimed at enhancing trade competitiveness. Analysts predict continued growth in the coming quarters, provided that global economic conditions remain favorable and domestic industries maintain their momentum. This positive export performance is expected to have a favorable impact on the country's foreign exchange reserves and overall economic stability.",
//     "tags": [
//         "exports",
//         "economy",
//         "business",
//         "growth",
//         "trade"
//     ],
//     "others": {
//         "is_today_pick": true,
//         "is_trending": true
//     },
//     "production": true
// }
const NewsdetailCard = ({news}) => {
    console.log(news)
    return (
        <div className='space-y-5 shadow-sm p-10 rounded-xl bg-gray-100'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h1 className='text-2xl font-bold'>{news.title}</h1>
            <p>{news.details}</p>
            <Link to='/' className='btn btn-secondary'>All news in this category</Link>
        </div>
    );
};

export default NewsdetailCard;