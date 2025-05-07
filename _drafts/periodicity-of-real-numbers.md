... + r^-2 + r^-1 + 1 + r + r^2 + ... = 0 made me wonder if real numbers are periodic like imaginary numbers. Except instead of adding differences you gotta multiply ratios to deal with infinity. ( lim (n+c)/n = 1 but lim (n*r)/n = r )

-x is more like "x steps before uncountable infinity" rather than thought of as left to 0. Or equivalently, 0 and uncountable inf are dual in a sense. The same thing from different perspectives.

Summing all integer powers of the same ratio gets you exactly uncountable infinity/zero. Nonconstant ratio between terms like 1+2+3...=-1/12 can fall short. My guess: These sums are naturally negative, because you can only ever fall short of uncountable infinity. (If you could go past, we'd just have regular angles again basically) All the positive fractions are generated from these sort of sequences with whole numbers added. (1+1+2+3+4+...=11/12)

Seems having an uncountably infinite modulus makes it agnostic to what ratio you're dealing with the exception of primes working nicer. This lines up with p-adic numbers.

https://en.wikipedia.org/wiki/Ramanujan_summation#Ramanujan_summation_of_divergent_series
Also, the limit case is interesting https://en.wikipedia.org/wiki/1_%2B_1_%2B_1_%2B_1_%2B_⋯
Can also be derived by geometric series formula
... + r^-2 + r^-1 + 1 + r + r^2 + ...
= (... + r^-2 + r^-1 + 1) - 1 + (1 + r + r^2 + ...)
= (1/(1-r^-1)) - 1 + (1/(1-r))
= (r/(r-1)) - 1 + (1/(1-r))
= (-r/(1-r)) - 1 + (1/(1-r))
= ((1-r)/(1-r)) - 1)
= 0
If you accept it for values outside [0, 1)

But it seems to make sense. Geometric series of ratio p is like the digits of this p-adic number:
...111111
Which is
 -1 in 2-adics
-1/2 in 3-adics
Which matches geometric series formula 1/(1-p)