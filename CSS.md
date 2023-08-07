# CSS_Layouts
## Flex Layouts
### Here are some of the most commonly used and important properties for flexbox layouts:

1. `display`: This property is used to establish a flex container. The value should be set to `flex` to enable flexbox properties on its children.

2. `flex-direction`: This property defines the direction in which the flex items are placed within the flex container. It can be set to `row`, `row-reverse`, `column`, or `column-reverse`.

3. `flex-wrap`: Determines whether the flex items should wrap to multiple lines if they don't fit in a single line. The values can be `nowrap`, `wrap`, or `wrap-reverse`.

4. `justify-content`: Specifies how the flex items are distributed along the main axis (horizontally for `row`, vertically for `column`). Options include `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `space-evenly`.

5. `align-items`: This property defines how the flex items are aligned along the cross axis (vertically for `row`, horizontally for `column`). Values include `flex-start`, `flex-end`, `center`, `baseline`, and `stretch`.

6. `align-content`: Similar to `align-items`, but it applies to multiple lines of flex items in a flex container. Options are `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `stretch`.

7. `flex`: A shorthand property to set the `flex-grow`, `flex-shrink`, and `flex-basis` properties in one declaration.

8. `flex-grow`: Specifies how the flex items grow to fill the available space along the main axis.

9. `flex-shrink`: Specifies how the flex items shrink when there's not enough space along the main axis.

10. `flex-basis`: Defines the initial size of the flex item before any available space is distributed.

11. `order`: Controls the order in which the flex items appear in the flex container.

12. `align-self`: Overrides the `align-items` property for a specific flex item, allowing it to have a different alignment along the cross axis.

These properties are essential for creating flexible and responsive layouts using flexbox in CSS. By using these properties effectively, you can create various column-based, row-based, or grid-like layouts with ease.

## Example
```html
<body>
  <div class="flex-container">
    <div class="box box1">One</div>
    <div class="box box2">two</div>
    <div class="box box3">three</div>
    <div class="box box4">four</div>
    <div class="box box5">five</div>
    <div class="box box6">six</div>
    <div class="box box7">seven</div>
  </div>
</body>
```
```css
.box {
  background-color: aliceblue;
  border-radius: 5px;
  margin: 2px;
  padding: 10px;
}

/*adding the flex to the individual box  */
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```
## Flexbox Layout Practice:

1. Basic Flexbox Container:
Create a container with three divs inside it, and use flexbox properties to align the divs in a row with equal spacing between them.

2. Flexbox Navbar:
Design a simple navigation bar using flexbox. The navigation items should be horizontally centered with equal spacing between them.

3. Vertical Centering:
Create a container with a single div inside it. Vertically center the inner div inside the container using flexbox.

4. Flexbox Card Layout:
Design a card layout with three cards in a row. Each card should contain an image at the top and some text content at the bottom.

5. Responsive Flexbox Gallery:
Build a responsive image gallery using flexbox. The gallery should display images in a row on larger screens and in a column on smaller screens.

# Grid Layouts

## CSS Grid Layout is another powerful layout module in CSS that enables you to create grid-based layouts. Here's a list of some of the most commonly used CSS Grid properties:

1. `display`: To define an element as a grid container, you set its `display` property to `grid`.

2. `grid-template-columns` and `grid-template-rows`: These properties define the size of the grid tracks (columns and rows). You can specify the track sizes using various units like pixels, percentages, or the `fr` unit (fractional unit).

3. `grid-template-areas`: Allows you to define named grid areas, which simplifies the layout process by giving names to specific regions of the grid.

4. `grid-template`: A shorthand property to define the grid template columns, rows, and areas in one declaration.

5. `grid-gap` (or `gap`): Sets the gap size between grid rows and columns. It is a shorthand for `grid-row-gap` and `grid-column-gap`.

6. `grid-row-start`, `grid-row-end`, `grid-column-start`, and `grid-column-end`: These properties allow you to explicitly place grid items by specifying their starting and ending grid lines.

7. `grid-row` and `grid-column`: Shorthand properties to set the starting and ending positions of grid items in one declaration.

8. `grid-area`: A shorthand property that combines `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end` to define a grid item's size and placement within the grid.

9. `justify-items`: Aligns the grid items along the row axis (horizontally) inside their grid cells.

10. `align-items`: Aligns the grid items along the column axis (vertically) inside their grid cells.

11. `place-items`: A shorthand property to set both `justify-items` and `align-items` in one declaration.

12. `justify-content`: Aligns the grid along the row axis (horizontally) within the grid container.

13. `align-content`: Aligns the grid along the column axis (vertically) within the grid container.

14. `place-content`: A shorthand property to set both `justify-content` and `align-content` in one declaration.

15. `justify-self`: Aligns an individual grid item along the row axis (horizontally) inside its grid cell.

16. `align-self`: Aligns an individual grid item along the column axis (vertically) inside its grid cell.

17. `grid-auto-columns` and `grid-auto-rows`: Define the size of implicitly created grid tracks when using `grid-auto-flow: row` or `grid-auto-flow: column`.

18. `grid-auto-flow`: Controls how the grid items are automatically placed in the grid when they are not explicitly placed using `grid-row-start`, `grid-row-end`, `grid-column-start`, and `grid-column-end`.

These properties allow you to create complex and responsive grid-based layouts with CSS Grid Layout, making it a valuable tool for designing modern web pages.

## CSS Grid Layout Practice:

1. Basic Grid Container:
Create a container with four divs inside it, and use grid properties to arrange the divs in a 2x2 grid.

2. Grid Navbar:
Design a navigation bar using CSS Grid Layout. The navigation items should be arranged in a row with equal spacing between them.

3. Grid Template Areas:
Create a grid layout with six divs. Use the grid-template-areas property to arrange the divs in a custom layout (e.g., a header, sidebar, and main content area).

4. Responsive Image Gallery:
Design a responsive image gallery using grid layout. The gallery should display images in a grid with a maximum of three columns on larger screens and a single column on smaller screens.

5. Grid Form Layout:
Create a form layout using grid. Arrange the form elements (labels and input fields) in a two-column grid layout.


