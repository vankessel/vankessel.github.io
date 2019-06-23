---
title: How to Disprove Quantum Immortality (Without Risking Your Life)
author: Kevin Van Kessel
tags: quantum physics philosophy experiment interactive
reddit:

a1: The many-worlds interpretation is true.
a2: Consciousness experiences the reality in which it lives the longest.
a3: The experiment will only be run once.
a4: There exists a message in the encoding that can extend one's life.
a5: One will act on the message.
a6: A message is more effective than random symbols.
a7: The API provides true quantum random numbers.
---

# {{ page.title }}


## What is Quantum Suicide and Quantum Immortality?

[Quantum suicide](https://en.wikipedia.org/wiki/Quantum_suicide_and_immortality) is a famous thought experiment. It is similar to the [Schrödinger's cat](https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat) thought experiment, but from the perspective of the cat. The purpose of it is to speculate on what would happen to the (un)lucky subject under different interpretations of quantum mechanics.

A gun is pointed at your head. The gun is rigged to fire depending on the result of a quantum event. The quantum event has a equal chance of two outcomes just like a coin flip. If the [many-worlds interpretation](https://en.wikipedia.org/wiki/Many-worlds_interpretation) is true, then there must exist a version of you that survived the event. Since you can't possibly experience the timeline in which you are dead, you must experience the one where you survive. Only you would experience this effect. This consequence is also known as quantum immortality. Outside observers will still see you live or die at the expected probability of the quantum event. This is the basic argument for quantum suicide.

## The Nature of This Proof

Normally a proof should inform the reader enough such that they can come to the same conclusion. In this case only the subject of the thought experiment can only be sure of the results. Outside observers would almost certainly observer my failure regardless of if the thought experiment is correct or not. Since this proof is personal to the one conducting it, I will provide an experiment on this page. Anyone can run it and confirm the result for themselves.

## Transforming the Thought Experiment

To disprove quantum suicide, we will transform the thought experiment into an equivalent form and disprove that instead.

We will make a list of assumptions, one of which is the thought experiment being true. The experiment on this page will prove that all the assumptions can not be simultaneously true. Then we will eliminate the very likely assumptions and discuss what remains. Since the thought experiment relies on the many-worlds interpretation being true, that will be our first assumption.

<ol start="1">
  <li><span>{{ page.a1 }}</span></li>
</ol>

We need to consider that death isn't instant. It takes time for the bullet to exit the chamber and do its work. This means the outcome of the quantum event is independent of the moment it occurs; the event you experience is the one that doesn't lead to a future death. If we apply this to every quantum event of every moment, that means that every quantum event experienced will be the ones that funnel you down the branch of reality in which you live the longest. This is quantum immortality.

<ol start="2">
  <li><span>{{ page.a2 }}</span></li>
</ol>

Under this assumption we can change the circumstances from a punishment to a reward. Instead imagine a doctor has information about your health. If he tells you about it and you act on the information, you will certainly live a longer life. The doctor will only tell you about the information based the result of the quantum event. If the current assumptions are true, then you should always experience the reality in which the doctor tells you about your unknown ailment.

There is a chance that the experiment will fail now because it will be run again in a tomorrow and succeed. Even though you have one less day to use the information, waiting that one day may have caused a [butterfly effect](https://en.wikipedia.org/wiki/Butterfly_effect) where you use that information more effectively. To counteract this, you could repeat the experiment occasionally over a large enough period of time such that a lack of information would certainly affect your lifespan. This is rather inconvenient and uncertain. A slightly better way to ensure you get this information the first time is to only give yourself one chance. You can do this by vowing to only run the experiment once.

<ol start="3">
  <li><span>{{ page.a3 }}</span></li>
</ol>

Obviously it would be highly unethical to perform such an experiment as it would involve asking a doctor to allow someone to come to harm through inaction. Not to mention you would need the information of multiple different ailments to repeat the experiment and confirm the low chance of consecutive successes.

Instead of this hypothetical doctor, we will conduct a series of quantum events and interpret the results as bytes. These random bytes will be then interpreted as a series of the 95 printable ASCII characters. This brings us to our next assumptions:

<ol start="4">
  <li><span>{{ page.a4 }}</span></li>
  <li><span>{{ page.a5 }}</span></li>
</ol>

If you were to receive a message, it would not be some sort of mystical message from the universe. The message simply appeared because it is the combination of bits that can be interpreted by the reader in a way that extends their life. Because of this, we need to consider the limits of interpretation. How powerful is the butterfly effect? Is it possible that you could be shown a seemingly random sequence of glyphs that takes you down the stream of reality where you live the longest?

<ol start="6">
  <li><span>{{ page.a6 }}</span></li>
</ol>

## Proving to Oneself

So, how do you generate quantum random bytes? Luckily for us the folks down under at the [ANU](http://qrng.anu.edu.au/index.php) provide an API for generating these numbers. Since I can't confirm that these numbers are truly quantum random numbers, it must go on the list of assumptions.

<ol start="7">
  <li><span>{{ page.a7 }}</span></li>
</ol>

Now we have our complete list of assumptions:

<ol>
  <li><span>{{ page.a1 }}</span></li>
  <li><span>{{ page.a2 }}</span></li>
  <li><span>{{ page.a3 }}</span></li>
  <li><span>{{ page.a4 }}</span></li>
  <li><span>{{ page.a5 }}</span></li>
  <li><span>{{ page.a6 }}</span></li>
  <li><span>{{ page.a7 }}</span></li>
</ol>

## Experiment

Click below to generate a tweet from the void.

<div style="display: flex; flex-direction: column; align-items: center; text-align: center">
  <span style="margin-bottom: 1em">
    <input id="vow" name="vow" type="checkbox">
    <label for="vow">I vow to only run this experiment once.</label>
  </span>
  <span style="margin-bottom: 1em">
    <button id="generate-numbers" type="button">Generate Message</button>
    <input id="number-amount" type="hidden" min="1" max="140" value="140">
  </span>
  <textarea readonly id="message-display" style="box-sizing: border-box; width: 90%;" rows="4"></textarea>
</div>

<script>
  $(document).ready(function() {
    let button = $("#generate-numbers");
    let vow = $("#vow");

    if(localStorage.getItem('q_generated_at') !== null) {
      vow.prop('checked', true);
    }

    vow.change(function() {
      vow.prop('checked', true);
    });

    button.click(function() {
      if(localStorage.getItem('q_message_2') !== null) {
        alert("Persistent. Sorry but I've made my decision to not help you and I do not change my mind as easily as you do.");
        return;
      }
      else if(localStorage.getItem('q_message_1') !== null) {
        alert("I'm afraid this is quite permanent. You shouldn't have clicked on the checkbox if you weren't sure about generating only one message.");
        localStorage.setItem('q_message_2', true);
        return;
      }
      else if(localStorage.getItem('q_generated_at') !== null) {
        let generated_at = parseInt(localStorage.getItem('q_generated_at'));
        let seconds = Math.floor((Date.now() - generated_at) / 1000);
        alert("Congrats, it took you only " + seconds + " seconds to try to break your vow!");
        localStorage.setItem('q_message_1', true);
        return;
      }

      let amount = $("#number-amount").val();
      let apiUrl = "https://qrng.anu.edu.au/API/jsonI.php?type=uint8&length=" + amount;

      button.prop('disabled', true);

      $.ajax(apiUrl, {
        dataType: "json",
        success: function(data) {
          let codes = data.data.map(function(code) {
            return Math.floor(32 + 95 * (code / 255));
          });
          let message = String.fromCharCode.apply(this, codes);
          $("#message-display").text(message);
          if(vow.prop('checked') && localStorage.getItem('q_generated_at') === null) {
            localStorage.setItem('q_generated_at', Date.now());
          }
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

I didn't receive a message and I presume you didn't either. If you did, there is still a small chance that message occurred coincidentally. This is why you can't actually prove quantum immortality as a proof implies certainty. This disproof is not disproving it directly either, but rather disproving the simultaneity of our assumptions which is about as close as we can get. (Also if you did receive a message, please don't tell me. I don't want to know that somebody else is likely the protagonist of the reality I live in.)

This result means one or more of our assumptions are false. Let's go backwards through them and discuss the likelihood of each.

<ol start="7">
  <li><span>{{ page.a7 }}</span></li>
</ol>

I'm sure that API is doing what it claims. While it would be good to verify this I'm not going to audit the ANU for a blog post.

<ol start="6">
  <li><span>{{ page.a6 }}</span></li>
</ol>

This assumption worries me the most. The butterfly effect is powerful, and compounds with time. I think it is not absurd to believe that random symbols could have an unexpectedly strong effect. At the same time, the directness of a message seems like it should have a stronger effect than something intelligible.

<ol start="5">
  <li><span>{{ page.a5 }}</span></li>
</ol>

It would be in anyone's own interest to extend their lifespan. I don't see anyone realistically disregarding such a message. But people don't always act realistically. Even in the case where someone ignores the message, it would act like the [Oracle](https://en.wikipedia.org/wiki/The_Oracle_(The_Matrix)) from The Matrix. What you read is not necessarily the truth, it is simply exactly what you need to read at that moment to extend your lifespan. The moment you read it, it has already shuffled you down the branch of reality where you live longer.

<ol start="4">
  <li><span>{{ page.a4 }}</span></li>
</ol>

I would take this as a certainty. There are so many possible things you could read and each would take you down a different path. The real question is if it is possible in the 140 characters I have allotted on this page. This should be fine, one of the possibilities is that it could even send a message asking to run the experiment again with more characters.

<ol start="3">
  <li><span>{{ page.a3 }}</span></li>
</ol>

This comes down to willpower of the experimenter. Even if the experimenter runs the experiment more than once, what matters most is that there is a _final_ time it is run. Choosing to end on the first message just makes the experiment take a shorter length of time to confirm. Even if we can't be sure this is the last time the experiment will be run, we can alternatively run the experiment again in 5 or 10 years. A message received years ago surely would have a stronger effect on lifespan than one far in the future. If you are going to receive a message, it will be in some finite time span.

<ol start="1">
  <li><span>{{ page.a1 }}</span></li>
  <li><span>{{ page.a2 }}</span></li>
</ol>

If all the previous assumptions are true, then at least one of these two must be false.

If the many-worlds interpretation is false, then quantum immortality must be false too as it is contingent on many-worlds being true. Consciousness could still experience the longest reality due to some other unknown mechanism, but it would not be quantum immortality as we have defined it.

If the many-worlds interpretation is true, then the second assumption must be false.

Under every possibility, quantum immortality is eliminated.

## A Final Thought

Quantum immortality relies on the idea that you can't possibly experience the timeline in which you are dead.

So, is it possible to stop experiencing?

If you take an inactive brain and apply a random electric charge to it, does it experience something? Seems like it should. If it does, does the same apply when the atoms of a cremated brain exchange electrons?

When you die the matter that made up your brain doesn't disappear. Neither does the energy that fired your synapses. The only thing that changes is the structure. Perhaps death is actually an extremely primitive [form](https://en.wikipedia.org/wiki/Hard_problem_of_consciousness) [of](https://en.wikipedia.org/wiki/Panpsychism) [experience](https://en.wikipedia.org/wiki/Integrated_information_theory).

Paradoxically this would mean quantum immortality would rely on us being mortal.

I personally hope it is possible to stop experiencing. Immortality sounds exhausting.
