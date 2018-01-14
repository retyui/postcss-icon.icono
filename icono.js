module.exports = {
	type: "css",
	styles: new Map([
		[
			"icono",
			[
				".extend { width: 13px; height: 4px; box-shadow: 0px 0px 0px 32px inset, 0px 16px, 17px -18px; transform: skew(0deg, 30deg); margin: 11px 19px 19px 2px; }",
				".extend::before { position: absolute; width: 13px; height: 4px; box-shadow: 0px 0px 0px 32px inset, 0px 16px, -17px -17px; right: -17px; top: -10px; transform: skew(0deg, -48deg); }",
				".extend::after { position: absolute; width: 22px; height: 15px; left: 0px; top: -5px; border-top: 4px solid transparent; border-right: 4px solid; border-left: 4px solid; border-image: initial; border-bottom: none; transform: skew(0deg, -30deg) scaleY(0.6); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"home",
			[
				".extend, .extend::after, .extend::before { border: 2px solid; }",
				".extend { width: 22px; height: 16px; border-top: none; margin: 15px 6px 3px; }",
				".extend::before { width: 18px; height: 18px; transform: rotate(45deg); position: absolute; left: -2px; top: -7px; border-right-color: transparent; border-bottom-color: transparent; }",
				".extend::after { width: 6px; height: 10px; bottom: 0px; position: absolute; left: 50%; transform: translateX(-50%); border-top-width: 1px; border-right-width: 1px; border-left-width: 1px; border-bottom: none; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"mail",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend { width: 28px; height: 18px; overflow: hidden; margin: 8px 3px; }",
				".extend::before { position: absolute; width: 24.62px; height: 24.62px; transform: rotate(50deg) skew(-10deg, -20deg); top: -20px; left: -3px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"rss",
			[
				".extend { width: 22px; height: 22px; overflow: hidden; margin: 6px; }",
				".extend::after, .extend::before { position: absolute; border-radius: 50%; }",
				".extend::before { width: 6px; height: 6px; box-shadow: 0px 0px 32px inset; left: 0px; bottom: 0px; }",
				".extend::after { width: 27px; height: 27px; right: 15%; top: 15%; border: 4px solid transparent; box-shadow: 0px 0px 0px 2px inset, 0px 0px 0px 2px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"hamburger",
			[
				".extend { width: 20px; height: 2px; box-shadow: 0px 0px 0px 32px inset, 0px -6px, 0px 6px; margin: 16px 7px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"plus",
			[
				".extend::after, .extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 30px; height: 30px; margin: 2px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 20px; height: 2px; }",
				".extend::after { height: 20px; width: 2px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"cross",
			[
				".extend::after, .extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 30px; height: 30px; margin: 2px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 20px; height: 2px; }",
				".extend::after { height: 20px; width: 2px; }",
				".extend { transform: rotate(45deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"check",
			[
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 20px; height: 2px; }",
				".extend { width: 28px; height: 28px; margin: 3px 0px 3px 6px; transform: rotate(-45deg); }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::after { position: absolute; height: 12px; width: 2px; left: 4px; bottom: 14px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"power",
			[
				".extend { border: 2px solid; }",
				".extend { width: 22px; height: 22px; border-radius: 50%; border-top-color: transparent; margin: 6px; }",
				".extend::before { position: absolute; top: -15%; left: 8px; width: 2px; height: 60%; box-shadow: 0px 0px 0px 32px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"heart",
			[
				".extend, .extend::after, .extend::before { border: 2px solid; }",
				".extend { width: 20px; height: 20px; border-top-color: transparent; border-left-color: transparent; transform: rotate(45deg); border-radius: 4px 0px; margin: 9px 7px 5px; }",
				".extend::after, .extend::before { position: absolute; }",
				".extend::before { width: 8px; height: 14px; left: -10px; bottom: -2px; border-radius: 20px 0px 0px 20px; border-right-color: transparent; }",
				".extend::after { width: 14px; height: 8px; right: -2px; top: -10px; border-radius: 20px 20px 0px 0px; border-bottom-color: transparent; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"infinity",
			[
				".extend::after, .extend::before { border: 2px solid; }",
				".extend { width: 32px; height: 16px; margin: 9px 1px; }",
				".extend::after, .extend::before { width: 10px; height: 10px; position: absolute; transform: rotate(45deg); }",
				".extend::before { left: 0px; border-radius: 32px 0px 32px 32px; }",
				".extend::after { right: 1px; border-radius: 32px 32px 32px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"flag",
			[
				".extend::after, .extend::before { border: 2px solid; }",
				".extend { width: 22px; height: 25px; border-left: 3px solid; margin: 5px 6px 4px; }",
				".extend::after, .extend::before { position: absolute; width: 9px; height: 8px; }",
				".extend::before { left: -2px; top: 1px; border-radius: 0px 2px 0px 0px; border-right-width: 3px; }",
				".extend::after { width: 5px; left: 9px; top: 4px; border-left-width: 3px; border-radius: 2px 2px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"file",
			[
				".extend { border: 2px solid; }",
				".extend { width: 26px; height: 32px; border-radius: 0px 12px 0px 0px; margin: 1px 4px; }",
				".extend::before { position: absolute; top: -2px; right: -2px; border-style: solid; width: 0px; height: 0px; border-width: 5px; border-top-color: transparent; border-right-color: transparent; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"image",
			[
				".extend { border: 2px solid; }",
				".extend { width: 30px; height: 26px; border-radius: 3px; overflow: hidden; margin: 4px 2px; }",
				".extend::before { position: absolute; width: 20px; height: 20px; left: -2px; top: 14px; transform: rotate(45deg); box-shadow: 0px 0px 0px 32px inset, 10px -6px 0px 0px; }",
				".extend::after { position: absolute; width: 4px; height: 4px; border-radius: 50%; box-shadow: 0px 0px 0px 32px inset; top: 5px; right: 5px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"video",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend::after { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 20px; height: 20px; margin: 7px; }",
				".extend::before { width: 3px; height: 3px; left: -8px; box-shadow: 0px 0px 0px 32px inset, 0px -8px 0px 0px, 0px 8px 0px 0px, 29px 0px 0px 0px, 29px -8px 0px 0px, 29px 8px 0px 0px; }",
				".extend::after { width: 0px; height: 0px; border-width: 4px 0px 4px 6px; border-style: solid; border-top-color: transparent; border-bottom-color: transparent; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"music",
			[
				".extend { width: 18px; height: 6px; transform: skewY(-15deg); box-shadow: 0px 0px 0px 32px inset; border-radius: 2px 2px 0px 0px; margin: 4px 5px 24px 11px; }",
				".extend::before { position: absolute; width: 2px; height: 16px; left: 0px; top: 4px; box-shadow: 0px 0px 0px 32px inset, 16px 0px 0px 0px; }",
				".extend::after { position: absolute; width: 10px; height: 8px; left: -8px; top: 17px; border-radius: 50%; box-shadow: 0px 0px 0px 32px inset, 16px 0px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"headphone",
			[
				".extend { border: 2px solid; }",
				".extend { width: 30px; height: 27px; border-bottom-color: transparent; border-radius: 32px/32px 32px 16px 16px; margin: 2px 2px 5px; }",
				".extend::before { position: absolute; width: 4px; height: 12px; left: 1px; bottom: -4px; border-radius: 5px; box-shadow: 0px 0px 0px 32px inset, 20px 0px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"document",
			[
				".extend { border: 2px solid; }",
				".extend::after { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 26px; height: 32px; border-radius: 0px 0px 0px 10px; margin: 1px 4px; }",
				".extend::before { position: absolute; width: 0px; height: 0px; left: -3px; bottom: -3px; border-width: 5px; border-style: solid; border-bottom-color: transparent; border-left-color: transparent; }",
				".extend::after { width: 13px; height: 2px; box-shadow: 0px 0px 0px 32px inset, 0px -5px 0px 0px, 0px 5px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"folder",
			[
				".extend { border: 2px solid; }",
				".extend { width: 18px; height: 22px; border-left-width: 0px; border-radius: 0px 3px 3px 0px; margin: 8px 2px 4px 14px; }",
				".extend::before { position: absolute; width: 12px; height: 20px; left: -12px; bottom: -2px; border-width: 0px 0px 2px 2px; border-style: solid; border-radius: 0px 0px 0px 3px; }",
				".extend::after { position: absolute; width: 10px; height: 5px; left: -12px; top: -7px; border-width: 2px 2px 0px; border-style: solid; border-radius: 3px 3px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"pin",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 26px; height: 26px; border-radius: 50% 50% 50% 0px; transform: rotate(-45deg); margin: 1px 4px 7px; }",
				".extend::before { position: absolute; width: 6px; height: 6px; border-radius: 50%; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"smile",
			[
				".extend, .extend::after { border: 2px solid; }",
				".extend { border-radius: 50%; height: 30px; width: 30px; margin: 2px; }",
				".extend::before { border-radius: 50%; box-shadow: 8px 0px 0px 0px, 0px 0px 0px 2px inset; height: 4px; width: 4px; left: 7px; position: absolute; top: 27%; }",
				".extend::after { border-radius: 50%; transform: translateX(-50%); border-top-color: transparent; border-left-color: transparent; border-right-color: transparent; height: 16px; left: 50%; position: absolute; top: 6%; width: 16px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"eye",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { border-radius: 80% 20%; transform: rotate(45deg); border-width: 2px 1px 1px 2px; height: 28px; width: 28px; margin: 3px; }",
				".extend::before { border-radius: 50%; box-shadow: 0px -3px 0px 3px inset; height: 11px; width: 11px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"sliders",
			[
				".extend { height: 30px; width: 30px; margin: 2px; }",
				".extend::after, .extend::before { transform: translateX(-50%); left: 50%; position: absolute; }",
				".extend::before { width: 8px; height: 7px; border-radius: 2px; top: 67%; box-shadow: 0px 0px 0px 32px inset, 10px -10px, -10px -14px; }",
				".extend::after { position: absolute; width: 2px; height: 100%; box-shadow: 0px 0px 0px 32px inset, 10px 0px, -10px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"share",
			[
				".extend { height: 9px; width: 9px; border-radius: 50%; box-shadow: 0px 0px 0px 32px inset, 22px -11px 0px 0px, 22px 11px 0px 0px; margin: 12px 24px 13px 1px; }",
				".extend::after, .extend::before { position: absolute; width: 24px; height: 2px; box-shadow: 0px 0px 0px 32px inset; left: 0px; }",
				".extend::before { top: -2px; transform: rotate(-25deg); }",
				".extend::after { top: 9px; transform: rotate(25deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"sync",
			[
				".extend { border: 2px solid; }",
				".extend { width: 26px; height: 26px; border-radius: 50%; border-right-color: transparent; border-left-color: transparent; margin: 4px; }",
				".extend::after, .extend::before { position: absolute; width: 0px; height: 0px; border-width: 6px; border-style: solid; border-right-color: transparent; border-bottom-color: transparent; border-left-color: transparent; }",
				".extend::before { transform: rotate(-45deg); right: -7px; top: 0px; }",
				".extend::after { transform: rotate(135deg); left: -7px; bottom: 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"reset",
			[
				".extend { width: 26px; height: 26px; border-radius: 50%; border-width: 2px; border-style: solid; border-left-color: transparent; margin: 4px; }",
				".extend::before { position: absolute; width: 0px; height: 0px; left: -7px; bottom: 0px; border-width: 6px; border-style: solid; border-right-color: transparent; border-left-color: transparent; border-bottom-color: transparent; transform: rotate(135deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"gear",
			[
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 32px; height: 32px; border: 3px dotted; border-radius: 50%; margin: 1px; }",
				".extend::before { width: 22px; height: 22px; box-shadow: 0px 0px 0px 3px, 0px 0px 0px 2px inset; border-radius: 50%; border: 6px solid transparent; box-sizing: border-box; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"signIn",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend { width: 18px; height: 32px; border-left: none; border-radius: 0px 3px 3px 0px; margin: 1px 8px; }",
				".extend::before { position: absolute; width: 11px; height: 11px; left: -10px; top: 7px; border-bottom: none; border-left: none; transform: rotate(45deg); border-radius: 0px 4px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"signOut",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend { width: 18px; height: 32px; border-right: none; border-radius: 3px 0px 0px 3px; margin: 1px 8px; }",
				".extend::before { position: absolute; width: 11px; height: 11px; right: -2px; top: 7px; border-bottom: none; border-left: none; transform: rotate(45deg); border-radius: 0px 4px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"support",
			[
				".extend { width: 26px; height: 26px; border: 5px solid transparent; box-shadow: 0px 0px 0px 2px inset, 0px 0px 0px 2px; border-radius: 50%; margin: 4px; }",
				".extend::before { position: absolute; width: 7px; height: 7px; top: -3px; left: -3px; transform: rotate(45deg); box-shadow: 0px 0px 0px 32px inset, 21px 0px 0px 0px; }",
				".extend::after { position: absolute; width: 7px; height: 7px; top: -3px; right: -3px; transform: rotate(135deg); box-shadow: 0px 0px 0px 32px inset, 21px 0px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"dropper",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 40px; height: 14px; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 3px solid transparent; border-right: none; box-shadow: -9px 0px 0px 2px inset, 0px 0px 0px 2px inset; border-radius: 50% 6px 6px 50%; transform: rotate(-45deg); margin: 12px -2px 8px -4px; }",
				".extend::before { width: 4px; height: 14px; right: 10px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"tiles",
			[
				".extend { width: 4px; height: 4px; box-shadow: 0px -8px 0px, -8px -8px 0px, 8px -8px 0px, 0px 0px 0px 32px inset, -8px 0px 0px, 8px 0px 0px, 0px 8px 0px, -8px 8px 0px, 8px 8px 0px; margin: 15px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"list",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 4px; height: 4px; box-shadow: 0px 0px 0px 32px inset, 0px -8px 0px 0px, 0px 8px 0px 0px; margin: 15px 26px 15px 4px; }",
				".extend::before { width: 18px; height: 4px; left: 8px; box-shadow: 0px 0px 0px 32px inset, 0px -8px 0px 0px, 0px 8px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"chain",
			[
				".extend::after, .extend::before { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 16px; height: 2px; box-shadow: 0px 0px 0px 32px inset; transform: rotate(-45deg); margin: 16px 9px; }",
				".extend::after, .extend::before { width: 12px; height: 8px; border-radius: 4px; }",
				".extend::before { right: -10px; }",
				".extend::after { left: -10px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"rename",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 26px; height: 10px; border-color: transparent; border-width: 3px; box-shadow: 0px 0px 0px 1px, 11px 0px 0px 0px inset; margin: 12px 4px; }",
				".extend::before { width: 1px; height: 18px; left: 9px; border-width: 2px 4px; border-style: solid; border-right-color: transparent; border-left-color: transparent; box-shadow: 0px 0px 0px 1px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"search",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 22px; height: 22px; border-radius: 50%; transform: rotate(45deg); margin: 4px 4px 8px 8px; }",
				".extend::before { width: 4px; height: 11px; box-shadow: 0px 0px 0px 32px inset; top: 19px; border-radius: 0px 0px 1px 1px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"book",
			[
				".extend, .extend::after, .extend::before { border: 2px solid; }",
				".extend { width: 26px; height: 22px; border-radius: 0px 0px 0px 6px; border-top: none; margin: 10px 4px 2px; }",
				".extend::before { position: absolute; width: 24px; height: 7px; box-sizing: border-box; border-top: none; border-right: none; left: -2px; top: -5px; border-radius: 0px 0px 0px 6px; }",
				".extend::after { position: absolute; width: 24px; height: 8px; box-sizing: border-box; left: -2px; top: -8px; border-bottom: none; border-radius: 6px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"forbidden",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 28px; height: 28px; border-width: 3px; border-radius: 50%; margin: 3px; transform: rotate(45deg); }",
				".extend::before { width: 24px; height: 4px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"trash",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 22px; height: 22px; border-radius: 0px 0px 3px 3px; border-top: none; margin: 9px 6px 3px; }",
				".extend::before { width: 8px; height: 2px; top: -6px; box-shadow: 0px 0px 0px 32px inset, -10px 2px 0px 0px, -6px 2px 0px 0px, 0px 2px 0px 0px, 6px 2px 0px 0px, 10px 2px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"keyboard",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 32px; height: 22px; border-radius: 3px; margin: 6px 1px; }",
				".extend::before { width: 2px; height: 2px; box-shadow: -2px -4px 0px, -6px -4px 0px, -10px -4px 0px, 2px -4px 0px, 6px -4px 0px, 8px -4px 0px, 10px -4px 0px, -4px 0px 0px, -8px 0px 0px, -10px 0px 0px, 0px 0px 0px 32px inset, 4px 0px 0px, 8px 0px 0px, 10px 0px 0px, 4px 4px 0px, 2px 4px 0px, 0px 4px 0px, -2px 4px 0px, -6px 4px 0px, -10px 4px 0px, 6px 4px 0px, 10px 4px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"mouse",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 23px; height: 32px; border-radius: 11px 11px 12px 12px; margin: 1px 5px 1px 6px; }",
				".extend::before { width: 1px; height: 6px; border-radius: 2px; border-color: transparent; border-width: 1px; top: 5px; box-shadow: 0px 0px 0px 1px, 0px 0px 0px 2px inset; }",
				".extend::after { width: 1px; height: 4px; top: 0px; box-shadow: 0px 0px 0px 32px inset, 0px 13px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"user",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 32px; height: 14px; border-radius: 64px 64px 0px 64px 0px 64px; margin: 18px 1px 2px; }",
				".extend::before { width: 12px; height: 12px; top: -20px; border-radius: 50%; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"crop",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend { width: 21px; height: 21px; border-left: none; border-bottom: none; margin: 9px 9px 4px 4px; }",
				".extend::before { position: absolute; width: 21px; height: 21px; top: -7px; right: -7px; border-top: none; border-right: none; box-sizing: border-box; }",
				".extend::after { position: absolute; width: 27px; height: 1px; left: 2px; top: 3px; box-shadow: 0px 0px 0px 32px inset; transform: rotate(-45deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"display",
			[
				".extend { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 26px; height: 22px; margin: 4px 4px 8px; }",
				".extend::before { width: 4px; height: 3px; bottom: -5px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend::after { width: 14px; height: 2px; bottom: -6px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"imac",
			[
				".extend { border: 2px solid; }",
				".extend::after { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 28px; height: 24px; border-width: 2px 2px 6px; border-color: transparent; border-radius: 3px; box-shadow: 0px 0px 0px 1px, 0px 0px 0px 1px inset; margin: 3px 3px 7px; }",
				".extend::before { position: absolute; height: 4px; right: -3px; left: -3px; bottom: -6px; box-shadow: 0px 0px 0px 32px inset; border-radius: 0px 0px 3px 3px; }",
				".extend::after { width: 9px; height: 7px; box-shadow: 0px 0px 0px 32px inset; bottom: -12px; border-radius: 32px 64px 32px 64px 0px 64px 0px 64px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"iphone",
			[
				".extend { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 19px; height: 31px; border-radius: 3px; border-width: 5px 1px; border-color: transparent; box-shadow: 0px 0px 0px 1px, 0px 0px 0px 1px inset; margin: 2px 8px 1px 7px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 3px; height: 1px; top: -3px; }",
				".extend::after { width: 3px; height: 3px; bottom: -4px; border-radius: 50%; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"macbook",
			[
				".extend::before { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 32px; height: 2px; box-shadow: 0px 0px 0px 32px inset; border-radius: 0px 3px 0px 3px 32px 3px 32px 3px; margin: 25px 1px 7px; }",
				".extend::before { width: 20px; height: 14px; bottom: 2px; border-width: 3px 1px 1px; border-color: transparent; border-radius: 3px 3px 0px 0px; box-shadow: 0px 0px 0px 1px, 0px 0px 0px 1px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"imacBold",
			[
				".extend { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 28px; height: 22px; border-radius: 4px; margin: 4px 3px 8px; }",
				".extend::before { width: 9px; height: 7px; box-shadow: 0px 0px 0px 32px inset; bottom: -6px; border-radius: 32px 64px 32px 64px 0px 64px 0px 64px; }",
				".extend::after { width: 24px; height: 3px; box-shadow: 0px 0px 0px 32px inset; bottom: 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"iphoneBold",
			[
				".extend { border: 2px solid; }",
				".extend { width: 20px; height: 32px; margin: 1px 7px; border-radius: 4px; border-width: 5px 2px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"macbookBold",
			[
				".extend::before { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 32px; height: 2px; box-shadow: 0px 0px 0px 32px inset; margin: 25px 1px 7px; }",
				".extend::before { width: 20px; height: 14px; bottom: 2px; border-width: 3px 2px 1px; border-radius: 3px 3px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"nexus",
			[
				".extend { border: 2px solid; }",
				".extend { width: 21px; height: 32px; border-width: 3px 1px; border-radius: 16px/3px; margin: 1px 7px 1px 6px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"microphone",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 22px; height: 15px; border-width: 0px 2px 2px; border-radius: 20px/0 0 20px 20px; margin: 12px 6px 7px; }",
				".extend::before { width: 10px; height: 18px; top: -11px; border-radius: 20px; }",
				".extend::after { width: 2px; height: 2px; bottom: -4px; box-shadow: 0px 0px 0px 32px inset, 0px 2px, 0px 4px, -2px 4px, -4px 4px, -6px 4px, 2px 4px, 4px 4px, 6px 4px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"asterisk",
			[
				".extend, .extend::after, .extend::before { width: 4px; height: 20px; box-shadow: 0px 0px 0px 32px inset; border-radius: 1px; margin: 7px 15px; }",
				".extend::after, .extend::before { position: absolute; margin: 0px; left: 0px; top: 0px; }",
				".extend::before { transform: rotate(-58deg); }",
				".extend::after { transform: rotate(58deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"terminal",
			[
				".extend { border: 2px solid; }",
				".extend { width: 28px; height: 24px; margin: 5px 3px; }",
				".extend::before { width: 5px; height: 5px; position: absolute; top: 50%; transform: translateY(-50%) rotate(45deg); left: 3px; border-width: 2px 2px 0px 0px; border-style: solid; }",
				".extend::after { position: absolute; width: 5px; height: 0px; border-bottom: 2px solid; right: 6px; bottom: 4px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"paperClip",
			[
				".extend, .extend::after, .extend::before { border: 2px solid; }",
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 24px; height: 18px; border-left: none; border-radius: 0px 16px 16px 0px; transform: rotate(-45deg); margin: 5px 0px 11px 10px; }",
				".extend::before { width: 18px; height: 6px; right: 2px; border-radius: 0px 16px 16px 0px; border-left: none; }",
				".extend::after { position: absolute; width: 12px; height: 10px; left: -12px; top: -2px; border-right: none; border-radius: 16px 0px 0px 16px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"market",
			[
				".extend, .extend::after { border: 2px solid; }",
				".extend::after { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 32px; height: 12px; border-top: none; margin: 19px 1px 3px; }",
				".extend::before { width: 6px; height: 13px; position: absolute; top: -15px; left: -5px; border-radius: 0px 0px 10px 10px; border-left: none; box-shadow: 0px 0px 0px 32px inset, 8px 0px 0px, 16px 0px 0px, 24px 0px 0px, 32px 0px 0px; }",
				".extend::after { width: 6px; height: 6px; bottom: -2px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"clock",
			[
				".extend { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 26px; height: 26px; border-radius: 50%; margin: 4px; }",
				".extend::after, .extend::before { top: 35%; box-shadow: 0px 0px 0px 32px inset; border-radius: 2px; }",
				".extend::before { width: 2px; height: 9px; }",
				".extend::after { width: 6px; height: 2px; transform-origin: left center 0px; transform: rotate(45deg) translate(1px, 2px); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"textAlignRight",
			[
				".extend { width: 28px; height: 22px; margin: 6px 3px; }",
				".extend::after, .extend::before { position: absolute; height: 2px; box-shadow: 0px 0px 0px 32px inset, 0px 8px 0px 0px, 0px 16px 0px 0px; right: 0px; }",
				".extend::before { width: 28px; top: 0px; }",
				".extend::after { width: 18px; top: 4px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"textAlignCenter",
			[
				".extend::after, .extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 28px; height: 22px; margin: 6px 3px; }",
				".extend::after, .extend::before { position: absolute; height: 2px; box-shadow: 0px 0px 0px 32px inset, 0px 8px 0px 0px, 0px 16px 0px 0px; right: 0px; }",
				".extend::before { width: 28px; top: 0px; }",
				".extend::after { width: 18px; top: 4px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"textAlignLeft",
			[
				".extend { width: 28px; height: 22px; margin: 6px 3px; }",
				".extend::after, .extend::before { position: absolute; height: 2px; box-shadow: 0px 0px 0px 32px inset, 0px 8px 0px 0px, 0px 16px 0px 0px; right: 0px; }",
				".extend::before { width: 28px; top: 0px; }",
				".extend::after { width: 18px; top: 4px; }",
				".extend::after, .extend::before { left: 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"indent",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 20px; height: 16px; border-width: 4px 0px 4px 8px; border-style: solid; border-color: transparent; box-shadow: 0px -2px, 0px 2px, 0px 2px inset, 0px -2px inset; margin: 9px 7px; }",
				".extend::before { left: -8px; border-width: 5px 0px 5px 5px; border-style: solid; border-right-color: initial; border-left-color: initial; border-image: initial; border-top-color: transparent; border-bottom-color: transparent; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"outdent",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 20px; height: 16px; border-width: 4px 0px 4px 8px; border-style: solid; border-color: transparent; box-shadow: 0px -2px, 0px 2px, 0px 2px inset, 0px -2px inset; margin: 9px 7px; }",
				".extend::before { left: -8px; border-width: 5px 0px 5px 5px; border-style: solid; border-right-color: initial; border-left-color: initial; border-image: initial; border-top-color: transparent; border-bottom-color: transparent; }",
				".extend::before { border-left-width: 0px; border-right-width: 5px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"frown",
			[
				".extend, .extend::after { border: 2px solid; }",
				".extend { border-radius: 50%; height: 30px; width: 30px; margin: 2px; }",
				".extend::before { border-radius: 50%; box-shadow: 8px 0px 0px 0px, 0px 0px 0px 2px inset; height: 4px; width: 4px; left: 7px; position: absolute; top: 27%; }",
				".extend::after { border-radius: 50%; transform: translateX(-50%); border-top-color: transparent; border-left-color: transparent; border-right-color: transparent; height: 16px; left: 50%; position: absolute; top: 6%; width: 16px; }",
				".extend::after { transform: translateX(-50%) rotate(180deg); transform-origin: center 85% 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"meh",
			[
				".extend, .extend::after { border: 2px solid; }",
				".extend { border-radius: 50%; height: 30px; width: 30px; margin: 2px; }",
				".extend::before { border-radius: 50%; box-shadow: 8px 0px 0px 0px, 0px 0px 0px 2px inset; height: 4px; width: 4px; left: 7px; position: absolute; top: 27%; }",
				".extend::after { border-radius: 50%; transform: translateX(-50%); border-top-color: transparent; border-left-color: transparent; border-right-color: transparent; height: 16px; left: 50%; position: absolute; top: 6%; width: 16px; }",
				".extend::after { top: 0px; width: 12px; border-left-width: 0px; border-right-width: 0px; border-radius: 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"locationArrow",
			[
				".extend { width: 32px; height: 32px; margin: 1px; }",
				".extend::before { position: absolute; left: 7px; top: 16px; border-width: 6px 0px 6px 6px; border-style: solid; border-left-color: transparent; transform: rotate(-45deg); }",
				".extend::after { position: absolute; top: 10px; left: 2px; border-width: 10px; border-style: solid; border-bottom-color: transparent; border-left-color: transparent; transform: skew(-30deg, -30deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"plusCircle",
			[
				".extend { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 30px; height: 30px; margin: 2px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 20px; height: 2px; }",
				".extend::after { height: 20px; width: 2px; }",
				".extend::before { width: 18px; }",
				".extend::after { height: 18px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"checkCircle",
			[
				".extend, .extend { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 20px; height: 2px; }",
				".extend { width: 28px; height: 28px; margin: 3px 0px 3px 6px; transform: rotate(-45deg); }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::after { position: absolute; height: 12px; width: 2px; left: 4px; bottom: 14px; }",
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend::before { width: 14px; top: 15px; left: 14px; }",
				".extend::after { height: 8px; left: 7px; bottom: 10px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"crossCircle",
			[
				".extend { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 30px; height: 30px; margin: 2px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 20px; height: 2px; }",
				".extend::after { height: 20px; width: 2px; }",
				".extend::before { width: 18px; }",
				".extend::after { height: 18px; }",
				".extend { transform: rotate(45deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"exclamation",
			[
				".extend::after { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { overflow: visible; width: 30px; border-bottom: 2px solid; border-radius: 0px 0px 4px 4px; margin: 26px 2px 6px; }",
				".extend::before { position: absolute; width: 26px; height: 26px; left: 1px; top: -14px; border-width: 2px 0px 0px 2px; border-style: solid; border-radius: 4px 0px; transform: rotate(45deg) skew(12deg, 12deg); }",
				".extend::after { width: 4px; height: 3px; top: -14px; box-shadow: 0px 0px 0px 32px inset, 0px 3px, 0px 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"exclamationCircle",
			[
				".extend { border: 2px solid; }",
				".extend::after { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { overflow: visible; width: 30px; border-bottom: 2px solid; border-radius: 0px 0px 4px 4px; margin: 26px 2px 6px; }",
				".extend::before { position: absolute; width: 26px; height: 26px; left: 1px; top: -14px; border-width: 2px 0px 0px 2px; border-style: solid; border-radius: 4px 0px; transform: rotate(45deg) skew(12deg, 12deg); }",
				".extend::after { width: 4px; height: 3px; top: -14px; box-shadow: 0px 0px 0px 32px inset, 0px 3px, 0px 8px; }",
				".extend { margin: 2px; }",
				".extend::before { display: none; }",
				".extend::after { box-shadow: 0px 0px 0px 32px inset, 0px 3px, 0px 5px, 0px 10px; top: 6px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"comment",
			[
				".extend { width: 30px; height: 20px; box-shadow: 0px 0px 0px 32px inset; border-radius: 4px; margin: 5px 2px 9px; }",
				".extend::before { position: absolute; width: 8px; height: 8px; box-shadow: 0px 0px 0px 32px inset; transform: rotate(-45deg); bottom: -4px; left: 6px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"commentEmpty",
			[
				".extend { border: 2px solid; }",
				".extend { width: 30px; height: 22px; border-radius: 4px 4px 7px 7px; border-bottom-color: transparent; margin: 5px 2px 7px; }",
				".extend::before { position: absolute; width: 6px; height: 6px; border-width: 0px 0px 2px 2px; border-style: solid; transform: rotate(-45deg); bottom: -4px; left: 6px; }",
				".extend::after { position: absolute; width: 8px; height: 2px; border-width: 0px 12px 0px 6px; border-style: solid; bottom: 0px; left: 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"areaChart",
			[
				".extend { border: 2px solid; }",
				".extend { width: 30px; height: 22px; border-top-width: 0px; border-right-width: 0px; border-color: transparent; box-shadow: -2px 2px; overflow: hidden; margin: 4px 0px 8px 4px; }",
				".extend::before { position: absolute; left: 0px; bottom: 7px; border-width: 6px; border-style: solid; border-color: transparent transparent currentcolor; border-image: initial; box-shadow: 0px 7px; }",
				".extend::after { position: absolute; left: 11px; bottom: 4px; border-width: 0px 6px 13px; border-style: solid; border-color: transparent transparent currentcolor; box-shadow: 0px 4px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"pieChart",
			[
				".extend { width: 0px; height: 0px; border-width: 15px; border-style: solid; border-top-color: initial; border-bottom-color: initial; border-left-color: initial; border-image: initial; border-right-color: transparent; border-radius: 50%; transform: rotate(-45deg); margin: 2px; }",
				".extend::before { position: absolute; width: 0px; height: 0px; left: -11px; top: -14px; border-width: 14px; border-style: solid; border-right-color: initial; border-image: initial; border-left-color: transparent; border-bottom-color: transparent; border-top-color: transparent; border-radius: 50%; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"barChart",
			[
				".extend { border: 2px solid; }",
				".extend { width: 30px; height: 22px; border-top-width: 0px; border-right-width: 0px; border-color: transparent; box-shadow: -2px 2px; overflow: hidden; margin: 4px 0px 8px 4px; }",
				".extend { border-color: transparent; box-shadow: -2px 2px; margin: 4px 0px 8px 4px; }",
				".extend::before { position: absolute; left: 0px; bottom: 0px; width: 4px; height: 15px; box-shadow: 0px -8px 0px 0px inset, 6px 0px, 12px 7px, 18px 5px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"bookmark",
			[
				".extend { width: 0px; height: 0px; border-width: 9px; border-style: solid; border-top-color: initial; border-right-color: initial; border-left-color: initial; border-image: initial; border-bottom-color: transparent; box-shadow: 0px -4px; border-radius: 3px 3px 0px 0px; margin: 10px 8px 6px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"bookmarkEmpty",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend { width: 18px; height: 22px; border-bottom: none; border-radius: 3px 3px 2px 2px; overflow: hidden; margin: 6px 8px; }",
				".extend::before { position: absolute; width: 12px; height: 12px; bottom: 0px; left: 0px; border-right: none; border-bottom: none; transform: rotate(45deg) translate(35%, 35%); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"filter",
			[
				".extend { width: 0px; height: 0px; border-top: 10px solid; border-right: 10px solid transparent; border-left: 10px solid transparent; border-image: initial; border-bottom: none; padding: 3px; box-shadow: 0px 7px inset; margin: 9px 4px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"volume",
			[
				".extend { width: 0px; height: 0px; border-top: 7px solid transparent; border-right: 7px solid; border-bottom: 7px solid transparent; border-image: initial; border-left: none; padding: 6px 3px; box-shadow: 4px 0px inset; margin: 4px 10px 4px 11px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"volumeLow",
			[
				".extend::before { border: 2px solid; }",
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 0px; height: 0px; border-top: 7px solid transparent; border-right: 7px solid; border-bottom: 7px solid transparent; border-image: initial; border-left: none; padding: 6px 3px; box-shadow: 4px 0px inset; margin: 4px 10px 4px 11px; }",
				".extend { margin: 4px 14px 4px 7px; }",
				".extend::before { width: 15px; height: 15px; position: absolute; border-radius: 50%; border-top-color: transparent; border-bottom-color: transparent; border-left-color: transparent; left: 2px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"volumeMedium",
			[
				".extend::before { border: 2px solid; }",
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 0px; height: 0px; border-top: 7px solid transparent; border-right: 7px solid; border-bottom: 7px solid transparent; border-image: initial; border-left: none; padding: 6px 3px; box-shadow: 4px 0px inset; margin: 4px 10px 4px 11px; }",
				".extend { margin: 4px 14px 4px 7px; }",
				".extend::before { width: 15px; height: 15px; position: absolute; border-radius: 50%; border-top-color: transparent; border-bottom-color: transparent; border-left-color: transparent; left: 2px; }",
				".extend { margin: 4px 16px 4px 5px; }",
				".extend::before { border-style: double; border-width: 6px; left: -2px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"volumeHigh",
			[
				".extend::after, .extend::before { border: 2px solid; }",
				".extend::after, .extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 0px; height: 0px; border-top: 7px solid transparent; border-right: 7px solid; border-bottom: 7px solid transparent; border-image: initial; border-left: none; padding: 6px 3px; box-shadow: 4px 0px inset; margin: 4px 10px 4px 11px; }",
				".extend { margin: 4px 14px 4px 7px; }",
				".extend::after, .extend::before { width: 15px; height: 15px; position: absolute; border-radius: 50%; border-top-color: transparent; border-bottom-color: transparent; border-left-color: transparent; left: 2px; }",
				".extend { margin: 4px 16px 4px 5px; }",
				".extend::before { border-style: double; border-width: 6px; left: -2px; }",
				".extend { margin: 4px 18px 4px 3px; }",
				".extend::after { width: 32px; height: 32px; left: -7px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"volumeDecrease",
			[
				".extend::after, .extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 0px; height: 0px; border-top: 7px solid transparent; border-right: 7px solid; border-bottom: 7px solid transparent; border-image: initial; border-left: none; padding: 6px 3px; box-shadow: 4px 0px inset; margin: 4px 10px 4px 11px; }",
				".extend { margin: 4px 16px 4px 5px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 10px; height: 2px; left: 17px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"volumeIncrease",
			[
				".extend::after, .extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 0px; height: 0px; border-top: 7px solid transparent; border-right: 7px solid; border-bottom: 7px solid transparent; border-image: initial; border-left: none; padding: 6px 3px; box-shadow: 4px 0px inset; margin: 4px 10px 4px 11px; }",
				".extend { margin: 4px 16px 4px 5px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 10px; height: 2px; left: 17px; }",
				".extend::after { height: 10px; width: 2px; left: 21px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"volumeMute",
			[
				".extend::after, .extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 0px; height: 0px; border-top: 7px solid transparent; border-right: 7px solid; border-bottom: 7px solid transparent; border-image: initial; border-left: none; padding: 6px 3px; box-shadow: 4px 0px inset; margin: 4px 10px 4px 11px; }",
				".extend { margin: 4px 16px 4px 5px; }",
				".extend::after, .extend::before { box-shadow: 0px 0px 0px 32px inset; }",
				".extend::before { width: 10px; height: 2px; left: 17px; }",
				".extend::after { height: 10px; width: 2px; left: 21px; }",
				".extend::after, .extend::before { transform: translateY(-50%) rotate(45deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"tag",
			[
				".extend, .extend::after { border: 2px solid; }",
				".extend::after { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 18px; height: 24px; border-radius: 6px 6px 4px 4px; border-top: none; transform: rotate(45deg); margin: 5px 8px; }",
				".extend::before { position: absolute; top: -4px; left: 1px; width: 10px; height: 10px; border-width: 2px 0px 0px 2px; border-style: solid; transform: rotate(45deg); border-radius: 5px 0px 0px; }",
				".extend::after { top: 1px; width: 3px; height: 3px; border-radius: 50%; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"calendar",
			[
				".extend { width: 32px; height: 28px; border-width: 4px 2px 2px; border-style: solid; border-radius: 4px; margin: 5px 1px 1px; }",
				".extend::before { position: absolute; width: 4px; height: 4px; top: 3px; left: 3px; box-shadow: 0px 0px 0px 32px inset, 6px 0px, 12px 0px, 18px 0px, 0px 6px, 6px 6px, 12px 6px, 18px 6px, 0px 12px, 6px 12px, 12px 12px, 18px 12px; }",
				".extend::after { position: absolute; width: 4px; height: 8px; box-shadow: 0px 0px 0px 32px inset, 16px 0px; border-radius: 4px; top: -8px; left: 4px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"camera",
			[
				".extend { border: 2px solid; }",
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 32px; height: 24px; border-radius: 4px; margin: 5px 1px; }",
				".extend::before { width: 10px; height: 10px; border: 1px solid transparent; box-shadow: 0px 0px 0px 1px inset, 0px 0px 0px 2px; border-radius: 50%; }",
				".extend::after { position: absolute; width: 4px; height: 2px; right: 2px; top: 2px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"piano",
			[
				".extend { border: 2px solid; }",
				".extend { width: 28px; height: 22px; margin: 6px 3px; }",
				".extend::before { position: absolute; left: 4px; top: 0px; width: 1px; height: 100%; box-shadow: 0px 0px 0px 32px inset, 5px 0px, 10px 0px, 15px 0px; }",
				".extend::after { position: absolute; width: 3px; height: 12px; left: 3px; top: 0px; box-shadow: 0px 0px 0px 32px inset, 5px 0px, 10px 0px, 15px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"ruler",
			[
				".extend { border: 2px solid; }",
				".extend { width: 27px; height: 12px; margin: 11px 4px 11px 3px; }",
				".extend::before { position: absolute; width: 1px; height: 4px; box-shadow: 0px 0px 0px 32px inset, 6px 0px, 12px 0px; left: 5px; top: 0px; }",
				".extend::after { position: absolute; width: 1px; height: 2px; box-shadow: 0px 0px 0px 32px inset, 2px 0px, 6px 0px, 8px 0px, 12px 0px, 14px 0px, 18px 0px, 20px 0px; left: 1px; top: 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"cup",
			[
				".extend::after { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 22px; height: 16px; box-shadow: 0px 0px 0px 32px inset; border-radius: 0px 0px 5px 5px; margin: 6px 6px 12px; }",
				".extend::before { position: absolute; right: -3px; top: 4px; width: 5px; height: 5px; border-radius: 50%; box-shadow: 0px 0px 0px 2px; }",
				".extend::after { bottom: -5px; width: 26px; height: 3px; border-radius: 0px 0px 3px 3px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"creditCard",
			[
				".extend { border: 2px solid; }",
				".extend { width: 32px; height: 24px; border-radius: 3px; margin: 5px 1px; }",
				".extend::before { position: absolute; top: 4px; width: 100%; height: 6px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend::after { left: 3px; bottom: 3px; position: absolute; width: 4px; height: 2px; box-shadow: 0px 0px 0px 32px inset, 6px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"facebook",
			[
				".extend { width: 9px; height: 26px; box-shadow: 2px 4px 0px 0px inset; border-left: 3px solid; border-radius: 5px 0px 0px; margin: 4px 11px 4px 14px; }",
				".extend::before { position: absolute; top: 9px; left: -6px; width: 11px; height: 0px; border-top: 4px solid; border-right: 1px solid transparent; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"twitter",
			[
				".extend { width: 14px; height: 23px; border-radius: 0px 0px 0px 8px; box-shadow: -6px 2px 0px 0px; margin: 4px 7px 7px 13px; }",
				".extend::before { position: absolute; bottom: -2px; left: -6px; width: 17px; height: 6px; border-radius: 0px 0px 0px 8px; box-shadow: 4px -6px inset, 0px -11px; }",
				".extend::after { position: absolute; width: 6px; height: 6px; box-shadow: 0px 0px 0px 32px inset, 13px 8px, 13px 19px; border-radius: 50%; left: -6px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"gplus",
			[
				".extend::after { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 10px; height: 2px; box-shadow: 0px 0px 0px 32px inset; margin: 14px 4px 18px 20px; }",
				'.extend::before { position: absolute; top: -5px; right: 10px; font-family: georgia; font-size: 32px; text-indent: 0px; line-height: 0; content: "g" !important; }',
				".extend::after { width: 2px; height: 10px; box-shadow: 0px 0px 0px 32px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"youtube",
			[
				".extend, .extend::before { border: 2px solid; }",
				".extend::after { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { border-right-color: transparent; border-left-color: transparent; border-radius: 10px; width: 32px; height: 22.29px; margin: 6px 1px; }",
				".extend::before { position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; border-top-color: transparent; border-bottom-color: transparent; border-radius: 6px 3px; }",
				".extend::after { width: 0px; height: 0px; border-width: 4px 0px 4px 8px; border-style: solid; border-top-color: transparent; border-bottom-color: transparent; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"linkedIn",
			[
				".extend { width: 5px; height: 16px; box-shadow: 0px 0px 0px 32px inset, 8px 0px; margin: 12px 24px 6px 5px; }",
				".extend::before { position: absolute; width: 5px; height: 5px; box-shadow: 0px 0px 0px 32px inset; top: -7px; left: 0px; border-radius: 50%; }",
				".extend::after { position: absolute; width: 12px; height: 16px; border-right: 1px solid; left: 11px; bottom: 0px; border-radius: 8px 11px 5px 0px 0px; box-shadow: -4px 4px inset; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"instagram",
			[
				".extend::before { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }",
				".extend { width: 26px; height: 26px; box-shadow: 0px 0px 0px 2px inset; border-radius: 4px; margin: 4px; }",
				".extend::before { width: 10px; height: 10px; border-radius: 50%; box-shadow: 0px 0px 0px 3px; }",
				".extend::after { position: absolute; width: 5px; height: 5px; border-radius: 1px; right: 3px; top: 3px; box-shadow: 0px 0px 0px 2px, 1px 1px 0px 2px, -5px -1px 0px 1px, -10px -1px 0px 1px, -16px 1px 0px 2px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"flickr",
			[
				".extend::after, .extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 24px; height: 24px; overflow: hidden; border-radius: 4px; margin: 5px; }",
				".extend::after, .extend::before { width: 7px; height: 7px; border-radius: 50%; }",
				".extend::before { left: 4px; box-shadow: 0px 0px 0px 1px, 0px -10px 0px 6px, 0px 10px 0px 6px, -4px 0px 0px 3px; }",
				".extend::after { right: 4px; box-shadow: 0px 0px 0px 1px, 0px -10px 0px 6px, 0px 10px 0px 6px, 4px 0px 0px 3px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"delicious",
			[
				".extend { width: 24px; height: 24px; overflow: hidden; border-radius: 4px; box-shadow: 0px 0px 0px 2px inset; margin: 5px; }",
				".extend::before { position: absolute; width: 12px; height: 12px; box-shadow: 0px 0px 0px 32px inset, 12px -12px 0px 0px; left: 0px; bottom: 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"codepen",
			[
				".extend { width: 2px; height: 10px; box-shadow: 0px 0px 0px 32px inset, 0px 15px, -11px 7px, 11px 7px; margin: 4px 16px 20px; }",
				".extend::before { position: absolute; right: 2px; top: 3px; width: 11px; height: 4px; transform: skew(0deg, -35deg) scaleY(0.6); box-shadow: 0px 0px 0px 32px inset, 0px 13px, 11px 26px, 12px 39px; }",
				".extend::after { position: absolute; left: 2px; top: 3px; width: 11px; height: 4px; transform: skew(0deg, 35deg) scaleY(0.6); box-shadow: 0px 0px 0px 32px inset, 0px 13px, -11px 26px, -12px 39px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"blogger",
			[
				".extend { width: 24px; height: 14px; border-radius: 0px 0px 7px 7px; margin: 14px 5px 6px; }",
				".extend, .extend::before { border-width: 6px; border-style: solid; }",
				".extend::before { position: absolute; width: 8px; height: 2px; left: -6px; top: -15px; border-radius: 6px 6px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"disqus",
			[
				".extend { width: 31px; height: 31px; box-shadow: 0px 0px 0px 32px inset; border-radius: 50%; margin: 1px 1px 2px 2px; }",
				".extend::before { position: absolute; width: 0px; height: 0px; border-width: 10px 5px 5px; border-style: solid; border-right-color: transparent; border-bottom-color: transparent; border-left-color: transparent; border-image: initial; border-top-color: initial; transform: rotate(50deg); left: -5px; top: 20px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"dribbble",
			[
				".extend { width: 26px; height: 26px; border-radius: 50%; box-shadow: 0px 0px 0px 2px inset; overflow: hidden; position: relative; background-image: radial-gradient(50% 100%, transparent 0px 9px, currentcolor 10px 11px, transparent 12px); background-repeat: no-repeat; background-position: -8px center; transform: rotate(-25deg); margin: 4px; }",
				".extend::after, .extend::before { position: absolute; border-radius: 50%; border: 2px solid; width: 40px; height: 30px; }",
				".extend::after { top: 14px; left: -7px; width: 32px; }",
				".extend::before { left: -6px; top: -23px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"play",
			[
				".extend { width: 0px; height: 0px; border-width: 10px 0px 10px 16px; border-style: solid; border-top-color: transparent; border-bottom-color: transparent; margin: 7px 9px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"pause",
			[
				".extend { width: 6px; height: 20px; margin: 7px 20px 7px 8px; box-shadow: 0px 0px 0px 32px inset, 12px 0px 0px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"stop",
			[
				".extend { width: 0px; height: 0px; border: 10px solid; margin: 7px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"rewind",
			[
				".extend { transform: rotate(180deg); }",
				".extend { width: 0px; height: 0px; border-width: 10px; border-style: solid; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-image: initial; border-left-color: initial; margin: 7px; }",
				".extend::before { position: absolute; left: 0px; top: -10px; width: 0px; height: 0px; border-width: 10px; border-style: solid; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-image: initial; border-left-color: initial; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"forward",
			[
				".extend { width: 0px; height: 0px; border-width: 10px; border-style: solid; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-image: initial; border-left-color: initial; margin: 7px; }",
				".extend::before { position: absolute; left: 0px; top: -10px; width: 0px; height: 0px; border-width: 10px; border-style: solid; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-image: initial; border-left-color: initial; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"next",
			[
				".extend { width: 0px; height: 0px; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-image: initial; border-left: 10px solid; border-right: none; margin: 7px 14px 7px 10px; box-shadow: 4px 0px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"previous",
			[
				".extend { width: 0px; height: 0px; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-image: initial; border-left: 10px solid; border-right: none; margin: 7px 14px 7px 10px; box-shadow: 4px 0px; }",
				".extend { transform: rotate(180deg); margin: 7px 10px 7px 14px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretRight",
			[
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretLeft",
			[
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(180deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretUp",
			[
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(-90deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretDown",
			[
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(90deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"rightArrow",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 16px; height: 4px; margin: 15px 9px; box-shadow: 0px 0px 0px 2px inset; transform: translateX(-3px); }",
				".extend::before { border-style: solid; border-width: 8px 0px 8px 8px; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-left-color: inherit; left: 100%; right: auto; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"leftArrow",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 16px; height: 4px; margin: 15px 9px; box-shadow: 0px 0px 0px 2px inset; transform: translateX(-3px); }",
				".extend::before { border-style: solid; border-width: 8px 0px 8px 8px; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-left-color: inherit; left: 100%; right: auto; }",
				".extend { transform: translateX(3px) rotate(180deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"upArrow",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 16px; height: 4px; margin: 15px 9px; box-shadow: 0px 0px 0px 2px inset; transform: translateX(-3px); }",
				".extend::before { border-style: solid; border-width: 8px 0px 8px 8px; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-left-color: inherit; left: 100%; right: auto; }",
				".extend { transform: translateY(3px) rotate(-90deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"downArrow",
			[
				".extend::before { position: absolute; top: 50%; transform: translateY(-50%); }",
				".extend { width: 16px; height: 4px; margin: 15px 9px; box-shadow: 0px 0px 0px 2px inset; transform: translateX(-3px); }",
				".extend::before { border-style: solid; border-width: 8px 0px 8px 8px; border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-left-color: inherit; left: 100%; right: auto; }",
				".extend { transform: translateY(-3px) rotate(90deg); }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"sun",
			[
				".extend { width: 22px; height: 22px; border: 2px solid; border-radius: 50%; box-shadow: -15px 0px 0px -9px, 15px 0px 0px -9px, 0px -15px 0px -9px, 0px 15px 0px -9px, 11px 11px 0px -9px, -11px -11px 0px -9px, 11px -11px 0px -9px, -11px 11px 0px -9px; margin: 6px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"moon",
			[
				".extend { width: 22px; height: 22px; border-radius: 50%; overflow: hidden; margin: 6px; }",
				".extend::before { position: absolute; width: 20px; height: 20px; top: -2px; left: 6px; border-radius: 50%; box-shadow: 0px 0px 0px 32px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretRightCircle",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretLeftCircle",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(180deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretUpCircle",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(-90deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretDownCircle",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(90deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 50%; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretRightSquare",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 4px; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretLeftSquare",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(180deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 4px; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretUpSquare",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(-90deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 4px; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"caretDownSquare",
			[
				".extend { border: 2px solid; }",
				".extend { width: 12px; height: 20px; margin: 7px 11px; }",
				".extend::after, .extend::before { width: 14px; height: 2px; position: absolute; bottom: 0px; margin: auto 0px; right: 2px; box-shadow: 0px 0px 0px 32px inset; transform-origin: right center 0px; }",
				".extend::before { top: 2px; transform: rotate(45deg); }",
				".extend::after { top: 0px; transform: rotate(-45deg); }",
				".extend { transform: rotate(90deg); }",
				".extend::after, .extend::before { width: 11px; right: 8px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { border-radius: 4px; width: 30px; height: 30px; margin: 2px; }",
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"cart",
			[
				".extend { width: 22px; height: 0px; border-width: 14px 6px 0px 2px; border-style: solid; border-right-color: transparent; border-left-color: transparent; margin: 9px 3px 11px 9px; }",
				".extend::before { position: absolute; width: 4px; height: 4px; border-radius: 50%; box-shadow: 0px 0px 0px 32px inset, 13px 0px, -4px -20px 0px 1px; top: 2px; left: -3px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		],
		[
			"sitemap",
			[
				".extend::after, .extend::before { position: absolute; left: 50%; transform: translateX(-50%); }",
				".extend { width: 24px; height: 2px; box-shadow: 0px -5px; margin: 21px 5px 11px; }",
				".extend::before { width: 6px; height: 6px; border-radius: 2px; box-shadow: 0px 0px 0px 32px inset, 11px 0px, -11px 0px, 0px -14px 0px 1px; }",
				".extend::after { width: 2px; height: 10px; box-shadow: 0px -7px, 11px -5px, -11px -5px; }",
				".extend { display: inline-block; vertical-align: middle; position: relative; font-style: normal; color: rgb(221, 221, 221); text-align: left; text-indent: -9999px; direction: ltr; }",
				'.extend::after, .extend::before { content: ""; pointer-events: none; }',
				".extend { box-sizing: border-box; }"
			]
		]
	])
};
