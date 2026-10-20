import {readdir,readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
async function files(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=`${dir}/${e.name}`;if(e.isDirectory())out.push(...await files(p));else out.push(p)}return out}
const all=await files('dist');let links=0;for(const file of all.filter(x=>x.endsWith('.html'))){const html=await readFile(file,'utf8');assert.equal((html.match(/<h1>/g)||[]).length,1,file);assert(html.includes('id="main"'));assert(html.includes('noindex,nofollow'));for(const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)){const target=match[1];await access(target==='/'?'dist/index.html':`dist${target}${target.includes('.')?'':'.html'}`);links++}}
assert.equal(all.filter(x=>x.endsWith('.html')).length,13);console.log(`Verified 13 pages and ${links} internal asset/navigation links.`);
