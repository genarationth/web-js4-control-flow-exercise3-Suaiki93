const dayNumber = Math.floor(Math.random() * 7);

if (dayNumber === 0 || dayNumber === 6) {
  console.log("It's the weekend");
} else if (dayNumber >= 1 && dayNumber <= 5) {
  console.log("It's the weekday");
} else {
  console.log("Ops! something went wrong");
}
