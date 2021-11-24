window.addEventListener("load", loadProgress);

function loadProgress() {
  // Get DOM element
  const target = document.querySelector(".loader");
  const counter = target.querySelector("span");

  // Sample form data
  const details = {
    name: "Jefferson",
    age: 12,
    weight: 70,
    level: 30,
    relationship: "",
    contact: "",
    email: "",
    friends: 459,
  };

  function getProgress(board) {
    let maxLength = 100;
    // Put them into array to get length of form
    let lengthOfBoard = Object.values(board).length;

    // Get possible mark of each field
    let jumps = maxLength / lengthOfBoard;
    let progress = 0;
    for (let field in board) {
      // If field is filled add it's mark to progress
      if (board[field]) {
        progress += jumps;
      }
    }
    return progress;
  }

  // Utilise value calculated from loader
  function implimentLoad() {
    // Simulate a delay
    setTimeout(() => {
      let progress = Math.round(getProgress(details));
      counter.innerText = `${progress}% `;
      target.style.width = `${getProgress(details)}% `;
    }, 1000);
  }
  implimentLoad();
}
