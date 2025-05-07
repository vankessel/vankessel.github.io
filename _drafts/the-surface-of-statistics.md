---
title: "The Surface of Statistics"
author: Kara van Kessel
#tags: philosophy quantum physics math
#image: #/assets/images/symmetry-of-consciousness/index.webp
#reddit: #r/vankessel/comments/1ep1hbz
#redirect_from: /thoughts-on-the-hard-problem-symmetry-of-consciousness
---

# {{ page.title }}

Did you know that multiplication is _not_ intrinsically repeated addition?

It is better to consider them geometrically:

Multiplication scales. Addition translates.

Similarly, exponentiation has an interesting geometric interpretation:

For $$b = ae^x$$, __a__ is the starting position, __b__ is the ending position, and __x__ is the velocity.

The [exponential](https://en.wikipedia.org/wiki/Exponential_map_(Lie_theory)) takes points and [flows](https://en.wikipedia.org/wiki/Parallel_transport) them along some [surface](https://en.wikipedia.org/wiki/Manifold).

## The manifold of probability

I can't help but consider this viewpoint whenever I see $$e^x$$ or $$\ln{x}$$ now.

One common area to encounter them is statistics.

Instead of multiplying probabilities, it's often easier to take their logarithms and add those together.

The logarithm maps things from manifolds to [tangent spaces](https://en.wikipedia.org/wiki/Tangent_space). If probabilities belong to the manifold, what does the tangent space contain?

[Information content](https://en.wikipedia.org/wiki/Information_content#Relationship_to_entropy).

The logarithm tells us the amount of "surprise" a probability has. These add like probabilities multiply.

The negative logarithm is often used, just to keep everything positive. But it seems possibly arbitrary. To keep things consistent with Lie Theory let's ignore that convention.

In our interpretation, the magnitude of the logarithm tells us the "surprise." The negative sign tells us the direction. More negative means more unlikely, which feels appropriate.

Another way to think of the negative result of the logarithm is as a kind of "suppression." The most suppressed outcomes are most surprising.

A 100% certain event is completely unsurprising. ($$ \ln{1} = 0 $$)

A 50% chance is nicely surprising. ($$ \ln{\frac{1}{2}} \approx -0.69 $$)

An impossible event is infinitely surprising! ($$ \lim\limits_{x \to {0^+}} \ln{x} = -\infty $$)

## The type of information

If there's any chance of discovering some kind of manifold of statistics, we need to think bigger than the real numbers. Exponentiation of real numbers won't get you anything very interesting. It gets more interesting the complicated the mathematical object you put up there.

For [example](https://en.wikipedia.org/wiki/Shift_operator): $$ e^{t \frac{d}{dx}} f(x) = f(x + t) $$

From quantum mechanics we know that probabilities are better understood as the magnitude of a complex number, rather than a purely real number.

But perhaps it doesn't end there. Perhaps information's most natural form contains the complex numbers, like [quaternions](https://en.wikipedia.org/wiki/Quaternion), or [multivectors](https://en.wikipedia.org/wiki/Multivector)?

I think more exotic objects than those would be required.

## Can we deduce some properties?

### There and back again?

Opposite signed values of the logarithm would correspond to probabilities above 100%.

Unlike 100% where the logarithm is 0 and can't change the information content, a value above 100% can.

One apparent oddity this leads to is:

It less "surprising" to see a coin flip land heads __and__ a 110% chance event to occur, than it is to solely see that coin land heads.

The former has less informational content than the latter, somehow.

---

Allowing probabilities above 100% may also introduces a problem where two complementary events, like 50% and 200%, must multiply to 100%. Thus both occurring is a certainty. Also sounds a bit like nonsense. What do probabilities above 100% even mean?

If we just disallow probabilities above 100%, that means we can move in one direction but not the other.

After observing some stochastic event, you can't go back and unobserve it!

Sounds a bit like the one-way arrow of time. Interesting...

---

Perhaps there is a "dual" understanding to these probabilities above 100% that is just unintuitive. Like [p-adic numbers](https://en.wikipedia.org/wiki/P-adic_number) as opposed to the reals.

Can we deduce it? Say event __A__ is just the present. Event __B__ is measuring spin-up on an electron in the future.

Perhaps the probability your present self at __A__ goes to __B__ is 50%, while the dual probability your future self at __B__ goes to __A__ is 200%.

Could this dual notion of probability be understood as a time-reversal duality? If your present self is at __A__ and going forward, and your future dual self is at __B__ going backward, then both __A__ and __B__ must be true.

It may also imply a dual version of you exists going backwards through time...

It almost sort of makes sense. To a "future dual self" going backward into the past, everything should be at least 100% since the past embodies certainty while the future embodies uncertainty.

Extremely large probabilities approaching $$\infty$$% would be dual to probabilities close to 0%. These are just as "surprising" as the small probabilities. This can be understood as the fact there were very few possible pasts that could have led to this future.

Would this imply the [many-worlds interpretation](https://en.wikipedia.org/wiki/Many-worlds_interpretation) in both directions of time? Many pasts and many futures?

### Normal distribution

If the tangent space contains information content/surprise, more magnitude means more content/surprise. Does this mean as you go further away from the identity element of the manifold, you get more unlikely probability distributions? And that's relative. Relative to the unlikely state, the default state is just as "unlikely", just in the opposite direction.

The fact that all directions lead to decreasing probabilities, sounds a bit like a normal distribution. Which is basically a scaled and shifted Gaussian function:

$$ e^{-x^2} $$

More precisely:

$$ \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}} $$

Normalized:

$$ \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2} $$

Perhaps this $$x^2$$ term is better thought as $$\|x\|^2 = x\overline{x}$$

$$ \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}x\overline{x}} $$

or

$$ e^{\ln{(\sqrt{2\pi})}\frac{1}{2}x\overline{x}} $$

$$ \zeta'(0) = -\frac{1}{2}\ln{(2\pi)} = -\ln{(\sqrt{2\pi})} $$

$$ \prod_{n}n! = \sqrt{2\pi} $$
