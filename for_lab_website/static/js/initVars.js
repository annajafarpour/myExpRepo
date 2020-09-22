/* Where your experiment parameters will be declared. This JS file will need to be
imported before your other JS files containing your functions, especially if those
functions rely on these variables as globals. */

const IS_DEBUG = false;

// experiment parameters
const KEYS = [74,75,76]; // numeric codes for j,k,l
const SETSIZES =[2,3,4,5,6];
const NUM_BLOCKS = 19; //2;
const NUM_STIM_REPS = 12; //13;
const NUM_CONDS = 10;
const FOLDERS = [2,3]; // names of your image folders

// trial timing and timeout parameters
let FB_DUR = 500; // feedback duration
let TRIAL_DUR = 1000; // trial duration before timeout
let FIX_DUR = 500;
const imgP = 'static/img/';

// feedback/timeout mesages
const TO_MSG = '<div class="exp"><p class="center fb">You took too long to respond!</p></div>';
const COR_FB = '<div class="exp"><p class="center fb cor">+1</p></div>';
const INCOR_FB = '<div class="exp"><p class="center fb incor">0</p></div>';

const CONTINUE = '<p class="continue">[Press SPACE to continue]</p>'; // instruction page footer
const END_LINK = "https://experiments-ccn.berkeley.edu/" // if participants need to be redirected to a page to obtain credit

// string array of all img files, each element is the path of an img to import
// this is used for preloading
const IMGS = [];
for (f = 0; f < FOLDERS.length; f++) {
  for (i = 1; i < 7; i++) {
    IMGS.push(`${imgP}images${FOLDERS[f]}/image${i}.png`);
  }
}
console.log(IMGS);

// this is a fixation trial
let fixation = ({
    type: "html-keyboard-response",
    stimulus: "<div class='exp'><p class='fix center'>+</p></div>",
    choices: jsPsych.NO_KEYS,
    trial_duration: FB_DUR,
  })
