<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar comando
```
yarn install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el arcivo __.env.template__ y renombrar la copa a __.end__
```
.end
```

6. Llenar las variables de entorno definidas en el ```.env```


7. ejecutar la aplicación en ```dev```
```
yarn start:dev
```

8. Reconstruir base de datos con la semilla
```
http://localhost:8080/api/v2/seed
```

## Stack usado
* MongoDB
* Nest JS