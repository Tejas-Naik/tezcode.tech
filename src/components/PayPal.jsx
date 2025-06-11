// import { data } from "autoprefixer";
// import React, { useEffect, useRef } from "react";

// function PayPal() {
//   const paypal = useRef();

//   useEffect(() => {
//     console.log("Order Creating");
//     window.paypal
//       .Buttons({
//         createOrder: (data, actions, err) => {
//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: [
//               {
//                 description: "The Python Pro Bootcamp",
//                 amount: {
//                   value: 299.0,
//                   currency_code: "USD",
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           const order = await actions.order.capture();
//           console.log(order);
//         },
//         onError: (error) => {
//           console.log(error);
//         },
//       })
//       .render(paypal.current);
//   }, []);
//   return (
//     <div>
//       <div ref={paypal}></div>
//     </div>
//   );
// }

// export default PayPal;
import React, { useEffect, useRef } from "react";

function PayPal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "The Python Pro Bootcamp",
                amount: {
                  value: 299.0,
                  currency_code: "USD", // <-- This is required!
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (error) => {
          console.log(error);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default PayPal;