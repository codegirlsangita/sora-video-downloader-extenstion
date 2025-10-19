# Sora Video Downloader (for owned videos)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/<USERNAME>/<REPO>?style=social)](https://github.com/codegirlsangita/sora-video-downloader-extenstion/)

> Lightweight Chrome extension that adds a **download/open** button to non-DRM playable `<video>` elements.  
> **Important:** Use only for videos you own or have permission to download. This project does **not** bypass DRM or protected streams.

## 🚀 Features
- Adds a small download icon to each *likely non-encrypted* video on the page.
- Heuristics avoid showing the button for HLS/DASH manifests (`.m3u8`, `.mpd`) and EME-protected videos.
- Clicking the icon **opens the direct video URL in a new tab** so you can save the file (avoids CORS/fetch issues).
- No backend required — entirely client-side.

## 📸 Screenshot
![Screenshot showing download icon](https://ik.imagekit.io/qsj9rwkvv/Screenshot%202025-10-19%20at%2010.07.22%E2%80%AFAM.png?updatedAt=1760848881602)

## ✅ Why this is safe & legal
- This tool **does not** circumvent DRM or remove watermarks.
- Intended for **personal use** with your own or permitted content.
- Publishing the source code on GitHub is allowed; publishing a Chrome Web Store extension that encourages bypassing protected content is not.

## 🔧 Installation (developer mode)
1. Clone the repo:
   ```bash
   git clone (https://github.com/codegirlsangita/sora-video-downloader-extenstion)
2. Go to chrome://extensions in Chrome.

3. Enable Developer mode (top-right).

4. Click Load unpacked and select the repository folder.
