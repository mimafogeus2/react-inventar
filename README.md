# **react-inventar**
The official [Inventar](https://www.npmjs.com/package/inventar) React wrapper.

## **What does it do?**
Inventar is a simple but powerful single source of truth for your design stuff.
This components offers a way to work with it in React. Please visit [Inventar’s repo](https://www.npmjs.com/package/inventar) to learn about the what, the why and the how.

This React wrapper accepts an Inventar configuration and (optionally) options, and renders a component with the results:

```jsx
import { ReactInventar } from '@inventar/react-inventar'
import React from 'react'

const MY_INVENTAR_CONFIG = { ... }

export default const MyInventar: React.FC = ({ children }) => {
	// Additional logic here
	return (
		<ReactInventar config={MY_INVENTAR_CONFIG} options={MY_INVENTAR_OPTIONS}>
			{children}
		</ReactInventar>
	)
}
```

Use this if you wish to manage your Inventar configuration from a React component, instead of a dedicated file.

If you’re using JS variables, simply export `jsInventar` from your dedicated Inventar file instead.

If you’re using such a file and would like to use this component as well, you can pass the generated `cssInventar`, you could just use that on any DOM element instead:
```jsx
import { cssInventar } from 'my/inventar/config'

...
<div style={cssInventar}>
	// Rest of your app
</div>
```


## **API**
| Prop              | Type                                                         | Required?              | Description                                                  |
| ————————— | —————————————————————————————— | —————————— | —————————————————————————————— |
| config | [`InventarConfig`]([inventar  -  npm](https://www.npmjs.com/package/inventar#configurations-and-how-to-write-them)) | `true` | An Inventar Configuration for your project |
| options | [`InventarOptions`]([inventar  -  npm](https://www.npmjs.com/package/inventar#options)) | `false` | Additional options supported by Inventar |

## **Contribute**
This is a minimal wrapper, and should follow [Inventar’s](https://www.npmjs.com/package/inventar) API and versioning.
Inventar is in a very early stage, and might be subject to major changes.
I’ll be happy for any feedback and ideas at inventar.feedback(at)foge.us.
The repository will become public soon, and then you could open issues and contribute.
