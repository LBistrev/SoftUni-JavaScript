function matrix(curr_matrix) {
    let current = 0
    let result = []
    let second_result = []
    let is_magic = true
    for (let i = 0; i < curr_matrix.length; i++) {
        let innerArr = curr_matrix[i]
        
        for (let j = 0; j < innerArr.length; j++) {
            current += curr_matrix[i][j]    
            
        }
        result.push(current)
        current = 0

    }
    for (let i = 0; i < curr_matrix.length; i++) {
        for (let j = 0; j < curr_matrix[i].length; j++) {
            current += curr_matrix[j][i]
        }
        second_result.push(current)
        current = 0
    }
    
    for (item of result) {
        for (item2 of second_result) {
            if (item != item2) {
                is_magic = false
                break
            }
        }
    }
    console.log(is_magic)
}

matrix([[1, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

   matrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )

   matrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )