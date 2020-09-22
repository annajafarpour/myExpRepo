/* createInstruction builds the sequence of your instructions. each instruction slide
is an object to be pushed to the timeline. You'll mainly have to replace the value for
the stimulus property. The type will be "html-button-response" if you're using a button
or "html-keyboard-response" for keys. Check jsPsych to see more configurations. */

const createInstructions = function() {
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><h1>Simple RLWM task demo</h1><br><br><p>In this study, you will\
  see images on the screen. When you see an image appear, press the J, K, or L key to respond\
  to the image. Your goal is to learn which key corresponds to which image.</p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>After you press a key, you will receive feedback on whether\
  you pressed the correct key for that image. Specifically, you will receive <span style="color:green;">+1</span> or <span style="color:green;">0</span> point if you were\
  correct. The probability of getting a point is variable. If you select a wrong key, you will get no point and will see <span style="color:red;">0</span>. There is only one correct key per image.</p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>You have 1 second to respond. If you don't respond in time, it \
  will be counted as a loss. Try to respond as quickly and accurately as possible!</p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p> You will see the images to learn\
  at the beginning of each block – take some time to identify the images before the block begins.</p></div>`+CONTINUE,
  choices: [32],
});
}
