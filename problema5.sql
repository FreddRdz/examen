/*
5.-  De las siguientes tablas, generar una consulta sql que identifique el(los) libros que al día
de hoy 30/07/2021, el alumno de nombre Sonia tiene prestado(s), que no ha regresado y su préstamo está vencido
*/

SELECT Nombre FROM 'PRESTAMO' INNER JOIN LIBRO ON PRESTAMO.Id_libro = LIBRO.Id WHERE Id_alumno = 3 and Entregado = 'false' and Fecha_prestamo <= "30/07/2021";