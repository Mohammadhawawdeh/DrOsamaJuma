(function () {
  function addSiteLinks() {
    var navs = document.querySelectorAll('.desktop-nav, .mobile-menu nav, nav.mobile-nav');

    navs.forEach(function (nav) {
      var videosLink = nav.querySelector('a[href="/videos/"], a[href="/videos"]');
      if (!nav.querySelector('a[href="/cv/"]')) {
        var cvLink = document.createElement('a');
        cvLink.href = '/cv/';
        cvLink.textContent = 'السيرة الذاتية';
        cvLink.setAttribute('data-cv-link', 'true');
        if (videosLink) nav.insertBefore(cvLink, videosLink);
        else nav.appendChild(cvLink);
      }
      if (!nav.querySelector('a[href="/insights/"]')) {
        var insightsLink = document.createElement('a');
        insightsLink.href = '/insights/';
        insightsLink.textContent = 'المقالات';
        insightsLink.setAttribute('data-insights-link', 'true');
        if (videosLink) nav.insertBefore(insightsLink, videosLink);
        else nav.appendChild(insightsLink);
      }
    });
  }

  addSiteLinks();
  document.addEventListener('DOMContentLoaded', addSiteLinks);
  window.setTimeout(addSiteLinks, 1000);
  window.setTimeout(addSiteLinks, 3000);

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
