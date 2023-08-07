# CSS_Layouts
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
