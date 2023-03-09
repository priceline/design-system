# Change Log - pcln-design-system

This log was last generated on Fri, 03 Mar 2023 18:23:05 GMT and should not be manually modified.

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

