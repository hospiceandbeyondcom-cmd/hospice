import Image from 'next/image';
import Link from 'next/link';

const SecondSection = () => {
  return (
    // Outer container for the section, using padding and a light background color (you can adjust bg-white)
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Centered content container with max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main grid layout for image and text content */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* 1. Image Column */}
          <div className="relative mb-12 lg:mb-0 lg:order-2">
            <div className="rounded-3xl shadow-xl overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3">
              <Image
                src="/about1.png"
                alt="A compassionate team member providing care"
                width={700}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
            <div className="hidden lg:block absolute inset-0 -top-8 -right-8 w-full h-full bg-green-500 rounded-3xl -z-10 opacity-10"></div>
          </div>
          
          {/* 2. Text Content Column */}
          <div className="lg:order-1 lg:pr-12">
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="block text-gray-800">A simple but</span>
              <span className="block text-emerald-600">sacred belief</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Hospice and Beyond Palliative Care is founded on a simple but sacred belief — that every person deserves dignity, comfort, and peace** through every stage of life. We are a compassionate team of professionals who walk hand in hand with patients and their loved ones, creating a space where healing, presence, and hope are honored.
              </p>
              <p>
                We bring care directly to where it’s most meaningful — **the home**. Our focus extends beyond medical support to **emotional and spiritual well-being**, helping families find calm even in difficult transitions.
              </p>
              <p>
                At Hospice and Beyond, every heartbeat, every moment, and every story matters.
              </p>
            </div>
            
            {/* CORRECTED BUTTON CODE */}
            <div className="mt-10">
              <Link 
                href="/about" // The link destination is set to /about
                // ClassNames are moved directly here
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300"
              >
                Learn More About Our Care
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecondSection;