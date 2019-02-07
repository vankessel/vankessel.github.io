---
title: Introduction to Neural Networks
author: Kevin Van Kessel
tags: tutorial neural-networks machine-learning ai series part-1
reddit: r/vankessel/comments/afpiey
---

# {{ page.title }}

## What is a Neural Network?

A neural network is a black box statistical model inspired by the biological information processing of neurons. These networks are taught how to produce correct outputs by training them with large datasets. A black box is a function in which the inner workings behind the function is unknown. Neural networks are effectively black boxes as they hard to reverse engineer once fully trained. This may not be the case in the future as [work is being done](https://youtu.be/zjaz2mC1KhM) to glean insight into these fascinating and powerful models.

{% include image.html url="/assets/images/nn_layers.png" desc="The basic structure of a neural network." %}

So, how does one make a neural network? It begins by deciding the architecture. The architecture is the structure of the network, including the number of layers, the types and number of neurons in those layers, the types of connections between layers, and anything else that could be unique to the network. You can think of the architecture of a network being like the specific [connectome](https://en.wikipedia.org/wiki/Connectome) of a brain.

Once you have an architecture, you will need a dataset to train on. A dataset should consist of pairs of inputs and outputs for the network. This is what the network will train against to learn how to correlate an input to an output. There are [some cases](https://arxiv.org/abs/1711.00043) where pairs are not even necessary, only the distribution of the data is needed.

Training is performed by passing an input into untrained network. The output will almost certainly be random garbage because it is not yet trained. This garbage output is compared to the expected output, and an error is obtained. This error is propagated back through the network and the result is used to nudge its parameters in a direction that decreases this error. This is repeated many times until the error is reduced to a minimal amount.


## Example networks

Here are some example networks to give an idea of the kinds of problems neural networks can solve.

### [A Neural Algorithm of Artistic Style](https://arxiv.org/abs/1508.06576)

<figure style="position:relative;padding-top:56.25%;"><iframe src="https://player.vimeo.com/video/139123754" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><figcaption>An example of neural networks applying artistic style to other images.</figcaption></figure>

### [Progressive Growing of GANs for Improved Quality, Stability, and Variation](http://research.nvidia.com/publication/2017-10_Progressive-Growing-of)

<figure style="position:relative;padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/36lE9tV9vm0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><figcaption>This network has learned how human faces look, and the video is an interpolation of the network's representation.</figcaption></figure>

### [Unsupervised Image-to-Image Translation Networks](https://arxiv.org/abs/1703.00848)

<figure style="position:relative;padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/nlyXoX2aIek" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><figcaption>Images can be transformed into similar images using this network.</figcaption></figure>

### [Phase-Functioned Neural Networks for Character Control](http://theorangeduck.com/media/uploads/other_stuff/phasefunction.pdf)

<figure style="position:relative;padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/Ul0Gilv5wvY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><figcaption>This network is able to animate a player model based on the current movement and terrain.</figcaption></figure>

## Structure of a Neural Network

A neural network is built out of layers of interconnected neurons. The first layer is called the input layer and receives samples directly from dataset as input, the middle layers are called the hidden layers and take the previous layer's output as input. The last layer is called the output layer and outputs the final result of the network.

The fact that each layer passes its output to the next makes this a description of a [feedforward](https://en.wikipedia.org/wiki/Feed_forward_(control)#Feed-forward_systems_in_computing) neural network. Since each layer transforms data from the previous layer, the deeper the layer the more abstract the information at that layer becomes. This is powerful because it allows the network to learn high level features, such as if someone is smiling or frowning in a photograph.

Every network also needs a [loss function](#loss-function), which measures the difference between an output and the expected output, and an [optimizer](#optimizer) that uses the loss to determine how to shift the network's weights.

### Layer Connections

Layers in a neural network are typically fully connected; each neuron in a layer gets its inputs from every neuron in the previous layer. Sometimes these connections are altered such as in the case of [residual networks](https://arxiv.org/abs/1512.03385), where the inputs can be fed to multiple layers.

#### Dropout

[Dropout](https://en.wikipedia.org/wiki/Dropout_(neural_networks)) is another method of connecting layers. Dropout will randomly disconnect a given percentage of connections between two layers during training. This may sound like it would break the network, but it actually makes it more robust. The network learns how to arrive at the correct answer even with missing data. Once the network is fully trained and is being applied, dropout is no longer enabled and all the connections are active. The connections are scaled to account for the extra active connections.

Dropout reduces the problem of [overfitting](https://en.wikipedia.org/wiki/Overfitting), which is when the network is plagiarizing the training data instead of generalizing it. This is like learning by memorization as opposed to learning by understanding.

### Loss Function

A [loss function](https://en.wikipedia.org/wiki/Loss_function) is a measure of how dissimilar two things are. A loss of zero should mean the two things being measured are identical. An example loss function would be the distance between two points in space: If the distance is 0 the points are identical, with increasing distances indicating that the points are less and less similar.

A common loss function is the [squared error](https://en.wikipedia.org/wiki/Mean_squared_error#Loss_function). You take the difference between two numbers and square it. This has the benefit of keeping the loss positive, and penalizing larger differences.

### Optimizer

An optimizer is a process that uses the loss function and dataset to determine how to change the parameters ([weights](#weights)) of the network.

[Stochastic gradient descent](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) (SGD) is the optimization process of running a sample input from the dataset through the network, then using the derivative of the loss with respect to the parameters of the network to nudge those parameters in a direction that lowers that loss. This derivative is called the [gradient](https://en.wikipedia.org/wiki/Gradient).

Mini-batch gradient descent is the same process except the gradients from a batch of random samples from the dataset are averaged. This helps ensure the gradient is pointing in a direction that optimizes in a general way for many sample inputs and not just individual inputs.

There are variants of gradient descent such as ones that involve momentum and adaptive learning rates which you can read more about [here](https://arxiv.org/abs/1609.04747).

## Anatomy of a Neuron

Artificial neurons act in a similar manner to biological neurons by propagating signals between each other. A typical artificial neuron consists of inputs, weights, a bias, and an activation function.

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

The input layer's inputs come from the dataset. Subsequent layers are fed the sum of weighted activations plus bias ($$\sum wa+b$$) from the previous layer.

### Weights

Each weight ($$w$$) scales the respective activation from the previous layer. They are parameters of the network that are learned.

### Bias

The bias ($$b$$) is a parameter simply added to the sum of weighted activations ($$\sum wa$$).

It turns out the bias is conceptually the same as a weight where the corresponding activation is always $$1$$. We can exploit this to prevent the model from becoming more complex than it needs to be. To simulate the bias, an extra input is fed into every neuron. This input is set to a constant value of $$1$$.

### Activation Function

The [activation function](https://en.wikipedia.org/wiki/Activation_function) is a function that defines the output of a neuron. Activation functions are typically chosen to bound the output between a range of values. Popular activation functions are the sigmoid, tanh, RELU, ELU, and softmax functions. The tanh function is nice as it balances the output between $$-1$$ and $$1$$.

{% include image.html url="/assets/images/nn_tanh.svg" desc="The hyperbolic tangent function." %}

This is like a continuous form of a binary choice: A large negative value becomes $$-1$$, and a large positive value becomes $$1$$, with smaller numbers somewhere in-between.

The non-linearity of this function is what makes the whole network non-[linear](https://en.wikipedia.org/wiki/Linear_function). This non-linearity is what allows neural networks to approximate any function.

#### Vanishing Gradient problem

The [vanishing gradient problem](https://en.wikipedia.org/wiki/Vanishing_gradient_problem) is an issue where a neural network's training slows down the farther back in the network the gradient is propagated. In the case of the tanh function, its derivative will always be between $$0$$ and $$1$$. This means that for every layer the gradient is propagated through, the gradient is multiplied by some value between $$0$$ and $$1$$. Do this enough times and the gradient becomes smaller and smaller until it "vanishes". The effect this has is that the farther from the end of the network a layer is, the less it will be updated by the gradient.

Attempts at a solution to the vanishing gradient problem include the [residual networks](https://en.wikipedia.org/wiki/Vanishing_gradient_problem#Residual_networks) mentioned previously, and recurrent [LSTM networks](https://en.wikipedia.org/wiki/Vanishing_gradient_problem#Long_short-term_memory).

## Training a Neural Network

### Backpropagation

Backpropagation is the meat of a neural network's training algorithm. It relies on using the gradient, the derivative of the loss with respect to the parameters of the network. With this gradient one can update the parameters of the network to reduce the loss, which will make the network perform better.

Before one can use backpropagation, the gradient must be found. An input from the dataset is fed into the network. Then the output of the network is compared to the corresponding expected output using a loss function like the squared error.

Once the loss is computed we can find the derivative of the loss with respect to the weights of the last layer of neurons. Using the notation from earlier, this is $$\frac{\partial C}{\partial w^{L}}$$ where $$C$$ is the loss of the function, and L is the total number of the layers in the network.

This is where backpropagation begins. Remember the [chain rule](https://en.wikipedia.org/wiki/Chain_rule) from calculus? A brief reminder: If you multiply two derivatives such that terms cancel out, you get another valid derivative. For example, $$\frac{\ \partial b}{\partial a} \cdot \frac{\partial c}{\partial b} = \frac{\partial c}{\partial a}$$. This can be applied to the neural network too. If you can find $$\frac{\partial w^{L}}{\partial w^{L-1}}$$, you can use the chain rule to easily also find $$\frac{\partial C}{\partial w^{L-1}} = \frac{\partial C}{\partial w^{L}} \cdot \frac{\partial w^{L}}{\partial w^{L-1}}$$.

You repeat this process for each layer until it has gone through the whole network. Then you have the gradient for the entire network, which describes how the loss changes for any particular weight. The weights can then be updated by subtracting a small multiple of the gradient from the weights. This small multiple is the gradient multiplied by the [learning rate](https://developers.google.com/machine-learning/crash-course/reducing-loss/learning-rate), which is often set to decrease over training time to allow the network to settle into a [local optimum](https://en.wikipedia.org/wiki/Local_optimum).

## Conclusion

This covers the basics of what one should know about neural networks. There is much more to learn than this but I hope this explanation has given you an idea of how they work. Let me know in the comments if there is anything in this introduction that could be improved upon.
