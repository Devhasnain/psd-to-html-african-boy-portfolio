import React from 'react';
import { Data } from './SecFourData';

const SectionFourCards = () => {
  return (
    <div className='row row-padding'>
        {Data.map((item,index)=>{
            return (
                <div className='col-lg-3 col-md-5 col-sm-5 col-11 mx-auto p-3' key={index}>
                    <div className='sec-cards border text-center pt-4'>
                        <div className=''>
                        <div className='card-num'>{item.num}</div>
                        <div className='content p-3'>
                            <h1 className='fs-2 fw-semibold'>{item.title}<span className='mx-2' style={{color:"#8c6eca"}}>{item.num}</span></h1>
                            <div className='underline my-3'></div>
                            <p className='fs-5'>{item.text}</p><br/>
                            <button className='btn-1'>Learn more</button>
                        </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default SectionFourCards