import { useRef, useEffect } from 'react';

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
    <div>
      <div className='donatenow__button mt-3 ml-2'>
        <form ref={form}></form>
      </div>
    </div>
  );
};

export default Payments;
