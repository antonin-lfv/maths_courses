---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

Les nombres \(307\) et \(323\) sont-ils premiers ?

{{% details title="Solution" closed="true" %}}
- \({\sqrt{307} \approx 17{,}5}\). On teste 2, 3, 5, 7, 11, 13, 17 : 307 est impair, \({3 + 0 + 7 = 10}\) n’est pas multiple de 3, il ne se termine pas par 0 ou 5, et \(307 = 7 \times 43 + 6 = 11 \times 27 + 10 = 13 \times 23 + 8 = 17 \times 18 + 1\). **307 est premier.**
- \({\sqrt{323} \approx 17{,}97}\). Après 2, 3, 5, 7, 11, 13 sans succès, on trouve \({323 = 17 \times 19}\). **323 n’est pas premier.**
{{% /details %}}

### Exercice 2

1. Décomposer \(1\,260\) et \(1\,764\) en produit de facteurs premiers.
2. Combien \(1\,260\) a-t-il de diviseurs positifs ?
3. En déduire \(\mathrm{PGCD}(1\,260\,;\,1\,764)\).
4. Déterminer le plus petit entier naturel non nul \(n\) tel que \(1\,260\,n\) soit le carré d’un entier.

{{% details title="Solution" closed="true" %}}
1. \({1\,260 = 2^2 \times 3^2 \times 5 \times 7}\) et \({1\,764 = 2^2 \times 3^2 \times 7^2}\) (\({1\,764 = 42^2}\)).
2. \({(2 + 1)(2 + 1)(1 + 1)(1 + 1) = 36}\) diviseurs positifs.
3. On garde les facteurs communs avec le plus petit exposant : \({\mathrm{PGCD} = 2^2 \times 3^2 \times 7 = 252}\). (Vérification : \({1\,260 = 252 \times 5}\) et \({1\,764 = 252 \times 7}\).)
4. Un entier est un carré si et seulement si tous les exposants de sa décomposition sont pairs. Dans \(1\,260\), les exposants de 5 et de 7 sont impairs : il faut multiplier au moins par \({5 \times 7 = 35}\). Avec \({n = 35}\) : \({1\,260 \times 35 = 2^2 \times 3^2 \times 5^2 \times 7^2 = 210^2}\).
{{% /details %}}

### Exercice 3

Déterminer le reste de la division euclidienne de \(5^{100}\) par 7.

{{% details title="Solution" closed="true" %}}
7 est premier et ne divise pas 5 : d’après le petit théorème de Fermat, \({5^6 \equiv 1 \ [7]}\). Or \({100 = 6 \times 16 + 4}\), donc \({5^{100} \equiv 5^4 = 625 \ [7]}\). Comme \({625 = 7 \times 89 + 2}\), le reste est 2.
{{% /details %}}

### Exercice 4

Montrer que, pour tout entier naturel \(n\), \({n^7 - n}\) est divisible par 42.

{{% details title="Solution" closed="true" %}}
\({42 = 2 \times 3 \times 7}\). On montre que 2, 3 et 7 divisent \({n^7 - n}\).
- **Par 7.** 7 est premier : \({n^7 \equiv n \ [7]}\) (conséquence du petit théorème de Fermat).
- **Par 3.** 3 est premier : \({n^3 \equiv n \ [3]}\), donc \({n^7 = (n^3)^2 \times n \equiv n^2 \times n = n^3 \equiv n \ [3]}\).
- **Par 2.** \(n^7\) et \(n\) ont la même parité.

2 et 3 sont premiers entre eux, donc \({6 \mid n^7 - n}\) ; puis 6 et 7 sont premiers entre eux, donc \({42 \mid n^7 - n}\) (corollaire du théorème de Gauss).
{{% /details %}}

### Exercice 5

Soit \({p \geq 5}\) un nombre premier. Montrer que \({p^2 - 1}\) est divisible par 24.

{{% details title="Solution" closed="true" %}}
\({p^2 - 1 = (p - 1)(p + 1)}\).
- **Par 8.** \(p\) est impair (premier différent de 2), donc \({p - 1}\) et \({p + 1}\) sont deux entiers pairs consécutifs : l’un d’eux est multiple de 4, l’autre de 2. Leur produit est divisible par 8.
- **Par 3.** \(p\) est premier différent de 3, donc \({p \not\equiv 0 \ [3]}\) : \({p \equiv 1}\) ou \({p \equiv 2 \ [3]}\), et dans les deux cas \({p^2 \equiv 1 \ [3]}\). Donc 3 divise \({p^2 - 1}\).

8 et 3 sont premiers entre eux, donc \({24 \mid p^2 - 1}\). Exemples : \({5^2 - 1 = 24}\), \({7^2 - 1 = 48}\), \({11^2 - 1 = 120}\).
{{% /details %}}

### Exercice 6

Soit \({n \geq 2}\) un entier. Montrer que si \({2^n - 1}\) est premier, alors \(n\) est premier. (On pourra raisonner par contraposée et utiliser la factorisation de \({x^q - 1}\) par \({x - 1}\).) La réciproque est-elle vraie ?

{{% details title="Solution" closed="true" %}}
**Contraposée.** Supposons \(n\) non premier : \({n = ab}\) avec \({2 \leq a < n}\) et \({2 \leq b < n}\). Avec \({x = 2^a}\) :
\[
2^n - 1 = (2^a)^b - 1 = (2^a - 1)\left((2^a)^{b-1} + (2^a)^{b-2} + \dots + 1\right).
\]
Or \({2^a - 1 \geq 3}\) et \({2^a - 1 < 2^n - 1}\) : \({2^n - 1}\) a un diviseur strictement compris entre 1 et lui-même, il n’est pas premier. Par contraposée, si \({2^n - 1}\) est premier, alors \(n\) est premier.

**Réciproque fausse.** 11 est premier, mais \({2^{11} - 1 = 2\,047 = 23 \times 89}\) n’est pas premier.
{{% /details %}}
