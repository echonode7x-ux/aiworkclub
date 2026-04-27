import fs from 'fs';
import path from 'path';

const files = [
  'src/app/tools/[slug]/page.tsx',
  'src/app/cases/[slug]/page.tsx',
  'src/app/workflows/[slug]/page.tsx',
  'src/app/playbooks/[slug]/page.tsx',
  'src/app/prompts/[slug]/page.tsx',
  'src/app/tutorials/[slug]/page.tsx'
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add `const data = page.data as any;` after `if (!page) notFound();`
    content = content.replace(
      /if \(\!page\) notFound\(\);\s+const MDX = page\.data\.body;/,
      `if (!page) notFound();\n\n  const data = page.data as any;\n  const MDX = page.data.body;`
    );
    
    // Replace `page.data.` with `data.` everywhere EXCEPT in `const MDX = page.data.body;`
    // Actually, it's safer to just replace `{page.data.` with `{data.` in JSX
    content = content.replace(/\{page\.data\./g, '{data.');
    // And for any method calls like formatDate(page.data.updated_at)
    content = content.replace(/\(page\.data\./g, '(data.');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', file);
  }
}
