---
title: 'Exercices'
weight: 3
cascade:
  type: docs
---

### Exercice 1

On lance \(1\,000\) fois un dé et on obtient \(180\) fois le \(6\). Ce résultat est-il compatible avec l’hypothèse d’un dé équilibré ?

{{% details title="Solution" closed="true" %}}
Si le dé est équilibré, \(p = \frac{1}{6} \approx 0{,}166\,7\) et \(\frac{1}{\sqrt{1\,000}} \approx 0{,}031\,6\). L’intervalle \([p - 0{,}031\,6\,;\,p + 0{,}031\,6] \approx [0{,}135\,;\,0{,}198]\) contient la fréquence d’au moins \(95\,\%\) des échantillons. Ici \(f = 0{,}18\) appartient à cet intervalle : le résultat est compatible avec un dé équilibré.
{{% /details %}}

### Exercice 2

Une entreprise affirme que \(90\,\%\) de ses clients sont satisfaits. Une association interroge \(225\) clients choisis au hasard : \(189\) se disent satisfaits. L’affirmation de l’entreprise est-elle remise en cause ?

{{% details title="Solution" closed="true" %}}
\(p = 0{,}9\), \(n = 225\), \(\frac{1}{\sqrt{225}} = \frac{1}{15} \approx 0{,}067\). L’intervalle est environ \([0{,}833\,;\,0{,}967]\). La fréquence observée est \(f = \frac{189}{225} = 0{,}84\), qui appartient (de peu) à l’intervalle : l’échantillon ne permet pas de remettre en cause l’affirmation.
{{% /details %}}

### Exercice 3

Lors d’un sondage auprès de \(900\) personnes choisies au hasard, \(54\,\%\) déclarent pratiquer une activité sportive chaque semaine. Donner un intervalle d’estimation de la proportion correspondante dans la population.

{{% details title="Solution" closed="true" %}}
\(\frac{1}{\sqrt{900}} = \frac{1}{30} \approx 0{,}033\). L’intervalle d’estimation est environ \([0{,}54 - 0{,}033\,;\,0{,}54 + 0{,}033] = [0{,}507\,;\,0{,}573]\) : entre \(50{,}7\,\%\) et \(57{,}3\,\%\) environ, avec un risque d’erreur d’environ \(5\,\%\).
{{% /details %}}

### Exercice 4

Un institut veut estimer une proportion à \(\pm 0{,}02\) près, c’est-à-dire avec un intervalle d’estimation de la forme \([f - 0{,}02\,;\,f + 0{,}02]\). Quelle taille d’échantillon doit-il choisir au minimum ?

{{% details title="Solution" closed="true" %}}
Il faut \(\frac{1}{\sqrt{n}} \leq 0{,}02 \iff \sqrt{n} \geq 50 \iff n \geq 2\,500\).
{{% /details %}}

### Exercice 5

On lance deux dés équilibrés et on s’intéresse à l’événement « la somme vaut \(7\) », de probabilité \(\frac{6}{36} = \frac{1}{6}\).
1. Écrire une fonction Python `freq7(n)` qui simule \(n\) lancers des deux dés et renvoie la fréquence de l’événement.
2. Pour \(n = 400\), dans quel intervalle la fréquence obtenue a-t-elle de fortes chances (au moins \(95\,\%\)) de se trouver ?

{{% details title="Solution" closed="true" %}}
1. 

```python
from random import randint

def freq7(n):
    c = 0
    for i in range(n):
        if randint(1, 6) + randint(1, 6) == 7:
            c = c + 1
    return c / n
```

2. \(\frac{1}{\sqrt{400}} = 0{,}05\) : la fréquence se trouve dans \(\left[\frac{1}{6} - 0{,}05\,;\,\frac{1}{6} + 0{,}05\right] \approx [0{,}117\,;\,0{,}217]\) pour au moins \(95\,\%\) des échantillons.
{{% /details %}}
