# Team.css - Redundant Styles Analysis

## Summary
Analyzed 3 JSX files in the team folder: `Team.jsx`, `otherTeam.jsx`, and `BoardofDirectors.jsx`. Below are all CSS classes that are **NOT USED** by any of these components.

---

## UNUSED/REDUNDANT CSS CLASSES

### 1. **Old Board Section Styles** (Team.jsx doesn't use these)
- `.board` - Old hero section styling
- `#board` - Old board ID selector
- `.board-fresh` - Used only by BoardofDirectors.jsx
- `.board-content-wrapper` - Used only by BoardofDirectors.jsx
- `.board-subtitle` - Used only by BoardofDirectors.jsx

**Status:** Partially used (only in BoardofDirectors)

---

### 2. **Background Decorations** (BoardofDirectors only)
- `.bg-decoration` - Animated background circles
- `.bg-decoration-1` - Red circle top right
- `.bg-decoration-2` - Red circle bottom left

**Status:** Used only in BoardofDirectors → **SAFE TO KEEP**

---

### 3. **Director Profile Card Styles** (BoardofDirectors only)
- `.director-profile-card` - Main card container
- `.director-profile-card::before` - 3D depth layer
- `.director-profile-card::after` - 3D shadow layer
- `.director-profile-card:hover` - Hover state (currently disabled)
- `.director-profile-card:hover::after` - Hover shadow
- `.director-profile-card:hover .profile-image-container` - Hover image effect
- `.director-profile-card:hover .profile-content` - Hover content effect
- `.director-profile-card:hover .accent-dot` - Hover dot effect
- `.hexagon-accent` - Hexagon background shape
- `.profile-image-container` - Image wrapper
- `.profile-image` - Image styling
- `.profile-gradient-overlay` - Image overlay
- `.profile-order-badge` - Order badge (hidden with `display: none !important`)
- `.profile-content` - Card content section
- `.profile-name` - Director name
- `.profile-title` - Director title
- `.profile-bio` - Director bio
- `.accent-dot` - Floating dots
- `.accent-dot-1` - Red dot
- `.accent-dot-2` - Dark dot
- `.click-indicator` - Click hint text

**Status:** Used only in BoardofDirectors → **SAFE TO KEEP**

---

### 4. **Director Modal Styles** (BoardofDirectors only)
- `.director-modal-overlay` - Modal backdrop
- `.director-modal-content` - Modal container
- `.modal-close-btn` - Close button
- `.modal-grid` - Modal grid layout
- `.modal-image-section` - Image section
- `.modal-image` - Modal image
- `.modal-badge` - Modal badge (hidden)
- `.modal-content-section` - Content section
- `.modal-name` - Modal name
- `.modal-title` - Modal title
- `.modal-bio-section` - Bio section
- `.modal-bio-label` - Bio label
- `.modal-bio` - Bio text
- `.view-more-btn` - View more button
- `.modal-expertise-section` - Expertise section
- `.modal-expertise-label` - Expertise label
- `.expertise-tags` - Tags container
- `.expertise-tag` - Individual tag

**Status:** Used only in BoardofDirectors → **SAFE TO KEEP**

---

### 5. **Team Cards Styling** (Team.jsx & otherTeam.jsx)
These styles are **ACTIVELY USED** in both Team.jsx and otherTeam.jsx:
- `.team-img` - ✅ USED
- `.card` - ✅ USED
- `.card::before` - ✅ USED (for 3D effects)
- `.card::after` - ✅ USED (for 3D shadow)
- `.card-img-top` - ✅ USED
- `.card-body` - ✅ USED (Bootstrap)
- `.card-title` - ✅ USED
- `.card-subtitle` - ✅ USED
- `.card-text` - ✅ NOT USED (commented out in JSX)

**Status:** Safe to keep (mostly used)

---

### 6. **CTA Section Styles** (BoardofDirectors only)
- `.cta-section` - CTA background
- `.cta-title` - CTA title
- `.cta-subtitle` - CTA subtitle

**Status:** Used only in BoardofDirectors → **SAFE TO KEEP**

---

### 7. **Directors Showcase Grid** (BoardofDirectors only)
- `.board-directors-showcase` - Section background
- `.directors-showcase-grid` - Grid container

**Status:** Used only in BoardofDirectors → **SAFE TO KEEP**

---

## TRULY REDUNDANT STYLES (Safe to Remove)

### 1. **Unused Card Text Style**
```css
.card-text {
  font-size: 0.9rem;
  color: #606060;
  line-height: 1.5;
  transform-style: preserve-3d;
}
```
**Reason:** The card text is commented out in both Team.jsx and otherTeam.jsx and never rendered.

---

### 2. **Disabled Hover Effects** (Can be consolidated)
Multiple hover states throughout the CSS are marked as `/* Hover effect disabled */`:
- `.director-profile-card:hover`
- `.director-profile-card:hover::after`
- `.director-profile-card:hover .profile-image-container`
- `.card:hover`
- `.card:hover::after`
- `.card:hover .card-img-top`
- `.card:hover .card-body`

**Recommendation:** Remove these empty hover selectors to reduce CSS clutter.

---

### 3. **Hidden Badges** (can be removed)
```css
.profile-order-badge {
  display: none !important;
}

.modal-badge {
  display: none !important;
}
```
**Reason:** These have `display: none !important`, meaning they're never shown. If they're not needed, remove them entirely.

---

### 4. **Unused Media Query Breakpoints**
The CSS includes multiple responsive breakpoints with media queries for elements that don't exist in the current JSX:
- Media queries for `.board` (old design)
- Media queries for `.board-fresh` (only used in BoardofDirectors)

**Reason:** While BoardofDirectors uses `.board-fresh`, the old `.board` breakpoints are truly redundant.

---

## RECOMMENDATIONS

### ✅ SAFE TO KEEP
- All BoardofDirectors-specific styles (director cards, modals, etc.)
- All Team.jsx and otherTeam.jsx card styles (except .card-text)
- All responsive design media queries that apply to active components

### 🗑️ SHOULD REMOVE
1. **`.card-text`** - Never used (commented out in JSX)
2. **Empty hover effect blocks** - They have no actual styles:
   - `.director-profile-card:hover` and similar empty blocks
   - `.card:hover` and similar empty blocks
3. **Hidden badges** - Remove or uncomment if needed:
   - `.profile-order-badge` (has `display: none !important`)
   - `.modal-badge` (has `display: none !important`)
4. **Old `.board` media queries** - Only target deprecated design

### 🔧 OPTIMIZATION OPPORTUNITIES
1. Consolidate the `overflow: visible !important` usage
2. Remove `right: -8px` on `.card::after` that was causing the scrollbar issue
3. Consider merging duplicate responsive definitions
4. Simplify 3D effect code (many disabled hover states)

---

## FILE STRUCTURE
```
Team.css Components:
├── Old Board Design (REDUNDANT)
├── Team Images (.team-img) ✅
├── Director Profile Cards (BoardofDirectors) ✅
│   ├── Card styling
│   ├── Modal styling
│   └── Responsive design
├── Team Cards (Team.jsx & otherTeam.jsx) ✅
│   ├── .card, .card-title, .card-subtitle
│   ├── .card-img-top
│   └── .card-text (UNUSED)
└── CTA Section (BoardofDirectors) ✅
```

---

**Total CSS Lines:** 1,246
**Estimated Removable Lines:** ~100-150 (mostly empty hover states and redundant media queries)
