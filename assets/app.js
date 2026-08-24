(function () {
  'use strict';

  var STORE = 'jd-lang';
  var lang = pickLang();

  function pickLang() {
    var saved = localStorage.getItem(STORE);
    if (saved && T[saved]) return saved;
    var codes = LANGS.map(function (l) { return l.code; });
    var hit = (navigator.languages || [navigator.language || 'en'])
      .map(function (l) { return String(l).slice(0, 2).toLowerCase(); })
      .find(function (c) { return codes.indexOf(c) > -1; });
    return hit || 'en';
  }

  function t(key) { return (T[lang] && T[lang][key]) || T.en[key] || key; }
  function pick(obj) { return (obj && (obj[lang] || obj.en)) || ''; }

  function span(cls, text) {
    var el = document.createElement('span');
    el.className = cls;
    el.textContent = text;
    return el;
  }

  function period(start, end) {
    return start.replace('.', '/') + ' — ' + (end ? end.replace('.', '/') : t('label.now'));
  }

  function renderJobs() {
    var ol = document.getElementById('jobs');
    ol.replaceChildren.apply(ol, JOBS.map(function (j) {
      var li = document.createElement('li');
      if (j.current) li.className = 'is-current';
      li.appendChild(span('years', period(j.start, j.end)));
      var body = document.createElement('div');
      body.className = 'body';
      var h = document.createElement('h3');
      h.textContent = j.company;
      body.appendChild(h);
      body.appendChild(span('role', pick(j.role)));
      li.appendChild(body);
      return li;
    }));
  }

  function renderProjects() {
    var ol = document.getElementById('projects-list');
    ol.replaceChildren.apply(ol, PROJECTS.map(function (p) {
      var li = document.createElement('li');
      if (p.current) li.className = 'is-current';

      li.appendChild(span('years', period(p.start, p.end)));

      var body = document.createElement('div');
      body.className = 'body';

      var h = document.createElement('h3');
      if (p.url) {
        var a = document.createElement('a');
        a.href = p.url;
        a.textContent = p.name;
        a.rel = 'noopener noreferrer';
        a.target = '_blank';
        h.appendChild(a);
      } else {
        h.textContent = p.name;
      }
      body.appendChild(h);

      body.appendChild(span('type', pick(p.type)));

      var meta = document.createElement('p');
      meta.className = 'meta';
      meta.append(pick(p.role), ' · ', p.company);
      body.appendChild(meta);

      var ul = document.createElement('ul');
      ul.className = 'stack';
      p.stack.forEach(function (s) {
        var i = document.createElement('li');
        i.textContent = s;
        ul.appendChild(i);
      });
      body.appendChild(ul);

      li.appendChild(body);
      return li;
    }));
    document.getElementById('stat-projects').textContent = PROJECTS.length;
  }

  function renderSkills() {
    var ul = document.getElementById('skills-list');
    ul.replaceChildren.apply(ul, SKILLS.map(function (s) {
      var li = document.createElement('li');
      li.appendChild(span('name', s.name));
      li.appendChild(span('n', s.years + ' ' + t('label.years')));
      return li;
    }));
  }

  function renderLangSwitch() {
    var box = document.getElementById('langs');
    box.replaceChildren.apply(box, LANGS.map(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = l.label;
      b.title = l.name;
      b.lang = l.code;
      b.setAttribute('aria-pressed', String(l.code === lang));
      b.addEventListener('click', function () {
        lang = l.code;
        localStorage.setItem(STORE, lang);
        render();
      });
      return b;
    }));
  }

  function applyStrings() {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var attr = el.dataset.i18nAttr;
      if (attr) el.setAttribute(attr, t(el.dataset.i18n));
      else el.textContent = t(el.dataset.i18n);
    });
  }

  function render() {
    applyStrings();
    renderLangSwitch();
    renderJobs();
    renderProjects();
    renderSkills();
  }

  render();
})();
