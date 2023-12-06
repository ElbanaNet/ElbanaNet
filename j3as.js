/*! LUI Premium v4 | (c) Shiva Technic World and other contributors | Only for Lantro UI users */function darkMode() {
  localStorage.setItem('mode', 'darkmode' === localStorage.getItem('mode') ? 'light' : 'darkmode'), 'darkmode' === localStorage.getItem('mode') ? document.querySelector('#mainCont').classList.add('drK') : document.querySelector('#mainCont').classList.remove('drK');
}
;
function headScroll() {
  const _0x9cc737 = window.pageYOffset || document.documentElement.scrollTop,
    _0x1aecab = 0x28,
    _0x3424a4 = document.getElementById('header');
  _0x9cc737 > _0x1aecab ? _0x3424a4.classList.add('stick') : _0x3424a4.classList.remove('stick');
}
window.addEventListener('scroll', headScroll), function () {
  var _0x4267a7 = document.querySelectorAll('.lazyYt');
  for (var _0x2532a5 = 0x0; _0x2532a5 < _0x4267a7.length; _0x2532a5++) {
    var _0xa723d5 = 'https://img.youtube.com/vi/' + _0x4267a7[_0x2532a5].dataset.embed + '/sddefault.jpg',
      _0x5d9e0d = new Image();
    _0x5d9e0d.setAttribute('class', 'lazy'), _0x5d9e0d.setAttribute('data-src', _0xa723d5), _0x5d9e0d.setAttribute('src', 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='), _0x5d9e0d.setAttribute('alt', 'Youtube video'), _0x5d9e0d.addEventListener('load', function () {
      _0x4267a7[_0x2532a5].appendChild(_0x5d9e0d);
    }(_0x2532a5)), _0x4267a7[_0x2532a5].addEventListener('click', function () {
      var _0x43b75a = document.createElement('iframe');
      _0x43b75a.setAttribute('frameborder', '0'), _0x43b75a.setAttribute('allowfullscreen', ''), _0x43b75a.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1'), this.innerHTML = '', this.appendChild(_0x43b75a);
    });
  }
  ;
}();
for (var imageslazy = document.querySelectorAll('.pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img'), i = 0x0; i < imageslazy.length; i++) imageslazy[i].setAttribute('onclick', 'return false');
function wrap(_0x57abe3, _0x2511c2, _0x1b5312) {
  for (var _0xc1784a = document.querySelectorAll(_0x2511c2), _0x2c5a7b = 0x0; _0x2c5a7b < _0xc1784a.length; _0x2c5a7b++) {
    var _0x1acaac = _0x57abe3 + _0xc1784a[_0x2c5a7b].outerHTML + _0x1b5312;
    _0xc1784a[_0x2c5a7b].outerHTML = _0x1acaac;
  }
}
wrap('<div class="zmImg">', '.pS .separator >a', '</div>'), wrap('<div class="zmImg">', '.pS .tr-caption-container td >a', '</div>'), wrap('<div class="zmImg">', '.pS .separator >img', '</div>'), wrap('<div class="zmImg">', '.pS .tr-caption-container td >img', '</div>'), wrap('<div class="zmImg">', '.pS .psImg >img', '</div>'), wrap('<div class="zmImg">', '.pS .btImg >img', '</div>');
for (var containerimg = document.getElementsByClassName('zmImg'), i = 0x0; i < containerimg.length; i++) containerimg[i].onclick = function () {
  this.classList.toggle('s');
};
Defer.dom('.lazy', 0x64, 'loaded', null, {
  'rootMargin': '1px'
}), 'undefined' != typeof infinite_scroll && infinite_scroll.on('load', function () {
  Defer.dom('.lazy', 0x64, 'loaded', null, {
    'rootMargin': '1px'
  });
});
for (var preClick = document.getElementsByTagName('pre'), i = 0x0; i < preClick.length; i++) preClick[i].addEventListener('dblclick', function () {
  var _0x14610b = getSelection(),
    _0x2879bd = document.createRange();
  _0x2879bd.selectNodeContents(this), _0x14610b.removeAllRanges(), _0x14610b.addRange(_0x2879bd), document.execCommand('copy'), _0x14610b.removeAllRanges(), document.querySelector('#toastNotif').innerHTML = '<span>Copied to clipboard!</span>';
}, false);
var ckBox = document.querySelector('#ckBox'),
  ckAcptBtn = document.querySelector('#ckAcptBtn'),
  ckErrMes = 'Cookie can\'t be set! Please unblock this site from the cookie setting of your browser.';
if (null != ckBox) {
  ckAcptBtn.onclick = () => {
    document.cookie = 'Cookies-Consent=Accepted; max-age=2592000; path=/', document.cookie ? ckBox.classList.add('acptd') : alert(ckErrMes);
  };
  let e = document.cookie.indexOf('Cookies-Consent=Accepted');
  -0x1 != e ? ckBox.classList.add('hidden') : ckBox.classList.remove('hidden');
}
var listD = '.tIc,.mobMn li,.mnMn li';
var _0xb139 = ["shift", "push", "WeSLw", "theme6", "#mainCont", "lg", "syD", "+$", "r", "search", " )", ");", "console", "error", "length", "add", "tor", "warn", "bind", "__proto__", "setItem", "theme0", "theme3", "classList", "querySelec", "remove", "20QIWTHT", "constructo", "exception", "apply", "16dutQxI", "webTheme", "removeItem", "stener", "getItem", "neDll", "{}.constru", "theme10", "theme8", "15RwmgDX", "e: dark)", "Qrsjn", "kxVtS", "725hdaaxD", "torAll", "nction() ", "theme1", "theme2", "zbqRF", "rGgdB", "prototype", "drK", "thm", "lightmode", "eOdQx", "matchMedia", "1526091Uboulf", "theme7", "mode", "rn this\")(", "vibrate", "addEventLi", "OrULv", "theme5", "(prefers-c", "VvwHR", "97516cCuPrE", "return (fu", "ctor(\"retu", "theme4", "log", "click", "toString", "trace", "info", "Vaffm", "olor-schem", "(((.+)+)+)", "304206bPhCRS", "890217uHGabd", "theme9", "786711OOCQTp", "YJyPv", "UFUkn", "matches", "table", "kRxhw", "light", "darkmode", "819720iomxHr", "e: light)"];

for (var gT, shK = document.querySelectorAll(listD), i = 0x0; i < shK.length; i++) {
  shK[i].addEventListener('click', function () {
    navigator.vibrate(0x32);
  });
}
;
function thmMo() {
  navigator.vibrate(0x32), document.querySelector('#mainCont').classList.add('thm'), document.querySelector('#mainCont').classList.remove('drK', "lg", 'syD', 'theme0');
}
function modeD() {
  navigator.vibrate(0x32), localStorage.setItem('mode', 'darkmode'), localStorage.removeItem('webTheme'), document.querySelector('#mainCont').classList.add('drK'), document.querySelector('#mainCont').classList.remove("lg", 'thm', 'syD', 'theme1', 'theme2', 'theme3', "theme4", 'theme5', 'theme6', 'theme7', 'theme9', 'theme10');
}
function modeL() {
  navigator.vibrate(0x32), localStorage.setItem('mode', "lightmode"), localStorage.removeItem('webTheme'), document.querySelector('#mainCont').classList.remove('thm', 'drK', 'syD', 'theme0', 'theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7', 'theme9', 'theme10'), document.querySelector('#mainCont').classList.add("lg");
}
function modeS() {
  navigator.vibrate(0x32), window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && (localStorage.setItem('mode', 'darkmode'), document.querySelector('#mainCont').classList.add('drK')), window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches && (localStorage.setItem('mode', 'lightmode'), document.querySelector('#mainCont').classList.remove('drK'), document.querySelector('#mainCont').classList.add('syD'), document.querySelector("#mainCont").classList.remove("lg"));
}
function darkMode() {
  var _0xe181x3b = _0xf69ed4;
  navigator[_0xb139[60]](0x32), localStorage[_0xe181x3b(0x17a)](_0xe181x3b(0x169), _0xe181x3b(0x141) === localStorage[_0xe181x3b(0x14f)](_0xe181x3b(0x169)) ? _0xe181x3b(0x13f) : _0xe181x3b(0x141)), _0xe181x3b(0x141) === localStorage[_0xe181x3b(0x14f)](_0xe181x3b(0x169)) ? document[_0xe181x3b(0x144) + _0xb139[16]](_0xe181x3b(0x14b))[_0xe181x3b(0x140)][_0xe181x3b(0x175)](_0xe181x3b(0x161)) : document[_0xe181x3b(0x144) + _0xe181x3b(0x170)](_0xe181x3b(0x14b))[_0xe181x3b(0x140)][_0xe181x3b(0x16e)](_0xe181x3b(0x161));
}
function theme0() {
  localStorage.setItem('webTheme', 'theme0'), document.querySelector('#mainCont').classList.add('theme0'), document.querySelector("#mainCont").classList.remove('theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7', 'theme9', 'theme10');
}
function theme1() {
  navigator.vibrate(0x32), localStorage.setItem('webTheme', 'theme1'), document.querySelector('#mainCont').classList.add('theme1'), document.querySelector('#mainCont').classList.remove('theme2', 'theme3', 'theme4', 'theme5', "theme6", 'theme7', 'theme8', 'theme9');
}
function theme2() {
  localStorage.setItem('webTheme', 'theme2'), document.querySelector("#mainCont").classList.add('theme2'), document.querySelector('#mainCont').classList.remove('theme1', 'theme3', "theme4", 'theme5', 'theme6', 'theme7', "theme8", 'theme9');
}
function theme3() {
  localStorage.setItem('webTheme', 'theme3'), document.querySelector('#mainCont').classList.add('theme3'), document.querySelector('#mainCont').classList.remove('theme1', 'theme2', 'theme4', 'theme5', 'theme6', 'theme7', 'theme8', 'theme9', 'theme10');
}
function theme4() {
  localStorage.setItem('webTheme', 'theme4'), document.querySelector('#mainCont').classList.add('theme4'), document.querySelector('#mainCont').classList.remove('theme1', 'theme2', "theme3", 'theme5', 'theme6', 'theme7', 'theme8', "theme9", 'theme10');
}
function theme5() {
  localStorage.setItem('webTheme', 'theme5'), document.querySelector('#mainCont').classList.add('theme5'), document.querySelector('#mainCont').classList.remove("theme1", "theme2", 'theme3', 'theme4', 'theme6', "theme7", "theme8", 'theme9', 'theme10');
}
function theme6() {
  localStorage.setItem('webTheme', 'theme6'), document.querySelector("#mainCont").classList.add('theme6'), document.querySelector("#mainCont").classList.remove('theme1', 'theme2', "theme3", 'theme4', 'theme5', 'theme7', 'theme8', 'theme9', 'theme10');
}
function theme7() {
  localStorage.setItem('webTheme', 'theme7'), document.querySelector('#mainCont').classList.add('theme7'), document.querySelector('#mainCont').classList.remove('theme1', 'theme2', 'theme3', 'theme4', "theme5", 'theme6', 'theme8', 'theme9', 'theme10');
}
function theme8() {
  localStorage.setItem('webTheme', 'theme8'), document.querySelector('#mainCont').classList.add('theme8'), document.querySelector('#mainCont').classList.remove('theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7', 'theme9', 'theme10');
}
function theme9() {
  localStorage.setItem('webTheme', 'theme9'), document.querySelector("#mainCont").classList.add('theme9'), document.querySelector('#mainCont').classList.remove('theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7', 'theme8', 'theme10');
}
function theme10() {
  localStorage.setItem('webTheme', 'theme10'), document.querySelector('#mainCont').classList.add("theme10"), document.querySelector("#mainCont").classList.remove('theme1', 'theme2', "theme3", 'theme4', 'theme5', 'theme6', 'theme7', 'theme9');
}
function headScroll() {
  var _0x3f4aaf = _0x1b4657,
    _0x423ef6 = _0x364153;
  const _0x4e2177 = window[_0x423ef6(0x18b)] || document[_0x423ef6(0x18a)][_0x423ef6(0x11c)],
    _0x4389c8 = 0x28,
    _0x49972a = document[_0x423ef6(0x170)]('header');
  _0x4e2177 > _0x4389c8 ? _0x49972a[_0x423ef6(0xf9)][_0x423ef6(0x17c)](_0x423ef6(0x16b)) : _0x49972a[_0x3f4aaf(0x285)][_0x423ef6(0x17d)](_0x423ef6(0x16b));
}
window.addEventListener('scroll', headScroll), function () {
  var _0x25eebd = document.querySelectorAll('.lazyYt');
  for (var _0x45e9b9 = 0x0; _0x45e9b9 < _0x25eebd.length; _0x45e9b9++) {
    var _0x2c7f6f = 'https://img.youtube.com/vi/' + _0x25eebd[_0x45e9b9].dataset.embed + '/sddefault.jpg',
      _0x1f823e = new Image();
    _0x1f823e.setAttribute('class', 'lazy'), _0x1f823e.setAttribute('data-src', _0x2c7f6f), _0x1f823e.setAttribute('src', 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='), _0x1f823e.setAttribute('alt', 'Youtube video'), _0x1f823e.addEventListener('load', function () {
      _0x25eebd[_0x45e9b9].appendChild(_0x1f823e);
    }(_0x45e9b9)), _0x25eebd[_0x45e9b9].addEventListener('click', function () {
      var _0xec3a6d = document.createElement('iframe');
      _0xec3a6d.setAttribute('frameborder', '0'), _0xec3a6d.setAttribute('allowfullscreen', ''), _0xec3a6d.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1'), this.innerHTML = '', this.appendChild(_0xec3a6d);
    });
  }
  ;
}();
for (var imageslazy = document.querySelectorAll('.pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img'), i = 0x0; i < imageslazy.length; i++) imageslazy[i].setAttribute('onclick', 'return false');
function wrap(_0x24a593, _0x4a01c1, _0x4f7fc0) {
  var _0x54f2a6 = _0x364153;
  for (var _0x2a99ec = document[_0x54f2a6(0x124)](_0x4a01c1), _0x45e1ae = 0x0; _0x45e1ae < _0x2a99ec[_0x54f2a6(0x164)]; _0x45e1ae++) {
    var _0xbf8d7b = _0x24a593 + _0x2a99ec[_0x45e1ae][_0x54f2a6(0x156)] + _0x4f7fc0;
    _0x2a99ec[_0x45e1ae][_0x54f2a6(0x156)] = _0xbf8d7b;
  }
}
wrap('<div class="zmImg">', '.pS .separator >a', '</div>'), wrap('<div class="zmImg">', '.pS .tr-caption-container td >a', '</div>'), wrap('<div class="zmImg">', '.pS .separator >img', '</div>'), wrap('<div class="zmImg">', '.pS .tr-caption-container td >img', '</div>'), wrap('<div class="zmImg">', '.pS .psImg >img', '</div>'), wrap('<div class="zmImg">', '.pS .btImg >img', '</div>');
for (var containerimg = document.getElementsByClassName('zmImg'), i = 0x0; i < containerimg.length; i++) containerimg[i].onclick = function () {
  this.classList.toggle('s');
};
Defer.dom('.lazy', 0x64, 'loaded', null, {
  'rootMargin': '1px'
}), 'undefined' != typeof infinite_scroll && infinite_scroll.on('load', function () {
  Defer.dom('.lazy', 0x64, 'loaded', null, {
    'rootMargin': '1px'
  });
});
