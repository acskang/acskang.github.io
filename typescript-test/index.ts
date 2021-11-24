let 제목 = document.querySelector("#title");
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워 마디";
}

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {
  console.log("안녕 마디마디");
});
