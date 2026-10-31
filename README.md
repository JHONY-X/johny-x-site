# Ermias Dereje portfolio: setup and launch

Plain HTML, CSS and JavaScript. No framework, no build step. Open `index.html` in a browser to preview.

## 1. Fill in the blanks
Search `index.html` for these and replace them:
- `www.example.com`: your real domain (also in `robots.txt` and `sitemap.xml`)
- `YOUR-USERNAME`: your GitHub, LinkedIn and X usernames
- `https://your-demo-link.example`: the live link of each project (and the GitHub link of each repo)
- Certificate links (`href="#"`): the verification page of each certificate
- Check every sentence about yourself. The text came from your design image, so correct anything that isn't accurate.

## 2. Add your files (same folder as `index.html`)
- `cv.pdf`: your CV
- `og-image.jpg`: 1200 x 630 px, used for link previews on WhatsApp, LinkedIn and Telegram
- `profile.jpg`: your photo. Then change `avatar.svg` to `profile.jpg` in the About section and in the JSON-LD block.
- Project screenshots: save as WebP or JPG (under 200 KB each) and replace `placeholder.svg` in each project card.

## 3. Contact form
The form opens the visitor's email app with the message filled in, so it works anywhere with no server. If you want messages delivered without an email app, create a free form at formspree.io or use Netlify Forms and point the form to it.

## 4. Publish
Upload the folder to Cloudflare Pages, Netlify or GitHub Pages and connect your domain. Check that `/robots.txt` and `/sitemap.xml` open in the browser.

## 5. Get found on search engines
1. Google Search Console: add the site, verify ownership, submit `sitemap.xml`, then use URL Inspection and Request indexing.
2. Bing Webmaster Tools: import the site from Google Search Console.
3. Put the link on your LinkedIn, GitHub profile, CV and email signature. Links from real profiles help the most.
4. Use the same name ("Ermias Dereje") everywhere. Searches for your own name show up first.
5. Test at pagespeed.web.dev and aim for 90+ on mobile.

## Notes
- The skill percentage bars are for looks. Recruiters usually prefer plain lists of skills and real projects, so consider removing the bars later.
- Spell your brand the same way everywhere (this site uses JHONY-X).
