---
title: 'Limite en un réel'
weight: 2
cascade:
  type: docs
---

## Limite en un réel \(a\)

> [!TIP] **Définition**  
> Soit \(a\) un réel.  
> - Une fonction \(f\) a pour limite \(+\infty\) en \(a\) si tout intervalle ouvert de la forme \([A ; +\infty[\) contient toutes les valeurs de \(f(x)\) pour \(x\) suffisamment proche de \(a\).  
>   On note \(\lim_{x \to a} f(x) = +\infty\).  
> - Une fonction \(f\) a pour limite \(-\infty\) en \(a\) si tout intervalle ouvert de la forme ]\(-\infty ; A]\) contient toutes les valeurs de \(f(x)\) pour \(x\) suffisamment proche de \(a\).  
>   On note \(\lim_{x \to a} f(x) = -\infty\).  
> - Soit \(\ell\) un réel. Une fonction \(f\) a pour limite \(\ell\) en \(a\) si tout intervalle ouvert contenant \(\ell\) contient toutes les valeurs de \(f(x)\) pour \(x\) suffisamment proche de \(a\). On note \(\lim_{x \to a} f(x) = \ell\).  
> ![](/images/image26.png)

{{% details title="Exemple" closed="true" %}}  
Soit la fonction \(f\) définie sur \(]-\infty ; 0[ \cup ]0 ; +\infty[\) par \(f(x) = \dfrac{1}{x^2}\).  

Quel que soit l’intervalle \(I\) de la forme \([A ; +\infty[\), si \(x\) est suffisamment proche de 0, \(\dfrac{1}{x^2}\) sera supérieur à \(A\) et toutes les valeurs de \(f(x)\) seront dans \(I\).  

![](/images/image27.png)

Donc \(\lim_{x \to 0} f(x) = +\infty\).  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Une fonction peut avoir une limite « à droite » et une limite « à gauche » qui sont différentes.  
> Dans l’exemple ci-contre, on note :  
> \[
\lim_{x \to 0^+} \frac{1}{x} = +\infty 
\quad \text{et} \quad
\lim_{x \to 0^-} \frac{1}{x} = -\infty.
\]
> ![](/images/image28.png)


## Interprétation graphique

> [!TIP] **Définition**  
> Soit \(a\) un réel. Lorsqu’une fonction \(f\) a pour limite \(+\infty\) ou \(-\infty\) en \(a\) (à gauche ou à droite), on dit que sa courbe représentative admet la droite d’équation \(x = a\) comme **asymptote verticale**.  

{{% details title="Exemple" closed="true" %}}  
Soit la fonction \(f\) définie sur \(]-\infty ; 1[ \cup ]1 ; +\infty[\) par \(f(x) = \dfrac{2}{x-1}\).  

![](/images/image29.png)

\[
\lim_{x \to 1^-} f(x) = -\infty 
\quad \text{et} \quad
\lim_{x \to 1^+} f(x) = +\infty.
\]

La droite d’équation \(x = 1\) est asymptote verticale à la courbe représentative de la fonction \(f\).  
{{% /details %}}


## Conjecturer les limites d’une fonction en un réel

> [!NOTE] **Méthode 1**  
> 1. Conjecturer graphiquement les limites aux bornes de leur ensemble de définition des deux fonctions \(f\) et \(g\) représentées ci-dessous.  
> 2. Par lecture graphique, dresser le tableau de variation des fonctions \(f\) et \(g\) en y portant les limites conjecturées.
> ![](/images/image30.png)

{{% details title="Solution commentée" closed="true" %}}

**1.** La fonction \(f\) est définie sur \(]-\infty;2[ \cup ]2;+\infty[\).  
On peut conjecturer que :  
\[
\lim_{x \to -\infty} f(x) = 1 ; \quad
\lim_{x \to 2^-} f(x) = -\infty
\]
\[
\lim_{x \to 2^+} f(x) = +\infty ; \quad
\lim_{x \to +\infty} f(x) = 1.
\]

La fonction \(g\) est définie sur \(]-\infty;-3[ \cup ]-3;2[ \cup ]2;+\infty[\).  
On peut conjecturer que :  
\[
\lim_{x \to -\infty} g(x) = 0 ; \quad
\lim_{x \to -3^-} g(x) = +\infty ; \quad
\lim_{x \to -3^+} g(x) = -\infty
\]
\[
\lim_{x \to 2^-} g(x) = +\infty ; \quad
\lim_{x \to 2^+} g(x) = -\infty ; \quad
\lim_{x \to +\infty} g(x) = 0.
\]

---

**2.** Tableaux de variation :  

![](/images/image31.png)

{{% /details %}}


## Conjecturer les asymptotes à la courbe représentative d’une fonction

> [!NOTE] **Méthode 2**  
> Certaines des courbes représentées dans la méthode 1 semblent-elles admettre des asymptotes horizontales ou verticales ? Si oui, donner leurs équations.

{{% details title="Solution commentée" closed="true" %}}

- La courbe \(\mathscr{C}_f\) semble admettre pour asymptote verticale la droite d’équation \(x=2\) et pour asymptote horizontale la droite d’équation \(y=1\).  
- La courbe \(\mathscr{C}_g\) semble admettre pour asymptotes verticales les droites d’équations \(x=-3\) et \(x=2\) et pour asymptote horizontale la droite d’équation \(y=0\).  

{{% /details %}}