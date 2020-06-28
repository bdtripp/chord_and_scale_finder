MusicalElement.MusicalElementType = {
    MAJOR_CHORD: MajorChord,
    MINOR_CHORD: MinorChord,
    DIMINISHED_CHORD: DiminishedChord,
    AUGMENTED_CHORD: AugmentedChord,
    MAJOR_SCALE: MajorScale,
    MINOR_SCALE: MinorScale
};

if(Object.freeze !== undefined)
    Object.freeze(MusicalElement.MusicalElementType);