
Copy code
// lint-staged.config.js
module.exports = {
  "**/*.{js,jsx,ts,tsx}": ["pnpm lint:fix", "pnpm format"]
};