---
title: 'Échantillonnage'
weight: 12
---
Cours du chapitre 12 : Échantillonnage.

{{< cards >}}
  {{< card link="./01_echantillon" title="Échantillon et simulation" icon="paper-clip">}}
  {{< card link="./02_principe_estimation" title="Principe de l’estimation" icon="paper-clip">}}
  {{< card link="./03_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Échantillon** - \(n\) répétitions identiques et indépendantes d’une expérience ; fréquence \(f\) de l’événement étudié. Simulation : `random()`, `randint(a, b)`, `ALEA()`.

**Fluctuation et loi des grands nombres** - \(f\) varie d’un échantillon à l’autre ; quand \(n\) devient grand, \(f\) se rapproche de \(p\).

**Intervalle de fluctuation** - pour au moins \(95\,\%\) des échantillons de taille \(n\) (assez grande), \({|f - p| \leq \dfrac{1}{\sqrt{n}}}\). Permet de juger si un échantillon est compatible avec un modèle.

**Estimation** - si \(p\) est inconnue, \({p \in \left[f - \dfrac{1}{\sqrt{n}}\,;\,f + \dfrac{1}{\sqrt{n}}\right]}\) pour au moins \(95\,\%\) des échantillons ; longueur \(\dfrac{2}{\sqrt{n}}\), d’où le choix de \(n\) selon la précision voulue.
