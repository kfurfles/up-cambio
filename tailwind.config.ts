import { type Config } from 'tailwindcss';





export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#F42705",
        "brand-black": "#0E0A01",
        "brand-white": "#F9F9F9",
        primary: {
          x100: "#C4F2C0",
          x200: "#7EEE86",
          x300: "#3DAC45",
          x400: "#2B7A31"
        },
        secondary: {
          x100: "#A5E2FC",
          x200: "#62CBF8",
          x300: "#00ADF8",
          x400: "#007BB0"
        },
        neutral: {
          x100: "#FFFFFF",
          x200: "#F9FAFB",
          x300: "#E6EDF3",
          x400: "#CED6DF",
          x500: "#475665",
          x600: "#101C27"
        },
        "feedback-warning": "#E8012B"
      }
    }
  },
  plugins: [
    require("daisyui"),
    function ({ addComponents, theme }) {
      const neutral = theme('colors.neutral', {})
      const primary = theme('colors.primary', {})
      const secondary = theme('colors.secondary', {})
      const GradientText = (colorOne: string, colorTow: string, oritentation: 'vertical' | 'horizontal') => ({
				background: `linear-gradient(${oritentation === 'horizontal' ? 90 : 180}deg, ${colorOne} 0%, ${colorTow} 100%)`,
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				backgroundClip: 'text',
				textFillColor: 'transparent',
				display: 'inline-block',
			});

      const neutralGratients = Object.keys(neutral).reduce((acc, cur) => {
        return {
          ...acc,
          [`.gradient-neutral-${cur}`]: GradientText(neutral[cur], neutral[cur], 'vertical')
        }
      },{})
      

      addComponents({
        "html": {
          color: `${neutral['x600']} !important`
        },
        "btn.btn-secondary:hover": {
          border: "none"
        },
        ".headline-medium-1": {
          fontSize: "48px",
          lineHeight: "56px",
          fontWeight: "500"
        },
        ".headline-medium-2": {
          fontSize: "40px",
          lineHeight: "56px",
          fontWeight: "500"
        },
        ".headline-medium-3": {
          fontSize: "32px",
          lineHeight: "48px",
          fontWeight: "500"
        },
        ".headline-medium-4": {
          fontSize: "24px",
          lineHeight: "48px",
          fontWeight: "500"
        },
        ".headline-medium-5": {
          fontSize: "20px",
          lineHeight: "40px",
          fontWeight: "500"
        },
        ".headline-regular-1": {
          fontSize: "48px",
          lineHeight: "56px",
          fontWeight: "400"
        },
        ".headline-regular-2": {
          fontSize: "40px",
          lineHeight: "56px",
          fontWeight: "400"
        },
        ".headline-regular-3": {
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: "400"
        },
        ".headline-regular-4": {
          fontSize: "24px",
          lineHeight: "28px",
          fontWeight: "400"
        },
        ".headline-regular-5": {
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "400"
        },
        ".label-1": {
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: "600"
        },
        ".label-2": {
          fontSize: "18px",
          lineHeight: "26px",
          fontWeight: "600"
        },
        ".label-3": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "600"
        },
        ".label-4": {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: "600"
        },
        ".label-5": {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: "600"
        },
        ".paragraph-1": {
          fontSize: "20px",
          lineHeight: "26px",
          fontWeight: "400"
        },
        ".paragraph-2": {
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: "400"
        },
        ".paragraph-3": {
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: "400"
        },
        ".paragraph-4": {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: "400"
        },
        ".btn-up-primary": {
          paddingLeft: "16px",
          paddingRight: "16px",
          minHeight: "48px",
          fontSize: "18px",
          borderColor: primary['x300'],
          background: primary['x300'], 
          borderRadius: "8px", 
          justifyContent: "center",
          alignItems: "center", 
          display: "inline-flex",
          color: neutral['x100']
        },
        ".btn-up-secondary": {
          paddingLeft: "16px",
          paddingRight: "16px",
          minHeight: "48px",
          background: 'transparent', 
          borderRadius: "8px",
          borderWidth: '2px', 
          fontSize: "18px",
          borderColor: primary['x300'],
          justifyContent: "center",
          alignItems: "center", 
          display: "inline-flex",
          color: neutral['x100']

        },
        ".btn-up-black": {
          paddingLeft: "16px",
          paddingRight: "16px",
          minHeight: "48px",
          background: neutral['x600'], 
          borderRadius: "8px",
          borderWidth: '2px', 
          fontSize: "18px",
          borderColor: neutral['x600'],
          justifyContent: "center",
          alignItems: "center", 
          display: "inline-flex",
          color: neutral['x100']
        },
        ".gradient-horizontal-light": GradientText(primary['x100'], secondary['x100'], 'horizontal'),
        ".gradient-horizontal-dark": GradientText(primary['x200'], secondary['x200'], 'horizontal'),
        ".gradient-vertical-light": GradientText(primary['x100'], secondary['x100'], 'vertical'),
        ".gradient-vertical-dark": GradientText(primary['x200'], secondary['x200'], 'vertical'),
        ...neutralGratients,
      });
    }
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#3DAC45",
          "primary-content": "#F9F9F9",
          secondary: "#FCBCB2",
          "secondary-content": "#F42705"
        }
      }
    ]
  }

} satisfies Config;