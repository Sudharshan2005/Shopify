(() => {
    const banner = document.getElementById('promo-banner');
    if (!banner) return;
  
    const applyPadding = () => {
      const h = banner.offsetHeight || 0;
      document.body.style.paddingTop = h + 'px';
    };
  
    applyPadding();
    window.addEventListener('resize', applyPadding);
  
    if ('ResizeObserver' in window) {
      new ResizeObserver(applyPadding).observe(banner);
    }
  })();
  