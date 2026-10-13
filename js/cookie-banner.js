// 同意状態の管理スクリプト

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');

  const consentKey = 'user_cookie_consent';
  const savedConsent = localStorage.getItem(consentKey);

  // 既に選択済みなら、その内容を即時反映してバナーは表示しない
  if (savedConsent === 'granted') {
    updateConsent('granted');
  } else if (savedConsent === 'denied') {
    updateConsent('denied');
  } else {
    // 未選択の場合はバナーを表示
    banner.style.display = 'block';
  }

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem(consentKey, 'granted');
    updateConsent('granted');
    banner.style.display = 'none';
  });

  declineBtn.addEventListener('click', function () {
    localStorage.setItem(consentKey, 'denied');
    updateConsent('denied');
    banner.style.display = 'none';
  });

  function updateConsent(status) {
    gtag('consent', 'update', {
      'ad_storage': status,
      'ad_user_data': status,
      'ad_personalization': status,
      'analytics_storage': status
    });
  }
});
