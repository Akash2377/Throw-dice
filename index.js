document.getElementById("roll").addEventListener("click", rollTheDice);
function rollTheDice() {
  document.getElementById("roll").style.display = "none";
  document.getElementById("rollMeIMG").style.display = "none";
  var member1 = document.getElementById("member-1");
  var member2 = document.getElementById("member-2");
  var member3 = document.getElementById("member-3");
  member1.innerText = Math.floor(Math.random() * 6) + 1;
  member2.innerText = Math.floor(Math.random() * 6) + 1;
  member3.innerText = Math.floor(Math.random() * 6) + 1;
  var one = member1.innerText;
  var two = member2.innerText;
  var three = member3.innerText;
  var winner = document.getElementById("winner");
  if (one == two || two == three || three == one) {
    if (one == two && two == three) {
      member1.style.background = "blue";
      member2.style.background = "blue";
      member3.style.background = "blue";
      winner.innerText = "Draw";
      winner.style.color = "red";
    } else if (one == two) {
      member1.style.background = "blue";
      member2.style.background = "blue";
      if (three < one) {
        member3.style.background = "red";
        winner.innerText = "Draw";
        winner.style.color = "red";
      } else {
        member3.style.background = "green";
        winner.innerText = "Akash";
        winner.style.color = "green";
      }
    } else if (two == three) {
      member3.style.background = "blue";
      member2.style.background = "blue";
      if (three > one) {
        member1.style.background = "red";
        winner.innerText = "Draw";
        winner.style.color = "red";
      } else {
        member1.style.background = "green";
        winner.innerText = "Ayush";
      }
    } else if (one == three) {
      member1.style.background = "blue";
      member3.style.background = "blue";
      if (two < one) {
        member2.style.background = "red";
        winner.innerText = "Draw";
        winner.style.color = "red";
      } else {
        member2.style.background = "green";
        winner.innerText = "Sukhdev";
        winner.style.color = "green";
      }
    }
  } else {
    if (one > two && one > three) {
      winner.innerText = "Ayush";
      winner.style.color = "green";
      member1.style.background = "green";
      if (two > three) {
        member2.style.background = "Yellow";
        member3.style.background = "red";
      } else if (two < three) {
        member2.style.background = "red";
        member3.style.background = "Yellow";
      }
    } else if (two > one && two > three) {
      winner.innerText = "Sukhdev";
      winner.style.color = "green";
      member2.style.background = "green";
      if (one > three) {
        member1.style.background = "Yellow";
        member3.style.background = "red";
      } else if (one < three) {
        member1.style.background = "red";
        member3.style.background = "Yellow";
      }
    } else if (three > one && three > two) {
      winner.innerText = "Akash";
      winner.style.color = "green";
      member3.style.background = "green";
      if (two > one) {
        member2.style.background = "Yellow";
        member1.style.background = "red";
      } else if (two < one) {
        member2.style.background = "red";
        member1.style.background = "Yellow";
      }
    }
  }
  if (winner.innerText != "Draw") {
    document.getElementById("img2").style.display = "block";
    document.getElementById("img1").style.display = "block";
  } else {
    document.getElementById("img2").src =
      "data:image/jpeg;base64,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";
    document.getElementById("img1").src =
      "data:image/jpeg;base64,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";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img1").style.display = "block";
  }
  setTimeout(function () {
    location.reload(1);
  }, 4000);
}
