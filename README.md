# ColorTerm

Bring colors into your Terminal

## Usage

ColorTerm supports CommonJs and ESM :

ESM :

```js
import { Color, Prepare } from 'colorterm'
```

CommonJs:

```js
var Color = requite('colorterm').Color
var Prepare = require('colorterm').Prepare
```

<br />
ColorTerm provides two main functions:
<br />
<br />

### Color

Color function gets three arguments:<br />

- the value as a string <br />
- the color as an RGB colors array [30,144,255] or hex string "#1e90ff" , short hex is also supported "#f0f"<br />
- optional options, refer to options section <br />

```js
console.log(Color('my text', '#f0f'))
console.log(Color('my text', '#1e90ff', { bold: true }))
console.log(Color('my text', [30, 144, 255], { bold: true }))
```

### Prepare

Prepare is a curried version of Color funtion <br />
it prepares your color and options arguments and returns a function that accepts your text value.

```js
const myStyle1 = Prepare('#ff00ff', { italic: true, underlined: true })
const myStyle2 = Prepare('#1e90ff', { bold: true })
const myStyle3 = Prepare([0, 0, 0], { strikeThrough: true, bold: true, background: '#E3B505' })
console.log(myStyle1('my text'))
console.log(myStyle2('my text'))
console.log(myStyle3('my text'))
```

## options

- bold : boolean
- faint : boolean
- italic : boolean
- underlined : boolean
- inverse : boolean
- strikeThrough : boolean
- background : hex "#E3B505" , short hex "#6a4" or RGB array [219, 80, 74]
