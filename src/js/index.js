const likeBtn = document.getElementById('like_btn');
const profileEl = document.getElementById('profile');

likeBtn.addEventListener('click', likePage)

function likePage() {
  profileEl.classList.toggle('profile--liked');
}
