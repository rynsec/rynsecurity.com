(()=>{const e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches;(e==="dark"||!e&&t||!e)&&document.documentElement.classList.add("dark")})();
