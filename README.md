## Information

<table>
<tr>
<td>Package</td><td>@motif/player</td>
</tr>
<tr>
<td>Description</td>
<td>Motif Video Player for vue.js</td>
</tr>
</table>

## Usage

```javascript

import VuePlayer from '@motif/player'
import '@motif/player/dist/player.css'

Vue.use(VuePlayer)

```

## Examples

Set the screen ratio.

```javascript

<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="16:9"></Player>

<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="9:16"></Player>

<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="4:3"></Player>

<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="3:4"></Player>

<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="1"></Player>

<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" no-ratio></Player>

```

## LICENSE

(MIT License)

Copyright (c) 2018 ProgDesigner <me@progdesigner.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
