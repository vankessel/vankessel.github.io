---
title: How to Disprove Quantum Suicide (Without Risking Your Life)
author: Kevin Van Kessel
tags: quantum physics philosophy experiment interactive
reddit:
---

# {{ page.title }}


## What is quantum suicide?

[Quantum suicide](https://en.wikipedia.org/wiki/Quantum_suicide_and_immortality) is the famous thought experiment, similar to the [Schrödinger's cat](https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat) thought experiment, but from the perspective of the cat. The purpose of it is to speculate on what would happen to the (un)lucky observer under different interpretations of quantum mechanics.

The general idea is that there a subject with a gun pointed to their head. The gun is rigged to fire depending on the result of a quantum event. If the [many-worlds interpretation](https://en.wikipedia.org/wiki/Many-worlds_interpretation) is true, then there must exist a version of the observer that survived the event. Ergo, the observer should always experience the branch of reality in which they survive as that is the only reality that they can experience. Now we run into the first and largest assumption that everything hinges on:

1. Consciousness experiences the reality in which it lives the longest.

Otherwise put that it is not true that there are multiple similar copies of your consciousness experiencing the different realities and that you can end up in a branch that terminates earlier than the others.

## The nature of this proof

Normally, a proof should inform the reader enough such that they can come to the same conclusion. In this case only the subject of the experiment, myself, can only be sure of the results. Outside observers, such as anyone reading this, would almost certainly observer my failure regardless of if the thought experiment is correct or not. Since this proof is personal to the one conducting it, I will provide a test on this page. Anyone can run it and confirm the argument for themselves.

To disprove quantum suicide (or at least one of the assumptions), I will transform the thought experiment into an equivalent form. Then demonstrate with an interactive experiment embedded into the page that one or more of the assumptions must be false.

## Transforming the thought experiment

Under our first assumption we can change the circumstances from a punishment to a reward, as long as one of the timelines leads to a drastically different length of longevity. Instead of a gun that kills you, instead imagine a doctor has information about your health. If he tells you about it and you act on the information, you will certainly live a longer life. The doctor is instructed to only tell you about the information based the result of a 50/50 quantum event. If quantum suicide and the current assumptions are true, then you should always experience the reality in which the doctor tells you about your unknown ailment. Perhaps you may figure out your ailment on your own later without this doctor, but another assumption is that:

2. The sooner you receive information that would extend your lifespan, the more effective it will be.

Unfortunately it would be highly unethical to perform such an experiment as it would involve asking a doctor to allow someone to come to harm through inaction. Not to mention you would need the information of multiple ailments to repeat the test and confirm the low chance of consecutive successes.

But there is still a way to perform the experiment with a little alteration. Instead of this hypothetical doctor, we will conduct a series of 50/50 quantum events, with the outcomes of 0 and 1. These random bits will be then interpreted as a series of ASCII characters (or alternatively any other encoding). This brings us to our next assumptions:

3. There exists a possible message under the encoding, that if one acted on it, would extend one's life.
4. One will act on it.

It is important to note here, that if one were to receive a message, it would not be a message from the universe of some sort. The message would have appeared simply because it has a meaning to the reader that upon interpretation would extend the reader's life.

## Testing for oneself

So, how does one generate quantum random bits? Luckily for us the folks down under at the [ANU](http://qrng.anu.edu.au/index.php) provide an API for generating these numbers. But since I can't confirm for myself that these numbers are truly quantum random numbers, it must go on the list of assumptions.

5. The API provides true quantum random numbers.

To not hit the API too hard I've set the default parameters to generate 140 characters. Click below to generate a tweet from the void.

<div>
  <input id="number-amount" type="number" min="1" value="140"><button id="generate-numbers" type="button">Generate Quantum Random Numbers</button>
</div>
<div>
  <textarea readonly id="number-display" style="box-sizing: border-box; width: 100%;" rows="8"></textarea>
</div>

<script>
  $(document).ready(function() {
    let button = $("#generate-numbers");

    button.click(function() {
      let amount = $("#number-amount").val();
      let apiUrl = "https://qrng.anu.edu.au/API/jsonI.php?type=uint8&length=" + amount;

      button.prop('disabled', true);

      $.ajax(apiUrl, {
        dataType: "json",
        success: function(data) {
          console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("API call failed. Check console for details.");
          console.log(jqXHR);
          console.log("Text Status: " + textStatus);
          console.log("Error Thrown: " + errorThrown);
        },
        complete: function() {
          button.prop('disabled', false);
        }
      });
    });
  });
</script>

<!--
Overview of argument
-->

<!--
Transforming the thought experiment
Testing the new experiment
Proving to oneself

One or more of these assumptions must be false:
Quantum suicide is true.
The transformation is logically equivalent.
Time is not relevant, every quantum chance that ever has or will be decide has done so
in a way to funnel us down the reality in which we live the longest. Rather than a different version of ourselves surviving the event.
There exists a message, that if we read it will extend our lifetime.
Such a message will invoke some understanding in our mind, likely in a language we know. (Not random chars)
We have the willpower to follow the directions of the message.

Discussion: Messages from the void? (Open with quote)
 -->
