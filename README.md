# ORSIF Homepage Redesign

Conversion-optimized landing page for ORSIF (Organization for Occupational Radiation Safety in Interventional Fluoroscopy).

## Live Site

**Live URL:** https://orsif-homepage.vercel.app

## Overview

This is a complete homepage redesign focused on:
- Maximizing membership signup conversions
- Communicating ORSIF's unique dual-hazard mission (radiation + musculoskeletal)
- Professional healthcare aesthetic with evidence-based messaging
- Mobile-first responsive design

## Key Features

- **10-section landing page architecture** optimized for conversion
- **Clear CTAs** throughout with single primary action per viewport
- **Impact statistics** with compelling data visualization
- **Audience segmentation** (Clinicians / RSOs / Institutions)
- **Social proof** with expert quotes and organizational credibility
- **Newsletter capture** for secondary conversion
- **Responsive design** optimized for all devices

## Technology Stack

- Pure HTML5, CSS3, and vanilla JavaScript
- No build step required
- Deployed to Vercel with auto-deploy on push

## Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
python -m http.server 8000
# Visit http://localhost:8000
```

## File Structure

```
ORSIF-website/
├── index.html          # Main homepage
├── css/
│   └── styles.css     # Full responsive stylesheet
├── js/
│   └── main.js        # Navigation, scroll effects, interactions
├── images/
│   ├── hero-bg.jpg    # Hero background
│   ├── orsif_*.png    # Logo variants
│   ├── favicon.png    # Site favicon
│   └── icons/         # SVG icons for sections
├── quotes/            # Source transcripts for testimonials
└── README.md          # This file
```

## Deployment

This site is deployed via Vercel with GitHub integration:

1. Push changes to `main` branch
2. Vercel auto-deploys within ~60 seconds
3. Site updates at the custom domain

## Integration with ORSIF Ecosystem

This homepage links to:
- **Main Wix site:** https://orsif.org (membership backend)
- **FAQs:** https://faqs.orsif.org
- **US Guidelines:** https://guidelines-us.orsif.org
- **International Guidelines:** https://guidelines-international.orsif.org

"Join" buttons link to the Wix membership signup page to preserve existing member data.

## Design Sources

- [Healthcare Landing Page Best Practices - Landingi](https://landingi.com/landing-page/healthcare-best-practices/)
- [Nonprofit Landing Page Guide - Trajectory](https://www.trajectorywebdesign.com/blog/nonprofit-landing-page-best-practices)
- Women As One (womenasone.org) - reference site for nonprofit patterns

---

*Last Updated: January 4, 2026*
*Created with Claude Code*
