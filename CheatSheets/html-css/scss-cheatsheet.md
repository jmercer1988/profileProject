# SCSS (Sass) Cheat Sheet
This quick reference highlights essential SCSS features for writing more organized and maintainable CSS code.

## Variables:
SCSS
$primary-color: #007bff; 
body {
    background-color: $primary-color; 

## Nesting:
SCSS 
nav { 
    ul { 
        li { 
            a { 
                color: #fff; 
            } 
        } 
    } 
}

## Mixins:
SCSS
@mixin button-style($color, $padding) {  // Define a mixin
    background-color: $color;
    padding: $padding;
}

.btn-primary { 
    @include button-style(blue, 10px);  // Include the mixin
}

.btn-secondary {
    @include button-style(green, 15px); 
}

## Functions:
SCSS
@function double($value) {
    @return $value * 2;
}

p {
    font-size: double(12px);
}

## Extend/Inheritance:
SCSS
%message-shared {  // Define a placeholder selector
    padding: 10px;
    border: 1px solid #ccc;
}

.error {
    @extend %message-shared;  // Extend the shared styles
    background-color: red;
}

.warning {
    @extend %message-shared;
    background-color: yellow;
}

## Operators:
SCSS
$font-size: 16px;
$line-height: 1.5;

body {
    font: $font-size / $line-height;  // Division
}

## Directives:
SCSS
@import "variables"; // Import other SCSS files
@media (max-width: 768px) { ... } // Media queries

## Additional Notes:

Comments: Use // for single-line comments or /* ... */ for multi-line comments.
Interpolation: Use #{$variable} to insert variable values into strings.
Color Functions: SCSS provides functions like lighten(), darken(), and adjust-hue() to manipulate colors.
Math Functions: SCSS has functions like ceil(), floor(), and percentage() for mathematical calculations.