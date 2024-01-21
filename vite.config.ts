import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'packages/default2namedExport/test/test-project/**', 'packages/default2namedExport/test/test-project-expected/**'],
  },
})
