# Background Drawing with CSS Paint API

This project utilizes the CSS Paint API to dynamically generate background patterns on webpages. It allows customization of both box sizes and line thickness within the pattern.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/erkanercann/css-paint-api.git
```

2. Navigate into the project directory:

```bash
cd css-paint-api
```

3. Install dependencies using npm:

```bash
npm install
```

## Usage

After installing dependencies, you can start the project on a local server with the following command:

```bash
npm run dev
```

This command will start a local server, and you can view the project in your web browser at http://localhost:3000.

## Customizing CSS Properties

You can customize the appearance of the background patterns by modifying the CSS variables defined in style.scss. These variables include:

-   --size: Controls the overall size of the background element.
-   --box-size: Specifies the size of each individual box within the pattern.
-   --max-line-width: Sets the maximum width of the lines drawn within each box.
-   --min-line-width: Specifies the minimum width of the lines drawn within each box.
    To customize these variables:

1. Open the style.scss file in your preferred code editor.
2. Locate the .huodini selector.
3. Adjust the values of the CSS variables according to your preferences.
4. Save the file. The changes will be reflected in the dynamically generated background patterns.

Here's an example of how you can modify these variables:

```scss
.huodini {
    --size: 400px;
    --box-size: 20;
    --max-line-width: 8;
    --min-line-width: 2;

    position: fixed;
    z-index: -1;
    width: var(--size);
    aspect-ratio: 1;
    background-image: paint(huodinibg);
}
```
