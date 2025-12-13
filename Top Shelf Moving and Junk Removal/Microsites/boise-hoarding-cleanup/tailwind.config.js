/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-oswald)', 'var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand Colors (from Top Shelf)
        'polar-blue': '#4589A6',
        'horizon-blue': '#55AAD2',
        'evening-blue': '#1F5F8B',
        'gunmetal': '#1F201D',
        'ub-yellow': '#FFC845',
        'cta-rose': '#F66256',
        'fog': '#F4F5F6',
        // Active Brand Colors
        'light-blue': '#0b7fb6',
        'dark-blue': '#10477d',
        'brand-yellow': '#FFC845',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
