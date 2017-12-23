# A Digital Analog Clock Project

Based on tutorial taken from Lynda.com [Javascript Essential Training](https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3ajavascript+essential+training%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2) by [Morten Rand-Hendriksen](https://www.lynda.com/Morten-Rand-Hendriksen/725535-1.html)


## Lesson on script logic

### Moving the hands

The hour, minute and hand positions are set using javascript.  

1. Select each one in turn and assign to a **const**.
2. Use the Date object to get the current time, assigning hour, minute and second values to corresponding variables using **let**.
3. 'Optional' - Incrementally positioning hour and minute hands based on number of minutes/seconds passed respectively.

Incrementally positioning the hands in relation to each other's rotation sets up for a smooth animation as the hands rotate around the clock face. This works by dividing the segment taken up by 1 hour (30deg) or 1 minute (6deg) by the number of minutes/seconds passed.

Set the number of minutes passed
```
let minPosition = (min*6)
```
To incrementally move with the second hand we need to divide one segment by 60, and multiply this fraction by the number of seconds passed
```
let minPosition = (min*6)+(sec*(6/60)
```

Set the number of hours passed
```
let hrPosition = (hr*30)
```
To incrementally move with the minute hand we need to divide one segment by 60, and multiply this fraction by the number of minutes passed.
```
let hrPosition = (hr*30)+(min*(30/60))
```

The CSS transform **rotate** is used to then position the arms rotating from the centre of the clockface. However, using css animation causes a weird effect to take place. At the 59th second / 59th minute / 11th hour, the respective hands rotate anticlockwise back to zero. There are two options to fix this which is where script logic plays an important part in any design/UX decision:-


### Remove the CSS transition **transform**

The css stylesheet specifies a transform transition to make the movement smooth.

By commenting out line 70 we stop the rotation happening as the hand is instantly moved to its new position.
```
transition: transform .5s ease-in-out;
```
The minute and hour hands are still also moving incrementally so the jump to the next hour / minute is visually negligible.



### Changing script logic

1. Start by removing everything that sets the current position of the arms outside of the function. This in effect breaks the animation at this point because the incremental movement is now not happening within the runTheClock function.
