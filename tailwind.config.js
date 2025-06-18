// // tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary and Secondary color roles
        primary: "#6750A4",
        "on-primary": "#FFFFFF",
        "primary-container": "#EADDFF",
        "on-primary-container": "#21005D",

        secondary: "#625B71",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#E8DEF8",
        "on-secondary-container": "#1D192B",

        tertiary: "#7D5260",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#FFD8E4",
        "on-tertiary-container": "#31111D",

        // Error color roles
        error: "#B3261E",
        "on-error": "#FFFFFF",
        "error-container": "#F9DEDC",
        "on-error-container": "#410E0B",

        background: "#FEF7FF", // Tonal palette 98
        "on-background": "#1D1B20", // Tonal palette 10

        surface: "#FEF7FF", // Tonal palette 98 (often same as background for consistency)
        "on-surface": "#1D1B20", // Tonal palette 10

        "surface-variant": "#E7E0EC", // Tonal palette 90 (Neutral variant)
        "on-surface-variant": "#49454F", // Tonal palette 30 (Neutral variant)

        "surface-container-lowest": "#FFFFFF", // Tone 100
        "surface-container-low": "#F7F2FA", // Tone 96
        "surface-container": "#F3EDF7", // Tone 94
        "surface-container-high": "#ECE6F0", // Tone 92
        "surface-container-highest": "#E6E0E9", // Tone 90

        // Inverse colors for creating contrasting elements
        "inverse-surface": "#322F35",
        "inverse-on-surface": "#F4EFF4",
        "inverse-primary": "#D0BCFF",

        // Outline and Shadow colors
        outline: "#79747E",
        "outline-variant": "#CAC4D0", // Less prominent outlines, dividers
        shadow: "#000000",
        scrim: "#000000", // For scrims behind modals/sheets
      },

      fontSize: {
        // Display styles for large, prominent text (sp converted to px)
        "display-lg": ["57px", { lineHeight: "64px" }],
        "display-md": ["45px", { lineHeight: "52px" }],
        "display-sm": ["36px", { lineHeight: "44px" }],

        // Headline styles for shorter, high-emphasis text
        "headline-lg": ["32px", { lineHeight: "40px" }],
        "headline-md": ["28px", { lineHeight: "36px" }],
        "headline-sm": ["24px", { lineHeight: "32px" }],

        // Title styles for medium-emphasis text, often within components
        "title-lg": ["22px", { lineHeight: "28px" }],
        "title-md": ["16px", { lineHeight: "24px" }],
        "title-sm": ["14px", { lineHeight: "20px" }],

        // Body styles for longer-form text content
        "body-lg": ["16px", { lineHeight: "24px" }],
        "body-md": ["14px", { lineHeight: "20px" }],
        "body-sm": ["12px", { lineHeight: "16px" }],

        // Label styles for small, utilitarian text like button labels or captions
        "label-lg": ["14px", { lineHeight: "20px" }],
        "label-md": ["12px", { lineHeight: "16px" }],
        "label-sm": ["11px", { lineHeight: "16px" }],
      },
      fontFamily: {
        // Roboto is the default Material Design typeface.
        // Ensure these fonts are loaded in your project (e.g., via Google Fonts).
        roboto: ["Roboto", "sans-serif"],
        "roboto-medium": ['"Roboto Medium"', "Roboto", "sans-serif"], // For title and label roles
        // For variable fonts like Roboto Flex, you might need to use specific CSS properties
        // directly or through Tailwind's arbitrary values, e.g., '[font-variation-settings:"wght" var(--font-weight)]'
      },

      // --- Material 3 Expressive Shape System (Border Radius) ---
      // This section maps Material 3's 10-level corner radius scale to Tailwind's
      // border-radius utilities. Values are in px (assuming 1dp ~ 1px for web display).
      // M3 Expressive encourages diverse and even asymmetrical shapes.
      borderRadius: {
        // M3 Expressive `dp` values mapped to `px` for Tailwind
        none: "0px",
        xs: "4px", // Extra small
        sm: "8px", // Small
        md: "12px", // Medium
        lg: "16px", // Large
        "lg-inc": "20px", // Large increased
        xl: "28px", // Extra large
        "xl-inc": "32px", // Extra large increased
        "2xl": "48px", // Extra extra large (using Tailwind's `2xl` for common convention)
        full: "9999px", // Fully rounded corners (Tailwind's default for `rounded-full`)
      },

      transitionTimingFunction: {
        "expressive-fast-spatial": "cubic-bezier(0.42, 1.67, 0.21, 0.90)",
        "expressive-default-spatial": "cubic-bezier(0.38, 1.21, 0.22, 1.00)",
        "expressive-slow-spatial": "cubic-bezier(0.39, 1.29, 0.35, 0.98)",
        "expressive-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
        "expressive-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
        "expressive-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
        "standard-fast-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
        "standard-default-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
        "standard-slow-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
        "standard-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
        "standard-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
        "standard-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
      },
      transitionDuration: {
        // Define durations based on M3 Expressive guidelines (from cubic-bezier web equivalents).
        150: "150ms", // For fast effects
        200: "200ms", // For default effects
        300: "300ms", // For slow effects
        350: "350ms", // For fast spatial
        500: "500ms", // For default spatial
        650: "650ms", // For expressive slow spatial
        750: "750ms", // For standard slow spatial
      },
    },
  },
  plugins: [],
};

// tailwind.config.js

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

//   darkMode: "class", // Keep this for potential future dark mode, but the focus here is light.
//   theme: {
//     extend: {
//       colors: {
//         // --- Monochrome White Theme Colors (Material 3 Inspired) ---
//         // Using Neutral tonal palette for primary, secondary, and tertiary to achieve monochrome.

//         // Primary color roles (high emphasis, often dark grey on white background)
//         primary: "#1D1B20", // Neutral Tone 10 (very dark grey, almost black)
//         "on-primary": "#FFFFFF", // White text on primary
//         "primary-container": "#F3EDF7", // Neutral Tone 94 (light grey container)
//         "on-primary-container": "#1D1B20", // Neutral Tone 10 (dark text on light container)

//         // Secondary color roles (medium emphasis, a slightly lighter grey than primary)
//         secondary: "#49454F", // Neutral Variant Tone 30 (medium grey)
//         "on-secondary": "#FFFFFF", // White text on secondary
//         "secondary-container": "#E7E0EC", // Neutral Variant Tone 90 (light grey container)
//         "on-secondary-container": "#1D1B20", // Neutral Tone 10 (dark text on light container)

//         // Tertiary color roles (low emphasis / supporting, a lighter grey)
//         tertiary: "#79747E", // Neutral Tone 50 (medium-light grey)
//         "on-tertiary": "#FFFFFF", // White text on tertiary
//         "tertiary-container": "#E6E0E9", // Neutral Tone 90 (very light grey container)
//         "on-tertiary-container": "#1D1B20", // Neutral Tone 10 (dark text on light container)

//         // Error color roles (kept distinct for clear feedback)
//         error: "#B3261E",
//         "on-error": "#FFFFFF",
//         "error-container": "#F9DEDC",
//         "on-error-container": "#410E0B",

//         // Background and Surface (Dominant white/off-white for the minimal theme)
//         background: "#FEF7FF", // Neutral Tone 98 (very light, almost white)
//         "on-background": "#1D1B20", // Neutral Tone 10 (dark text on background)

//         surface: "#FEF7FF", // Neutral Tone 98 (same as background for consistency in minimal design)
//         "on-surface": "#1D1B20", // Neutral Tone 10 (dark text on surface)

//         "surface-variant": "#E7E0EC", // Neutral Variant Tone 90 (light grey for distinct surfaces)
//         "on-surface-variant": "#49454F", // Neutral Variant Tone 30 (medium grey text/icons)

//         // Surface Containers (different shades of white/light grey for depth)
//         "surface-container-lowest": "#FFFFFF", // Tone 100 (pure white)
//         "surface-container-low": "#F7F2FA", // Tone 96
//         "surface-container": "#F3EDF7", // Tone 94
//         "surface-container-high": "#ECE6F0", // Tone 92
//         "surface-container-highest": "#E6E0E9", // Tone 90

//         // Inverse colors (for elements that need to stand out on dark backgrounds, even in light theme)
//         "inverse-surface": "#322F35", // Neutral Tone 20 (dark grey for inverse surface)
//         "inverse-on-surface": "#F4EFF4", // Neutral Tone 95 (light text on inverse surface)
//         "inverse-primary": "#D0BCFF", // Retained a hint of the original primary for inverse contrast, or you could make this a light grey.
//         // For a *strict* monochrome, you might change this to a very light neutral: "#EADDFF" (Primary Container) or "#E6E0E9" (Neutral Tone 90)

//         // Outline and Shadow colors (grayscale for monochrome)
//         outline: "#79747E", // Neutral Tone 50
//         "outline-variant": "#CAC4D0", // Neutral Tone 70 (lighter for less prominent outlines)
//         shadow: "#000000", // Black for shadows
//         scrim: "#000000", // Black for scrims
//       },

//       fontSize: {
//         // Keeping your existing Material 3 typography scale is good for structure
//         "display-lg": ["57px", { lineHeight: "64px" }],
//         "display-md": ["45px", { lineHeight: "52px" }],
//         "display-sm": ["36px", { lineHeight: "44px" }],
//         "headline-lg": ["32px", { lineHeight: "40px" }],
//         "headline-md": ["28px", { lineHeight: "36px" }],
//         "headline-sm": ["24px", { lineHeight: "32px" }],
//         "title-lg": ["22px", { lineHeight: "28px" }],
//         "title-md": ["16px", { lineHeight: "24px" }],
//         "title-sm": ["14px", { lineHeight: "20px" }],
//         "body-lg": ["16px", { lineHeight: "24px" }],
//         "body-md": ["14px", { lineHeight: "20px" }],
//         "body-sm": ["12px", { lineHeight: "16px" }],
//         "label-lg": ["14px", { lineHeight: "20px" }],
//         "label-md": ["12px", { lineHeight: "16px" }],
//         "label-sm": ["11px", { lineHeight: "16px" }],
//       },
//       fontFamily: {
//         roboto: ["Roboto", "sans-serif"],
//         "roboto-medium": ['"Roboto Medium"', "Roboto", "sans-serif"],
//       },

//       borderRadius: {
//         none: "0px",
//         xs: "4px",
//         sm: "8px",
//         md: "12px",
//         lg: "16px",
//         "lg-inc": "20px",
//         xl: "28px",
//         "xl-inc": "32px",
//         "2xl": "48px",
//         full: "9999px",
//       },

//       transitionTimingFunction: {
//         // Keeping M3 Expressive motion for subtle, modern animations
//         "expressive-fast-spatial": "cubic-bezier(0.42, 1.67, 0.21, 0.90)",
//         "expressive-default-spatial": "cubic-bezier(0.38, 1.21, 0.22, 1.00)",
//         "expressive-slow-spatial": "cubic-bezier(0.39, 1.29, 0.35, 0.98)",
//         "expressive-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
//         "expressive-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
//         "expressive-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
//         "standard-fast-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-default-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-slow-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
//         "standard-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
//         "standard-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
//       },
//       transitionDuration: {
//         150: "150ms",
//         200: "200ms",
//         300: "300ms",
//         350: "350ms",
//         500: "500ms",
//         650: "650ms",
//         750: "750ms",
//       },
//     },
//   },
//   plugins: [],
// };

// //tailwind.config.js;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

//   darkMode: "class", // Crucial for toggling themes.
//   theme: {
//     extend: {
//       colors: {
//         // --- Monochrome Black Theme Colors (Material 3 Inspired) ---
//         // Using Neutral tonal palette for all roles to achieve monochrome.
//         // Based on Material Design's recommendations for dark themes (using dark grey, not pure black).

//         // Background and Surface (Dominant very dark grey for the minimal theme)
//         background: "#121212", // Common Material Dark theme background, slightly off-black
//         "on-background": "#E6E0E9", // Neutral Tone 90 (light grey text on background)

//         surface: "#1D1B20", // Neutral Tone 10 (slightly darker than background for base surface)
//         "on-surface": "#E6E0E9", // Neutral Tone 90 (light grey text on surface)

//         "surface-variant": "#49454F", // Neutral Variant Tone 30 (medium dark grey for distinct surfaces)
//         "on-surface-variant": "#CAC4D0", // Neutral Tone 70 (lighter grey text/icons)

//         // Surface Containers (different shades of dark grey for elevation)
//         // These get progressively lighter as elevation increases, per M3 dark theme spec
//         "surface-container-lowest": "#121212", // Same as background for lowest elevation
//         "surface-container-low": "#1D1B20", // Tone 10
//         "surface-container": "#242128", // Slightly lighter than Tone 10 (custom pick for more steps)
//         "surface-container-high": "#2D2A31", // Even lighter
//         "surface-container-highest": "#36343A", // Lightest dark grey for highest elevation

//         // Primary color roles (emphasis, a light grey that stands out on dark surfaces)
//         primary: "#CAC4D0", // Neutral Tone 70 (a visible light grey)
//         "on-primary": "#1D1B20", // Neutral Tone 10 (dark text on light primary)
//         "primary-container": "#49454F", // Neutral Variant Tone 30 (dark grey container)
//         "on-primary-container": "#EADDFF", // Original Primary Container (light for contrast here) - OR: use a lighter neutral: "#E6E0E9"

//         // Secondary color roles (medium emphasis, a slightly darker light grey than primary)
//         secondary: "#A8A2AD", // Neutral Tone 60
//         "on-secondary": "#1D1B20", // Dark text on light secondary
//         "secondary-container": "#49454F", // Neutral Variant Tone 30
//         "on-secondary-container": "#E8DEF8", // Original Secondary Container (light for contrast) - OR: use a lighter neutral: "#E6E0E9"

//         // Tertiary color roles (low emphasis / supporting, lightest grey for accent)
//         tertiary: "#CAC4D0", // Neutral Tone 70 (or a slightly different light grey: "#D8D4DB")
//         "on-tertiary": "#1D1B20", // Dark text on light tertiary
//         "tertiary-container": "#49454F", // Neutral Variant Tone 30
//         "on-tertiary-container": "#FFD8E4", // Original Tertiary Container (light for contrast) - OR: use a lighter neutral: "#E6E0E9"

//         // Error color roles (kept distinct and bright for clear feedback)
//         error: "#FFB4AB", // Lighter red for visibility on dark backgrounds
//         "on-error": "#690005",
//         "error-container": "#93000A",
//         "on-error-container": "#FFDAD6",

//         // Inverse colors (critical for providing contrast when a light element is needed on dark)
//         "inverse-surface": "#E6E0E9", // Neutral Tone 90 (light surface for inverse)
//         "inverse-on-surface": "#1D1B20", // Neutral Tone 10 (dark text on inverse surface)
//         "inverse-primary": "#D0BCFF", // Material 3's inverse primary remains a useful accent here

//         // Outline and Shadow colors (light grey outlines on dark, black shadows)
//         outline: "#938F99", // Neutral Tone 60
//         "outline-variant": "#49454F", // Neutral Variant Tone 30 (darker for less prominence)
//         shadow: "#000000", // Black for shadows (less visible but still there)
//         scrim: "rgba(0, 0, 0, 0.8)", // Semi-transparent black for scrims
//       },

//       fontSize: {
//         // Keeping your existing Material 3 typography scale is good for structure
//         "display-lg": ["57px", { lineHeight: "64px" }],
//         "display-md": ["45px", { lineHeight: "52px" }],
//         "display-sm": ["36px", { lineHeight: "44px" }],
//         "headline-lg": ["32px", { lineHeight: "40px" }],
//         "headline-md": ["28px", { lineHeight: "36px" }],
//         "headline-sm": ["24px", { lineHeight: "32px" }],
//         "title-lg": ["22px", { lineHeight: "28px" }],
//         "title-md": ["16px", { lineHeight: "24px" }],
//         "title-sm": ["14px", { lineHeight: "20px" }],
//         "body-lg": ["16px", { lineHeight: "24px" }],
//         "body-md": ["14px", { lineHeight: "20px" }],
//         "body-sm": ["12px", { lineHeight: "16px" }],
//         "label-lg": ["14px", { lineHeight: "20px" }],
//         "label-md": ["12px", { lineHeight: "16px" }],
//         "label-sm": ["11px", { lineHeight: "16px" }],
//       },
//       fontFamily: {
//         roboto: ["Roboto", "sans-serif"],
//         "roboto-medium": ['"Roboto Medium"', "Roboto", "sans-serif"],
//       },

//       borderRadius: {
//         none: "0px",
//         xs: "4px",
//         sm: "8px",
//         md: "12px",
//         lg: "16px",
//         "lg-inc": "20px",
//         xl: "28px",
//         "xl-inc": "32px",
//         "2xl": "48px",
//         full: "9999px",
//       },

//       transitionTimingFunction: {
//         // Keeping M3 Expressive motion for subtle, modern animations
//         "expressive-fast-spatial": "cubic-bezier(0.42, 1.67, 0.21, 0.90)",
//         "expressive-default-spatial": "cubic-bezier(0.38, 1.21, 0.22, 1.00)",
//         "expressive-slow-spatial": "cubic-bezier(0.39, 1.29, 0.35, 0.98)",
//         "expressive-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
//         "expressive-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
//         "expressive-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
//         "standard-fast-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-default-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-slow-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
//         "standard-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
//         "standard-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
//       },
//       transitionDuration: {
//         150: "150ms",
//         200: "200ms",
//         300: "300ms",
//         350: "350ms",
//         500: "500ms",
//         650: "650ms",
//         750: "750ms",
//       },
//     },
//   },
//   plugins: [],
// };
// tailwind.config.js

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

//   darkMode: "class", // Enables theme switching via 'dark' class

//   theme: {
//     extend: {
//       colors: {
//         // --- Monochrome Rich & Royal Muted Olive Green Theme (Dark Base) ---
//         // All colors derived from the base muted olive green: #545B4A
//         // Tonal values approximated based on Material 3 principles for this source color.

//         // Background and Surface (Very dark, rich olive greens)
//         background: "#171B11", // Deepest, almost black-olive for main background
//         "on-background": "#D8DCCF", // Light desaturated olive text on background

//         surface: "#1F2418", // Slightly lighter dark olive for base components
//         "on-surface": "#D8DCCF", // Light desaturated olive text on surface

//         "surface-variant": "#3D4333", // Mid-dark desaturated olive for distinct surfaces
//         "on-surface-variant": "#BCC3B0", // Mid-light desaturated olive text/icons

//         // Surface Containers (Progressively lighter dark olive greens for elevation)
//         "surface-container-lowest": "#171B11", // Same as background (no perceived elevation)
//         "surface-container-low": "#1F2418", // Same as base surface
//         "surface-container": "#292E21", // Slightly lighter dark olive
//         "surface-container-high": "#3D4333", // More distinct dark olive
//         "surface-container-highest": "#545B4A", // Lightest dark olive for highest elevation

//         // Primary color roles (High-emphasis elements - a rich, prominent olive)
//         primary: "#8E9584", // A mid-light, rich olive for main actions
//         "on-primary": "#292E21", // Very dark olive text on primary
//         "primary-container": "#3D4333", // Darker rich olive container
//         "on-primary-container": "#D8DCCF", // Light desaturated olive text on primary container

//         // Secondary color roles (Medium-emphasis elements - a slightly softer olive)
//         secondary: "#798070", // A mid-dark muted olive
//         "on-secondary": "#292E21", // Very dark olive text on secondary
//         "secondary-container": "#3D4333", // Darker rich olive container
//         "on-secondary-container": "#D8DCCF", // Light desaturated olive text on secondary container

//         // Tertiary color roles (Low-emphasis or accent elements - a subtle light olive)
//         tertiary: "#BCC3B0", // A light, very subtle desaturated olive
//         "on-tertiary": "#292E21", // Very dark olive text on tertiary
//         "tertiary-container": "#3D4333", // Darker rich olive container
//         "on-tertiary-container": "#D8DCCF", // Light desaturated olive text on tertiary container

//         // Error color roles (Standard bright red for clear feedback, distinct from olive)
//         error: "#FFB4AB", // Material 3 light red for dark themes
//         "on-error": "#690005",
//         "error-container": "#93000A",
//         "on-error-container": "#FFDAD6",

//         // Inverse colors (For elements that display on a contrasting light background within the dark theme)
//         "inverse-surface": "#D8DCCF", // Light desaturated olive for inverse surface
//         "inverse-on-surface": "#292E21", // Very dark olive text on inverse surface
//         "inverse-primary": "#656B5C", // Mid-tone olive for inverse primary

//         // Outline and Shadow colors (Dark olive tones for subtle definition)
//         outline: "#545B4A", // Our core muted olive for outlines
//         "outline-variant": "#3D4333", // Darker muted olive for less prominent outlines
//         shadow: "#000000", // Black for shadows (subtle on dark backgrounds)
//         scrim: "rgba(0, 0, 0, 0.8)", // Dark, semi-transparent overlay
//       },

//       // Keeping your existing Material 3 typography scale for consistent readability.
//       fontSize: {
//         "display-lg": ["57px", { lineHeight: "64px" }],
//         "display-md": ["45px", { lineHeight: "52px" }],
//         "display-sm": ["36px", { lineHeight: "44px" }],
//         "headline-lg": ["32px", { lineHeight: "40px" }],
//         "headline-md": ["28px", { lineHeight: "36px" }],
//         "headline-sm": ["24px", { lineHeight: "32px" }],
//         "title-lg": ["22px", { lineHeight: "28px" }],
//         "title-md": ["16px", { lineHeight: "24px" }],
//         "title-sm": ["14px", { lineHeight: "20px" }],
//         "body-lg": ["16px", { lineHeight: "24px" }],
//         "body-md": ["14px", { lineHeight: "20px" }],
//         "body-sm": ["12px", { lineHeight: "16px" }],
//         "label-lg": ["14px", { lineHeight: "20px" }],
//         "label-md": ["12px", { lineHeight: "16px" }],
//         "label-sm": ["11px", { lineHeight: "16px" }],
//       },
//       fontFamily: {
//         roboto: ["Roboto", "sans-serif"],
//         "roboto-medium": ['"Roboto Medium"', "Roboto", "sans-serif"],
//       },

//       // Keep Material 3 shapes for consistent component aesthetics.
//       borderRadius: {
//         none: "0px",
//         xs: "4px",
//         sm: "8px",
//         md: "12px",
//         lg: "16px",
//         "lg-inc": "20px",
//         xl: "28px",
//         "xl-inc": "32px",
//         "2xl": "48px",
//         full: "9999px",
//       },

//       // Keep Material 3 motion for fluid, expressive interactions.
//       transitionTimingFunction: {
//         "expressive-fast-spatial": "cubic-bezier(0.42, 1.67, 0.21, 0.90)",
//         "expressive-default-spatial": "cubic-bezier(0.38, 1.21, 0.22, 1.00)",
//         "expressive-slow-spatial": "cubic-bezier(0.39, 1.29, 0.35, 0.98)",
//         "expressive-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
//         "expressive-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
//         "expressive-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
//         "standard-fast-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-default-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-slow-spatial": "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
//         "standard-fast-effects": "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
//         "standard-default-effects": "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
//         "standard-slow-effects": "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
//       },
//       transitionDuration: {
//         150: "150ms",
//         200: "200ms",
//         300: "300ms",
//         350: "350ms",
//         500: "500ms",
//         650: "650ms",
//         750: "750ms",
//       },
//     },
//   },
//   plugins: [],
// };
