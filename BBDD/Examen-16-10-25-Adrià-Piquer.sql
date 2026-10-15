-- MODELO C
-- EJERCICIO 1
SELECT p.titol , p.sinopsi 
FROM pellicules p 
WHERE p.titol LIKE "Toy Story%";
-- EJERCICIO 2
SELECT u.nom_usuari , u.cognom_usuari 
FROM usuaris u 
WHERE u.cognom_usuari LIKE "%a%a%" AND u.nom_usuari NOT LIKE "%a%" 
ORDER BY cognom_usuari , nom_usuari;
-- EJERCICIO 3
SELECT p.titol , p.duracio 
FROM pellicules p 
WHERE p.recaptacio IS NOT NULL AND p.pressupost IS NOT NULL
ORDER BY duracio DESC
LIMIT 10;
-- EJERCICIO 4
SELECT a.nom , a.cognoms 
FROM actors a 
JOIN repartiment r ON a.id_actor = r.id_actor
JOIN pellicules p ON r.id_pelicula = p.id_pelicula
JOIN categories c ON p.id_categoria = c.id_categoria
WHERE c.nom LIKE "Musical"
ORDER BY a.cognoms , a.nom;
-- EJERCICIO 5
SELECT u.nom_usuari , u.cognom_usuari 
FROM usuaris u 
JOIN pellicules p ON u.nom_usuari = p.titol 
WHERE u.nom_usuari LIKE p.titol 
ORDER BY p.titol;
-- EJERCICIO 6
SELECT p.titol , p.sinopsi
FROM pellicules p 
WHERE p.sinopsi LIKE "%aventura%familia%" OR p.sinopsi LIKE "%familia%aventura%"
ORDER BY p.id_pelicula;
-- EJERCICIO 7
SELECT * 
FROM pellicules p 
WHERE (p.any_estrena >2022) AND (p.pressupost IS NULL OR p.pais_origen NOT LIKE "Estats Units")
ORDER BY p.titol;
-- EJERCICIO 8
SELECT p.titol , r.personatge 
FROM pellicules p  
JOIN repartiment r ON p.id_pelicula = r.id_pelicula
JOIN actors a ON r.id_actor = a.id_actor
WHERE a.nom LIKE "Christian" AND a.cognoms LIKE "Bale" AND p.id_categoria =2
ORDER BY p.titol;
-- EJERCICIO 9
SELECT DISTINCT a.nom , a.cognoms 
FROM actors a 
LEFT JOIN repartiment r ON a.id_actor = r.id_actor
WHERE r.id_pelicula IS NULL
ORDER BY a.cognoms , a.nom;
-- EJERCICIO 10
SELECT u.nom_usuari , u.cognom_usuari 
FROM usuaris u 
LEFT JOIN valoracions v ON u.id_usuari = v.id_usuari
WHERE v.data_valoracio IS NULL
ORDER BY cognom_usuari , nom_usuari;