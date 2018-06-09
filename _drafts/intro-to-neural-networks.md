---
title: Introduction to Neural Networks
author: Kevin Van Kessel
tags: tutorial ai
---

# {{ page.title }}

{% comment %}
Sections:
What is a neural network?
Example networks


Layers and connections:
- Residual Dropout (Overfitting) -- Vanishing gradient

Feedforward
Error functions (Squared Error, Cross-Entropy)
Backpropagation
Convolutional Networks
- Feature maps
Recurrent networks
- Conventional, LSTM
Autoencoders
Generative Adversarial Networks
{% endcomment %}


## What is a Neural Network?

A neural network is a statistical black box model inspired by the connections found in the human brain. These networks are taught how to produce correct output by training them with large datasets. A black box is a function that transforms input into an output, but the exact process behind the function is unknown. Neural networks are effectively black boxes as their internal process once fully trained is hard to reverse engineer. This may not be the case in the future as [work is being done](https://youtu.be/zjaz2mC1KhM) to glean insight into these mysterious and powerful models.

{% include image.html url="/assets/images/nn_layers.png" desc="The basic structure of a neural network." %}

So how does one make a neural network? Trivially, you need a problem to solve, but it really begins by deciding the architecture. The architecture is essentially the structure of the network, including the layers, the types and number of neurons in those layers, the types of connections between layers, and anything else that could be unique to the network. The architecture of a network is analogous to the shape, composition, connections between neurons of the human brain, but *not* the actual signals flowing through those neurons.

Once you have an architecture, you will need a dataset to train on. A dataset should consist of pairs of input and outputs for the network. (Although sometimes in more advanced networks pairs are not needed, only the data distribution itself.) This is what the network will train against to learn how to correlate an input to an output.

Training is performed by letting the untrained network try to produce an output from an input taken from the dataset. This output will likely be random garbage for an untrained network. This garbage output is compared to the intended output, and an error is obtained. This error is propagated back through the network to nudge its parameters in a direction that decreases this error. This is repeated until the error is reduced to an acceptable amount.


## Example networks

Here are some example networks to see the kinds of problems neural networks can solve.

### [A Neural Algorithm of Artistic Style](https://arxiv.org/abs/1508.06576)

<iframe src="https://player.vimeo.com/video/139123754" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### [Progressive Growing of GANs for Improved Quality, Stability, and Variation](http://research.nvidia.com/publication/2017-10_Progressive-Growing-of)

<iframe width="560" height="315" src="https://www.youtube.com/embed/36lE9tV9vm0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### [Unsupervised Image-to-Image Translation Networks](https://arxiv.org/abs/1703.00848)

<iframe width="560" height="315" src="https://www.youtube.com/embed/nlyXoX2aIek" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### [Phase-Functioned Neural Networks for Character Control](http://theorangeduck.com/media/uploads/other_stuff/phasefunction.pdf)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ul0Gilv5wvY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Structure of a Neural Network

A neural network is built out of layers of interconnected neurons. The depth of a layer is correlated to how abstract the information processing at that layer is. The number of neurons in a layer is correlated to the processing power of that layer. The first layer is called the input layer and takes data from the dataset as input, the middle layers are called the hidden layers and take the previous layer's output as input. The last layer is called the output layer and outputs the final result of the network. The fact that each layer passes its output to the next makes this a description of a **feedforward** neural network. Every network also needs a **loss function**, which measures the difference between an output and the expected output, and an **optimizer** that uses the loss to determine how to shift the network's weights.

### Layer Connections

Layers in a neural network are typically fully connected; each neuron in a layer gets its inputs from every neuron in the previous layer.

Sometimes these connections are altered such as in the case of [**residual networks**](https://arxiv.org/abs/1512.03385), where the input to a neuron is added to its output. This means if the neuron naturally outputs 0, it will now output its input, making it an [**identity function**](https://en.wikipedia.org/wiki/Identity_function). The ability for neurons to easily form an identity function allows for residual networks to become very deep by reducing the [**vanishing gradient problem**](https://en.wikipedia.org/wiki/Vanishing_gradient_problem#Residual_networks).

[**Dropout**](https://en.wikipedia.org/wiki/Dropout_(neural_networks)) is another method of connecting layers. This method reduces the problem of [**overfitting**](https://en.wikipedia.org/wiki/Overfitting), which is when your program is plagiarizing the training data instead of generalizing it. Dropout will randomly disconnect a given percentage of connections between two layers during training. Will this not break the network? The answer is no, it actually makes it more robust, it learns how to arrive at the correct answer even with missing data. When the network is fully trained, dropout is no longer applied and all the connections are active. There is one issue with this, if the network was trained to give a correct answer with 50% of the connections, the trained network will now use 100% of the connections with about twice the data being fed to the next layer. To account for this, the trained network will multiply all values passing through the connections by the dropout percentage.

### Loss Function

A [**loss function**](https://en.wikipedia.org/wiki/Loss_function) is a measure of how dissimilar two things are. A loss of zero should mean the two things being measured are identical. An example loss function would be the distance between two points in space: If the distance is 0 the points are identical, with increasing distances indicating that the points are less and less similar.

A common loss function is the [**squared error**](https://en.wikipedia.org/wiki/Mean_squared_error#Loss_function). You take the difference between two numbers and square it. This has the benefit of keeping the loss positive, and penalizing large differences.

### Optimizer

An optimizer is a method that uses the loss function and dataset to determine how to change the parameters (weights) of the network.

Gradient descent is the optimization process of running a sample input from the dataset through the network, then using the derivative of the error of a with respect to the weights of the network (The [gradient](https://en.wikipedia.org/wiki/Gradient)) to nudge the weights in a direction that lowers that error.

Stochastic gradient descent (SGD) is the same process except the gradients of a bunch of random samples are averaged to reduce the chance of a single sample being an outlier. (This is technically mini-batch gradient descent, but SGD is the common term for this now).

There are more variants of gradient descent such as ones that involve momentum and adaptive learning rates which you can read more about [here](https://arxiv.org/abs/1609.04747).

## Anatomy of a Neuron

The most essential part of any network is a neuron. A neuron consists of inputs, weights, a bias, and an activation function.

{% include image.html url="/assets/images/nn_neuron.svg" desc="A diagram of a standard neuron. Notation consistent with <a href='http://neuralnetworksanddeeplearning.com/chap2.html'>this tutorial</a>." %}

$$
\begin{split}
a^{l}_{j} =&\ \sigma(z^{l}_{j}) \\
z^{l}_{j} =&\ \sum_{k}w^{l}_{jk}a^{l-1}_{k} + b^{l}_{j} \\
\hline
a^{l}_{j} :=&\ \mathrm{Activation\ of\ the}\ j^{\mathrm{th}}\mathrm{\ neuron\ in\ the}\ l^{\mathrm{th}}\mathrm{\ layer.} \\
z^{l}_{j} :=&\ \mathrm{Weighted\ input\ to\ the}\ j^{\mathrm{th}}\mathrm{\ neuron\ in\ the}\ l^{\mathrm{th}}\mathrm{\ layer} \\
w^{l}_{jk} :=&\ \mathrm{Weight\ between\ the}\ j^{\mathrm{th}}\mathrm{\ neuron\ in\ the}\ l^{\mathrm{th}}\mathrm{\ layer} \\
&\ \mathrm{and\ the}\ k^{\mathrm{th}}\mathrm{\ neuron\ in\ the\ previous\ layer.} \\
b^{l}_{j} :=&\ \mathrm{Bias\ of\ the}\ j^{\mathrm{th}}\mathrm{\ neuron\ in\ the}\ l^{\mathrm{th}}\mathrm{\ layer.} \\
\sigma :=&\ \mathrm{The\ activation\ function.}
\end{split}
$$

### Inputs

The input layer's inputs come from the dataset. Subsequent layer's inputs are the activations of the previous layer.

### Weights

The weights multiply each input and are the parameters of the network that are learned.

### Bias

The bias is a constant value added to the sum of weighted inputs and is also learned. The bias essentially offsets the weighted sum. For example, if the sum of weighted inputs for a neuron is often about 100 for examples taken from the dataset, the bias may learn to be around -100 which would centre the distribution around 0. Some advantages of the distribution being near zero will become clear once the activation function is discussed.

So how does one incorporate bias into the neural network model? Turns out we can reuse the functionality of the weights to simulate a bias, which will prevent the model from becoming more complex than it needs to be. To simulate the bias, an extra input is fed into the neuron. This input is set to a constant value of 1. That means the corresponding weight will always contribute the same value of 1 times itself. This weight is equivalent to the bias.

### Activation Function

The activation function is a function that defines the output of a neuron. Activation functions are typically chosen to bound the output between a range of values. Popular activation functions are the sigmoid, tanh, RELU, ELU, and softmax functions. My particular favourite is tanh as it balances the output between -1 and 1.

{% include image.html url="/assets/images/nn_tanh.svg" desc="The hyperbolic tangent function." %}

This is sort of equivalent to a continuous form of a binary choice: A large negative value becomes -1, and a large positive value becomes 1, with smaller numbers somewhere in-between. -1 and 1 can be thought of as analogous to false and true, respectively.

The non-linearity of this function is what makes the whole network non-linear. This non-linearity is what allows neural networks to approximate any function.

### Vanishing Gradient problem

The [**vanishing gradient problem**](https://en.wikipedia.org/wiki/Vanishing_gradient_problem) is an issue where a neural network's training slows down the farther back in the network the gradient is propagated. In the case of the tanh function, its derivative will always be between 0 and 1. This means that for every layer the gradient is propagated through, the gradient is multiplied by some value between 0 and 1. Do this enough times and the gradient becomes smaller and smaller until it "vanishes". The effect this has is that the farther from the end of the network a layer is, the less it will be updated by the gradient.

Attempts at a solution to the vanishing gradient problem include [residual networks](https://en.wikipedia.org/wiki/Vanishing_gradient_problem#Residual_networks) mentioned previously, and recurrent [LSTM networks](https://en.wikipedia.org/wiki/Long_short-term_memory).

## Training a Neural Network

### Backpropagation

Backpropagation is the meat of a neural network's training algorithm. It is how one finds the derivative of the loss function with respect of the weights.
