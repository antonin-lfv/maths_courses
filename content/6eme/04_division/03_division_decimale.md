---
title: 'Division décimale'
weight: 3
cascade:
  type: docs
---

## Quotient décimal

> [!TIP] **Définition**
>
> Effectuer la **division** d’un nombre décimal (le **dividende**) par un nombre entier non nul (le **diviseur**), c’est chercher le nombre, appelé **quotient**, tel que \({\text{dividende} = \text{diviseur} \times \text{quotient}}\). On écrit \({\text{dividende} \div \text{diviseur} = \text{quotient}}\).

> [!NOTE] **Méthode - Poser une division décimale**
>
> On divise comme pour une division euclidienne. Lorsqu’on « abaisse » le chiffre des dixièmes du dividende, on place la virgule au quotient. On peut ajouter des zéros à droite de la partie décimale du dividende pour continuer la division. Elle est terminée quand le reste est nul.

{{% details title="Exemple" closed="true" %}}
Calcul de \({9{,}45 \div 3}\) et de \({7 \div 4}\) :

```
  9 , 4 5 | 3           7 , 0 0 | 4
- 9       |------     - 4       |------
  ---     | 3 , 1 5     ---     | 1 , 7 5
  0 4                   3 0
  - 3                 - 2 8
  ---                   ---
    1 5                   2 0
  - 1 5                 - 2 0
  -----                 -----
      0                     0
```

\({9{,}45 \div 3 = 3{,}15}\) et \({7 \div 4 = 1{,}75}\). Vérification : \({3 \times 3{,}15 = 9{,}45}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Certaines divisions ne se terminent jamais. Dans ce cas, le quotient n’est pas un nombre décimal ; on en donne une valeur approchée, par exemple un arrondi.

{{% details title="Exemple" closed="true" %}}
\({10 \div 3}\) : on obtient \(3{,}333\dots\), avec toujours le même reste \(1\). La division ne se termine pas. \({10 \div 3 \approx 3{,}3}\) (arrondi au dixième), \({\approx 3{,}33}\) (arrondi au centième).
{{% /details %}}

## Division et multiplication

> [!TIP] **Propriété**
>
> La division est l’opération « inverse » de la multiplication : si on multiplie un nombre puis qu’on divise le résultat par le même nombre non nul (ou inversement), on retrouve le nombre de départ.

{{% details title="Exemple" closed="true" %}}
\({6{,}2 \times 5 = 31}\) et \({31 \div 5 = 6{,}2}\).
{{% /details %}}

> [!TIP] **Propriété**
>
> Diviser un nombre par \(10\) (ou \(100\), ou \(1\,000\)) revient à le multiplier par \(0{,}1\) (ou \(0{,}01\), ou \(0{,}001\)) : chaque chiffre « recule » d’un rang (ou de deux, ou de trois) vers la droite.

{{% details title="Exemple" closed="true" %}}
\({483 \div 10 = 48{,}3}\) ; \({483 \div 100 = 4{,}83}\) ; \({483 \div 1\,000 = 0{,}483}\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Trois amis se partagent équitablement une addition de \(56{,}40\) €. Combien chacun paie-t-il ? Et s’ils étaient \(7\) (arrondir au centime) ?

{{% details title="Solution commentée" closed="true" %}}
\({56{,}40 \div 3 = 18{,}80}\) : chacun paie \(18{,}80\) €. (Vérification : \({3 \times 18{,}80 = 56{,}40}\).)

\({56{,}40 \div 7 = 8{,}057\dots}\) : la division ne s’arrête pas vite. Arrondi au centime : \(8{,}06\) €.
{{% /details %}}
