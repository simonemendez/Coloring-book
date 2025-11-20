# Color Drawing Canvas

### An interactive HTML5 canvas drawing application that allows users to create colorful artwork with dynamic brush effects

This project uses:

- HTML5 Canvas
- JavaScript
- CSS
- Vanilla JavaScript (no frameworks)

## Live Demo

• Try out the [Color Drawing Canvas](#) app.

### Getting started:

To run this project locally:

• Simply open `index.html` in your web browser

Or, if using a development server:

• `npx serve` or any local server of your choice

### Functionality:

• Users can do the following:
  - Draw freely on the canvas with mouse movements
  - Enjoy dynamic rainbow color effects that cycle through the spectrum
  - Experience automatic brush size variations (growing and shrinking)
  - Create unique artwork with smooth, rounded brush strokes
  - Start drawing by clicking and holding the mouse button
  - Stop drawing by releasing the mouse or moving outside the canvas

### Features:

• **Rainbow Color Cycling**: Automatically cycles through HSL color spectrum (0-360 degrees) as you draw

• **Dynamic Brush Size**: Brush width automatically grows from 1px to 100px and back, creating dynamic stroke effects

• **Smooth Drawing**: Uses canvas line join and cap properties for smooth, rounded strokes

• **Responsive Canvas**: Canvas automatically adjusts to window size

• **Intuitive Controls**: Simple mouse-based drawing - click to start, release to stop

### How It Works:

The application uses HTML5 Canvas API and mouse event listeners to track drawing movements. As you draw, the stroke color continuously changes through the color spectrum while the brush size dynamically increases and decreases, creating unique visual effects.

---

## About

A simple yet engaging drawing application built with vanilla JavaScript and HTML5 Canvas. Perfect for creative expression and exploring canvas-based graphics programming.
