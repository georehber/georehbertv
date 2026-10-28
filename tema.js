// georehber.com ile ayni tema kaydi ('theme' = 'light' | 'dark'); sitede secilen tema burada da gecerli.
(function () {
  var b = document.body;
  function uygula(t) {
    b.classList.toggle('dark', t === 'dark');
    var m = document.querySelector('meta[name=theme-color]');
    if (m) m.content = t === 'dark' ? '#030102' : '#FCFCFC';
  }
  var kayitli = 'light';
  try { kayitli = localStorage.getItem('theme') || 'light'; } catch (e) {}
  uygula(kayitli);
  var d = document.getElementById('themeToggle');
  if (d) d.addEventListener('click', function () {
    var yeni = b.classList.contains('dark') ? 'light' : 'dark';
    try { localStorage.setItem('theme', yeni); } catch (e) {}
    uygula(yeni);
  });
})();
