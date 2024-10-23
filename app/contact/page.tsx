import Image from 'next/image'
import React from 'react'

const contact = () => {
  return (
    
        <div className='flex flex-nowrap gap-5'>
<div className="flex flex-col pl-16  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 ... "  > 
 
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6755378613425!2d10.107422575552425!3d33.87225187322525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556fc41597702f%3A0xaf7eb7a2b7b76f03!2sGOMYCODE%20Gab%C3%A8s!5e0!3m2!1sfr!2stn!4v1728997605046!5m2!1sfr!2stn" width="500" height="450" style={{border:"0"}}  loading="lazy" className='rounded-2xl shadow-2xl '></iframe>
 
 </div>

<div className='text-center border rounded-2xl shadow-2xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 ... '>

<Image
             src='/Logo-2.0.webp'
             width={300}
             height={300}
             alt="Picture of the author"
             className='p-8 m-9' />

Situé à Gabes madina 
<br/>
    vous accueille au
<br/>
 Gabes 6001 Tunis 
<hr/>
Du lundi au vendredi de 9h30 a 18h30
<br/>

et le samedi de 9h30 & 12h00
<hr/>

<p>Fixe:<a href= {`tel:${+21675700848}`} className='text-orange-800 underline'> 75  70 08 48</a></p>
<hr/>
<p>Mobile:<a href={`tel:${+21695757264}`} className='text-orange-800 underline'>95 75 72 64</a></p>
<hr/>
<p>Mail: <a href="mailto:contact2@phonestore.fr" className='text-orange-800 underline'> contact2@storephone.com</a></p>



</div>



        
</div>

  )
}

export default contact