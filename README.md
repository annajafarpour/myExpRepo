# myExpRepo
Template repository for javascript experiments for CCN Lab. There are 2 flavours of experiments: ones that go directly on the lab's experiment website, and ones that will be served by psiTurk. The task is a short demo of the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3390186/">classic RLWM experiment</a>. 

## for_lab_website: WMRL probabilistic reward
This folder contains files and folders needed for an experiment that will be hosted on our lab website. It contains:
* exp.html: the page of the actual experiment
* save_data.php: the php file that will save data on the server-end
* data: a folder that will data saved intermittently (currently, most are saved by block to minimize network/memory demands)
* static: folder that contains needed CSS/Javascript files, Javascript libraries, image files for stimuli, CSV sequences to import:
  * css: contains CSS files; minimally jspsych.css (comes with jsPsych) and style.css (custom CSS). Note: this jspsych.css is not the original file that cmoes with the whole jspsych package
  * csv: contains csvs of sequences to import for the experiment
  * img: contains image files (pngs) of stimuli to import for the experiment
  * js: contains Javascript files written for the experiment to help with the logic of experiment and trial structure.
  * jspsych: contains jspsych.js and other jspsych plugins that create basic trial objects
  * lib: contains other Javascript libraries supporting the experiment
Every folder also has a blank index.html. This file prevents visitors from seeing all file content; without it they would be able to navigate through the directory.

To run this exp.html locally, you'll need to download a text editor like <a href="http://brackets.io">brackets</a> and use its live preview option.

## for_psiturk
This folder contains files and folders needed for an experiment that will run with psiTurk. It contains:
* config.txt: a file that configures your psiturk server. Currently, it is blank - you'll need to provide AWS and psiTurk crendentials for pstiurk to actually run. Your MTurk task repository MUST BE SET TO PRIVATE. Otherwise these credentials will be publicly visible for people to hack us and use our money. See <a href="https://docs.google.com/document/d/1Ne_pMjYCk4i_DjLtZProz2ABwm9oQhBkNdZF2M2n8lc/edit">this guide</a> for how to set up psiturk.
* templates: a folder containing different HTML files, including the page of the actual experiment (exp.html)
  * exp.html will be different from the lab website counterpart due to its psiTurk dependencies.
  * questionnaire.html contains a basic demographic questionnaire to complete at the end of the behavioral task.
* static: folder that contains needed CSS/Javascript files, Javascript libraries, image files for stimuli, CSV sequences to import
Every folder also has a blank index.html. This file prevents visitors from seeing all file content; without it they would be able to navigate through the directory. The contents are almost the exact same, except for these folders:
  * js: additionally contains a questionnaire.js file that will pull up the questionnaire.html page and record what subjects input onto the page
  * lib: contains psiturk.js and other files that it relies on, like utils.js and bootstrap.js

To run this exp.html locally, you'll need to install psiTurk, then run psTturk in the for_psiturk folder from your terminal. 
