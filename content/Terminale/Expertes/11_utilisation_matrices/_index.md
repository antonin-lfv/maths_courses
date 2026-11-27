---
title: 'Utilisation des matrices'
weight: 11
---
Cours du chapitre 11 : Utilisation des matrices.

{{< cards >}}
  {{< card link="./01_suites_matrices" title="Suites de matrices" icon="paper-clip">}}
  {{< card link="./02_chaines_markov" title="Chaînes de Markov" icon="paper-clip">}}
  {{< card link="./03_representation_chaine_markov_suite_matrices" title="Chaîne de Markov et suite de matrices" icon="paper-clip">}}
  {{< card link="./04_exercices" title="Exercices" icon="pencil">}}
{{< /cards >}}

#### Fiche résumé du chapitre

**Suites de matrices** - \((U_n)\) converge si chacune de ses suites coefficients converge ; la limite est la matrice des limites.

**Récurrences** - si \({U_{n+1} = AU_n}\), alors \({U_n = A^nU_0}\). Si \({U_{n+1} = AU_n + B}\) et \((U_n)\) converge vers \(U\), alors \({U = AU + B}\) (état stable) ; avec \(C\) tel que \({C = AC + B}\), \({V_n = U_n - C}\) vérifie \({V_{n+1} = AV_n}\).

**Graphe probabiliste** - graphe orienté pondéré, poids dans \([0\,;\,1]\), somme des poids issus de chaque sommet égale à 1 ; matrice de transition \(P\) (\(p_{ij}\) = poids de \(i\) vers \(j\)), lignes de somme 1.

**Chaîne de Markov** - \({p_{ij} = P_{(X_n = i)}(X_{n+1} = j)}\) indépendant de \(n\). La probabilité de passer de \(i\) à \(j\) en \(n\) étapes est le terme \(ij\) de \(P^n\).

**Distributions** - \({\pi_{n+1} = \pi_nP}\), \({\pi_n = \pi_0P^n}\). Si une puissance \(P^n\) n’a aucun 0, \((\pi_n)\) converge vers la distribution invariante \(\pi\) (\({\pi = \pi P}\), somme des termes 1), indépendante de \(\pi_0\).
