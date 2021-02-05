// WELCOME 
	var general_instructions = { //  Experiment presentation 
 	type: 'instructions',
    pages: ['<p>Welcome to our experiment</p>'+ 
	'<p>During this experiment, you will have to complete a memory task.</p>' + 
	'<p>This a working memory task and involves repeating numbers.</p>' + 
	'<p> Click "Next" to start.</p>'],
	show_clickable_nav: true, // show the button "Next"
	button_label_next: 'Next' // label this button as 'Next'
	};

// DIGIT SPAN FORWARD 
	var instructions_DSF = { // Instructions of the Digit Span Forward
 	type: 'instructions',
    pages: ['<p>You are going to hear some numbers.</p>'+ 
	'<p>Listen carefully, they will be said only once. </p>' + 
	'<p>When you are invited to do so, please type the numbers you have just heard using the numeric keyboard only (e.g:123).</p>' +
	'<p>Type them in the exact same order that they have been said.</p>' + 
	'<p>Click "Next" to start.</p>' ],
	show_clickable_nav: true, 
	button_label_next: 'Next'
	};

	var DSF_audio_stimuli = [  // audio recording of each items, read at a peace of 1 number per second 
		//these items are a random strings of numbers, increasing by one number every two items. 
		// if willing to use different items, upload you audio files in your task folder and change the files below with the names your own files. 
     { stimulus: "DSF_1.1.wav"},
     { stimulus: "DSF_1.2.wav"}, 
	 { stimulus: "DSF_2.2.wav"}, 
	 { stimulus: "DSF_3.1.wav"}, 
	 { stimulus: "DSF_3.2.wav"}, 
	 { stimulus: "DSF_4.1.wav"}, 
	 { stimulus: "DSF_4.2.wav"}, 
	 { stimulus: "DSF_5.1.wav"}, 
	 { stimulus: "DSF_5.2.wav"}, 
	 { stimulus: "DSF_6.1.wav"}, 
	 { stimulus: "DSF_6.2.wav"}, 
	 { stimulus: "DSF_7.1.wav"}, 
	 { stimulus: "DSF_7.2.wav"}, 
   	 { stimulus: "DSF_8.1.wav"}, 
   	 { stimulus: "DSF_8.2.wav"}	
	 ];
 
 	var DSF_audio_display = { // variable that will read the DSF audio
 	type: 'audio-keyboard-response',  // plugin that reads audio files
 	stimulus: jsPsych.timelineVariable('stimulus'), // says that the stimulus corresponds to the 'stimulus' of the'timeline_variable below, it's 'DSF_audio_stimuli'
 	choices: jsPsych.NO_KEYS, // No keys are allowed to answer this question
 	trial_ends_after_audio: true // because it ends ones the audio file is over
 	};
 
	 var DSF_type_answer = { // variable for participant's answer 
	   type: 'survey-text',
	   questions: [
	     {prompt: '<p>Type the numbers you just heard.</p>'+ 
		   '<p>Click on "Next" when you are done. </p>?'}, 
	     ],
	   button_label: "Next"
 	};
 
	 var DSF_trials = { // create the DSF a trial 
 		 timeline :  [DSF_audio_display, DSF_type_answer], // a DSF trial is an audio_display and then the participant type_answer
		 	// I don't put the Instruction_DSF in the timeline because I do not want the instructions to be repeated at each trial. 
	 	timeline_variables: DSF_audio_stimuli // the trial reapeats to display all DSF_ audio_stimuli one after the other, stops after the last one DSF_7.2.wav
	 }; 
	 
	
// END OF THE EXPERIMENT 
	var thanks = {
	 	type: 'instructions',
	    pages: ['<p>Thank you for participating in this experiment.</p>'+ 
		'<p>Please click on "End" and let the experimenter know that you are done.</p>'],
		show_clickable_nav: true,
		button_label_next: 'End'
	};
	

// Put all the audios and images under the same variable.  
var audio = ['DSF_1.1.wav', 
		'DSF_1.2.wav', 
		'DSF_2.1.wav', 
		'DSF_2.2.wav', 
		'DSF_3.1.wav', 
		'DSF_3.2.wav', 
		'DSF_4.1.wav', 
		'DSF_4.2.wav', 
		'DSF_5.1.wav', 
		'DSF_5.2.wav', 
		'DSF_6.1.wav', 
		'DSF_6.2.wav', 
		'DSF_7.1.wav', 
		'DSF_7.2.wav',
		'DSF_8.1.wav', 
		'DSF_8.2.wav'
];
 
var images = ['Speak.png'
];

 
jsPsych.init({
    timeline: [general_instructions, instructions_DSF, DSF_trials, thanks ],
    preload_audio: audio, // better to load all external files before the experiment starts
	preload_images: images,
	max_load_time: 120000,
    display_element: 'display_stage',
	on_finish:  function() {
    jsPsych.data.displayData();
  }

})
