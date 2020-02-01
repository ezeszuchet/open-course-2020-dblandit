# open-course-2020-dblandit
Tp ApiRest DbLAndIt

## Listar los cursos

Lista los cursos con los filtros ingresados

**ENDPOINT** : `GET` `/cursos`

**Query Params**


**Opcional:**

`duracion=[number]`

`anio=[number]`


## Crear los cursos

Crea un curso

**ENDPOINT** : `POST` `/cursos`


## Eliminar los cursos

Elimina un curso

**ENDPOINT** : `DELETE` `/cursos/:id`

## Listar alumnos de un curso

Lista todos los alumnos de un mismo curso

**ENDPOINT** : `GET` `/cursos/:id/alumnos`

## Listar alumno con nota mas alta

Lista el alumno con nota mas alta de un curso

**ENDPOINT** : `GET` `/cursos/:id/nota`
