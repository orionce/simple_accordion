# Simple JS Accordion

Responsive html, css and vanilla js accordion.

Simple JS Accordion is a simple accordion built with JavaScript and CSS, you can change some styling options as you like.

Supports all modern browsers.

Developed by [@orionce]. Licensed under the GPL License.

## Version

1.0

## Usage

Copy the simple_accordion folder in your proyect.

### CSS file

Add simple_accordion.css file incide your HEAD tag.

```html
<link rel="stylesheet" href="simple_accordion/simple_accordion.css" />
```

### JS file

Add simple_accordion.js file before to close body tag.

```html
<script src="simple_accordion/simple_accordeon.js"></script>
```

#### Call

Call the 'simple_accordion()' to initialize your accordion after 'simple_accordion.js' script.

```javascript
simple_accordion();
```

You can add some custom styling properties.

```javascript
simple_accordion({
  enable: true,
  headerSize: 14,
  headerColor: "blue",
  headerActive_color: "green",
  firstActive: false,
});
```

### Options

| Name              | Default     | Type    | Description                                            |
| :---------------- | :---------- | :------ | :----------------------------------------------------- |
| enable            | `true`      | boolean | Enable or disable the accordion.                       |
| className         | `''`        | string  | Allow to add a Class Name to accordion main container. |
| headerSize        | `16`        | number  | Allow to change font-size header.                      |
| headerColor       | `'inherit'` | string  | Allow to change font color header.                     |
| headerActiveColor | `'inherit'` | string  | Allow to change font color for active header.          |
| firstActive       | `false`     | boolean | Initialize the accordion with the first option active. |

### HTML Structure

For a simple accordion, use the following HTML structure:

```html
<div class="simple_accordion">
  <div class="acc_item">
    <h2 class="acc_header">Header accordion 1</h2>
    <div class="acc_content">
      <div>
        <!-- Your content here -->
      </div>
    </div>
  </div>
  <div class="acc_item">
    <h2 class="acc_header">Header accordion 2</h2>
    <div class="acc_content">
      <div>
        <!-- Your content here -->
      </div>
    </div>
  </div>
</div>
```

### Adding your own styles

If you want to add your own styles to the accordion, simply add a CSS class to the main container.

```javascript
simple_accordion({
  addClass: "myClassName",
});
```

### Starting with opened state

To initialize with an open state just add the 'firstActive: true' property when you call to your accordion element.

```javascript
simple_accordion({
  firstActive: true,
});
```
