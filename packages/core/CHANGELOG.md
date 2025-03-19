# Change Log - pcln-design-system

This log was last generated on Wed, 19 Mar 2025 14:31:27 GMT and should not be manually modified.

## 6.27.0
Wed, 19 Mar 2025 14:31:27 GMT

### Minor changes

- remove defaultProps

## 6.26.2
Mon, 24 Feb 2025 19:52:35 GMT

### Patches

- add useTextToggle prop to accordion

## 6.26.1
Tue, 04 Feb 2025 16:10:35 GMT

### Patches

- Remove DefaultProps from the Shimmer Component

## 6.26.0
Wed, 22 Jan 2025 14:48:12 GMT

### Minor changes

- adds backgroundColor to RadioCheckToggleCard

## 6.25.4
Tue, 07 Jan 2025 16:55:52 GMT

### Patches

- Drawer is now draggable when user only drags the header, not the content

## 6.25.3
Fri, 03 Jan 2025 17:58:07 GMT

### Patches

- Add drawer snap state change event listener

## 6.25.2
Fri, 20 Dec 2024 16:49:46 GMT

### Patches

- Differentiate pointer type on scroll vs drag action

## 6.25.1
Wed, 18 Dec 2024 13:37:30 GMT

### Patches

- Add prop to disable max height, add z-index to outer container, add error handling to snap hook
- Remove old snap handler logic

## 6.25.0
Wed, 04 Dec 2024 16:48:35 GMT

### Minor changes

- Change fragment to div to bypass type errors

## 6.24.1
Wed, 27 Nov 2024 15:52:57 GMT

### Patches

- add zindex to IconButton in PasswordInput

## 6.24.0
Mon, 25 Nov 2024 19:58:47 GMT

### Minor changes

- Add snap and prop to disable enter animation

## 6.23.0
Fri, 08 Nov 2024 18:14:17 GMT

### Minor changes

- Fix storybook buttons

## 6.22.0
Wed, 06 Nov 2024 20:00:04 GMT

### Minor changes

- Add divider styling logic
- Drawer component custom header onboarding

## 6.21.0
Thu, 24 Oct 2024 15:51:39 GMT

### Minor changes

- update drawer props

## 6.20.2
Thu, 19 Sep 2024 14:45:03 GMT

### Patches

- Upgrade to Storybook 8
- Upgrade React
- Upgrade to framer-motion 11

## 6.20.1
Wed, 04 Sep 2024 12:48:46 GMT

### Patches

- use querySelectorPortal in pcln-menu only when provided to fix SSR issues

## 6.20.0
Mon, 05 Aug 2024 19:52:43 GMT

### Minor changes

- Modified the chatHeader component so that it uses the CloseButton

## 6.19.0
Thu, 25 Jul 2024 19:35:41 GMT

### Minor changes

- Fix close button bug and add max/min width props to Popover

## 6.18.1
Wed, 24 Jul 2024 19:50:47 GMT

### Patches

- feat(UXPT-6345): add a new parameter 'shouldDisableTabIndex' to Dialog component

## 6.18.0
Wed, 24 Jul 2024 15:32:21 GMT

### Minor changes

- Create new Popover using Radix UI

## 6.17.0
Mon, 08 Jul 2024 20:26:12 GMT

### Minor changes

- Update typings for several components

## 6.16.2
Fri, 28 Jun 2024 15:22:55 GMT

### Patches

- Fix Input.HelperText types

## 6.16.1
Tue, 11 Jun 2024 19:02:41 GMT

### Patches

- Add disabled state css for Button component variation=input

## 6.16.0
Fri, 07 Jun 2024 18:56:40 GMT

### Minor changes

- Labels can truncate and FormFields force Label truncation

## 6.15.0
Mon, 03 Jun 2024 16:45:25 GMT

### Minor changes

- updates shadow effect color

## 6.14.0
Thu, 30 May 2024 19:42:04 GMT

### Minor changes

- accordion add custom color for header content and hover

## 6.13.0
Mon, 13 May 2024 15:04:02 GMT

### Minor changes

- use heft-styled-components-plugin

## 6.12.1
Mon, 06 May 2024 21:57:26 GMT

### Patches

- Rename innerContentScroll prop to innerContentOverflow
- Add missing prop to Spinner

## 6.12.0
Thu, 11 Apr 2024 15:00:13 GMT

### Minor changes

- export drawer component

## 6.11.0
Tue, 02 Apr 2024 19:27:27 GMT

### Minor changes

- Added new prop to dialog innerContentScroll
- transpile commonjs output with babel-plugin-styled-components

## 6.10.0
Tue, 26 Mar 2024 16:10:52 GMT

### Minor changes

- Updated Select to use pointer while hovering

## 6.9.0
Thu, 14 Mar 2024 16:12:27 GMT

### Minor changes

- add new drawer component

## 6.8.1
Tue, 12 Mar 2024 15:43:55 GMT

### Patches

- fix webpack bundling

## 6.8.0
Tue, 12 Mar 2024 14:57:49 GMT

### Minor changes

- Added Tab component

## 6.7.2
Fri, 08 Mar 2024 16:04:54 GMT

### Patches

- bug fix for when spinner doesn't spin on mobile devices

## 6.7.1
Wed, 06 Mar 2024 20:07:53 GMT

### Patches

- Created stories for Menu, Popover, and Tooltip in a Dialog
- DialogInnerContentWrapper full height if footer exists

## 6.7.0
Fri, 01 Mar 2024 22:02:10 GMT

### Minor changes

- add caption as text style option

## 6.6.0
Thu, 29 Feb 2024 18:21:33 GMT

### Minor changes

- Minor Button and Select style updates

## 6.5.1
Wed, 28 Feb 2024 20:02:25 GMT

### Patches

- Add BoxProps type to Container type

## 6.5.0
Tue, 27 Feb 2024 17:52:55 GMT

### Minor changes

- SlideBox: add in new props to allow overflow to display on x, y and top
- Create new FloatingActionButtonProvider component

### Patches

- Revert close button changes on Toast

## 6.4.0
Fri, 16 Feb 2024 20:06:38 GMT

### Minor changes

- Add footerContent to Dialog
- Update Dialog close button to use CloseButton and change default heading color
- Add prop to Dialog to show a shadow above its contents on scroll

### Patches

- update orange color to orange dark
- Update checkbox states

## 6.3.0
Fri, 09 Feb 2024 15:27:23 GMT

### Minor changes

- Change Layout implementation from Flex to Grid
- ToastProvider: update to allow animations to come in from the top

## 6.2.3
Wed, 07 Feb 2024 16:01:30 GMT

### Patches

- Added interactive state for formfield 
- Fix type release @public annotations for exported types

## 6.2.2
Mon, 05 Feb 2024 21:51:20 GMT

### Patches

- fix path to types rendered to dist by api-extractor

## 6.2.1
Tue, 30 Jan 2024 20:31:23 GMT

### Patches

- update accordion shadow state for open
- Add color scheme for heading text color
- Correct peerDeps for DSv6

## 6.2.0
Mon, 22 Jan 2024 16:15:34 GMT

### Minor changes

- upgrade webpack5 build process to apply minification and babel-plugin-styled-components
- Added minWidth/maxWidth/minHeight/maxHeight support to Image

### Patches

- abolish barrel files

## 6.1.0
Mon, 22 Jan 2024 14:06:39 GMT

### Minor changes

- Updated dialog Component to have an option overflowX & Y prop

### Patches

- Fix some incorrect TS types

## 6.0.0
Fri, 12 Jan 2024 16:09:00 GMT

### Breaking changes

- Implement heft-webpack5-plugin to optimize production output
- React 18 upgrade

### Minor changes

- Upgrade all @rushstack dependencies to latest

## 5.28.3
Mon, 11 Dec 2023 16:41:10 GMT

### Patches

- remove important on transparent background of link variation of button

## 5.28.2
Thu, 07 Dec 2023 17:59:07 GMT

### Patches

- Fix outgoing ChatMessage Footer position

## 5.28.1
Thu, 30 Nov 2023 15:11:14 GMT

### Patches

- add zindex 1 to label to fix autofill label hiding issue

## 5.28.0
Mon, 27 Nov 2023 22:06:22 GMT

### Minor changes

- Export PaletteFamilyVariation type

## 5.27.5
Tue, 21 Nov 2023 21:18:48 GMT

### Patches

- added changes for cursor, color of radio button and also updated the story

## 5.27.4
Mon, 20 Nov 2023 16:01:48 GMT

### Patches

- Added important for bg css as its been overwritten by other css change to remove bg from link variant of the disabled version of button - UXPT-4211 
- update README

## 5.27.3
Wed, 15 Nov 2023 16:54:32 GMT

### Patches

- Add zIndex to Dialog

## 5.27.2
Mon, 13 Nov 2023 19:10:51 GMT

### Patches

- update ChatMessage accepts react node as child

## 5.27.1
Tue, 07 Nov 2023 22:14:21 GMT

### Patches

- Fix close button position in Dialog

## 5.27.0
Thu, 02 Nov 2023 19:24:44 GMT

### Minor changes

- Add exports for Chat components

## 5.26.0
Tue, 31 Oct 2023 23:55:47 GMT

### Minor changes

- Accordion: add headerDividerColor prop to allow divider between steps

## 5.25.1
Tue, 31 Oct 2023 16:34:17 GMT

### Patches

- add props/features to CloseButton

## 5.25.0
Mon, 16 Oct 2023 17:31:18 GMT

### Minor changes

- Button: add flexProps prop to override any styling to that child component

## 5.24.2
Mon, 25 Sep 2023 17:18:04 GMT

### Patches

- Remove readonly prop from Select

## 5.24.1
Fri, 22 Sep 2023 18:13:30 GMT

### Patches

- Fix regressions related to readonly in Input and Toggle

## 5.24.0
Fri, 22 Sep 2023 14:37:35 GMT

### Minor changes

- add space prop for configurable padding

## 5.23.0
Wed, 20 Sep 2023 18:06:28 GMT

### Minor changes

- Add "ladder" variatio to the Accordion

## 5.22.0
Mon, 18 Sep 2023 18:48:01 GMT

### Minor changes

- Added gradient and strokeWidth property to Spinner

## 5.21.0
Fri, 15 Sep 2023 14:19:20 GMT

### Minor changes

- Added variation prop to the FilterChip, ButtonChip and ChoiceChip, which includes shadow variation
- Replaced :focus on FilterChip, ButtonChip and ChoiceChip with :focus-visible

### Patches

- Add value prop to ChoiceChip Input
- Upgrade pnpm, Storybook ecosystem, typescript and jest

## 5.20.2
Wed, 23 Aug 2023 18:39:11 GMT

### Patches

- Use typescript for Accordion types and remove prop types

## 5.20.1
Wed, 23 Aug 2023 16:19:14 GMT

### Patches

- resolve Avatar propType issue

## 5.20.0
Mon, 21 Aug 2023 19:12:20 GMT

### Minor changes

- export accordion
- add dialog component
- add neutralDarkOnLightest to colorScheme

## 5.19.0
Thu, 10 Aug 2023 14:28:26 GMT

### Minor changes

- Add borderStyles to Card component

## 5.18.0
Wed, 09 Aug 2023 15:37:24 GMT

### Minor changes

- ChoiceChip: add topLabel prop along with width and borderRadius

### Patches

- SlideBox: set default arrowPosition to hide

## 5.17.0
Mon, 31 Jul 2023 13:51:05 GMT

### Minor changes

- add light and dark variation props to Shimmer
- rename origin with base on Shimmer
- update Card stories and docs
- Create FAB and ChatTrigger components
- Create ChatMessageSeparator component

### Patches

- Update image URL

## 5.16.0
Tue, 25 Jul 2023 15:57:04 GMT

### Minor changes

- add radix accordion package
- Add props objectFit and ObjectPosition to Image which apply corresponding CSS styling

## 5.15.0
Thu, 20 Jul 2023 18:44:23 GMT

### Minor changes

- Added new radio check toggle card
- Create ChatMessageContainer component

## 5.14.0
Wed, 19 Jul 2023 17:26:42 GMT

### Minor changes

- add variations to Link
- Add colorScheme to Toast
- Add colorScheme prop to Avatar
- Add colorScheme prop to GenericBanner
- add styling for when card is as button

### Patches

- List component enhancement with listStyle and indentSize props
- Use PricelineSparkle icon on ChatMessage by default

## 5.13.0
Mon, 17 Jul 2023 14:36:49 GMT

### Minor changes

- Create chatActionContainer component
- add overflow support to Box
- add text transform support to Text
- add text transform support to badge
- Add color schemes to theme
- add background-position prop to BackgroundImage component
- Add more color scheme values to stories
- Add colorScheme prop to Hug
- Add zIndices to the theme and use zIndex from styled-system on Input and ShadowEffect
- Add disabled state for Input and Select
- Create ChatHeader component
- Create ChatMessage component
- Add Input and Select readonly state and styles

### Patches

- Delete storybook-preset and vestiges of storybook configuration in individual projects, apps/storybook now starts in 1 second
- update hug to have same background color as header
- Don't apply colorScheme foreground color to Hug header text
- Change highlightDark to use same hex color as darkGreen
- Updated the toggle states

## 5.12.0
Tue, 27 Jun 2023 15:50:08 GMT

### Minor changes

- remove @storybook/addon-links as peer dep, and remove LiveDemo component

### Patches

- change the image used in the Hero story

## 5.11.1
Fri, 16 Jun 2023 17:36:22 GMT

### Patches

- Fix dependency issues with react-element-to-jsx-string and @storybook/addon-links introduced by moving docs-utils to core

## 5.11.0
Thu, 15 Jun 2023 18:56:18 GMT

### Minor changes

- Upgrade Storybook to v7

### Patches

- add buttonChip state

## 5.10.0
Thu, 08 Jun 2023 15:26:05 GMT

### Minor changes

- Add Grid component

### Patches

- fractional coverage regression after transpile config change

## 5.9.0
Mon, 22 May 2023 13:19:55 GMT

### Minor changes

- Add optional width Prop to Button Chip

### Patches

- pass props to ChipButton outline so it can have color

## 5.8.4
Tue, 02 May 2023 14:18:09 GMT

### Patches

- update Link with subtle, plain & white type. Also update bgcolor when button is hovered in subtle, plain & white

## 5.8.3
Wed, 26 Apr 2023 16:50:00 GMT

### Patches

- Slidebox: modify to allow visibleSlides less than 1

## 5.8.2
Wed, 26 Apr 2023 14:25:00 GMT

### Patches

- moved @styled-system/prop-types from devDependency to dependency
- remove propTypes from Button in favor of IButtonProps interface

## 5.8.1
Tue, 25 Apr 2023 21:40:50 GMT

### Patches

- Tweak the border variation design for Toast

## 5.8.0
Mon, 24 Apr 2023 19:05:14 GMT

### Minor changes

- Create Toast border variation and fix overwritten styles

## 5.7.1
Wed, 12 Apr 2023 11:55:05 GMT

### Patches

- Use withTheme instead of useTheme in ToastProvider to restore Styled Components 4 compatibility
- Loosen styled-components peerDependency to allow v4
- Loosen styled-components peerDependency to allow v4

## 5.7.0
Tue, 04 Apr 2023 20:01:00 GMT

### Minor changes

- Create Toast and ToastProvider components, add new Animations slideInleft and slideOutLeft
- add IconLeft and IconRight props to Button
- fixed peerDependency expressions

### Patches

- Correct text style subheading2's styles
- update heft component rig to remove node-sass dependence
- Upgrade Heft to 0.49.5

## 5.6.1
Wed, 22 Mar 2023 18:15:15 GMT

### Patches

- Fix responsive props on Label

## 5.6.0
Tue, 21 Mar 2023 17:01:10 GMT

### Minor changes

- Add the textStyle prop to the Label component

### Patches

- Fix bug when using customBreakpoints with responsive style props
- Update FormField to use an interface instead of prop types

## 5.5.3
Fri, 03 Mar 2023 18:23:05 GMT

### Patches

- Spread props for Layout to allow margin and padding overrides

## 5.5.2
Thu, 16 Feb 2023 16:33:24 GMT

### Patches

- ChoiceChip text should not wrap

## 5.5.1
Tue, 07 Feb 2023 17:29:36 GMT

### Patches

- Add fix for onhover color check to getLinkStylesOn
- Restore fallback in getPaletteColor

## 5.5.0
Tue, 24 Jan 2023 17:32:44 GMT

### Minor changes

- Add util for getting link styles on a color

### Patches

- Fix bug in Checkbox when using indeterminate prop and react-hook-form

## 5.4.0
Tue, 17 Jan 2023 17:04:02 GMT

### Minor changes

- Copy SlideBox component from v4 branch to main (v5)

## 5.3.0
Tue, 13 Dec 2022 16:03:57 GMT

### Minor changes

- add Popout component

## 5.2.0
Mon, 12 Dec 2022 20:16:28 GMT

### Minor changes

- add Animate component
- Add Button variation (input)

### Patches

- add border for Swatch component

## 5.1.1
Wed, 23 Nov 2022 17:23:13 GMT

### Patches

- Visually clickable labels and improve label storybooks

## 5.1.0
Wed, 09 Nov 2022 18:45:39 GMT

### Minor changes

- Add disabled state to Link and add overrides to getTextColorOn

### Patches

- Improve TS interface for ChipContentWrapper

## 5.0.0
Mon, 07 Nov 2022 16:17:23 GMT

### Breaking changes

- Prepare for v5 release

## 4.33.1
Thu, 27 Oct 2022 18:30:28 GMT

### Patches

- Fix serialization bug in Layout
- Update valid border radii values for Button

## 4.33.0
Mon, 17 Oct 2022 15:52:39 GMT

### Minor changes

- Added pass through flexWrap prop for layout 
- create Swatch component

## 4.32.0
Wed, 05 Oct 2022 17:01:35 GMT

### Minor changes

- Added an extra large button with a height of 56px
- Added test cases, as well 

## 4.31.0
Fri, 02 Sep 2022 15:49:44 GMT

### Minor changes

- Upgrade to use @styled-system/theme-get

## 4.30.1
Wed, 31 Aug 2022 14:21:32 GMT

### Patches

- Test change, please ignore

## 4.30.0
Wed, 31 Aug 2022 14:05:20 GMT

### Minor changes

- Add more scale values

### Patches

- Fix moize perf issue determining default profile name
- Test change, please ignore
- Test change
- Test change

## 4.29.3
Wed, 10 Aug 2022 15:39:12 GMT

### Patches

- Test change, please disregard

## 4.29.2
Wed, 10 Aug 2022 14:02:31 GMT

### Patches

- Test change

## 4.29.1
Mon, 08 Aug 2022 15:28:28 GMT

### Patches

- Forward Ref for ButtonChip

## 4.29.0
Thu, 21 Jul 2022 14:38:24 GMT

### Minor changes

- added prop for unselected checkbox color

## 4.28.0
Fri, 08 Jul 2022 13:27:48 GMT

### Minor changes

- Added an indeterminate checkbox state

## 4.26.0
Tue, 07 Jun 2022 16:09:19 GMT

### Minor changes

- Add typography values

## 4.25.0
Thu, 02 Jun 2022 16:31:00 GMT

### Minor changes

- Add white variation to Button

## 4.24.0
Thu, 26 May 2022 18:58:01 GMT

### Minor changes

- Add name prop to Toggle

## 4.23.0
Fri, 20 May 2022 18:14:31 GMT

### Minor changes

- added sizes to input and select

## 4.22.0
Fri, 13 May 2022 16:59:33 GMT

### Minor changes

- Layout: add stretchHeight prop that will equalize heights to the tallest

## 4.21.0
Mon, 02 May 2022 17:34:57 GMT

### Minor changes

- add borderRadius/boxShadowSize overrides for <Button />"

## 4.20.0
Tue, 26 Apr 2022 20:36:50 GMT

### Minor changes

- add value prop to FilterChip

## 4.19.0
Fri, 15 Apr 2022 16:52:59 GMT

### Minor changes

- Updated theme wrapper to take existing into account when merging themes

## 4.18.2
Fri, 08 Apr 2022 14:50:26 GMT

### Patches

- added mandatory name prop to FilterChip component

## 4.18.1
Mon, 04 Apr 2022 14:48:33 GMT

### Patches

- Add common prop support to FormField

## 4.18.0
Mon, 28 Mar 2022 17:54:01 GMT

### Minor changes

- Pass zIndex prop to Layout children wrappers

## 4.17.0
Mon, 21 Mar 2022 12:59:40 GMT

### Minor changes

- Add Toggle component

## 4.16.3
Thu, 17 Mar 2022 16:41:16 GMT

### Patches

- Update borderRadii.xl to 6px for backward compatibility

## 4.16.2
Fri, 11 Mar 2022 15:09:44 GMT

### Patches

- Fix bug in responsive texStyle on Text

## 4.16.1
Thu, 10 Mar 2022 14:31:55 GMT

### Patches

- Update hover state in chips label

## 4.16.0
Mon, 07 Mar 2022 18:00:11 GMT

### Minor changes

- updates to theme.ts- added opacity, scale and updated timing functions

## 4.15.3
Thu, 03 Mar 2022 17:06:31 GMT

### Patches

- change focus styling to use outline instead of box-shadow

## 4.15.2
Thu, 17 Feb 2022 14:07:41 GMT

### Patches

- Update focus styling for ButtonChip
- Add Storybook to project, fix lint errors

## 4.15.1
Mon, 14 Feb 2022 15:32:00 GMT

### Patches

- Make Layout's variation prop required
- Design updates to typography scale

## 4.15.0
Fri, 11 Feb 2022 16:43:43 GMT

### Minor changes

- Add new Motion component

## 4.14.0
Mon, 31 Jan 2022 19:30:09 GMT

### Minor changes

- Create Layout component and add size prop to Container

## 4.13.1
Thu, 27 Jan 2022 14:53:43 GMT

### Patches

- Build with Heft

## 4.13.0
Fri, 14 Jan 2022 17:42:20 GMT

### Minor changes

- implement boxShadowSize and boxShadowColor props, Storybook Args improvements
- Add borderRadius props to Image and BackgroundImage
- implement borderRadius/rounded props
- implemented new Typography system via textStyle prop"
- Monorepo maintenance, fixed peers

### Patches

- Expand color palette with new tint, tone and shade hues
- add missing textStyle propType to Text
- upgrade Storybook dependencies
- Use new borderRadii from theme

## 4.12.1
Tue, 16 Nov 2021 15:55:41 GMT

### Patches

- Update dependencies with non-breaking changes

## 4.12.0
Thu, 21 Oct 2021 21:09:04 GMT

### Minor changes

- applyVariations improved to support shades

## 4.11.2
Wed, 23 Jun 2021 16:13:27 GMT

### Patches

- Added background for focus

## 4.11.1
Mon, 14 Jun 2021 18:55:11 GMT

### Patches

- Update props in stories

## 4.11.0
Tue, 08 Jun 2021 20:47:08 GMT

### Minor changes

- Create List Component

## 4.10.0
Wed, 26 May 2021 18:17:47 GMT

### Minor changes

- Add fontStyle and textDecoration props to Text component

## 4.9.1
Mon, 26 Apr 2021 20:36:49 GMT

### Patches

- Republish in order to fix a bad build

## 4.9.0
Mon, 26 Apr 2021 19:28:49 GMT

### Minor changes

- Create DotLoader component and export it and Spinner
- Create new spinner component

## 4.8.0
Thu, 15 Apr 2021 21:30:43 GMT

### Minor changes

- PasswordInput controlled isValid props and start the progress bar empty

### Patches

- Export PasswordInput
- Update focus style for Chips
- Improve Text Extension components
- Upgraded to Storybook v6

## 4.7.1
Tue, 23 Mar 2021 18:57:24 GMT

### Patches

- Fix link button variations using size prop
- Update Password Input Default Requirements
- Update pcln-icons dependency

## 4.7.0
Thu, 18 Mar 2021 18:51:55 GMT

### Minor changes

- AltText and Responsive Sizes for Avatar
- created a new passwordInput component

### Patches

- Change exported Chip component from ChoiceChip to FilterChip
- IconField overwriting pl and pr default props fixed

## 4.6.2
Wed, 10 Mar 2021 15:09:11 GMT

### Patches

- Export Chip

## 4.6.1
Thu, 04 Mar 2021 20:25:55 GMT

### Patches

- IconField allows multiple Icon components

## 4.6.0
Tue, 02 Mar 2021 15:09:04 GMT

### Minor changes

- Created new variations of the Chip component

## 4.5.0
Tue, 23 Feb 2021 15:06:30 GMT

### Minor changes

- Create new progress bar component

### Patches

- Update theme blue to accessible alternative
- Fix backward compatibility for props in RatingBadge

## 4.4.1
Wed, 17 Feb 2021 16:29:34 GMT

### Patches

- Fix incorrect default color of RatingBadge

## 4.4.0
Tue, 16 Feb 2021 20:20:28 GMT

### Minor changes

- add primary, secondary, subtle, plain and warning variations to Button 
- Add height and spacing from styled-system to Image component

### Patches

- add cta check and ability to pass in a diff heading font size

## 4.3.2
Wed, 03 Feb 2021 20:28:22 GMT

### Patches

- Update BackgroundImage height prop to accept number

## 4.3.1
Thu, 21 Jan 2021 20:58:12 GMT

### Patches

- Fix ref forwarding for Input component

## 4.3.0
Mon, 11 Jan 2021 14:00:06 GMT

### Minor changes

- Add Shimmer component
- Add Accessibility SkipMenu component
- Add helperText prop for showing error messages in forms
- add a new component GenericBanner to core

### Patches

- Fix bug when using RatingBadge with color but not bg prop
- Resolve warnings in Storybook and remove use of deprecated styled().attrs({}) syntax
- Update Text Extension Display Names
- Change withComponent to as

## 4.2.1
Tue, 15 Dec 2020 01:52:10 GMT

### Patches

- Fix error when using Icon from pcln-icons package with IconField

## 4.2.0
Fri, 11 Dec 2020 01:11:24 GMT

### Minor changes

- Add ShadowOverlay component

## 4.1.2
Fri, 04 Dec 2020 20:01:32 GMT

### Patches

- Forward aria-label prop to Button and components that extend Button

## 4.1.1
Fri, 04 Dec 2020 01:33:19 GMT

### Patches

- Update createTheme to overwrite MQ based on breakpoints + update applyStyles to read theme from context

## 4.1.0
Wed, 02 Dec 2020 18:39:34 GMT

### Minor changes

- Export applySizes

### Patches

- Fix prop type warning for stamp

## 4.0.0
Tue, 17 Nov 2020 21:35:08 GMT

### Breaking changes

- React floor bump to 16.10
- use styled-components v4 as dev and peer dependency

### Patches

- Remove usages of mapProps and getSCMigrationRef

## 3.7.1
Fri, 13 Nov 2020 20:04:31 GMT

### Patches

- Add font-weight bold back as a default style

## 3.7.0
Mon, 09 Nov 2020 20:23:28 GMT

### Minor changes

- New Chip Component
- allow size prop in Stamp to accept an array

### Patches

- update line height for Stamp and Badge

## 3.6.4
Fri, 30 Oct 2020 15:58:40 GMT

### Patches

- Remove isRequired from Checkbox's onChange

## 3.6.3
Fri, 23 Oct 2020 16:39:00 GMT

### Patches

- Manually trigger publish of new version

## 3.6.2
Fri, 23 Oct 2020 15:15:48 GMT

### Patches

- Remove hard coded font-weight from button / stamp
- Fix styling bug in Divider when browser zoomed-in
- Fix styling bug when using styled(Button)
- Revert change to Button that broke refs

