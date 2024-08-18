const bossBabysRevenge = (s: string) => {
    let shot: number = 0; // count the time that Boss Baby was shot

    if (s === "") return "Bad Boy"; // case : empty string

    if (s.startsWith("R")) return "Bad Boy"; // case : Boss Baby initiate shot first

    if (s.endsWith("S")) return "Bad Boy";
    // This case means Boss Baby didn't revenge the last shot
    // Then output is Bad Boy
    // And we don't need to execute the loop

    for (const events of s) {
        if (events === "S") {
            shot++; // increase the count that Boss Baby must shot back
        } else if (events === "R") {
            if (shot > 0) shot--;
            // one shot have been revenged

            // if shot <= 0 means Boss Baby shoots extra shot
            // we don't have to do anything in this case
        } else return "Bad Boy";
        // handle the case Input contains characters other than S and R
        // Include s and r
    }

    return shot === 0 ? "Good Boy" : "Bad Boy"; // shot is 0 means all shots have been revenged
};
