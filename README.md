# Simple Accordion

Responsive html, css and js accordion.

Simple Accordion is a simple accordion built with JavaScript and CSS, you can change some styling options as you like.

Supports all modern browsers.

Developed by [@orionce]. Licensed under the GPL License.

## Version

1.0

## Usage

Copy the simple_accordion folder in your proyect.

### CSS file

Add simple_accordion.css file incide your HEAD tag

```html
<link rel="stylesheet" href="simple_accordion/simple_accordion.css" />
```

### JS file

Add simple_accordion.js file before to close body tag

```html
<script src="simple_accordion/simple_accordeon.js"></script>
```

#### Call

Add simple_accordion.js file before to close body tag

```javascript
simple_accordion();
```

You can add some custom styling properties

```javascript
simple_accordion(
  (styles = {
    enable: true,
    header_size: 14,
    header_color: "blue",
    header_active_color: "green",
    first_active: false,
  })
);
```

### Options

| Name                | Default     | Type    | Description                                            |
| :------------------ | :---------- | :------ | :----------------------------------------------------- |
| enable              | `true`      | boolean | Enable or disable the accordion.                       |
| class_name          | `''`        | string  | Allow to add a Class Name to accordion main container. |
| header_size         | `16`        | number  | Allow to change font-size header.                      |
| header_color        | `'inherit'` | string  | Allow to change font color header.                     |
| header_active_color | `'inherit'` | string  | Allow to change font color for active header.          |
| first_active        | `false`     | boolean | Initialize the accordion with the first option active. |

### HTML Structure

For a simple accordion/dropdown, use the following structure/data-attributes:

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

### Starting with opened state

To initialize with an open state just add the 'first_active: true' propperty when you call to your accordion element.

```javascript
simple_accordion(
  (styles = {
    first_active: true,
  })
);
```
