---
title: 'Exercices'
weight: 6
cascade:
  type: docs
---

### Exercice 1

Soit \((w_n)\) la suite définie par \(w_0=1\) et chaque terme est obtenu en **ajoutant 1 au double du carré** du terme précédent.

1. Calculer \(w_1, w_2, w_3\).  
2. Donner la relation entre \(w_{n+1}\) et \(w_n\).

{{% details title="Solution" closed="true" %}}
1. \(w_1=2\cdot 1^2+1=3\), \(w_2=2\cdot 3^2+1=19\), \(w_3=2\cdot 19^2+1=723\).  
2. Pour tout \(n\ge0\), \(\boxed{\,w_{n+1}=2w_n^2+1\,}\).
{{% /details %}}


### Exercice 2

Suites arithmétiques : on donne le premier terme et la raison \(r\).  
Exprimer \(u_n\) en fonction de \(n\), puis calculer \(u_8\).

- \(u_0=5\), \(r=-1\)
- \(u_0=-2\), \(r=\tfrac12\)
- \(u_0=3\), \(r=-\tfrac54\)
- \(u_1=1\), \(r=2\)

{{% details title="Solution" closed="true" %}}
Formule : \(u_n=u_0+nr\). Si \(u_1\) est donné : \(u_n=u_1+(n-1)r\).

- \(u_n=5-n\) ⇒ \(u_8=-3\).  
- \(u_n=-2+\tfrac n2\) ⇒ \(u_8=2\).  
- \(u_n=3-\tfrac{5}{4}n\) ⇒ \(u_8=-7\).  
- \(u_n=1+2(n-1)=2n-1\) ⇒ \(u_8=15\).
{{% /details %}}


### Exercice 3

Suites géométriques : on donne le premier terme et la raison \(q\).  
Exprimer \(u_n\) en fonction de \(n\), puis calculer \(u_5\).

- \(u_0=3\), \(q=2\)
- \(u_0=10\), \(q=\tfrac12\)
- \(u_0=-2\), \(q=-3\) 
- \(u_1=2\), \(q=3\)

{{% details title="Solution" closed="true" %}}
Formule : \(u_n=u_0\,q^n\). Si \(u_1\) est donné : \(u_n=u_1\,q^{\,n-1}\).

- \(u_n=3\cdot 2^n\) ⇒ \(u_5=96\).  
- \(u_n=10\left(\tfrac12\right)^n\) ⇒ \(u_5=\tfrac{5}{16}\).  
- \(u_n=-2(-3)^n\) ⇒ \(u_5=486\).  
- \(u_n=2\cdot 3^{\,n-1}\) ⇒ \(u_5=162\).
{{% /details %}}


### Exercice 4

Calculer les sommes suivantes (sommes arithmétiques) :  
- \(4+7+10+\cdots+64\)
- \(50+52+54+\cdots+1002\)

{{% details title="Solution" closed="true" %}}
Formule : \(S=\dfrac{(a_1+a_n)\,n}{2}\) avec \(a_k=a_1+(k-1)r\).

- \(a_1=4\), \(r=3\), dernier \(=64\).  
\(4+(k-1)3=64 \Rightarrow k=21\).  
\(S=\dfrac{(4+64)\cdot 21}{2}=714\).

- \(a_1=50\), \(r=2\), dernier \(=1002\).  
\(50+(k-1)2=1002 \Rightarrow k=477\).  
\(S=\dfrac{(50+1002)\cdot 477}{2}=250\,902\).
{{% /details %}}


### Exercice 5

Déterminer le sens de variation de la suite \(u_n=n^2-8n+2\) (pour \(n\in\mathbb{N}\)).

{{% details title="Solution" closed="true" %}}
Étudions l’incrément :  
\[
u_{n+1}-u_n=(n+1)^2-8(n+1)+2-(n^2-8n+2)=2n-7.
\]
- Pour \(n=0,1,2,3\), \(2n-7<0\) : la suite **décroît**.  
- Pour \(n\ge 4\), \(2n-7>0\) : la suite **croît**.  

Donc \((u_n)\) est **décroissante** pour \(n=0,1,2,3\) puis **croissante** à partir de \(n\ge4\) (minimum vers \(n=4\)).
{{% /details %}}


### Exercice 6

On définit \(u_0=2\) et, pour tout \(n\in\mathbb{N}\), \(\displaystyle u_{n+1}=\frac{u_n}{3u_n+1}\) (on admet \(u_n\ne0\)).  
On pose \(v_n=\dfrac{1}{u_n}\).

1. Calculer \(u_1,u_2,u_3\) puis \(v_1,v_2,v_3\).  
2. Montrer que \((v_n)\) est arithmétique. Donner son premier terme et sa raison.  
3. En déduire \(v_n\) puis \(u_n\) en fonction de \(n\).

{{% details title="Solution" closed="true" %}}
1. \(u_1=\dfrac{2}{7}\), \(u_2=\dfrac{2}{13}\), \(u_3=\dfrac{2}{19}\).  
Donc \(v_1=\dfrac{7}{2}\), \(v_2=\dfrac{13}{2}\), \(v_3=\dfrac{19}{2}\).

2. \[
v_{n+1}=\frac{1}{u_{n+1}}=\frac{3u_n+1}{u_n}=3+\frac{1}{u_n}=v_n+3.
\]
Ainsi \((v_n)\) est **arithmétique** de raison \(r=3\) et \(v_0=\dfrac{1}{u_0}=\dfrac12\).

3. \(v_n=v_0+3n=\dfrac12+3n=\dfrac{6n+1}{2}\).  
Donc \(\displaystyle u_n=\frac{1}{v_n}=\boxed{\frac{2}{6n+1}}.\)
{{% /details %}}
