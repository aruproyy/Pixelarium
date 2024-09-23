import React from 'react';

function Cards({ item }) {
    return (
        <>
            <div className="mt-4 my-3">
                <div className="card bg-base-100 w-full md:w-96 h-auto min-h-[28rem] shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure className="h-56 w-full">
                        <img
                            className="h-full w-full object-cover"
                            src={item.image}
                            alt="Image" />
                    </figure>
                    <div className="card-body flex flex-col justify-between">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.priceCategory}</div>
                        </h2>
                        <p className="flex-grow">{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">Rs.{item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border border-white hover:bg-green-500 hover:text-black duration-200">Download</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
