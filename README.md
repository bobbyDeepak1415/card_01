1. first created the components folder
2. then created the card.jsx component
3. determined all the properties like className,variant,hover,padding,children and passed them as props,we will get theses from the App.jsx
4. created the base styles,these apply to all cards no matter what
5. created the variants object with different variants with diff colors(default,primary,success,dark)

6. created hoverStyles for true/false

7. created the paddingStyles object and then different paddings(none,small,normal,large)
8. combined all the styles using template literal for the className of the card and also added class name in it,just in case we add more classes later
9. added children as the content inside the card
10. added basic styling to the container in app.jsx
11. added the Card component to app.jsx and tested it by adding a few children
12. tested out the props by applying and changing different props from app.jsx in card component

13. created components like cardBody,cardHeader,cardFooter,cardTitle,cardImage to make the whole card organised and truly reusable

14. In the cardImage ,if there is no image,a place holder is shown(defensive programming), handleing missing data gracefully

15. this image component takes 3 props, src ,alt and classNmae for any additional custom styles

16. conditional rendering for aplace holder in Card image