(function () {
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a');
    if (!link || typeof window.gtag !== 'function') return;

    var href = link.getAttribute('href') || '';
    var text = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100);

    if (/^https:\/\/(www\.)?(facebook\.com|instagram\.com)\//.test(href)) {
      window.gtag('event', 'social_click', {
        platform: href.indexOf('instagram.com') !== -1 ? 'instagram' : 'facebook',
        link_url: href,
        link_text: text
      });
    } else if (href.charAt(0) === '/' && href !== '/') {
      window.gtag('event', 'internal_navigation', {
        link_url: href,
        link_text: text
      });
    }
  });
})();
