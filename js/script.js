Regex 

\D - Não representa numeros (0 - 9)

\d

g

/^(\d{5})(\d)/ - tenho 2 grupos e o 1 { tem 5 digitos}

\w - palavras [a - z, A - z 0 - 9]
\W não -palavras
\s - espaço em branco
^ - inicio da string
$ - fim da string
. - qualquer caractere

{n} - exato o numero de vezes
{n,} - numero  ou mais vezes
{n,m} - entre n e m vezes
+ - 1 ou mais vezes
* - 0 ou mais  vezes
? - 0 ou 1 vezes


g - global ( todas as ocorrencias)
i - case insensitive
m - mult in line


Validação de email

const emailRegex = /^[\w,-]+@[\w,-]+\.\w$/
