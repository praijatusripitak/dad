// เลือก element ของบัตร
const card = document.querySelector('.card');

// เพิ่ม Event Listener เพื่อรอการ 'click'
card.addEventListener('click', function () {
  // สลับคลาส 'is-flipped' เข้า-ออก ทุกครั้งที่กด
  card.classList.toggle('is-flipped');
});
