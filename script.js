const width = window.outerWidth;
const pcimg = document.getElementById("dis");
const mobileimg = document.getElementById("disNone");
const mobilePublisher = document.getElementById("mobile-pubby");
const mobilePublishedOn = document.getElementById("mobile-pubon");
const pcPublisher = document.getElementById("pc-pubby");
const pcPublishedOn = document.getElementById("pc-pubon");
const br = document.getElementById("lastBreak");
if (width < 1000) {
  pcimg.style.display = "";
  mobileimg.style.display = "none";
  mobilePublishedOn.style.display = "";
  mobilePublisher.style.display = "";
  pcPublishedOn.style.display = "none";
  pcPublisher.style.display = "none";
  br.style.display = "";
}
const screenDesc = document.querySelectorAll(".desc-remove");
if (width < 1100 && width > 1000) {
  screenDesc.forEach((s) => {
    s.style.display = "none";
  });
}

const imgMobBlog = document.querySelectorAll(".imgboxMobile");
const imgPCBlog = document.querySelectorAll(".imgboxPC");
const brO = document.querySelectorAll(".breakMob");
const brT = document.querySelectorAll(".breakMob2");
const rBr = document.querySelectorAll(".readMorebreak");
if (width < 1024) {
  imgMobBlog.forEach((mob) => {
    mob.style.display = "";
  });
  imgPCBlog.forEach((pc) => {
    pc.style.display = "none";
  });
  brO.forEach((brw) => {
    brw.style.display = "";
  });
  brT.forEach((bre) => {
    bre.style.display = "";
  });
  rBr.forEach((rBre) => {
    rBre.style.display = "";
  });
}

// Js used in Footer
const brMob = document.getElementById("footer-break");
const smMob = document.getElementById("sm-break");
if (width < 1024) {
  brMob.style.display = "";
  smMob.style.display = "";
  console.log(width);
}
if (width > 700) {
  smMob.style.display = "none";
  brMob.style.display = "none";
}
const logo = document.getElementById("footer-logo");
if (width < 1050) {
  logo.src = "./img/poster.png";
}

// header
const title = document.getElementById("title-h1");
const tagline = document.getElementById("tagline-p");
const search = document.getElementById("search");
const brRe = document.getElementById("break-remove");
if (width < 980) {
  title.style.fontSize = "22px";
  title.style.lineHeight = "22px";
  tagline.style.fontSize = "15px";
  tagline.style.lineHeight = "24px";
  search.style.fontSize = "15px";
  brRe.style.display = "";
}

//off-canvas navbar
const close = document.getElementById("close");
const open = document.getElementById("bars");
const menu = document.getElementById("menu");
function toggleHidden() {
  menu.style.right = "0px";
}

function hide() {
  menu.style.right = "-500px";
}

//links
const linkO = document.getElementById("o");
const linkT = document.getElementById("t");
if (width < 900) {
  linkO.style.display = "none";
  linkT.style.display = "none";
}
