import {readdir,readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
async function files(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=`${dir}/${e.name}`;out.push(...e.isDirectory()?await files(p):[p]);}return out;}
const all=await files('dist'),htmlFiles=all.filter(x=>x.endsWith('.html'));let links=0;
for(const file of htmlFiles){
 const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1>/g)||[]).length,1,file);
 assert(html.includes('id="main"'));assert(html.includes('noindex,nofollow'));
 assert(!/\[(?:Confirm|Project|Article|Date|Actual)|Editorial draft|Last updated:|EDITORIAL DRAFT/.test(html),'Editorial leak: '+file);
 assert(html.includes('Biography & Press'));
 for(const m of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)){const target=m[1];await access(target==='/'?'dist/index.html':`dist${target}${target.includes('.')?'':'.html'}`);links++;}
 for(const m of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${m[1]}"`),`Missing fragment ${m[1]}: ${file}`);
 const nav=html.match(/<nav id="navigation"[\s\S]*?<\/nav>/)[0];
 assert(!nav.includes('↗'));assert(!nav.includes('/media'));assert(nav.includes('About'));
}
assert.equal(htmlFiles.length,10);assert(!all.some(x=>/dist\/(writing\/|editorial\/)/.test(x)));
const story=await readFile('dist/about.html','utf8');assert(story.includes('width="1154" height="1536"'));assert(!story.includes('viewBox="6 0 690'));
const how=await readFile('dist/about/approach.html','utf8');assert(!how.includes('/photos/'));
const writing=await readFile('dist/writing.html','utf8');assert(writing.includes('The first notes are taking shape.'));assert(!writing.includes('information-before-interface'));
const now=await readFile('dist/now.html','utf8');assert(!now.includes('20 October'));assert(!now.includes('Last updated'));
const contact=await readFile('dist/contact.html','utf8');for(const url of ['mailto:realevansjep@gmail.com','https://wa.me/2347088603467','https://www.tiktok.com/@evansjep','https://x.com/realevansjep'])assert(contact.includes(url));
const press=await readFile('dist/media.html','utf8');assert(!press.includes('download='));assert(press.includes('Extended biography'));
console.log(`Verified ${htmlFiles.length} pages and ${links} internal asset/navigation links, fragments, content exclusions, contacts and metadata.`);
