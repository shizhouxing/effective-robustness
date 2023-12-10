# Effective Robustness against Natural Distribution Shifts for Models with Different Training Data

This repository currently hosts the code for the [**website**](https://shizhouxing.github.io/effective-robustness/) of this paper.
The website contains an **interactive visualization** of
the *multi-ID effective robustness* proposed in this paper.
The web app is written with Node.js, React, and MUI, and the 3D visualization
plots are generated by plotly.

"Effective robustness" measures the extra out-of-distribution (OOD) robustness beyond what can be predicted from the in-distribution (ID) performance. Existing effective robustness evaluations typically use a single test set such as ImageNet to evaluate the ID accuracy. This becomes problematic when evaluating models trained on different data distributions, e.g., comparing models trained on ImageNet vs. zero-shot language-image pre-trained models trained on LAION. In this paper, we propose a new evaluation metric to evaluate and compare the effective robustness of models trained on different data. To do this, we control for the accuracy on multiple ID test sets that cover the training distributions for all the evaluated models. **Our new evaluation metric provides a better estimate of effective robustness when there are models with different training data. It may also explain the surprising effective robustness gains of zero-shot CLIP-like models exhibited in prior works that used ImageNet as the only ID test set, while the gains diminish under our new evaluation.**

See more details in our paper:

[**Effective Robustness against Natural Distribution Shifts for Models with Different Training Data**](https://arxiv.org/abs/2302.01381).
Zhouxing Shi, Nicholas Carlini, Ananth Balashankar, Ludwig Schmidt,
Cho-Jui Hsieh, Alex Beutel, Yao Qin.
In NeurIPS 2023.

Bibtex entry:
```bibtex
@article{shi2023effective,
  title={Effective Robustness against Natural Distribution Shifts for Models with Different Training Data},
  author={Shi, Zhouxing and Carlini, Nicholas and Balashankar, Ananth and Schmidt, Ludwig and Hsieh, Cho-Jui and Beutel, Alex and Qin, Yao},
  journal={Advances in Neural Information Processing Systems},
  volume={36},
  year={2023}
}
```

## Deploy the web app

Node.js is required. Install the dependencies by `npm i`.

Run the app in the development by `npm start`,
or build the app for production by `npm run build`.