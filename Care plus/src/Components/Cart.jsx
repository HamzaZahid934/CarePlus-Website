import React, { useState } from 'react'
import closeicon from '../assets/close.svg'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [quantity, setQuantity] = useState(1)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button className="text-xl" onClick={handleClose}>
          <img src={closeicon} alt="User Icon" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/50x50" alt="Image of Whisker Wonder Collar" className="w-12 h-12 object-cover mr-4"/>
          <div className="flex-1">
            <h3 className="text-lg font-medium">Whisker Wonder Collar</h3>
            <p className="text-gray-600">$118.00 USD</p>
          </div>
          <input type="number" value={quantity} onChange={handleQuantityChange} className="w-12 h-10 border rounded text-center"/>
        </div>
        <button className="text-blue-600 mb-4">Remove</button>
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-lg font-medium">$118.00 USD</span>
        </div>
        <button className="w-full bg-blue-900 text-white py-2 mt-4 rounded">CONTINUE TO CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart