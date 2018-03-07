---
title: Introduction to Neural Networks
author: Kevin Van Kessel
tags: tutorial ai
---

{{ page.title }}
----------------
{% comment %}
Sections:
What is a neural network?
Example networks
Structure of a neuron
- Activation functions (Threshold, Sigmoid, Tanh, RELU, ELU, Special: Softmax)
- Bias
- Weights
Feedforward
Backpropogation
- Error functions (Squared Error, Cross-Entropy)
Layers and connections:
- Dropout (Overfitting)
Convolutional Networks
- Feature maps
Recurrent networks
- Conventional, LSTM
Autoencoders
Generative Adversarial Networks
{% endcomment %}

### What is a Neural Network?
A neural network is a black-box statistical model inspired by the connections found in the human brain. A black-box is a function that transforms input into a desired output, but exactly how it is done is unknown or at least very difficult to determine. This may not be the case in the future as [work is being done](https://youtu.be/zjaz2mC1KhM) to glean insight into these mysterious and powerful models.

{% include image.html url="/assets/images/nn_layers.png" desc="The basic structure of a neural network." %}

So how does one make a neural network? Trivially, you need a problem to solve, but it really begins by deciding the architecture. The architecture is essentially the structure of the network, including the layers, the types and number of neurons in those layers, the types of connections between layers, and anything else that could be unique to the network. The architecture of a network is analogous to the shape, composition, connections between neurons of the human brain, but *not* the actual signals flowing through those neurons.

Once you have an architecture, you will need a dataset to train on. A dataset should consist of pairs of input and outputs to the network. (Although sometimes in more advanced networks pairs are not needed, only the data distribution itself). This is what the network will train against to learn how to correlate an input to an output.

Training is performed by letting the untrained network try to produce an output from an input taken from the dataset. This output will likely be random garbage for an untrained network. This garbage output is compared to the intended output, and an error is obtained. This error is propogated back through the network to nudge its parameters in a direction that decreases this error. This is repeated until the error is reduced to an acceptable amount.


### Example networks

Here are some example networks to see the kinds of problems neural networks can solve.

#### [A Neural Algorithm of Artistic Style](https://arxiv.org/abs/1508.06576)

<iframe src="https://player.vimeo.com/video/139123754" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

#### [Progressive Growing of GANs for Improved Quality, Stability, and Variation](http://research.nvidia.com/publication/2017-10_Progressive-Growing-of)

<iframe width="560" height="315" src="https://www.youtube.com/embed/36lE9tV9vm0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### [Unsupervised Image-to-Image Translation Networks](https://arxiv.org/abs/1703.00848)

<iframe width="560" height="315" src="https://www.youtube.com/embed/nlyXoX2aIek" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### [Phase-Functioned Neural Networks for Character Control](http://theorangeduck.com/media/uploads/other_stuff/phasefunction.pdf)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ul0Gilv5wvY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Anatomy of a Neuron

The most essential part of any network is the neuron. A neuron consists of an activation function
