# Motion

- [Benefits](#benefits)
- [Standards](#standards)
- [Foundations](#foundations)
  - [Style](#style-1)
  - [Timing](#timing-1)
  - [Easing](#easing-1)
  - [Delay](#delay-1)
  - [Movement](#movement-1)
- [Patterns](#patterns)

## Benefits

### Feedback

*Response to a user action*

Providing feedback helps reinforce user actions: someone does something, something happens. Things like hover states, click states, dropdowns, etc. can all give the user helpful context relating to how or why an element responded to a tap or click.

<img src="https://media.giphy.com/media/55s4WWPA6eil3ylcxN/giphy.gif" width="200" height="200" />

### Emphasis

*Attention focus without action*

We know what we want our users to see, and can use motion to draw their eye to it. Calling out key elements can help convey important information or highlight a specific instance that is noteworthy on the page.

<img src="https://media.giphy.com/media/wsUvWIyRLHqAvGFDuG/giphy.gif" width="200" height="200" />

### Context

*Giving the user hints*

The user isn’t as familiar with our path as we are. We can use motion to explain why things are acting the way they are, and give hints as to what will happen next. This is useful for transition states: showing a standard loading indicator, or staggering content load to properly convey information hierarchy.

<img src="https://media.giphy.com/media/2zcmVA2eKBUrR2pmha/giphy.gif" width="200" height="200" />

### Delight

*Make the experience feel unique*

Let’s have some fun with it! There are a million opportunities to add enjoyable instances of animation to enhance the user experience and bring a little life to the site.

<img src="https://media.giphy.com/media/9Vx2KxaxT5PKDEAviN/giphy.gif" width="200" height="200" />

## Standards

To behave in that uniquely Priceline-y way, we need to adhere to a set of standards upon which we shall build our formula for animation.

### Short & Sweet

Animations should be executed quickly, but deliver their important benefit in a short period of time.

### Decisive & with Purpose

Animation should not exist just for the sake of animation. They should provide the user with feedback, emphasis, context, or delight.

### Friendly & Welcoming

Gentle easing should allow the user to have the perception of a comfortable environment, without harsh transitions between states.

### Subtle but Powerful

Animation should not be the center of attention. The user should be able to navigate as usual without distraction, but have the added benefit.

## Foundations

These are the 4 main building blocks we can build our motion standards off of. Defining and combining motion styles, transition durations, easing curves, and delays will allow our products to move much more fluidly.

### Style

Defining standard types of motion

- Example: `scaleIn`

### Timing

Defining standard transition durations

- Example: `durationFast`

### Easing

Defining standard spacing values

- Example: `easeInOut`

### Delay

Defining standard transition delay

- Example: `delayMedium`

### Movement

Defining standard movement distances

- Example: `moveLarge`

## Style

These are the fundamental elements of motion that we can employ throughout the system. They are the first building blocks to deliver the user the feedback, emphasis, context and delight that they deserve.

### `Move`

Position change

<img src="https://media.giphy.com/media/4KFxddfxFmzfo4NXXP/giphy.gif" width="200" height="200" />

### `Scale`

Scale change

<img src="https://media.giphy.com/media/1pA5jpVWErR4nilxMc/giphy.gif" width="200" height="200" />

### `Fade`

Opacity change

<img src="https://media.giphy.com/media/kEpqquVWNhPgFGn7e6/giphy.gif" width="200" height="200" />

### `Spin`

Rotation

<img src="https://media.giphy.com/media/9JcIGYVGu1EtEGc7tk/giphy.gif" width="200" height="200" />

### `Color`

Color change

<img src="https://media.giphy.com/media/27tDIBdk5NlfBVZEXY/giphy.gif" width="200" height="200" />

### `Float`

Z-space change

<img src="https://media.giphy.com/media/QKiWGIJPcIGgUn0xuF/giphy.gif" width="200" height="200" />

### `Morph`

Scale & Position

<img src="https://media.giphy.com/media/5b0l39kESYVX9tAg3j/giphy.gif" width="200" height="200" />

### `Slide`

Position & Opacity

<img src="https://media.giphy.com/media/1eulEvLxmZ9u6AzKzi/giphy.gif" width="200" height="200" />

### `Grow`

Scale & Opacity

<img src="https://media.giphy.com/media/1VV3zzKHqbq28rKlqd/giphy.gif" width="200" height="200" />


## Timing

For any given distance an object must move, the time it takes to achieve the transition determines how fast its movement is. Bucketing these durations allows us to assign them to components, creating a timing standard.

### `durationFast` _150ms_

Used in small animations like button presses

<img src="https://media.giphy.com/media/waciFN9SipaANM3gR7/giphy.gif" width="200" height="200" />

### `durationNormal` _300ms_

Used in medium animations like popovers and tooltips

<img src="https://media.giphy.com/media/oyZURoMMT4hEe8ylFW/giphy.gif" width="200" height="200" />

### `durationSlow` _450ms_

Used for larger components like modals

<img src="https://media.giphy.com/media/QMI917NgswtunziaD1/giphy.gif" width="200" height="200" />

### `durationSlowest` _600ms_

Used in the largest animations like page transitions

<img src="https://media.giphy.com/media/XJ1bv1TM9wh6HVmHXt/giphy.gif" width="200" height="200" />

## Easing

As an object moves a given distance at a given time, its displacement is influenced by the spacing influence between its origin and destination. By creating easing buckets, we can standardize the physics of our motion and define its use relative to the context of the movement.

### `easeInOut` _0.50, 0.00, 0.25, 1.00_

The primary easing curve. Used for any core animation not entering/exiting the screen or a component

<img src="https://media.giphy.com/media/MTKgDtHhgNQUeIFmW7/giphy.gif" width="200" height="200" />

### `easeOut` _0.00, 0.00, 0.25, 1.00_

EaseOut is used when an element is appearing on-screen or within a component

<img src="https://media.giphy.com/media/MTtG1t251Be5PiNlPF/giphy.gif" width="200" height="200" />

### `easeIn` _0.50, 0.00, 1.00, 1.00_

EaseIn is used when an element is removed from the screen or within a component

<img src="https://media.giphy.com/media/3LOppJME3EtwHCUiUw/giphy.gif" width="200" height="200" />


## Delay

### `delaySmall` _60ms_

Used in animations within components

<img src="https://media.giphy.com/media/5zvQrIlegXCi0LfqQc/giphy.gif" width="200" height="200" />

### `delayMedium` _100ms_

Used in animations of smaller components

<img src="https://media.giphy.com/media/5QVZX285rkl69yOTMP/giphy.gif" width="200" height="200" />

### `delayLarge` _140ms_

Used in animations of larger components

<img src="https://media.giphy.com/media/1isegV9N3qb2XmUBU3/giphy.gif" width="200" height="200" />

### `delayXLarge` _180ms_

Used in animations involving multiple components

<img src="https://media.giphy.com/media/1zKRlqQeRv2sVdp6PK/giphy.gif" width="200" height="200" />

## Movement

For elements that are changing position, we have defined some set distances they can travel.

### `moveSmall` _8px_

Used in animations involving parts of a component

<img src="https://media.giphy.com/media/1k1yrM7mcJFvSljGpJ/giphy.gif" width="200" height="200" />

### `moveMedium` _16px_

Used in animations of smaller components

<img src="https://media.giphy.com/media/1ZAzUVPcrSsLn1lq03/giphy.gif" width="200" height="200" />

### `moveLarge` _24px_

Used in animations of larger components

<img src="https://media.giphy.com/media/ksEDCeV1QfZtjfpHzH/giphy.gif" width="200" height="200" />

### `moveXLarge` _32px_

Used in animations involving the largest components

<img src="https://media.giphy.com/media/7J1lqx4jzQnmRq7N7y/giphy.gif" width="200" height="200" />

## Patterns

These patterns help paint the picture of our product to the user. Proper execution and repetition of these elements will create a uniquely branded behavior for Priceline.

### Determinate Load

The determinate loader is used in instances when load time can be determined.

<img src="https://media.giphy.com/media/RK97a5MgzmLAbCTKfu/giphy.gif" width="200" height="200" />

### Indeterminate Load

The indeterminate loader is used in instances when load times cannot be determined.

<img src="https://media.giphy.com/media/fs8Q2BjQhBHYEb7i4i/giphy.gif" width="200" height="200" />

### Skeleton Load

Skeleton loading is used in instances where dynamic content is loading.

<img src="https://media.giphy.com/media/yxssBV7cDdodbt8dqs/giphy.gif" width="200" height="200" />

### Staggering

Staggering content as it loads in helps establish an information hierarchy to an unfamiliar user

<img src="https://media.giphy.com/media/1dMQq2n2F8L9PegxE3/giphy.gif" width="200" height="200" />

### Directionality

Objects should enter the screen from a logical origin and exit accordingly.

<img src="https://media.giphy.com/media/5eF6VSGWQTDZsexouU/giphy.gif" width="200" height="200" />

### Parenting

Parenting helps the user develop relationships and hierarchy between two or more objects on-screen.

<img src="https://media.giphy.com/media/sRFvyiYaZBd4mng4yE/giphy.gif" width="200" height="200" />

