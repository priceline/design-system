/* eslint-disable react/no-unescaped-entities */
import { ArgsTable, Primary, PRIMARY_STORY } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import {
  DocTable,
  Hero,
  // LiveDemo,
  RelatedComponentContainer,
  Section,
  StoryHeading,
  StoryStage,
  TableOfContents,
} from '../DocsUtils'
import React from 'react'
import { Image, Text, ThemeProvider, Box } from '..'
import type { IImageProps } from './Image'
import { objectFits, objectPositions, borderRadii, rounded, shadows, colors } from '../storybook/args'

import heroImage from './Image.Image.Hero.png'
import contentAlignmentFormatingImage from './Image.Image.ContentAlignmentFormating.png'
import logoImage from './Image.Image.Logo.png'
import maintainingAspectRatioImage from './Image.Image.MaintainingAspectRatio.png'
import responsiveVariableWidthsImage from './Image.Image.ResponsiveVariableWidths.png'
import relatedComponentsImage from './Image.Image.RelatedComponents.png'

type ImageStory = StoryObj<IImageProps>

const imageSrc =
  'https://www.goodfreephotos.com/albums/new-zealand/other-new-zealand/lake-pukaki-and-mount-cook-in-the-background.jpg'

export const Playground: ImageStory = {
  render: (args) => <Image {...args} src={imageSrc} />,
  argTypes: {
    borderRadiusSize: {
      name: 'borderRadius',
      type: { name: 'string' },
      options: borderRadii,
      description: 'borderRadius',
      control: {
        type: 'select',
      },
    },
    rounded: {
      name: 'rounded',
      type: { name: 'string' },
      options: rounded,
      description: 'rounded',
      control: {
        type: 'select',
      },
    },
    boxShadowSize: {
      name: 'boxShadowSize',
      type: { name: 'string' },
      options: shadows,
      description: 'Size of the box shadow',
      control: {
        type: 'select',
      },
    },
    boxShadowColor: {
      name: 'boxShadowColor',
      type: { name: 'string' },
      options: colors,
      description: 'Palette family for box shadows',
      table: {
        type: {
          summary: 'Palette color to use for box-shadow - always uses "dark" shade',
        },
      },
      control: {
        type: 'select',
      },
    },

    height: {
      name: 'height',
      type: { name: 'string' },
      description: 'height',
    },
    width: {
      name: 'width',
      type: { name: 'string' },
      description: 'width',
    },
    objectFit: {
      name: 'objectFit',
      type: { name: 'string' },
      options: objectFits,
      description: 'How img is resized to fit its container',
      control: {
        type: 'select',
      },
    },
    objectPosition: {
      name: 'objectPosition',
      type: { name: 'string' },
      options: objectPositions,
      description: 'How img is aligned within its container',
      control: {
        type: 'select',
      },
    },
  },
}

export const ExamplesAndVariations: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} />
      <Image src={imageSrc} />
      <Image src={imageSrc} />
      <Image src={imageSrc} />
      <Image src={imageSrc} />
    </StoryStage>
  ),
}

export const BoxShawdow: ImageStory = {
  render: () => (
    <StoryStage>
      <Image boxShadowSize='md' src={imageSrc} />
    </StoryStage>
  ),
}
export const ResponsiveWidth: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} />
    </StoryStage>
  ),
}
export const SpecificWidthAndHeight: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} />
    </StoryStage>
  ),
}
export const ObjectFit: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} />
    </StoryStage>
  ),
}

const meta: Meta<typeof Image> = {
  title: 'Media/Image',
  component: Image,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Hero name='Image' img={heroImage}>
            Images are graphical user interface elements used to display images on a website. Images are a key
            component of many websites, and they can serve a variety of purposes, such as providing visual
            interest, showcasing products or services, or conveying important information.
          </Hero>

          <TableOfContents
            links={['Overview', 'Props', 'Examples & Variations', 'Usage', 'Related Components']}
          />

          <Section heading='Overview'>
            <Text textStyle='paragraph'>
              There are several ways to incorporate images into a website's UI. One common approach is to use
              images as part of the components layout, such as by including a banner image at the top of the
              page or using images to break up text blocks. Another approach is to use images as part of
              individual content items, such as including product images on an e-commerce website or using
              images to illustrate articles. It is important to consider factors such as image size and
              resolution, placement and alignment within the page layout, and accessibility for users with
              disabilities. It's also important to optimize images for web use in order to ensure fast loading
              times and good performance on a variety of devices and screen sizes. Overall, effective website
              image UI can help to enhance the user experience and communicate important information to
              website visitors.
            </Text>
          </Section>

          <Section heading='Props'>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
          </Section>

          <Section heading='Examples & Variations'>
            <StoryHeading storyName='Rounded' storyTitle={meta.title} />
            <Text textStyle='paragraph'>Text</Text>
            <DocTable
              columns={[
                { field: 'size', heading: 'Rounded' },
                { field: 'useCase', heading: 'Use Case' },
              ]}
              data={[
                {
                  size: 'Default',
                  useCase: 'Text',
                },
                {
                  size: 'Rounded Top',
                  useCase: 'Text',
                },
                {
                  size: 'Circle',
                  useCase: 'Text',
                },
                {
                  size: 'Arch',
                  useCase: 'Text',
                },
                {
                  size: 'Half Circle',
                  useCase: 'Text',
                },
              ]}
            />
            {/* <LiveDemo code={ExamplesAndVariations} /> */}
            <StoryHeading storyName='Box Shawdow' storyTitle={meta.title} />
            <Text textStyle='paragraph'>Text</Text>
            {/* <LiveDemo code={BoxShawdow} /> */}
            <StoryHeading storyName='Responsive Width' storyTitle={meta.title} />
            <Text textStyle='paragraph'>Text</Text>
            {/* <LiveDemo code={ResponsiveWidth} /> */}
            <StoryHeading storyName='Specific Width and Height' storyTitle={meta.title} />
            <Text textStyle='paragraph'>Text</Text>
            {/* <LiveDemo code={SpecificWidthAndHeight} /> */}
            <StoryHeading storyName='Object-Fit' storyTitle={meta.title} />
            <Text textStyle='paragraph'>Text</Text>
            <DocTable
              columns={[
                { field: 'size', heading: 'Rounded' },
                { field: 'useCase', heading: 'Use Case' },
              ]}
              data={[
                {
                  size: 'Default/Unset',
                  useCase: 'Text',
                },
                {
                  size: 'Cover',
                  useCase: 'Text',
                },
                {
                  size: 'Contain',
                  useCase: 'Text',
                },
              ]}
            />
            {/* <LiveDemo code={ObjectFit} /> */}
          </Section>
          <Section heading='Image v.s Background Image'>
            <Text textStyle='paragraph'>
              There are several ways to incorporate images into a website's UI. One common approach is to use
              images as part of the components layout, such as by including a banner image at the top of the
              page or using images to break up text blocks. Another approach is to use images as part of
              individual content items, such as including product images on an e-commerce website or using
              images to illustrate articles. It is important to consider factors such as image size and
              resolution, placement and alignment within the page layout, and accessibility for users with
              disabilities. It's also important to optimize images for web use in order to ensure fast loading
              times and good performance on a variety of devices and screen sizes. Overall, effective website
              image UI can help to enhance the user experience and communicate important information to
              website visitors.
            </Text>
          </Section>
          <Section heading='Usage'>
            <Text textStyle='subheading3' my={4}>
              Content Alignment & Formating
            </Text>
            <Text.p textStyle='paragraph'>
              When aligning images with content such as text and buttons consider how you choose to display
              the height of the image.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={contentAlignmentFormatingImage} />
            </Box>
            <Text textStyle='subheading3' my={4}>
              Responsive and Variable Widths
            </Text>
            <Text.p textStyle='paragraph'>
              Responsive layouts will impact how an image will fill a parent element or page. When placing an
              image within an object it is important to choose images that work well at different extremes for
              width. When cropping is likely keep important content in view at any width.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={responsiveVariableWidthsImage} />
            </Box>
            <Text textStyle='subheading3' my={4}>
              Maintaining Aspect Ratio
            </Text>
            <Text.p textStyle='paragraph'>
              When setting the width and hight of an image its important to consider all use cases. Forcing
              images into the same width and or height can cause unwanted stretching. Using image API services
              is one way to deliver consistent image crops, manually exporting images to control outcome is
              another option. However allowing admin control of how the image displays with object-fit on a
              per use bases is the most optimal option to control outcome.
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={maintainingAspectRatioImage} />
            </Box>
            <Text textStyle='subheading3' my={4}>
              Logo Images
            </Text>
            <Text.p textStyle='paragraph'>
              There are three main factors to consider when displaying logos. Resolution, aspect ratio, and
              display size. Because logos include text more often than not it is important
            </Text.p>
            <Box p={3} my={3} borderRadius='xl' bg='primary.light'>
              <Image src={logoImage} />
            </Box>
          </Section>
          <Section heading='Related Components'>
            <Image src={relatedComponentsImage} />
          </Section>
        </ThemeProvider>
      ),
    },
  },
}
export default meta
