# 🛠 Customization

The framework heavily uses the SCSS maps to define the variables and configurations. To customize, you can define the maps with same name and keys. The keys will be merged with the default values of map.

 Customization of framework can be done in 3 parts:
 1. Colors
 2. Fonts
 3. Sizing

<hr>

## 🎨 Colors

The `$styles-colors` map contains all the colors used in all the components.

The format of map is as below:
```scss
$styles-colors: (
  primary: (
    default: #3f51b5, 
    hover: #283593,
    muted: #e8eaf6,
    text: #ffffff
  ),
);
```
The `primary` represents the color name while keys inside map represents the diffrent shades of colors.

Each color contains following shades:
- **default**: Default shade.
- **hover**: The darker, when hovered on elements.
- **muted**: The lightest, used in background.
- **text**: The text color to use in contrast of color.

By default the `$styles-colors` map contains following colors:
- primary
- seconndary
- accent
- dark
- light
- danger
- warning
- success
- info
- grey

Grey has the following shades:
```scss
$grey:(
  lightest: #eceff1,
  lighter: #cfd8dc,
  light: #b0bec5,
  default: #607d8b,
  dark: #455a64,
  darker: #37474f,
  darkest: #263238  
);
```

### 🎛 Mixins

##### `--color($name, $shade)`
Access all the colors to use in CSS rules like shown below.
```scss
color:--color(primary);
background-color:--color(primary,muted)
```


### ⚠️ TODO

- Change all the color shades name to same as grey.

<hr>

## 🔠 Fonts

The `$system-fonts` contains the a set of all the native fonts which user's system may contain. The framework by default uses the native fonts.

```scss
$system-fonts: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' !default;
```

#### Font Families:
```scss
$styles-font-families: (
  system: $system-fonts,
  heading: $system-fonts,
  content: $system-fonts,
  code: '"Courier New", Courier, monospace'
);
```

- **system**: System fonts.
- **heading**: Applies to all <h*> tags.
- **content**: Rest of the tags.
- **code**: For `<code>` tags.


#### Font Weights:

The fonts you use may have diffrent weights. You can define all the weights in the following map.
```scss
$styles-font-weights: (
  light: 300,
  regular: 400,
  bold: 600
);
```

- `body` tag uses the `regular` value.
- `h*`, `strong`, `b` tags use the `bold` value.

#### Font Sizes:

You can define default sizes of the diffrent tags with following map.
```scss
$styles-font-sizes: (
  h1: 48px,
  h2: 36px,
  h3: 24px,
  h4: 18px,
  h5: 16px,
  h6: 13px,
  p: 16px,
  span: 16px,
  small: 12px,
  code: 14px
);
```

### 🎛 Mixins

##### `--font-family($type)`
##### `--font-weight($weight)`
##### `--font-size($size)`


<hr>

### 📐 Sizing


#### Breakpoints
The frameworks uses the **desktop-first** approach.
```scss
$styles-breakpoints:(
  laptop: 1200px,
  tablet: 992px,
  phablet: 768px,
  phone: 576px
);
```

#### Boxed Content

`.box` class uses the following sizes at given breakpoints to limit the width of the content.
```scss
$styles-boxes:(
  desktop: 1140px,
  laptop: 960px,
  tablet: 720px,
  phablet: 540px,
  phone: 100%
);
```