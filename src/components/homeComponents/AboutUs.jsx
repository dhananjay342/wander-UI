import { Star } from 'lucide-react'


const AboutUs = () => {
  return (
     <section className='px-50 py-24 bg-slate-800'>
        <div>
            <h2 className='mb-12 text-center text-5xl font-bold text-slate-100'> About Us</h2>
        </div>
        <div className='w-3/4 mx-auto mb-16'>
            <p className='text-2xl italic text-center text-slate-100'>  Wanderlust is your ultimate group travel companion.We take the hassle out of group trips by providing real-time collaboration tools, smart expense tracking, and detailed itinerary reports. Your data is protected by industry-leading security protocols, and our support team is always here to help. Plan together, travel securely, and explore more.</p>
        </div>
        <div className='grid grid-cols-3 gap-2 w-1/2 mx-auto'>
            <div className='border-r border-slate-100'>
                <p className='text-3xl font-semibold text-center mb-2 text-slate-100'>200+</p>
                <p className='text-lg italic text-center text-slate-100'>Client served</p>
            </div>
        <div className= 'border-r border-slate-100'>
            <p className='text-3xl font-semibold text-center mb-2 text-slate-100'>10+</p>
            <p className='text-lg italic text-center text-slate-100'>Countries visited</p>
        </div>
        <div>
            <p className='text-3xl font-semibold text-center mb-2 flex items-center justify-center text-slate-100'>4.5 <Star /></p>
            <p className='text-lg italic text-center text-slate-100'> Rating Achived</p>
        </div>
        </div>
     </section>
  )
}

export default AboutUs