```markdown
# Users API

Esta es una API para gestionar usuarios, construida con NestJS y TypeORM.

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Configurar la base de datos en el archivo `ormconfig.json` o en el módulo `AppModule`:
   ```json
   {
     "type": "mysql",
     "host": "localhost",
     "port": 3306,
     "username": "root",
     "password": "password",
     "database": "test",
     "entities": ["dist/**/*.entity{.ts,.js}"],
     "synchronize": true
   }
   ```

4. Iniciar la aplicación:
   ```bash
   npm run start
   ```

## Endpoints

### Crear un usuario

- **URL**: `/users`
- **Método**: `POST`
- **Descripción**: Crea un nuevo usuario.
- **Cuerpo de la solicitud**:
  ```json
  {
    "username": "nombre_de_usuario",
    "password": "contraseña",
    "auth_strategy": "estrategia_de_autenticación" // Opcional
  }
  ```
- **Respuesta**:
  ```json
  {
    "id": 1,
    "username": "nombre_de_usuario",
    "password": "contraseña",
    "created_at": "2023-01-01T00:00:00.000Z",
    "auth_strategy": "estrategia_de_autenticación"
  }
  ```

### Obtener todos los usuarios

- **URL**: `/users`
- **Método**: `GET`
- **Descripción**: Obtiene una lista de todos los usuarios.
- **Respuesta**:
  ```json
  [
    {
      "id": 1,
      "username": "nombre_de_usuario",
      "password": "contraseña",
      "created_at": "2023-01-01T00:00:00.000Z",
      "auth_strategy": "estrategia_de_autenticación"
    },
    ...
  ]
  ```

### Obtener un usuario por ID

- **URL**: `/users/:id`
- **Método**: `GET`
- **Descripción**: Obtiene un usuario por su ID.
- **Respuesta**:
  ```json
  {
    "id": 1,
    "username": "nombre_de_usuario",
    "password": "contraseña",
    "created_at": "2023-01-01T00:00:00.000Z",
    "auth_strategy": "estrategia_de_autenticación"
  }
  ```

### Actualizar un usuario

- **URL**: `/users/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza un usuario por su ID.
- **Cuerpo de la solicitud**:
  ```json
  {
    "username": "nuevo_nombre_de_usuario",
    "password": "nueva_contraseña",
    "auth_strategy": "nueva_estrategia_de_autenticación" // Opcional
  }
  ```
- **Respuesta**:
  ```json
  {
    "affected": 1
  }
  ```

### Eliminar un usuario

- **URL**: `/users/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un usuario por su ID.
- **Respuesta**:
  ```json
  {
    "affected": 1
  }
  ```

## Estructura del Proyecto

- **src/**
  - **users/**
    - **dto/**
      - `create-user.dto.ts`
      - `update-user.dto.ts`
    - `user.entity.ts`
    - `users.controller.ts`
    - `users.module.ts`
    - `users.service.ts`
  - `app.module.ts`

## Contribuir

1. Hacer un fork del proyecto.
2. Crear una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realizar los cambios necesarios y hacer commit (`git commit -am 'Agregar nueva funcionalidad'`).
4. Hacer push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crear un nuevo Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
```