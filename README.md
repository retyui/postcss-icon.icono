# postcss-icon.icono

Icons data for [postcss-icon plugin](https://github.com/retyui/postcss-icon)

Based on [icono](https://saeedalipoor.github.io/icono/)

## Install
```bash
npm install -D postcss-icon.icono
# or
yarn add -D postcss-icon.icono
```

## Use
```js
const postcss     = require('postcss');
const postcssIcon = require('postcss-icon');
const dataIcono   = require('postcss-icon.icono');

const CSS = `
.custom-selector{
	@icon: icono-search; /* 'icono-' is Prefix , 'search' is name Icon*/ }
.custom-selector2{ /* or */
	@icon icono-search; }
`;

postcss(
	postcssIcon({
		prefix: 'icono-', /* required when using multiple Icon.data sets */
		data: dataIcono
	})
).process(CSS).then(({css,messages}) => {
	console.log(css);
	messages
		.filter(i => i.type === "warning")
		.map(e => console.log(e.toString()));
});
```

## [All name icons](https://retyui.github.io/postcss-icon/icono/)

```js
Object.keys(require('.')).sort().map(e => `\`${e}\``).join(', ')
```
`areaChart`, `asterisk`, `barChart`, `blogger`, `book`, `bookmark`, `bookmarkEmpty`, `calendar`, `camera`, `caretDown`, `caretDownCircle`, `caretDownSquare`, `caretLeft`, `caretLeftCircle`, `caretLeftSquare`, `caretRight`, `caretRightCircle`, `caretRightSquare`, `caretUp`, `caretUpCircle`, `caretUpSquare`, `cart`, `chain`, `check`, `checkCircle`, `clock`, `codepen`, `comment`, `commentEmpty`, `creditCard`, `crop`, `cross`, `crossCircle`, `cup`, `delicious`, `display`, `disqus`, `document`, `downArrow`, `dribbble`, `dropper`, `exclamation`, `exclamationCircle`, `eye`, `facebook`, `file`, `filter`, `flag`, `flickr`, `folder`, `forbidden`, `forward`, `frown`, `gear`, `gplus`, `hamburger`, `headphone`, `heart`, `home`, `icono`, `imac`, `imacBold`, `image`, `indent`, `infinity`, `instagram`, `iphone`, `iphoneBold`, `keyboard`, `leftArrow`, `linkedIn`, `list`, `locationArrow`, `macbook`, `macbookBold`, `mail`, `market`, `meh`, `microphone`, `moon`, `mouse`, `music`, `next`, `nexus`, `outdent`, `paperClip`, `pause`, `piano`, `pieChart`, `pin`, `play`, `plus`, `plusCircle`, `power`, `previous`, `rename`, `reset`, `rewind`, `rightArrow`, `rss`, `ruler`, `search`, `share`, `signIn`, `signOut`, `sitemap`, `sliders`, `smile`, `stop`, `sun`, `support`, `sync`, `tag`, `terminal`, `textAlignCenter`, `textAlignLeft`, `textAlignRight`, `tiles`, `trash`, `twitter`, `upArrow`, `user`, `video`, `volume`, `volumeDecrease`, `volumeHigh`, `volumeIncrease`, `volumeLow`, `volumeMedium`, `volumeMute`, `youtube`
