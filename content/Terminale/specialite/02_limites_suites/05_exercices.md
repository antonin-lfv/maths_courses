---
title: 'Exercices'
weight: 5
cascade:
  type: docs
---

### Exercice 1

Déterminer la limite, quand \(n \to +\infty\), de chacune des suites suivantes :
1. \(\displaystyle u_n = \frac{3n + 1}{2 - \frac1n}\) (pour \(n \geq 1\))
2. \(\displaystyle v_n = \frac{5}{n^3 + 2n + 4}\)
3. \(\displaystyle w_n = \frac{3 + \frac{1}{\sqrt{n}}}{4 - \frac{2}{n^2}}\) (pour \(n \geq 1\))
4. \(\displaystyle x_n = \frac{6}{\frac{1}{n} - \frac{4}{n^2}}\) (pour \(n \geq 5\))

{{% details title="Solution" closed="true" %}}
**1.** Numérateur : \(3n + 1 \to +\infty\). Dénominateur : \(2 - \tfrac1n \to 2\), réel non nul.  
Par quotient : \(\boxed{\lim u_n = +\infty}\).

**2.** Par somme, le dénominateur \(n^3 + 2n + 4 \to +\infty\) ; le numérateur est constant, égal à 5.  
Par quotient : \(\boxed{\lim v_n = 0}\) (par valeurs positives).

**3.** \(\dfrac{1}{\sqrt{n}} \to 0\) et \(\dfrac{2}{n^2} \to 0\), donc le numérateur tend vers 3 et le dénominateur vers 4 (non nul).  
Par quotient : \(\boxed{\lim w_n = \tfrac{3}{4}}\).

**4.** Le dénominateur tend vers \(0 - 0 = 0\) : il faut étudier son signe. On factorise par \(\frac1n\) :  
\[
\frac{1}{n} - \frac{4}{n^2} = \frac{1}{n}\left(1 - \frac{4}{n}\right), \quad \text{donc} \quad x_n = \frac{6n}{1 - \frac{4}{n}}.
\]
Pour \(n \geq 5\), \(1 - \frac4n > 0\). Comme \(6n \to +\infty\) et \(1 - \frac4n \to 1\), par quotient :  
\(\boxed{\lim x_n = +\infty}\).
{{% /details %}}

### Exercice 2

On considère la suite \((u_n)\) définie pour tout entier naturel \(n\) par \(u_n = 4n^2 - 9n + 1\).

1.  
   a. Sans transformer \(u_n\), expliquer pourquoi les règles opératoires mènent à une **forme indéterminée**.  
   b. Factoriser \(4n^2 - 9n + 1\) par son terme de plus haut degré, \(4n^2\), puis en déduire la limite de \((u_n)\).

2. Par la même méthode, déterminer les limites des suites \((v_n)\), \((w_n)\) et \((x_n)\) définies pour tout entier naturel \(n\) par :  
   a. \(v_n = -3n^2 + 5n + 2\)  
   b. \(w_n = 2n^3 - 6n^2 + n - 8\)  
   c. \(x_n = 6n - 2n^3 + 1\)

{{% details title="Solution" closed="true" %}}
**1.a** Quand \(n \to +\infty\) : \(4n^2 \to +\infty\) et \(-9n \to -\infty\).  
On obtient « \(+\infty - \infty\) » : c’est une **forme indéterminée**.

**1.b** Pour \(n \geq 1\) :
\[
u_n = 4n^2\left(1 - \frac{9}{4n} + \frac{1}{4n^2}\right).
\]
Le facteur entre parenthèses tend vers 1 et \(4n^2 \to +\infty\) ; par produit, \(\boxed{\lim u_n = +\infty}\).

**2.a**  
\[
v_n = n^2\left(-3 + \frac{5}{n} + \frac{2}{n^2}\right) \quad (\text{la parenthèse tend vers } -3 < 0),
\]
donc \(\boxed{\lim v_n = -\infty}\).

**2.b**  
\[
w_n = n^3\left(2 - \frac{6}{n} + \frac{1}{n^2} - \frac{8}{n^3}\right) \quad (\text{la parenthèse tend vers } 2 > 0),
\]
donc \(\boxed{\lim w_n = +\infty}\).

**2.c** Le terme de plus haut degré est \(-2n^3\) :
\[
x_n = n^3\left(\frac{6}{n^2} - 2 + \frac{1}{n^3}\right) \quad (\text{la parenthèse tend vers } -2 < 0),
\]
donc \(\boxed{\lim x_n = -\infty}\).

*Bilan* : la limite d’une suite polynôme en \(n\) est celle de son terme de plus haut degré.
{{% /details %}}

### Exercice 3

Déterminer la limite éventuelle de chacune des suites suivantes, définies pour tout entier naturel \(n\) :
1. \(\displaystyle u_n = (0{,}9)^n\)
2. \(\displaystyle v_n = (1{,}01)^n\)
3. \(\displaystyle w_n = \frac{1}{7^n}\)
4. \(\displaystyle z_n = \frac{8^n}{5^n}\)
5. \(\displaystyle t_n = (-3)^n\)

{{% details title="Solution" closed="true" %}}
Rappel : pour un réel \(q\),  
- si \(-1 < q < 1\), \(\lim q^n = 0\) ;  
- si \(q > 1\), \(\lim q^n = +\infty\) ;  
- si \(q \leq -1\), la suite \((q^n)\) n’a pas de limite.

1. \(0 < 0{,}9 < 1\) \(\Longrightarrow\) \(\boxed{\lim u_n = 0}\).  
2. \(1{,}01 > 1\) \(\Longrightarrow\) \(\boxed{\lim v_n = +\infty}\) (même si la croissance est lente au début).  
3. \(w_n = \left(\tfrac17\right)^n\) avec \(0 < \tfrac17 < 1\) \(\Longrightarrow\) \(\boxed{\lim w_n = 0}\).  
4. \(z_n = \left(\dfrac85\right)^n\) avec \(\dfrac85 > 1\) \(\Longrightarrow\) \(\boxed{\lim z_n = +\infty}\).  
5. \(-3 \leq -1\) \(\Longrightarrow\) \((t_n)\) **n’a pas de limite**.
{{% /details %}}

### Exercice 4

On considère la suite \((v_n)\) définie pour tout entier \(n \geq 1\) par
\[
v_n = 2 + \frac{\cos(3n)}{n}.
\]

1. Justifier que, pour tout \(n \geq 1\) :
\[
2 - \frac{1}{n} \le v_n \le 2 + \frac{1}{n}.
\]
2. En déduire que la suite \((v_n)\) converge et préciser sa limite.

{{% details title="Solution" closed="true" %}}
**1. Encadrement.** Pour tout réel \(x\), \(-1 \le \cos x \le 1\) ; en particulier \(-1 \le \cos(3n) \le 1\).  
En divisant par \(n > 0\) :
\[
-\frac{1}{n} \le \frac{\cos(3n)}{n} \le \frac{1}{n}.
\]
En ajoutant 2 :
\[
2 - \frac{1}{n} \le v_n \le 2 + \frac{1}{n}.
\]

**2. Convergence.** Comme \(\dfrac{1}{n} \to 0\), les deux suites qui encadrent \(v_n\) tendent vers 2.  
D’après le **théorème des gendarmes**, \((v_n)\) converge et \(\boxed{\lim v_n = 2}\).
{{% /details %}}

### Exercice 5

On considère la suite \((u_n)\) définie par \(u_0 = 5\) et, pour tout entier naturel \(n\),
\[
u_{n+1} = 3u_n - 2.
\]

#### Partie A
1. Démontrer que la suite \((u_n)\) est minorée par 5.  
2. En déduire son sens de variation.  
3. Ces informations permettent-elles de conclure sur le comportement de \((u_n)\) en \(+\infty\) ?  
4. Conjecturer ce comportement à l’aide de la calculatrice.

#### Partie B
On pose, pour tout entier naturel \(n\), \(v_n = u_n - 1\).  
1. Démontrer que la suite \((v_n)\) est géométrique ; préciser son premier terme et sa raison.  
2. En déduire que \(u_n = 4 \times 3^n + 1\) pour tout \(n \in \mathbb{N}\).  
3. Déterminer la limite de la suite \((u_n)\).

{{% details title="Solution" closed="true" %}}
**Partie A**  
1. On raisonne par récurrence sur la propriété \(P(n)\) : « \(u_n \geq 5\) ».  
   - **Initialisation.** \(u_0 = 5 \geq 5\).  
   - **Hérédité.** Soit \(k\) un entier naturel ; on suppose \(u_k \geq 5\). Alors  
   \[
   u_{k+1} = 3u_k - 2 \geq 3 \times 5 - 2 = 13 \geq 5.
   \]
   - **Conclusion.** Pour tout entier naturel \(n\), \(u_n \geq 5\).  

2. Pour tout \(n\), \(u_{n+1} - u_n = 3u_n - 2 - u_n = 2u_n - 2\). Comme \(u_n \geq 5\), on a \(2u_n - 2 \geq 8 > 0\).  
   La suite \((u_n)\) est donc **croissante**.

3. Une suite croissante et minorée peut converger ou diverger vers \(+\infty\) : il faudrait savoir si elle est majorée. On ne peut **pas** conclure.  

4. À la calculatrice : \(u_1 = 13\), \(u_2 = 37\), \(u_3 = 109\), \(u_4 = 325\)… La suite semble diverger vers \(+\infty\).

---

**Partie B**  
1. Pour tout entier naturel \(n\) :  
   \[
   v_{n+1} = u_{n+1} - 1 = 3u_n - 2 - 1 = 3u_n - 3 = 3(u_n - 1) = 3v_n.
   \]  
   \((v_n)\) est géométrique de raison 3 et de premier terme \(v_0 = u_0 - 1 = 4\).  

2. On en déduit \(v_n = 4 \times 3^n\), puis, comme \(u_n = v_n + 1\) :  
   \[
   u_n = 4 \times 3^n + 1.
   \]

3. Comme \(3 > 1\), \(\lim 3^n = +\infty\) ; par produit puis par somme, \(\boxed{\lim u_n = +\infty}\).
{{% /details %}}
