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

15. this image component takes 3 props, src ,alt and className for any additional custom styles

16. conditional rendering for a place holder in Card image
17. added styles to the cardImage component for bith the cases (conditional rendering)
18. added the card Image to the app.jsx inside the card component and tested it with a stock image

19. created card Header, card Title, card Body,card Footer components and added basic style to them. they takes different props like classNmae for custom styles later and children, tested ot these components individually by adding and them removing them in app.jsx

20. created a folder named data and a file in it named cardsData.js and then added an array of different items containing properties like id,title,description,image,price,rating,category. some objects miss some fields

21. inside the app component removed the card component to add styles. added styles for all the 3 divs starting with the outer most which is the outer div.then inside it there is another div which is the content wrapper,then a third div which is the header section.

22. inside the third container there is a h1 for the header and a p tag for the sub text

23. inside the 2nd div, below the 3rd div there is another div which is the cards grid

24. we map through the objects from the array of items in the cardsData.js file and then return a Card with a unique key

25. we pass the variant and padding as props.the variant depends on whether the card.id is divisible by 2 or not(primary or default),we then conditionlly render the card image if it is present using the && operator

26. we create a div inside the Card below the image, this will the inner content wrapper
27. inside this dive we have the cardHeader and we conditionally render the card category in a span if there is a category using && operator.we style this category.

28. below this we render the cardTitle, and conditionally style the title whether the card.id is divisible by 2 or not. inside this we render the card.title
29. below the cardTitle we conditionally render the rating if it is present using && operator. inside this we have a span with a star icon and then another span inside which we render the card.rating and /5
