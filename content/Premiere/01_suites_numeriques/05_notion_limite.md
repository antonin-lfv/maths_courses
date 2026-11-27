---
title: 'Notion de limite d’une suite'
weight: 5
cascade:
  type: docs
---

Chercher la limite d’une suite \((u_n)\), c’est observer ce que deviennent ses termes \(u_n\) lorsque l’entier \(n\) prend des valeurs de plus en plus grandes, aussi grandes qu’on le souhaite : on dit que l’on fait « tendre \(n\) vers \({+\infty}\) ».  
En Première, on se contente de **conjecturer** cette limite à l’aide d’un graphique ou d’un tableau de valeurs obtenus avec une calculatrice, un tableur ou un programme Python.  

## Limite finie

On considère la suite \((u_n)\) définie pour tout entier \({n \geq 1}\) par \({u_n = \dfrac{1}{n}}\).

![](/images/image144.png)

| \(n\)   | 100   | 1 000   | 100 000   |  
|---------|-------|---------|-----------|  
| \(u_n\) | 0,01  | 0,001   | 0,00001   |  

Les termes \(u_n\) deviennent aussi proches de 0 qu’on le veut pourvu que \(n\) soit assez grand.  
On dit que la suite \((u_n)\) **tend vers 0** quand \(n\) tend vers \({+\infty}\), et on écrit  
\[
\lim_{n \to +\infty} u_n = 0.
\]

---

On considère la suite \((v_n)\) définie pour tout entier naturel \(n\) par \({v_n = \dfrac{3n+2}{n+1}}\).

![](/images/image145.png)

| \(n\)   | 100      | 1 000    | 100 000   |  
|---------|----------|----------|-----------|  
| \(v_n\) | 2,9901   | 2,9990   | 2,99999   |  

Les termes \(v_n\) semblent se rapprocher autant qu’on le veut de 3.  
On dit que la suite \((v_n)\) **tend vers 3** quand \(n\) tend vers \({+\infty}\), et on écrit  
\[
\lim_{n \to +\infty} v_n = 3.
\]

## Limite infinie

On considère la suite \((u_n)\) définie pour tout entier naturel \(n\) par \({u_n = n^2}\).  

![](/images/image146.png)

Les termes finissent par dépasser n’importe quel nombre, aussi grand soit-il.  
On écrit \({\lim\limits_{n \to +\infty} u_n = +\infty}\).  

---

On considère la suite arithmétique \((w_n)\) de premier terme 10 et de raison \({-3}\).  

![](/images/image147.png)

Les termes sont négatifs à partir d’un certain rang et deviennent aussi grands qu’on le veut en valeur absolue.  
On écrit \({\lim\limits_{n \to +\infty} w_n = -\infty}\).  

## Pas de limite

Certaines suites n’ont pas de limite. C’est le cas de la suite \((u_n)\) définie pour tout \({n \in \mathbb{N}}\) par \({u_n = (-1)^n}\) : ses termes valent alternativement 1 et \({-1}\), sans jamais se rapprocher d’une valeur unique.  

![](/images/image148.png)
