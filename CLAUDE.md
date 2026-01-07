# CLAUDE.md

This file provides guidance to Claude Code when working with files in this repository.

## Project Overview

This is the **ORSIF Homepage Redesign** - a conversion-optimized landing page for ORSIF (Organization for Occupational Radiation Safety in Interventional Fluoroscopy). The goal is to maximize membership signups while communicating ORSIF's unique dual-hazard mission (radiation + musculoskeletal).

## Project Status: DEPLOYED & LIVE

**Live Site:** https://orsif-homepage.vercel.app
**GitHub Repo:** https://github.com/screendoorstudio/orsif-homepage
**Vercel Team:** ORSIF (Pro account)

### Completed (January 5, 2026):
- [x] Research phase: Landing page best practices, Women As One reference analysis, healthcare nonprofit patterns
- [x] Design phase: 10-section architecture optimized for conversion
- [x] Built complete HTML/CSS/JS static site
- [x] Copied and optimized brand assets (logos, icons, hero image)
- [x] Extracted expert quotes from SIRP Symposium transcripts
- [x] Deployed to Vercel via GitHub integration
- [x] Auto-deploy on push configured
- [x] Updated nav logo to full white ORSIF logo (replacing shield + text)
- [x] Updated hero logo to horizontal white version with tagline
- [x] Split hero headline onto two lines for better visual impact

### Completed (January 7, 2026):
- [x] Swapped section order: "Two Threats. One Mission." now appears before "The Evidence Is Clear"

### Pending (Future Sessions):
- [ ] Team review and feedback incorporation
- [ ] Custom domain configuration (www.orsif.org or similar)
- [ ] A/B testing setup
- [ ] Additional pages (About, Resources, Contact, etc.)
- [ ] Integration with Wix membership backend

---

## File Structure

```
ORSIF-website/
├── CLAUDE.md                    # This file
├── README.md                    # Project overview and deployment info
├── .gitignore                   # Excludes image-bank, .DS_Store, large JSON files
├── index.html                   # Main homepage (10 sections)
├── css/
│   └── styles.css              # Full responsive stylesheet (~1200 lines)
├── js/
│   └── main.js                 # Navigation, scroll effects, animations
├── images/
│   ├── hero-bg.jpg             # Hero background (cath lab team)
│   ├── favicon.png             # ORSIF shield favicon
│   ├── orsif_full_logo_white.png     # Nav logo (full wordmark)
│   ├── orsif_logo_tagline_horizontal_white.png  # Hero logo (with tagline)
│   ├── orsif_logo_white.png    # Footer logo
│   ├── orsif_shield_mark_white.png   # Shield mark only
│   ├── orsif_shield_mark_color.png
│   └── icons/                  # SVG icons for sections
│       ├── Education.svg
│       ├── Article_Directory.svg
│       ├── Radiation_Exposure.svg
│       ├── Orthopedic_Stress.svg
│       ├── Member_Area.svg
│       ├── Advocacy.svg
│       ├── Events.svg
│       ├── Shielding.svg
│       ├── Radiation_Awareness.svg
│       ├── Radiation_Safety_Mindfulness.svg
│       └── ... (15 total)
├── quotes/                     # Source transcripts for testimonials
│   ├── 9.26_1_gs_session_1_*.vtt   # SIRP Session 1: Scatter radiation
│   ├── 9.26_2_gs_session_2_*.vtt   # SIRP Session 2: DNA/cellular effects
│   ├── 9.26_3_gs_session_3_*.vtt   # SIRP Session 3: Ergonomics
│   ├── 9.26_4_gs_session_4_*.vtt   # SIRP Session 4: Team protection
│   └── 9.27_1_gs_session_5_*.vtt   # SIRP Session 5: Women in practice
├── ORSIF-logos-for-web/        # Official ORSIF logo files (not tracked in git)
│   ├── *_full_logo_white.png       # Full wordmark, white
│   ├── *_full_logo_full color.png  # Full wordmark, color
│   ├── *_with tagline_*.png        # Versions with tagline
│   └── orsif_shield_mark_*.png     # Shield mark only
└── image-bank/                 # Source images (not tracked in git)
    └── _Images-icons/          # Original photos, icons, logos
```

---

## Homepage Architecture (10 Sections)

| Section | Content | CTA |
|---------|---------|-----|
| 1. Hero | "Protect Your Career. Protect Your Life." | Join Free + Learn About Risks |
| 2. Dual Hazard | Radiation + Musculoskeletal differentiator | — |
| 3. Statistics | 24M+ / 6.1% / 85% / 59.8% + expert quote | Read the Research |
| 4. Audience Paths | Clinicians / RSOs / Institutions | Resources for each |
| 5. Membership Value | 6-item grid: Education, Guidelines, Research, Tools, Events, Advocacy | Get Free Access Now |
| 6. Resources Preview | 3 cards: FAQs, US Guidelines, International | Browse All Resources |
| 7. Credibility | Testimonial + sidebar (Founded, Status, Advisory, Research) | — |
| 8. Newsletter | Email capture form | Subscribe |
| 9. Final CTA | "Your Patients Trust You With Their Lives" | Join ORSIF Free |
| 10. Footer | Links, social, legal, 501(c)(3) status | — |

---

## Design System

### Brand Colors
```css
--color-primary: #0d4d5f      /* Dark teal - headers, nav */
--color-primary-light: #6b9dab /* Light teal - accents */
--color-cta: #27ae60           /* Green - all primary CTAs */
--color-danger: #dc3545        /* Red - statistics emphasis */
```

### Typography
- Font: Inter (Google Fonts)
- H1: 3.5rem desktop / 2.25rem mobile
- H2: 2.5rem desktop / 2rem mobile
- Body: 16px

### Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## Key Statistics (Social Proof)

| Metric | Value | Source |
|--------|-------|--------|
| Annual procedures | 24M+ | US fluoroscopy procedures |
| Cancer incidence | 6.1% | Among interventional cardiologists |
| Left-brain tumors | 85% | Predominance in affected operators |
| Orthopedic injuries | 59.8% | Healthcare workers reporting problems |
| Economic cost | $75-100M/year | Annual US cost estimate |

---

## Expert Quotes (from SIRP Symposium)

**Dr. Audra Kocher, Brigham and Women's Hospital (Session 3):**
> "60% of respondents had at least one orthopedic injury with a third stating they had experienced lumbar spinal injuries. 20% were forced to limit their time in the Cath lab... Moreover, there was a threefold higher risk of radiation related pathology to interventional cardiologists as compared with the general population."

**DNA/Cellular Research Presenter (Session 2):**
> "Every 10 millisieverts of low-dose ionizing radiation has a 3% increase in the risk of age and sex adjusted cancer."

**Dr. Andy Rogers, Nottingham University (Session 1):**
> "We're interested in the real world. What does this mean for staff?"

---

## Deployment & Updates

### Auto-Deploy Workflow
1. Make changes to files in this directory
2. Commit: `git add . && git commit -m "Description"`
3. Push: `git push`
4. Vercel auto-deploys within ~60 seconds

### Local Development
```bash
cd /Users/jameswaitzman/Documents/_Claude\ Projects/ORSIF/ORSIF-website
python3 -m http.server 8080
# Visit http://localhost:8080
```

---

## Integration with ORSIF Ecosystem

This homepage links to existing ORSIF properties:

| Property | URL | Purpose |
|----------|-----|---------|
| Main Wix Site | https://orsif.org | Membership backend, login |
| FAQs | https://faqs.orsif.org | 174 AEO-optimized FAQs |
| US Guidelines | https://guidelines-us.orsif.org | Federal & state regulations |
| International | https://guidelines-international.orsif.org | Global standards |

**Wix Integration Strategy:** "Join" buttons link directly to Wix membership signup page, preserving existing member data without migration.

---

## Research Sources Used

### Landing Page Best Practices
- [Healthcare Landing Page Best Practices - Landingi](https://landingi.com/landing-page/healthcare-best-practices/)
- [Nonprofit Landing Page Guide - Trajectory](https://www.trajectorywebdesign.com/blog/nonprofit-landing-page-best-practices)
- [Conversion Rate Optimization Healthcare - FetchFunnel](https://www.fetchfunnel.com/conversion-rate-optimization-for-healthcare/)

### Reference Site
- Women As One (womenasone.org) - analyzed for nonprofit healthcare patterns

### Conversion Benchmarks
- Healthcare landing pages: ~7.4% average conversion
- Optimized nonprofit pages: 15-25% conversion
- Target: 10%+ (top tier for healthcare)
- Mobile traffic: 65% of nonprofit actions come from mobile

---

## Notes for Resuming Work

### Key Files to Edit
- `index.html` - All page content and structure
- `css/styles.css` - All styling (CSS variables at top)
- `js/main.js` - Interactions and animations

### Common Tasks
- **Change copy:** Edit text directly in `index.html`
- **Update colors:** Modify CSS variables in `:root` block of `styles.css`
- **Add sections:** Follow existing section patterns in HTML
- **Update images:** Replace files in `images/` folder

### Image Sources
- Hero and photos: `image-bank/_Images-icons/` (not tracked in git)
- SVG icons: `image-bank/_Images-icons/_icons/_Healthcare_Advocacy_Icons_SVG/`
- Logos: `ORSIF-logos-for-web/` (local copy, not tracked in git)

---

*Last Updated: January 7, 2026*
*Live Site: https://orsif-homepage.vercel.app*
*Created with Claude Code (Opus 4.5)*
