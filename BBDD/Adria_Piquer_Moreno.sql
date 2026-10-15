-- ex1
SELECT CONCAT(IFNULL(g.nom,''), ' ',IFNULL(u.nomUsuari,''), ' ',IFNULL(u.cognom1Usuari,''), ' ', IFNULL(u.cognom2Usuari,'') NomCompletYCurs
FROM usuaris u
JOIN grups g ON g.tutor = u.idUsuari 
ORDER BY LENGTH(NomCompletYCurs)
-- ex2

-- ex3

-- ex4
SELECT u.nomUsuari , u.cognom1Usuari , u.cognom2Usuari 
FROM usuaris u 
WHERE u.idUsuari NOT IN (SELECT r2.idUsuari 
					FROM registre r2
					WHERE Moment BETWEEN '2023-06-09' AND '2023-06-10')
ORDER BY u.cognom1Usuari, u.cognom2Usuari, u.nomUsuari

-- ex5
SELECT u.idUsuari , u.nomUsuari , u.cognom1Usuari , ROUND(AVG(q.nota1c),1) nota
FROM usuaris u 
JOIN qualificacions q ON u.idUsuari = q.idalumne
-- ex6

-- ex7
(SELECT a.nomaula nom , 'AULA' Tipus
FROM aules a )
UNION
(SELECT c.nom nom, 'CICLE' Tipus
FROM cicles c )
UNION
(SELECT g.nom nom, 'GRUP' Tipus
FROM grups g )

-- ex8

-- ex9
SELECT u.idUsuari , u.nomUsuari , u.cognom1Usuari , u.cognom2Usuari , u.dataNaixement , u.saldo  
FROM usuaris u 
JOIN registre r ON r.idUsuari = u.idUsuari 
WHERE (u.dataNaixement LIKE "2000-%" OR u.saldo > 90) AND (r.Moment LIKE "2023-03-10%") 
ORDER BY dataNaixement , cognom1Usuari , cognom2Usuari , nomUsuari 

-- ex10
SELECT u.nomUsuari , u.cognom1Usuari , u.cognom2Usuari 
FROM usuaris u
WHERE u.ultimAcces = null
ORDER BY cognom1Usuari , cognom2Usuari , nomUsuari 