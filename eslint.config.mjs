// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.{ts,tsx,vue}'], // Apply these rules to TypeScript and Vue files
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Disable the no-unused-vars rule
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
    },
  },
)
