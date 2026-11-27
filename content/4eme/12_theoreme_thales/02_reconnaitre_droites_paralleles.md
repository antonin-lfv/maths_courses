---
title: 'Reconnaitre des droites parallèles'
weight: 2
cascade:
  type: docs
---

## Réciproque du théorème de Thalès

> [!TIP] **Théorème (réciproque du théorème de Thalès, triangles emboîtés)**
>
> Soit \(ABC\) et \(AMN\) deux triangles tels que :
> - \(M\) est un point du segment \([AB]\) ;
> - \(N\) est un point du segment \([AC]\) ;
> - \(\dfrac{AM}{AB} = \dfrac{AN}{AC}\).
>
> Alors les droites \((MN)\) et \((BC)\) sont parallèles.

> [!NOTE] **Méthode — Savoir si deux droites sont parallèles**
>
> Les points \(M \in [AB]\) et \(N \in [AC]\) étant donnés, on calcule séparément \(\dfrac{AM}{AB}\) et \(\dfrac{AN}{AC}\) (ou on compare les produits en croix \(AM \times AC\) et \(AB \times AN\)).
> - Si \(\dfrac{AM}{AB} = \dfrac{AN}{AC}\), alors \((MN)\) et \((BC)\) sont parallèles (réciproque du théorème de Thalès).
> - Si \(\dfrac{AM}{AB} \neq \dfrac{AN}{AC}\), alors \((MN)\) et \((BC)\) ne sont pas parallèles.

{{% details title="Exemple 1" closed="true" %}}
\(M \in [AB]\), \(N \in [AC]\), avec \(AM = 2{,}5\) cm, \(AB = 7{,}5\) cm, \(AN = 3\) cm et \(AC = 9\) cm.

Produits en croix : \(AM \times AC = 2{,}5 \times 9 = 22{,}5\) et \(AB \times AN = 7{,}5 \times 3 = 22{,}5\). Ils sont égaux, donc \(\dfrac{AM}{AB} = \dfrac{AN}{AC}\) (les deux valent \(\dfrac{1}{3}\)). D’après la réciproque du théorème de Thalès, \((MN) \parallel (BC)\).
{{% /details %}}

{{% details title="Exemple 2" closed="true" %}}
\(M \in [AB]\), \(N \in [AC]\), avec \(AM = 3\) cm, \(AB = 8\) cm, \(AN = 4\) cm et \(AC = 10\) cm.

Produits en croix : \(AM \times AC = 3 \times 10 = 30\) et \(AB \times AN = 8 \times 4 = 32\). Ils sont différents, donc \(\dfrac{AM}{AB} \neq \dfrac{AN}{AC}\). Les droites \((MN)\) et \((BC)\) ne sont pas parallèles.
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Les deux conclusions ne reposent pas sur le même théorème. Dans l’exemple 1, on utilise la **réciproque** du théorème de Thalès. Dans l’exemple 2, on utilise le **théorème de Thalès** lui-même : si les droites étaient parallèles, les rapports seraient égaux ; comme ils ne le sont pas, les droites ne peuvent pas être parallèles.

## Droite des milieux

> [!TIP] **Propriété**
>
> Dans un triangle, la droite qui passe par les milieux de deux côtés est parallèle au troisième côté.

> [!IMPORTANT] **Remarque**
>
> C’est un cas particulier de la réciproque du théorème de Thalès : si \(M\) et \(N\) sont les milieux de \([AB]\) et \([AC]\), alors \(\dfrac{AM}{AB} = \dfrac{AN}{AC} = \dfrac{1}{2}\). D’après le théorème de Thalès, on a de plus \(MN = \dfrac{BC}{2}\).

> [!NOTE] **Exercice résolu**
>
> Un pupitre est formé d’un plateau incliné \([DE]\) et d’une barre de renfort \([KL]\), avec \(K \in [OD]\) et \(L \in [OE]\). On mesure \(OK = 24\) cm, \(OD = 60\) cm, \(OL = 18\) cm et \(OE = 45\) cm. La barre \([KL]\) est-elle parallèle au plateau \([DE]\) ?

{{% details title="Solution commentée" closed="true" %}}
On compare les rapports : \(\dfrac{OK}{OD} = \dfrac{24}{60} = 0{,}4\) et \(\dfrac{OL}{OE} = \dfrac{18}{45} = 0{,}4\).

Les points \(K\) et \(L\) sont sur les segments \([OD]\) et \([OE]\), et \(\dfrac{OK}{OD} = \dfrac{OL}{OE}\). D’après la réciproque du théorème de Thalès, \((KL) \parallel (DE)\) : la barre est parallèle au plateau.
{{% /details %}}
