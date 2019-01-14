---
title: Visualizing Complex Functions
author: Kevin Van Kessel
tags: math visualization
reddit: r/vankessel/afppoh
---

# {{ page.title }}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^unitcircle.webm" attrs="controls loop autoplay" poster="/assets/images/visualizing-complex-functions/z.jpg" %}

## Complex Numbers

Don't let the name scare you, complex numbers are easier to understand than they sound. A complex number is actually comprised of two numbers: A real number and an imaginary number. A real number is the one everyone is used to, every value between negative infinity and infinity. An imaginary number is a little less intuitive. It is a real number multiplied by the square root of negative one, or $$i$$. $$i$$ is a special constant that is defined to be $$i^2 = -1$$. The reason this constant is important is because normally there is no solution to the square root or logarithm of a negative number. In fact, most functions have a natural extension to the complex domain, like $$\sin()$$. I am compelled to point out that they have been named poorly. Gauss' lateral number is a much better name. They exist and are as useful as negative numbers, but you will find neither in the physical world.

### Cartesian Coordinates

You add the real and imaginary numbers together to get a complex number. This is a bit unusual for the concept of a number, because now you have two dimensions of information instead of just one. Like how one imagines the real numbers as a point on a number line, one has to imagine a complex number as a point on a number plane. The x-axis of the number plane represents the real component, and the y-axis represents the imaginary component. This is a [Cartesian coordinate system](https://en.wikipedia.org/wiki/Cartesian_coordinate_system).

$$z = x + yi$$

### Polar Coordinates

While the axes directly correspond to each component, it is actually often times easier to think of a complex number as a magnitude ($$r$$) and angle ($$\theta$$) from the origin. This way of representing a point on the plane is called a [polar coordinate system](https://en.wikipedia.org/wiki/Polar_coordinate_system). The reason it is easier is because when you multiply two complex numbers, the result's magnitude is the product of the two original magnitudes, and the result's angle is the sum of the the two original angles. $$i$$ has a magnitude of $$1$$ and an angle of $$\frac{\pi}{2}$$ [radians](https://en.wikipedia.org/wiki/Radian) (or $$90$$ degrees) counterclockwise from the positive x-axis, so multiplying by $$i$$ can be thought of as rotating a point on the plane by $$\frac{\pi}{2}$$ radians counterclockwise.

$$z = r\mathrm{e}^{\theta i}$$

The reason why this equation works is outside the scope of this explanation, but it has to do with [Euler's formula](https://en.wikipedia.org/wiki/Euler%27s_formula).

## Complex functions

A complex function is a function that acts on complex numbers. The function $$f(z) = z^2$$ can be extended to the complex domain to take in a complex number and return a complex number. The variable $$z$$ is commonly used to represent a complex number, like how $$x$$ is commonly used to represent a real number. Let's see how squaring a complex number affects its real and imaginary components.

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

One way could be to plot a [vector field](https://en.wikipedia.org/wiki/Vector_field). A vector field is a plot of a bunch of little arrows. Each arrow represents how the point they are on top of gets transformed by the function. This may work but it isn't very nice as each arrow requires space to draw, which is space that could have been used to draw smaller arrows.

Luckily we have a trick up our sleeve. We can solve this problem by using the polar coordinates from before. How does this help? There are still a total for four dimensions to plot. The important distinction about polar coordinates versus Cartesian coordinates is the angle. Angles are different from magnitudes because they are periodic. A full rotation is the same as no rotation at all. Colour is also periodic. You can cycle through all the hues: red, yellow, green, cyan, blue, magenta, and back to red.

We have a way to represent the angle, what about the magnitude? For that we can use lightness. The less the magnitude the darker it is, the greater the magnitude the lighter it is. There is a glaring problem with this though. Magnitude can be from zero to infinity, and lightness can go from 0% to 100%. To account for this we can break this magnitude up into groups that are each coloured from dark to light, and double them in size each time. For example, one gradient from dark to light will be from magnitudes 1 to 2. Then the next gradient is from 2 to 4, then 4 to 8, and so on. This is not a perfect solution, but it is a good one because doubling is one of the fastest ways to approach infinity.

### Summary

Each pixel to be plotted represents a point on the complex plane ($$z$$). This complex number is fed through a function that transforms it ($$f(z) = w$$). This output is represented in polar coordinates ($$w = r\mathrm{e}^{\theta i}$$). The pixel's hue is mapped to the new angle ($$\theta$$), and the pixel's lightness is mapped to the new magnitude ($$r$$).

## Visualizations

So, what does this look like? Here is the most basic example, the identity function. $$f(z) = z$$.

### Identity

{% include image.html url="/assets/images/visualizing-complex-functions/z.jpg" desc="The identity function." %}

### Square

{% include image.html url="/assets/images/visualizing-complex-functions/z^2.jpg" desc="Square of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^2.webm" poster="/assets/images/visualizing-complex-functions/z^2.jpg" %}

In the image, each hue is repeated twice and the density of the contours has doubled. The video is an interpolation between $$z$$ and $$f(z) = z^2$$. The points where the contours seem to converge I will refer to as poles. Poles are where the function goes to $$0$$ or $$\pm\infty$$. In this interpolation you can see a pole appear along the negative axis and merge into the original pole.

### Cube

{% include image.html url="/assets/images/visualizing-complex-functions/z^3.jpg" desc="Cube of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^3.webm" poster="/assets/images/visualizing-complex-functions/z^3.jpg" %}

Similarly to the square, this function triples the number of hues around the pole and triples the density of the contours. In the interpolation two additional poles are merged into the original for a total of three poles. Now what happens if we take negative powers?

### Inverse

{% include image.html url="/assets/images/visualizing-complex-functions/z^-1.jpg" desc="Inverse of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^-1.webm" poster="/assets/images/visualizing-complex-functions/z^-1.jpg" %}

Here you can see what the inverse of the complex plane looks like. The hues are flipped along the horizontal axis and each contour is now halving instead of doubling because the lightness gradient is reversed. In the interpolation one can see two poles being ripped out of the original pole. Which follows the same pattern as the previous two.

### Inverse Square

{% include image.html url="/assets/images/visualizing-complex-functions/z^-2.jpg" desc="Inverted square of z" %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^-2.webm" poster="/assets/images/visualizing-complex-functions/z^-2.jpg" %}

Again following the pattern, three poles are removed from the original. This forms an inverse with two of each hue and double the density of contours

### Square Root

{% include image.html url="/assets/images/visualizing-complex-functions/z^0.5.jpg" desc="Square root of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^0.5.webm" poster="/assets/images/visualizing-complex-functions/z^0.5.jpg" %}

This one is a little strange. Similar to the previous ones except no poles are visibly moving and there is a discontinuity along the negative x-axis called a [branch cut](https://en.wikipedia.org/wiki/Branch_point#Branch_cuts). A branch cut means that the function surface gets too complicated to represent in two dimensions, so it is truncated along the negative x-axis for simplicity. I assure you that if you could see four dimensions this function would appear continuous.

### Inverse Square Root

{% include image.html url="/assets/images/visualizing-complex-functions/z^-0.5.jpg" desc="Inverted square root of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^-0.5.webm" poster="/assets/images/visualizing-complex-functions/z^-0.5.jpg" %}

This one is similar to the last except that two poles are removed from the original at symmetric angles. This sheds some light on the previous function. I would guess that the previous interpolation also had moving poles, but they were hidden behind the branch cut.

### Power of i

{% include image.html url="/assets/images/visualizing-complex-functions/z^i.jpg" desc="z to the power of i." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^i.webm" poster="/assets/images/visualizing-complex-functions/z^i.jpg" %}

Now things are beginning to get funky. Taking the plane to the power of $$i$$ seems to invert it in a different sense. The values now halve with angle, and are rotated counter-clockwise with magnitude. The interpolation shows two poles being removed in an asymmetric spiral fashion. I have slightly adjusted the contours to show powers of $$\mathrm{e}^{\frac{2\pi}{6}}\approx 2.85$$ instead of $$2$$, this causes the contours in the transformation to cleanly split the plane into $$6$$ segments.

### Power of -i

{% include image.html url="/assets/images/visualizing-complex-functions/z^-i.jpg" desc="z to the power of -i." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/z^-i.webm" poster="/assets/images/visualizing-complex-functions/z^-i.jpg" %}

Similar to the last one but values are now doubled with angle, and are rotated clockwise with magnitude. I find it interesting that all the power interpolations involving merging or splitting poles in varying directions.

### Sine

{% include image.html url="/assets/images/visualizing-complex-functions/sin(z).jpg" desc="Sine of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/sin(z).webm" poster="/assets/images/visualizing-complex-functions/sin(z).jpg" %}

This is beautiful and one of my favourites. Poles merge from the top and bottom, only to immediately split again forming a colourful symmetric wave. Cosine is similar but shifted horizontally.

### Hyperbolic Sine

{% include image.html url="/assets/images/visualizing-complex-functions/sinh(z).jpg" desc="Hyperbolic sine of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/sinh(z).webm" poster="/assets/images/visualizing-complex-functions/sinh(z).jpg" %}

Sine's relationship to its hyperbolic counterpart becomes clear with these last two plots.

### Arcsine

{% include image.html url="/assets/images/visualizing-complex-functions/asin(z).jpg" desc="Arcsine of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/asin(z).webm" poster="/assets/images/visualizing-complex-functions/asin(z).jpg" %}

Doesn't seem very interesting, but I'm curious to see what is going on beyond the branch cut.

### Tangent

{% include image.html url="/assets/images/visualizing-complex-functions/tan(z).jpg" desc="Tangent of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/tan(z).webm" poster="/assets/images/visualizing-complex-functions/tan(z).jpg" %}

A sequence of alternating regular and inverse poles appear along the horizontal. These are analogous to the zeros and asymptotes of the real tangent function.

### Sine of the Inverse

{% include image.html url="/assets/images/visualizing-complex-functions/sin(z^-1).jpg" desc="Sine of the inverse of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/sin(z^-1).webm" poster="/assets/images/visualizing-complex-functions/sin(z^-1).jpg" %}

Recall how the limit of $$\sin(\frac{1}{x})$$ is undefined as $$x$$ approaches $$0$$? That is because sine begins oscillating wildly, not settling on any value. Now extend that concept to the complex values and you get this trippy singularity.

### Tangent of the Inverse

{% include image.html url="/assets/images/visualizing-complex-functions/tan(z^-1).jpg" desc="Tangent of the inverse of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/tan(z^-1).webm" poster="/assets/images/visualizing-complex-functions/tan(z^-1).jpg" %}

I'm not even going to attempt to explain this nonsense.

### Exponential

{% include image.html url="/assets/images/visualizing-complex-functions/exp(z).jpg" desc="Euler's number to the power of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/exp(z).webm" poster="/assets/images/visualizing-complex-functions/exp(z).jpg" %}

Poles pull in from right to left, flattening the contours into a clean horizontal sequence. The new magnitude is the exponential of the real component and the new angle is the imaginary component in radians.

### Logarithm

{% include image.html url="/assets/images/visualizing-complex-functions/ln(z).jpg" desc="Natural logarithm of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/ln(z).webm" poster="/assets/images/visualizing-complex-functions/ln(z).jpg" %}

Hard to see what's going on here but this interpolation is unfolding into an [infinite spiral](
https://en.wikipedia.org/wiki/Complex_logarithm#/media/File:Riemann_surface_log.svg) beyond the branch cut. This means there are infinite solutions to any logarithm in the complex domain. The value that is returned is decided by where the branch cut is placed. The branch cut is usually placed such that the logarithm returns values with an angle greater than $$-\pi$$ and less than or equal to $$\pi$$.

### Sigmoid

{% include image.html url="/assets/images/visualizing-complex-functions/(1+e^-z)^-1.jpg" desc="Sigmoid of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/(1+e^-z)^-1.webm" poster="/assets/images/visualizing-complex-functions/(1+e^-z)^-1.jpg" %}

The sigmoid is a function often used in neural networks because it restricts the output of reals between $$0$$ and $$1$$. Opposing poles appear out of thin air along the imaginary axis and pull back, leaving a sequence of vertical contours on the negative real side of the function in similar manner to $$\mathrm{e}^z$$.

### Softplus

{% include image.html url="/assets/images/visualizing-complex-functions/ln(e^z+1).jpg" desc="Softplus of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/ln(e^z+1).webm" poster="/assets/images/visualizing-complex-functions/ln(e^z+1).jpg" %}

Softplus is also found as an activation function of neural networks. Two poles seem to pull out from under the main branch cut to the right of the origin, which barely changes at all.

### Gamma

{% include image.html url="/assets/images/visualizing-complex-functions/gamma(z).jpg" desc="Gamma function of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/gamma(z).webm" poster="/assets/images/visualizing-complex-functions/gamma(z).jpg" %}

The [gamma function](https://en.wikipedia.org/wiki/Gamma_function) is a continuous version of the factorial. More specifically, $$\Gamma(n) = (n - 1)!$$. This function is another favourite of mine, it looks quite exotic.

### Expoid

{% include image.html url="/assets/images/visualizing-complex-functions/e^(-e^-z).jpg" desc="Expoid of z." %}

{% include video.html url="/assets/videos/visualizing-complex-functions/e^(-e^-z).webm" poster="/assets/images/visualizing-complex-functions/e^(-e^-z).jpg" %}

This is a function I made up while playing around and ended up being interesting. I dub thee the expoid function. The black areas are where the calculations exceed the limits of floating point arithmetic on my computer, that area would be otherwise filled in with ever more compact fluctuations.

It seems as though up until the very last frame pillars of stability and instability form on the negative real side of the plot. Each pillar appears to approach a width of $$\pi$$. This phenomena forms because for any real $$z$$ the outer exponential of $$\mathrm{e}^{-\mathrm{e}^{-z}}$$ will take in a negative input, thus restraining the output between $$0$$ and $$1$$. If you stray too far into the imaginary axis the sign of the inner exponential flips. When the inner exponential becomes positive the whole thing explodes because a nested exponential grows very fast. The sign flips again every $$\pi$$ units in the imaginary direction, causing the periodic pillars.

### Soft Exponential

{% include video.html url="/assets/videos/visualizing-complex-functions/soft-exp.webm" poster="/assets/images/visualizing-complex-functions/ln(z).jpg" %}

The [soft exponential](https://arxiv.org/abs/1602.01321) is a rather rare activation function found in machine learning. It is a parameterized function $$f(a, z)$$ where $$a$$ is a parameter that interpolates the function between acting as the natural logarithm or the natural exponential. The important values of $$a$$ are:

$$
\begin{split}
f(-1, z) &= \ln(z) \\
f(0, z) &= z \\
f(1, z) &= \mathrm{e}^z \\
\end{split}
$$

## Conclusion

Math is beautiful and visualizations can help foreign concepts become a little more intuitive. I hope this sparks someone's interest in learning more about complex number systems. There are [infinitely many](https://en.wikipedia.org/wiki/Cayley%E2%80%93Dickson_construction), but they quickly become complicated so only the first few are often discussed.

What's really interesting about them is you lose something each time you go to a higher algebra.
* [Complex numbers](https://en.wikipedia.org/wiki/Complex_number) lose [ordering](https://en.wikipedia.org/wiki/Ordered_field).
* [Quaternions](https://en.wikipedia.org/wiki/Quaternions) lose [commutativity](https://en.wikipedia.org/wiki/Commutative).
* [Octonions](https://en.wikipedia.org/wiki/Octonions) lose [associativity](https://en.wikipedia.org/wiki/Associative).
* [Sedenions](https://en.wikipedia.org/wiki/Sedenions) and higher lose [alternativity](https://en.wikipedia.org/wiki/Alternative_algebra) and have nontrivial [zero divisors](https://en.wikipedia.org/wiki/Zero_divisor)

Check out [Riemann surfaces](https://en.wikipedia.org/wiki/Riemann_surface) for another powerful visualization tool that can also show what is happening beyond the branch cut.
