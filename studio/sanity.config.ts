import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'insany-bank-studio',

  projectId: '5w8bb9pl',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
