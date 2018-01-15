# postcss-icon.icono

Icon set data for [postcss-icon plugin](https://github.com/retyui/postcss-icon), based on [Icono](https://saeedalipoor.github.io/icono/)

[![postcss-icon.icono](https://raw.githubusercontent.com/retyui/postcss-icon.icono/master/preview.png)](https://retyui.github.io/postcss-icon/icono/)

## Install

```bash
npm install -D postcss-icon.icono postcss-icon
# or
yarn add -D postcss-icon.icono postcss-icon
```

## Input

```css
.custom-selector {
  @icon: icono-search; /* 'icono-' is Prefix , 'search' is name Icon*/
  color: gold;
  /* ... your css code */
}
```

## Output

```css
.custom-selector::after{
  content: '';
  /* ... */
}
/* after before i span if needed */
.custom-selector{
  color: #000;
  width: 20px;
  heigth: 20px;
  /* ... */
  color: gold;
  /* ... your css code */
}
```

## Use ([more examples](https://github.com/retyui/postcss-icon/tree/master/example/))

```js
const     postcss = require('postcss');
const postcssIcon = require('postcss-icon');

const CSS = `
.custom-selector {
  @icon: icono-search;
}`;

postcss(
  postcssIcon({
    "postcss-icon.icono": {
      prefix: 'icono-' /* required when using multiple Icon data sets */
    },
    "postcss-icon.OtherSetName": { /* Options */ }
  })
).process(CSS).then(({css, messages}) => {
  console.log(css);
  messages
    .filter(i => i.type === "warning")
    .map(e => console.log(e.toString()));
});
```

## Other icon sets:

### Font icons:

- [postcss-icon.material-design](https://github.com/retyui/postcss-icon.material-design) (count icons : 932) [result demo](https://retyui.github.io/postcss-icon/material-design/)
- [postcss-icon.font-awesome-v4](https://github.com/retyui/postcss-icon.font-awesome-v4) (count icons : 786) [result demo](https://retyui.github.io/postcss-icon/font-awesome-v4/)

### Css only icons:

- [postcss-icon.cssicon](https://github.com/retyui/postcss-icon.cssicon) (count icons : 192) [result demo](https://retyui.github.io/postcss-icon/cssicon/)
- [postcss-icon.rosa](https://github.com/retyui/postcss-icon.rosa) (count icons : 78) [result demo](https://retyui.github.io/postcss-icon/rosa/)
- [postcss-icon.airpwn](https://github.com/retyui/postcss-icon.airpwn) (count icons : 39) [result demo](https://retyui.github.io/postcss-icon/airpwn/)
- [postcss-icon.stiffi](https://github.com/retyui/postcss-icon.stiffi) (count icons : 34) [result demo](https://retyui.github.io/postcss-icon/stiffi/)
- [postcss-icon.joshnh](https://github.com/retyui/postcss-icon.joshnh) (count icons : 24) [result demo](https://retyui.github.io/postcss-icon/joshnh/)

## All name icons (count: 131) [result demo](https://retyui.github.io/postcss-icon/icono/)

`areaChart`, `asterisk`, `barChart`, `blogger`, `book`, `bookmark`, `bookmarkEmpty`, `calendar`, `camera`, `caretDown`, `caretDownCircle`, `caretDownSquare`, `caretLeft`, `caretLeftCircle`, `caretLeftSquare`, `caretRight`, `caretRightCircle`, `caretRightSquare`, `caretUp`, `caretUpCircle`, `caretUpSquare`, `cart`, `chain`, `check`, `checkCircle`, `clock`, `codepen`, `comment`, `commentEmpty`, `creditCard`, `crop`, `cross`, `crossCircle`, `cup`, `delicious`, `display`, `disqus`, `document`, `downArrow`, `dribbble`, `dropper`, `exclamation`, `exclamationCircle`, `eye`, `facebook`, `file`, `filter`, `flag`, `flickr`, `folder`, `forbidden`, `forward`, `frown`, `gear`, `gplus`, `hamburger`, `headphone`, `heart`, `home`, `icono`, `imac`, `imacBold`, `image`, `indent`, `infinity`, `instagram`, `iphone`, `iphoneBold`, `keyboard`, `leftArrow`, `linkedIn`, `list`, `locationArrow`, `macbook`, `macbookBold`, `mail`, `market`, `meh`, `microphone`, `moon`, `mouse`, `music`, `next`, `nexus`, `outdent`, `paperClip`, `pause`, `piano`, `pieChart`, `pin`, `play`, `plus`, `plusCircle`, `power`, `previous`, `rename`, `reset`, `rewind`, `rightArrow`, `rss`, `ruler`, `search`, `share`, `signIn`, `signOut`, `sitemap`, `sliders`, `smile`, `stop`, `sun`, `support`, `sync`, `tag`, `terminal`, `textAlignCenter`, `textAlignLeft`, `textAlignRight`, `tiles`, `trash`, `twitter`, `upArrow`, `user`, `video`, `volume`, `volumeDecrease`, `volumeHigh`, `volumeIncrease`, `volumeLow`, `volumeMedium`, `volumeMute`, `youtube`
