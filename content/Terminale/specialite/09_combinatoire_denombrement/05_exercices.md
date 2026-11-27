---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Un mot de passe est formé de 6 caractères choisis parmi les 26 lettres minuscules et les 10 chiffres.
1. Combien de mots de passe différents existe-t-il ?
2. Combien ont leurs 6 caractères deux à deux distincts ?

{{% details title="Solution" closed="true" %}}
1. On dispose de 36 caractères ; un mot de passe est un 6-uplet : \({36^6 = 2\,176\,782\,336}\).
2. C’est un arrangement de 6 caractères parmi 36 : \(36 \times 35 \times 34 \times 33 \times 32 \times 31 = 1\,402\,410\,240\).
{{% /details %}}

### Exercice 2

Combien d’anagrammes (avec ou sans sens) le mot NOMBRE possède-t-il ?

{{% details title="Solution" closed="true" %}}
Les 6 lettres de NOMBRE sont distinctes : une anagramme est une permutation de ces lettres, d’où \({6! = 720}\) anagrammes.
{{% /details %}}

### Exercice 3

Dans un tournoi, 8 équipes se rencontrent chacune une fois. Combien de matchs sont joués ?

{{% details title="Solution" closed="true" %}}
Un match correspond à une paire d’équipes (l’ordre ne compte pas) : \({\dbinom{8}{2} = \dfrac{8 \times 7}{2} = 28}\) matchs.
{{% /details %}}

### Exercice 4

Une urne contient 10 boules : 4 rouges et 6 noires. On tire simultanément 3 boules.
1. Combien de tirages différents sont possibles ?
2. Combien contiennent exactement 2 boules rouges ?
3. Combien contiennent au moins une boule rouge ?

{{% details title="Solution" closed="true" %}}
1. \({\dbinom{10}{3} = 120}\).
2. 2 rouges parmi 4 et 1 noire parmi 6 : \({\dbinom{4}{2} \times \dbinom{6}{1} = 6 \times 6 = 36}\).
3. On passe par le contraire : les tirages sans boule rouge sont \({\dbinom{6}{3} = 20}\). Donc \({120 - 20 = 100}\) tirages contiennent au moins une boule rouge.
{{% /details %}}

### Exercice 5

1. Montrer que, pour tout entier \({n \geq 2}\), \({\dbinom{n}{2} = \dfrac{n(n - 1)}{2}}\).
2. Déterminer l’entier \(n\) tel que \({\dbinom{n}{2} = 45}\).

{{% details title="Solution" closed="true" %}}
1. \(\dbinom{n}{2} = \dfrac{n!}{2!\,(n - 2)!} = \dfrac{n(n - 1) \times (n - 2)!}{2 \times (n - 2)!} = \dfrac{n(n - 1)}{2}\).
2. \({\dfrac{n(n - 1)}{2} = 45 \iff n^2 - n - 90 = 0}\). Le discriminant vaut \({1 + 360 = 361 = 19^2}\), d’où \({n = \dfrac{1 + 19}{2} = 10}\) (l’autre racine, \({-9}\), ne convient pas). Donc \({n = 10}\).
{{% /details %}}

### Exercice 6

Sur un quadrillage, on va du point \((0\,;\,0)\) au point \((4\,;\,3)\) en se déplaçant uniquement d’une unité vers la droite (D) ou vers le haut (H). Combien de chemins différents existe-t-il ?

{{% details title="Solution" closed="true" %}}
Un chemin comporte 7 déplacements : 4 D et 3 H. Il est entièrement déterminé par les positions des 3 H parmi les 7 déplacements : \({\dbinom{7}{3} = 35}\) chemins.
{{% /details %}}
