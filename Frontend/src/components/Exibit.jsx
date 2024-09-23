import React, { useEffect, useState } from 'react'
import Cards from "../components/Cards";
import {Link} from 'react-router-dom';
import axios from "axios";

function Exibit() {
  const[image, setImage]=useState([])
  useEffect(() => {
    const getImage = async () => {
        try {
            const res = await axios.get("http://localhost:4001/image");
            const data = (res.data.filter(data => data.priceCategory === "Pro"));
            setImage(data);
        } catch (error) {
            console.log(error)
        }
    }
    getImage();
}, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white dark:border border-black">
        <div className="mt-20 item-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">Welcome to the <span className="text-yellow-500">Pixelarium</span></h1>
          <p className="mt-12">
          Step into Pixelarium Premium, where artistry meets exclusivity. Access a curated collection of high-resolution, premium images designed for professionals and creatives seeking unmatched quality. Elevate your projects with stunning visuals available only to our premium members. Join now and experience the finest images, handpicked just for you.
          </p>
          <Link to="/">
          <button className="mt-6 bg-green-600 text-black px-4 py-2 rounded-md hover:bg-green-500">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-col-1 justify-items-center md:grid-cols-3 md:px-1">
        {
          image.map((item) =>(
            <Cards key={item.id} item={item}/>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default Exibit