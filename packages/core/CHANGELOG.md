# Change Log - pcln-design-system

This log was last generated on Tue, 15 Dec 2020 01:52:10 GMT and should not be manually modified.

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

