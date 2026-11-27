---
title: 'Probabilité d’un événement'
weight: 2
cascade:
  type: docs
---

## Probabilité

> [!TIP] **Définitions**
>
> La **probabilité** d’un événement peut s’interpréter comme la « proportion de chances » que cet événement se réalise. C’est un **nombre compris entre 0 et 1**.
> - Plus un événement a de chances de se réaliser, plus sa probabilité est proche de \(1\).
> - Moins il a de chances de se réaliser, plus sa probabilité est proche de \(0\).

On peut situer un événement sur une échelle de probabilité :

| Impossible | Très peu probable | Peu probable | Une chance sur deux | Probable | Très probable | Certain |
|---|---|---|---|---|---|---|
| \(0\) | | | \(\frac{1}{2}\) | | | \(1\) |

> [!IMPORTANT] **Remarques**
>
> - On peut écrire une probabilité sous forme d’une fraction, d’un nombre décimal ou d’un pourcentage.
> - La probabilité d’un événement impossible est \(0\) (ou \(0\,\%\)) ; celle d’un événement certain est \(1\) (ou \(100\,\%\)).

## Calculer une probabilité

> [!TIP] **Propriété**
>
> Lorsque toutes les issues ont la même chance de se produire (par exemple avec un dé ou une pièce **équilibrés**, ou un tirage **au hasard** d’objets indiscernables), la probabilité d’un événement est
> \[
\frac{\text{nombre d’issues qui réalisent l’événement}}{\text{nombre total d’issues}}.
\]

{{% details title="Exemple" closed="true" %}}
- Avec la roue équilibrée à \(8\) secteurs numérotés de \(1\) à \(8\), la probabilité d’obtenir \(5\) est \(\frac{1}{8}\), et celle d’obtenir un multiple de \(3\) (issues \(3\) et \(6\)) est \(\frac{2}{8}\), soit \(\frac{1}{4}\) ou \(0{,}25\) ou \(25\,\%\).
- Un sac contient \(20\) jetons indiscernables au toucher : \(6\) bleus et \(14\) verts. On en tire un au hasard. La probabilité d’obtenir un jeton bleu est \(\frac{6}{20} = 0{,}3 = 30\,\%\) ; celle d’obtenir un jeton vert est \(\frac{14}{20} = 0{,}7 = 70\,\%\).
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Une urne contient \(3\) boules rouges, \(5\) boules jaunes et \(2\) boules blanches, indiscernables au toucher. On tire une boule au hasard.
> 1. Quelle est la probabilité de tirer une boule jaune ? Écrire le résultat sous forme d’une fraction, d’un nombre décimal et d’un pourcentage.
> 2. Quelle est la probabilité de tirer une boule verte ? une boule qui n’est pas blanche ?

{{% details title="Solution commentée" closed="true" %}}
Il y a \(10\) boules, qui ont toutes la même chance d’être tirées.
1. \(\dfrac{5}{10} = 0{,}5 = 50\,\%\) : une chance sur deux.
2. Il n’y a pas de boule verte : l’événement est impossible, sa probabilité est \(0\). Les boules non blanches sont les \(8\) boules rouges ou jaunes : probabilité \(\frac{8}{10} = 0{,}8 = 80\,\%\).
{{% /details %}}
