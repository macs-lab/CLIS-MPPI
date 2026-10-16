(() => {
  "use strict";

  const config = window.CLIS_CONFIG || {};
  // Accept only HTTP(S) or paths inside this project; never executable URL schemes.
  const resourceUrl = (value) => {
    if (typeof value !== "string" || !value.trim()) return "";
    const candidate = value.trim();
    if (/^https?:\/\/[^\s]+$/i.test(candidate)) return candidate;
    if (/^\.\/(?!.*(?:\.\.|[\\\s?#]))[^:]+$/.test(candidate)) return candidate;
    return "";
  };
  const paperUrl = resourceUrl(config.paperUrl);
  if (paperUrl) {
    document.querySelectorAll('[data-resource="paper"]').forEach((link) => {
      link.href = paperUrl;
    });
  }

  const arxivLink = document.getElementById("arxiv-link");
  const arxivUrl = resourceUrl(config.arxivUrl);
  if (arxivUrl) {
    arxivLink.href = arxivUrl;
    arxivLink.target = "_blank";
    arxivLink.rel = "noopener noreferrer";
    arxivLink.removeAttribute("aria-disabled");
    arxivLink.removeAttribute("aria-describedby");
    arxivLink.querySelector(".soon")?.remove();
    const arxivStatus = document.getElementById("arxiv-status");
    if (arxivStatus) arxivStatus.hidden = true;
  }

  const videoUrl = resourceUrl(config.videoUrl);
  const videoFile = resourceUrl(config.videoFile);
  const videoLink = document.getElementById("video-link");
  if (videoFile) {
    const video = document.getElementById("demo-video");
    video.src = videoFile;
    video.hidden = false;
    document.getElementById("video").hidden = false;
    videoLink.href = "#video";
    videoLink.lastChild.textContent = "Video";
  } else if (videoUrl) {
    const externalVideo = document.getElementById("external-video");
    externalVideo.href = videoUrl;
    externalVideo.hidden = false;
    document.getElementById("video").hidden = false;
    videoLink.href = videoUrl;
    videoLink.target = "_blank";
    videoLink.rel = "noopener noreferrer";
    videoLink.lastChild.textContent = "Video";
  }

  const copyButton = document.getElementById("copy-bibtex");
  const copyLabel = document.getElementById("copy-label");
  const copyStatus = document.getElementById("copy-status");
  let resetTimer;
  const copyFallback = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.cssText = "position:fixed;left:-9999px;top:0";
    document.body.appendChild(textarea);
    textarea.select();
    let success = false;
    try { success = document.execCommand("copy"); }
    finally { textarea.remove(); copyButton.focus({ preventScroll: true }); }
    if (!success) throw new Error("Clipboard unavailable");
  };
  copyButton.addEventListener("click", async () => {
    const text = document.getElementById("bibtex-code").textContent.trim();
    clearTimeout(resetTimer);
    try {
      if (navigator.clipboard && window.isSecureContext) {
        try { await navigator.clipboard.writeText(text); }
        catch { copyFallback(text); }
      } else {
        copyFallback(text);
      }
      copyLabel.textContent = "Copied!";
      copyStatus.textContent = "BibTeX copied to clipboard.";
      resetTimer = setTimeout(() => { copyLabel.textContent = "Copy"; copyStatus.textContent = ""; }, 3500);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById("bibtex-code"));
      if (selection) { selection.removeAllRanges(); selection.addRange(range); }
      copyStatus.textContent = "Press Ctrl+C (or ⌘C) to copy the selected citation, or download the .bib file.";
    }
  });
})();
