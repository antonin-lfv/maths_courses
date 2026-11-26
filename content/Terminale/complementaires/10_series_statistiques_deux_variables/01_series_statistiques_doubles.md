---
title: 'Séries statistiques doubles'
weight: 1
cascade:
  type: docs
---

Il arrive que deux caractères d’une même population semblent liés : la taille et la masse d’un nourrisson, le prix d’un produit et le nombre d’unités vendues, la température extérieure et la consommation d’électricité… On peut alors chercher à décrire ce lien, sans qu’il soit forcément un lien de cause à effet.

## Tableaux de données

> [!TIP] **Définition**
>
> Sur une population d’effectif \(n\), on étudie simultanément deux variables statistiques \(x\) et \(y\). Pour chaque individu \(i\) (\(1 \leq i \leq n\)), on mesure la valeur \(x_i\) de la variable \(x\) et la valeur \(y_i\) de la variable \(y\). Les couples \((x_1\,;\,y_1), (x_2\,;\,y_2), \dots, (x_n\,;\,y_n)\) forment une **série statistique double** (ou série statistique à deux variables).
>
> On présente généralement cette série sous forme d’un tableau :
>
> | variable \(x\) | \(x_1\) | \(x_2\) | … | \(x_n\) |
> |---|---|---|---|---|
> | variable \(y\) | \(y_1\) | \(y_2\) | … | \(y_n\) |

{{% details title="Exemple" closed="true" %}}
Une petite entreprise relève, sur six mois, son budget publicitaire mensuel \(x_i\) (en milliers d’euros) et son chiffre d’affaires \(y_i\) (en milliers d’euros) :

| Budget \(x_i\) | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Chiffre d’affaires \(y_i\) | 12 | 15 | 19 | 20 | 25 | 27 |

Population : les 6 mois ; \(n = 6\) ; variable \(x\) : budget publicitaire ; variable \(y\) : chiffre d’affaires.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> L’un des deux caractères étudiés peut être le temps (des dates, des années, des rangs) : on parle alors de série chronologique.

## Nuage de points

> [!TIP] **Définition**
>
> On représente une série statistique à deux variables \(x\) et \(y\) par un **nuage de points** dans un repère \((O\,;\,I, J)\) : il est constitué des points \(M_i(x_i\,;\,y_i)\), pour \(i = 1, \dots, n\).

## Point moyen

> [!TIP] **Définition**
>
> On appelle **point moyen** du nuage de points \(M_1(x_1\,;\,y_1), \dots, M_n(x_n\,;\,y_n)\) le point \(G(\bar{x}\,;\,\bar{y})\), où \(\bar{x}\) est la moyenne arithmétique des valeurs de \(x\) et \(\bar{y}\) celle des valeurs de \(y\) :
> \[
G\left(\frac{x_1 + x_2 + \dots + x_n}{n}\,;\,\frac{y_1 + y_2 + \dots + y_n}{n}\right).
\]

![](/images/image358.png)

## Représenter une série double

> [!NOTE] **Méthode 1 — Modéliser par une série statistique à deux variables**
>
> On mesure, dans un jardin, la hauteur \(h\) (en cm) d’un plant de tomate selon son âge \(a\) (en semaines).
>
> | Âge \(a_i\) | 2 | 3 | 4 | 5 | 6 | 7 |
> |---|---|---|---|---|---|---|
> | Hauteur \(h_i\) | 8 | 13 | 19 | 24 | 31 | 35 |
>
> Préciser la population, l’effectif et les deux variables. Ce tableau semble-t-il traduire un lien entre les deux variables ?

{{% details title="Solution commentée" closed="true" %}}
La population est constituée des 6 relevés ; \(n = 6\). Les variables sont l’âge \(a\) (en semaines) et la hauteur \(h\) (en cm). La hauteur augmente régulièrement avec l’âge (d’environ 5 à 7 cm par semaine) : les deux variables semblent liées, ce que confirmera le nuage de points.
{{% /details %}}

> [!NOTE] **Méthode 2 — Tracer un nuage de points et calculer le point moyen**
>
> On reprend la série « budget publicitaire / chiffre d’affaires » de l’exemple. Représenter le nuage de points et calculer les coordonnées du point moyen \(G\).

{{% details title="Solution commentée" closed="true" %}}
On place les six points \((1\,;\,12)\), \((2\,;\,15)\), …, \((6\,;\,27)\) (voir la figure ci-dessus).
\[
\bar{x} = \frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3{,}5, \qquad \bar{y} = \frac{12 + 15 + 19 + 20 + 25 + 27}{6} = \frac{118}{6} \approx 19{,}67.
\]
Donc \(G(3{,}5\,;\,19{,}67)\) (valeur arrondie au centième).
{{% /details %}}
