---
title: 'PGCD'
weight: 7
---
Cours du chapitre 7 : PGCD.

{{< cards >}}
  {{< card link="./01_diviseurs_communs" title="Diviseurs communs" icon="paper-clip">}}
  {{< card link="./02_nombres_premiers_entre_eux" title="Nombres premiers entre eux" icon="paper-clip">}}
  {{< card link="./03_consequences_bezout" title="Conséquences du théorème de Bezout" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**PGCD** - plus grand diviseur commun de \(a\) et \(b\) (non tous deux nuls) ; \({\mathrm{PGCD}(a\,;\,0) = a}\) ; l’ensemble des diviseurs communs est \(\mathcal{D}(\mathrm{PGCD}(a\,;\,b))\).

**Euclide** - \({\mathcal{D}(a\,;\,b) = \mathcal{D}(b\,;\,r) = \mathcal{D}(b\,;\,a - kb)}\) ; le PGCD est le dernier reste non nul de l’algorithme d’Euclide.

**Premiers entre eux** - \({\mathrm{PGCD}(a\,;\,b) = 1}\). Si \({d = \mathrm{PGCD}(a\,;\,b)}\) : \({a = da'}\), \({b = db'}\) avec \(a'\), \(b'\) premiers entre eux.

**Bézout** - \(a\), \(b\) premiers entre eux \({\iff}\) il existe \(u, v\) avec \({au + bv = 1}\). Généralisé : \({\mathrm{PGCD}(a\,;\,b) = d \iff d \mid a}\), \(d \mid b\) et \({au + bv = d}\) pour certains \(u, v\).

**Conséquences** - \({ax + by = c}\) a des solutions entières \({\iff \mathrm{PGCD}(a\,;\,b) \mid c}\) ; \({\mathrm{PGCD}(ka\,;\,kb) = k\,\mathrm{PGCD}(a\,;\,b)}\).

**Gauss** - si \(a \mid bc\) et \({\mathrm{PGCD}(a\,;\,b) = 1}\), alors \(a \mid c\). Corollaire : si \(a \mid c\), \(b \mid c\) et \({\mathrm{PGCD}(a\,;\,b) = 1}\), alors \(ab \mid c\).
