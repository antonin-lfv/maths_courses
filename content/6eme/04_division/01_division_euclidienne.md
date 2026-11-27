---
title: 'Division euclidienne'
weight: 1
cascade:
  type: docs
---

## Définition

> [!TIP] **Définition**
>
> Effectuer la **division euclidienne** d’un nombre entier (le **dividende**) par un nombre entier non nul (le **diviseur**), c’est trouver deux nombres entiers, le **quotient** et le **reste**, tels que :
> \[
\text{dividende} = (\text{diviseur} \times \text{quotient}) + \text{reste}, \qquad \text{avec } \text{reste} < \text{diviseur}.
\]

{{% details title="Exemple" closed="true" %}}
Division euclidienne de \(617\) par \(14\) : on cherche combien de fois \(14\) est contenu dans \(617\).

```
  6 1 7 | 1 4
- 5 6   |-----
  -----  | 4 4
    5 7
  - 5 6
  -----
      1
```

Le quotient est \(44\) et le reste est \(1\) : \({617 = (14 \times 44) + 1}\), avec \({1 < 14}\).
{{% /details %}}

> [!IMPORTANT] **Remarques**
>
> - On ne peut jamais diviser par \(0\).
> - Le reste doit toujours être **strictement inférieur** au diviseur : sinon, on peut encore « mettre une fois de plus » le diviseur dans le dividende.
> - Certaines calculatrices ont une touche de « division euclidienne » qui affiche directement le quotient et le reste.

## Utiliser la division euclidienne

> [!NOTE] **Méthode 1 - Situation de partage**
>
> On utilise la division euclidienne dans une situation de **partage équitable** : on connaît le nombre de parts et on cherche la valeur d’une part.

{{% details title="Exemple" closed="true" %}}
On partage équitablement \(75\) cartes entre \(6\) joueurs. \({75 = (6 \times 12) + 3}\) : chaque joueur reçoit \(12\) cartes et il en reste \(3\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Situation de groupement**
>
> On utilise aussi la division euclidienne dans une situation de **groupement** : on connaît la valeur d’une part et on cherche le nombre de parts.

{{% details title="Exemple" closed="true" %}}
On range \(75\) œufs dans des boîtes de \(6\). \({75 = (6 \times 12) + 3}\) : on remplit \(12\) boîtes et il reste \(3\) œufs. Pour ranger tous les œufs, il faut \(13\) boîtes.
{{% /details %}}

## S’entraîner

> [!NOTE] **Exercice résolu**
>
> Un car peut transporter \(52\) passagers. Combien de cars faut-il pour transporter \(388\) élèves ? Combien de places restera-t-il libres dans le dernier car ?

{{% details title="Solution commentée" closed="true" %}}
C’est une situation de groupement. \({388 = (52 \times 7) + 24}\), car \({52 \times 7 = 364}\) et \({388 - 364 = 24 < 52}\).

Sept cars transportent \(364\) élèves ; il reste \(24\) élèves, qui ont besoin d’un huitième car. Il faut donc \(8\) cars, et il restera \({52 - 24 = 28}\) places libres dans le dernier.
{{% /details %}}
