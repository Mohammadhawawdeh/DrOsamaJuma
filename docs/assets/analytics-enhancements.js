(function () {
  function addInsightsLinks() {
    var navs = document.querySelectorAll('.desktop-nav, .mobile-menu nav, nav.mobile-nav');

    navs.forEach(function (nav) {
      if (nav.querySelector('a[href="/insights/"]')) return;

      var link = document.createElement('a');
      link.href = '/insights/';
      link.textContent = 'المقالات';
      link.setAttribute('data-insights-link', 'true');

      var videosLink = nav.querySelector('a[href="/videos/"], a[href="/videos"]');
      if (videosLink) nav.insertBefore(link, videosLink);
      else nav.appendChild(link);
    });
  }

  addInsightsLinks();
  document.addEventListener('DOMContentLoaded', addInsightsLinks);
  window.setTimeout(addInsightsLinks, 1000);
  window.setTimeout(addInsightsLinks, 3000);

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
