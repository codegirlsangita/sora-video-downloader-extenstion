// content.js
function addDownloadButtons() {
  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    if (video.dataset.downloadAdded) return; // prevent duplicate buttons
    video.dataset.downloadAdded = true;

    const btn = document.createElement('button');
    btn.innerText = '⬇️';
    btn.style.position = 'absolute';
    btn.style.bottom = '10px';
    btn.style.right = '10px';
    btn.style.zIndex = '9999';
    btn.style.fontSize = '20px';
    btn.style.cursor = 'pointer';
    btn.style.background = 'rgba(0,0,0,0.5)';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.padding = '5px 8px';

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      try {
        // Skip encrypted videos (like DRM-protected)
        if (!video.src || video.src.includes('blob:')) {
          alert('⚠️ This video is encrypted or streamed, cannot open directly.');
          return;
        }

        // Open video source in a new tab instead of downloading
        window.open(video.src, '_blank');
      } catch (err) {
        console.error('Error:', err);
        alert('❌ Unable to open video.');
      }
    });

    // Wrap the video to position the button correctly
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    video.parentNode.insertBefore(wrapper, video);
    wrapper.appendChild(video);
    wrapper.appendChild(btn);
  });
}

// Run after DOM loads
const observer = new MutationObserver(addDownloadButtons);
observer.observe(document.body, { childList: true, subtree: true });
addDownloadButtons();
