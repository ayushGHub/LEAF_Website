import { useRef, useEffect } from 'react';
import './Payments.css';

const Payments = () => {
  const form = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_GHisnmKK8t6MYe');
    script.async = true;
    const formCurr = form.current;
    formCurr.appendChild(script);
    return () => {
      formCurr.removeChild(script);
    };
  }, []);

  return (
    <div className="payments__page">
      <div className='donatenow__button'>
        <form ref={form}></form>
      </div>
    </div>
  );
};

export default Payments;
