"use strict";

// ローディング
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 500);
});

// ハンバーガーメニュー

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".overlay") && !event.target.closest("#open")) {
      overlay.classList.remove("show");
      open.classList.remove("hide");
    }
  });
}

// 製品一覧

const swiper = new Swiper(".swiper", {
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 600,
  centeredSlides: true,
  spaceBetween: 25,

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    700: {
      slidesPerView: "auto",
    },
  },
});

// お問い合わせフォーム
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();

      xhr.open(
        "POST",
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLScJF9Z8DRM28IhoCATHMAhJryrYI--nGdwIfAKRsZc8CumYXg/formResponse",
        true
      );
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          // 4はリクエスト完了を意味します
          document.querySelector(".contact_end-msg").style.display = "block";
          document.querySelector(".contact_button").style.display = "none";
          // window.location.href = "thanks.html";

          // 以下の行でフォームの入力をリセットします
          form.reset();
        }
      };

      xhr.send(formData);
    });
  }
});

// // thank you
function onSuccess() {
  window.location.href = "thanks.html";
}
