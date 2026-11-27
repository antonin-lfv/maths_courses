---
title: 'Loi binomiale'
weight: 13
---
Cours du chapitre 13 : Loi binomiale.

{{< cards >}}
  {{< card link="./01_succession_epreuves_independantes" title="Succession d'épreuves indépendantes" icon="paper-clip">}}
  {{< card link="./02_schema_bernoulli_loi_binomiale" title="Schéma de Bernoulli et loi binomiale" icon="paper-clip">}}
  {{< card link="./03_seuils_intervalles" title="Seuils et intervalles" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Épreuves indépendantes** - univers : produit cartésien \({\Omega_1 \times \dots \times \Omega_n}\) ; la probabilité d’une issue est le produit des probabilités de ses composantes.

**Bernoulli** - épreuve à deux issues (succès de probabilité \(p\)) ; loi de Bernoulli : \({E = p}\), \({V = p(1 - p)}\). Schéma de Bernoulli : \(n\) épreuves de Bernoulli identiques et indépendantes.

**Loi binomiale \(\mathcal{B}(n ; p)\)** - loi du nombre de succès : \({P(X = k) = \binom{n}{k}p^k(1 - p)^{n - k}}\) ; \({E(X) = np}\), \({V(X) = np(1 - p)}\), \({\sigma(X) = \sqrt{np(1 - p)}}\).

**Seuils et intervalles** - probabilités cumulées \({P(X \leq k)}\) (calculatrice, tableur) ; seuil : plus petit \(k\) tel que \({P(X \leq k) \geq \alpha}\) ; intervalle : entiers \({a \leq b}\) tels que \({P(a \leq X \leq b) \geq \beta}\).
