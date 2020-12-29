# SkipMenu

Use the `SkipMenu` at the top of the page to allow keyboard users to easily skip to different sections on the page.

Additionally, it supports `Box` props for styling menu wrapper and each link also supports `Link` props.

## Usage

```.jsx
const skipLinks = [
	{ 
    label: 'Skip to main content',
		targetId: 'main-content',
	}
]
<SkipMenu skipLinks={skipLinks} />
```

## Props

| Prop        | Type   | Description                         			   |
| ----------- | ------ | ------------------------------------------------- |
| `skipLinks` | Array  | Array of objects containing `label` and `targetId`|
