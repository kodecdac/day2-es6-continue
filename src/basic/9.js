let user = { id: 1, username: "rohit", score: 0 };

console.log(user.username);
user.username = "rohit sharma";
console.log(user.username);

console.log(user.score);
user.score = 100;
console.log(user.score);

// Add New Member
user.age = 25;
console.log(user);

// Delete a member
delete user.score;
console.log(user);
