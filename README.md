# Sky High Bakery Website

## 1. Project overview

Sky High Bakery is a sample bakery website made to demonstrate skills learned during the first year of studying web development. The colour scheme carries over from the original with warm peach, cream and green colours. As does the bakery's slogan: We put the bake in bakery. Come for the treats, stay for the vibes.”

The website introduces the bakery, showcases part of their menu, takes enquiries and gives access to a general contact form.

This website is for demonstration purposes only. Any product information, prices, contact information, locations and the like are placeholders, designed to represent what a real website might contain, but is not connected to any real business. No payments are accepted. No orders can be placed. Any contact form submitted will not be stored on a server.

## 2. Website goals

- Showcase the fictional bakery and tell its story.
- Allow navigation between Home, Enquiries, Contact and Products pages.
- Implement JavaScript interaction and dynamic product filtering/sorting capability.
- Validate all form data prior to replying to the visitor.
- Implement basic on-page SEO, sitemap.xml and instructions for web crawlers.
- Maintain usability between desktop, tablet and mobile devices.

## 3. Pages and functionality

| Page | Purpose and features |
| --- | --- |
| `index.html` | Homepage, introduction, featured image gallery and lightbox preview. |
| `enquires.html` | Bakery story and enquiry form. JavaScript displays a sample response based on the selected enquiry type. |
| `contact.html` | Contact details, opening hours, illustrative Pretoria map and general message form. Validated details are compiled into a `mailto:` email draft. |mailto: does not send the email automatically. The customer still needs to click Send in their email app.
| `products.html` | JavaScript-generated sample product cards with search and name/price sorting. |

### JavaScript features

• Dynamically created product cards built from a JavaScript array.
• Filter searches product name and description as you type.
• Sorting by name A–Z, price low- to high- and price high-to-low.
• Gallery card selection opens the image lightbox, closes on click of its close button, the area behind it or pressing Escape.
• Enquiry form uses browser validation and shows a relevant sample response.
• Contact form validates fields, builds subject and message then opens visitor's configured email app.
- The footer year updates automatically.

Since this website is static, the enquiry response is a front-end example rather than an AJAX call to a server. The contact function uses `mailto: ` which requires your visitor to have an email application configured. On a live website link your forms to a server you trust or form service, handle submissions securely and take steps to prevent spam.

## 4. SEO implementation

- Each HTML page has a distinct descriptive `<title>` and meta description.
- Relevant keywords and author metadata are included as a basic exercise; meaningful page content remains the main SEO focus.
- Each page uses a clear heading hierarchy and semantic HTML elements.
- Images have descriptive alternative text. Images are stored locally and use the existing filenames.
- Navigation links connect all main pages, and page URLs use simple filenames.
- Responsive CSS supports mobile screens; keyboard focus styles and reduced-motion preferences are included.
- `robots.txt` and `sitemap.xml` are included. **Before deployment, replace `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY` in both files with the real GitHub Pages address.** If Netlify is used, update the sitemap URLs to the deployed domain.
- The map uses an google maps embed. It shows an illustrative Pretoria city-centre view, not a verified bakery location.

### Off-page SEO (recommended steps)

Off-page actions cannot be completed only by editing these files. When the project is published, share the live URL through appropriate social accounts, ask relevant local/community websites to link to it where suitable, and use Search Console or Bing Webmaster Tools to submit the sitemap. Only create real business directory listings if the business and address are real and verified.

## 5. Forms and validation

### Enquiry form
The form collects the visitor's name, email, enquiry type, optional preferred date and details. HTML attributes such as `required`, `type="email"`, `minlength`, `maxlength` and `type="date"` provide browser validation. JavaScript then displays a sample response for product information, event/catering, volunteering/sponsorship or another enquiry.

### Contact form
The form collects a name, email, optional phone number, message category and full message. HTML validation checks required fields, email format, text lengths and the optional phone pattern. JavaScript compiles the entered details into an email draft addressed to `skyhighbakery01@gmail.com`.

## 6. Technologies

- HTML5
- CSS3 (Grid, Flexbox, media queries, transitions and responsive styling)
- Vanilla JavaScript (DOM manipulation, event listeners, filtering, sorting and client-side validation)
- Google maps embed
- Git and GitHub for version control and repository hosting

No JavaScript framework or build process is required.

## 7. Project structure

```text
Sky High Bakeries/
├── index.html
├── enquires.html
├── contact.html
├── products.html
├── css/
│   └── myfirststyle.css
├── js_assets/
│   └── main.js
├── _images/
│   ├── Welcome to (1).png
│   ├── cookies.jpg
│   ├── croissant.jpg
│   ├── cupcakes.jpg
│   └── construction.jpg
├── robots.txt
├── sitemap.xml
└── README.md
```

## 8. Run locally

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a modern browser. For a more consistent local setup, use the Live Server extension in Visual Studio Code.
4. Navigate through the menu and test the forms and product filters.

There are no packages to install.

### GitHub Pages
1. Push the project files to a GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Select deployment from the `main` branch and the root folder, then save.
4. Wait for GitHub Pages to publish the website and copy its live URL.
5. Replace the placeholder URL in `sitemap.xml` and `robots.txt`, commit and push those updates.

### Netlify
1. Sign in to Netlify and choose **Add new site → Import an existing project**.
2. Connect the GitHub repository.
3. Leave the build command blank and publish directory as the project root.
4. Deploy, copy the public URL and update the sitemap and robots files to use that domain.

### Part 3 update - 2 November 2026

- **Homepage (`index.html`):** Replaced the generic browser title with a descriptive title; added meta description, keywords, author and theme metadata; retained the original brand image and tagline; added a clear hero section and featured image gallery; added links to the products and enquiry pages; added a fictional-project notice and footer links.
- **Enquiries page (`enquires.html`):** Rebuilt invalid markup, including stray closing tags and an incomplete header/navigation structure; moved navigation into the shared header; added a descriptive page title and SEO metadata; improved heading and paragraph structure; retained the bakery story and images with improved alt text; created an enquiry form with name, email, enquiry category, optional date and details; added browser validation and JavaScript sample responses by enquiry category.
- **Contact page (`contact.html`):** Added a valid HTML document structure and shared navigation; added descriptive SEO metadata; kept the supplied example contact information and opening hours; added a general-message form with name, email, optional phone, message type and message text; added HTML validation and JavaScript that prepares an email draft; added an illustrative OpenStreetMap embed and explained that the location is not a verified bakery address.
- **Products page (`products.html`):** Replaced the former “under construction” page with sample product listings generated dynamically from JavaScript; added a search field, sort options and a live product count; added a no-results message and clearly labelled the product/pricing data as fictional.
- **JavaScript (`js_assets/main.js`):** Added dynamic DOM rendering, search and sort functionality, lightbox interactions, keyboard Escape support, form validation handling, form response messaging, email subject/body compilation and automatic footer year updates.
- **CSS (`css/myfirststyle.css`):** Preserved the peach, cream and green brand palette; improved layout, typography, cards, forms, navigation, footer and focus styles; fixed the invalid `max-width: 480-px` media query by replacing it with valid responsive breakpoints; added responsive grids for mobile/tablet/desktop and reduced-motion support.
- **SEO files:** Added `robots.txt` and `sitemap.xml` 
- **Documentation:** Added project overview, page descriptions, feature notes, technology list, directory structure, local setup, testing checklist, deployment instructions, SEO notes, form limitations and references to this README.

### Part 2 feedback corrections

- **Feedback:** [README document is incomplete or lacks detail.].
- **Change made:** [Updated the README].

## 9. References

- Mozilla. (n.d.). *HTML forms: A guide to forms*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
- Mozilla. (n.d.). *Constraint validation*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- Mozilla. (n.d.). *Document Object Model (DOM)*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- Mozilla. (n.d.). *Using the Fetch API*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Google. (n.d.). *SEO Starter Guide*. Google Search Central. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google. (n.d.). *Create and submit a sitemap*. Google Search Central. https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google. (n.d.). *robots.txt introduction*. Google Search Central. https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google maps contributors. (n.d.). *Google maps*. https://maps.app.goo.gl/6fVTACxzrk1kvJha8/ (Map data and embedded map display.)
- Sky High Bakery. (2026). *Website images and original project materials* [Course project assets supplied by the student].

