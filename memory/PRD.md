# PRD — Area 51 Landing Page

## Original Problem Statement
Use the attached images to design a landing page for **Area 51**.

## User Choices Captured
- Goal: Showcase venue + drive inquiries (WhatsApp)
- Theme: Dark, logo-color-led (black + amber), mystery + FOMO tone
- Sections: Hero, About, Gallery, Testimonials, Contact
- Primary CTA: Open WhatsApp chat
- Must include: logo, all attached photos, location/map link, address, timings, Instagram
- Key amenities to highlight:
  1. Pickleball (indoor & outdoor)
  2. All day and night cafe
  3. Snooker area

## Architecture Decisions
- Stack retained: React frontend + FastAPI backend + MongoDB template (backend unchanged)
- Single-page landing implemented in `frontend/src/App.js`
- Styling via custom CSS in `frontend/src/App.css` with imported brand fonts in `frontend/src/index.css`
- Motion + interaction: `framer-motion` and `react-fast-marquee`
- External asset strategy: user-provided public image URLs used directly for hero, amenities, and gallery
- Compliance: `data-testid` added on interactive and critical information elements

## What’s Implemented
- Brand-led dark landing page for Area 51 using uploaded logo and venue photos
- Hero section with mystery + FOMO copy and WhatsApp primary CTA
- Sticky top navigation with anchors to About, Amenities, Gallery, Contact
- Amenities section with the 3 requested offerings
- Real-photo gallery from uploaded image set
- Testimonials section (social-proof style)
- Contact section with map link, full address, open-late timing, Instagram, and WhatsApp number
- Floating WhatsApp CTA for quick conversion
- Responsive behavior validated on desktop/mobile; no horizontal overflow found

## Iteration Update (Background + Gallery Refinement)
- Updated Hero background to your newly shared dark Area 51 sign image.
- Added your newly shared night-lamps image as the **About section background**.
- Reduced repetitive cafe/outdoor seating visuals in gallery and kept only 2 strongest cafe-style shots.
- Shifted pickleball amenity image framing downward for better composition in the amenities section.
- Increased background visibility in both sections by reducing dark overlays and improving image brightness/contrast framing.
- Fine-tuned hero background darker again for improved text readability while keeping the sign visible.
- Enlarged hero logo and generated a transparent-style logo asset (`/frontend/public/logo-transparent.png`) so black edges merge with the dark background.
- Removed the last bottom image from the page and rebalanced the contact section to a clean single-column layout.

## Testing Status
- Self-tested with screenshot flow on public URL
- Testing agent run complete: `/app/test_reports/iteration_1.json`
- Result: frontend pass, no blocking issues

## Prioritized Backlog
### P0 (High)
- Optional copy micro-polish for sharper student-targeted hooks
- Add one-click prefilled WhatsApp intents by purpose (booking/query/events)

### P1 (Medium)
- Add short video reel section for stronger QR-scan conversion
- Add live Google Maps embed (in addition to map link)

### P2 (Low)
- Add seasonal events/promotions strip
- Add lightweight analytics events for CTA tracking

## Next Tasks
1. Confirm if testimonials should be replaced with real customer quotes.
2. Confirm if pricing/offer section should be introduced for conversion uplift.
3. Add QR campaign-specific UTM tracking for WhatsApp and Instagram links.
