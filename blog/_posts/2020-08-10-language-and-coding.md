---
title: Language and Coding
author: Kevin van Kessel
tags: linguistics computer-science programming
reddit: r/vankessel/comments/i87tct
image: /assets/images/writing-and-coding/index.jpg
redirect_from: /writing-and-coding
---

# {{ page.title }}

Storytelling and software design have significant overlap.

Every story needs a plot.
A story with no sub-plots is like a branchless tree.

Software must solve a problem.
Software that solves no sub-problems becomes tangled like spaghetti.

Too many sub-plots can become confusing and subject to holes.

Too much abstraction can lead to software bloat, wasted time, and worse performance.

Brevity is vital to both.
Anything not contributing has no place.
That's not to say to never go into more detail or slow the pace.

To design good software, the problem should be broken into smaller and more abstract chunks, again splitting those chunks, and so on.
The trick is deciding how to split your problem.
An extreme example is not splitting the problem at all. Leaving it this concrete works, but take a look at this [this gamedev code](https://old.reddit.com/r/programminghorror/comments/4dguj8/dev_didnt_know_about_for_or_while_loops/) where not even a single for loop is used and tell me you didn't throw up in your mouth a little.

The best heuristic for deciding how to break up the problem is to ask "Will this be easy to change or add on to later?" Most software must be maintained, so it's best to write it in a way that future readers to quickly understand and modify it. The closer the code is to the way our mind conceptualizes, the easier it is to pick up and manipulate.
If conceptualization is the territory, then language is the map.
We know a lot about the map, so let's use that.

# The Medium is the Message

Classes are nouns, functions are verbs, interfaces are adjectives.
Languages divide reality into conceptual chunks.
Programming languages divide a sort of computational reality into conceptual chunks.

[Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) is the closest to the way we conceptualize.
OOP languages have one topmost general class usually named `object`.
If you were to draw a Venn diagram, `object` is the sheet of paper you're drawing on.
This abstraction is concreted into further subclasses like `Human`, `Athlete`, and `Runner`.
It makes sense that a `Runner` can do everything a `Human` can, so a `Runner` can be used anywhere a `Human` is needed.

As a counter example both a `Human` and a `Laptop` can die, but clearly they can not be used in each other's place.
Both classes share the behaviour of something that is `Mortal`.
In code there should be a way to express that `Human` and `Laptop` can fill in for something that is `Mortal`.
Such as a function like `kill(Mortal thing)`.
This is achieved with interfaces and is a compositional approach to add behaviour.

Both classes and interfaces define a type of thing. But sometimes the type of a thing depends on an other type. Take a `ShoppingList` for example. If a shopping list of `Food` is needed, it would be inappropriate to put non `Food` items on that list. This could be done by making a `FoodShoppingList` subtype. But if a to-do list or otherwise is also needed it quickly becomes apparent that creating a new list subtype for every possible type of item will become overwhelming. This is where generics come in. With generics, a list is described as `ShoppingList<T> where T: Nameable`. Here `T` is a stand-in for any other type that implements the `Nameable` interface, since it needs to be written down on the shopping list. (That means no shopping for Voldemort, Lovecraftian gods, or that really hard boss from Dark Souls III).

Can type-theory and programming patterns give insight into thought and linguistics?
