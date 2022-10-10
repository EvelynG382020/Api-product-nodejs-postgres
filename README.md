*Curso de Backend con Node.js: Base de Datos con PostgreSQL*
Instalación de Docker
*docker-compose up -d postgres*
docker-compose down
docker-compose exec postgres bash (postegres desde el contenedor docker)
*psql -h localhost -d my_store -U evelyn*(para ingresar a nuestra db via terminal contenedor docker, para salir \q)
Dentro de la bd via terminal contenedor de docker revisamos las tablas con \d+ salir con exit
npm i pg
*docker-compose up -d pgadmin* (para levantar pg admin en docker)
Luego si quiero acceder en mi navegador localhost:5050 para ingresar a pgadmin
docker ps para ver el ip del pc y docker inspect con el ip xxxxx
npm i --save sequelize
npm i --save pg pg-hstore
Para usar los metodos que facilita este ORM
crear una carpeta db/models/user.model.js
Dentro de models/index.js quien se conectará con el ORM, se va a encargar de enviar la conexión a los modelos y hacer el mapeo, exportar la función para pasarlo y sea importado desde libs/sequelize/ hacemos la conexión
*Crear, actualizar y eliminar* Desde user.schema (validaciones de los campos con Joi)al crear al usuario con mail y password llega a route con su validación ok, luego va hacia el servicio con el cuerpo de la info, y con ese metodo en user.service, se recibe como arg y lo retorna, devuelve la info o data del mail y user creado.
Instalar mysql dentro de docker
Levantarlo dentro de docker *docker-compose up -d mysql*
driver para *mysql npm i --save mysql2*
npm i sequelize-cli --save-dev para hacer migraciones en ambiente de dev
heroku git:remote -a *nombre del proyecto en heroku*, luego heroku addons:create heroku-postgresql:*nombre del plan en heroku*
