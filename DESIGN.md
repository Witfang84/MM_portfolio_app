# Design System Strategy: Bold Badges

## 1. Overview & Creative North Star
**Creative North Star: "The Graphic Manifesto"**

This design system rejects the "polite" softness of modern SaaS interfaces in favor of raw, unapologetic impact. By merging the structural honesty of Neo-Brutalism with a minimalist, high-end editorial sensibility, we create a "Digital Poster" experience. 

The system moves beyond standard templates through **Intentional Friction**: using heavy strokes and aggressive contrast to demand attention. We break the grid using "Staggered Stacking"—where elements don't just sit next to each other; they collide and overlap. This isn't just a UI; it’s a brand statement that feels tactile, permanent, and authoritative.

---

## 2. Colors: High-Voltage Contrast
The color palette is built on a foundation of absolute blacks (`#0e0e0e`) and stark, clean surfaces, punctuated by "high-voltage" accents.

### The "Thick-Stroke" Rule
Contrary to standard soft-UI, this system **mandates** the use of heavy structural lines. Prohibit 1px borders. All functional containers must use a minimum 3px to 5px solid border using the `inverse_surface` (#0e0e0e) token. 

### Surface Hierarchy & Layering
We do not use shadows to create depth; we use **Hard Offsets**.
- **The Stacking Effect:** To create a "lifted" card, place a `surface_container_lowest` (#ffffff) box over a solid `primary` (#645d00) or `secondary` (#006a26) block, offset by 8px to the bottom right.
- **Surface Nesting:** Use `surface` (#f6f6f6) as the canvas. Use `surface_container` (#e8e8e8) for utility zones (like sidebars). High-priority interactive zones should pop with `primary_container` (#fdec00).

### Signature Textures
Avoid traditional gradients. Instead, use **Dithered Transitions** or hard-stop color splits. For hero CTAs, utilize a hard 50/50 split between `primary` and `secondary_fixed` to create visual vibration that feels intentional and "custom-built."

---

## 3. Typography: The Black Weight Authority
Typography is the primary visual engine of the system. We prioritize weight and scale over decorative imagery.

*   **Display (Space Grotesk - Black Weight):** Use `display-lg` (3.5rem) for hero statements. Kerning should be tightened (tracking: -0.02em) to create a "block" of text that feels like a physical object.
*   **Headlines (Space Grotesk - Bold):** Headlines must be high-contrast. Use `on_surface` (#2f2f2f) against `primary_container` (Yellow) highlights to pull the eye to key value propositions.
*   **Body (Work Sans - Medium/Regular):** `body-lg` (1rem) provides the necessary breathing room. While headlines are aggressive, body text must remain highly legible to balance the brutalist aesthetic.
*   **Labels (Inter - Bold):** Labels are treated as "Micro-Badges." Use `label-md` in all caps with increased letter spacing (+0.05em) to differentiate from body copy.

---

## 4. Elevation & Depth: Neo-Brutalist "Hard-Shadows"
Traditional elevation (Z-axis) is replaced by **X/Y Offset Geometry**.

*   **The Hard-Shadow Principle:** Forbid Gaussian blurs. To convey that an element is interactive, apply a solid, 100% opaque offset "shadow" using the `inverse_surface` (#0e0e0e) token.
*   **Tonal Layering:** Use `surface_dim` (#d4d4d4) for "pressed" states. When a button is clicked, it should physically move 4px down and 4px right, losing its hard shadow to simulate tactile compression.
*   **The Ghost Border Fallback:** If a layout requires a subtle division (e.g., inside a data table), use `outline_variant` (#adadad) at 100% opacity, but strictly at a 2px width. Never use 1px or semi-transparent lines.

---

## 5. Components: The Bold Primitives

### Buttons
*   **Primary:** `primary_container` (Yellow) background, 4px `inverse_surface` (Black) border, hard black offset shadow. Text in `on_primary_fixed` (Deep Olive).
*   **Secondary:** `secondary_container` (Green) background, 4px black border.
*   **Tertiary:** `tertiary_fixed` (Pink) background, 4px black border.
*   **States:** On hover, the element should "pop" further out (increase offset). On active, the offset drops to 0.

### Input Fields
*   **Styling:** Square corners (`0px` radius). `surface_container_lowest` (#ffffff) background with a heavy 3px black border.
*   **Active State:** The border changes to `tertiary` (#ac0088) and the label "jumps" out of the frame into a dedicated badge.

### Cards & Badges
*   **Construction:** Forbid dividers. Separate content using heavy horizontal rules (4px black) or by alternating background "pop" colors (`primary_fixed` vs `secondary_fixed`).
*   **Badges:** This is the core of "Bold Badges." Every tag or category must be encased in a 2px black border with a vibrant background color.

### Navigation
*   **The "Tab" System:** Navigation items should look like physical file tabs. Use `surface_container_high` for inactive tabs and `primary_container` for the active selection, both with 3px black perimeters.

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace sharp `0px` corners for everything. Softness is the enemy of this system.
*   **Do** use "Vibration" pairings: Pink (`tertiary_fixed`) text on Green (`secondary_fixed`) backgrounds for high-impact alerts.
*   **Do** allow elements to overlap the margins. An image "breaking" out of its container adds to the editorial feel.

### Don't:
*   **Don't** use border-radius. Every corner in the system must be a sharp 90-degree angle.
*   **Don't** use subtle grey shadows or soft gradients. If it’s not high-contrast, it doesn't belong.
*   **Don't** use thin icons. Use "Heavy" or "Black" icon weights (minimum 3pt stroke) to match the typography.
*   **Don't** use more than three vibrant "pop" colors on a single screen. Use the `surface` tokens to provide "white space" so the colors don't become visually exhausting.