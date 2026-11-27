---
title: "Limites en l'infini"
weight: 1
cascade:
  type: docs
---

## Limite infinie

> [!TIP] **Définitions**  
> - Une fonction \(f\) a pour limite \({+\infty}\) en \({+\infty}\) si, pour tout réel \(A\), l’intervalle \({[A ; +\infty[}\) contient toutes les valeurs \(f(x)\) dès que \(x\) est assez grand.  
>   On note \({\lim\limits_{x \to +\infty} f(x) = +\infty}\).  
> - Une fonction \(f\) a pour limite \({-\infty}\) en \({+\infty}\) si, pour tout réel \(A\), l’intervalle \({]-\infty ; A]}\) contient toutes les valeurs \(f(x)\) dès que \(x\) est assez grand.  
>   On note \({\lim\limits_{x \to +\infty} f(x) = -\infty}\).  
> - On définit de la même manière les limites infinies en \({-\infty}\) (en remplaçant « \(x\) assez grand » par « \(x\) assez grand en valeur absolue et négatif »).

Le schéma suivant illustre la définition : aussi haut que soit placé le niveau \(A\), la courbe finit par rester au-dessus (ici à partir de \(x_0\)).  

![](/images/image225.png)

> [!TIP] **Propriétés**  
> Pour tout entier \({n \geq 1}\) :  
> - \({\lim\limits_{x \to +\infty} \sqrt{x} = +\infty}\) ;  
> - \({\lim\limits_{x \to +\infty} x^n = +\infty}\) ;  
> - \({\lim\limits_{x \to -\infty} x^n = 
\begin{cases}
+\infty & \text{si } n \text{ est pair,} \\
-\infty & \text{si } n \text{ est impair ;}
\end{cases}}\)  
> - \({\lim\limits_{x \to +\infty} e^x = +\infty}\).  

## Limite finie

> [!TIP] **Définition**  
> Soit \(\ell\) un réel.  
> - Une fonction \(f\) a pour limite \(\ell\) en \({+\infty}\) si tout intervalle ouvert contenant \(\ell\) contient toutes les valeurs \(f(x)\) dès que \(x\) est assez grand.  
>   On note \({\lim\limits_{x \to +\infty} f(x) = \ell}\).  
> - On définit de la même manière la limite finie de \(f\) en \({-\infty}\).  

Le schéma suivant illustre la définition : quelle que soit la largeur de la bande autour de \(\ell\), la courbe finit par y rester.  

![](/images/image226.png)

{{% details title="Exemple" closed="true" %}}  
On considère la fonction \(f\) définie sur \({]-\infty ; 0[ \cup ]0 ; +\infty[}\) par  
\[
f(x) = -1 + \dfrac{2}{x}.
\]  
Soit \(I\) un intervalle ouvert quelconque contenant \({-1}\).  
Lorsque \(x\) devient très grand, \(\dfrac{2}{x}\) devient aussi proche de 0 que l’on veut ; donc, pour \(x\) assez grand, toutes les valeurs \(f(x)\) sont dans \(I\).  

![](/images/image227.png)

Ainsi \(f\) a pour limite \({-1}\) en \({+\infty}\).  
Le même raisonnement montre que \(f\) a aussi pour limite \({-1}\) en \({-\infty}\).  
{{% /details %}}

> [!TIP] **Définition**  
> Lorsque \({\lim\limits_{x \to +\infty} f(x) = \ell}\) (avec \(\ell\) réel), on dit que la droite d’équation \({y = \ell}\) est **asymptote horizontale** à la courbe représentative de \(f\) en \({+\infty}\).  
> On définit de même une asymptote horizontale en \({-\infty}\).  

> [!TIP] **Propriétés**  
> Pour tout entier \({n \geq 1}\) :  
> - \({\lim\limits_{x \to +\infty} \dfrac{1}{x^n} = 0}\) et \({\lim\limits_{x \to -\infty} \dfrac{1}{x^n} = 0}\) ;  
> - \({\lim\limits_{x \to +\infty} \dfrac{1}{\sqrt{x}} = 0}\) ;  
> - \({\lim\limits_{x \to -\infty} e^x = 0}\).  

## Conjecturer graphiquement une limite en \({+\infty}\) et en \({-\infty}\)

> [!NOTE] **Méthode**  
> 1. Conjecturer graphiquement les limites en \({+\infty}\) et en \({-\infty}\) des fonctions \(f\), \(g\), \(h\) et \(i\) dont les courbes sont représentées ci-dessous.  
> 2. Certaines de ces courbes semblent-elles admettre une asymptote horizontale ? Si oui, en donner une équation.  

![](/images/image228.png)

{{% details title="Solution commentée" closed="true" %}}

**1.** On observe le comportement des courbes aux deux extrémités :  
\[
\lim_{x \to -\infty} f(x) = -\infty \quad ; \quad \lim_{x \to +\infty} f(x) = -\infty
\]  
\[
\lim_{x \to -\infty} g(x) = +\infty \quad ; \quad \lim_{x \to +\infty} g(x) = -\infty
\]  
\[
\lim_{x \to -\infty} h(x) = 1 \quad ; \quad \lim_{x \to +\infty} h(x) = 1
\]  
\[
\lim_{x \to -\infty} i(x) = -2 \quad ; \quad \lim_{x \to +\infty} i(x) = +\infty
\]  

---

**2.** Une asymptote horizontale correspond à une limite finie. On conjecture que :  
- la courbe \(\mathcal{C}_h\) admet pour asymptote horizontale la droite d’équation \({y = 1}\), en \({-\infty}\) et en \({+\infty}\) ;  
- la courbe \(\mathcal{C}_i\) admet pour asymptote horizontale la droite d’équation \({y = -2}\) en \({-\infty}\).  

Les courbes \(\mathcal{C}_f\) et \(\mathcal{C}_g\) n’ont pas d’asymptote horizontale.

{{% /details %}}

## Inscrire les limites dans un tableau de variation

> [!NOTE] **Méthode**  
> Par lecture graphique, dresser le tableau de variation de chacune des fonctions de la méthode précédente, en y faisant figurer les limites conjecturées.  

{{% details title="Solution commentée" closed="true" %}}

On lit les variations et les extremums sur chaque courbe, puis on place les limites aux extrémités des tableaux (aux bornes \({-\infty}\) et \({+\infty}\)) :  

![](/images/image229.png)

![](/images/image230.png)

![](/images/image231.png)

![](/images/image232.png)

{{% /details %}}
