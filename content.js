chrome.storage.sync.get(["fontEnabled"], (result) => {
    if (result.fontEnabled) {
      const style = document.createElement("style");
      style.textContent = `
        @font-face {
          font-family: 'FastMono-Regular';
          src: url('${chrome.runtime.getURL("fonts/FastMono-Regular.woff2")}') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
  
        * {
          font-family: 'FastMono-Regular', sans-serif !important;
        }
      `;
      document.head.appendChild(style);
    }
  });
  
  