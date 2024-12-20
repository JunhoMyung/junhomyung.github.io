---
selected: '6.0'
title: 'Homogeneity-Based Transmissive Process To Model True and False News in Social Networks'
authors: 'Jooyeon Kim, Junho Myung, and Alice Oh'
collection: 'publications'
permalink: '/publications/2019-02-wsdm'
date: '2019-02-11'
venue: 'International Conference on Web Search and Data Mining (WSDM)'
type: 'conference'
summary: ''
venueurl: 'https://www.wsdm-conference.org/2019/'
paperurl: 'https://dl.acm.org/citation.cfm?id=3291009'
arxivurl: 'https://arxiv.org/abs/1811.09702'
codeurl: 'https://github.com/dongkwan-kim/HBTP'
dataurl: 'https://github.com/dongkwan-kim/HBTP/tree/master/data'
award: 'best paper'
---

An overwhelming number of true and false news stories are posted and shared in social networks, and users diffuse the stories based on multiple factors. Diffusion of news stories from one user to another depends not only on the stories' content and the genuineness but also on the alignment of the topical interests between the users. In this paper, we propose a novel Bayesian nonparametric model that incorporates homogeneity of news stories as the key component that regulates the topical similarity between the posting and sharing users' topical interests. Our model extends hierarchical Dirichlet process to model the topics of the news stories and incorporates Bayesian Gaussian process latent variable model to discover the homogeneity values. We train our model on a real-world social network dataset and find homogeneity values of news stories that strongly relate to their labels of genuineness and their contents. Finally, we show that the supervised version of our model predicts the labels of news stories better than the state-of-the-art neural network and Bayesian models.