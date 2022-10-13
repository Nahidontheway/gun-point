import React, { useEffect, useState } from 'react';
import SingleArm from '../SingleArm/SingleArm';

const Allgun = ({countIncrease}) => {
    const [guns, setGuns] = useState([]);
    // console.log(guns);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    },[])
    return (
        <div>
            <h1 className='text-4xl font-medium mt-4'>Welcome to <span className='text-yellow-500'>Top Gun Store</span></h1>
            <p className='m-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi ipsam maxime quam aliquid voluptatum odio atque totam corporis in impedit, quod expedita exercitationem repudiandae laboriosam ut repellendus quisquam. Vel?</p>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5'>
                {
                    guns.map((gun) =>(
                        <SingleArm gun={gun} countIncrease={countIncrease}></SingleArm>
                    ))
                }
            </div>
        </div>
        
    );
};

export default Allgun;