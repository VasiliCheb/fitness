document.addEventListener('DOMContentLoaded', () => {

  const video = document.querySelector('.video');
  if (video) {
    const playButton = video.querySelector('.video__play');
    const preview = video.querySelector('img');
    const videoSource = video.dataset.source;
    playButton.addEventListener('click', () => {
      playButton.remove();
      preview.remove();
      video.classList.add('video--played');
      video.insertAdjacentHTML('afterbegin', '<iframe width="364" height="228" src="' + videoSource + '" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
  } else {
    return;
  }
});
