---
title: 'Calculer des longueurs avec le théorème de Thalès'
weight: 1
cascade:
  type: docs
---

## Le théorème de Thalès

Lorsque deux droites parallèles coupent les deux côtés d’un angle, elles découpent deux triangles « emboîtés » dont les longueurs sont proportionnelles.

![](/images/image436.png)

> [!TIP] **Théorème de Thalès (triangles emboîtés)**
>
> Soit \(ABC\) et \(AMN\) deux triangles tels que :
> - \(M\) est un point du segment \([AB]\) ;
> - \(N\) est un point du segment \([AC]\) ;
> - les droites \((MN)\) et \((BC)\) sont parallèles.
>
> Alors
> \[
\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{MN}{BC}.
\]

> [!IMPORTANT] **Remarques**
>
> - On peut aussi écrire les rapports « à l’envers » : \({\dfrac{AB}{AM} = \dfrac{AC}{AN} = \dfrac{BC}{MN}}\).
> - Les longueurs des côtés du petit triangle \(AMN\) sont proportionnelles à celles des côtés correspondants du grand triangle \(ABC\) :
>
> | Côtés de \(AMN\) | \(AM\) | \(AN\) | \(MN\) |
> |---|---|---|---|
> | Côtés de \(ABC\) | \(AB\) | \(AC\) | \(BC\) |
>
> - Le triangle \(ABC\) est donc un agrandissement du triangle \(AMN\) (et \(AMN\) une réduction de \(ABC\)).

## Calculer une longueur

> [!NOTE] **Méthode - Utiliser le théorème de Thalès**
>
> 1. On vérifie les hypothèses : deux triangles emboîtés, points sur les côtés, droites parallèles.
> 2. On écrit l’égalité des trois rapports, en mettant au numérateur les côtés du petit triangle.
> 3. On remplace les longueurs connues et on garde deux rapports dont un seul terme est inconnu.
> 4. On calcule ce terme avec l’égalité des produits en croix.

{{% details title="Exemple" closed="true" %}}
Dans le triangle \(RST\), le point \(U\) est sur \([RS]\) et le point \(V\) est sur \([RT]\), avec \({(UV) \parallel (ST)}\). On sait que \({RU = 3}\) cm, \({RS = 7{,}5}\) cm, \({RV = 4}\) cm et \({UV = 2{,}4}\) cm. On cherche \(RT\) et \(ST\).

Les triangles \(RUV\) et \(RST\) sont emboîtés : \({U \in [RS]}\), \({V \in [RT]}\) et \({(UV) \parallel (ST)}\). D’après le théorème de Thalès :
\[
\dfrac{RU}{RS} = \dfrac{RV}{RT} = \dfrac{UV}{ST}, \qquad \text{soit} \qquad \dfrac{3}{7{,}5} = \dfrac{4}{RT} = \dfrac{2{,}4}{ST}.
\]
- Avec les deux premiers rapports : \({RT = \dfrac{7{,}5 \times 4}{3} = \dfrac{30}{3} = 10}\) cm.
- Avec le premier et le dernier : \({ST = \dfrac{7{,}5 \times 2{,}4}{3} = \dfrac{18}{3} = 6}\) cm.
{{% /details %}}

> [!NOTE] **Exercice résolu**
>
> Pour mesurer la largeur d’une rivière, on repère les points suivants : \(O\) sur une rive ; \(P\) et \(E\) alignés avec \(O\) ; \(Q\) et \(F\) alignés avec \(O\), avec \({P \in [OE]}\), \({Q \in [OF]}\) et \({(PQ) \parallel (EF)}\). On mesure \({OP = 12}\) m, \({PE = 18}\) m et \({PQ = 8}\) m. Calculer la longueur \(EF\).

{{% details title="Solution commentée" closed="true" %}}
On a \({OE = OP + PE = 12 + 18 = 30}\) m.

Les triangles \(OPQ\) et \(OEF\) sont emboîtés : \({P \in [OE]}\), \({Q \in [OF]}\) et \({(PQ) \parallel (EF)}\). D’après le théorème de Thalès :
\[
\dfrac{OP}{OE} = \dfrac{OQ}{OF} = \dfrac{PQ}{EF}, \qquad \text{donc} \qquad \dfrac{12}{30} = \dfrac{8}{EF}.
\]
Par l’égalité des produits en croix : \({EF = \dfrac{30 \times 8}{12} = \dfrac{240}{12} = 20}\) m.
{{% /details %}}
