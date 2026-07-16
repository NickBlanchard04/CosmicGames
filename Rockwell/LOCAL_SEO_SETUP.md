# Rockwell Falls Local SEO Setup

The website code is prepared for local search, reviews, Search Console, and GA4.

## Google Analytics 4

1. Create or select the Rockwell Falls General Store GA4 property.
2. Create a web data stream for `https://builtbyblanch.com/Rockwell/`.
3. Copy the measurement ID beginning with `G-`.
4. Set that value in `index.html`:

   ```html
   <meta name="google-analytics-id" content="G-XXXXXXXXXX" />
   ```

The site automatically tracks page views plus clicks to Google reviews, Facebook reviews, directions, and phone calls.

## Google Search Console

1. Add the URL-prefix property `https://builtbyblanch.com/Rockwell/`.
2. Verify it using the installed GA4 tag or Google's HTML verification tag.
3. Submit `https://builtbyblanch.com/Rockwell/sitemap.xml`.
4. Inspect `https://builtbyblanch.com/Rockwell/` and request indexing.

## Google Business Profile

The Google Maps listing currently points to Facebook. In the owner-managed Business Profile, update the website field to:

`https://builtbyblanch.com/Rockwell/`

Keep the business name, address, phone number, and hours aligned with the website:

- Rockwell Falls General Store
- 4123 Rockwell St, Hadley, NY 12835
- (518) 696-4443
- Mon-Wed: 7 AM-4 PM
- Thu-Sun: 7 AM-7 PM

## Reviews

- Google Maps: `https://www.google.com/maps/place/Rockwell+Falls+General+Store/@43.3173043,-73.8481202,17z/data=!4m6!3m5!1s0x89dfb5fc072ac905:0x74f19c80636425d2!8m2!3d43.3173043!4d-73.8481202`
- Facebook reviews: `https://www.facebook.com/RockwellFallsGeneralStore/reviews`

Do not copy external ratings into structured data unless they are kept accurate and the markup follows Google's review-snippet policies.
