# Motion
## Benefits
### Feedback
_Response to a user action_

Providing feedback helps reinforce user actions: someone does something, something happens. Things like hover states, click states, dropdowns, etc. can all give the user helpful context relating to how or why an element responded to a tap or click.
### Emphasis
_Attention focus without action_

We know what we want our users to see, and can use motion to draw their eye to it. Calling out key elements can help convey important information or highlight a specific instance that is noteworthy on the page.
### Context
_Giving the user hints_

The user isn’t as familiar with our path as we are. We can use motion to explain why things are acting the way they are, and give hints as to what will happen next. This is useful for transition states: showing a standard loading indicator, or staggering content load to properly convey information hierarchy.
### Delight
_Make the experience feel unique_

Let’s have some fun with it! There are a million opportunities to add enjoyable instances of animation to enhance the user experience and bring a little life to the site.
## Standards
For the site to behave in that uniquely Priceline-y way, we need to adhere to a set of standards off which we shall build our formula.
### Short & Sweet
Animations should be executed quickly, but deliver their important benefit in a short period of time.
### Decisive & with Purpose
Animation should not exist just for the sake of animation. They should provide the user with feedback, emphasis, context, or delight.
### Friendly & Welcoming
Gentle easing should allow the user to have the perception of a comfortable environment, without harsh transitions between states.
### Subtle but Powerful
Animation should not be the center of attention. The user should be able to navigate as usual without distraction, but have the added benefit.

## Props
These are the 4 main building blocks we can build our motion standards off of. Defining and combining motion styles, transition durations, easing curves, and delays will allow our products to move much more fluidly.
### Style
Defining standard types of motion

Example: `scaleIn`
### Timing
Defining standard transition durations

Example: `durationFast`
### Easing
Defining standard spacing values

Example: `easeInOut`
### Delay
Defining standard transition delay

Example: `delayMedium`

## Style
These are the fundamental elements of motion that we can employ throughout the system. They are the first building blocks to deliver the user the feedback, emphasis, context and delight that they deserve.

### `Move`
Position change
### `Scale`
Scale change
### `Fade`
Opacity change
### `Spin`
Rotation
### `Color`
Color change
### `Float`
Z-space change
### `Morph`
Scale & Position
### `Slide`
Position & Opacity
### `Grow`
Scale & Opacity

## Timing
For any given distance an object must move, the time it takes to achieve the transition determines how fast its movement is. Bucketing these durations allows us to assign them to components, creating a timing standard.

### `durationFast`_150ms_
Used in small animations like button presses
### `durationNormal`_300ms_
Used in medium animations like popovers and tooltips
### `durationSlow`_450ms_
Used for larger components like modals
### `durationSlowest`_600ms_
Used in the largest animations like page transitions

## Easing
As an object moves a given distance at a given time, its displacement is influenced by the spacing influence between its origin and destination. By creating easing buckets, we can standardize the physics of our motion and define its use relative to the context of the movement.

### `easeInOut`_0.50, 0.00, 0.25, 1.00_
The primary easing curve. Used for any core animation not entering/exiting the screen or a component
### `easeOut`_0.00, 0.00, 0.25, 1.00_
EaseOut is used when an element is appearing on-screen or within a component
### `easeIn`_0.50, 0.00, 1.00, 1.00_
EaseIn is used when an element is removed from the screen or within a component

## Delay

### `delayShort`_60ms_
Used in animations within components
### `delayMedium`_100ms_
Used in animations of smaller components
### `delayLong`_140ms_
Used in animations of larger components
### `delayLongest`_180ms_
Used in animations involving multiple components

## Movement
For elements that are changing position, we have defined some set distances they can travel.

### `moveSmall`_8px_
Used in animations involving parts of a component
### `moveMedium`_16px_
Used in animations of smaller components
### `moveLarge`_24px_
Used in animations of larger components
### `moveXLarge`_32px_
Used in animations involving the largest components

## Patterns
These patterns help paint the picture of our product to the user. Proper execution and repetition of these elements will create a uniquely branded behavior for Priceline.

### Determinate Load
The determinate loader is used in instances when load time can be determined.
### Indeterminate Load
The indeterminate loader is used in instances when load times cannot be determined.
### Skeleton Load
A visualization of elements with in a component - gives the user an understanding of what will populate once loading concludes.
### Staggering
Staggering content as it loads in helps establish an information hierarchy to an unfamiliar user
### Directionality
Objects should enter the screen from a logical origin and exit accordingly.
### Parenting
Parenting helps the user develop relationships between two or more objects on-screen.
