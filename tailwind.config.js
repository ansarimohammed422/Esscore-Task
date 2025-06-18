// tailwind.config.js

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
