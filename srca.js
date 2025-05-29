const btn = document.querySelector("#r");
const ww =document.querySelector("#w");
const img = document.querySelector("#im");

const originalSrc = "imgg/wait.png"; // รูปเดิม
const hoverSrc = "imgg/hide.png";        // รูปเมื่อ hover

btn.addEventListener("mouseover", () => {
  img.src = hoverSrc;
});

btn.addEventListener("mouseout", () => {
  img.src = originalSrc;
});

ww.addEventListener("mouseover", () => {
  img.src = "imgg/pig.png";
});

ww.addEventListener("mouseout", () => {
  img.src = originalSrc;
});

ww.addEventListener('click',()=>{
    setTimeout(() => {
    window.location.href = "wrong.html"; // เปลี่ยนเป็นชื่อไฟล์หน้าถัดไปของคุณ
  }, 3000);
})

btn.addEventListener('click',()=>{
    setTimeout(() => {
    window.location.href = "box.html"; // เปลี่ยนเป็นชื่อไฟล์หน้าถัดไปของคุณ
  }, 3000);
})


