import type { Config } from "tailwindcss";
import { withMaterialColors } from 'tailwind-material-colors';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
    },
  },
  plugins: [],
};
export default withMaterialColors(config, {
  // Your base colors as HEX values. 'primary' is required.
  primary: '#ff0000',
},
  {
    /* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
    scheme: 'expressive',
    // contrast is optional and ranges from -1 (less contrast) to 1 (more contrast).
    contrast: 0,
    extend: false
  },
);
