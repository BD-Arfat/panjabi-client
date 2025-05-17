import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card == null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: {
                    line1: formData.address,
                },
            },
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
            setSuccess('');
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
            setSuccess('✅ Payment method created successfully!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center mb-4">Complete Your Payment</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Billing Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded"
                />

                <div className="p-3 border rounded">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={!stripe}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Pay
                </button>

                {cardError && <p className="text-red-500 text-sm text-center">{cardError}</p>}
                {success && <p className="text-green-500 text-sm text-center">{success}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;
