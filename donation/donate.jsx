import React from 'react';
import img2 from './assets/2.png';

export function Donate() {

  const handleBankPayment = () => {
    const upiUrl = 'upi://pay?pa=MAB.037322010400054@AXISBANK&am=0&tn=HAREKRISHNA';


    // Redirect the user to the UPI app
    window.location.href = upiUrl;
  };

  return (
    <section>
      <div className="px-2 bg-[#fcebd2] lg:flex lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Donate to Sri Krishna Janmashtami
            </h2>

            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <button
                    onClick={handleBankPayment}
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Donate Now!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={img2}
            alt="ManWith Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
