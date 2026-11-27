---
title: 'Triangle rectangle et projeté orthogonal'
weight: 3
cascade:
  type: docs
---

## Trigonométrie dans le triangle rectangle

Soit \(ABC\) un triangle rectangle en \(B\) et \(\alpha\) la mesure de l’angle aigu \(\widehat{BAC}\). On rappelle que
\[
\begin{gathered}
\cos \alpha = \dfrac{AB}{AC} \ \left(\dfrac{\text{adjacent}}{\text{hypoténuse}}\right), \qquad \sin \alpha = \dfrac{BC}{AC} \ \left(\dfrac{\text{opposé}}{\text{hypoténuse}}\right), \\[0.3em]
\tan \alpha = \dfrac{BC}{AB} \ \left(\dfrac{\text{opposé}}{\text{adjacent}}\right).
\end{gathered}
\]

> [!TIP] **Propriété**
>
> Pour tout angle aigu de mesure \(\alpha\) :
> \[
\cos^2 \alpha + \sin^2 \alpha = 1,
\]
> où \(\cos^2 \alpha\) désigne \((\cos \alpha)^2\) et \(\sin^2 \alpha\) désigne \((\sin \alpha)^2\).

{{% details title="Démonstration" closed="true" %}}
Avec les notations ci-dessus, d’après le théorème de Pythagore, \({AB^2 + BC^2 = AC^2}\). Donc
\[
\cos^2 \alpha + \sin^2 \alpha = \dfrac{AB^2}{AC^2} + \dfrac{BC^2}{AC^2} = \dfrac{AB^2 + BC^2}{AC^2} = \dfrac{AC^2}{AC^2} = 1.
\]
{{% /details %}}

{{% details title="Exemple" closed="true" %}}
Si \({\cos \alpha = 0{,}6}\), alors \({\sin^2 \alpha = 1 - 0{,}36 = 0{,}64}\) ; comme \({\sin \alpha > 0}\) (angle aigu), \({\sin \alpha = 0{,}8}\), et \({\tan \alpha = \dfrac{0{,}8}{0{,}6} = \dfrac{4}{3}}\).
{{% /details %}}

## Triangle rectangle et cercle

> [!TIP] **Propriétés**
>
> - Dans un triangle rectangle, les médiatrices des deux côtés de l’angle droit se coupent au **milieu de l’hypoténuse**.
> - Si le triangle \(ABC\) est rectangle en \(B\), alors son cercle circonscrit a pour centre le milieu \(I\) de l’hypoténuse \([AC]\) et pour rayon \(\dfrac{AC}{2}\). En particulier, \({IB = IA = IC}\).
> - Réciproquement, si un triangle est inscrit dans un cercle et que l’un de ses côtés est un diamètre de ce cercle, alors il est rectangle, l’angle droit étant opposé à ce diamètre.

![](/images/image390.png)

{{% details title="Démonstration des deux premiers points" closed="true" %}}
Soit \(ABC\) rectangle en \(B\), et \(I\) le milieu de \([AC]\). On note \(D\) le symétrique de \(B\) par rapport à \(I\). Les diagonales \([AC]\) et \([BD]\) du quadrilatère \(ABCD\) ont le même milieu \(I\) : c’est un parallélogramme. Il a un angle droit en \(B\) : c’est un rectangle. Ses diagonales ont donc la même longueur, et \({IA = IC = IB = ID = \dfrac{AC}{2}}\).

Ainsi \(I\) est équidistant de \(A\), \(B\) et \(C\) : il est sur les médiatrices des trois côtés, et c’est le centre du cercle circonscrit.
{{% /details %}}

## Projeté orthogonal

> [!TIP] **Définition**
>
> Soit \(\Delta\) une droite et \(M\) un point du plan.
> - Si \({M \notin \Delta}\), le **projeté orthogonal** de \(M\) sur \(\Delta\) est le point \(H\) d’intersection de \(\Delta\) avec la perpendiculaire à \(\Delta\) passant par \(M\).
> - Si \({M \in \Delta}\), le projeté orthogonal de \(M\) sur \(\Delta\) est \(M\) lui-même.

> [!TIP] **Propriété**
>
> Le projeté orthogonal \(H\) du point \(M\) sur la droite \(\Delta\) est le point de \(\Delta\) le **plus proche** de \(M\). La longueur \(MH\) est appelée **distance du point \(M\) à la droite \(\Delta\)**.

![](/images/image391.png)

{{% details title="Démonstration" closed="true" %}}
Si \({M \in \Delta}\), c’est évident. Sinon, soit \(N\) un point de \(\Delta\) distinct de \(H\). Le triangle \(MHN\) est rectangle en \(H\), donc, d’après le théorème de Pythagore,
\[
MN^2 = MH^2 + HN^2 > MH^2,
\]
car \({HN > 0}\). Les longueurs étant positives, \({MN > MH}\) : tout autre point de \(\Delta\) est plus loin de \(M\) que \(H\).
{{% /details %}}

> [!IMPORTANT] **Remarque**
>
> Dans un triangle \(ABC\), le projeté orthogonal \(H\) de \(A\) sur \((BC)\) est le **pied de la hauteur** issue de \(A\), et l’aire du triangle vaut \({\dfrac{1}{2} \times BC \times AH}\).

> [!TIP] **Théorème de Thalès (formulation par projection, admis)**
>
> Soit \(A\), \(B\), \(C\) trois points distincts alignés, et \(A'\), \(B'\), \(C'\) leurs projetés orthogonaux respectifs sur une droite \(\Delta\) qui n’est pas perpendiculaire à \((AB)\). Alors
> \[
\dfrac{AB}{AC} = \dfrac{A'B'}{A'C'}.
\]

![](/images/image392.png)

## Résoudre des problèmes

> [!NOTE] **Méthode 1 - Exploiter les propriétés du triangle rectangle**
>
> 1. Un triangle \(EFG\) est rectangle en \(F\), avec \({EG = 13}\) et \({\sin \widehat{FEG} = \dfrac{5}{13}}\). Calculer \(\cos \widehat{FEG}\), puis les longueurs \(FG\) et \(EF\).
> 2. Soit \([AB]\) un segment de longueur \(10\) et \(\mathcal{C}\) le cercle de diamètre \([AB]\). Un point \(M\) de \(\mathcal{C}\) vérifie \({AM = 6}\). Calculer \(BM\).

{{% details title="Solution commentée" closed="true" %}}
1. On note \({\alpha = \widehat{FEG}}\), angle aigu. \({\cos^2 \alpha = 1 - \sin^2 \alpha = 1 - \dfrac{25}{169} = \dfrac{144}{169}}\), et \({\cos \alpha > 0}\), donc \({\cos \alpha = \dfrac{12}{13}}\).

   Le côté opposé à \(\alpha\) est \([FG]\) et le côté adjacent est \([EF]\) : \({FG = EG \times \sin \alpha = 13 \times \dfrac{5}{13} = 5}\) et \({EF = EG \times \cos \alpha = 12}\). (Contrôle : \({5^2 + 12^2 = 169 = 13^2}\).)
2. \(M\) est sur le cercle de diamètre \([AB]\) et distinct de \(A\) et \(B\) : le triangle \(AMB\) est rectangle en \(M\). D’après le théorème de Pythagore, \({BM^2 = AB^2 - AM^2 = 100 - 36 = 64}\), donc \({BM = 8}\).
{{% /details %}}

> [!NOTE] **Méthode 2 - Utiliser un projeté orthogonal**
>
> Soit \(ABC\) un triangle équilatéral de côté \(6\), et \(H\) le projeté orthogonal de \(A\) sur \((BC)\).
> 1. Justifier que \(H\) est le milieu de \([BC]\).
> 2. Calculer la distance du point \(A\) à la droite \((BC)\), puis l’aire du triangle.

{{% details title="Solution commentée" closed="true" %}}
1. \({AB = AC}\) : \(A\) est sur la médiatrice de \([BC]\). Cette médiatrice est perpendiculaire à \((BC)\) et passe par \(A\) : c’est la perpendiculaire à \((BC)\) issue de \(A\). Elle coupe \((BC)\) en \(H\), qui est donc le milieu de \([BC]\) : \({BH = 3}\).
2. Le triangle \(ABH\) est rectangle en \(H\) : \({AH^2 = AB^2 - BH^2 = 36 - 9 = 27}\), donc \({AH = \sqrt{27} = 3\sqrt{3} \approx 5{,}2}\). C’est la distance de \(A\) à \((BC)\). L’aire vaut \({\dfrac{1}{2} \times 6 \times 3\sqrt{3} = 9\sqrt{3} \approx 15{,}6}\).
{{% /details %}}
