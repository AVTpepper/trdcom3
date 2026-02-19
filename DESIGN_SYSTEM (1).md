# Design System & Implementation Guide

This document outlines the design system, responsive strategy, and comprehensive CSS class usage for the **KOMMÆRSJ** website. Use this as a strict reference when prompting AI assistants (like GitHub Copilot) to ensure consistency across the project.

## 1. Responsive Design Strategy

The project uses **Tailwind CSS's Mobile-First** approach.

*   **Default styles** apply to mobile screens (0px and up).
*   **`md:` prefix** (min-width: 768px) is the primary breakpoint for Tablet/Desktop transitions.
*   **`lg:` prefix** (min-width: 1024px) is used sparingly for larger layouts.

### Common Responsive Patterns

| Pattern | Mobile (Default) | Desktop (`md:`) | Usage |
| :--- | :--- | :--- | :--- |
| **Grid Layouts** | `grid-cols-1` | `md:grid-cols-2` or `md:grid-cols-3` | Stacks cards vertically on mobile, side-by-side on desktop. |
| **Flex Direction** | `flex-col` | `md:flex-row` | Stacks elements vertically on mobile, horizontally on desktop. |
| **Navigation** | Hamburger (`block`) | Links (`hidden md:flex`) | Toggles between mobile menu and desktop navbar. |
| **Typography** | `text-3xl` | `md:text-5xl` | Scales headings up for larger screens. |
| **Padding/Gap** | `p-8` / `gap-8` | `md:p-12` / `gap-12` | Increases whitespace on larger screens. |
| **Visibility** | `block` or `hidden` | `md:hidden` or `md:block` | Shows/hides elements based on screen size (e.g., mobile menu button). |

**Example Implementation:**
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Items stack on mobile, 3-column on desktop -->
</div>
```

## 2. Color System & Classes

We use a custom Tailwind configuration injected via the `<script>` tag in the head.

### Backgrounds
*   `bg-primary-dark`: Main page background (`#0a0a0a`).
*   `bg-bg-secondary`: Secondary sections/cards (`#1a1a1a`).
*   `bg-accent-gold`: Primary buttons/highlights (`#d4af37`).
*   `bg-[#333333]`: Specific utility for icon backgrounds or borders.

### Text
*   `text-text-primary`: Main headings (`#ffffff`).
*   `text-text-secondary`: Paragraphs/Subtitles (`#cccccc`).
*   `text-accent-gold`: Highlights/Links (`#d4af37`).
*   `text-black`: Text on gold buttons (`#000000`).

### Borders
*   `border-border-subtle`: Subtle separation (`#2a2a2a`).
*   `border-[#333333]`: Card borders.
*   `border-accent-gold`: Active/Hover states.

### Hover Effects
*   `hover:text-accent-gold`: Links.
*   `hover:bg-accent-gold-light`: Primary buttons.
*   `hover:border-accent-gold`: Cards.
*   `group-hover:text-black`: Text inside a container being hovered.

## 3. Typography System

*   **Font Family:** `font-sans` (Inter).
*   **Headings:**
    *   **H1 (Hero):** `text-5xl md:text-7xl font-bold tracking-tight leading-tight`.
    *   **H2 (Section):** `text-3xl font-bold tracking-wide`.
    *   **H3 (Card Title):** `text-xl` or `text-2xl font-bold`.
    *   **Eyebrow/Label:** `text-sm font-bold tracking-widest uppercase text-accent-gold`.
*   **Body Text:**
    *   **Lead:** `text-xl md:text-2xl font-light text-text-secondary`.
    *   **Standard:** `text-base text-text-secondary leading-relaxed`.
    *   **Small:** `text-sm text-[#888888]`.

## 4. Layout & Spacing Classes

### Container
*   `max-w-7xl mx-auto px-4`: Standard container for all content. Centers content with max-width and horizontal padding.

### Section Spacing
*   `py-24`: Standard vertical padding for sections.
*   `pt-24 pb-32`: Asymmetric padding for top sections.

### Element Spacing
*   `mb-16`: Standard bottom margin for section headers.
*   `mb-8` / `mb-4`: Standard spacing between headings and text.
*   `space-y-4`: Vertical stack spacing.
*   `space-x-4`: Horizontal stack spacing.

## 5. UI Component Classes

### Buttons
**Primary (Solid Gold):**
```css
px-8 py-4 bg-accent-gold text-black text-lg font-bold rounded-sm hover:bg-accent-gold-light transition-all transform hover:-translate-y-1
```

**Secondary (Outline):**
```css
px-8 py-4 border border-accent-gold text-accent-gold text-lg font-bold rounded-sm hover:bg-accent-gold/10 transition-all
```

**Link (Text only):**
```css
text-accent-gold font-bold hover:text-accent-gold-light transition-colors border-b border-accent-gold pb-1
```

### Cards (Services/Features)
**Container:**
```css
bg-bg-secondary border border-[#333333] p-8 rounded-sm hover:border-accent-gold transition-all group
```
*   *Note:* The `group` class on the parent allows child elements (like icons or text) to change color when the card is hovered (`group-hover:text-black`).

### Navbar
*   **Fixed Header:** `fixed w-full z-50 bg-primary-dark/90 backdrop-blur-md border-b border-[#333333]`.
*   **Mobile Menu:** `hidden md:hidden` (toggled via JS).

## 6. Custom CSS & Animations (`styles.css`)

We use standard CSS for animations to keep the HTML clean.

### Fade In Animation
Used on almost all major sections.
*   **Class:** `.fade-in`
*   **State:** Starts `opacity: 0` and `transform: translateY(20px)`.
*   **Active:** Javascript adds `.visible` class -> `opacity: 1`, `transform: translateY(0)`.

```css
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

## 7. Copilot Prompting Guide

When asking Copilot to generate code, use this structure:

> "Create a new section for [Topic].
> Use the standard **Container** (`max-w-7xl mx-auto px-4`) and **Section Spacing** (`py-24`).
> Background should be `bg-bg-secondary` (#1a1a1a).
> The layout should be `grid grid-cols-1 md:grid-cols-2 gap-12` (Mobile first).
> Use `text-accent-gold` for the eyebrow title and `text-3xl font-bold` for the main heading.
> Buttons should use the **Secondary Outline** style defined in the Design System.
> Wrap the content in a `fade-in` class for animation."
