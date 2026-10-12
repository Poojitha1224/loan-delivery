const customerId = 'CUS101';
const orderAmount = 6000;
const customerCategory = 'Premium';
const deliveryLocation = 'Local';
let discountPercentage;
let discountAmount;
let deliveryCharge;
let finalPayableAmount;
let orderSummary;
if (orderAmount <= 0) {
    discountPercentage = 0;
    discountAmount = 0;
    deliveryCharge = 0;
    finalPayableAmount = 0;
    orderSummary = 'Invalid order amount';
} else {
    if (customerCategory === 'Premium') {
        discountPercentage = 15;
    } else {
        discountPercentage = 5;
    }
    discountAmount = orderAmount * discountPercentage / 100;
    if (orderAmount > 5000) {
        discountAmount = discountAmount + 500;
    }
    if (discountAmount > orderAmount * 0.20) {
        discountAmount = orderAmount * 0.20;
    }
    if (orderAmount >= 3000) {
        deliveryCharge = 0;
    } else if (deliveryLocation === 'Local') {
        deliveryCharge = 50;
    } else if (deliveryLocation === 'City') {
        deliveryCharge = 100;
    } else if (deliveryLocation === 'Outstation') {
        deliveryCharge = 200;
    } else {
        deliveryCharge = 150;
    }
    finalPayableAmount = orderAmount - discountAmount + deliveryCharge;
    orderSummary = 'Order processed successfully';
}
console.log("------ E-Commerce Order Summary ------");
console.log("Customer ID: ", customerId);
console.log("Customer Category: ", customerCategory);
console.log("Original Order Amount: Rs.", orderAmount);
console.log("Discount Amount: Rs.", discountAmount.toFixed(2));
console.log("Delivery Location: ", deliveryLocation);
console.log("Delivery Charge: Rs.", deliveryCharge.toFixed(2));
console.log("Final Payable Amount: Rs.", finalPayableAmount.toFixed(2));
console.log("Order Summary: ", orderSummary);