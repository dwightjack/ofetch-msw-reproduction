import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import * as ofetchStable from 'ofetch-stable'
import * as ofetchPatched from 'ofetch'

const server = setupServer(
    http.get('https://example.com', () => {
        return HttpResponse.text('1')
    })
)
server.listen();

console.log('ofetch Patched')
console.table([
 ['fetch', await globalThis.fetch('https://example.com').then(res => res.text()).then(res => res === '1')],
 ['ofetch fetch', await ofetchPatched.fetch('https://example.com').then(res => res.text()).then(res => res === '1')],
 ['ofetch createFetch', await ofetchPatched.createFetch()('https://example.com').then(res => res === '1')],
 ['ofetch', await ofetchPatched.ofetch('https://example.com').then(res => res === '1')],
 ['ofetch.create', await ofetchPatched.ofetch.create()('https://example.com').then(res => res === '1')],
])

console.log('ofetch Stable')

console.table([
    ['fetch', await globalThis.fetch('https://example.com').then(res => res.text()).then(res => res === '1')],
    ['ofetch fetch', await ofetchStable.fetch('https://example.com').then(res => res.text()).then(res => res === '1')],
    ['ofetch createFetch', await ofetchStable.createFetch()('https://example.com').then(res => res === '1')],
    ['ofetch', await ofetchStable.ofetch('https://example.com').then(res => res === '1')],
    ['ofetch.create', await ofetchStable.ofetch.create()('https://example.com').then(res => res === '1')],
])