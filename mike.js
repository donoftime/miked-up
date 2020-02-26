const replaceImages = () => {
  const url = chrome.extension.getURL("images/mike.png");
  const observer = new MutationObserver(mutations => {
    document.querySelectorAll('img:not(.miked)').forEach(img => {
      img.setAttribute('src', url);
      img.classList.add('miked');
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
replaceImages();
