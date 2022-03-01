// NESTEING ALSO CAN BE LEVEL UPTO N
let user = {
  id: 1,
  name: "John",
  address: {
    city: "mumbai",
    state: "MH",
    pincode: "400001",
  },
};

console.log(user.address.city);
