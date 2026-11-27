---
title: 'Modéliser une situation de proportionnalité par une fonction linéaire'
weight: 4
cascade:
  type: docs
---

## Proportionnalité et fonction linéaire

> [!TIP] **Propriété**
>
> Une situation de proportionnalité de coefficient de proportionnalité \(m\) peut être traduite par une fonction linéaire de coefficient \(m\) : la grandeur \(y\) est l’image de la grandeur \(x\) par \({f : x \mapsto mx}\).

{{% details title="Exemple" closed="true" %}}
Un cycliste roule à la vitesse constante de \(15\) km/h. La distance parcourue \(d(t)\), en km, est proportionnelle à la durée \(t\), en heures :

| \(t\) (h) | \(0\) | \(1\) | \(2\) | \(3{,}5\) | \(4\) |
|---|---|---|---|---|---|
| \(d(t)\) (km) | \(0\) | \(15\) | \(30\) | \(52{,}5\) | \(60\) |

On a \({d(t) = 15t}\) : la fonction \(d\) est la fonction linéaire de coefficient \(15\). Sa représentation graphique est une droite passant par l’origine ; on y lit par exemple qu’en \(2\) h, le cycliste parcourt \(30\) km.

![](/images/image446.png)
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Inversement, si une grandeur s’exprime en fonction d’une autre par une fonction linéaire, ces deux grandeurs sont proportionnelles. Ce n’est pas le cas avec une fonction affine non linéaire (\({p \neq 0}\)).

## Fonctions linéaires et pourcentages

> [!TIP] **Propriété**
>
> Appliquer une évolution de \(t\,\%\) revient à appliquer une fonction linéaire :
> - une augmentation de \(t\,\%\) correspond à \({x \mapsto \left(1 + \dfrac{t}{100}\right)x}\) ;
> - une diminution de \(t\,\%\) correspond à \({x \mapsto \left(1 - \dfrac{t}{100}\right)x}\).

> [!NOTE] **Exercice résolu**
>
> Pendant les soldes, un magasin applique une remise de \(35\,\%\) sur tous les articles.
> 1. Exprimer le prix soldé \(f(x)\) en fonction du prix initial \(x\).
> 2. Calculer le prix soldé d’un article à \(80\) €.
> 3. Un article soldé coûte \(39\) €. Quel était son prix initial ?

{{% details title="Solution commentée" closed="true" %}}
1. Une baisse de \(35\,\%\) revient à multiplier par \({1 - 0{,}35 = 0{,}65}\) : \({f(x) = 0{,}65x}\) (fonction linéaire de coefficient \(0{,}65\)).
2. \({f(80) = 0{,}65 \times 80 = 52}\) €.
3. On cherche l’antécédent de \(39\) : \({0{,}65x = 39}\), donc \({x = \dfrac{39}{0{,}65} = 60}\) €.
{{% /details %}}
