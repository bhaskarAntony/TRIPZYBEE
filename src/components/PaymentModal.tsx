import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  destinationName: string;
  travelDate: Date | null;
  travelers: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  amount,
  destinationName,
  travelDate,
  travelers
}) => {
  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    // In a real application, you would create an order on your backend first
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      name: 'TripzyBee',
      description: `Trip to ${destinationName}`,
      image: 'https://example.com/logo.png', // Your logo URL
      handler: function (response: any) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        onClose();
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        destination: destinationName,
        travel_date: travelDate?.toLocaleDateString() || 'Not specified',
        travelers: travelers.toString()
      },
      theme: {
        color: '#FF9933'
      },
      modal: {
        ondismiss: function() {
          console.log('Payment cancelled by user');
        }
      }
    };

    if (window.Razorpay) {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      // Fallback for demo purposes
      alert(`Demo Payment:\nDestination: ${destinationName}\nAmount: ₹${amount.toLocaleString()}\nTravelers: ${travelers}\nDate: ${travelDate?.toLocaleDateString() || 'Not specified'}\n\nIn production, Razorpay payment gateway would open here.`);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Payment Summary</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Destination:</span>
              <span className="font-semibold">{destinationName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Number of Travelers:</span>
              <span className="font-semibold">{travelers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Travel Date:</span>
              <span className="font-semibold">
                {travelDate ? travelDate.toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                }) : 'Not specified'}
              </span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-lg">Total Amount:</span>
                <span className="text-2xl text-[#FF9933]">₹{amount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is a demo payment integration. In production, you'll be redirected to Razorpay's secure payment gateway.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              className="flex-1 bg-[#FF9933] hover:bg-[#E8842A]"
            >
              Proceed to Pay
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
