import React from 'react'
import { Data } from '../Components/SectionTwoData'

const SectionTwo = () => {
  return (
    <div className='container-fluid section-two'>
        <div className='container'>
            <div className='row'>
                {Data.map((item,index)=>{
                    return (
                        <div key={index} className='col-lg-3 col-md-5 col-sm-5 col-5 mx-auto'>
                            <div className='d-flex align-items-center'>
                                <h1 className='fs-1 fw-semibold'><span style={{color:"#8c6eca"}}>+</span>{item.num}</h1>
                                <div className='mx-3'>
                                    <h2 className='fs-5 text-muted'>{item.title}</h2>
                                    <h2 className='fs-5 fw-semibold'>{item.text}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SectionTwo