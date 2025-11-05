import React, { useState } from "react";
import d3 from "../assets/d3.png";
import d2 from "../assets/d2.png";

function Donation() {
  const [selectedDonation, setSelectedDonation] = useState(null);

  // Donation data extracted from the image
  const donationCategories = [
    {
      category: "PATRONS",
      items: [
        { name: "DIAMOND PATRON", amount: "1 CRORE" },
        { name: "GOLD PATRON", amount: "5 LAKH" },
        { name: "SILVER PREMIUM PATRON", amount: "2.3 LAKH" },
        { name: "SILVER PLUS PATRON", amount: "15 LAKH" },
        { name: "SILVER PATRON", amount: "7 LAKH" }
      ]
    },
    {
      category: "BRICKS",
      items: [
        { name: "RADHA-KRISHNA BRICK", amount: "2 LAKH" },
        { name: "GAUR-NITAI BRICK", amount: "1 LAKH" },
        { name: "SRILA PRABHUPADA BRICK", amount: "75,000" },
        { name: "ALTAR BRICK", amount: "90,000" }
      ]
    },
    {
      category: "TEMPLE COMPONENTS",
      items: [
        { name: "TEMPLE HALL", amount: "99 LAKH" },
        { name: "MAIN ALTAR", amount: "40 LAKH" },
        { name: "DIORAMA", amount: "31 LAKH" },
        { name: "DEVOTEE ROOM", amount: "11 LAKH" },
        { name: "TEMPLE PILLAR", amount: "10 LAKH" }
      ]
    }
  ];

  // Function to convert amount string to numeric value for UPI
  const convertAmountToNumber = (amountStr) => {
    const cleanStr = amountStr.replace(/,/g, '');
    if (cleanStr.includes('CRORE')) {
      return parseInt(cleanStr.replace('CRORE', '').trim()) * 10000000;
    } else if (cleanStr.includes('LAKH')) {
      return parseInt(cleanStr.replace('LAKH', '').trim()) * 100000;
    } else {
      return parseInt(cleanStr);
    }
  };

  const handleDonationClick = (donationItem) => {
    setSelectedDonation(donationItem);
    
    const amount = convertAmountToNumber(donationItem.amount);
    const upiLink = `upi://pay?pa=037322010400054@axisbank&pn=ISKCON%20Bhusawal&am=${amount}&tn=${encodeURIComponent(donationItem.name + ' Donation')}&cu=INR`;
    
    window.open(upiLink, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-12 px-4 md:px-16">
      <h1 className="text-4xl font-serif text-indigo-900 text-center mb-10">
        मंदिर निर्माण में योगदान करें
      </h1>

      {/* Donation Brochure Images */}
      <div className="flex flex-col items-center space-y-8">
        <img
          src={d3}
          alt="Donation Brochure Page 1"
          className="rounded-lg shadow-xl w-full max-w-5xl"
        />
        <img
          src={d2}
          alt="Donation Brochure Page 2"
          className="rounded-lg shadow-xl w-full max-w-5xl"
        />
      </div>

      {/* Donation Tables */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-indigo-800 text-center mb-8">
          दान विकल्प
        </h2>
        
        {donationCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center border-b-2 border-indigo-200 pb-2">
              {category.category}
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">दान का प्रकार</th>
                    <th className="py-4 px-6 text-left font-semibold">राशि</th>
                    <th className="py-4 px-6 text-center font-semibold">कार्यवाही</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {category.items.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-indigo-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="py-4 px-6 font-medium text-gray-800">
                        {item.name}
                      </td>
                      <td className="py-4 px-6 font-bold text-green-600 text-lg">
                        ₹ {item.amount}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleDonationClick(item)}
                          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                          <span>📱</span>
                          <span>PhonePe से दान करें</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Custom Amount Donation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8 border-2 border-indigo-200">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
            स्वैच्छिक दान (Voluntary Donation)
          </h3>
          <p className="text-gray-600 text-center mb-6">
            आप अपनी इच्छानुसार कोई भी राशि दान कर सकते हैं
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 max-w-md">
              <input
                type="number"
                placeholder="दान राशि दर्ज करें (₹)"
                className="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 text-lg"
                min="1"
              />
            </div>
            <button
              onClick={() => {
                const amountInput = document.querySelector('input[type="number"]');
                const amount = amountInput.value;
                if (amount && amount > 0) {
                  const upiLink = `upi://pay?pa=037322010400054@axisbank&pn=ISKCON%20Bhusawal&am=${amount}&tn=Voluntary%20Temple%20Donation&cu=INR`;
                  window.open(upiLink, '_blank');
                } else {
                  alert('कृपया वैध राशि दर्ज करें');
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>🙏</span>
              <span>स्वैच्छिक दान करें</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center bg-indigo-100 rounded-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">
          संपर्क करें
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>फोन:</strong> 9011295877, 776703798
        </p>
        <p className="text-gray-700">
          <strong>ईमेल:</strong> infoiskcon.bhusawal@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Donation;