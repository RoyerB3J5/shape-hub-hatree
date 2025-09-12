// Type declarations for `astro-icon` subpath imports.
// This file tells TypeScript and the editor that importing from
// 'astro-icon/components' is valid and exports an `Icon` component.
// Place under `src/types` so it's included by the existing tsconfig.

declare module 'astro-icon/components' {
  // The Icon component is an Astro component; use `any` to avoid
  // strict typing issues. If you want stronger types, replace `any`.
  export const Icon: any;
  export default Icon;
}

declare module 'astro-icon' {
  // The main package exports an integration function by default.
  // Use `any` to avoid errors when importing in JS/TS code.
  const _default: any;
  export default _default;
}
