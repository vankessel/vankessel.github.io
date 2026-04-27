---
title: "Quantum Body Language"
author: Kara van Kessel
tags: philosophy quantum experiment
image: /assets/images/quantum-body-language/index.jpg
reddit: r/vankessel/comments/1r3bygz
redirect_from: 
  - /how-to-disprove-telempathy
  - /how-to-disprove-quantum-woo
---

# {{ page.title }}

## Wait, really?

Did you know it is [not](https://old.reddit.com/r/Psychonaut/comments/5qx3cw/connected_as_one_with_hours_of_telepathy/) too [uncommon](https://old.reddit.com/r/Psychonaut/comments/86w79u/i_think_my_girlfriend_and_i_are_beginning_to/dw8ecnz/) for [people](https://old.reddit.com/r/Psychonaut/comments/apfdkn/do_you_guys_believe_in_telepathy_using_lsd/eg83yvb/) to [experience telepathy on psychedelics](https://www.semanticscholar.org/paper/Psychedelic-Telepathy%3A-An-Interview-Study-Johnstad/d9475810ce25186dab52830b7735f5a905a80dc1)?

I have experienced this myself twice with a friend. We both agreed that there's no way we could have shared what we did in complete silence.

Explanations usually fall into two categories:

1. It's mere hallucination.
2. It's mere body language.

I think it might be a bit more than either.

The brain is not "too warm & wet for quantum mechanics," as [proven in April of 2024](https://pubs.acs.org/doi/10.1021/acs.jpcb.3c07936). (Tryptophan is a key player. Curious, considering the connection to psychedelics.)

This telepathy does not seem to involve [any additional communication](https://en.wikipedia.org/wiki/No-communication_theorem) of information.

How is there an advantage if there is no communication of information?

It's merely that the same amount of information is more efficiently used.

Like a [quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm), it's possible to [exploit](https://en.wikipedia.org/wiki/Bell%27s_theorem) [quantum correlations](https://en.wikipedia.org/wiki/Quantum_correlation) to [do something](https://en.wikipedia.org/wiki/BQP) that [appears](https://en.wikipedia.org/wiki/Shor%27s_algorithm) [remarkable](https://en.wikipedia.org/wiki/Grover%27s_algorithm).

Is there any way to distinguish the correct model of this experience through experiment?

## The Game

Two players attempt to cooperatively win rounds of [the Mermin-Peres magic square game](https://en.wikipedia.org/wiki/Quantum_pseudo-telepathy#The_magic_square_game).

They can communicate before to strategize, but not during. It's impossible to communicate by measuring entangled qubits, so that is fine.

This game can only be won 8/9 of the time classically, and 100% of the time with only a single pair of entangled qubits.

This seems like a good starting point.

I approached devising an experiment using this game. The only difficulty being how to manage player coordination.

In the classical case, the best outcome involves agreeing beforehand on fixed answers (0 or 1) for each of the 9 board positions.

In the quantum case, the best outcome involves agreeing beforehand on a fixed quantum basis to measure the entangled qubit for each of the 9 positions.

## The Problem

It's easy to memorize 9 zeros or ones.

But it's not even clear if it's possible to consciously choose the quantum basis to measure in.

Could test it using this game anyway and hope for the best—but what if we make it so it doesn't matter if the players are able to coordinate and execute a plan or not?

## A Solution?

Let's model people as [Markov chains](https://en.wikipedia.org/wiki/Markov_chain). (Higher-order Markov chains. With say, a memory of the past 3 or 4 choices made.)

Create two [distributions](https://en.wikipedia.org/wiki/Probability_distribution) of these "people." The coefficients of their Markov chains being uniformly distributed.

The first [population](https://en.wikipedia.org/wiki/Statistical_population) contains people choosing 0s or 1s. The Markov chain describes the probability, for each square on the 3x3 grid, of putting a 1 instead of 0 on that square.

The second contains people who choose the coefficients for the first few [spherical harmonics](https://en.wikipedia.org/wiki/Spherical_harmonics)—representing the probability where on the [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere) the [basis](https://en.wikipedia.org/wiki/Basis_(linear_algebra)) of quantum measurement is chosen. The Markov chain describes the probability, for each square on the 3x3 grid, of which basis to measure in.

Players within each population play the game with each other and the win rate of those pairs are recorded.

The resulting distributions can be compared using [nonparametric](https://en.wikipedia.org/wiki/Nonparametric_statistics) [tests](https://en.wikipedia.org/wiki/List_of_statistical_tests).

We can expect that recording win rates between all possible pairs will indeed show different distributions between the quantum and classical cases since only the quantum case has pairings that will result in a 100% win rate.

Comparing the populations entirely is unrealistic anyway since humans almost certainly have biases for and against certain configurations. We can instead compare random subsets of those populations instead. (And if data is gathered on those biases, we can pick those subsets with a better initial guess of a distribution than just uniformly random.)

A useful question is: how _often_ can we distinguish random subsets? This may need to be approximated using [Monte-Carlo simulation](https://en.wikipedia.org/wiki/Monte_Carlo_method).

A high percentage would mean that performing this experiment with real life people could have the potential of detecting such a model of quantum body language if it exists. Even if coordination between players is unfeasible.

And that is exciting.

I haven't found the time to do so yet and likely won't for a while since I have other projects I am focusing on, but there is enough information here for anyone to code these simulations themself.

---

Need to brush up on my statistics before I can say any of these are appropriate, but some things that may be useful:

- [Robust Bayesian analysis](https://en.wikipedia.org/wiki/Robust_Bayesian_analysis)
- [Importance sampling](https://en.wikipedia.org/wiki/Importance_sampling)
- [Resampling](https://en.wikipedia.org/wiki/Resampling_(statistics)) (Specifically [stationary bootstrap](https://en.wikipedia.org/wiki/Bootstrapping_(statistics)#Time_series:_Moving_block_bootstrap))

---

### Why? How?

I don't know. Evolution? Before language, evolutionary advantage would be for the group that can communicate better given two otherwise equal packs. Evolution is pretty good at searching large solution spaces.

It reminds me of [this article](https://www.damninteresting.com/on-the-origin-of-circuits/) describing how an artificially evolved [FPGA](https://en.wikipedia.org/wiki/Field-programmable_gate_array) learned to exploit magnetic side-effects to arrive at a solution. Yeah it may be artificial. So are forest fire and viral disease simulations but they aren't useless to learn from.

### The brain may use quantum mechanics, but how can entanglement occur over the air?

Don't know that either. Skepticism is healthy and should be maintained. Don't forget that not even long ago suggesting a quantum aspect to the brain would be laughed at.

Is biological entanglement over the air that much more of an impossibility? The body is known [to literally glimmer](https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0006256&type=printable).

---

It would be nice if:

- This is true.
- It requires sufficient empathy to function and be experienced.
- It becomes trendy to try this out.

Maybe such a thing could encourage a positive shift towards increased empathy across the globe?

How many empathy-deficient people would work to better themselves for the opportunity to experience something that feels like magic?

Could really use something like that about now.
