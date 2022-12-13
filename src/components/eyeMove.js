let eyeBall = document.getElementsByClassName("ball");

 export default document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 1; i++) {
    eyeBall[i].style.left = x;
    eyeBall[i].style.top = y;
    eyeBall[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
};
