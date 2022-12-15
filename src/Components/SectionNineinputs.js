import React from 'react'

const SectionNineinputs = () => {
  return (
    <div className='pt-5 p-4'>
        <input placeholder='NAME' className='form-control'/><br/>
        <input placeholder='EMAIL' className='form-control'/><br/>
        <textarea placeholder='MESSAGE' rows={5} className='form-control'/><br/><br/>
        <button className='btn msg-btn'>Send Message</button>
    </div>
  )
}

export default SectionNineinputs;