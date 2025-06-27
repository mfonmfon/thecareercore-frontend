import React, { useState } from 'react';

const PurchaseTicket = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);

  const ticketPrices = {
    general: 5000,
    vip: 10000,
    student: 3000,
  };

  const renderForm = () => {
    if (activeForm === 'buy') {
      const price = ticketPrices[ticketType] || 0;
      const total = quantity * price;

      return (
        <div className="w-full mt-4 space-y-4">
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Ticket Type</label>
              <select
                className="w-full border rounded-lg py-5"
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
              >
                <option value="">Select Ticket Type</option>
                <option value="general">General Admission – ₦5,000</option>
                <option value="vip">VIP – ₦10,000</option>
                <option value="student">Student – ₦3,000</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-full border rounded-lg py-4 p-2"
              />
            </div>

            {/* Summary */}
            {ticketType && (
              <div className="bg-gray-100 py-5 p-4 rounded-lg flex justify-between items-center text-sm font-medium text-gray-800">
                <span className='text-lg'>Total</span>
                <span className='text-lg font-bold'>₦{total.toLocaleString()}</span>
              </div>
            )}

            

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-lg"
            >
              Confirm & Pay
            </button>
          </form>
        </div>
      );
    }

    if (activeForm === 'support') {
      return (
        <div className="w-full mt-4">
          <p className="text-gray-700 text-sm mb-2">Need help? Reach out to us.</p>
          <form className="space-y-3">
            <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-2" />
            <input type="email" placeholder="Email" className="w-full border rounded-lg p-2" />
            <textarea
              placeholder="Your message..."
              className="w-full border rounded-lg p-2"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full lg:w-[360px] flex-shrink-0">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="text-xl font-semibold text-center mb-4">Get Tickets</h3>

        <button
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-5 rounded-lg mb-3 transition"
          onClick={() => setActiveForm('buy')}
        >
          Buy Ticket
        </button>

        <p className="text-xs text-gray-500 text-center mb-2">
          Secure checkout. Instant confirmation.
        </p>

        <div className="w-full flex items-center justify-center mb-4">
          <span className="text-gray-400 text-xs">or</span>
        </div>

        <button
          className="w-full border border-blue-500 text-blue-700 font-semibold py-5 rounded-lg hover:bg-blue-50 transition"
          onClick={() => setActiveForm('support')}
        >
          Contact Support
        </button>

        {/* Form Renderer */}
        {renderForm()}
      </div>
    </div>
  );
};

export default PurchaseTicket;
