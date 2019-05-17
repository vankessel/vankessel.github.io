---
title: How to Disprove Quantum Suicide (Without Risking Your Life)
author: Kevin Van Kessel
tags: quantum physics philosophy experiment interactive
reddit:

a1: Consciousness experiences the reality in which it lives the longest.
a2: The sooner you receive information that would extend your lifespan, the more effective it will be.
a3: There exists a message in the encoding, that if one acted on it, would extend one's life.
a4: One will act on the received message.
a5: The API provides true quantum random numbers.
---

# {{ page.title }}


## What is Quantum Suicide?

[Quantum suicide](https://en.wikipedia.org/wiki/Quantum_suicide_and_immortality) is the famous thought experiment, similar to the [Schrödinger's cat](https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat) thought experiment, but from the perspective of the cat. The purpose of it is to speculate on what would happen to the (un)lucky subject under different interpretations of quantum mechanics.

Imagine you have a gun pointed at your head. The gun is rigged to fire depending on the result of a quantum event. If the [many-worlds interpretation](https://en.wikipedia.org/wiki/Many-worlds_interpretation) is true, then there must exist a version of you that survived the event. Since you can't possibly experience the timeline in which you are dead, you must experience the one where you survive. We also need to consider that death isn't instant. It takes time for the bullet to exit the chamber and do its work. So the result of the quantum event mustn't be constricted by time. Every quantum event will be chosen as such to funnel you down the branch of reality in which you live the longest. This will be our first assumption.

<ol start="1">
  <li><span>{{ page.a1 }}</span></li>
</ol>

Otherwise put, quantum suicide is true if and only if this assumption is correct.

## The Nature of This Proof

Normally, a proof should inform the reader enough such that they can come to the same conclusion. In this case only the subject of the experiment, myself, can only be sure of the results. Outside observers, such as anyone reading this, would almost certainly observer my failure regardless of if the thought experiment is correct or not. Since this proof is personal to the one conducting it, I will provide a test on this page. Anyone can run it and confirm the argument for themselves.

To disprove quantum suicide (or at least one of the assumptions), I will transform the thought experiment into an equivalent form. Then demonstrate with an interactive experiment embedded into the page that one or more of the assumptions must be false.

## Transforming the Thought Experiment

Under our first assumption we can change the circumstances from a punishment to a reward, as long as one of the timelines leads to a drastically different length of longevity. Instead of a gun that kills you, instead imagine a doctor has information about your health. If he tells you about it and you act on the information, you will certainly live a longer life. The doctor is instructed to only tell you about the information based the result of a 50/50 quantum event. If quantum suicide and the current assumptions are true, then you should always experience the reality in which the doctor tells you about your unknown ailment. Now there is the chance that the experiment will fail today because it will succeed tomorrow and be similarly effective. We need another assumption to be sure that our experiment isn't failing just because it may succeed in the future.

<ol start="2">
  <li><span>{{ page.a2 }}</span></li>
</ol>

Unfortunately it would be highly unethical to perform such an experiment as it would involve asking a doctor to allow someone to come to harm through inaction. Not to mention you would need the information of multiple ailments to repeat the test and confirm the low chance of consecutive successes.

But there is still a way to perform the experiment with a little alteration. Instead of this hypothetical doctor, we will conduct a series of 50/50 quantum events, with the outcomes of 0 and 1. These random bits will be then interpreted as a series of ASCII characters (or alternatively any other encoding). This brings us to our next assumptions:

<ol start="3">
  <li><span>{{ page.a3 }}</span></li>
  <li><span>{{ page.a4 }}</span></li>
</ol>

It is important to note here, that if one were to receive a message, it would not be a message from the universe of some sort. The message would have appeared simply because it has a meaning to the reader that upon interpretation would extend the reader's life.

## Proving to Oneself

So, how does one generate quantum random bits? Luckily for us the folks down under at the [ANU](http://qrng.anu.edu.au/index.php) provide an API for generating these numbers. But since I can't confirm for myself that these numbers are truly quantum random numbers, it must go on the list of assumptions.

<ol start="5">
  <li><span>{{ page.a5 }}</span></li>
</ol>

Click below to generate a tweet from the void.

<div style="display: flex; flex-direction: column; align-items: center; text-align: center">
  <span>
    <button id="generate-numbers" type="button">Generate Message</button>
    <input id="number-amount" type="number" min="1" max="280" value="140">
  </span>
  <textarea readonly id="message-display" style="box-sizing: border-box; width: 90%;" rows="4"></textarea>
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
          let message = String.fromCharCode.apply(this, data.data);
          $("#message-display").text(message);
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

## Results & Discussion

I didn't receive a message and I presume you won't either. (If you do, please don't tell me. I don't want to know that somebody else is the protagonist of the reality I live in.)

This must mean one or more of the following assumptions are false:

<ol>
  <li><span>{{ page.a1 }}</span></li>
  <li><span>{{ page.a2 }}</span></li>
  <li><span>{{ page.a3 }}</span></li>
  <li><span>{{ page.a4 }}</span></li>
  <li><span>{{ page.a5 }}</span></li>
</ol>

Let's discuss the likelihood of each assumption.

The first assumption is equivalent to what we are trying to prove, so we can't say anything about this.

The second assumption is weak. Learning about information that will extend your life a second later than planned does not necessarily mean you will live a shorter life than you would have otherwise. Perhaps that additional second will cause a [butterfly effect](https://en.wikipedia.org/wiki/Butterfly_effect) in which you utilize the information more effectively. Otherwise, this assumption can be strengthened by performing the experiment a second time after a large time period. Certainly a ten year interval should be long enough such that any possible second message would be less effective.

The third assumption seems safe. Certainly out of all the possible sentences you could read, there must be one that can extend your lifespan. In fact, there is likely a string of characters that could increase the lifespan of any human in general.

The fourth assumption is also rather safe. It is in anyone's best interest to follow advice that will extend their lifespan. Regardless, this assumption could be taken care of by a similar mechanism to the last. There most probably exists a sentence that both extends your life and that you will act upon.

The fifth assumption is here for comprehensiveness. I am sure the API is doing what it claims to be doing.
