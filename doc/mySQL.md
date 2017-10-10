Curso de php


##### Conectarse a MySQL desde la terminal de Ubuntu #####

# Acceso a la consola MySQL

mysql -u username -p

Donde el servidor nos solicitará la clave perteneciente al "username" escrito, en el caso de usar 
una cuenta de Superusuario la sintaxis es:

mysql -u root -p


------------- # Ejemplo # -------------------
# Mostrar las bases de datos existentes
mysql> show databases;

##### CREAR BD Y TABLAS
# Crear una base de datos 
mysql> CREATE DATABASE pruebaBD;

# Usar la base de datos creada
mysql> USE pruebaBD;
Database changed

# Crear tabla en la base de datos
mysql> CREATE TABLE nombreTabla (nombreCampo1 Tipo AUTO_INCREMENT, nombreCampo2 Tipo(100) NOT NULL, nombreCampo3 VARCHAR(100) NOT NULL,
PRIMARY KEY(nombreCampo1));

mysql> CREATE TABLE usuarios (id INT AUTO_INCREMENT, nombre VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL, PRIMARY KEY(id));
Query OK, 0 rows affected (0.27 sec)

##### MOSTRAR
# Muestra las Tablas creadas

mysql> show tables;                                                                                      
| Tables_in_pruebaBD |
+--------------------+
| usuarios           |
+--------------------+
1 row in set (0.00 sec)

# Muestra la descripcion de los campos de la tabla  
mysql> describe nombreTabla;

mysql> describe usuarios;
+--------+--------------+------+-----+---------+----------------+
| Field  | Type         | Null | Key | Default | Extra          |
+--------+--------------+------+-----+---------+----------------+
| id     | int(11)      | NO   | PRI | NULL    | auto_increment |
| nombre | varchar(100) | NO   |     | NULL    |                |
| email  | varchar(100) | NO   |     | NULL    |                |
+--------+--------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)


##### INSERTAR
# Insertar un registro a la tabla usuarios
mysql> INSERT INTO nombreTabla values(valorAutoIncrementable,valorCampo1, valorCampo2);

mysql> INSERT INTO usuarios values(null,'viktor hugo', 'victorHbenitez85@hotmail.com');
Query OK, 1 row affected (0.08 sec)

# Insertar un registro indicando los campos ;
INSERT INTO usuario (id, nombre) values(null, 'HUGO BENITEZ');

# Muestra el contenido de la base de datos
mysql> SELECT * FROM usuarios;
Empty set (0.00 sec)

##### MODIFICAR
mysql> UPDATE nombreTabla SET campoCambiar= 'DatoIngresar' WHERE id = 2;  //WHERE id = 2 dato que coincida con el existente  

mysql> UPDATE usuarios SET nombre= 'Julio Cesar' WHERE id = 2;
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

##### FILTROS MOSTRAR DATOS EN CONSOLA

	##### MOSTRAR CAMPOS ESPECIFICOS 
mysql> SELECT nombreCampo, nombreCAmpo2 from usuarios;
+-----------------+
| nombre          |
+-----------------+
| viktor hugo     |
| Julio Cesar     |
| Manuel Gonzalez |
+-----------------+
3 rows in set (0.00 sec)
	
	##### MOSTRAR CAMPOS ESPECIFICOS
	% = cualquier caractes
mysql> SELECT * FROM usuarios WHERE nombreCampo LIKE 'v%'; selecciona de la tabla usuariop donde el Campo sea como 'empieze con v  y siga cualquier caracter'

mysql> SELECT * FROM usuarios WHERE nombre LIKE 'v%';
+----+-------------+------------------------------+
| id | nombre      | email                        |
+----+-------------+------------------------------+
|  1 | viktor hugo | victorHbenitez85@hotmail.com |
+----+-------------+------------------------------+
1 row in set (0.00 sec)

	##### MOSTRAR REGISTROS DE FORMA ASCENDENTE
	##### mysql> SELECT * FROM nombreTabla ORDER BY nombreCampo ASC;
	
	mysql> SELECT * FROM usuarios ORDER BY nombre ASC;
+----+-----------------+------------------------------+
| id | nombre          | email                        |
+----+-----------------+------------------------------+
|  2 | Julio Cesar     | juliocesar@hotmail.com       |
|  3 | Manuel Gonzalez | manuelChik@hotmail.com       |
|  1 | viktor hugo     | victorHbenitez85@hotmail.com |
+----+-----------------+------------------------------+
3 rows in set (0.00 sec)

	mysql> SELECT * FROM usuarios ORDER BY nombre DESC;
+----+-----------------+------------------------------+
| id | nombre          | email                        |
+----+-----------------+------------------------------+
|  1 | viktor hugo     | victorHbenitez85@hotmail.com |
|  3 | Manuel Gonzalez | manuelChik@hotmail.com       |
|  2 | Julio Cesar     | juliocesar@hotmail.com       |
+----+-----------------+------------------------------+
3 rows in set (0.00 sec)

	##### MOSTRAR REGISTROS LIMITANDO EN NUMERO DE REGISTROS MOSTRADOS
	##### mysql> SELECT * FROM nombreTabla LIMIT 2;

mysql> SELECT * FROM usuarios LIMIT 2;
+----+-------------+------------------------------+
| id | nombre      | email                        |
+----+-------------+------------------------------+
|  1 | viktor hugo | victorHbenitez85@hotmail.com |
|  2 | Julio Cesar | juliocesar@hotmail.com       |
+----+-------------+------------------------------+
2 rows in set (0.00 sec)

##### ELIMINAR REGISTROS
##### mysql> DELETE FROM nombreTabla WHERE nombreCampo = datoCampo ;

mysql> DELETE FROM usuarios WHERE id = 2;
Query OK, 1 row affected (0.05 sec)


##### SALIR DE LA CONSOLA
quit;

