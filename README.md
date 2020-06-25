# Chord and Scale Finder

The musical chord and scale finder is capable of finding the musical notes that make up the following:
<br/>   
- Major Chord and Scale  
- Minor Chord and Scale  
- Diminished Chord and Scale 
- Augmented Chord and Scale  

The first inversion and second inversion can also be listed for each of the above chords.  

Developed using Object Oriented JavaScript using constructors, encapsulation, inheritance and polymorphism.

- Examples of polymorphism:
	- In Results.js line 3, the build() method is called. The type of object stored in musicalElements[i] will detetermine which version of the build() method to execute.
	- The build methods of major, minor, augmented, and diminished chords all implement the build() method of their superclass (defined in Chord.js) in addition to their own unique code
		- Go to Chord.js lines 14 - 29 
	- Similarly, the build() methods of minor and major scales both implement the build method of their superclass (defined in Scale.js) in addition to their own unique code
		- Go to Scale.js lines 3 - 18
	- Go to MinorScale.js lines 3 - 13 and AugmentedChord.js lines 3 - 9 for examples of some of the subclass implemenations of build()
<br/>

## Run Chord and Scale Finder  

1. Copy all of the files from this repository to your computer. Make sure that all of the files are in the same folder. 
2. Double-click on index.html
3. The webpage should now be open in your browser

### Output:

**Chords** are listed first.
<br/>  
-	There will be one line for each type of chord (major, minor, diminished, augmented and the associated inversions).  
-	Each line will contain the three musical notes that makeup the chord.  
-	For the purpose of this run, C will be the only note that displays all the chords and inversion types.  All other notes will only display major and minor chords  

The major and minor chords will be listed for each musical note (C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Ab, B).  

Example:  
- C  Major Chords:  C, E, G  
- C  Minor Chords:  C, D#/Eb, G  
- C# Major Chords:  C#/Db, F, G#/Ab  
- C# Minor Chords:  C#/Db, E, G#/Ab  
- D  Major Chords:  D, F#/Gb, A  
- D  Minor Chords:  D, F, A
- etc.  

**Scales** will be listed next with the same format as the Chords.  

Each line will contain the seven musical notes that makeup the scale.  

Example:  
- C  Major Scale:  C, D, E, F, G, A, B  
- C  Minor Scale:  C, D, D#/Eb, F, G, G#/Ab, A#/Bb  
- C# Major Scale:  C#/Db, D#/Eb, F, F#/Gb, G#/Ab, A#/Bb, C  
- C# Minor Scale:  C#/Db, D#/Eb, E, F#/Gb, G#/Ab, A, B  
- D  Major Scale:  D, E, F#/Gb, G, A, B, C#/Db  
- D  Minor Scale:  D, E, F, G, A, A#/Bb, C  
- etc.  