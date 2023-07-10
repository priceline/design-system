/* eslint-disable react/no-unescaped-entities */
import { ArgsTable, Primary, PRIMARY_STORY } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import {
  DocTable,
  Hero,
  // LiveDemo,
  Section,
  StoryHeading,
  StoryStage,
  TableOfContents,
} from '../DocsUtils'
import React from 'react'
import { Image, Text, ThemeProvider, Box } from '..'
import type { IImageProps } from './Image'
import { argTypes } from './Image.stories.args'

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
  render: (args) => (
    <Box>
      <Image {...args} src={imageSrc} />
    </Box>
  ),
  argTypes,
}

export const ExamplesAndVariations: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} borderRadius='xl' height='300px' width='300px' />
      <Image src={imageSrc} borderRadius='xl' rounded='top' height='300px' width='300px' />
      <Image src={imageSrc} borderRadius='full' height='300px' width='300px' />
      <Image src={imageSrc} borderRadius='full' rounded='right' height='300px' width='400px' />
      <Image src={imageSrc} borderRadius='full' rounded='top' height='200px' width='300px' />
    </StoryStage>
  ),
}

export const BoxShawdow: ImageStory = {
  render: () => (
    <StoryStage>
      <Image boxShadowSize='md' borderRadius='xl' src={imageSrc} height='300px' width='300px' />
    </StoryStage>
  ),
}
export const ResponsiveWidth: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} height='300px' objectPosition='left' />
    </StoryStage>
  ),
}
export const SpecificWidthAndHeight: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} height='300px' width='200px' />
    </StoryStage>
  ),
}
export const ObjectFit: ImageStory = {
  render: () => (
    <StoryStage>
      <Image src={imageSrc} height='300px' width='200px' />
      <Image src={imageSrc} height='300px' width='200px' objectFit='cover' />
      <Image src={imageSrc} height='300px' width='200px' objectFit='contain' />
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
            <StoryHeading storyName='Rounded & Border Radius' storyTitle={meta.title} />
            <Text textStyle='paragraph'>Text</Text>
            <DocTable
              columns={[
                { field: 'size', heading: 'Rounded' },
                { field: 'useCase', heading: 'Use case' },
              ]}
              data={[
                {
                  size: 'Border Radius',
                  useCase: 'Use borderRadius prop to apply rounded corners to images',
                },
                {
                  size: 'Rounded Top',
                  useCase: 'To round just the top or some corners of an image use the rounded prop',
                },
                {
                  size: 'Circle',
                  useCase: '1:1 height and width with Border Radius prop set to full will achieve a circle',
                },
                {
                  size: 'Arch',
                  useCase:
                    'To render the arch silhouette use a combination of rounded right and borderRadius full. This works best on images with at least a 16:9 ration for the width and hight. ',
                },
                {
                  size: 'Half Circle',
                  useCase:
                    'To render the arch silhouette use a combination of rounded top and borderRadius full. The image hight must be set to half the image width.',
                },
              ]}
            />
            {/* <LiveDemo code={ExamplesAndVariations} /> */}
            <StoryHeading storyName='Box Shawdow' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Adding boxShadowSize to images work best when images are actionable.
            </Text>
            {/* <LiveDemo code={BoxShawdow} /> */}
            <StoryHeading storyName='Responsive Width' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Using a combination of responsive widths, heights, and image position props will allow for the
              best outcome for any use case. Image assets and apis such as fastly can help to ensure assets
              match the image specs and optimize file size.
            </Text>
            {/* <LiveDemo code={ResponsiveWidth} /> */}
            <StoryHeading storyName='Specific Width And Height' storyTitle={meta.title} />
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
                  useCase:
                    'Use this with caution, image assets would ideally match the same ratio at twice the size for high resolution screens. ',
                },
                {
                  size: 'Cover',
                  useCase:
                    'Most uses of images should be using cover to display images. This helps to make for a consistent front end experience that matches brand themes.',
                },
                {
                  size: 'Contain',
                  useCase:
                    'Contain should be used for when its required that none of the image is cropped at any size or breakpoint. Images like logos and other text based images are likely examples.',
                },
              ]}
            />
            {/* <LiveDemo code={ObjectFit} /> */}
          </Section>
          <Section heading='Image v.s Background Image'>
            <Text textStyle='paragraph'>
              CSS images and background images are both used to display images on a website, but there are
              some key differences between the two. A CSS image is an image that is inserted directly into the
              content of an HTML page using the &lt;img&gt; tag. CSS can be used to apply styling to the
              image, such as setting the width and height, adjusting the position, or adding borders and
              effects. A background image, on the other hand, is an image that is used as the background for
              an HTML element, such as a div or a section. The image is specified using CSS, and can be
              positioned and sized in a variety of ways. Background images are often used to add visual
              interest to a webpage or to provide a backdrop for other content. One of the main differences
              between CSS images and background images is how they are treated by search engines and screen
              readers. CSS images inserted using the &lt;img&gt; tag are more likely to be recognized by
              search engines and are more accessible to screen readers, as they are considered part of the
              content of the page. Background images, on the other hand, are often ignored by search engines
              and may not be accessible to users with visual impairments. Another difference between the two
              is the way they are loaded. CSS images are loaded as separate files, which can slow down the
              page loading time if there are too many of them. Background images, on the other hand, are
              loaded as part of the CSS file, which can improve page loading times and reduce server requests.
              Overall, both CSS images and background images have their own strengths and weaknesses, and
              their use depends on the specific needs and goals of a website.
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
