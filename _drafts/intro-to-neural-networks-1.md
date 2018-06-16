---
title: Introduction to Neural Networks
author: Kevin Van Kessel
tags: tutorial neural-networks machine-learning  ai series part-1
---

# {{ page.title }}

## What is a Neural Network?

A neural network is a black box model inspired by the biological information processing of neurons found in the brain. These networks are taught how to produce correct outputs by training them with large datasets. A black box is a function that transforms an input into an output, while the exact process behind the function is unknown. Neural networks are effectively black boxes as their internal process once fully trained is hard to reverse engineer. This may not be the case in the future as [work is being done](https://youtu.be/zjaz2mC1KhM) to glean insight into these fascinating and powerful models.

{% include image.html url="/assets/images/nn_layers.png" desc="The basic structure of a neural network." %}

So, how does one make a neural network? Trivially, you need a problem to solve, but it really begins by deciding the architecture. The architecture is the structure of the network, including the size and number of layers, the types and number of neurons in those layers, the types of connections between layers, and anything else that could be unique to the network. The architecture of a network is analogous to the shape, composition, and connections between neurons of the brain, but not the signals flowing between those neurons.

Once you have an architecture, you will need a dataset to train on. A dataset should consist of pairs of inputs and outputs for the network. This is what the network will train against to learn how to correlate an input to an output. There are [some cases](https://arxiv.org/abs/1711.00043) where pairs are not even necessary, only the distribution of the data is needed.

Training is performed by letting the untrained network try to produce an output from an input of the the dataset. This output will [almost certainly](https://en.wikipedia.org/wiki/Almost_surely) be random garbage for an untrained network. This garbage output is compared to the intended output, and an error is obtained. This error is propagated back through the network to nudge its parameters in a direction that decreases this error. This is repeated many times until the error is reduced to a minimal amount.


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

A neural network is built out of layers of interconnected neurons. The depth of a layer is correlated to how abstract the information processing at that layer is. The number of neurons in a layer is correlated to the processing power of that layer. The first layer is called the input layer and takes data from the dataset as input, the middle layers are called the hidden layers and take the previous layer's output as input. The last layer is called the output layer and outputs the final result of the network. The fact that each layer passes its output to the next makes this a description of a [**feedforward**](https://en.wikipedia.org/wiki/Feed_forward_(control)#Feed-forward_systems_in_computing) neural network. Every network also needs a [**loss function**](#loss-function), which measures the difference between an output and the expected output, and an [**optimizer**](#optimizer) that uses the loss to determine how to shift the network's weights.

### Layer Connections

Layers in a neural network are typically fully connected; each neuron in a layer gets its inputs from every neuron in the previous layer.

Sometimes these connections are altered such as in the case of [**residual networks**](https://arxiv.org/abs/1512.03385), where the inputs to a layer can skip some number of layers forward and add its value to the output. This means if the last layer naturally outputs zeros, it will now output its input, acting like an [**identity function**](https://en.wikipedia.org/wiki/Identity_function). The ability for layers to easily form an identity function allows for residual networks to become very deep by reducing the [**vanishing gradient problem**](#vanishing-gradient-problem).

[**Dropout**](https://en.wikipedia.org/wiki/Dropout_(neural_networks)) is another method of connecting layers. This method reduces the problem of [**overfitting**](https://en.wikipedia.org/wiki/Overfitting), which is when the network is plagiarizing the training data instead of generalizing it. This is like learning by memorization as opposed to learning by understanding. Dropout will randomly disconnect a given percentage of connections between two layers during training. Will this not break the network? The answer is no, it actually makes it more robust. The network learns how to arrive at the correct answer even with missing data. Once the network is fully trained and is being applied, dropout is no longer enabled and all the connections are active. There is one obvious issue with this, if the network was trained to give a correct answer with 50% of the connections, the trained network will now use 100% of the connections resulting in about twice the data being fed to the next layer. To equalize this, the trained network will multiply all values passing through the connections by the dropout percentage.

### Loss Function

A [**loss function**](https://en.wikipedia.org/wiki/Loss_function) is a measure of how dissimilar two things are. A loss of zero should mean the two things being measured are identical. An example loss function would be the distance between two points in space: If the distance is 0 the points are identical, with increasing distances indicating that the points are less and less similar.

A common loss function is the [**squared error**](https://en.wikipedia.org/wiki/Mean_squared_error#Loss_function). You take the difference between two numbers and square it. This has the benefit of keeping the loss positive, and penalizing larger differences.

### Optimizer

An optimizer is a method that uses the loss function and dataset to determine how to change the parameters ([**weights**](#weights)) of the network.

[**Stochastic gradient descent**](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) (SGD) is the optimization process of running a sample input from the dataset through the network, then using the derivative of the error of a with respect to the parameters of the network (The [**gradient**](https://en.wikipedia.org/wiki/Gradient)) to nudge the parameters in a direction that lowers that error.

Mini-batch gradient descent is the same process except the gradients from a batch of random samples from the dataset are averaged. This helps ensure the gradient is pointing in a direction that optimizes in a general way for many sample inputs and not just individual inputs.

There are more variants of gradient descent such as ones that involve momentum and adaptive learning rates which you can read more about [here](https://arxiv.org/abs/1609.04747).

## Anatomy of a Neuron

The most essential part of any network is a neuron. A neuron consists of inputs, weights, a bias, and an activation function.

{% include image.html url="/assets/images/nn_model.png" desc="A diagram of a standard neuron. I will be using a slightly different notation consistent with <a href='http://neuralnetworksanddeeplearning.com/chap2.html'>this tutorial</a>." %}

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

The input layer's inputs come from the dataset. Subsequent layer's inputs are the activations ($$a$$) of the previous layer.

### Weights

The weights ($$w$$) multiply each input and are the parameters of the network that are learned.

### Bias

The bias ($$b$$) is a parameter added to the sum of weighted activations ($$\sum wa$$). The bias offsets this sum. For example, if the sum of weighted activations for some neuron is often about 100 for any given input taken from the dataset, the bias may learn to be around -100 which would centre the distribution around 0.

So how does one incorporate a learnable bias into the neural network model? Turns out the functionality of the weights can be reused to create a bias, which will prevent the model from becoming more complex than it needs to be. To simulate the bias, an extra input is fed into every neuron. This special input is set to a constant value of 1. That means the corresponding weight for each of these inputs will always only contribute exactly one multiple of itself. This weight is equivalent to the bias.

### Activation Function

The [**activation function**](https://en.wikipedia.org/wiki/Activation_function) is a function that defines the output of a neuron. Activation functions are typically chosen to bound the output between a range of values. Popular activation functions are the sigmoid, tanh, RELU, ELU, and softmax functions. The tanh function is nice as it balances the output between -1 and 1.

{% include image.html url="/assets/images/nn_tanh.svg" desc="The hyperbolic tangent function." %}

This is like a continuous form of a binary choice: A large negative value becomes -1, and a large positive value becomes 1, with smaller numbers somewhere in-between. -1 and 1 can be thought of as analogous to false and true.

The non-linearity of this function is what makes the whole network non-[linear](https://en.wikipedia.org/wiki/Linear_function). This non-linearity is what allows neural networks to approximate any function.

#### Vanishing Gradient problem

The [**vanishing gradient problem**](https://en.wikipedia.org/wiki/Vanishing_gradient_problem) is an issue where a neural network's training slows down the farther back in the network the gradient is propagated. In the case of the tanh function, its derivative will always be between 0 and 1. This means that for every layer the gradient is propagated through, the gradient is multiplied by some value between 0 and 1. Do this enough times and the gradient becomes smaller and smaller until it "vanishes". The effect this has is that the farther from the end of the network a layer is, the less it will be updated by the gradient.

Attempts at a solution to the vanishing gradient problem include the [residual networks](https://en.wikipedia.org/wiki/Vanishing_gradient_problem#Residual_networks) mentioned previously, and recurrent [LSTM networks](https://en.wikipedia.org/wiki/Vanishing_gradient_problem#Long_short-term_memory).

## Training a Neural Network

### Backpropagation

Backpropagation is the meat of a neural network's training algorithm. It relies on using the gradient, the derivative of the loss with respect to the parameters of the network. With this gradient one can know how to update the parameters of the network to reduce the loss, which will make the network perform better.

Before one can use backpropagation, the gradient must be found. An input from the dataset is fed into the network. Then the output of the network is compared to the corresponding expected output using a loss function like the squared error. Once the loss is computed we can find the derivative of the loss with respect to the weights of the last layer of neurons. Using the notation from earlier, this is $$\frac{\partial C}{\partial w^{L}}$$ where $$C$$ is the loss of the function, and L is the total number of the layers in the network.

This is where backpropagation comes in. Remember the [**chain rule**](https://en.wikipedia.org/wiki/Chain_rule) from calculus? A brief reminder: If you multiply two derivatives such that terms cancel out, you get another valid derivative. For example, $$\frac{\ \partial b}{\partial a} \cdot \frac{\partial c}{\partial b} = \frac{\partial c}{\partial a}$$. This can be applied to the neural network too. If you can find $$\frac{\partial w^{L}}{\partial w^{L-1}}$$, you can use the chain rule to easily find $$\frac{\partial C}{\partial w^{L-1}}$$. You repeat this process for each layer until it has gone through the whole network. Then you have the gradient for the entire network, which describes how the loss changes for any particular weight. The weights can then be updated by subtracting a small multiple of the gradient from the weights. This small multiple is the gradient multiplied by the [**learning rate**](https://developers.google.com/machine-learning/crash-course/reducing-loss/learning-rate), which is often set to decrease over training time to allow the network to settle into a [**local optimum**](https://en.wikipedia.org/wiki/Local_optimum).

## Next

This covers the foundation of what one needs to know about neural networks. I will continue this series with posts about [**backpropagation**](https://en.wikipedia.org/wiki/Backpropagation) in detail, [**convolutional networks**](https://en.wikipedia.org/wiki/Convolutional_neural_network), [**recurrent networks**](https://en.wikipedia.org/wiki/Recurrent_neural_network), [**autoencoders**](https://en.wikipedia.org/wiki/Autoencoder), and [**general adversarial networks**](https://en.wikipedia.org/wiki/Generative_adversarial_network).
