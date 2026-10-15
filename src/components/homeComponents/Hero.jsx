
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
   <section className='relative'>

        {/* Hero Image Container */}
<div className='relative h-[89dvh] w-full overflow-hidden flex items-center bg-slate-900'>
    <img 
        src="/heroImage.jpg" 
        className="w-full h-full object-cover" 
        alt="WanderLust Hero Image" 
    />
    
    {/* Blending Gradient Overlay */}
    <div className='absolute inset-0 bg-linear-to-b from-slate-900/30 via-slate-900/60 to-slate-900' />
</div>

{/* Features Section */}
<div className="relative z-10 -mt-1 bg-slate-800 py-16 text-white">
    {/* Your Features content here */}
</div>



        {/* content  */}
        <div className='absolute top-0 h-[89dvh] flex items-center justify-center'>
          <div className='w-1/2 text-center text-white'>
            <h1 className="text-5xl font-bold mb-6">Plan your trip with Wanderlust.</h1>

            <p className='text-2xl mb-6'>
               Your journey starts here. Plan amazing trips, explore new destinations, travel with your loved ones, and make every adventure unforgettable with WanderLust.
            </p>
            
            <CustomButton text="Register Now" link="/register" more="bg-red-600" />
          </div>

        </div>

   </section>
  )
}

export default Hero