   import React, { useEffect, useRef } from "react";

   function PayPalHostedButton() {
     const paypalRef = useRef(null);

     useEffect(() => {
       // Wait for PayPal SDK to be loaded
       const interval = setInterval(() => {
         if (window.paypal && window.paypal.HostedButtons) {
           window.paypal.HostedButtons({
             hostedButtonId: "T7GRYXHB9H5NL",
           }).render(paypalRef.current);
           clearInterval(interval);
         }
       }, 100);

       return () => clearInterval(interval);
     }, []);

     return <div ref={paypalRef} id="js-sdk-container-T7GRYXHB9H5NL"></div>;
   }

   export default PayPalHostedButton;