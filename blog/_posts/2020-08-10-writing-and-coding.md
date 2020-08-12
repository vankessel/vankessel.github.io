---
title: The Common Ground Between Writing and Coding
author: Kevin van Kessel
tags: linguistics computer-science programming
image: /assets/images/writing-and-coding/index.jpg
---

# {{ page.title }}

Writing and software engineering are fields with significant overlap.

More than the superficial comparison that they are both done in a kind of language. They require a sensible overarching structure. This structure is a tree.

Any story has needs to do at least one thing, convey the primary plot. But a story with no sub-plots or sub-sub-plots is as beautiful as a branchless trunk.

Any well designed program has one primary goal. But on the path to achieving this goal, it needs to achieve sub-goals and sub-sub-goals.

In a story, too many sub-plots can become unwieldy, confusing, and subject to plot holes like a novel by George R. R. Martin.

In software, too many nested functions or if-statements can be difficult to read, debug, or result in a stack overflow.

Shakespeare once said that brevity is the soul of wit. But it's more than that. No one has time for fluff. Anything that is not precisely contributing to what must be said or done has no place.

That's not to say to never go into more detail or slow the pace. Sometimes that's exactly what's required.

The benefits of brevity in software engineering are obvious. Every line of code should be contributing maximally to the goal like a fine tuned sports car. But brevity in software engineering goes beyond individual lines of code.

Functions must attain brevity in the sense that they solve exactly one exact sub-goal, possibly invoking other functions to solve sub-sub-goals. More importantly, this goal must be clearly identified to name the function appropriately. A function's name should be an active verb like `run()`. Sometimes it is not easy to put functions into words, or the technically correct name feels unnatural or unsatisfactory. This can mean the task is so unrelatable to everyday human life that language can't adequately describe it. This is often not the case even when it seems to be. It is most likely that there is an [anti](https://en.wikipedia.org/wiki/Anti-pattern)-[pattern](https://en.wikipedia.org/wiki/Software_design_pattern) somewhere in the code. The harder it is to resolve, the deeper into the foundation of the program's architecture the problem hides.

Similar arguments can be made for data, classes, and interfaces.

Herein lies the artistic side of programming.

# The Medium is the Message

Why is it that there are so many similarities between writing and software? Data are nouns, functions are verbs, interfaces are adjectives. It is because language is a human approximation to describe the [world-as-it-is](https://en.wikipedia.org/wiki/Thing-in-itself) as concepts. While software is the reverse process of transforming human concepts into a sort of computational reality.

This is especially true of [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming). Human concepts are organized from concrete at the bottom and abstract at the top. So are classes. Every OOP programming language has at least one topmost general class usually named `object`. This high level abstraction is concreted into further subclasses like `Human`, `Athlete`, and `Runner`. A tree of classes is formed with `object` at the trunk. It makes sense that a `Runner` can do everything a `Human` can, so a `Runner` can be used anywhere a `Human` is needed. This is a hierarchical approach to add behaviour.

As a counter example both a `Human` and a `Laptop` can die, but clearly they can not be used in each other's place. Both classes share the behaviour of something that is `Mortal`. That means in code `Human` and `Laptop` can go anywhere something that is `Mortal` is needed such as a function like `kill(Mortal thing)`. This is achieved with interfaces and is a compositional approach to add behaviour.

Both classes and interfaces define a type of thing. But sometimes the type of a thing depends on an other type. Take a `ShoppingList` for example. If a shopping list of `Food` is needed, it would be inappropriate to put non `Food` items on that list. This could be done by making a `FoodShoppingList` subtype. But if a to-do list or otherwise is also needed it quickly becomes apparent that creating a new list subtype for every possible type of item will become overwhelming. This is where generics come in. With generics, a list is described as `ShoppingList<T> where T: Nameable`. Here `T` is a stand-in for any other type that implements the `Nameable` interface, since it needs to be written down on the shopping list. (That means no shopping for Voldemort, Lovecraftian gods, or that really hard boss from Dark Souls III).

It is evident that this popular programming paradigm codifies natural human conceptualization and abstraction. It begs the question:

Can analysis of type-theory, programming languages, and programming patterns give us insight into human thought, linguistics, and good writing; and vice-versa?
