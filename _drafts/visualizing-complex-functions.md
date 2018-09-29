---
title: Visualizing Complex Functions
author: Kevin Van Kessel
tags: math visualization
---

# {{ page.title }}

## Complex Numbers

A complex function is a function that acts on complex numbers. Don't let the name scare you, they are easier to understand than they sound. A complex number is actually comprised of two numbers: A real number and an imaginary number. The real number is the one everyone is used to, from negative infinity to infinity and everything in-between. The imaginary number is a bit less intuitive. You may have briefly encountered the concept in a math class. An imaginary number is a real number multiplied by $$i$$. This is a special symbol that is defined to be $$i^2 = -1$$. The reason this is important is because normally there is no solution to the square root of a negative number. With the imaginary numbers we can now find such a solution.

You can add the real and imaginary numbers together to get what is called a complex number. This is a bit unusual for the concept of a number, because now you have two dimensions of information instead of just one. Like how one imagines the real numbers as a point on a number line, one has to imagine a complex number as a point on a number plane. The x-axis of the number plane represents the real component, and the y-axis represents the imaginary component.

## Complex functions

A complex function is simply a function that acts on complex numbers. The function $$f(x) = x^2$$ takes a real number, and returns another real number. Similarly, $$f(z) = z^2$$ takes a complex number, and returns a complex number. There is no special reason $$z$$ is used as the variable, it is just the typical one chosen for representing a complex number like how $$x$$ is the standard for representing a real number. Let's see how squaring a complex number affects its real and imaginary components.

$$
\begin{split}
z &= a + bi \\
z^2 &= (a+bi)^2 \\
z^2 &= a^2 + 2abi + (bi)^2 \\
z^2 &= a^2 + 2abi + b^2i^2 \\
z^2 &= a^2 + 2abi - b^2 \\
z^2 &= (a^2 - b^2) + (2ab)i \\
\end{split}
$$

## Graphing Complex functions

Graphing a complex function is surprisingly difficult. A real function takes one dimension of information and outputs one dimension of information. This adds up to a convenient two dimensions, which is easy to display on a computer screen or paper. Complex functions on the other hand take two dimensions of information and output two dimensions, leaving us with a total of four dimensions to squeeze into our graph. This almost sounds impossible, how on earth could we come up with a way to visualize four dimensions?

One way could be to plot a [vector field](https://en.wikipedia.org/wiki/Vector_field). A vector field is a plot of a bunch of little arrows. Each arrow represents how the point they are on top of gets transformed by the function. This may work but it isn't very nice as each arrow requires space to draw, which is space that could have be used to draw other arrows.

Luckily we have a trick up our sleeve. Instead of representing a complex number by two coordinates, we can instead represent it by an angle and distance from the origin. You may be wondering how this helps, there are still a total for four dimensions to plot. The important distinction about this transformation is the angle. An angle is different from distance is a very special way, it is periodic. A full rotation is the same as no rotation at all. There happens to be something else related to vision that is periodic and that is hue. Hue is what you should think of when you see a rainbow, as opposed to lightness or saturation. Hue is periodic because you can cycle through all the colors: Red, yellow, green, cyan, blue, magenta, and back to red.

Okay great, we have a way to represent the angle of a transformation with a single pixel. What about the distance from the origin? For that we can use darkness and lightness. The closer to the origin the darker it is, the farther from the origin the lighter it is. There is a glaring problem with this though, distance from the origin can be from zero to infinity, and lightness can go from black to white, or 0% to 100%. To account for this we can break this distance up into groups that are each colored from dark to light, and double them in size each time. For example, one group will be a distance from 1 to 2, with 1 being dark and transitioning to 2 being light. Then the next group is from 2 to 4, then 4 to 8, then 8 to 16, and so on. This is not a perfect solution, but it is a good one because doubling is one of the fastest ways to approach infinity.

## Visualizations

So, what does this look like? Here is the most basic example, the identity function, $$f(z) = z$$.
