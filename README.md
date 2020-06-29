# Chord and Scale Finder

The musical chord and scale finder is capable of finding the musical notes that make up the following:
 
- Major Chord and Scale  
- Minor Chord and Scale  
- Diminished Chord 
- Augmented Chord  

The first inversion and second inversion can also be listed for each of the above chords.  

Developed using Object Oriented JavaScript using constructors, encapsulation, inheritance and polymorphism.

- Examples of polymorphism:
	- In Results.js line 1, the build() method is called. The class of the object stored in musicalElement will detetermine which version of the build() method to execute.
	- The build methods of major, minor, augmented, and diminished chords all implement the build() method of their superclass (defined in Chord.js lines 26 - 36) in addition to their own unique code.
	- Similarly, the build() methods of minor and major scales both implement the build method of their superclass (defined in Scale.js lines 3 - 17) in addition to their own unique code.
	- Go to MinorScale.js lines 3 - 13 and AugmentedChord.js lines 3 - 11 for examples of some of the subclass implemenations of build().

## Run Chord and Scale Finder
1.	Clone the files from this repository to your computer. Make sure that all of the files are in the same folder.
2.	Double-click on index.html
3.	The webpage should now be open in your browser  

### Input:
**Make selections from the following drop-downs:**
- **Root:**		Select the musical note that will be used as the root of the chord or scale (i.e. select “C” as the root if you want to find “C major chord”
- **Quality:**	Select Major, Minor, Augmented or Diminished if you are finding a chord.
		Select Major or Minor if you are finding a scale.
- **Type:**		Select Chord or Scale.
- **Inversion:**	Select Root, First, or Second.  This drop-down is only applicable to chords.  
<br>
**Click the “Submit” button**

### Output:

The output will display your selections and the associated results.  Chords will list the three musical notes that makeup the chord.  Scales will display the seven musical notes that makeup the scale.