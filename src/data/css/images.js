export const pageData = {
  pageTitle: "Images",
  pageInfo: `If images are taken out, would the content still make sense?  If not, they probably belong in the HTML and not the styling.`,
  cheats: [
    [
      {
        h2: "Background Images",
      },
      {
        p: `These are used to select based on the current state of an element.  All begin with ':' and then the state they select for.`,
      },
      {
        definitionList: [
          {
            title: `background-image`,
            definition: `sets the image that will appear behind the content of the element.`,
          },
          {
            title: `background-clip`,
            definition: `if the image is larger than the container, sets where to start clipping the image.`,
          },
          {
            title: `background-origin`,
            definition: `sets where the top left corner of the image is.`,
          },
          {
            title: `background-repeat`,
            definition: `sets if the image should repeat or not if it doesn't fill the container.`,
          },
          {
            title: `background-size`,
            definition: `first value is width, second value is height.  Can do something like '50% auto' to set the width and then scale
                vertically while keeping the same aspect ratio. Value of 'cover' scales to fill container and then cropping what's extra.
                Value of 'contain' scales as large as possible without cropping.`,
          },
          {
            title: `background-position`,
            definition: `used to position the background image.`,
          },
        ],
      },
      {
        code: {
          language: "css",
          code: `main {
    background-image: url('myImage.png');
    background-clip: padding-box;
    background-origin: padding-box;
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: -100px -200px;
}`,
        },
      },
    ],
    [
      {
        h2: "Image Sprites",
      },
      {
        p: `A sprite is when you have mutliple images in the same image file and just show selected portions of that image. It is more
          bandwidth efficient and reduces the number of files the client has to download. Can be useful for certain types of animations.`,
      },
    ],
  ],
}
