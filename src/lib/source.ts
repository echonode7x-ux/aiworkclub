import { loader } from 'fumadocs-core/source';
import { docs, meta } from '../../.source/server';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';

// @ts-ignore
export const source: any = loader({
  baseUrl: '/',
  source: toFumadocsSource(docs, meta),
});
