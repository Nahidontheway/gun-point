import React from 'react';

const SingleArm = (props) => {
    const {gun, countIncrease} = props;
    const {action, id, img, category, price} = gun;
    console.log(gun);
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img src={img} className='w-90 h-auto' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {category}
                <div className="badge badge-secondary">{price}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{id}</div> 
                <div className="badge badge-outline">{action}</div>
                <div className='mt-2'>
                    <button onClick={()=> countIncrease()} className="btn btn-sm mr-2">Add to cart</button>
                    <button className="btn btn-sm btn-success">Details</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleArm;