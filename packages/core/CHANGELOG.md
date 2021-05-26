# Change Log - pcln-design-system

This log was last generated on Wed, 26 May 2021 18:17:47 GMT and should not be manually modified.

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

