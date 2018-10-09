---
title: Visualizing Complex Functions
author: Kevin Van Kessel
tags: math visualization
---

# {{ page.title }}

I don't want an explanation, [skip to the pretty pictures](#visualizations)!

## Complex Numbers

Don't let the name scare you, complex numbers are easier to understand than they sound. A complex number is actually comprised of two numbers: A real number and an imaginary number. The real number is the one everyone is used to, from negative infinity to infinity and everything in-between. The imaginary number is a bit less intuitive. You may have briefly encountered the concept in a math class. An imaginary number is a real number multiplied by $$i$$. This is a special symbol that is defined to be $$i^2 = -1$$. The reason this is important is because normally there is no solution to the square root of a negative number. With the imaginary numbers we can now find such a solution. And like all explanations of the imaginary numbers I am obliged to point out that they have been named poorly. They exist and are as useful as negative numbers, but you will find neither in the physical world.

### Cartesian Coordinates

You can add the real and imaginary numbers together to get what is called a complex number. This is a bit unusual for the concept of a number, because now you have two dimensions of information instead of just one. Like how one imagines the real numbers as a point on a number line, one has to imagine a complex number as a point on a number plane. The x-axis of the number plane represents the real component, and the y-axis represents the imaginary component. This is the [Cartesian coordinate system](https://en.wikipedia.org/wiki/Cartesian_coordinate_system) you are used to.

$$z = x + yi$$

### Polar Coordinates

While the axes directly correspond to each component, it is actually often times easier to think of a complex number as a magnitude ($$r$$) and angle ($$\theta$$) from the origin. This way of representing a point on the plane is called the [polar coordinate system](https://en.wikipedia.org/wiki/Polar_coordinate_system). The reason it is easier is because when you multiply two complex numbers, the result's magnitude is the product of the two original magnitudes, and the result's angle is the sum of the the two original angles. $$i$$ has a magnitude of $$1$$ and an angle of $$\frac{\pi}{2}$$ [radians](https://en.wikipedia.org/wiki/Radian) (or $$90$$ degrees), so multiplying by $$i$$ can be though of as rotating a point on the plane by $$\frac{\pi}{2}$$ radians counter-clockwise.

$$z = r\mathrm{e}^{\theta i}$$

The reason why this equation works is outside the scope of this explanation, but it has to do with [Euler's formula](https://en.wikipedia.org/wiki/Euler%27s_formula).

## Complex functions

A complex function is a function that acts on complex numbers. The function $$f(x) = x^2$$ takes a real number, and returns another real number. Similarly, $$f(z) = z^2$$ takes a complex number, and returns a complex number. There is no special reason $$z$$ is used as the variable, it is just the typical one chosen for representing a complex number like how $$x$$ is the standard for representing a real number. Let's see how squaring a complex number affects its real and imaginary components.

In Cartesian coordinates:

$$
\begin{split}
z &= x + yi \\
z^2 &= (x+yi)^2 \\
z^2 &= x^2 + 2xyi + (yi)^2 \\
z^2 &= x^2 + 2xyi + y^2i^2 \\
z^2 &= x^2 + 2xyi - y^2 \\
z^2 &= (x^2 - y^2) + (2xy)i \\
\end{split}
$$

In Polar coordinates:

$$
\begin{split}
z   &=  r\mathrm{e}^{\theta i} \\
z^2 &= (r\mathrm{e}^{\theta i})^2 \\
z^2 &= r^2\mathrm{e}^{2\theta i} \\
\end{split}
$$

See how much easier it is to square in polar coordinates? Not only is it simpler, but the result is easy to interpret. The magnitude is squared, and the angle is doubled.

## Graphing Complex functions

Graphing a complex function is surprisingly difficult. A real function takes one dimension of information and outputs one dimension of information. This adds up to a convenient two dimensions, which is easy to display on a computer screen or paper. Complex functions on the other hand take two dimensions of information and output two dimensions, leaving us with a total of four dimensions to squeeze into our graph. This almost sounds impossible, how on earth could we come up with a way to visualize four dimensions?

One way could be to plot a [vector field](https://en.wikipedia.org/wiki/Vector_field). A vector field is a plot of a bunch of little arrows. Each arrow represents how the point they are on top of gets transformed by the function. This may work but it isn't very nice as each arrow requires space to draw, which is space that could have be used to draw other arrows.

Luckily we have a trick up our sleeve. We can solve this problem by using the polar coordinates from before. You may be wondering how this helps, there are still a total for four dimensions to plot. The important distinction about polar coordinates versus Cartesian coordinates is the angle. An angle is different from distance is a very special way, it is periodic. A full rotation is the same as no rotation at all. There happens to be something related to vision that is periodic and that is hue. You can cycle through all the hues: Red, yellow, green, cyan, blue, magenta, and back to red.

We have a way to represent the angle, what about the magnitude? For that we can use darkness and lightness. The less the magnitude the darker it is, the greater the magnitude the lighter it is. There is a glaring problem with this though, magnitude can be from zero to infinity, and lightness can go from black to white, or 0% to 100%. To account for this we can break this magnitude up into groups that are each coloured from dark to light, and double them in size each time. For example, one group will be a magnitude from 1 to 2, with 1 being dark and transitioning to 2 being light. Then the next group is from 2 to 4, then 4 to 8, then 8 to 16, and so on. This is not a perfect solution, but it is a good one because doubling is one of the fastest ways to approach infinity.

### Summary

Each pixel to be graphed represents a point on the complex plane ($$z$$). This complex number is fed through a function that transforms it into an output ($$f(z) = w$$). This output is represented in polar coordinates ($$w = r\mathrm{e}^{\theta i}$$). The pixel's hue is mapped to the angle ($$\theta$$), and the pixel's lightness is mapped to the magnitude ($$r$$).

## Visualizations

### Identity

So, what does this look like? Here is the most basic example, the identity function. $$f(z) = z$$.

{% include image.html url="/assets/images/visualizing-complex-functions/z.png" desc="The identity function." %}

### Square

{% include image.html url="/assets/images/visualizing-complex-functions/z^2.png" desc="Squared." %}

#### Video Here

In the image, each hue is repeated twice and the density of the contours has doubled. The video is an interpolation between $$z$$ and $$f(z) = z^2$$. The points where the contours seem to converge I will refer to as poles. In this interpolation you can see a pole appear along the negative axis and merge into the original pole.

### Cube

{% include image.html url="/assets/images/visualizing-complex-functions/z^3.png" desc="Cubed." %}

#### Video here

Similarly to the square, this function triples the number of hues around the pole and triples the density of the contours. In the interpolation two additional poles are merged into the original for a total of three poles. Now what about in the other direction?

### Inverse

{% include image.html url="/assets/images/visualizing-complex-functions/z^-1.png" desc="Inverted." %}

#### Video here

Here you can see what the inverse of the complex plane looks like. The hues are flipped along the horizontal axis and each circle is now halving instead of doubling because it's going from light to dark instead of dark to light. In the interpolation one can see two poles being ripped out of the original pole. Which follows the same pattern as the previous two.

### Inverse Square

{% include image.html url="/assets/images/visualizing-complex-functions/z^-2.png" desc="Inverted square." %}

#### Video here

Again following the pattern, three poles are removed from the original. This forms an inverse with two of each hue and double the density of contours

### Square Root

{% include image.html url="/assets/images/visualizing-complex-functions/z^0.5.png" desc="Square rooted." %}

#### Video Here

This one is a little strange. Similar to the previous ones except no poles are visibly moving and there is a discontinuity along the negative x-axis called a branch cut. A branch cut means that the function surface gets too complicated to represent in two dimensions, so it is truncated along the negative x-axis for simplicity. But I assure you if you could see four dimensions this function would appear continuous.

### Inverse Square Root

{% include image.html url="/assets/images/visualizing-complex-functions/z^-0.5.png" desc="Inverted square root." %}

#### Video here

This one is similar to the last except that two poles are removed from the original at symmetric angles. This sheds some light on the previous. I hypothesize that the previous interpolation also had moving poles, but they were hidden by the branch cut.

### Power of i

{% include image.html url="/assets/images/visualizing-complex-functions/z^i.png" desc="To the power of i." %}

#### Video Here

Now things are beginning to get funky. Taking the plane to the power of $$i$$ seems to invert it in a different sense. The values now halve with angle, and are rotated counter-clockwise with magnitude. The interpolation shows two poles being removed in a non-symmetric spiral fashion.

### Power of -i

{% include image.html url="/assets/images/visualizing-complex-functions/z^-i.png" desc="To the power of -i." %}

#### Video Here

Similar to the last one but values are now doubled with angle, and are rotated clockwise with magnitude. This is fascinating. It appears that both the number of poles added or removed, and direction they are moved have something to do with the interpolation of each of these functions.

### Sine

{% include image.html url="/assets/images/visualizing-complex-functions/sin(z).png" desc="Sine of z." %}

#### Video Here

This is beautiful and one of my favourites. Poles merge from the top and bottom, only to immediately split again forming a colourful symmetric wave. Cosine is similar but shifted horizontally.

### Arcsine

{% include image.html url="/assets/images/visualizing-complex-functions/asin(z).png" desc="Arcsine of z." %}

#### Video Here

Not all that interesting, but I'm curious to see what is going on beyond the branch cut.

### Hyperbolic Sine

{% include image.html url="/assets/images/visualizing-complex-functions/sinh(z).png" desc="Hyperbolic sine of z." %}

#### Video Here

I have personally never really understood the relationship between the hyperbolic trigonometric functions and the regular ones, but this makes it more clear. It is the same as sine except it is periodic along the imaginary axis instead of the real axis. And the hues emerging from each pole bend to be horizontal instead of vertical.

### Tangent

{% include image.html url="/assets/images/visualizing-complex-functions/tan(z).png" desc="Tangent of z." %}

#### Video Here

A sequence of alternating regular and inverse poles appear along the horizontal. These are analogous to the zeros and asymptotes of the real tangent function.

### Sine of the Inverse

{% include image.html url="/assets/images/visualizing-complex-functions/sin(z^-1).png" desc="Sine of 1/z." %}

#### Video Here

Recall from math class how the limit of $$\sin(\frac{1}{x})$$ is undefined as $$x$$ approaches $$0$$? That is because sine begins oscillating wildly, not settling on any value. Now extend that concept to the complex values and you get this trippy singularity.

### Tangent of the Inverse

{% include image.html url="/assets/images/visualizing-complex-functions/tan(z^-1).png" desc="Tangent of 1/z." %}

#### Video Here

I'm not even going to attempt to explain this nonsense.

### Exponential

{% include image.html url="/assets/images/visualizing-complex-functions/exp(z)).png" desc="Euler's number to the power of z." %}

#### Video Here

Poles pull in from right to left, flattening the contours into a clean horizontal sequence. The real component determine magnitude and imaginary component determines the angle.

### Logarithm

{% include image.html url="/assets/images/visualizing-complex-functions/ln(z)).png" desc="Natural logarithm of z." %}

#### Video Here

Hard to see what's going on here but this interpolation is unfolding into an [infinite spiral](
https://en.wikipedia.org/wiki/Complex_logarithm#/media/File:Riemann_surface_log.svg) beyond the branch cut.

### Sigmoid

{% include image.html url="/assets/images/visualizing-complex-functions/(1+e^-z)^-1.png" desc="Sigmoid of z." %}

#### Video Here

The sigmoid is a function often used in neural networks because it restricts the output of reals between $$-1$$ and $$1$$. Here, opposing poles appear out of thin air in the middle and pull back, leaving a sequence of contours along the horizontal on the negative real side of the function. Similarly to $$e^z$$.

### Expoid

{% include image.html url="/assets/images/visualizing-complex-functions/e^(-e^-z).png.png" desc="Expoid of z." %}

#### Video Here

This is a function I made up while playing around and ended up being really cool. I dub thee the expoid function. The black areas are where the calculations exceed the limits of floating point arithmetic on my computer, that area would be otherwise filled in with ever more compact fluctuations. We can use the boundary shape of the missing values as another contour of equal magnitude.

This is truly an interesting function. It seems as though pillars of stability and instability form as one travels in the negative real direction. Each pillar appears to approach a width of $$\pi$$. This phenomena forms because on the reals the outer exponential of $$e^{-e^{-z}}$$ can only ever take in a negative input, thus restraining the output between $$0$$ and $$1$$. If you stray too far into the imaginary numbers the sign of the inner exponential flips. This causes the inner exponential to become positive, which removes the restraint and allows the nested exponential to explode.
