import React from 'react';
import Image from 'next/image';

const Reason = () => {
  return (
    <div className=" max-sm:pt-[5vw] mt-[0rem] pt-16 relative overflow-hidden">
      {/* WHY INTUIT Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="max-sm:text-[7vw] tracking-tight text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="font-['BS'] text-black">WHY </span>
          <span className="font-['BS'] text-green-500 ">ATTEND</span>
          <span className="font-['BS'] text-green-500">?</span>
        </h2>
        <p className="font-['OSK'] text-center text-gray-700 max-w-3xl mx-auto mb-[2em] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
          Dive into an immersive experience at our exclusive technical exhibition, where innovation meets creativity. Explore visionary ideas, cutting-edge technology, and limitless possibilities!
        </p>
      </div>

      {/* First Discover Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="max-sm:mb-0 relative w-full md:w-1/2">
          <div className="relative z-10">
            <Image
              src="/r1.webp"
              alt="Innovation Stalls"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="relative w-full md:w-1/2 md:pl-8">
          <div className="relative flex items-start">
            <div className="absolute left-0 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl font-['OSK']">
              1
            </div>
            <div className="ml-20 max-sm:ml-16">
              <h3 className="text-3xl font-bold text-green-700 mb-2 font-['OSK'] tracking-wide md:tracking-wider">Cambrian Open House 2026: Where Ideas Converge</h3>
              <p className="text-gray-700 font-['OSK'] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
                With over 120+ stalls, Cambrian Open House 2026 brings together a vibrant mix of technology, creativity, and culture. From food and flea markets to interactive panel discussions with industry experts, experience a dynamic environment where ideas and insights come together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Discover Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-8 px-4 mt-12">
        <div className="max-sm:mb-0 relative w-full md:w-1/2">
          <div className="relative z-10">
            <Image
              src="/reasons_page/r2.webp"
              alt="Innovation Stalls"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="absolute top-8 right-8 -z-10">
            <div className="w-4 h-4 bg-green-200 rounded"></div>
          </div>
          <div className="absolute top-24 right-24 -z-10">
            <div className="w-2 h-2 bg-green-200 rounded-full"></div>
          </div>
          <div className="absolute bottom-16 right-16 -z-10">
            <div className="w-6 h-6 bg-green-200 rounded-full"></div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 md:pr-12">
          <div className="flex items-start mb-4">
            <div className="absolute left-0 lg:hidden bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl font-['OSK']">
              2
            </div>
            <div className='max-sm:ml-16'>
              <h3 className="text-3xl font-bold text-green-700 mb-2 font-['OSK'] tracking-wide md:tracking-wider">Fueling Future Minds</h3>
              <p className="text-gray-700 font-['OSK'] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
                Discover exclusive startups and research from Cambridge Institute of Technology, along with innovative student projects and club showcases. Witness the power of creativity and collaboration as future leaders present solutions that shape tomorrow.
              </p>
            </div>
            <div className="max-sm:hidden right-0 absolute bg-green-500 text-white rounded-[100%] w-[3rem] h-[3rem] flex items-center justify-center text-3xl font-bold font-['Audiowide']">
              2
            </div>
          </div>
        </div>
      </div>


{/* Inauguration Highlight Section */}
<div className="max-w-4xl mx-auto flex flex-col items-center gap-6 px-6 py-20">

<div className="relative inline-flex justify-center items-center px-3 sm:px-5 md:px-8 py-2 rounded-full bg-white/20 backdrop-blur-md border-2 border-green-500 text-green-700 font-['BS'] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide shadow-lg animate-pulse-glow hover:scale-105 transition-all duration-300 mx-auto w-auto max-w-[95%]">
  <span className="text-center truncate sm:whitespace-normal">
    Cambrian Open House 2025{" "}
    <br className="sm:hidden" />
    Inauguration by AICTE Chairman
  </span>
</div>


  {/* Photo */}
  <div className="w-full">
    <Image
      src="/reasons_page/chairman.webp"
      alt="Prof. TG Sitharam"
      width={1000}
      height={700}
      className="w-full h-auto object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* Name */}

  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 font-['BS'] text-center leading-normal whitespace-nowrap overflow-hidden">
  TG Sitharam
</h3>

  {/* Designation */}
  <p className="text-2xl md:text-3xl text-green-600 font-['BS'] font-bold text-center tracking-wide uppercase">
    Chairman, AICTE — Govt. of India
  </p>

  {/* Description */}
  <p className="text-gray-600 font-['OSK'] text-base md:text-lg leading-relaxed tracking-wide text-center max-w-3xl">
    At last year&apos;s Cambrian Open House 2025, the event was inaugurated by
    <span className="font-semibold text-green-600"> Prof. (Dr.) T G Sitharam</span>,
    Chairman of the All India Council for Technical Education (AICTE), Government of India.
    His presence marked a memorable milestone for the 2025 edition and highlighted the event&apos;s national significance in celebrating creativity, leadership, and the boundless potential of India&apos;s next generation of innovators.
  </p>

  {/* Callout */}
  <p className="text-green-600 font-semibold text-lg md:text-xl font-['BS'] text-center">
    A memorable highlight from last year&apos;s edition.
  </p>

</div>


      {/* WHO CAN JOIN Section */}
      <div className="w-full relative mt-16">
        <h2 className="max-sm:text-[5vw] text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="font-['BS'] text-black">WHO CAN </span>
          <span className="font-['BS'] text-green-500">JOIN!</span>
        </h2>
        <p className="font-['OSK'] max-sm:mt-[1vw] text-center text-gray-700 tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal max-w-4xl mx-auto px-4">
          Cambrian Open House 2026 welcomes everyone! Whether you are a tech enthusiast, student, entrepreneur, or a curious mind eager to explore new ideas and experience innovative demonstrations, this event is for you. Entry is absolutely free!!!<br></br>
          Register now and join us for an immersive experience!
        </p>

        <div className="relative">
          <div className="flex justify-center">
            <div className="relative w-full">
              <Image
                src="/reasons_page/r3.webp"
                alt="Innovation Stalls"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom blur effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1vw] backdrop-blur-md pointer-events-none"></div>
    </div>
  );
};

export default Reason;
