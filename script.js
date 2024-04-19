var frnd = document.querySelector("h6");
var addfriend = document.querySelector("a");
var check = 0;
addfriend.addEventListener("click", function () {
  if (check == 0) {
    frnd.innerHTML = "Friends";
    frnd.style.color = "green";
    check = 1;
    addfriend.innerHTML = "Remove Friend";
  } else {
    addfriend.innerHTML = "Add Friend";
    frnd.innerHTML = "Stranger";
    frnd.style.color = "red";
    check = 0;
  }
});

// change image*********************************************************
var imgchange = document.querySelector("img");
imgchange.addEventListener("mouseover", function () {
  imgchange.src =
    "https://media.istockphoto.com/id/1330902997/photo/portrait-of-a-young-women-using-mobile-phone-sitting-isolated-over-orange-background.webp?b=1&s=170667a&w=0&k=20&c=RXFTlMRjqA5TZ7tk_Xtou-lhkHCSQGLLV5pjMpvl72U=";
});
imgchange.addEventListener("mouseout", function () {
  imgchange.src =
    "https://media.istockphoto.com/id/479741508/photo/beautiful-middle-eastern-woman-with-hijab-and-blue-scarf-jewelry.webp?b=1&s=170667a&w=0&k=20&c=pyKPwT2U6lAMbBVA6IKZkBEPq-ibBTndm1SijTJOvnM=";
});

// like******************************************************************
var love = document.querySelector(".ri-heart-3-fill");
imgchange.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%,-50%) scale(1)";
  setTimeout(function () {
    love.style.transform = "translate(-50%,-50%) scale(0)";
  }, 500);
});

// Sun rotate*****************************************************************
var sun = document.querySelector(".ri-sun-fill");
sun.addEventListener("mouseover", function () {
  //   console.log("hii");
  sun.style.transform = "rotate(-10deg)";
});
sun.addEventListener("mouseout", function () {
  //   console.log("hii");
  sun.style.transform = "rotate(10deg)";
});

// Dark mode******************************************************************
var bodycolor = document.querySelector(".background");
flag = 0;
sun.addEventListener("click", function () {
  if (flag == 0) {
    bodycolor.style.background = "black";
    // console.log("hii");
    flag = 1;
  } else {
    
    bodycolor.style.background = "cornflowerblue";
    flag = 0;
  }
});
