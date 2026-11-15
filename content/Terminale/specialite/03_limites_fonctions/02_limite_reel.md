---
title: 'Limite en un réel'
weight: 2
cascade:
  type: docs
---

## Limite en un réel \(a\)

> [!TIP] **Définition**  
> Soit \(a\) un réel, et \(f\) une fonction définie au voisinage de \(a\) (éventuellement pas en \(a\) lui-même).  
> - \(f\) a pour limite \(+\infty\) en \(a\) si, pour tout réel \(A\), l’intervalle \([A ; +\infty[\) contient toutes les valeurs \(f(x)\) dès que \(x\) est assez proche de \(a\).  
>   On note \(\lim\limits_{x \to a} f(x) = +\infty\).  
> - \(f\) a pour limite \(-\infty\) en \(a\) si, pour tout réel \(A\), l’intervalle \(]-\infty ; A]\) contient toutes les valeurs \(f(x)\) dès que \(x\) est assez proche de \(a\).  
>   On note \(\lim\limits_{x \to a} f(x) = -\infty\).  
> - Soit \(\ell\) un réel. \(f\) a pour limite \(\ell\) en \(a\) si tout intervalle ouvert contenant \(\ell\) contient toutes les valeurs \(f(x)\) dès que \(x\) est assez proche de \(a\). On note \(\lim\limits_{x \to a} f(x) = \ell\).  
> ![](/images/image233.png)

{{% details title="Exemple" closed="true" %}}  
On considère la fonction \(f\) définie sur \(]-\infty ; 0[ \cup ]0 ; +\infty[\) par \(f(x) = \dfrac{1}{x^2}\).  

Soit \(A > 0\) quelconque. Dès que \(x\) est assez proche de 0 (précisément, dès que \(0 < |x| < \frac{1}{\sqrt{A}}\)), on a \(x^2 < \frac{1}{A}\), donc \(\dfrac{1}{x^2} > A\) : toutes les valeurs \(f(x)\) sont dans \([A ; +\infty[\).  

![](/images/image234.png)

Ainsi \(\lim\limits_{x \to 0} f(x) = +\infty\).  
{{% /details %}}

> [!IMPORTANT] **Remarque**  
> Une fonction peut avoir en \(a\) une limite **à droite** (quand \(x\) tend vers \(a\) avec \(x > a\)) et une limite **à gauche** (avec \(x < a\)) différentes.  
> C’est le cas de la fonction inverse en 0 :  
> \[
\lim_{x \to 0^+} \frac{1}{x} = +\infty 
\quad \text{et} \quad
\lim_{x \to 0^-} \frac{1}{x} = -\infty.
\]
> On note aussi \(\lim\limits_{\substack{x \to 0 \\ x > 0}}\) et \(\lim\limits_{\substack{x \to 0 \\ x < 0}}\).
> ![](/images/image235.png)

## Interprétation graphique

> [!TIP] **Définition**  
> Soit \(a\) un réel. Si \(f\) a pour limite \(+\infty\) ou \(-\infty\) en \(a\) (à gauche, à droite, ou des deux côtés), on dit que la droite d’équation \(x = a\) est **asymptote verticale** à la courbe représentative de \(f\).  

{{% details title="Exemple" closed="true" %}}  
On considère la fonction \(f\) définie sur \(]-\infty ; -2[ \cup ]-2 ; +\infty[\) par \(f(x) = -\dfrac{3}{x+2}\).  

![](/images/image236.png)

Quand \(x\) tend vers \(-2\) par valeurs inférieures, \(x + 2\) tend vers 0 en restant négatif, donc \(-\dfrac{3}{x+2}\) devient positif et très grand ; par valeurs supérieures, c’est l’inverse :
\[
\lim_{x \to -2^-} f(x) = +\infty 
\quad \text{et} \quad
\lim_{x \to -2^+} f(x) = -\infty.
\]

La droite d’équation \(x = -2\) est asymptote verticale à la courbe représentative de \(f\).  
{{% /details %}}

## Conjecturer les limites d’une fonction en un réel

> [!NOTE] **Méthode 1**  
> 1. Conjecturer graphiquement les limites aux bornes de leur ensemble de définition des fonctions \(f\) et \(g\) représentées ci-dessous. (\(f\) n’est pas définie en 1 ; \(g\) n’est pas définie en \(-1\) et en 3.)  
> 2. Par lecture graphique, dresser le tableau de variation de \(f\) et de \(g\) en y faisant figurer ces limites.
> ![](/images/image237.png)

{{% details title="Solution commentée" closed="true" %}}

**1.** La fonction \(f\) est définie sur \(]-\infty;1[ \cup ]1;+\infty[\). On conjecture :  
\[
\lim_{x \to -\infty} f(x) = 2 ; \quad
\lim_{x \to 1^-} f(x) = -\infty ; \quad
\lim_{x \to 1^+} f(x) = +\infty ; \quad
\lim_{x \to +\infty} f(x) = 2.
\]

La fonction \(g\) est définie sur \(]-\infty;-1[ \cup ]-1;3[ \cup ]3;+\infty[\). On conjecture :  
\[
\lim_{x \to -\infty} g(x) = 0 ; \quad
\lim_{x \to -1^-} g(x) = -\infty ; \quad
\lim_{x \to -1^+} g(x) = +\infty
\]
\[
\lim_{x \to 3^-} g(x) = -\infty ; \quad
\lim_{x \to 3^+} g(x) = +\infty ; \quad
\lim_{x \to +\infty} g(x) = 0.
\]

---

**2.** Les deux fonctions semblent décroissantes sur chaque intervalle de leur ensemble de définition. Les valeurs interdites sont signalées par une double barre :  

![](/images/image238.png)

![](/images/image239.png)

{{% /details %}}

## Conjecturer les asymptotes à la courbe représentative d’une fonction

> [!NOTE] **Méthode 2**  
> Les courbes de la méthode 1 semblent-elles admettre des asymptotes horizontales ou verticales ? Si oui, en donner des équations.

{{% details title="Solution commentée" closed="true" %}}

Une limite infinie en un réel \(a\) donne une asymptote verticale \(x = a\) ; une limite finie \(\ell\) en \(\pm\infty\) donne une asymptote horizontale \(y = \ell\).  
- La courbe \(\mathscr{C}_f\) semble admettre pour asymptote verticale la droite d’équation \(x = 1\), et pour asymptote horizontale la droite d’équation \(y = 2\) (en \(-\infty\) et en \(+\infty\)).  
- La courbe \(\mathscr{C}_g\) semble admettre pour asymptotes verticales les droites d’équations \(x = -1\) et \(x = 3\), et pour asymptote horizontale l’axe des abscisses, d’équation \(y = 0\).  

{{% /details %}}
