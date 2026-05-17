import Slide01_Opening from './Slide01_Opening.jsx'
import Slide02_LensIntro from './Slide02_LensIntro.jsx'
import SectionOne from './SectionOne.jsx'
import SlideContext_Foundation from './SlideContext_Foundation.jsx'
import Slide03_WhatWeBuilt from './Slide03_WhatWeBuilt.jsx'
import Slide_FoundationWhyItMatters from './Slide_FoundationWhyItMatters.jsx'
import SectionTwo from './SectionTwo.jsx'
import SlideContext_Relationship from './SlideContext_Relationship.jsx'
import Slide06_NumbersOpener from './Slide06_NumbersOpener.jsx'
import Slide_OperatingLeverage from './Slide_OperatingLeverage.jsx'
import Slide08_RealProduct from './Slide08_RealProduct.jsx'
import Slide_BusinessScale from './Slide_BusinessScale.jsx'
import Slide_PrivateAviation from './Slide_PrivateAviation.jsx'
import Slide_SGAGrowth from './Slide_SGAGrowth.jsx'
import SectionThree from './SectionThree.jsx'
import SlideContext_WhatsAhead from './SlideContext_WhatsAhead.jsx'
import Slide_ThePromise from './Slide_ThePromise.jsx'
import Slide_FourTenets from './Slide_FourTenets.jsx'
import Slide_Tenet01_ClientFirst from './Slide_Tenet01_ClientFirst.jsx'
import Slide_Tenet02_Personalization from './Slide_Tenet02_Personalization.jsx'
import Slide_Tenet03_Detail from './Slide_Tenet03_Detail.jsx'
import Slide_Tenet04_Consistency from './Slide_Tenet04_Consistency.jsx'
import Slide_TenetToYear from './Slide_TenetToYear.jsx'
import Slide13_YearAhead from './Slide13_YearAhead.jsx'
import Slide_YA01_SharedData from './Slide_YA01_SharedData.jsx'
import Slide_YA02_WelcomeWings from './Slide_YA02_WelcomeWings.jsx'
import Slide_YA03_Interactive from './Slide_YA03_Interactive.jsx'
import Slide14_Closing from './Slide14_Closing.jsx'

export const slides = [
  // 1. Opening
  { Component: Slide01_Opening, title: 'Opening', tone: 'gradient' },
  // 2. Setup: what changed underneath the growth
  { Component: Slide02_LensIntro, title: 'Setup', tone: 'dark' },

  // ===== THE FOUNDATION =====
  // 3. Foundation opener (Dawn)
  { Component: SectionOne, title: 'The Foundation', tone: 'earth' },
  // 4. Foundation Context: more complex itineraries, etc.
  { Component: SlideContext_Foundation, title: 'Foundation Context', tone: 'light', lens: 'dawn' },
  // 5. What Changed: BuildTravel, reconfirmations, ownership, handoffs
  { Component: Slide03_WhatWeBuilt, title: 'What Changed', tone: 'light', lens: 'dawn' },
  // 6. Why It Matters: client should never have to feel the moving parts
  { Component: Slide_FoundationWhyItMatters, title: 'Why It Matters', tone: 'light', lens: 'dawn' },

  // ===== THE RELATIONSHIP =====
  // 7. Relationship opener (Midday)
  { Component: SectionTwo, title: 'The Relationship', tone: 'water' },
  // 8. Known: by name, by preference, by history
  { Component: SlideContext_Relationship, title: 'Known', tone: 'light', lens: 'ocean' },
  // 9. Repeat: ~50% multi-trip
  { Component: Slide06_NumbersOpener, title: 'Repeat Behavior', tone: 'light', lens: 'ocean' },
  // 10. Full-Service: 32 → 48%
  { Component: Slide_OperatingLeverage, title: 'Full-Service Relationships', tone: 'light', lens: 'ocean' },
  // 11. Complexity: 3×
  { Component: Slide08_RealProduct, title: 'Complexity', tone: 'dark' },
  // 12. Business Scale: $6.9M → $15.6M → $24.8M + $1.1M → $2.45M net income
  { Component: Slide_BusinessScale, title: 'Business Scale', tone: 'light', lens: 'ocean' },
  // 13. Private Aviation: $5.7M → $10.9M → $16.7M (still within The Relationship)
  { Component: Slide_PrivateAviation, title: 'Private Aviation', tone: 'light', lens: 'ocean' },
  // 14. SG&A growth: we put it back in — $1.26M → $2.25M operating spend
  { Component: Slide_SGAGrowth, title: 'SG&A Growth', tone: 'light', lens: 'ocean' },

  // ===== THE FUTURE =====
  // 14. Future opener (Sunset)
  { Component: SectionThree, title: 'The Path', tone: 'horizon' },
  // 15. The Path content: becoming more involved in the journey itself
  { Component: SlideContext_WhatsAhead, title: 'The Path Detail', tone: 'light', lens: 'sunset' },
  // 16. The FlySmoother Standard: Impeccable / Brilliant / Extraordinary + Known/Cared/Confident
  { Component: Slide_ThePromise, title: 'The FlySmoother Standard', tone: 'light', lens: 'sunset' },
  // 17. The Four Tenets overview
  { Component: Slide_FourTenets, title: 'The Four Tenets', tone: 'light', lens: 'sunset' },
  // 18. Tenet 1 — Client Comes First
  { Component: Slide_Tenet01_ClientFirst, title: 'Tenet 01 · Client Comes First', tone: 'light', lens: 'sunset' },
  // 19. Tenet 2 — Personalization
  { Component: Slide_Tenet02_Personalization, title: 'Tenet 02 · Personalization', tone: 'light', lens: 'sunset' },
  // 20. Tenet 3 — Detail Orientation
  { Component: Slide_Tenet03_Detail, title: 'Tenet 03 · Detail Orientation', tone: 'light', lens: 'sunset' },
  // 21. Tenet 4 — Consistency
  { Component: Slide_Tenet04_Consistency, title: 'Tenet 04 · Consistency', tone: 'light', lens: 'sunset' },
  // 22. Transition — Tenets to Year Ahead
  { Component: Slide_TenetToYear, title: 'Tenets, held', tone: 'light', lens: 'sunset' },
  // 23. Year Ahead overview
  { Component: Slide13_YearAhead, title: 'The Year Ahead', tone: 'light', lens: 'sunset' },
  // 23. YA 1 — Shared data backbone
  { Component: Slide_YA01_SharedData, title: 'YA 01 · Shared data backbone', tone: 'light', lens: 'sunset' },
  // 24. YA 2 — Welcome Wings to $5M
  { Component: Slide_YA02_WelcomeWings, title: 'YA 02 · Welcome Wings to $5M', tone: 'light', lens: 'sunset' },
  // 25. YA 3 — Interactive design
  { Component: Slide_YA03_Interactive, title: 'YA 03 · Interactive client itineraries', tone: 'light', lens: 'sunset' },

  // 26. Closing: built for the next phase. together.
  { Component: Slide14_Closing, title: 'Closing', tone: 'dark' },
]
