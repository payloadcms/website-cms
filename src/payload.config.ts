import { buildConfig } from 'payload/config';
import path from 'path';
import formBuilder from '@payloadcms/plugin-form-builder';
import { ReusableContent } from './collections/ReusableContent'
import { Users } from './collections/Users';
import { CaseStudies } from './collections/CaseStudies';
import { Pages } from './collections/Pages';
import { UseCases } from './collections/UseCases';
import { Footer } from './globals/Footer';
import { MainMenu } from './globals/MainMenu';
import { Posts } from './collections/Posts';
import { Media } from './collections/Media';

export default buildConfig({
  collections: [
    CaseStudies,
    Media,
    Pages,
    Posts,
    ReusableContent,
    UseCases,
    Users,
  ],
  globals: [
    Footer,
    MainMenu,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    formBuilder({}),
  ]
});
