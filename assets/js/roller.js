async function roll(url){
    let n = roller.length;
    let i = 0
    while(i<n){
        fetch(url,{
            body: roller[i],
            method: "POST",
            headers: {
                contentType: "application/json"
            }
        })
        i+=1
    }
}


const roller = [
".....................|OFFo oON                  |.....................................",
".....................| .----------------------. |.....................................",
".....................| |  .----------------.  | |.....................................",
".....................| |  |                |  | |.....................................",
".....................| |))|    SHALL WE    |  | |.....................................",
".....................| |  |     PLAY A     |  | |.....................................",
".....................| |  |      GAME?     |  | |.....................................",
".....................| |  |                |  | |.....................................",
".....................| |  |                |  | |.....................................",
".....................| |  |                |  | |.....................................",
".....................| |  '----------------'  | |.....................................",
".....................| |__GAME BOY____________/ |.....................................",
".....................|          ________        |.....................................",
".....................|    .    (_HAXXOR_)       |.....................................",
".....................|  _| |_   ''''''''   .-.  |.....................................",
".....................|-[_   _]-       .-. (   ) |.....................................",
".....................|   |_|         (   ) '-'  |.....................................",
".....................|    '           '-'   A   |.....................................",
".....................|                 B        |.....................................",
".....................|          ___   ___       |.....................................",
".....................|         (___) (___)  ,., |.....................................",
".....................|        select start ;:;: |.....................................",
".....................|                    ,;:;' /.....................................",
".....................|                   ,:;:'.'.....................................",
".....................'-----------------------`.....................................",
]