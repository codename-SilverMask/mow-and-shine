import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // setIsVisible(true) in useEffect mount is intentional for CSS entrance animations
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
