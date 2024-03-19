def generate_latex(matrix, parentheses):
    matrice = r"\begin" + "{" + f"{parentheses}matrix" + "}\n"

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if j < len(matrix[i])-1:
                matrice += str(matrix[i][j]) + " & "
            else:
                matrice += str(matrix[i][j])
        if i < len(matrix)-1:
            matrice += r"\\" + "\n"
        else:
            matrice += "\n"

    matrice += r"\end" + "{" + f"{parentheses}matrix" + "}\n"
    return matrice
