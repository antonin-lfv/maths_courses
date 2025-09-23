---
title: 'Les suites'
cascade:
  type: docs
toc: false
---

## Conjecturer le comportement d’une suite à partir du graphe \((n, U_n)\)

- Si une suite est définie par \(U_n = f(n)\), on peut représenter ses points \((n, U_n)\) sur la courbe de \(f\).  
- L’observation du graphe permet de conjecturer la croissance, les bornes et la limite de la suite.  

{{% details title="Voir l\'exemple" closed="true" %}}
\[
U_n = -n^2 + 6n - 5
\]  
La suite croît jusqu’à \(n=3\) (max = 4), puis décroît et tend vers \(-\infty\).

![image](/images/suite_un.png)
{{% /details %}}


## Conjecturer le comportement d’une suite avec le graphe « Web »

- Si une suite est définie par \(U_{n+1} = f(U_n)\), on peut conjecturer son comportement grâce au **graphe Web**, construit avec la courbe \(y=f(x)\) et la droite \(y=x\).  
- Les marches de l’« escalier » ou de « l’escargot » permettent d’anticiper la croissance et la limite de la suite.  

{{% details title="Voir l\'exemple" closed="true" %}}
Suite définie par  
\[
U_{n+1} = \frac{3U_n+4}{-2U_n+9}, \quad U_0=0
\]  
On observe que \((U_n)\) est croissante, reste dans \([0;1]\) et converge vers 1.  

![image](/images/tableau_variations.png)  
![image](/images/web_suite.png)
{{% /details %}}

## Raisonner par récurrence

Pour prouver qu’une propriété \((P_n)\) est vraie pour tout \(n \geq n_0\), on utilise la **récurrence** en 3 étapes :  
1. **Initialisation** : vérifier que \((P_{n_0})\) est vraie.  
2. **Hérédité** : montrer que \((P_n)\) vraie \(\Rightarrow (P_{n+1})\) vraie.  
3. **Conclusion** : on en déduit que \((P_n)\) est vraie pour tout \(n \geq n_0\).  

{{% details title="Voir l\'exemple" closed="true" %}}
Suite définie par  
$$
U_{n+1} = \frac{3U_n+4}{-2U_n+9}, \quad U_0=0
$$  
On veut montrer par récurrence que \((P_n): 0 \leq U_n \leq U_{n+1} < 1\).

### 1. Initialisation
- Pour \(n=0\) :  
\[
U_0 = 0, \quad U_1 = f(U_0) = f(0) = \tfrac{4}{9}
\]  
Donc \(0 \leq U_0 \leq U_1 < 1\).  
Ainsi \((P_0)\) est vraie. 

---

### 2. Hérédité
On suppose \((P_n)\) vraie, c’est-à-dire :  
\[
0 \leq U_n \leq U_{n+1} < 1
\]  
On veut montrer que :  
\[
0 \leq U_{n+1} \leq U_{n+2} < 1
\]  
c’est-à-dire \((P_{n+1})\).  

- Comme \(f(x) = \frac{3x+4}{-2x+9}\) est **strictement croissante** sur \([0;1]\), on a :  
\[
f(0) \leq f(U_n) \leq f(U_{n+1}) < f(1)
\]  
- Or \(f(0) = \tfrac{4}{9}, \quad f(1) = 1\).  
Donc :  
\[
\frac{4}{9} \leq U_{n+1} \leq U_{n+2} < 1
\]  
On obtient bien \((P_{n+1})\).

---

### 3. Conclusion
Par récurrence, \((P_n)\) est vraie pour tout \(n \in \mathbb{N}\).  
Donc \((U_n)\) est **croissante** et reste dans \([0;1]\).  
Elle converge donc vers **1**.  
{{% /details %}}

## Suites arithmétiques et géométriques : utiliser les formules

| | Suite arithmétique | Suite géométrique |
|:---|:---|:---|
| Définition | \(U_{n+1} = U_n + r\) | \(U_{n+1} = qU_n, \, q \neq 1\) |
| Expression de \(U_n\) | \(U_n = U_p + (n-p)r\) | \(U_n = q^{\,n-p} U_p\) |
| Somme de termes consécutifs | \((\text{Nb de T}) \times \dfrac{1^{er}T + DT}{2}\) | \(U_p \dfrac{1 - q^{\text{Nb de T}}}{1 - q}\) |
| À connaître par cœur | \(1+2+\cdots+k = \dfrac{k(k+1)}{2}\) | \(1+q+\cdots+q^k = \dfrac{1-q^{k+1}}{1-q}\) |

*(1er T = premier terme, DT = dernier terme, Nb de NT = nombre de termes)*

**Principe**: On identifie les données de la suite (raison, premier terme, etc.) et on remplace dans la formule adaptée pour obtenir l’inconnue.

{{% details title="Voir l\'exemple" closed="true" %}}
Suite définie par :  
$$
U_{n+1} = U_n + 2, \quad U_3 = 0
$$

1. **Expression explicite**  
C’est une suite arithmétique de raison \(r=2\).  
$$
U_n = U_3 + (n-3) \times 2 = 2n - 6
$$

1. **Somme \(S = U_4 + U_5 + \cdots + U_{20}\)**  
- Avec la formule de la somme :  
$$
S = 17 \times \frac{U_4 + U_{20}}{2} = 17 \times \frac{2 + 34}{2} = 306
$$

- Avec la formule des entiers :  
$$
S = 2 + 4 + \cdots + 34 = 2(1+2+\cdots+17) = 2 \times \frac{17 \times 18}{2} = 306
$$
{{% /details %}}

## Montrer qu’une suite est arithmétique ou géométrique

- Pour montrer qu’une suite \((V_n)\) est **arithmétique**, on prouve que \(V_{n+1}-V_n\) est constant.  
- Pour montrer qu’elle est **géométrique**, on prouve que \(\frac{V_{n+1}}{V_n}\) est constant.  
- Si \((U_n)\) n’est pas directement arithmétique ou géométrique, on construit une suite auxiliaire \((V_n)\) à partir d’elle.


{{% details title="Voir l\'exemple" closed="true" %}}
On considère :  
$$
U_{n+1} = \frac{3U_n+4}{-2U_n+9}, \quad U_0=0, \quad 
V_n = \frac{U_n - 1}{U_n - 2}
$$

#### Étape 1 : Vérification de l’existence
Comme \(U_n \in [0;1[\), on a \(U_n \neq 2\) et \(U_n \neq 1\).  
Donc \(V_n\) est bien défini et ne s’annule pas.

---

#### Étape 2 : Montrer que \(V_n\) est géométrique
On calcule :
$$
\frac{V_{n+1}}{V_n} = \frac{\tfrac{U_{n+1}-1}{U_{n+1}-2}}{\tfrac{U_n-1}{U_n-2}}
= \frac{5}{7}
$$  
Donc \((V_n)\) est une suite **géométrique** de raison \(\tfrac{5}{7}\).

---

#### Étape 3 : Expression de \(V_n\)
Le premier terme est :
$$
V_0 = \frac{U_0-1}{U_0-2} = \frac{-1}{-2} = \frac{1}{2}
$$  
Donc :
$$
V_n = \left(\frac{5}{7}\right)^n \times \frac{1}{2}
$$

---

#### Étape 4 : Revenir à \(U_n\)
On utilise la relation :
$$
V_n = \frac{U_n - 1}{U_n - 2}
$$  
On isole \(U_n\) :
$$
U_n = \frac{2V_n - 1}{V_n - 1}
$$  
Puis on remplace \(V_n\) :
$$
U_n = \frac{2\left(\frac{5}{7}\right)^n \cdot \frac{1}{2} - 1}{\left(\frac{5}{7}\right)^n \cdot \frac{1}{2} - 1}
$$
{{% /details %}}

## Étudier le comportement global d’une suite avec \(U_n = f(n)\)

- Quand \(U_n = f(n)\), on étudie la fonction \(f\) (variations, limites) pour en déduire le comportement de la suite.  
- Si \(f\) est croissante, la suite est minorée par \(U_{n_0}\) ; si \(f\) est décroissante, la suite est majorée par \(U_{n_0}\).  

{{% details title="Voir l\'exemple" closed="true" %}}
Soit :  
$$
U_n = -n^2 + 6n - 5
$$  
On avait conjecturé que \((U_n)\) n’est pas monotone, décroît à partir de \(n=3\), est majorée par 4, mais non minorée, et diverge vers \(-\infty\).  

**Démonstration :**  
- \(f(x) = -x^2 + 6x - 5\), définie et dérivable sur \([0,+\infty[\).  
- \(f'(x) = -2x+6\), donc \(f\) croît jusqu’à \(x=3\), puis décroît.  
- Tableau de variation :  

![image](/images/tableau1.png)

> [!TIP] Remarque
> En factorisant par \(x^2\), on fait apparaître le terme dominant :  
> $$
f(x) = -x^2 + 6x - 5 = x^2\left(-1 + \frac{6}{x} - \frac{5}{x^2}\right)
$$  
> Comme \(-1\) domine dans la parenthèse, on en déduit :  
> $$
\lim_{x \to +\infty} f(x) = -\infty
$$

- Limite : \(\lim_{x \to +\infty} f(x) = -\infty\).  
- Donc \((U_n)\) est **majorée par 4**, non minorée, et décroissante à partir de \(n=3\).  

Conclusion : \((U_n)\) diverge vers \(-\infty\).  
{{% /details %}}

## Étudier une suite quand on ne peut pas analyser directement \(f\)

- On étudie le signe de \(U_{n+1} - U_n\) pour savoir si la suite est croissante ou décroissante.  
- On utilise ensuite des encadrements pour déterminer si la suite est bornée.  

{{% details title="Voir l\'exemple" closed="true" %}}
Suite définie par :  
$$
U_n = \frac{1}{n} + \frac{1}{n+1} + \cdots + \frac{1}{2n}, \quad (n \geq 1)
$$  
On avait conjecturé que \((U_n)\) est décroissante, majorée par \(U_1 = 1,5\), et minorée par 0.  

#### Monotonicité
On calcule :  
$$
U_{n+1} - U_n = \frac{1}{2n+2} + \frac{1}{2n+1} - \frac{1}{n} = \frac{-3n-2}{(2n+2)(2n+1)n} < 0
$$  
Donc \((U_n)\) est **décroissante**.  

#### Majoration
Comme elle est décroissante, \((U_n)\) est **majorée** par son premier terme \(U_1 = 1,5\).  

#### Minoration par encadrement
Chaque terme de la somme \(U_n\) est \(\geq \tfrac{1}{2n}\).  
Il y a \(n+1\) termes, donc :  
$$
(n+1)\frac{1}{2n} \leq U_n
$$  
et comme chaque terme est \(\leq \frac{1}{n}\), on obtient :  
$$
U_n \leq \frac{1}{2} + \frac{1}{2n}
$$  

#### Conclusion
Finalement :  
$$
\frac{1}{2} \leq U_n \leq \frac{3}{2}
$$  
Donc \((U_n)\) est **décroissante et bornée**.  
{{% /details %}}

## Étudier une suite \(U_{n+1} = f(U_n)\) avec \(f\) dérivable et croissante

- Si \(f\) est dérivable et croissante sur un intervalle \(I\), et que \(U_n \in I\), on montre par récurrence que la suite est **monotone** et éventuellement **bornée**.  
- On en déduit ensuite le comportement global (convergence ou divergence).  

{{% details title="Voir l\'exemple" closed="true" %}}
Suite définie par :  
$$
U_{n+1} = \frac{3U_n+4}{-2U_n+9}, \quad U_0 = 0
$$  
On veut montrer que :  
$$
(P_n) : \ 0 \leq U_n \leq U_{n+1} < 1
$$

- **Initialisation :** \(U_0=0, \ U_1 = \tfrac{4}{9}\), donc \((P_0)\) est vraie.  
- **Hérédité :** si \(0 \leq U_n \leq U_{n+1} < 1\), alors comme \(f\) est croissante sur \([0;1]\), on a :  
$$
0 \leq U_{n+1} \leq U_{n+2} < 1
$$  
donc \((P_{n+1})\) est vraie.  
- **Conclusion :** par récurrence, \((P_n)\) est vraie pour tout \(n \in \mathbb{N}\).  

Donc \((U_n)\) est **croissante**, bornée par 1, et converge vers 1.  
{{% /details %}}

## Utiliser les définitions des limites (asymptotique des suites)

- Une suite \((U_n)\) **converge vers L** si :  
$$
\forall \varepsilon > 0, \ \exists n_0 \in \mathbb{R}, \ \forall n \geq n_0, \ |U_n - L| < \varepsilon
$$

- Une suite diverge vers \(+\infty\) (resp. \(-\infty\)) si à partir d’un certain rang, tous ses termes dépassent (resp. sont en-dessous) d’un seuil fixé.  

> [!NOTE] Cas d’application
> On utilise ces définitions pour démontrer rigoureusement convergence, divergence ou comportement asymptotique.  

{{% details title="Voir l\'exemple" closed="true" %}}
On admet que tout ensemble non vide et majoré de \(\mathbb{R}\) admet une borne supérieure \(\sup A\).  
Considérons une suite croissante \((U_n)\) majorée.

1. **Montrer que \((U_n)\) converge vers \(\sup A\).**  
   - Soit \(\varepsilon > 0\).  
   - Comme \(\sup A\) est le plus petit des majorants, \(\alpha = \sup A - \varepsilon\) n’est pas un majorant.  
   - Donc il existe un rang \(n_0\) tel que \(\alpha < U_{n_0}\).  
   - Comme la suite est croissante :  
   $$
   \forall n \geq n_0, \quad \sup A - \varepsilon < U_n \leq \sup A
   $$  
   - D’où : \(|U_n - \sup A| < \varepsilon\).  
   Ainsi \((U_n)\) converge vers \(\sup A\).

2. **Montrer par l’absurde que tous les termes sont \(\leq \sup A\).**  
   - Supposons qu’un terme \(U_{n_0} > \sup A\).  
   - Alors \(\sup A\) n’est pas un majorant, contradiction.  
   - Donc tous les \(U_n \leq \sup A\).  
{{% /details %}}

## Étudier le comportement asymptotique d’une suite \(U_n = f(n)\)

On utilise les théorèmes de comparaison (limite de \(V_n\) connue, encadrement, gendarmes) et le théorème sur les puissances \(q^n\).  

> [!CAUTION] Attention
> Une suite peut avoir une limite alors que la fonction associée n’en a pas.  
> Par exemple, la fonction \(f(x) = \sin(2\pi x + \tfrac{1}{x})\) n’a pas de limite en \(+\infty\),  
mais la suite \(U_n = \sin(2\pi n + \tfrac{1}{n}) = \sin(\tfrac{1}{n}) \to 0\).

**Rappels théorèmes de comparaison**  
- Si \(V_n \leq U_n\) et \(\lim V_n = +\infty \implies \lim U_n = +\infty\).  
- Si \(U_n \leq V_n\) et \(\lim V_n = -\infty \implies \lim U_n = -\infty\).  
- Si \(|U_n - L| \leq V_n\) avec \(\lim V_n = 0 \implies \lim U_n = L\).  
- Si \(V_n \leq U_n \leq W_n\) et \(\lim V_n = \lim W_n = L \implies \lim U_n = L\).  

**Rappels théorème sur \(q^n\)**
- Si \(|q| < 1 \implies \lim q^n = 0\).  
- Si \(q = 1 \implies \lim q^n = 1\).  
- Si \(q > 1 \implies \lim q^n = +\infty\).  
- Si \(q \leq -1 \implies \lim q^n\) n’existe pas.  

{{% details title="Voir l\'exemple" closed="true" %}}
Soit la suite :
$$
U_n = \frac{2n^2 - 3}{n^2 + 1} + \left(\frac{3}{4}\right)^n
$$  
Alors:
- Comme \(-1 < \tfrac{3}{4} < 1 \implies \left(\tfrac{3}{4}\right)^n \to 0\).  
- Pour la fraction :  
$$
\frac{2n^2 - 3}{n^2 + 1} = \frac{n^2(2 - \tfrac{3}{n^2})}{n^2(1 + \tfrac{1}{n^2})} \to 2
$$  
- Donc \(\lim U_n = 2\).  
{{% /details %}}

## Utiliser les théorèmes de convergence monotone

- Si une suite est **croissante et majorée** ou **décroissante et minorée**, alors elle converge.  
- Si elle est croissante non majorée, elle tend vers \(+\infty\).  
- Si elle est décroissante non minorée, elle tend vers \(-\infty\).  

{{% details title="Voir l\'exemple" closed="true" %}}
On a vu [ICI](#etudier-une-suite-quand-on-ne-peut-pas-analyser-directement-f) que la suite :
$$
U_n = \frac{1}{n} + \frac{1}{n+1} + \cdots + \frac{1}{2n}, \quad (n \geq 1)
$$  
est **décroissante** et vérifie :  
$$
\frac{1}{2} \leq U_n \leq \frac{3}{2}
$$  

- Comme \((U_n)\) est **décroissante** et **minorée**, elle converge d’après le théorème de convergence monotone.  
- La limite existe, mais sa valeur exacte n’est pas déterminée ici.  
{{% /details %}}