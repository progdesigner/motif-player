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

```js
import Vue from 'vue'
import VuePlayer from '@motif/player'
import '@motif/player/dist/player.css'

Vue.use(VuePlayer)

```


## Props

#### src
*	type: String
*	required: true

Video Source URL

#### type
*	type: String
*	required: false
*	default: 'video'

vimeo

```html
<Player type="vimeo" src="https://vimeo.com/253989945"></Player>
```

youtube

```html
<Player type="youtube" src="https://www.youtube.com/watch?v=eXBu09fwe3I"></Player>
```

video

```html
<Player type="video" src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"></Player>
```

#### poster
*	type: String
*	required: false
*	default: ''

```html
<Player poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png?x23406" src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"></Player>
```

#### aspect-ratio
*	type: String
*	default: ''

16:9

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="16:9"></Player>
```

9:16

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="9:16"></Player>
```

4:3

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="4:3"></Player>
```

3:4

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="3:4"></Player>
```

1:1

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" aspect-ratio="1"></Player>
```

#### no-ratio
*	type: Boolean
*	default: false

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" no-ratio></Player>
```

#### autoplay
*	type: Boolean
*	default: false

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" :autoplay="true"></Player>
```

#### controls
*	type: Boolean
*	default: true

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" :controls="false"></Player>
```

#### loop
*	type: Boolean
*	default: false

```html
<Player src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" :loop="true"></Player>
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
