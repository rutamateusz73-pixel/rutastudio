# RUTA STUDIO — strona firmowa

Plik-wizytówka firmy Mateusza Ruta, założyciela RUTA STUDIO.

## Struktura plików

```
rutastudio/
├── index.html        # strona główna
├── faq.html          # podstrona FAQ
├── styles.css        # wszystkie style (wspólne)
├── script.js         # JavaScript (wspólny)
├── robots.txt        # instrukcja dla wyszukiwarek
├── sitemap.xml       # mapa strony dla Google
├── .htaccess         # konfiguracja dla hostingów Apache (mydevil, home.pl, nazwa.pl)
├── _headers          # konfiguracja dla Netlify / Cloudflare Pages
└── README.md         # ten plik
```

---

## Przed wgraniem na domenę — CHECKLIST

### 1. Podmień domenę w 5 miejscach

Zrób **Find & Replace** w tych plikach i zamień `rutastudio.pl` na swoją docelową domenę:

- `index.html` — meta tagi (canonical, og:url, og:image, twitter:image), schema.org
- `faq.html` — meta tagi, schema.org
- `robots.txt` — linia Sitemap
- `sitemap.xml` — 2 × `<loc>`
- `.htaccess` — nic, bo tam domena nie występuje

### 2. Stwórz obrazek OG (1200×630 px)

Meta tagi odwołują się do pliku `og-image.png` w głównym folderze. Gdy ktoś wkleja link do Twojej strony na Facebooku, LinkedIn, Messengerze — zobaczy ten obrazek.

**Jak zrobić:** otwórz swoją stronę, zrób screenshot hero, wykadruj do proporcji 1200×630, zapisz jako `og-image.png` i wrzuć do głównego folderu obok `index.html`.

### 3. Sprawdź e-mail na stronie

Obecnie: `rutamateusz73@gmail.com` — to Twój prywatny.

Gdy kupisz domenę, najlepiej stworzyć dedykowany adres typu `kontakt@rutastudio.pl` i podmienić w plikach (3 miejsca: `index.html` w sekcji kontakt, `faq.html` w CTA, `index.html` w schema.org).

### 4. Testowanie SEO po wgraniu

Uruchom po deploymencie:
- **Google PageSpeed Insights** — https://pagespeed.web.dev/
- **Google Rich Results Test** — https://search.google.com/test/rich-results (sprawdza czy Google rozumie Twoje schema.org)
- **Facebook Sharing Debugger** — https://developers.facebook.com/tools/debug/ (podgląd jak link wygląda na FB)

### 5. Dodaj stronę do Google

- **Google Search Console** — https://search.google.com/search-console
  1. Dodaj domenę
  2. Zweryfikuj własność (przez DNS lub HTML meta tag)
  3. Wgraj sitemap.xml

### 6. (Opcjonalnie) Google Analytics

Jeśli chcesz śledzić ruch — załóż konto na https://analytics.google.com, pobierz snippet i wklej przed `</head>` w obu plikach HTML.

---

## Deploy — instrukcje dla różnych hostingów

### Opcja A: Hosting polski z FTP (mydevil, home.pl, nazwa.pl, cyber_folks)

1. W panelu hostingu załóż domenę / podłącz istniejącą
2. Otwórz klienta FTP (np. FileZilla)
3. Połącz się danymi z panelu (host, user, hasło)
4. Przejdź do folderu `public_html/` lub `www/` lub `domeny/rutastudio.pl/public_html/`
5. Wgraj **wszystkie pliki i foldery** z tego repo
6. Gotowe

Pliki `.htaccess` i `_headers` możesz wgrać oba — drugi będzie ignorowany na Apache.

### Opcja B: Netlify (polecam na start — darmowe i szybkie)

1. Załóż konto na https://netlify.com
2. Zainstaluj Netlify CLI lub po prostu przeciągnij folder na https://app.netlify.com/drop
3. Skonfiguruj custom domain w panelu Netlify → Domain settings
4. Netlify automatycznie doda SSL

### Opcja C: Cloudflare Pages (drugie darmowe rozwiązanie)

1. Wrzuć projekt na GitHub
2. Załóż konto na https://pages.cloudflare.com
3. Connect to Git → wybierz repo
4. Build settings: zostaw puste (to czysty HTML)
5. Deploy

### Opcja D: GitHub Pages

Działa, ale ma ograniczenia (tylko HTTPS na subdomenie, bez custom redirects).

1. W repo GitHub przejdź do **Settings** → **Pages**
2. Source: `main` branch, folder `/` (root)
3. Save → czekaj 1-2 minuty

---

## Edycja treści w przyszłości

### Najczęstsze zmiany:

- **Nowa realizacja w portfolio** → `index.html`, szukaj `<!-- PORTFOLIO -->`, duplikuj kartę
- **Nowe pytanie w FAQ** → `faq.html`, duplikuj `<div class="faq-item">`. Pamiętaj też dodać do JSON-LD w `<head>` (pomaga Google)
- **Zmiana cen / usług** → `index.html`, sekcja `<!-- SERVICES -->`
- **Zmiana kontaktu** → sekcja `#contact` w `index.html` + schema.org w head
- **Zmiana kolorów** → `styles.css`, na górze jest blok `:root` z zmiennymi `--bg`, `--accent` itd.

---

## Kontakt techniczny

Mateusz Ruta
- e-mail: rutamateusz73@gmail.com
- tel: +48 696 148 963
