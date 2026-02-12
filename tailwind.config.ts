export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./layouts/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-body)", "sans-serif"],
      heading: ["var(--font-heading)", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
    },
  },
};
export const plugins = [];
