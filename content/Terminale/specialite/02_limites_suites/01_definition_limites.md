---
title: 'Définition des limites'
weight: 1
cascade:
  type: docs
---

## Limite finie et suites convergentes

> [!TIP] **Définitions**  
> Soit \(\ell\) un réel. On dit que la suite \((u_n)\) a pour limite \(\ell\) quand \(n\) tend vers \({+\infty}\) si tout intervalle ouvert contenant \(\ell\) contient tous les termes \(u_n\) à partir d’un certain rang.  
> On dit alors que \((u_n)\) est **convergente**, et qu’elle converge vers \(\ell\).

Autrement dit, \((u_n)\) converge vers \(\ell\) si, pour tout réel \({r > 0}\), il existe un rang \(N\) tel que, pour tout \({n \geq N}\), \({|u_n - \ell| < r}\) : aussi petit que soit l’écart \(r\) choisi, tous les termes finissent par être à moins de \(r\) de \(\ell\).  

> [!IMPORTANT] **Remarque**  
> Le nombre \({|u_n - \ell|}\) est la distance entre \(u_n\) et \(\ell\) sur la droite réelle. L’inégalité \({|u_n - \ell| < r}\) équivaut à \({u_n \in \,]\ell - r ; \ell + r[}\).

> [!TIP] **Propriété**  
> Si une suite \((u_n)\) est convergente, sa limite est unique. On la note \({\lim\limits_{n \to +\infty} u_n = \ell}\).

> [!TIP] **Propriété (admise) : limites des suites usuelles**  
> \({\lim\limits_{n \to +\infty} \dfrac{1}{\sqrt{n}} = 0}\) et, pour tout entier naturel \(k\) non nul, \({\lim\limits_{n \to +\infty} \dfrac{1}{n^k} = 0}\).

Le schéma suivant illustre la convergence d’une suite : à partir du rang \(N\), tous les termes sont dans la bande \({]\ell - r ; \ell + r[}\).  

![](/images/image221.png)

## Suites divergentes

> [!TIP] **Définition**  
> Une suite qui n’est pas convergente est dite **divergente**.

> [!TIP] **Définitions**  
> La suite \((u_n)\) tend vers \({+\infty}\) (respectivement vers \({-\infty}\)) si tout intervalle de la forme \({[A ; +\infty[}\) (respectivement \({]-\infty ; A]}\)) contient tous les termes \(u_n\) à partir d’un certain rang.  
> On note alors \({\lim\limits_{n \to +\infty} u_n = +\infty}\) (respectivement \({\lim\limits_{n \to +\infty} u_n = -\infty}\)), et on dit que \((u_n)\) diverge vers \({+\infty}\) (respectivement vers \({-\infty}\)).

Autrement dit :  
- \((u_n)\) diverge vers \({+\infty}\) si, pour tout réel \(A\), il existe un rang \(N\) tel que, pour tout \({n \geq N}\), \({u_n \geq A}\) ;  
- \((u_n)\) diverge vers \({-\infty}\) si, pour tout réel \(A\), il existe un rang \(N\) tel que, pour tout \({n \geq N}\), \({u_n \leq A}\).  

> [!IMPORTANT] **Remarque**  
> Une suite divergente n’a pas forcément de limite infinie : certaines n’ont aucune limite. C’est le cas de la suite définie pour tout entier naturel \(n\) par \({u_n = (-1)^n}\), qui prend alternativement les valeurs 1 et \({-1}\).

> [!TIP] **Propriété (admise) : limites des suites usuelles**  
> \({\lim\limits_{n \to +\infty} \sqrt{n} = +\infty}\) et, pour tout entier naturel \(k\) non nul, \({\lim\limits_{n \to +\infty} n^k = +\infty}\).

Le schéma suivant illustre une suite qui diverge vers \({+\infty}\) : à partir du rang \(N\), tous les termes sont dans \({[A ; +\infty[}\).  

![](/images/image222.png)

## Déterminer une limite finie en utilisant la définition

> [!NOTE] **Méthode 1 - Déterminer une limite finie en utilisant la définition**  
> On considère la suite \((u_n)\) définie pour tout entier \({n \geq 1}\) par \({u_n = 3 + \dfrac{2}{n}}\).  
> 1. Recopier et compléter le tableau ci-dessous.  
> | \(n\)   | 1   | 10   | 100   | 1000   |  
> |---------|-----|------|-------|--------|  
> | \(u_n\) |    |   |   |   |  
> | \({\lvert u_n - 3 \rvert}\) |  |  |  |  |  
> 2. Conjecturer le comportement de \((u_n)\) quand \(n\) tend vers \({+\infty}\), puis démontrer cette conjecture à l’aide de la définition de la limite.  

{{% details title="Solution commentée" closed="true" %}}
**1.**  

| \(n\)   | 1   | 10   | 100   | 1000   |  
|---------|-----|------|-------|--------|  
| \(u_n\) | 5   | 3,2  | 3,02  | 3,002  |  
| \({\lvert u_n - 3 \rvert}\) | 2 | 0,2 | 0,02 | 0,002 |  

---

**2.** Le tableau suggère que \((u_n)\) converge vers 3.  

Soit \({r > 0}\). On cherche un rang à partir duquel \({|u_n - 3| < r}\). Or \({|u_n - 3| = \left|\dfrac{2}{n}\right| = \dfrac{2}{n}}\) (car \({n > 0}\)), donc :
\[
|u_n - 3| < r \iff \dfrac{2}{n} < r \iff n > \dfrac{2}{r},
\]
la dernière équivalence venant de la stricte décroissance de la fonction inverse sur \({]0 ; +\infty[}\).  

Il suffit donc de choisir un entier \({N > \dfrac{2}{r}}\) : pour tout \({n \geq N}\), on a \({|u_n - 3| < r}\).  

Ainsi \({\lim\limits_{n \to +\infty} u_n = 3}\).
{{% /details %}}

## Déterminer une limite infinie en utilisant la définition

> [!NOTE] **Méthode 2 - Déterminer une limite infinie en utilisant la définition**  
> On considère la suite \((v_n)\) définie pour tout entier naturel \(n\) par \({v_n = 5n - 4}\).  
> 1. Recopier et compléter le tableau ci-dessous.  
> | \(n\)   | 1   | 10   | 100   | 1000   |  
> |---------|-----|------|-------|--------|  
> | \(v_n\) |     |      |       |        |  
> 2. Déterminer le plus petit rang \(N\) tel que, pour tout \({n \geq N}\), \({v_n \geq 10\,000}\).  
> 3. Conjecturer le comportement de \((v_n)\) quand \(n\) tend vers \({+\infty}\), puis démontrer cette conjecture à l’aide de la définition.  

{{% details title="Solution commentée" closed="true" %}}
**1.**  

| \(n\)   | 1   | 10   | 100   | 1000   |  
|---------|-----|------|-------|--------|  
| \(v_n\) | 1   | 46   | 496   | 4 996  |  

---

**2.** \(v_n \geq 10\,000 \iff 5n - 4 \geq 10\,000 \iff n \geq \dfrac{10\,004}{5} = 2\,000{,}8\).  
Comme \(n\) est entier, cela équivaut à \({n \geq 2\,001}\) : \({N = 2\,001}\).  

---

**3.** Le tableau suggère que \((v_n)\) diverge vers \({+\infty}\).  

Soit \(A\) un réel quelconque. On a :
\[
v_n \geq A \iff 5n - 4 \geq A \iff n \geq \dfrac{A + 4}{5}.
\]

En choisissant un entier \({N \geq \dfrac{A + 4}{5}}\), on a \({v_n \geq A}\) pour tout \({n \geq N}\).  

Ainsi \({\lim\limits_{n \to +\infty} v_n = +\infty}\).
{{% /details %}}
