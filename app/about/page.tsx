import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div><p className='pt-11 pb-11 pl-10'> Plus qu’un simple magasin de réparation, 
    Phone Store est l’aboutissement 
    dans la vie 
        d’un passionné de High Tech <br/>depuis toujours 
       et qui met son 
        savoir et son expérience au service de ses clients.

        </p>
<div className='pl-10'>
        <iframe width="880" height="308" src="https://www.youtube.com/embed/bd51S3DFpmk"
         title="Présentation de la Boutique PhoneStore 13 avenue de Saint augustin 06200 Nice" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     className='rounded-2xl shadow-2xl '></iframe></div>
<div className='flex gap-12'>
<p className='p-10'>
   <span className='text-orange-900 font-serif shadow-violet-950'>P</span>hone Store propose un service de réparation 
    <br/>de smartphones, tablettes, ordinateurs portables <br/>
et autres appareils ou accessoires High Tech
<br/> 
indispensables au quotidien.
<br/> 
Nos précieux méritent ce qu’il y a de mieux,
<br/> 
 c’est pourquoi un point d’honneur est <br/>
mis sur la qualité du service et des pièces <br/>
 utilisées et proposons une garantie pièces et<br/> 
 main d’oeuvre pour chaque réparation.</p>

<Image src="/IMG_7055.webp"
width={300}
height={250}
alt="Picture of the author"
 className='rounded-2xl pt-11'/> 
</div>



    </div>
  )
}

export default About