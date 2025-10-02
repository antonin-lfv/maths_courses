---
title: "Limites en l'infini"
weight: 1
cascade:
  type: docs
---

## Limite infinie

> [!TIP] **Définitions**  
> - Une fonction \(f\) a pour limite \(+\infty\) en \(+\infty\) si tout intervalle ouvert de la forme \([A ; +\infty[\) contient toutes les valeurs de \(f(x)\) pour \(x\) suffisamment grand.  
>   On note \(\lim_{x \to +\infty} f(x) = +\infty\).  
> - Une fonction \(f\) a pour limite \(-\infty\) en \(+\infty\) si tout intervalle ouvert de la forme \(]-\infty ; A]\) contient toutes les valeurs de \(f(x)\) pour \(x\) suffisamment grand.  
>   On note \(\lim_{x \to +\infty} f(x) = -\infty\).  
> - On définit de façon analogue les limites infinies en \(-\infty\).

Le schéma suivant illustre la définition :  

![](/images/image21.png)

> [!TIP] **Propriétés**  
> Soit \(n\) un entier supérieur ou égal à 1. On a :  
> - \(\lim_{x \to +\infty} \sqrt{x} = +\infty\)  
> - \(\lim_{x \to +\infty} x^n = +\infty\)  
> - \(\lim_{x \to -\infty} x^n = 
\begin{cases}
-\infty & \text{si } n \text{ est impair} \\
+\infty & \text{si } n \text{ est pair}
\end{cases}\)  
> - \(\lim_{x \to +\infty} e^x = +\infty\)  


## Limite finie

> [!TIP] **Définition**  
> Soit \(\ell\) un réel.  
> - Une fonction \(f\) a pour limite \(\ell\) en \(+\infty\) lorsque tout intervalle ouvert contenant \(\ell\) contient toutes les valeurs de \(f(x)\) pour \(x\) suffisamment grand.  
>   On note \(\lim_{x \to +\infty} f(x) = \ell\).  
> - On définit de façon analogue la limite finie de \(f\) en \(-\infty\).  

Le schéma suivant illustre la définition :  

![](/images/image22.png)

{{% details title="Exemple" closed="true" %}}  
Soit la fonction \(f\) définie sur \(]-\infty ; 0[ \cup ]0 ; +\infty[\) par  
\[
f(x) = 2 - \frac{1}{x}.
\]  
Soit \(I\) n’importe quel intervalle ouvert contenant 2.  
Pour \(x\) suffisamment grand, \(\frac{1}{x}\) sera suffisamment petit pour que toutes les valeurs de \(f(x)\) appartiennent à \(I\).  

![](/images/image23.png)

La fonction \(f\) a donc pour limite 2 en \(+\infty\).  
De même, \(f\) a pour limite 2 en \(-\infty\).  
{{% /details %}}

> [!TIP] **Définition**  
> Lorsqu’une fonction \(f\) a pour limite un réel \(\ell\) en \(+\infty\), on dit que sa courbe représentative admet pour **asymptote horizontale** en \(+\infty\) la droite d’équation \(y = \ell\).  
> On définit de façon analogue une asymptote horizontale en \(-\infty\).  

> [!TIP] **Propriétés**  
> Soit \(n\) un entier supérieur ou égal à 1. On a :  
> - \(\lim_{x \to +\infty} \dfrac{1}{x^n} = 0\)  
> - \(\lim_{x \to -\infty} \dfrac{1}{x^n} = 0\)  
> - \(\lim_{x \to +\infty} \dfrac{1}{\sqrt{x}} = 0\)  
> - \(\lim_{x \to -\infty} e^x = 0\)  


## Conjecturer graphiquement une limite en \(+\infty\) et en \(-\infty\)

> [!NOTE] **Méthode**  
> 1. Conjecturer graphiquement les limites en \(+\infty\) et en \(-\infty\) des fonctions représentées ci-dessous.  
> 2. Certaines courbes représentatives semblent-elles admettre des asymptotes horizontales ? Si oui, donner leurs équations.  

![](/images/image24.png)

{{% details title="Solution commentée" closed="true" %}}

**1.** On peut conjecturer que :  
\[
\lim_{x \to -\infty} f(x) = +\infty \quad ; \quad \lim_{x \to +\infty} f(x) = +\infty
\]  
\[
\lim_{x \to -\infty} g(x) = -\infty \quad ; \quad \lim_{x \to +\infty} g(x) = +\infty
\]  
\[
\lim_{x \to -\infty} h(x) = -3 \quad ; \quad \lim_{x \to +\infty} h(x) = -3
\]  
\[
\lim_{x \to -\infty} i(x) = 2 \quad ; \quad \lim_{x \to +\infty} i(x) = -\infty
\]  

---

**2.** D’après la question précédente, on peut conjecturer que :  
- la courbe \(\mathcal{C}_h\) admet pour asymptote horizontale la droite d’équation \(y = -3\) en \(+\infty\) et en \(-\infty\).  
- la courbe \(\mathcal{C}_i\) admet pour asymptote horizontale la droite d’équation \(y = 2\) en \(-\infty\).  

{{% /details %}}


## Inscrire les limites dans un tableau de variation

> [!NOTE] **Méthode**  
> Par lecture graphique, dresser le tableau de variation des fonctions définies dans la méthode précédente en y portant les limites conjecturées.  

{{% details title="Solution commentée" closed="true" %}}

On lit directement sur les courbes et on obtient les tableaux ci-dessus :  

![](/images/image25.png)

{{% /details %}}

